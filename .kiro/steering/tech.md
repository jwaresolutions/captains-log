# Technology Stack

## Development Environment

- **Operating System**: macOS (darwin)
- **Shell**: zsh
- **Package Manager**: npm (Node.js), Homebrew (system packages)
- **Docker**: Docker Desktop for Mac
- **Android Development**: Android Studio (latest stable version) on macOS
- **Android IDE**: Android Studio with Kotlin plugin, Android SDK, and emulator support

**Note**: All commands and examples in this documentation are for macOS. Use macOS-native tools and avoid Linux-specific commands.

**Important**: macOS does not have the `timeout` command by default. Never use `timeout` in bash commands. For time-limited operations, use alternative approaches like background processes with `sleep` and `kill`, or built-in timeouts in the tools themselves (e.g., `curl --max-time`, `npm test --testTimeout`).

### Android Studio Setup
- Install Android Studio from https://developer.android.com/studio
- Configure Android SDK (API 26 minimum, API 35 target)
- Install Android Emulator for testing (recommended: Pixel 6 with API 35)
- Enable Kotlin plugin (usually pre-installed)
- Install KSP (Kotlin Symbol Processing) support
- Configure Gradle JDK (bundled JDK recommended)

## Backend API

- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js
- **Database**: PostgreSQL 16
- **ORM**: Prisma
- **Authentication**: JWT session tokens with bcrypt password hashing
- **Rate Limiting**: Express rate limiter (in addition to Cloudflare protection)
- **Image Processing**: Sharp (photo optimization)
- **Logging**: Winston
- **Testing**: Jest + Supertest
- **Property Testing**: fast-check
- **Containerization**: Docker + Docker Compose

## Web Application

- **Framework**: React 18
- **UI Library**: LCARS Design System (styled-components)
- **Design Aesthetic**: Star Trek TNG/Voyager LCARS interface
- **State Management**: React Context + React Query
- **Routing**: React Router v6
- **Maps**: Leaflet with React-Leaflet
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library + Playwright
- **Property Testing**: fast-check

## Android Application

- **Language**: Kotlin 2.0.21
- **Build Tools**: Android Gradle Plugin 8.7.3, Gradle 8.9
- **Minimum SDK**: Android 8.0 (API 26)
- **Target SDK**: Android 16 (API 35)
- **Compile SDK**: Android 16 (API 35)
- **Architecture**: MVVM with Jetpack Compose
- **Database**: Room (offline storage)
- **Networking**: Retrofit + OkHttp with Certificate Pinning (separate pins for local/remote Cloudflare certs)
- **Security**: TLS Certificate Pinning, EncryptedSharedPreferences for session token storage
- **Connection**: Dual mode (local priority with 2s timeout, remote fallback), both HTTPS via Cloudflare
- **Certificate Updates**: Via app update only
- **Photo Retention**: 7 days local retention after successful upload
- **Maps**: Google Maps Android API
- **Background Services**: WorkManager + Foreground Service
- **Bluetooth**: Android Bluetooth API
- **Image Loading**: Coil
- **Testing**: JUnit 5 + MockK + Espresso + Robolectric
- **Property Testing**: Kotest Property Testing
- **Crash Reporting**: Firebase Crashlytics
- **KSP**: 2.0.21-1.0.28 (Kotlin Symbol Processing for Room, etc.)

## Deployment

- **Orchestration**: Docker Compose
- **Backend Port**: 8585
- **HTTPS**: Cloudflare certificates for both local and remote connections
- **Remote Access**: Cloudflare Tunnel
- **Local Access**: Cloudflare certificate on local domain
- **Database**: PostgreSQL in Docker container
- **Storage**: Docker volumes for database and photos
- **Backups**: Include both database and photos

## Common Commands (macOS)

All commands below are designed for macOS with zsh shell. Docker commands use Docker Desktop for Mac.

### Backend Development
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev

# Run tests
npm test

# Run property tests
npm run test:property

# Build for production
npm run build

# Start production server
npm start
```

### Web Application
```bash
# Navigate to web directory (when implemented)
cd web

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run E2E tests
npm run test:e2e

