# Implementation Plan

This implementation plan follows a phased approach, allowing verification of each feature before proceeding to the next. Each phase builds incrementally on previous work, ensuring the system remains functional throughout development.

## Phase 1: Basic Trip Logging

- [-] 1. Set up project structure and core infrastructure
- [x] 1.1 Initialize backend API project with Node.js, Express, and TypeScript
  - Create project structure with src/, tests/, and config/ directories
  - Set up TypeScript configuration
  - Install core dependencies (Express, Prisma, dotenv)
  - Create basic Express server listening on port 8585
  - _Requirements: 1.1, 1.3_

- [x] 1.2 Set up Docker Compose configuration
  - Create Dockerfile for backend API
  - Create docker-compose.yml with backend and PostgreSQL services
  - Configure environment variables in .env.example
  - Set up volumes for database persistence and photo storage
  - Test deployment with `docker-compose up`
  - _Requirements: 1.1, 1.2, 1.4_

- [x] 1.3 Initialize Prisma and create initial database schema
  - Set up Prisma with PostgreSQL
  - Create schema for Boat, Trip, GPSPoint entities
  - Generate Prisma client
  - Create initial migration
  - _Requirements: 1.4_

- [x] 1.4 Implement API key authentication middleware
  - Create authentication service with API key validation using scrypt hash comparison
  - Implement Express middleware for API key checking
  - Add scrypt hashing for API key storage (never store plaintext)
  - Create endpoint for API key regeneration (returns plaintext once, stores hash)
  - Implement rate limiting middleware (in addition to Cloudflare protection)
  - _Requirements: 2.1, 2.3, 2.4, 2.11_

- [x] 1.5 Write property tests for API key authentication and rate limiting
  - **Property 1: API Key Authentication**
  - **Validates: Requirements 2.1, 2.4**
  - Generate random valid and invalid API keys
  - Verify requests without valid keys are rejected
  - Verify requests with valid keys are accepted (scrypt hash comparison)
  - **Property 53: API Rate Limiting**
  - **Validates: Requirements 2.11**
  - Verify rate limiting rejects excess requests

- [x] 1.6 Implement Boat service and API endpoints
  - Create Boat service with CRUD operations
  - Implement POST /api/v1/boats (create boat)
  - Implement GET /api/v1/boats (list boats)
  - Implement GET /api/v1/boats/:id (get boat)
  - Implement PUT /api/v1/boats/:id (update boat)
  - Implement PATCH /api/v1/boats/:id/status (enable/disable)
  - Implement PATCH /api/v1/boats/:id/active (set active)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 1.7 Write property tests for Boat service
  - **Property 2: Boat Name Validation**
  - **Validates: Requirements 3.1**
  - **Property 3: New Boat Becomes Active**
  - **Validates: Requirements 3.2**
  - **Property 6: Boat List Completeness**
  - **Validates: Requirements 3.5**
  - **Property 7: Active Boat Selection**
  - **Validates: Requirements 3.6**

- [x] 1.8 Initialize Android project with Kotlin and Jetpack Compose
  - Create Android project with Kotlin 2.0.21, AGP 8.7.3, Gradle 8.9, KSP 2.0.21-1.0.28
  - Configure minimum SDK 26 (Android 8.0), target SDK 35 (Android 16), compile SDK 35 (Android 16)
  - Set up MVVM architecture with ViewModels
  - Configure Room database for offline storage
  - Set up Retrofit with OkHttp for API communication
  - Implement certificate pinning in OkHttp with separate pins for local and remote Cloudflare certificates
  - Create EncryptedSharedPreferences for secure API key storage
  - Add Compose Compiler Gradle plugin for Kotlin 2.0 compatibility
  - Update Compose BOM to 2024.10.01 for Kotlin 2.0 support
  - _Requirements: 2.2, 2.6, 2.7, 2.8_
  - _Note: Upgraded from AGP 8.2.0/Kotlin 1.9.20 to AGP 8.7.3/Kotlin 2.0.21 (Dec 2024)_

- [x] 1.9 Implement Android connection manager with dual connection mode
  - Create Connection Manager with local/remote URL configuration
  - Configure separate certificate pins for local and remote Cloudflare certificates
  - Implement local connection attempt with 2-second timeout
  - Implement automatic fallback to remote connection
  - Add network type detection (WiFi vs mobile data)
  - Store connection URLs and certificate fingerprints in EncryptedSharedPreferences
  - _Requirements: 2.8, 2.9, 2.10_

- [x] 1.10 Write property tests for connection manager
  - **Property 48: Local Connection Priority**
  - **Validates: Requirements 2.8, 2.9**
  - **Property 49: Connection Timeout**
  - **Validates: Requirements 2.10**

- [x] 1.11 Implement Android setup wizard
  - Create setup screen for API key input (stored encrypted)
  - Create setup screen for remote URL input (required) with certificate fingerprint
  - Create setup screen for local URL input (optional) with certificate fingerprint
  - Test both connections and display status
  - Save configuration to EncryptedSharedPreferences
  - _Requirements: 17.5, 17.6_

- [x] 1.12 Implement Android GPS tracking foreground service
  - Create foreground service with persistent notification
  - Implement GPS location updates with configurable interval (default 5 seconds)
  - Store GPS points in Room database
  - Handle wake lock for continuous tracking
  - Implement start/stop trip functionality
  - _Requirements: 4.1, 4.2_

- [x] 1.13 Implement Trip service and API endpoints
  - Create Trip service with CRUD operations
  - Implement POST /api/v1/trips (create trip)
  - Implement GET /api/v1/trips (list trips with filters)
  - Implement GET /api/v1/trips/:id (get trip with GPS points)
  - Implement PUT /api/v1/trips/:id (update trip)
  - Implement GPS statistics calculation (duration, distance, speed)
  - Implement stop point detection (45-foot radius, 5 minutes)
  - _Requirements: 4.3, 4.4, 4.5, 4.8, 5.1_

- [x] 1.14 Write property tests for Trip service
  - **Property 8: Trip Statistics Calculation**
  - **Validates: Requirements 4.3**
  - **Property 9: Stop Point Detection**
  - **Validates: Requirements 4.4**
  - **Property 10: Trip Required Fields**
  - **Validates: Requirements 4.5**
  - **Property 11: Speed and Heading Derivation**
  - **Validates: Requirements 4.8**

- [x] 1.15 Implement Android trip recording UI
  - Create trip list screen showing all trips
  - Create active trip screen with start/stop buttons
  - Create trip detail screen showing statistics and GPS route
  - Implement ViewModels for each screen
  - Connect UI to foreground service
  - _Requirements: 4.1, 5.1_

