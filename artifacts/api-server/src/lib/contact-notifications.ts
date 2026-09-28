import { ReplitConnectors } from "@replit/connectors-sdk";
import type { ContactMessage } from "@workspace/db";

type GmailProfile = { emailAddress?: string };

export async function notifyContactInbox(message: ContactMessage): Promise<boolean> {
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  if (!recipient || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(recipient)) {
    return false;
  }

  const connectors = new ReplitConnectors();
  const profileResponse = await connectors.proxy("google-mail", "/gmail/v1/users/me/profile", {
    method: "GET",
  });
  if (!profileResponse.ok) {
    throw new Error(`Gmail profile request failed (${profileResponse.status})`);
  }
  const profile = (await profileResponse.json()) as GmailProfile;
  if (profile.emailAddress?.toLowerCase() !== recipient.toLowerCase()) {
    throw new Error("Connected Gmail account does not match the configured contact inbox");
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

  const sendResponse = await connectors.proxy("google-mail", "/gmail/v1/users/me/messages/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ raw }),
  });
  if (!sendResponse.ok) {
    throw new Error(`Gmail send failed (${sendResponse.status})`);
  }
  return true;
}