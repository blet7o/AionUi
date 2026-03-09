## 2024-05-27 - [Hardcoded Cookie Parser Secret]
**Vulnerability:** Found a hardcoded secret `'cookie-parser-secret'` used for `cookieParser` in `src/webserver/setup.ts`.
**Learning:** Hardcoded secrets could have been left during initial development stages, leading to insecurely signed cookies across instances.
**Prevention:** Avoid committing default secrets to codebase for any cryptographic operations. Always fall back to securely generated pseudo-random strings if environment variables are unavailable.