- [x] 1.16 Implement Android sync service for trips
  - Create WorkManager job for syncing trips
  - Implement trip upload to backend API
  - Handle offline storage and sync queue
  - Implement conflict resolution using newest timestamp with user notification
  - Log conflict details for user review
  - _Requirements: 4.10, 15.3, 15.4, 15.6_

- [x] 1.17 Write property tests for sync service
  - **Property 12: Offline Data Sync Round Trip**
  - **Validates: Requirements 4.10, 15.3**
  - **Property 43: Sync Conflict Resolution**
  - **Validates: Requirements 15.4**
  - **Property 55: Sync Conflict Notification**
  - **Validates: Requirements 15.4, 15.6**

- [x] 1.18 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 1.19 Manual validation: Basic trip logging
  - **User Action**: Start Docker Compose and verify backend is running
  - **User Action**: Create a boat via API or Android app
  - **User Action**: Start a trip on Android app and verify GPS tracking works
    - **Android Studio**: Open project in Android Studio
    - **Android Studio**: Click Run (▶) to install app on emulator/device
    - **Android Studio**: View → Tool Windows → Logcat to monitor GPS updates
    - **Android Studio**: Filter Logcat by "GPS" or "Location" to see tracking logs
  - **User Action**: Stop the trip and verify it appears in the trip list
  - **User Action**: Verify trip statistics (duration, distance) are calculated correctly
  - **User Action**: Test offline trip recording and sync when back online

- [x] 1.20 Simplify Android setup wizard
  - Remove local server configuration from initial setup flow
  - Make local server an advanced/optional setting accessible from settings screen
  - Update setup to only require: Server URL and API Key
  - Update setup validation to work without certificate pins in debug builds
  - _Requirements: 17.5, 17.6_

- [x] 1.21 Implement Android Boat management screen
  - Create BoatListScreen showing all boats from API
  - Create AddBoatDialog for creating new boats
  - Implement boat creation via API
  - Add boat enable/disable toggle
  - Add set active boat functionality
  - Store boats in Room database for offline access
  - Implement sync with backend API
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 1.22 Update StartTripDialog to use boat dropdown
  - Fetch available boats from Room database
  - Replace boat ID text field with dropdown selector
  - Show boat names instead of IDs
  - Handle case when no boats exist (show message to create boat first)
  - Default to active boat if one is set
  - _Requirements: 3.6, 4.5_

- [x] 1.23 Implement main navigation structure
  - Create bottom navigation bar with tabs: Trips, Boats, Settings
  - Implement navigation between main sections
  - Update MainActivity to use main navigation instead of going directly to TripNavigation
  - Add proper back navigation handling
  - _Requirements: 17.1, 17.2_

- [x] 1.24 Fix trip start functionality
  - Add error handling and logging to trip start flow
  - Validate boat exists before starting trip
  - Show error message if boat doesn't exist
  - Update GPS tracking service to handle errors gracefully
  - Add Logcat logging for debugging trip start issues
  - _Requirements: 4.1, 4.2_

- [x] 1.25 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 1.26 Manual validation: Navigation and boat management
  - **User Action**: Open Android app and verify bottom navigation is visible
  - **User Action**: Navigate to Boats tab and create a new boat
    - **Android Studio**: Monitor Logcat for API calls and responses
  - **User Action**: Verify boat appears in boat list
  - **User Action**: Set a boat as active
  - **User Action**: Navigate to Trips tab and start a new trip
  - **User Action**: Verify boat dropdown shows available boats
  - **User Action**: Verify active boat is pre-selected in dropdown
  - **User Action**: Start trip and verify it works without errors
    - **Android Studio**: Check Logcat for any error messages
    - **Android Studio**: Use Database Inspector to verify trip is stored in Room
  - **User Action**: Test offline boat creation and sync
    - **Android Studio**: Disable network, create boat, re-enable and verify sync
    - **Android Studio**: Use emulator Extended Controls (⋯) → Settings → turn off WiFi/Data
    - **Android Studio**: Record trip offline, then re-enable network and verify sync
  - **User Action**: Verify stop points are detected correctly (5+ minutes in 45-foot radius)
    - **Android Studio**: Use emulator Extended Controls (⋯) → Location to set GPS coordinates
    - **Android Studio**: Set same location for 5+ minutes and verify stop point detection in Logcat


## Phase 1.5: Authentication Migration (Username/Password)

**CRITICAL**: This phase replaces API key authentication with username/password + JWT tokens. Must be completed before proceeding to Phase 2.

- [x] 1.27 Update Prisma schema for user authentication
  - Remove ApiKey model
  - Add User model (id, username, passwordHash, createdAt, updatedAt)
  - Add SessionToken model (id, userId, token, expiresAt, createdAt, isRevoked)
  - Create migration
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 1.28 Install authentication dependencies
  - Install bcrypt for password hashing
  - Install jsonwebtoken for JWT token generation
  - Update package.json
  - _Requirements: 2.3_

- [x] 1.29 Implement authentication service
  - Remove old API key validation methods
  - Implement `login(username, password)` - validates credentials, issues JWT
  - Implement `validateToken(token)` - validates JWT signature and expiration
  - Implement `logout(token)` - invalidates token
  - Implement `changePassword(userId, oldPassword, newPassword)` - changes password, invalidates all tokens
  - Implement `hashPassword(password)` - bcrypt hashing
  - Implement `comparePassword(password, hash)` - bcrypt comparison
  - _Requirements: 2.2, 2.3, 2.13_

- [x] 1.30 Update authentication middleware
  - Replace API key middleware with JWT token validation
  - Extract token from Authorization header (Bearer token)
  - Validate token signature and expiration
  - Check if token is revoked
  - Return 401 for invalid/expired/revoked tokens
  - _Requirements: 2.4, 2.7_

- [x] 1.31 Remove public registration endpoint
  - Ensure no public API endpoint exists for user registration
  - Add middleware to reject any registration attempts via API
  - _Requirements: 2.14_

- [x] 1.32 Implement CLI user management commands
  - Create `npm run create-user` command
  - Create `npm run change-password` command
  - Create `npm run list-users` command
  - Commands should work via docker-compose exec
  - _Requirements: 2.1, 2.15, 21.4, 21.5, 21.6_

- [x] 1.33 Implement database reset command for development
  - Create `npm run reset-db` command
  - Drop all tables and recreate schema
  - Optionally create default user if --username and --password provided
  - Create `npm run seed-db` command for test data
  - _Requirements: 21.1, 21.2, 21.3_

