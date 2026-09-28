import { randomUUID } from "node:crypto";
import type { ContactMessage } from "@workspace/db";

type GmailProfile = { emailAddress?: string };

export type DeliveryResult = "unsent" | "sent" | "uncertain" | "not-claimed";

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

// Claim is persisted immediately before the first possible send. If the process
// dies while sending, "sending" remains for manual review rather than retry.
export async function notifyContactInbox(
  message: ContactMessage,
  claim: () => Promise<boolean>,
): Promise<DeliveryResult> {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL?.trim();
  if (!recipient || !EMAIL_PATTERN.test(recipient)) {
    return "unsent";
  }

  if (process.env.VERCEL) {
    return notifyViaResend(message, recipient, claim);
  }

  const { ReplitConnectors } = await import("@replit/connectors-sdk");
  const connectors = new ReplitConnectors();
  try {
    const profileResponse = await connectors.proxy("google-mail", "/gmail/v1/users/me/profile", {
      method: "GET",
    });
    if (!profileResponse.ok) return "unsent";
    const profile = (await profileResponse.json()) as GmailProfile;
    if (profile.emailAddress?.toLowerCase() !== recipient.toLowerCase()) return "unsent";
  } catch {
    return "unsent";
  }

  // The visitor never controls the recipient, subject, or sender headers. A
  // validated email address is the only visitor input placed in a mail header.
  const body = [
    `Name: ${message.name}`,
    `Email: ${message.email}`,
    `Company: ${message.company || "Not provided"}`,
    "",
    message.message,
  ].join("\r\n");
  const raw = Buffer.from([
    `To: <${recipient}>`,
    `Reply-To: <${message.email}>`,
    "Subject: New ROSALOGIC website inquiry",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    body,
  ].join("\r\n"), "utf8").toString("base64url");

  if (!await claim()) return "not-claimed";
  try {
    const sendResponse = await connectors.proxy("google-mail", "/gmail/v1/users/me/messages/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ raw }),
    });
    if (sendResponse.ok) return "sent";
    return sendResponse.status === 408 || sendResponse.status >= 500
      ? "uncertain"
      : "unsent";
  } catch {
    return "uncertain";
  }
}

async function notifyViaResend(
  message: ContactMessage,
  recipient: string,
  claim: () => Promise<boolean>,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const sender = process.env.CONTACT_SENDER_EMAIL?.trim();
  if (!apiKey || !sender || !EMAIL_PATTERN.test(sender)) {
    return "unsent";
  }

  if (!await claim()) return "not-claimed";
  const idempotencyKey = `rosalogic-contact-${process.env.VERCEL_ENV ?? "production"}-${message.id}-${randomUUID()}`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: message.email,
        subject: "New ROSALOGIC website inquiry",
        text: [
          `Name: ${message.name}`,
          `Email: ${message.email}`,
          `Company: ${message.company || "Not provided"}`,
          "",
          message.message,
        ].join("\n"),
      }),
    });

    if (response.ok) return "sent";
    // A received client error is a confirmed rejection; a timeout or server
    // error may have occurred after the provider accepted the message.
    return response.status === 408 || response.status >= 500
      ? "uncertain"
      : "unsent";
  } catch {
    return "uncertain";
  }
}
