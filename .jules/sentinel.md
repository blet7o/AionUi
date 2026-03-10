## 2025-03-10 - [CRITICAL] Hardcoded Cookie Parser Secret
**Vulnerability:** Found a hardcoded secret `'cookie-parser-secret'` in `src/webserver/setup.ts` used by the `cookieParser` middleware.
**Learning:** Hardcoded cookie parser secrets can allow attackers to easily forge signed cookies and potentially hijack sessions or bypass authorization checks if signed cookies are relied upon for authentication.
**Prevention:** Always use environment variables for sensitive secrets and provide a secure, randomly generated fallback at runtime to ensure security.