- [x] 1.34 Implement initial setup flow
  - Check if any users exist on server startup
  - If no users, allow first user creation via:
    - Environment variables (INITIAL_USER, INITIAL_PASSWORD)
    - Web setup wizard (when implemented)
    - CLI command
  - _Requirements: 1.6, 2.15, 17.1, 17.2_

- [x] 1.35 Create login API endpoint
  - Implement POST /api/v1/auth/login
  - Accept username and password
  - Validate credentials against bcrypt hash
  - Generate JWT token with 30-day expiration
  - Return user info and token
  - _Requirements: 2.2_

- [x] 1.36 Create logout API endpoint
  - Implement POST /api/v1/auth/logout
  - Accept token in Authorization header
  - Add token to revocation list
  - Return success response
  - _Requirements: 2.7_

- [x] 1.37 Create password change API endpoint
  - Implement POST /api/v1/auth/change-password
  - Require current password and new password
  - Validate current password
  - Hash new password with bcrypt
  - Invalidate all existing tokens for user
  - Return success response
  - _Requirements: 2.13_

- [x] 1.38 Write property tests for authentication
  - **Property 1: Session Token Authentication**
  - **Validates: Requirements 2.4, 2.7**
  - **Property 2: Password Hashing**
  - **Validates: Requirements 2.3**
  - **Property 3: Login Token Issuance**
  - **Validates: Requirements 2.2**
  - **Property 4: Password Change Token Invalidation**
  - **Validates: Requirements 2.13**
  - **Property 5: Public Registration Rejection**
  - **Validates: Requirements 2.14**
  - **Property 6: CLI User Creation**
  - **Validates: Requirements 2.1, 21.4**
  - **Property 7: Database Reset**
  - **Validates: Requirements 21.1, 21.2**

- [x] 1.39 Update Android app for username/password login
  - Remove API key input from setup wizard
  - Create login screen with username/password fields
  - Store JWT token in EncryptedSharedPreferences (instead of API key)
  - Update API client to use Bearer token authentication
  - Handle token expiration (prompt for re-login)
  - _Requirements: 2.2, 2.4, 2.7, 17.5_

- [x] 1.40 Update Android connection manager for JWT tokens
  - Update all API requests to use Bearer token instead of API key
  - Handle 401 responses (token expired/invalid)
  - Redirect to login screen on authentication failure
  - Maintain dual connection mode (local/remote)
  - _Requirements: 2.4, 2.7, 2.10, 2.11_

- [x] 1.41 Update environment variables and documentation
  - Remove API_KEY from .env.example
  - Add JWT_SECRET and JWT_EXPIRATION
  - Update README.md with new authentication flow
  - Document CLI commands for user management
  - Document database reset commands
  - Update docker-compose.yml if needed
  - _Requirements: 1.2, 2.1_

- [x] 1.42 Update all steering documents
  - Update product.md with username/password authentication
  - Update tech.md with bcrypt and jsonwebtoken dependencies
  - Update structure.md with new security model
  - _Requirements: All_

- [x] 1.43 Run all authentication property tests
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise
  - Verify old API key tests are removed/updated
  - **COMPLETED**: All 7 authentication property tests pass with 100+ iterations each
  - **COMPLETED**: All 38 authentication unit tests pass
  - **COMPLETED**: Fixed validation order in password change endpoint
  - **COMPLETED**: Fixed token invalidation issues in unit tests

- [x] 1.44 Manual validation: Authentication migration
  - **User Action**: Reset database using CLI command
    ```bash
    docker-compose exec backend npm run reset-db -- --username admin --password testpass
    ```
  - **User Action**: Verify user was created
    ```bash
    docker-compose exec backend npm run list-users
    ```
  - **User Action**: Test login via API (curl or Postman)
    ```bash
    curl -X POST http://localhost:8585/api/v1/auth/login \
      -H "Content-Type: application/json" \
      -d '{"username":"admin","password":"testpass"}'
    ```
  - **User Action**: Verify JWT token is returned
  - **User Action**: Test API request with JWT token
    ```bash
    curl http://localhost:8585/api/v1/boats \
      -H "Authorization: Bearer <token>"
    ```
  - **User Action**: Test invalid token is rejected
  - **User Action**: Test password change invalidates old tokens
  - **User Action**: Create additional user via CLI
    ```bash
    docker-compose exec backend npm run create-user -- --username john --password secret
    ```
  - **User Action**: Test Android app login screen
    - **Android Studio**: Run app, verify login screen appears
    - **Android Studio**: Enter credentials and verify login works
    - **Android Studio**: Monitor Logcat for authentication flow
    - **Android Studio**: Use Database Inspector to verify token storage in EncryptedSharedPreferences
  - **User Action**: Test Android app with expired token
    - **Android Studio**: Manually expire token in database or wait for expiration
    - **Android Studio**: Verify app redirects to login screen
  - **User Action**: Test that public registration is rejected
    ```bash
    curl -X POST http://localhost:8585/api/v1/auth/register \
      -H "Content-Type: application/json" \
      -d '{"username":"hacker","password":"test"}'
    ```
    - Should return 403 or 404 error
  - **User Action**: Verify all existing functionality still works with new auth
    - Test boat creation, trip recording, etc.
    - **Android Studio**: Monitor Logcat for any authentication errors

## Phase 2: Manual Data Entry

- [x] 2. Implement manual data entry for trips
- [x] 2.1 Extend Trip schema with manual data fields
  - Add ManualData fields to Prisma schema (engineHours, fuelConsumed, weatherConditions, numberOfPassengers, destination)
  - Create migration
  - Update Trip service to handle manual data
  - _Requirements: 5.4_

- [x] 2.2 Create API endpoint for adding manual data to trips
  - Implement PATCH /api/v1/trips/:id/manual-data
  - Validate manual data inputs
  - _Requirements: 5.4_

- [x] 2.3 Implement trip editing functionality in backend
  - Implement endpoint for editing water type, boat selection, role
  - Add validation for editable fields
  - _Requirements: 5.3_

- [x] 2.4 Write property test for trip editability
  - **Property 14: Trip Editability**
  - **Validates: Requirements 5.3**

- [x] 2.5 Create Android UI for manual data entry
  - Create manual data entry form in trip detail screen
  - Add fields for engine hours, fuel, weather, passengers, destination
  - Implement form validation
  - Save to Room database and sync to backend
  - _Requirements: 5.4_

