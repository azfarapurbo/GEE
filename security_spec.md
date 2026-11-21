# Security Specification: Global Education Expert

## 1. Data Invariants
1. **Default-Deny Baseline**: All paths not explicitly matched are denied read and write access.
2. **PII Isolation**: Consultation records contain sensitive student PII (`fullName`, `email`, `phone`, `message`). Public visitors may ONLY submit (`create`) a booking; `get`, `list`, `update`, and `delete` are strictly restricted to verified consultancy admins (`isAdmin()`).
3. **Immutable Creation Integrity**: On public `create`, `status` must equal `'pending'`, `adminNotes` must equal `''`, and `createdAt`/`updatedAt` must equal `request.time`.
4. **Update Containment**: Only admins may update a consultation, and only `status`, `adminNotes`, and `updatedAt` may be modified while `createdAt` and student-submitted contact fields remain immutable.
5. **No Self-Assigned Admin Roles**: The `/admins` collection cannot be written from client SDKs. Admin identity requires verified email (`request.auth.token.email_verified == true`) matching the bootstrapped owner or an existing `/admins/{uid}` record.
6. **Strict Schema & Size Boundaries**: Every field is type-checked, length-bounded, and strictly restricted via `keys().hasAll(...)` and `keys().hasOnly(...)` to block shadow fields and resource exhaustion attacks.

## 2. Adversarial "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)
1. **Unauthenticated List Scrape**: Unauthenticated `list` on `/consultations` -> DENIED.
2. **Unauthenticated Single Get**: Unauthenticated `get` on `/consultations/{id}` -> DENIED.
3. **Non-Admin Signed-In Read**: Authenticated non-admin user attempts `list` on `/consultations` -> DENIED.
4. **Shadow Field Injection on Create**: Public `create` on `/consultations/{id}` includes `{ isAdmin: true }` or extra keys -> DENIED by `hasOnly`.
5. **Status Escalation on Create**: Public `create` sets `status: 'completed'` instead of `'pending'` -> DENIED.
6. **Client-Spoofed Timestamp**: Public `create` supplies custom `createdAt` not equal to `request.time` -> DENIED.
7. **Admin Notes Injection on Create**: Public `create` sets non-empty `adminNotes` -> DENIED.
8. **Invalid Email / Phone Format**: Public `create` supplies malformed `email` or `phone` -> DENIED by regex `matches()`.
9. **Oversized Message Payload (Denial of Wallet)**: Public `create` sends `message` > 1500 chars or `consultationId` > 128 chars -> DENIED.
10. **Invalid Destination Enum**: Public `create` sets `destination: 'Mars'` -> DENIED.
11. **Unverified Admin Email Spoof**: User with `email_verified: false` attempts admin `list` or `update` -> DENIED.
12. **Self-Promotion in `/admins`**: Authenticated user attempts `create` on `/admins/{uid}` -> DENIED (`allow write: if false`).
