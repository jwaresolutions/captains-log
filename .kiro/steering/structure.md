# Project Structure

## Development Environment

This project is developed on **macOS** using:
- **Shell**: zsh (default macOS shell)
- **Docker**: Docker Desktop for Mac
- **Node.js**: Installed via Homebrew or official installer
- **Android Studio**: macOS version for Android development

All file paths, commands, and tooling assume a macOS environment. Avoid Linux-specific commands or assumptions.

## Directory Organization

```
.
├── .kiro/
│   ├── specs/
│   │   └── boat-tracking-system/
│   │       ├── requirements.md
│   │       └── design.md
│   └── steering/           # AI assistant steering rules
│       ├── product.md
│       ├── tech.md
│       └── structure.md
├── backend/                # Node.js/Express API (IMPLEMENTED)
│   ├── src/
│   │   ├── services/      # Business logic services
│   │   ├── routes/        # API route handlers
│   │   ├── middleware/    # Express middleware (auth, error handling)
│   │   ├── models/        # Prisma schema and types
│   │   ├── utils/         # Utility functions
│   │   ├── scripts/       # CLI management scripts
│   │   └── index.ts       # Application entry point
│   ├── prisma/
│   │   ├── schema.prisma  # Database schema
│   │   └── migrations/    # Database migrations
│   ├── tests/
│   │   ├── unit/          # Unit tests
│   │   ├── integration/   # Integration tests
│   │   └── property/      # Property-based tests (55+ tests)
│   ├── uploads/           # Photo storage (Docker volume)
│   ├── backups/           # Database backups
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── web/                   # React web application (IMPLEMENTED)
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   │   └── lcars/     # LCARS design system components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API client services
│   │   ├── hooks/         # Custom React hooks
│   │   ├── context/       # React Context providers
│   │   ├── utils/         # Utility functions
│   │   ├── types/         # TypeScript type definitions
│   │   ├── styles/        # Global styles and LCARS theme
│   │   ├── App.tsx        # Root component
│   │   └── main.tsx       # Application entry point
│   ├── tests/
│   │   ├── unit/          # Component tests
│   │   ├── e2e/           # End-to-end tests
│   │   └── property/      # Property-based tests
│   ├── public/            # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── android/               # Android application (IMPLEMENTED)
│   ├── app/
│   │   ├── src/
│   │   │   ├── main/
│   │   │   │   ├── java/com/captainslog/
│   │   │   │   │   ├── ui/           # Jetpack Compose screens
│   │   │   │   │   ├── viewmodel/    # ViewModels
│   │   │   │   │   ├── repository/   # Data repositories
│   │   │   │   │   ├── database/     # Room database
│   │   │   │   │   ├── network/      # Retrofit API client
│   │   │   │   │   ├── service/      # Foreground services
│   │   │   │   │   ├── bluetooth/    # Bluetooth integration
│   │   │   │   │   ├── sync/         # WorkManager sync
│   │   │   │   │   ├── security/     # Certificate pinning, secure storage
│   │   │   │   │   ├── connection/   # Connection manager (local/remote)
│   │   │   │   │   └── util/         # Utility classes
│   │   │   │   └── AndroidManifest.xml
│   │   │   ├── test/      # Unit tests
│   │   │   └── androidTest/ # Instrumented tests
│   │   └── build.gradle.kts
│   ├── gradle/
│   ├── build.gradle.kts
│   └── settings.gradle.kts
├── docker-compose.yml     # Docker orchestration
├── docker-compose.dev.yml # Development Docker configuration
├── docker-compose.prod.yml # Production Docker configuration
├── run-property-tests.sh  # Universal property test runner (CRITICAL TOOL)
├── setup-verify.sh        # Development environment verification
├── temp/                  # Test scripts and configurations (excluded from git)
│   ├── test-results/      # Property test output files
│   ├── task-*.sh          # Task validation scripts
│   └── *.json             # Test configurations
├── .env.example           # Environment variables template
├── .env                   # Environment variables (not in git)
└── README.md              # Project documentation
```

