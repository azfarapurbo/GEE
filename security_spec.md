# Security Specification: Global Education Expert

## 1. Data Invariants
1. **Default-Deny Baseline**: All paths not explicitly matched are denied read and write access.
2. **PII Isolation (Consultations, Students & Internal Notes)**:
   - Consultation bookings (`/consultations/{consultationId}`) contain prospective student PII; public visitors may ONLY `create` a booking, while `get`, `list`, `update`, and `delete` require `isAdmin()`.
   - Student portal profiles (`/students/{studentId}`) are strictly private: ONLY the owning student (`request.auth.uid == studentId`) or `isAdmin()` may `get` a student profile, and ONLY `isAdmin()` may `list` `/students`.
   - Internal counselor notes (`/studentNotes/{studentId}`) are strictly isolated in a separate admin-only collection: ONLY `isAdmin()` may `get`, `list`, `create`, `update`, or `delete`. Students have zero read or write access to internal notes.
3. **Immutable Creation & No Self-Assigned Roles**:
   - On `/students/{studentId}` creation, `request.auth.uid` must equal `studentId`, email must be verified (`isVerifiedUser()`), `role` must equal `'student'`, `applicationStage` must equal `'Profile Submitted'`, all document statuses must start at `'missing'` with empty filenames, `assignedCounselor` must be the default assignment string, and `createdAt == request.time && updatedAt == request.time`.
   - The `/admins/{adminId}` collection remains completely locked against client writes (`allow create, update, delete: if false`).
4. **Tiered Identity Update Containment**:
   - **Students (Tier 2)** on `/students/{studentId}` may ONLY update contact/academic preferences (`phone`, `preferredDestination`, `academicLevel`, `updatedAt`) OR upload document metadata (`passportStatus` `'uploaded'` + `passportFileName`, etc. — never setting status directly to `'verified'`), while `uid`, `role`, `email`, `applicationStage`, `assignedCounselor`, and `createdAt` remain immutable.
   - **Admins (Tier 1)** on `/students/{studentId}` may update `applicationStage`, document verification statuses/filenames, `assignedCounselor`, and `updatedAt`, while `uid`, `role`, and `createdAt` remain immutable.
5. **Strict Schema & Size Boundaries**: Every field is type-checked, enum-checked, length-bounded, and strictly restricted via `keys().hasAll(...)` and `keys().hasOnly(...)` to block shadow fields and resource exhaustion attacks.

## 2. Adversarial "Dirty Dozen" Payloads (Expected: PERMISSION_DENIED)
1. **Unauthenticated List Scrape on `/consultations` or `/students`**: Unauthenticated `list` -> DENIED.
2. **Cross-Student PII Read**: Authenticated Student A attempts `get` on `/students/{studentB_uid}` -> DENIED.
3. **Student Reading Internal Counselor Notes**: Authenticated Student A attempts `get` on `/studentNotes/{studentA_uid}` -> DENIED.
4. **Privilege Escalation on Student Signup**: Student attempts `create` on `/students/{uid}` with `role: 'admin'` -> DENIED.
5. **Stage Bypass on Student Signup or Update**: Student attempts to set `applicationStage: 'Visa Approved'` -> DENIED.
6. **Self-Verification of Documents**: Student attempts to update `passportStatus: 'verified'` -> DENIED (students may only set `'uploaded'`).
7. **Shadow Field Injection**: `create` or `update` includes `{ isAdmin: true }` or `{ credits: 999 }` -> DENIED by `hasOnly` / `affectedKeys().hasOnly()`.
8. **Client-Spoofed Timestamp**: `create` or `update` supplies custom `createdAt`/`updatedAt` not equal to `request.time` -> DENIED.
9. **Immutable Identity Tampering**: Student or Admin attempts to alter `uid`, `role`, or `createdAt` on update -> DENIED.
10. **Invalid Email / Phone / Oversized Payload**: `create` supplies malformed `phone` or `fullName` > 100 chars or `notes` > 2000 chars -> DENIED.
11. **Unverified Admin Email Spoof**: User with `email_verified: false` attempts admin `list` or `update` -> DENIED.
12. **Self-Promotion in `/admins`**: Authenticated user attempts `create` on `/admins/{uid}` -> DENIED (`allow create, update, delete: if false`).
