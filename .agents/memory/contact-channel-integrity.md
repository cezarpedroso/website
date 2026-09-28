---
name: Contact-channel integrity
description: How to keep contact acknowledgements honest when inbox notification can fail
---

The Contact page may accept submissions once they are durably stored, even if Gmail notification is unavailable. A successful form acknowledgement means the inquiry was saved, not that an email reached the owner's inbox. Keep the private recipient in server configuration, not public copy or browser responses.

**Why:** The original public mailbox does not exist yet, and the user chose a private Gmail inbox instead. Provider authorization can be missing or expire independently of safe message storage. Claiming email delivery based on storage would mislead visitors and the owner.

**How to apply:** Acknowledge only after a database commit; preserve the submission if notification fails, and keep undelivered records inspectable. Do not expose the private address, restore a non-working public mailto link, or conflate saved inquiries with delivered emails.

Use a workspace secret for the private recipient, not a normal shared environment variable.

**Why:** A normal shared environment variable can be written into tracked project configuration even though it is not included in the website bundle.

**How to apply:** When setting or replacing a private contact destination, request it through the secure secrets form. Keep it out of tracked configuration and public text.