## Conventions

### Backend
- Use TypeScript for all code
- Service layer pattern for business logic
- Prisma for database operations
- Express middleware for cross-cutting concerns
- RESTful API design with versioning (`/api/v1/`)
- Consistent error response format
- Structured logging with Winston
- Property-based tests tagged with `**Feature: boat-tracking-system, Property {number}**`

### Web Application
- Functional React components with hooks
- LCARS design system with styled-components (Star Trek TNG/Voyager aesthetic)
- Color palette: Orange (#FF9966, #FFCC99), Purple (#CC99CC, #9999CC), Blue (#6688CC), Black background
- LCARS components: LCARSButton, LCARSPanel, LCARSElbow, LCARSBar, LCARSColumn, LCARSDataDisplay, LCARSHeader, LCARSAlert
- React Query for server state management
- React Context for client state
- Custom hooks for reusable logic
- Leaflet for map visualization (integrated into LCARS frames)
- Responsive design with asymmetric LCARS layouts
- Accessibility compliance

### Android Application
- Kotlin with coroutines for async operations
- Minimum SDK 26 (Android 8.0), Target SDK 35 (Android 16)
- MVVM architecture pattern
- Jetpack Compose for UI
- Room for local database
- Repository pattern for data access
- WorkManager for background sync
- Foreground service for GPS tracking
- Dependency injection with Hilt (if needed)
- TLS certificate pinning with OkHttp (separate pins for local/remote Cloudflare certificates)
- EncryptedSharedPreferences for secure JWT session token storage (replaces API key storage)
- Login screen with username/password authentication
- Automatic token refresh and re-login on expiration
- Connection Manager with local/remote fallback (2-second local timeout)
- Bearer token authentication for all API requests
- 7-day local photo retention after successful upload
- Sync conflict notification to user

### Testing
- Unit tests for all business logic (80% coverage target for backend)
- Integration tests for API flows
- Property-based tests for all correctness properties (minimum 100 iterations)
- E2E tests for critical user flows
- Mock external dependencies in tests
- **CRITICAL**: When a task has multiple tests, ALL tests must pass consecutively in a single run before task completion
- After fixing any failing test, re-run ALL tests for that task to ensure no regressions
- Never mark a task complete if tests pass individually but not together
- See `.kiro/steering/testing.md` for detailed testing workflow requirements

### Database
- Prisma migrations for schema changes
- Foreign key constraints for referential integrity
- Indexes on frequently queried fields
- JSON columns for flexible metadata
- Cascade deletes where appropriate

### Code Organization
- Keep related files together (feature-based organization)
- Separate concerns (UI, business logic, data access)
- Use TypeScript interfaces for type safety
- Document complex algorithms and business rules
- Follow language-specific best practices (ESLint, Prettier, ktlint)

### Git Workflow
- Feature branches for development
- Descriptive commit messages
- Pull requests for code review
- Keep .env out of version control
- Tag releases with semantic versioning

### Security
- Never commit passwords or secrets
- Use environment variables for configuration
- Basic input validation (max lengths, required fields, data types)
- Sanitize data before database operations
- Use parameterized queries (Prisma handles this)
- HTTPS only for API communication (Cloudflare certificates for both local and remote)
- Username/password authentication with bcrypt password hashing (replaces API key authentication)
- JWT session tokens for API authentication with configurable expiration (default: 30 days)
- Session token invalidation on password changes
- No public user registration API (CLI-only user creation)
- Rate limiting on API (in addition to Cloudflare protection)
- TLS certificate pinning on Android (separate SHA-256 fingerprints for local and remote connections)
- Secure storage using EncryptedSharedPreferences on Android for session tokens
- Dual connection mode with local network priority for reduced exposure
- Certificate updates require Android app update
- Initial setup flow for first user creation via environment variables or setup wizard
