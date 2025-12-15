# Boat Tracking System

A comprehensive dual-platform application for tracking vessel usage, maintaining captain's logs, managing maintenance schedules, and recording detailed trip information with GPS tracking.

## System Components

- **Backend API**: RESTful API server (Node.js/Express/TypeScript)
- **Web Application**: React-based dashboard with LCARS design system
- **Android Application**: Mobile app with GPS tracking and offline functionality
- **Database**: PostgreSQL for centralized data storage

## Quick Start

### Prerequisites

- Docker and Docker Compose
- Node.js 20 LTS (for local development)
- Git

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd boat-tracking-system
```

2. Copy the environment file and configure:
```bash
cp .env.example .env
# Edit .env with your database password and JWT secret
```

3. Start the services:
```bash
docker-compose up -d
```

4. Create your first user account:
```bash
docker-compose exec backend npm run create-user -- --username admin --password yourpassword
```

**Save your credentials securely!**

5. Access the API:
- Health check: http://localhost:8585/health
- API info: http://localhost:8585/api/v1
- Login: POST http://localhost:8585/api/v1/auth/login

### Development

#### Backend Development

```bash
cd backend
npm install
npm run dev
```

#### Running Tests

```bash
cd backend
npm test                # Run all tests
npm run test:property   # Run property-based tests only
```

#### Universal Property Test Runner

The project includes a universal property test runner that can execute property-based tests across all platforms (backend and Android) with AI-friendly output and comprehensive reporting.

**Prerequisites:**
- For backend tests: Docker services must be running (`docker-compose up -d`)
- For Android tests: Android SDK and build tools must be installed
- Node.js dependencies installed in backend directory (`cd backend && npm install`)

**Basic Usage:**
```bash
# Run all property tests across all platforms
./run-property-tests.sh

# Run only backend property tests
./run-property-tests.sh --backend-only

# Run only Android property tests
./run-property-tests.sh --android-only

# Run specific tests (e.g., auth-related)
./run-property-tests.sh --tests auth

# Run with verbose output for debugging
./run-property-tests.sh --verbose

# Run with custom iteration count (default: 100)
./run-property-tests.sh --iterations 200

# Set timeout per platform (default: 300 seconds)
./run-property-tests.sh --timeout 600

# Show all available options
./run-property-tests.sh --help
```

**Key Features:**
- **Cross-Platform**: Runs property tests on both backend (Jest + fast-check) and Android (Kotest)
- **AI-Friendly Output**: Minimal progress indicators during execution, detailed failure extraction
- **Comprehensive Reporting**: Clear pass/fail status with execution time and test counts
- **Configurable**: Supports test filtering, custom iteration counts, and platform selection
- **Context Preservation**: Extracts failure details for debugging and AI analysis

**Example Output:**
```
Universal Property Test Runner
Boat Tracking System

========================================
BACKEND PROPERTY TESTS
========================================
Found 15 backend property test files
✓ Backend property tests passed

========================================
ANDROID PROPERTY TESTS
========================================
Found 3 Android property test files
✓ Android property tests passed

========================================
PROPERTY TEST EXECUTION REPORT
========================================

Configuration:
  Iterations per test: 100
  Timeout per platform: 300s
  Backend enabled: true
  Android enabled: true

Platform Results:
  Backend:  ✓ PASSED (15/15 tests)
  Android:  ✓ PASSED (3/3 tests)

Overall Summary:
  Total tests: 18
  Passed: 18
  Failed: 0
  Duration: 2m 34s

✓✓✓ ALL PROPERTY TESTS PASSED ✓✓✓
Property-based testing validation complete
```

This runner is particularly useful for:
- **Continuous Integration**: Validate all property tests in a single command
- **Development Workflow**: Quick validation after making changes
- **AI-Assisted Debugging**: Clean failure output for automated analysis
- **Task Validation**: Ensure all property tests pass consecutively (required by testing workflow)

### Docker Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f backend
docker-compose logs -f postgres

# Rebuild and restart
docker-compose up -d --build

# Database backup
docker-compose exec postgres pg_dump -U boat_user boat_tracking > backup.sql

# Restore database
docker-compose exec -T postgres psql -U boat_user boat_tracking < backup.sql
```

