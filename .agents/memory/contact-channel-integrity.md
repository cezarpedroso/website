---
name: Contact-channel integrity
description: How to describe contact actions while a verified destination is unavailable
---

The Contact page may display a form before delivery is set up, but its submit action must remain inactive and its copy must not imply that a message was sent. A recipient address alone does not make the form deliver messages.

**Why:** The user chose to show the form now without enabling submission. A working-looking send action without a delivery service would mislead visitors, even if a recipient address is known.

**How to apply:** Keep the form's send action disabled and disclose that submissions are unavailable. A direct email link may be shown when the user supplies the address. When delivery is implemented, enable submission only with real success and error handling, and update surrounding copy at the same time.