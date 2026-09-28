---
name: Static security headers
description: How to assess security-header changes across the development preview and published static site.
---

Treat development preview headers and published static response headers as separate delivery paths. Passing local header checks and validating deployment configuration does not prove the published edge serves those headers.

**Why:** The site was not published when security headers were added, so no live production response was available to inspect. Preview checks alone could give a false sense of production coverage.

**How to apply:** After a publication, inspect actual HTML and asset response headers on the production URL, especially CSP, X-Content-Type-Options, and Referrer-Policy. Check that embedded preview usage and hosted fonts still load.