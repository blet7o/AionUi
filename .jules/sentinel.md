## 2024-03-12 - Hardcoded Cookie Parser Secret
**Vulnerability:** Found a hardcoded secret ('cookie-parser-secret') used in `cookie-parser` middleware initialization inside `src/webserver/setup.ts`.
**Learning:** Hardcoding a secret used to sign cookies enables spoofing attacks, as anyone examining the source code will know the secret. In this case, `cookieParser` was being initialized with a generic, predictable secret directly in the code.
**Prevention:** Instead of a hardcoded string, use environment variables for secrets, and fall back to randomly generating a cryptographically secure string (e.g. `crypto.randomBytes()`) on each startup if no environment variable is provided.