- [x] 2.6 Implement trip editing UI in Android app
  - Add edit button to trip detail screen
  - Create edit form for water type, boat, role
  - Implement save functionality with sync
  - _Requirements: 5.3_

- [x] 2.7 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 2.8 Manual validation: Manual data entry
  - **User Action**: Open an existing trip in Android app
  - **User Action**: Add manual data (engine hours, fuel, weather, passengers, destination)
  - **User Action**: Verify data saves and syncs to backend
    - **Android Studio**: Monitor Logcat for sync success messages
    - **Android Studio**: Use App Inspection → Database Inspector to verify Room database
  - **User Action**: Edit trip water type, boat selection, and role
  - **User Action**: Verify edits persist after sync
    - **Android Studio**: Check Network Inspector to see API requests

## Phase 3: Captain's License Progress Tracking

- [x] 3. Implement captain's license tracking
- [x] 3.1 Create Captain's Log service
  - Implement sea time day calculation logic
  - Handle 4-hour minimum per day rule
  - Handle multi-day trip calculation
  - Handle same-day trip aggregation
  - Calculate days in last 3 years
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

- [x] 3.2 Write property tests for sea time calculations
  - **Property 17: Sea Time Day Calculation**
  - **Validates: Requirements 6.1**
  - **Property 18: Multi-Day Trip Sea Time**
  - **Validates: Requirements 6.2**
  - **Property 19: Same-Day Trip Aggregation**
  - **Validates: Requirements 6.4**
  - **Property 20: Cross-Boat License Progress**
  - **Validates: Requirements 6.5**

- [x] 3.3 Create API endpoint for license progress
  - Implement GET /api/v1/captain-log/progress
  - Return total days, days in last 3 years, total hours
  - _Requirements: 6.6_

- [x] 3.4 Write property test for license progress display
  - **Property 21: License Progress Display Completeness**
  - **Validates: Requirements 6.6**

- [x] 3.5 Implement license goal estimation
  - Calculate days remaining to 360-day goal
  - Calculate days remaining to 90-day-in-3-years goal
  - Estimate completion date based on current rate
  - _Requirements: 6.7, 6.8_

- [x] 3.6 Write property tests for goal estimation
  - **Property 22: License Goal Estimation (360 days)**
  - **Validates: Requirements 6.7**
  - **Property 23: License Goal Estimation (90 days in 3 years)**
  - **Validates: Requirements 6.8**

- [x] 3.7 Create Android UI for license progress
  - Create license progress screen
  - Display total days, days in last 3 years
  - Show progress bars for both goals
  - Display estimated completion dates
  - Add toggle to enable/disable tracking
  - _Requirements: 6.6, 6.7, 6.8, 6.9_

- [x] 3.8 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 3.9 Manual validation: Captain's license tracking
  - **User Action**: Navigate to license progress screen in Android app
  - **User Action**: Verify total sea time days are calculated correctly (4+ hours = 1 day)
    - **Android Studio**: Check Logcat for sea time calculation logs
  - **User Action**: Verify days in last 3 years are accurate
  - **User Action**: Check that same-day trips aggregate correctly
  - **User Action**: Verify multi-day trips count correctly
  - **User Action**: Check estimated completion dates for both goals (360 days, 90 in 3 years)
  - **User Action**: Toggle license tracking on/off and verify it persists
    - **Android Studio**: Use Database Inspector to verify EncryptedSharedPreferences storage


## Phase 4: Notes System

- [x] 4. Implement notes management
- [x] 4.1 Create Note schema and service
  - Add Note entity to Prisma schema with type, content, tags
  - Create Note service with CRUD operations
  - Implement tag management
  - _Requirements: 7.1, 7.2, 7.4, 7.6_

- [x] 4.2 Create API endpoints for notes
  - Implement POST /api/v1/notes (create note)
  - Implement GET /api/v1/notes (list with filters)
  - Implement PUT /api/v1/notes/:id (update note)
  - Implement DELETE /api/v1/notes/:id (delete note)
  - Implement tag filtering and search
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 4.3 Write property tests for notes
  - **Property 16: Note-Trip Association**
  - **Validates: Requirements 5.6, 7.3**
  - **Property 24: Boat-Specific Note Association**
  - **Validates: Requirements 7.2**
  - **Property 25: General Note Independence**
  - **Validates: Requirements 7.4**
  - **Property 26: Note Tag Filtering**
  - **Validates: Requirements 7.5**

- [x] 4.4 Create Android notes UI
  - Create notes list screen with filtering
  - Create note editor screen
  - Implement note type selection (general, boat, trip)
  - Add tag management UI
  - Implement offline storage and sync
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 4.5 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 4.6 Manual validation: Notes system
  - **User Action**: Create a general note and verify it appears in notes list
  - **User Action**: Create a boat-specific note and verify it's associated with the correct boat
  - **User Action**: Add a note to a trip and verify it appears in trip details
  - **User Action**: Add tags to notes and test tag filtering
  - **User Action**: Search notes by content
  - **User Action**: Edit and delete notes, verify changes sync
    - **Android Studio**: Monitor Logcat for sync operations
    - **Android Studio**: Use Database Inspector to verify note storage in Room

## Phase 5: To-Do Lists

- [x] 5. Implement to-do list management
- [x] 5.1 Create TodoList and TodoItem schemas
  - Add TodoList and TodoItem entities to Prisma schema
  - Create Todo service with CRUD operations
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 5.2 Create API endpoints for to-do lists
  - Implement POST /api/v1/todos (create list)
  - Implement GET /api/v1/todos (list all lists)
  - Implement POST /api/v1/todos/:id/items (add item)
  - Implement PATCH /api/v1/todos/items/:id/complete (toggle completion)
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 5.3 Write property tests for to-do lists
  - **Property 27: Todo List Title Validation**
  - **Validates: Requirements 8.1**
  - **Property 28: Boat-Specific Todo Association**
  - **Validates: Requirements 8.2**
  - **Property 29: Todo Item Storage**
  - **Validates: Requirements 8.3**
  - **Property 30: Todo Item Completion**
  - **Validates: Requirements 8.4**
  - **Property 31: Todo List Display Completeness**
  - **Validates: Requirements 8.5**

