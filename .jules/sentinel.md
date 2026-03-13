## 2025-03-08 - [CRITICAL] Hardcoded cookie-parser secret
**Vulnerability:** Found a hardcoded secret `'cookie-parser-secret'` used for Express `cookie-parser` middleware initialization in `src/webserver/setup.ts`.
**Learning:** Hardcoded secrets in middleware initialization make cookie signing predictable, potentially allowing session hijacking or CSRF bypass depending on how cookies are used downstream.
**Prevention:** Always use environment variables (e.g., `process.env.COOKIE_SECRET`) or dynamically generated secure secrets for cryptographic and signing operations, ensuring they are unpredictable.
