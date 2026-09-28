import { clerkClient, getAuth } from "@clerk/express";
import { db, contactMessagesTable, type ContactMessage } from "@workspace/db";
import {
  ListOwnerInquiriesQueryParams, ListOwnerInquiriesResponse,
  RetryOwnerInquiryParams, RetryOwnerInquiryResponse,
  ReviewOwnerInquiryParams, ReviewOwnerInquiryResponse,
} from "@workspace/api-zod";
import { and, desc, eq, isNull, ne, or } from "drizzle-orm";
import { Router, type IRouter, type Request, type Response, type NextFunction } from "express";
import { notifyContactInbox } from "../lib/contact-notifications";

const router: IRouter = Router();

router.use(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.set("Cache-Control", "private, no-store");
  const userId = getAuth(req).userId;
  if (!userId) {
    res.status(401).json({ error: "Sign-in required" });
    return;
  }
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL?.trim().toLowerCase();
  if (!recipient) {
    res.status(503).json({ error: "Owner access is not configured" });
    return;
  }
  const user = await clerkClient.users.getUser(userId);
  const primary = user.emailAddresses.find((entry) => entry.id === user.primaryEmailAddressId);
  if (!primary || primary.verification?.status !== "verified" ||
      primary.emailAddress.toLowerCase() !== recipient) {
    res.status(403).json({ error: "Not authorized for inquiries" });
    return;
  }
  next();
});

// Cookie-authenticated mutations must not be accepted cross-site.
function requireSameOrigin(req: Request, res: Response, next: NextFunction): void {
  const origin = req.get("origin");
  if (!origin || origin !== `${req.protocol}://${req.get("host")}`) {
    res.status(403).json({ error: "Invalid request origin" });
    return;
  }
  next();
}

function toResponse(row: ContactMessage) {
  return {
    id: row.id, name: row.name, email: row.email, company: row.company,
    message: row.message, createdAt: row.createdAt,
    deliveryState: row.deliveryState ?? "uncertain",
    notificationSentAt: row.notificationSentAt, reviewedAt: row.reviewedAt,
  };
}

router.get("/owner/inquiries", async (req, res): Promise<void> => {
  const query = ListOwnerInquiriesQueryParams.safeParse(req.query);
  if (!query.success || query.data.page > 10000) {
    res.status(400).json({ error: "Invalid view" });
    return;
  }
  const rows = await db.select().from(contactMessagesTable)
    .where(query.data.view === "pending"
      ? and(isNull(contactMessagesTable.reviewedAt),
          or(isNull(contactMessagesTable.deliveryState), ne(contactMessagesTable.deliveryState, "sent")))
      : undefined)
    .orderBy(desc(contactMessagesTable.createdAt), desc(contactMessagesTable.id))
    .limit(100).offset((query.data.page - 1) * 100);
  res.json(ListOwnerInquiriesResponse.parse(rows.map(toResponse)));
});

router.post("/owner/inquiries/:id/retry", requireSameOrigin, async (req, res): Promise<void> => {
  const params = RetryOwnerInquiryParams.safeParse(req.params);
  if (!params.success || params.data.id <= 0) {
    res.status(400).json({ error: "Invalid inquiry ID" });
    return;
  }
  const [row] = await db.select().from(contactMessagesTable)
    .where(eq(contactMessagesTable.id, params.data.id)).limit(1);
  if (!row) {
    res.status(404).json({ error: "Inquiry not found" });
    return;
  }
  if (row.deliveryState !== "unsent") {
    res.status(409).json({ error: "Delivery may already have been attempted; review this inquiry instead" });
    return;
  }
  const outcome = await notifyContactInbox(row, async () => {
    const [claimed] = await db.update(contactMessagesTable).set({ deliveryState: "sending" })
      .where(and(eq(contactMessagesTable.id, row.id), eq(contactMessagesTable.deliveryState, "unsent")))
      .returning({ id: contactMessagesTable.id });
    return !!claimed;
  });
  if (outcome === "not-claimed") {
    res.status(409).json({ error: "Inquiry was already claimed for delivery" });
    return;
  }
  if (outcome === "sent" || outcome === "uncertain") {
    await db.update(contactMessagesTable).set({
      deliveryState: outcome,
      ...(outcome === "sent" ? { notificationSentAt: new Date() } : {}),
    }).where(and(eq(contactMessagesTable.id, row.id), eq(contactMessagesTable.deliveryState, "sending")));
  }
  const [updated] = await db.select().from(contactMessagesTable).where(eq(contactMessagesTable.id, row.id));
  res.json(RetryOwnerInquiryResponse.parse(toResponse(updated)));
});

router.post("/owner/inquiries/:id/review", requireSameOrigin, async (req, res): Promise<void> => {
  const params = ReviewOwnerInquiryParams.safeParse(req.params);
  if (!params.success || params.data.id <= 0) {
    res.status(400).json({ error: "Invalid inquiry ID" });
    return;
  }
  const [row] = await db.update(contactMessagesTable).set({ reviewedAt: new Date() })
    .where(and(eq(contactMessagesTable.id, params.data.id), isNull(contactMessagesTable.reviewedAt)))
    .returning();
  if (row) {
    res.json(ReviewOwnerInquiryResponse.parse(toResponse(row)));
    return;
  }
  const [existing] = await db.select().from(contactMessagesTable)
    .where(eq(contactMessagesTable.id, params.data.id));
  if (!existing) {
    res.status(404).json({ error: "Inquiry not found" });
    return;
  }
  res.json(ReviewOwnerInquiryResponse.parse(toResponse(existing)));
});

export default router;