- [x] 5.4 Create Android to-do list UI
  - Create to-do lists screen showing all lists
  - Create list detail screen with items
  - Implement item completion toggle
  - Add new list and new item functionality
  - Implement offline storage and sync
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [x] 5.5 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 5.6 Manual validation: To-do lists
  - **User Action**: Create a general to-do list and add items
  - **User Action**: Create a boat-specific to-do list
  - **User Action**: Toggle item completion and verify timestamp is recorded
    - **Android Studio**: Check Database Inspector for completion timestamps
  - **User Action**: Verify completed items remain visible
  - **User Action**: Test offline creation and sync
    - **Android Studio**: Disable network in emulator Extended Controls, create items, re-enable and verify sync
  - **User Action**: Delete lists and items, verify changes persist


## Phase 6: Maintenance Tasks

- [x] 6. Implement maintenance task management
- [x] 6.1 Create MaintenanceTask schema and service
  - Add MaintenanceTask and MaintenanceCompletion entities to Prisma schema
  - Create Maintenance service with CRUD operations
  - Implement recurrence scheduling logic
  - _Requirements: 9.1, 9.2, 9.3_

- [x] 6.2 Create API endpoints for maintenance tasks
  - Implement POST /api/v1/maintenance (create task)
  - Implement GET /api/v1/maintenance (list tasks)
  - Implement POST /api/v1/maintenance/:id/complete (complete task)
  - Implement GET /api/v1/maintenance/:id/history (get history)
  - Auto-schedule next occurrence on completion
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.8_

- [x] 6.3 Write property tests for maintenance tasks
  - **Property 32: Maintenance Task-Boat Association**
  - **Validates: Requirements 9.1**
  - **Property 33: Recurring Task Auto-Scheduling**
  - **Validates: Requirements 9.4**
  - **Property 35: Maintenance History Completeness**
  - **Validates: Requirements 9.8**

- [x] 6.4 Implement notification service
  - Create Notification service
  - Implement scheduled job to check for tasks due within 7 days
  - Create notifications for both web and Android
  - Respect boat enabled/disabled status
  - _Requirements: 9.6, 18.1, 18.2, 18.3, 18.4_

- [x] 6.5 Write property test for disabled boat notification suppression
  - **Property 4: Disabled Boat Notification Suppression**
  - **Validates: Requirements 3.3, 9.7, 18.3**
  - Generate random boats with enabled/disabled status
  - Create maintenance tasks for both enabled and disabled boats
  - Verify notifications are only generated for enabled boats
  - Test that disabling a boat suppresses its existing notifications

- [x] 6.6 Write property test for maintenance due notifications
  - **Property 34: Maintenance Due Notifications**
  - **Validates: Requirements 9.6, 18.1, 18.2**
  - Generate random maintenance tasks with various due dates
  - Verify notifications are created for tasks due within 7 days
  - Verify notifications are not created for tasks due beyond 7 days
  - Test notification timing accuracy

- [x] 6.7 Write property test for notification content completeness
  - **Property 47: Notification Content Completeness**
  - **Validates: Requirements 18.4**
  - Generate random maintenance tasks and notifications
  - Verify all required notification fields are present (title, message, boat info, due date)
  - Test notification content accuracy and formatting
  - Verify notification data matches source maintenance task

- [x] 6.8 Create Android maintenance UI
  - Create maintenance task list screen
  - Create task detail screen with history
  - Create task completion form with cost and notes
  - Implement notification handling
  - Add recurrence configuration UI
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.8_

- [x] 6.9 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 6.10 Manual validation: Maintenance tasks
  - **User Action**: Create a maintenance task with recurrence schedule
  - **User Action**: Verify task appears in maintenance list
  - **User Action**: Complete a task and verify next occurrence is auto-scheduled
    - **Android Studio**: Check Logcat for scheduling logs
  - **User Action**: Add cost and notes to completion
  - **User Action**: Verify notification appears 7 days before due date
    - **Android Studio**: Use emulator to advance system date (Extended Controls → Settings → Date & Time)
    - **Android Studio**: Or trigger notification manually via WorkManager testing
  - **User Action**: Disable a boat and verify its maintenance notifications are suppressed
  - **User Action**: View maintenance history for a task


## Phase 7: Map Visualization and Marked Locations

- [x] 7. Implement map features
- [x] 7.1 Create MarkedLocation schema and service
  - Add MarkedLocation entity to Prisma schema
  - Create Location service with CRUD operations
  - Implement distance calculation utility
  - _Requirements: 10.2, 10.5, 10.6_

- [x] 7.2 Create API endpoints for marked locations
  - Implement POST /api/v1/locations (create location)
  - Implement GET /api/v1/locations (list locations)
  - Implement PUT /api/v1/locations/:id (update location)
  - Implement DELETE /api/v1/locations/:id (delete location)
  - Implement GET /api/v1/locations/nearby (find nearby locations)
  - _Requirements: 10.2, 10.4, 10.5, 10.6_

- [x] 7.3 Write property tests for locations
  - **Property 36: Marked Location Storage**
  - **Validates: Requirements 10.2**
  - **Property 37: Distance Calculation**
  - **Validates: Requirements 10.5**

- [x] 7.4 Implement time zone service
  - Create time zone lookup utility using GPS coordinates
  - Implement timezone storage with trips
  - Default to device timezone when GPS unavailable
  - _Requirements: 16.1, 16.2, 16.3, 16.4_

- [x] 7.5 Write property tests for time zones
  - **Property 44: Timezone Determination**
  - **Validates: Requirements 16.1**
  - **Property 45: Timezone Display**
  - **Validates: Requirements 16.3**
  - **Property 46: Timezone Preservation**
  - **Validates: Requirements 16.4**

- [x] 7.6 Implement Android map UI with Google Maps
  - Create map screen with Google Maps integration
  - Display trip routes as lines with start/end/stop markers
  - Display marked locations with labels
  - Implement location marking functionality
  - Show distance to marked locations from current position
  - Make locations selectable during trip planning
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 7.7 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 7.8 Manual validation: Map and locations
  - **User Action**: View map screen and verify trip routes are displayed correctly
    - **Android Studio**: Use Layout Inspector to verify Google Maps integration
  - **User Action**: Mark a location on the map with category and notes
  - **User Action**: Verify marked locations appear on map with correct labels
  - **User Action**: Check distance calculation from current position to marked locations
    - **Android Studio**: Use Extended Controls → Location to set different GPS coordinates
  - **User Action**: Select a marked location during trip planning
  - **User Action**: Verify stop points are highlighted on trip routes
  - **User Action**: Test time zone display for trips in different locations
    - **Android Studio**: Set emulator location to different time zones and verify display


## Phase 8: Photo Attachments

- [x] 8. Implement photo managementdocker
- [x] 8.1 Create Photo schema and service
  - Add Photo entity to Prisma schema
  - Create Photo service with upload and optimization
  - Set up Sharp for image processing
  - Configure photo storage directories
  - _Requirements: 11.1, 11.2, 11.6_

