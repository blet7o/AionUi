## 2025-03-08 - [Medium] Missing Strict Content Security Policy Directives
**Vulnerability:** The application's Content Security Policy (CSP) headers lacked the `base-uri`, `object-src`, and `frame-ancestors` directives. Without these directives, the application was vulnerable to base tag injection, object tag injection, and clickjacking attacks.
**Learning:** CSP provides an essential defense-in-depth layer. Explicitly denying risky capabilities like framing and object embedding (which the app doesn't need) restricts the attack surface.
**Prevention:** Include a comprehensive set of directives (`default-src`, `base-uri`, `object-src`, `frame-ancestors`) as standard when configuring CSP. Use restrictive defaults like `'none'` where appropriate.
