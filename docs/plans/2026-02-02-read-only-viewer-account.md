# Read-Only Viewer Account

## Summary

Add a read-only viewer account to Captain's Log. The admin can create, enable/disable, and set the password for this account from the web UI settings page. The viewer sees all data but cannot create, edit, or delete anything — action buttons appear greyed out. Environment variables provide optional bootstrapping on first boot.

This design prepares for future multi-user/crew support by adding a `role` field to the existing `User` model.

## Data Model

### Prisma Schema Changes

Add to `schema.prisma`:

```prisma
enum Role {
  ADMIN
  VIEWER
}
```

Modify `User` model:

```prisma
model User {
  id           String   @id @default(uuid())
  username     String   @unique
  passwordHash String
  role         Role     @default(ADMIN)
  isEnabled    Boolean  @default(true)
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
  sessionTokens SessionToken[]
}
```

### Migration

- Backfill existing users as `ADMIN`, `isEnabled: true`

## Backend Changes

### JWT Payload

Include `role` alongside existing `userId`, `username`, `jti` fields.

### Login Changes

- Check `isEnabled` before authenticating — return `403 Account disabled` if false
- Return `role` in login response body

### New Middleware: `requireRole(...roles)`

```typescript
// Usage: router.post('/trips', authenticateToken, requireRole('ADMIN'), createTrip)
```

- Reads `role` from JWT (attached to request by `authenticateToken`)
- Returns `403 Forbidden` if user's role not in allowed list
- Applied to all POST, PUT, PATCH, DELETE routes except auth routes

### New Settings Endpoints (ADMIN only)

- `GET /api/v1/settings/viewer` — returns `{ exists, enabled, username }`
- `PUT /api/v1/settings/viewer` — body: `{ username?, password?, enabled? }` — creates or updates the viewer account

### Routes to Protect

All mutation (non-GET) endpoints on:
- `/api/v1/trips/**`
- `/api/v1/boats/**`
- `/api/v1/maintenance/**`
- `/api/v1/notes/**`
- `/api/v1/locations/**`
- `/api/v1/photos/**`
- `/api/v1/settings/viewer` (ADMIN only)

All GET endpoints remain accessible to any authenticated user.

## Frontend Changes

### Auth Context

- Store `role` from login response
- Expose `isReadOnly` computed boolean (`role === 'VIEWER'`)

### ReadOnlyGuard Component

A wrapper that disables its children when `isReadOnly` is true:
- Wraps action buttons (create, edit, delete, save)
- Greyed out appearance, pointer-events disabled
- Optional tooltip: "View only"

### Settings Page — Viewer Account Section

Visible only to ADMIN:
- Enable/disable toggle
- Username field
- Password field (set/change)
- Save button
- Calls `PUT /api/v1/settings/viewer`

### No Changes To

- Login form (same form for both users)
- Page routes/navigation
- LCARS component library
- Android app

## Environment Variables (Optional)

| Variable | Purpose | Default |
|----------|---------|---------|
| `VIEWER_USERNAME` | Viewer account username | (none) |
| `VIEWER_PASSWORD` | Viewer account password | (none) |
| `VIEWER_ENABLED` | Auto-enable on bootstrap | `false` |

On server startup: if `VIEWER_USERNAME` and `VIEWER_PASSWORD` are set, upsert viewer account. `isEnabled` follows `VIEWER_ENABLED`.

## Implementation Order

1. Prisma schema + migration
2. Backend: JWT payload, login changes, `requireRole` middleware
3. Backend: Settings endpoints for viewer account
4. Backend: Apply `requireRole('ADMIN')` to all mutation routes
5. Backend: Env var bootstrapping on startup
6. Frontend: Auth context `role` + `isReadOnly`
7. Frontend: `ReadOnlyGuard` component
8. Frontend: Apply `ReadOnlyGuard` to action buttons across all pages
9. Frontend: Settings page viewer account section
10. Testing: Login as viewer, verify all mutations blocked, UI disabled