- [x] 8.2 Create API endpoints for photos
  - Implement POST /api/v1/photos (upload photo)
  - Implement GET /api/v1/photos/:id (get photo)
  - Implement GET /api/v1/photos (list photos by entity)
  - Implement DELETE /api/v1/photos/:id (delete photo)
  - Implement web optimization (1920px width)
  - _Requirements: 11.1, 11.2, 11.5, 11.6_

- [x] 8.3 Write property tests for photos
  - **Property 15: Photo-Trip Association**
  - **Validates: Requirements 5.5, 11.6**
  - **Property 38: Photo Storage and Retrieval**
  - **Validates: Requirements 11.1**
  - **Property 39: Photo Web Optimization**
  - **Validates: Requirements 11.2**

- [x] 8.4 Implement Android photo capture and upload
  - Add camera permission handling
  - Implement photo capture functionality
  - Store photos locally in Room database
  - Implement WiFi-only upload with network detection
  - Prefer local connection for uploads when available
  - Retain local photos for 7 days after successful upload before deletion
  - _Requirements: 11.3, 11.4, 11.5_

- [x] 8.5 Write property tests for photo upload restrictions
  - **Property 50: Photo Upload Network Restriction**
  - **Validates: Requirements 11.3**
  - **Property 51: Local Photo Upload Preference**
  - **Validates: Requirements 11.4**
  - **Property 52: Photo Retention Period**
  - **Validates: Requirements 11.5**

- [x] 8.6 Add photo attachment UI to trips and maintenance
  - Add photo attachment button to trip detail screen
  - Add photo attachment button to maintenance completion form
  - Display attached photos in grid view
  - Implement photo viewer
  - Show upload status and pending count
  - _Requirements: 5.5, 9.5, 11.4_

- [x] 8.7 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 8.8 Manual validation: Photo attachments
  - **User Action**: Attach a photo to a trip using Android camera
    - **Android Studio**: Emulator camera can use virtual scene or host webcam
    - **Android Studio**: Extended Controls → Camera to configure camera settings
  - **User Action**: Verify photo is stored locally and queued for upload
    - **Android Studio**: Use Database Inspector to see photo records in Room
    - **Android Studio**: Check Logcat for upload queue messages
  - **User Action**: Connect to WiFi and verify photo uploads automatically
    - **Android Studio**: Extended Controls → Settings → toggle WiFi on
  - **User Action**: Verify local connection is preferred for photo upload when available
    - **Android Studio**: Monitor Network Inspector to see which endpoint is used
  - **User Action**: View photo in trip details (web-optimized version)
  - **User Action**: Attach photos to maintenance completion
  - **User Action**: Verify photos are retained locally for 7 days after upload
    - **Android Studio**: Check Database Inspector for retention timestamps
  - **User Action**: Test that photos don't upload on mobile data
    - **Android Studio**: Extended Controls → Settings → disable WiFi, enable Cellular, verify no upload


## Phase 9: Database Backup

- [x] 9. Implement database backup functionality
- [x] 9.1 Create Backup service
  - Implement manual backup creation using pg_dump
  - Include photo files in backup archive
  - Implement automatic backup scheduling
  - Configure backup storage path
  - Implement backup listing
  - _Requirements: 12.1, 12.2, 12.3_

- [x] 9.2 Write property test for backup completeness
  - **Property 40: Database and Photo Backup Completeness**
  - **Validates: Requirements 12.3**

- [x] 9.3 Create API endpoints for backups
  - Implement POST /api/v1/backups (create manual backup)
  - Implement GET /api/v1/backups (list backups)
  - Implement GET /api/v1/backups/:id/download (download backup)
  - _Requirements: 12.1, 12.4_

- [x] 9.4 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 9.5 Manual validation: Database backup
  - **User Action**: Trigger a manual backup via web interface
  - **User Action**: Verify backup file is created with timestamp
  - **User Action**: Verify backup includes both database and photos
  - **User Action**: Download backup file
  - **User Action**: Test automatic backup scheduling (if implemented)
  - **User Action**: Verify backup list shows all available backups


## Phase 10: Arduino/Sensor Integration

- [ ] 10. Implement sensor integration framework
- [x] 10.1 Create SensorReading and SensorType schemas
  - Add SensorReading and SensorType entities to Prisma schema
  - Create Sensor service with data ingestion
  - Implement flexible sensor type registration
  - _Requirements: 13.2, 13.3, 13.4, 13.5_

- [x] 10.2 Create API endpoints for sensor data
  - Implement POST /api/v1/sensors/types (register sensor type)
  - Implement POST /api/v1/sensors/readings (record sensor data)
  - Implement GET /api/v1/sensors/readings (get sensor data by trip)
  - _Requirements: 13.2, 13.3, 13.4_

- [x] 10.3 Write property test for sensor data relay
  - **Property 41: Sensor Data Relay**
  - **Validates: Requirements 13.2**

- [x] 10.4 Implement Android Bluetooth service
  - Add Bluetooth permissions
  - Implement device discovery and pairing
  - Create Bluetooth service for Arduino communication
  - Implement data stream parsing
  - Buffer sensor data and relay to backend
  - _Requirements: 13.1, 13.2_

- [x] 10.5 Create Android sensor management UI
  - Create sensor configuration screen
  - Display connected Bluetooth devices
  - Show real-time sensor readings during trips
  - Implement sensor type registration UI
  - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [x] 10.6 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [x] 10.7 Manual validation: Sensor integration
  - **User Action**: Pair Arduino device via Bluetooth on Android
    - **Android Studio**: Physical device required for Bluetooth testing (emulator has limited BT support)
    - **Android Studio**: Monitor Logcat for Bluetooth pairing and connection logs
  - **User Action**: Start a trip and verify sensor data is being received
    - **Android Studio**: Filter Logcat by "Bluetooth" or "Sensor" to see data stream
  - **User Action**: View real-time sensor readings during trip
  - **User Action**: Stop trip and verify sensor data is relayed to backend
    - **Android Studio**: Check Network Inspector for sensor data API calls
  - **User Action**: Register a new sensor type via UI
  - **User Action**: View historical sensor data for a completed trip
    - **Android Studio**: Use Database Inspector to verify sensor data storage

## Phase 11: Web Application - LCARS Design System