# Build for production
npm run build

# Preview production build
npm run preview
```

### Android Application

#### Command Line (from terminal)
```bash
# Navigate to android directory
cd android

# Build debug APK (macOS)
./gradlew assembleDebug

# Run unit tests
./gradlew test

# Run instrumented tests (requires connected device/emulator)
./gradlew connectedAndroidTest

# Install on device
./gradlew installDebug

# Build release APK
./gradlew assembleRelease

# Clean build
./gradlew clean
```

#### Android Studio (recommended for development)
- **Open Project**: File → Open → Select `android` directory
- **Build APK**: Build → Build Bundle(s) / APK(s) → Build APK(s)
- **Run on Emulator**: Click green "Run" button (▶) or Shift+F10
- **Run on Device**: Connect device via USB, enable USB debugging, click "Run"
- **Run Tests**: Right-click test file/class → Run 'TestName'
- **Run All Unit Tests**: Right-click `test` folder → Run Tests in 'test'
- **Run Instrumented Tests**: Right-click `androidTest` folder → Run Tests (requires emulator/device)
- **View Logcat**: View → Tool Windows → Logcat (filter by app package)
- **Debug App**: Click "Debug" button (🐛) or Shift+F9
- **Clean Project**: Build → Clean Project
- **Rebuild Project**: Build → Rebuild Project
- **Sync Gradle**: File → Sync Project with Gradle Files (or click sync icon)
- **View Build Output**: View → Tool Windows → Build
- **Device Manager**: View → Tool Windows → Device Manager (manage emulators)

#### Testing in Android Studio
- **Create Emulator**: Tools → Device Manager → Create Device → Select Pixel 6 → API 35
- **Start Emulator**: Device Manager → Click play button on emulator
- **Install APK**: Run → Run 'app' (automatically installs and launches)
- **View App Logs**: Logcat window (filter by package name: com.boattracking)
- **Debug Breakpoints**: Click left margin to set breakpoint, then Debug
- **Inspect Database**: View → Tool Windows → App Inspection → Database Inspector (requires running app)
- **Network Inspector**: View → Tool Windows → App Inspection → Network Inspector
- **Layout Inspector**: Tools → Layout Inspector (inspect Compose UI hierarchy)

### Docker Deployment (Docker Desktop for Mac)
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Database backup (macOS)
docker-compose exec postgres pg_dump -U boat_user boat_tracking > backup.sql

# Restore database (macOS)
docker-compose exec -T postgres psql -U boat_user boat_tracking < backup.sql

# Check running containers
docker-compose ps

# Access backend container shell
docker-compose exec backend sh
```

### macOS System Commands
```bash
# View file contents
cat filename.txt

# List files
ls -la

# Find files
find . -name "*.ts"

# Search in files
grep -r "search term" .

# Copy files
cp source.txt destination.txt

# Move/rename files
mv oldname.txt newname.txt

# Remove files
rm filename.txt

# Remove directories
rm -rf directory_name

# Create directory
mkdir -p path/to/directory

# Check Node.js version
node --version

# Check npm version
npm --version

# Check Docker version
docker --version
```

## Key Dependencies

### Backend
- express: Web framework
- @prisma/client: Database ORM
- sharp: Image processing
- winston: Logging
- bcrypt: Password hashing
- jsonwebtoken: JWT session token generation and validation
- express-rate-limit: Rate limiting
- jest: Testing framework
- fast-check: Property-based testing
- supertest: API testing

### Web
- react: UI framework
- styled-components: LCARS design system styling
- react-router-dom: Routing
- react-query: Data fetching
- leaflet: Maps
- axios: HTTP client
- vitest: Testing framework
- @testing-library/react: Component testing
- playwright: E2E testing

### Android
- androidx.compose: UI framework
- androidx.room: Local database
- retrofit2: HTTP client
- okhttp3: HTTP client with certificate pinning
- androidx.security: EncryptedSharedPreferences
- androidx.work: Background tasks
- google-maps: Map integration
- kotlinx.coroutines: Async operations
- junit5: Testing framework
- mockk: Mocking library
- kotest: Property testing
