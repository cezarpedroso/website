import { ReplitConnectors } from "@replit/connectors-sdk";
import type { ContactMessage } from "@workspace/db";

type GmailProfile = { emailAddress?: string };

export type DeliveryResult = "unsent" | "sent" | "uncertain" | "not-claimed";

// Claim is persisted immediately before the first possible send. If the process
// dies while sending, "sending" remains for manual review rather than retry.
export async function notifyContactInbox(
  message: ContactMessage,
  claim: () => Promise<boolean>,
): Promise<DeliveryResult> {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (!recipient || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(recipient)) {
    return "unsent";
  }

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
    return sendResponse.ok ? "sent" : "uncertain";
  } catch {
    return "uncertain";
  }
}