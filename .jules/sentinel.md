## 2025-03-15 - [SECURITY IMPROVEMENT] Disable X-Powered-By Header
**Vulnerability:** Information Leakage. Express by default sends `X-Powered-By: Express` HTTP header, which exposes the underlying technology stack to potential attackers, allowing them to better target server-specific vulnerabilities.
**Learning:** This is a default behavior in Express that needs to be explicitly disabled. While it's not a direct vulnerability on its own, it breaks the principle of "security by obscurity" which is a valid layer in defense-in-depth.
**Prevention:** In Express applications, always call `app.disable('x-powered-by');` early in the application configuration setup to prevent this header from being emitted.
