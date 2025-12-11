# Authentication Migration Summary

## Overview

The Boat Tracking System authentication has been migrated from API key-based authentication to username/password authentication with JWT session tokens.

## Changes Made

### 1. Requirements Document (.kiro/specs/boat-tracking-system/requirements.md)

**Glossary Updates:**
- Removed: API Key definition
- Added: User Account and Session Token definitions

**Requirement 2 - Secure API Communication:**
- Changed from API key authentication to username/password with JWT tokens
- Added user registration and login requirements
- Added password hashing with bcrypt requirement
- Added session token expiration and renewal
- Added password change invalidates all tokens requirement
- Maintained TLS certificate pinning and dual connection mode

**Requirement 1 - System Architecture:**
- Removed API key configuration from deployment
- Added initial user account creation on first deployment

**Requirement 17 - Initial Setup:**
- Changed Android app setup from API key to username/password
- Added account creation to setup wizard

### 2. Design Document (.kiro/specs/boat-tracking-system/design.md)

**Security Architecture:**
- Replaced API key authentication with username/password + JWT tokens
- Changed from scrypt hashing to bcrypt for passwords
- Added JWT token generation and validation
- Added session token storage in EncryptedSharedPreferences
- Added token expiration (default: 30 days)
- Added token invalidation on password change

**Authentication Service:**
- Removed: `validateApiKey()`, `regenerateApiKey()`, `generateApiKey()`, `hashApiKey()`
- Added: `register()`, `login()`, `validateToken()`, `refreshToken()`, `logout()`, `changePassword()`, `hashPassword()`, `comparePassword()`

**Data Models:**
- Removed: ApiKey interface
- Added: User interface (id, username, passwordHash, timestamps)
- Added: SessionToken interface (id, userId, token, expiresAt, isRevoked)

**Database Schema:**
- Removed: ApiKey table
- Added: User table
- Added: SessionToken table
- Updated indexes to include userId and token fields

**Correctness Properties:**
- Updated Property 1: Session Token Authentication (was API Key Authentication)
- Added Property 2: Password Hashing
- Added Property 3: Login Token Issuance
- Added Property 4: Password Change Token Invalidation
- Renumbered all subsequent properties (5-58)

**Environment Variables:**
- Removed: API_KEY
- Added: JWT_SECRET, JWT_EXPIRATION

**Web Application Components:**
- Updated Settings Module to include AccountSettings page
- Added LCARSPasswordChange and LCARSAccountInfo components
- Removed LCARSApiKeyManager component

### 3. Steering Documents

**product.md:**
- Updated Security section to reflect username/password authentication
- Changed from API key to JWT session tokens
- Added session token expiration and password change behavior

**tech.md:**
- Changed authentication from "API Key middleware with scrypt hashing" to "JWT session tokens with bcrypt password hashing"
- Updated Backend dependencies: removed scrypt, added bcrypt and jsonwebtoken
- Updated Android security description to use session tokens instead of API keys

**structure.md:**
- Updated Security section to use username/password authentication
- Changed from API key to JWT session tokens
- Updated Android security to store session tokens instead of API keys

## Authentication Flow (New)

1. **Registration:**
   - User provides username and password
   - Backend hashes password with bcrypt
   - User account created in database

2. **Login:**
   - User provides username and password
   - Backend validates credentials against bcrypt hash
   - Backend generates JWT session token
   - Token returned to client

3. **API Requests:**
   - Client includes JWT token in Authorization header (Bearer token)
   - Backend validates token (signature, expiration, revocation status)
   - If valid, request proceeds; otherwise 401 error

4. **Password Change:**
   - User provides old and new password
   - Backend validates old password
   - Backend hashes new password with bcrypt
   - All existing session tokens invalidated
   - User must log in again on all devices

5. **Token Expiration:**
   - Tokens expire after configured duration (default: 30 days)
   - Expired tokens rejected with 401 error
   - User must log in again

## Implementation Impact

### Backend Changes Needed:
- Remove API key generation and validation logic
- Implement user registration endpoint
- Implement login endpoint with JWT generation
- Implement password change endpoint
- Update authentication middleware to validate JWT tokens
- Create User and SessionToken database tables
- Remove ApiKey database table
- Update all property tests related to authentication

### Android Changes Needed:
- Replace API key input with username/password login screen
- Implement login flow with JWT token storage
- Update EncryptedSharedPreferences to store JWT token instead of API key
- Add password change functionality
- Update all API requests to use Bearer token authentication
- Handle token expiration and prompt for re-login

### Web Changes Needed:
- Implement login page
- Implement registration page (for initial setup)
- Add password change functionality to settings
- Update API client to use Bearer token authentication
- Handle token expiration and redirect to login

## Security Improvements

1. **Better User Management:** Multiple users can be supported in the future
2. **Token Expiration:** Automatic security through time-limited tokens
3. **Password Changes:** Users can change passwords without system reconfiguration
4. **Industry Standard:** JWT is widely used and well-understood
5. **Revocation:** Tokens can be individually revoked if needed

## Migration Path

For existing deployments:
1. Deploy new backend with User/SessionToken tables
2. Create initial user account through setup wizard or CLI
3. Update Android app to use new login flow
4. Update web app to use new login flow
5. Remove old API key configuration

## Testing Updates Needed

All property tests related to authentication (Properties 1-4) need to be updated to test:
- User registration validation
- Login credential validation
- JWT token generation and validation
- Password hashing (bcrypt)
- Token expiration
- Token invalidation on password change
