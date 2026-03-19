## 2024-05-24 - [Replace Math.random with crypto.randomInt for password generation]
**Vulnerability:** The CLI password reset utility (`src/utils/resetPasswordCLI.ts`) used `Math.random()` to generate random passwords. This is not a cryptographically secure random number generator (CSPRNG), making the generated passwords potentially predictable and vulnerable to guessing attacks.
**Learning:** For any security-sensitive operations such as token or password generation, a CSPRNG should always be used.
**Prevention:** Avoid using `Math.random()` for anything related to cryptography or security. Use `crypto.randomBytes`, `crypto.randomInt`, or equivalent securely sourced random functions instead.