- [ ] 11. Build LCARS design system and core components
- [ ] 11.1 Set up React project with Vite
  - Initialize React 18 project with TypeScript
  - Configure Vite build tool
  - Set up styled-components
  - Install React Router, React Query, Axios
  - Configure environment variables
  - _Requirements: 1.5_

- [ ] 11.2 Implement LCARS design system components
  - Create LCARSButton component
  - Create LCARSPanel component
  - Create LCARSElbow component
  - Create LCARSBar component
  - Create LCARSColumn component
  - Create LCARSDataDisplay component
  - Create LCARSHeader component
  - Create LCARSAlert component
  - Define LCARS color palette and typography
  - _Requirements: 1.5_

- [ ] 11.3 Set up API client and authentication
  - Create Axios instance with base URL configuration
  - Implement API key authentication interceptor
  - Create API client methods for all endpoints
  - Set up React Query for data fetching
  - _Requirements: 2.1, 2.4_

- [ ] 11.4 Implement web setup wizard
  - Create setup wizard with LCARS styling
  - Guide user through boat configuration
  - Configure default settings
  - Display API key and connection info
  - Save configuration and redirect to dashboard
  - _Requirements: 17.1, 17.2, 17.3_

- [ ] 11.5 Create dashboard page
  - Implement LCARS dashboard layout
  - Display recent trips summary
  - Display captain's license progress
  - Display upcoming maintenance tasks
  - Display active to-do items
  - Add quick action buttons
  - _Requirements: 14.1, 14.2, 14.5_

- [ ] 11.6 Write property test for dashboard content
  - **Property 42: Dashboard Content Completeness**
  - **Validates: Requirements 14.2**

- [ ] 11.7 Implement boat management pages
  - Create boat list page with LCARS styling
  - Create boat detail page
  - Create boat form for add/edit
  - Implement boat status toggle
  - Implement active boat selector
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 11.8 Implement trip management pages
  - Create trip list page with filters
  - Create trip detail page with statistics
  - Create trip edit form
  - Integrate Leaflet map for route visualization
  - Display manual data fields
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ] 11.9 Write property test for trip display
  - **Property 13: Trip Display Completeness**
  - **Validates: Requirements 5.1**

- [ ] 11.10 Implement notes pages
  - Create notes list page with filtering
  - Create note editor with LCARS styling
  - Implement tag selector
  - Add note type selection
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [ ] 11.11 Implement to-do list pages
  - Create to-do lists overview page
  - Create list detail page with items
  - Implement item completion toggle
  - Add new list and item forms
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ] 11.12 Implement maintenance pages
  - Create maintenance task list page
  - Create task detail page with history
  - Create task form with recurrence scheduler
  - Display cost tracking
  - Show maintenance history with photos
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.8_

- [ ] 11.13 Implement map page with Leaflet
  - Create map view page with LCARS controls
  - Display all trip routes
  - Display marked locations
  - Implement location marking functionality
  - Show location details on click
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [ ] 11.14 Implement reports pages
  - Create captain's license progress page
  - Display progress charts with LCARS styling
  - Show estimates and completion dates
  - Create maintenance reports page
  - _Requirements: 6.6, 6.7, 6.8_

- [ ] 11.15 Implement settings and backup pages
  - Create settings page with LCARS styling
  - Implement API key management
  - Create backup manager page
  - Add manual backup trigger
  - Display backup list with download links
  - _Requirements: 2.3, 12.1, 12.4_

- [ ] 11.16 Implement calendar view
  - Create calendar component with LCARS styling
  - Display trips on calendar
  - Display maintenance tasks on calendar
  - Implement date navigation
  - _Requirements: 14.4_

- [ ] 11.17 Implement photo gallery
  - Create photo grid view
  - Implement photo viewer/lightbox
  - Display photos for trips and maintenance
  - Show web-optimized versions
  - _Requirements: 11.5_

- [ ] 11.18 Add navigation and routing
  - Implement LCARS-styled navigation menu
  - Set up React Router routes for all pages
  - Add breadcrumbs
  - Implement responsive layout
  - _Requirements: 14.3_

- [ ] 11.19 Run all property tests and verify they pass
  - Run property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [ ] 11.20 Manual validation: Web application
  - **User Action**: Complete web setup wizard and verify configuration saves
  - **User Action**: View dashboard and verify all widgets display correct data
  - **User Action**: Navigate through all pages using LCARS navigation
  - **User Action**: Test boat management (create, edit, enable/disable, set active)
  - **User Action**: View trip list with filters and verify trip details page
  - **User Action**: Test notes creation, editing, filtering, and search
  - **User Action**: Test to-do list management and item completion
  - **User Action**: View maintenance tasks and complete a task
  - **User Action**: View map with trip routes and marked locations
  - **User Action**: Test calendar view with trips and maintenance
  - **User Action**: View photo gallery for trips and maintenance
  - **User Action**: Test settings page and API key management
  - **User Action**: Verify LCARS design is consistent across all pages
  - **User Action**: Test responsive layout on different screen sizes


## Phase 12: Final Integration and Polish

- [ ] 12. Final integration, testing, and deployment preparation
- [ ] 12.1 Implement comprehensive error handling
  - Add error boundaries in React app
  - Implement user-friendly error messages
  - Add retry logic for failed requests
  - Implement offline indicators
  - _Requirements: Error Handling section_

- [ ] 12.2 Add loading states and optimistic updates
  - Implement loading spinners with LCARS styling
  - Add skeleton screens
  - Implement optimistic UI updates
  - Add progress indicators for long operations

- [ ] 12.3 Implement notification display in web app
  - Create notification panel with LCARS styling
  - Display maintenance due notifications
  - Implement notification read/unread status
  - Add notification actions
  - _Requirements: 18.2_

- [ ] 12.4 Add mock data for development
  - Create seed script with sample boats
  - Generate sample trips with GPS data
  - Create sample notes, to-dos, and maintenance tasks
  - Add sample photos
  - _Requirements: 17.4_

- [ ] 12.5 Create comprehensive README
  - Document system architecture
  - Provide setup instructions
  - Document environment variables
  - Add Cloudflare tunnel configuration guide
  - Include API documentation
  - Add troubleshooting section
  - _Requirements: 1.2_

- [ ] 12.6 Optimize Docker images
  - Use multi-stage builds for smaller images
  - Optimize layer caching
  - Add health checks
  - Configure restart policies

- [ ] 12.7 Add database indexes for performance
  - Add indexes on frequently queried fields
  - Optimize query performance
  - Test with large datasets

- [ ] 12.8 Implement rate limiting
  - Add rate limiting middleware to API
  - Configure appropriate limits
  - Return proper error responses