### User Management

User accounts are managed via CLI commands (requires server access). There is no public registration endpoint.

#### Create a New User

```bash
docker-compose exec backend npm run create-user -- --username john --password secret123
```

#### List All Users

```bash
docker-compose exec backend npm run list-users
```

#### Change User Password

```bash
docker-compose exec backend npm run change-password -- --username john --password newsecret
```

**Note**: Changing a password invalidates all existing session tokens for that user.

### Database Management Commands

For development and testing, you can reset and manage the database:

#### Reset Database (Development Only)

**WARNING**: This destroys all data! Only use in development.

```bash
# Reset database and create a test user
docker-compose exec backend npm run reset-db -- --username testuser --password testpass

# Reset database without creating a user
docker-compose exec backend npm run reset-db
```

#### Seed Test Data

```bash
# Populate database with sample data for testing
docker-compose exec backend npm run seed-db
```

#### CLI Command Reference

All CLI commands are run via `docker-compose exec backend npm run <command>`:

| Command | Description | Example |
|---------|-------------|---------|
| `create-user` | Create a new user account | `npm run create-user -- --username john --password secret` |
| `list-users` | List all usernames in the system | `npm run list-users` |
| `change-password` | Change a user's password | `npm run change-password -- --username john --password newsecret` |
| `reset-db` | Reset database to empty state | `npm run reset-db -- --username admin --password test` |
| `seed-db` | Add sample data for testing | `npm run seed-db` |

**Security Notes**:
- User creation is only available via CLI (no public registration endpoint)
- Password changes invalidate all existing session tokens for that user
- `reset-db` and `seed-db` are for development only
- Always use strong passwords in production

#### Login via API

```bash
curl -X POST http://localhost:8585/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"yourpassword"}'
```

This returns a JWT token that expires after 30 days (configurable).

Example response:
```json
{
  "success": true,
  "user": {
    "id": "user-id",
    "username": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Using the JWT Token

Include the token in the Authorization header for all API requests:

```bash
curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  http://localhost:8585/api/v1/boats
```

#### Logout

```bash
curl -X POST http://localhost:8585/api/v1/auth/logout \
  -H "Authorization: Bearer <your-token>"
