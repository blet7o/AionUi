## 2025-02-28 - Hardcoded Cookie Secret
**Vulnerability:** A hardcoded cookie secret (`'cookie-parser-secret'`) was used for signing cookies in Express middleware.
**Learning:** Hardcoded secrets allow attackers to forge or tamper with signed cookies, defeating the purpose of cookie signing entirely. It's a common oversight in boilerplate code that must be explicitly replaced before production.
**Prevention:** Always use securely generated or environment-provided keys for any cryptographic operations (including cookie signing). Implemented the same fallback logic as `CSRF_SECRET` (generate a random 32-character hex string if the env var is not provided) to ensure uniqueness per session when not explicitly configured.