- [ ] 12.9 Add API versioning
  - Implement /api/v1 prefix for all endpoints
  - Document versioning strategy
  - _Requirements: 19.4_

- [ ] 12.10 Security hardening
  - Implement CORS configuration
  - Add helmet.js for security headers
  - Implement basic input validation (max lengths, required fields, data types)
  - Sanitize outputs to prevent XSS
  - Test certificate pinning for both local and remote connections
  - Test API key scrypt hashing and validation
  - Verify rate limiting works correctly
  - _Requirements: 2.1, 2.2, 2.4, 2.11, 19.6_

- [ ] 12.10a Write property test for input validation
  - **Property 54: Input Validation**
  - **Validates: Requirements 19.6**
  - Generate random inputs with invalid lengths, types, and missing required fields
  - Verify system rejects invalid inputs appropriately

- [ ] 12.11 Performance testing
  - Load test API endpoints
  - Test with large GPS datasets
  - Measure photo optimization performance
  - Test Android app battery consumption
  - Optimize slow queries

- [ ] 12.12 Cross-browser testing
  - Test web app in Chrome, Firefox, Safari, Edge
  - Fix any browser-specific issues
  - Ensure LCARS styling works across browsers

- [ ] 12.13 Android device testing
  - Test on multiple Android versions
    - **Android Studio**: Device Manager → Create multiple emulators (API 26, 30, 33, 35)
    - **Android Studio**: Run app on each emulator to test compatibility
  - Test GPS tracking accuracy
    - **Android Studio**: Extended Controls → Location → use GPX/KML playback for route simulation
    - **Android Studio**: Or manually set coordinates and verify tracking
  - Test offline functionality
    - **Android Studio**: Extended Controls → Settings → disable all network
    - **Android Studio**: Verify app functions offline and syncs when reconnected
  - Test photo upload on different networks
    - **Android Studio**: Toggle between WiFi and Cellular in Extended Controls
    - **Android Studio**: Monitor Network Inspector for upload behavior
  - Test Bluetooth connectivity
    - **Android Studio**: Physical device recommended (emulator BT support is limited)
    - **Android Studio**: Use Logcat to monitor Bluetooth connection status

- [ ] 12.14 Run all property tests and verify they pass
  - Run all property tests with minimum 100 iterations
  - Ensure all tests pass, ask the user if questions arise

- [ ] 12.15 Manual validation: Security and performance
  - **User Action**: Test API key authentication (valid and invalid keys)
    - **Android Studio**: Modify API key in EncryptedSharedPreferences via debug mode
    - **Android Studio**: Monitor Logcat for authentication success/failure
  - **User Action**: Verify scrypt hashing is used for API key storage (check database)
  - **User Action**: Test certificate pinning on Android (both local and remote)
    - **Android Studio**: Use invalid certificate and verify connection fails
    - **Android Studio**: Check Logcat for certificate pinning errors
  - **User Action**: Verify rate limiting works (make rapid API requests)
    - **Android Studio**: Create test function to make rapid requests, monitor responses
  - **User Action**: Test input validation (try invalid data, missing fields, excessive lengths)
  - **User Action**: Test dual connection mode (local priority, remote fallback)
    - **Android Studio**: Disable local backend, verify fallback to remote
    - **Android Studio**: Monitor Network Inspector to see which endpoint is used
  - **User Action**: Measure local connection timeout (should be ~2 seconds)
    - **Android Studio**: Check Logcat timestamps for connection attempts
  - **User Action**: Test offline functionality and sync recovery
    - **Android Studio**: Extended Controls → Settings → disable network, perform actions, re-enable
  - **User Action**: Load test with large GPS datasets
    - **Android Studio**: Use GPX playback with long route files
  - **User Action**: Test battery consumption during GPS tracking
    - **Android Studio**: Use Android Profiler (View → Tool Windows → Profiler)
    - **Android Studio**: Monitor Energy profiler during GPS tracking session
  - **User Action**: Test cross-browser compatibility (Chrome, Firefox, Safari, Edge)

- [ ] 12.16 Manual validation: End-to-end user scenarios
  - **User Action**: Complete full trip workflow (start, track, stop, add data, photos, notes)
    - **Android Studio**: Run app, monitor Logcat throughout entire workflow
    - **Android Studio**: Use Extended Controls → Location for GPS simulation
    - **Android Studio**: Use Database Inspector to verify data at each step
  - **User Action**: Test multi-boat scenario (switch active boat, verify data separation)
    - **Android Studio**: Check Database Inspector to verify boat-specific data isolation
  - **User Action**: Test maintenance workflow (create task, receive notification, complete, verify recurrence)
    - **Android Studio**: Advance system date to trigger notifications
    - **Android Studio**: Monitor WorkManager execution in Logcat
  - **User Action**: Test captain's license progress over multiple trips
  - **User Action**: Test sync conflict resolution (modify same trip on web and Android)
    - **Android Studio**: Monitor Logcat for conflict resolution logs
    - **Android Studio**: Verify notification appears for user
  - **User Action**: Test backup and restore workflow
  - **User Action**: Test sensor integration end-to-end (if Arduino available)
    - **Android Studio**: Physical device required for Bluetooth
    - **Android Studio**: Monitor Logcat for sensor data flow
  - **User Action**: Verify all notifications work correctly
    - **Android Studio**: Check notification panel on emulator/device
  - **User Action**: Test error handling (network failures, invalid data, etc.)
    - **Android Studio**: Extended Controls → Settings → simulate network conditions
    - **Android Studio**: Monitor Logcat for error handling and recovery

- [ ] 12.17 Final sign-off
  - **User Action**: Review all features against requirements document
  - **User Action**: Verify all property tests pass (minimum 100 iterations each)
  - **User Action**: Confirm system is ready for production use
  - **User Action**: Document any known issues or limitations


## Notes

- All property-based tests should run a minimum of 100 iterations
- Each property test must include the comment tag: `**Feature: boat-tracking-system, Property {number}: {property_text}**`
- Optional tasks marked with `*` can be skipped if time is limited, but are recommended for comprehensive testing
- Each checkpoint ensures the system is in a working state before proceeding
- The phased approach allows for incremental verification and feedback
- Mock data should be used during development to simulate a fully configured system
- All API endpoints should follow RESTful conventions and use the /api/v1 prefix
- Security should be a priority throughout development, not an afterthought
- The LCARS design system should be consistent across all web pages
- Android app should gracefully handle offline scenarios and sync when online
- Certificate pinning and API key authentication should be tested thoroughly
