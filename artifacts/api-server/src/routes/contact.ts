import { createHmac } from "node:crypto";
import { Router, type IRouter } from "express";
import { SubmitContactRequestBody, SubmitContactRequestResponse } from "@workspace/api-zod";
import { db, contactMessagesTable } from "@workspace/db";
import { and, count, eq, gte, sql } from "drizzle-orm";
import { notifyContactInbox } from "../lib/contact-notifications";

const router: IRouter = Router();
const secret = process.env.SESSION_SECRET;
if (!secret) throw new Error("SESSION_SECRET is required for contact form rate limiting");

function hash(value: string): string {
  return createHmac("sha256", secret!).update(value).digest("hex");
}

function sameOrigin(origin: string | undefined, host: string | undefined, protocol: string): boolean {
  if (!origin || !host) return false;
  try {
    const parsed = new URL(origin);
    return parsed.origin === `${protocol}://${host}` && (parsed.protocol === "https:" || parsed.protocol === "http:");
  } catch {
    return false;
  }
}

router.post("/contact", async (req, res): Promise<void> => {
  res.set("Cache-Control", "no-store");
  if (!sameOrigin(req.get("origin"), req.get("host"), req.protocol)) {
    res.status(403).json({ error: "Invalid request origin" });
    return;
  }
  if (!req.is("application/json")) {
    res.status(415).json({ error: "JSON is required" });
    return;
  }
  if (typeof req.body !== "object" || req.body === null || Array.isArray(req.body) ||
    Object.keys(req.body).some((key) => !["requestId", "name", "email", "company", "message", "website"].includes(key))) {
    res.status(400).json({ error: "Invalid form input" });
    return;
  }

  const parsed = SubmitContactRequestBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid form input" });
    return;
  }
  const { requestId, website } = parsed.data;
  const name = parsed.data.name.trim();
  const email = parsed.data.email.trim().toLowerCase();
  const company = parsed.data.company?.trim() || null;
  const message = parsed.data.message.trim();
  if (!name || !message || website?.trim() || /[\r\n]/.test(email)) {
    res.status(400).json({ error: "Invalid form input" });
    return;
  }

  const ipHash = hash(`ip:${req.ip ?? "unknown"}`);
  const emailHash = hash(`email:${email}`);
  const matchesSubmission = (prior: Pick<typeof contactMessagesTable.$inferSelect,
    "name" | "email" | "company" | "message">) =>
    prior.name === name && prior.email === email &&
    prior.company === company && prior.message === message;
  const result = await db.transaction(async (tx) => {
    const [prior] = await tx.select({
      name: contactMessagesTable.name,
      email: contactMessagesTable.email,
      company: contactMessagesTable.company,
      message: contactMessagesTable.message,
    })
      .from(contactMessagesTable).where(eq(contactMessagesTable.requestId, requestId)).limit(1);
    if (prior) return { kind: matchesSubmission(prior) ? "duplicate" as const : "conflict" as const };

    // Serialize requests sharing an IP or email so simultaneous posts cannot
    // bypass the database-backed rate limit across multiple server instances.
    for (const key of [ipHash, emailHash].sort()) {
      await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${key}))`);
    }
    const now = Date.now();
    const [perIp] = await tx.select({ total: count() }).from(contactMessagesTable)
      .where(and(eq(contactMessagesTable.ipHash, ipHash),
        gte(contactMessagesTable.createdAt, new Date(now - 60 * 60 * 1000))));
    const [perEmail] = await tx.select({ total: count() }).from(contactMessagesTable)
      .where(and(eq(contactMessagesTable.emailHash, emailHash),
        gte(contactMessagesTable.createdAt, new Date(now - 24 * 60 * 60 * 1000))));
    if ((perIp?.total ?? 0) >= 5 || (perEmail?.total ?? 0) >= 10) {
      return { kind: "limited" as const };
    }
    const [saved] = await tx.insert(contactMessagesTable).values({
      requestId, name, email, company, message, ipHash, emailHash,
    }).onConflictDoNothing({ target: contactMessagesTable.requestId }).returning();
    if (saved) return { kind: "saved" as const, saved };
    const [existing] = await tx.select({
      name: contactMessagesTable.name,
      email: contactMessagesTable.email,
      company: contactMessagesTable.company,
      message: contactMessagesTable.message,
    }).from(contactMessagesTable).where(eq(contactMessagesTable.requestId, requestId)).limit(1);
    return { kind: existing && matchesSubmission(existing) ? "duplicate" as const : "conflict" as const };
  });

  if (result.kind === "conflict") {
    res.status(409).json({ error: "This request ID was already used for a different message" });
    return;
  }
  if (result.kind === "limited") {
    res.set("Retry-After", "3600");
    res.status(429).json({ error: "Too many messages. Please try again later." });
    return;
  }

  if (result.kind === "saved") {
    try {
      if (await notifyContactInbox(result.saved)) {
        await db.update(contactMessagesTable).set({ notificationSentAt: new Date() })
          .where(eq(contactMessagesTable.id, result.saved.id));
      } else {
        req.log.warn("Contact message stored without email notification");
      }
    } catch {
      // The message is still safely in the database. Never include submitted
      // content, the private recipient, or provider errors in public responses.
      req.log.warn("Contact message stored but email notification failed");
    }
  }

  res.status(201).json(SubmitContactRequestResponse.parse({ received: true }));
});

export default router;