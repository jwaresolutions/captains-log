# Authentication Design Update Summary

## Changes Made Based on User Feedback

### 1. Removed Public Registration
- **Removed**: Public API endpoint for user registration
- **Reason**: Personal system - only admin should create accounts
- **Impact**: Android app will only have login screen, no registration

### 2. Added CLI User Management Commands

**Create User:**
```bash
docker-compose exec backend npm run create-user -- --username <username> --password <password>
```

**Change Password:**
```bash
docker-compose exec backend npm run change-password -- --username <username> --password <new_password>
```

**List Users:**
```bash
docker-compose exec backend npm run list-users
```

### 3. Added Database Reset for Development

**Reset Database (destroys all data):**
```bash
docker-compose exec backend npm run reset-db
```

**Reset Database with Default User:**
```bash
docker-compose exec backend npm run reset-db -- --username admin --password <password>
```

**Seed Test Data:**
```bash
docker-compose exec backend npm run seed-db
```

### 4. Initial Setup Options

When first deploying with no users, you can create the first user via:

1. **Web Setup Wizard** - Visit web app, it will prompt for first user creation
2. **CLI Command** - Use `create-user` command
3. **Environment Variables** - Set `INITIAL_USER` and `INITIAL_PASSWORD` in .env (auto-creates on startup)

### 5. Updated Requirements

**New Requirement 21: Development and Testing Tools**
- Database reset command
- User management commands
- Test data seeding

**Updated Requirement 2:**
- Added criteria for CLI user creation
- Added criteria to reject public registration
- Added criteria for initial setup

**Updated Requirement 17:**
- Added CLI command for additional user creation
- Added database reset for development

### 6. Updated Correctness Properties

**Added Properties:**
- Property 5: Public Registration Rejection
- Property 6: CLI User Creation
- Property 7: Database Reset

**Renumbered:** All subsequent properties (now 8-61 instead of 5-58)

## Security Model

**User Creation:**
- Only via CLI (requires server access)
- Only via initial setup wizard (first user only)
- NOT via public API

**Authentication:**
- Username/password login
- JWT session tokens (30-day expiration)
- Bcrypt password hashing
- Token invalidation on password change

**Access Control:**
- Must have server access to create users
- Perfect for personal/family use
- Can be extended for multi-user in future

## Development Workflow

**Fresh Start:**
```bash
# Reset everything and create test user
docker-compose exec backend npm run reset-db -- --username testuser --password testpass

# Seed with test data
docker-compose exec backend npm run seed-db
```

**Add New User:**
```bash
docker-compose exec backend npm run create-user -- --username john --password secret123
```

**Change Password:**
```bash
docker-compose exec backend npm run change-password -- --username john --password newsecret
```

## Next Steps

Once you approve this design, I'll:
1. Update the backend code to implement username/password auth
2. Remove API key authentication code
3. Add CLI commands for user management
4. Add database reset functionality
5. Update Android app to use login instead of API key
6. Update property tests for new authentication

Ready to proceed with implementation?