```

#### Change Password

```bash
curl -X POST http://localhost:8585/api/v1/auth/change-password \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{"currentPassword":"oldpass","newPassword":"newpass"}'
```

**Note**: Changing password invalidates all existing tokens.

#### Update Credentials in Android App

After creating your account:

1. Open the Android app
2. Enter your **username** and **password** on the login screen
3. Tap **Login**
4. The app will store your session token securely

If your token expires, you'll be prompted to log in again.

## Project Structure

```
.
├── backend/              # Node.js/Express API
│   ├── src/
│   │   ├── services/    # Business logic
│   │   ├── routes/      # API endpoints
│   │   ├── middleware/  # Express middleware
│   │   ├── models/      # Prisma schema
│   │   └── utils/       # Utilities
│   ├── tests/           # Tests
│   ├── prisma/          # Database schema
│   └── Dockerfile
├── web/                 # React web application (TBD)
├── android/             # Android application (TBD)
└── docker-compose.yml   # Docker orchestration
```

## Environment Variables

See `.env.example` for all available configuration options.

Key variables:
- `DB_PASSWORD`: PostgreSQL password (required)
- `JWT_SECRET`: Secret key for JWT token signing (required, minimum 32 characters)
- `JWT_EXPIRATION`: Token expiration time (default: 30d)
- `INITIAL_USER`: Username for first user (optional, for initial setup)
- `INITIAL_PASSWORD`: Password for first user (optional, for initial setup)
- `PORT`: API server port (default: 8585)
- `NODE_ENV`: Environment (development/production)

**Note**: User passwords are hashed with bcrypt and stored in the database. Session tokens are JWT tokens.

## API Documentation

### Authentication

All API endpoints (except `/health` and `/api/v1/auth/login`) require a JWT session token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

### Endpoints

**Public Endpoints** (no authentication required):
- `GET /health` - Health check
- `GET /api/v1` - API information
- `POST /api/v1/auth/login` - Login with username/password

**Authenticated Endpoints** (require JWT token):
- `POST /api/v1/auth/logout` - Logout (invalidate token)
- `POST /api/v1/auth/change-password` - Change password (invalidates all tokens)
- `GET /api/v1/boats` - List boats
- `POST /api/v1/boats` - Create boat
- `PUT /api/v1/boats/:id` - Update boat
- `PATCH /api/v1/boats/:id/status` - Enable/disable boat
- `PATCH /api/v1/boats/:id/active` - Set active boat
- `GET /api/v1/trips` - List trips
- `POST /api/v1/trips` - Create trip
- `GET /api/v1/trips/:id` - Get trip details
- More endpoints will be added as features are implemented

## Security

### Authentication & Authorization
- Username/password authentication with bcrypt hashing (cost factor 12)
- JWT session tokens with configurable expiration (default: 30 days)
- Session tokens stored securely in EncryptedSharedPreferences (Android)
- Password changes invalidate all existing session tokens for that user
- No public registration endpoint (users created via CLI only)
- JWT tokens signed with HS256 algorithm using configurable secret

### Network Security
- TLS certificate pinning (Android app) with separate pins for local/remote connections
- HTTPS via Cloudflare certificates for both local and remote connections
- Dual connection mode: local network priority with remote fallback
- Rate limiting on API endpoints (in addition to Cloudflare protection)

### Data Protection
- Input validation (max lengths, required fields, data types)
- Parameterized queries via Prisma ORM (prevents SQL injection)
- Secure password storage (never store plaintext passwords)
- Environment variable configuration for sensitive data
- Docker container isolation

## Troubleshooting

### Authentication Issues

**Problem**: Android app shows "Authentication failed" or 401 errors

**Solution**:
1. Verify your username and password are correct
2. Check if your session token has expired (30 days by default)
3. Try logging in again from the Android app
4. If you forgot your password, reset it via CLI:
   ```bash
   docker-compose exec backend npm run change-password -- --username yourname --password newpassword
   ```

**Problem**: "Invalid JWT token" or "Token expired" errors

**Solution**:
1. Your session token has expired - log in again to get a new token
2. Check that the JWT_SECRET in your .env file matches what was used to sign the token
3. If you changed JWT_SECRET, all existing tokens are invalid - users must log in again

**Problem**: "No users found" during initial setup

**Solution**:
1. Create your first user via CLI:
   ```bash
   docker-compose exec backend npm run create-user -- --username admin --password yourpassword
   ```
2. Or set INITIAL_USER and INITIAL_PASSWORD in .env and restart the backend

### Reset Everything

**Clear Android App Data**:
```bash
adb shell pm clear com.boattracking
```

**Reset Backend Database**:
```bash
docker-compose down
docker volume rm captians-log_postgres_data
docker-compose up -d
```

**Complete Fresh Start**:
```bash
# Stop everything
docker-compose down

# Remove database volume
docker volume rm captians-log_postgres_data

# Clear Android app
adb shell pm clear com.boattracking

# Start fresh
docker-compose up -d

# Create first user
docker-compose exec backend npm run create-user -- --username admin --password yourpassword

# Reinstall Android app
cd android && ./gradlew installDebug
```

### Development: Reset Database

For development/testing, you can reset the database to defaults:

```bash
# Reset database and create test user
docker-compose exec backend npm run reset-db -- --username testuser --password testpass

# Or reset without creating a user
docker-compose exec backend npm run reset-db

# Seed with test data
docker-compose exec backend npm run seed-db
```

**WARNING**: `reset-db` destroys all data! Only use in development.

### Database Issues

**View database logs**:
```bash
docker-compose logs postgres
```

**Connect to database**:
```bash
docker-compose exec postgres psql -U boat_user boat_tracking
```

**Run migrations**:
```bash
docker-compose exec backend npx prisma migrate deploy
```

### Port Already in Use

If port 8585 is already in use:

```bash
# Find the process
lsof -i :8585

# Kill it
kill -9 <PID>

# Or change the port in docker-compose.yml
```

## License

MIT
