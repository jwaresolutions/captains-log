# Authentication Migration - Implementation Ready

## Summary

All specification and documentation has been updated to migrate from API key authentication to username/password authentication with JWT session tokens.

## Documents Updated

### 1. Requirements Document (`.kiro/specs/boat-tracking-system/requirements.md`)
- ✅ Updated Requirement 2: Secure API Communication and Authentication
- ✅ Updated Requirement 1: Added initial user account creation
- ✅ Updated Requirement 17: Initial Setup and Configuration
- ✅ Added Requirement 21: Development and Testing Tools

### 2. Design Document (`.kiro/specs/boat-tracking-system/design.md`)
- ✅ Updated Security Architecture section
- ✅ Updated Authentication Service methods
- ✅ Updated Data Models (User, SessionToken instead of ApiKey)
- ✅ Updated Database Schema
- ✅ Added/Updated Correctness Properties (1-7, renumbered rest to 8-61)
- ✅ Added CLI Commands section
- ✅ Updated Environment Variables

### 3. Steering Documents
- ✅ Updated `.kiro/steering/product.md` - Security section
- ✅ Updated `.kiro/steering/tech.md` - Authentication and dependencies
- ✅ Updated `.kiro/steering/structure.md` - Security conventions

### 4. Implementation Plan (`.kiro/specs/boat-tracking-system/tasks.md`)
- ✅ Added Phase 1.5: Authentication Migration (18 new tasks: 1.27-1.44)
- ✅ Includes backend changes, Android changes, CLI commands, testing, and validation

### 5. README.md
- ✅ Updated Quick Start with user creation
- ✅ Replaced API Key Management with User Management section
- ✅ Updated Environment Variables
- ✅ Updated API Documentation
- ✅ Updated Security section
- ✅ Updated Troubleshooting section
- ✅ Added database reset commands for development

## Implementation Tasks (Phase 1.5)

### Backend Tasks (1.27-1.38)
1. Update Prisma schema (User, SessionToken models)
2. Install bcrypt and jsonwebtoken
3. Implement authentication service (login, validateToken, logout, changePassword)
4. Update authentication middleware (JWT validation)
5. Remove public registration endpoint
6. Implement CLI commands (create-user, change-password, list-users)
7. Implement database reset command (reset-db, seed-db)
8. Implement initial setup flow
9. Create login API endpoint
10. Create logout API endpoint
11. Create password change API endpoint
12. Write property tests for authentication

### Android Tasks (1.39-1.40)
1. Update setup wizard (remove API key, add login screen)
2. Store JWT token in EncryptedSharedPreferences
3. Update API client for Bearer token authentication
4. Handle token expiration
5. Update connection manager for JWT tokens

### Documentation Tasks (1.41-1.42)
1. Update environment variables
2. Update README.md
3. Update steering documents

### Testing & Validation (1.43-1.44)
1. Run all authentication property tests
2. Manual validation of entire authentication flow

## Key Changes

### Authentication Flow
**Before (API Key):**
1. Server generates API key on startup
2. User copies API key from logs
3. User enters API key in Android app
4. API key stored in EncryptedSharedPreferences
5. API key sent with every request
6. Server validates API key against scrypt hash

**After (Username/Password + JWT):**
1. Admin creates user via CLI command
2. User logs in with username/password
3. Server validates credentials (bcrypt)
4. Server issues JWT token (30-day expiration)
5. JWT token stored in EncryptedSharedPreferences
6. JWT token sent with every request (Bearer token)
7. Server validates JWT signature and expiration
8. Password changes invalidate all tokens

### Security Improvements
- ✅ Industry-standard JWT authentication
- ✅ Bcrypt password hashing (better for passwords than scrypt)
- ✅ Token expiration (automatic security)
- ✅ Password change invalidates all tokens
- ✅ No public registration (admin-only user creation)
- ✅ CLI commands for user management
- ✅ Database reset for development/testing

### CLI Commands
```bash
# User Management
docker-compose exec backend npm run create-user -- --username <name> --password <pass>
docker-compose exec backend npm run change-password -- --username <name> --password <new>
docker-compose exec backend npm run list-users

# Development
docker-compose exec backend npm run reset-db
docker-compose exec backend npm run reset-db -- --username admin --password test
docker-compose exec backend npm run seed-db
```

### API Endpoints
**New:**
- `POST /api/v1/auth/login` - Login with username/password
- `POST /api/v1/auth/logout` - Logout (invalidate token)
- `POST /api/v1/auth/change-password` - Change password

**Removed:**
- `POST /api/v1/auth/regenerate-key` - No longer needed
- `POST /api/v1/auth/register` - Explicitly blocked

### Environment Variables
**Removed:**
- `API_KEY` - No longer used

**Added:**
- `JWT_SECRET` - Secret key for JWT signing (required)
- `JWT_EXPIRATION` - Token expiration time (default: 30d)

## Next Steps

1. **Review** - User reviews all changes
2. **Approve** - User approves design
3. **Implement** - Execute tasks 1.27-1.44 in order
4. **Test** - Run property tests and manual validation
5. **Deploy** - Update production environment

## Migration Path for Existing Deployments

If you have an existing deployment with API key authentication:

1. **Backup** your database and photos
2. **Deploy** new backend with updated code
3. **Run migration** to create User and SessionToken tables
4. **Create first user** via CLI
5. **Update Android app** to new version with login screen
6. **Test** login and functionality
7. **Remove** old API key from database (optional cleanup)

## Questions Answered

**Q: Why bcrypt instead of scrypt?**
A: Bcrypt is the industry standard specifically for password hashing. Scrypt is designed for key derivation (like turning a password into an encryption key). Both are secure, but bcrypt is more conventional for password storage.

**Q: What is a JWT token?**
A: JSON Web Token - a secure, self-contained way to transmit information. It's signed by the server so it can't be tampered with. Contains user ID and expiration time. Industry standard used by Google, Facebook, etc.

**Q: Can anyone create an account?**
A: No! User creation is only possible via CLI command (requires server access) or initial setup wizard (first user only). There is no public registration endpoint.

**Q: How do I reset the database for testing?**
A: Use `docker-compose exec backend npm run reset-db` to drop all tables and recreate schema. Optionally add `--username` and `--password` to create a test user.

## Status

✅ **All documentation updated**
✅ **Implementation plan created**
✅ **Ready to begin implementation**

Proceed with task 1.27 when ready!
