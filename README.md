# Captain's Log - Boat Tracking System

A comprehensive dual-platform application for boat operators to track vessel usage, maintain captain's logs for licensing purposes, manage maintenance schedules, and record detailed trip information including GPS tracking.

![LCARS Interface](web/public/lcars-demo.png)

## 🚀 Features

### 🛥️ Trip Management
- **GPS Tracking**: Real-time GPS tracking with configurable intervals (default 5 seconds)
- **Offline Recording**: Continue logging trips without internet connectivity
- **Trip Statistics**: Automatic calculation of duration, distance, speed, and heading
- **Stop Point Detection**: Automatic detection of stops (5+ minutes within 45-foot radius)
- **Manual Data Entry**: Add engine hours, fuel consumption, weather, passengers, and destination
- **Photo Attachments**: Attach photos to trips with automatic optimization

### 📊 Captain's License Progress
- **Sea Time Tracking**: Automatic calculation of sea time days (4+ hours = 1 day)
- **License Goals**: Track progress toward 360-day and 90-days-in-3-years requirements
- **Multi-Day Trips**: Proper handling of trips spanning multiple calendar days
- **Progress Reports**: Estimated completion dates based on current usage rate

### 🔧 Maintenance Management
- **Template-Event System**: Create maintenance templates with automatic event generation
- **Recurrence Scheduling**: Support for days, weeks, months, years, and engine hours
- **Due Date Notifications**: Alerts 7 days before maintenance is due
- **Cost Tracking**: Track estimated vs actual costs and time
- **Photo Documentation**: Before/after photos for maintenance work
- **Maintenance History**: Complete history of all maintenance activities

### 📝 Notes & Organization
- **Multiple Note Types**: General, boat-specific, and trip-specific notes
- **Tag System**: Organize notes with custom tags
- **Search & Filter**: Find notes quickly with advanced filtering
- **To-Do Lists**: Create general or boat-specific task lists
- **Task Completion**: Track completion status with timestamps

### 🗺️ Map & Navigation
- **Interactive Maps**: View trip routes and marked locations
- **Marked Locations**: Save favorite fishing spots, marinas, anchorages, and hazards
- **Distance Calculation**: Calculate distances from current position
- **Route Visualization**: Display trip routes with start, end, and stop points

### 🔐 Security & Authentication
- **Username/Password Authentication**: Secure login with JWT session tokens
- **Certificate Pinning**: TLS certificate pinning for Android app security
- **Dual Connection Mode**: Local network priority with remote fallback
- **Rate Limiting**: API protection against abuse
- **Encrypted Storage**: Secure storage of sensitive data on mobile devices

## 🏗️ System Architecture

### Components
- **Backend API**: Node.js/Express RESTful API with PostgreSQL database
- **Web Application**: React 18 with LCARS design system (Star Trek TNG/Voyager aesthetic)
- **Android Application**: Native Kotlin app with Jetpack Compose UI
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Docker Compose for easy setup

### Technology Stack

#### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js
- **Database**: PostgreSQL 16
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **Image Processing**: Sharp
- **Testing**: Jest + fast-check (property-based testing)

#### Web Application
- **Framework**: React 18 with TypeScript
- **UI**: LCARS Design System (styled-components)
- **State Management**: React Query + React Context
- **Maps**: Leaflet with React-Leaflet
- **Build Tool**: Vite

#### Android Application
- **Language**: Kotlin 2.0.21
- **UI**: Jetpack Compose
- **Architecture**: MVVM
- **Database**: Room (offline storage)
- **Networking**: Retrofit + OkHttp with certificate pinning
- **Background**: WorkManager + Foreground Service
- **Maps**: Google Maps Android API

## 🚀 Quick Start

### Prerequisites
- **Docker Desktop** (for backend and database)
- **Node.js 20+** (for web development)
- **Android Studio** (for Android development)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd boat-tracking-system
```

### 2. Environment Setup
```bash
# Copy environment files
cp backend/.env.example backend/.env
cp web/.env.example web/.env

# Edit backend/.env with your settings
# Edit web/.env with your API URL
```

### 3. Start the Backend
```bash
# Start PostgreSQL and backend API
docker-compose up -d

# Create initial user
docker-compose exec backend npm run create-user -- --username admin --password yourpassword

# (Optional) Seed development data
docker-compose exec backend npm run seed-dev
```

### 4. Start the Web Application
```bash
cd web
npm install
npm run dev
```

### 5. Android Development
```bash
cd android
# Open in Android Studio
# Configure local.properties with your SDK path
# Run on emulator or device
```

## 📱 Android Setup

### Requirements
- **Minimum SDK**: Android 8.0 (API 26)
- **Target SDK**: Android 16 (API 35)
- **Kotlin**: 2.0.21
- **Android Gradle Plugin**: 8.7.3

### Configuration
1. **API Configuration**: Set server URLs in the app settings
2. **Certificate Pinning**: Certificates are pinned for security
3. **Permissions**: Location and camera permissions required
4. **Network**: Supports both local and remote connections

### Key Features
- **GPS Tracking**: Foreground service for continuous tracking
- **Offline Mode**: Full functionality without internet
- **Dual Connection**: Local network priority with remote fallback
- **Photo Upload**: WiFi-only uploads with 7-day local retention
- **Bluetooth**: Arduino sensor integration support

## 🌐 Web Application

### LCARS Design System
The web interface uses the LCARS (Library Computer Access/Retrieval System) design from Star Trek TNG/Voyager:

- **Color Palette**: Orange, Purple, Blue on black background
- **Typography**: Bold, condensed fonts with all-caps labels
- **Layout**: Asymmetric layouts with rounded panels and elbows
- **Interactive Elements**: Pill-shaped buttons with hover effects

### Key Pages
- **Dashboard**: System overview with recent activity
- **Vessels**: Boat management and configuration
- **Trip Log**: Trip history and detailed views
- **Maintenance**: Template and event management
- **Navigation**: Interactive maps and marked locations
- **Reports**: License progress and maintenance reports

## 🔧 Development

### Backend Development
```bash
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
./run-property-tests.sh
```

### Web Development
```bash
cd web

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Android Development
```bash
cd android

# Build debug APK
./gradlew assembleDebug

# Run unit tests
./gradlew test

# Run instrumented tests (requires device/emulator)
./gradlew connectedAndroidTest
```

## 🧪 Testing

### Property-Based Testing
The system uses property-based testing to ensure correctness:

```bash
# Run all property tests
./run-property-tests.sh

# Run specific property tests
./run-property-tests.sh --tests auth

# Run with custom configuration
./run-property-tests.sh --config temp/property-tests-config.json
```

### Test Coverage
- **Backend**: 55+ property tests covering all business logic
- **Android**: Property tests for core functionality
- **Integration**: End-to-end testing of critical workflows

## 📊 Database Management

### User Management
```bash
# Create user
docker-compose exec backend npm run create-user -- --username john --password secret

# List users
docker-compose exec backend npm run list-users

# Change password
docker-compose exec backend npm run change-password -- --username john --old-password secret --new-password newsecret

# Reset database (development only)
docker-compose exec backend npm run reset-db -- --username admin --password secret
```

### Data Seeding
```bash
# Seed development data
docker-compose exec backend npm run seed-dev

# Custom seeding
docker-compose exec backend npm run seed-db
```

### Backup & Restore
```bash
# Create backup
docker-compose exec postgres pg_dump -U boat_user boat_tracking > backup.sql

# Restore backup
docker-compose exec -T postgres psql -U boat_user boat_tracking < backup.sql
```

## 🔒 Security

### Authentication Flow
1. **Login**: Username/password authentication
2. **Token Issuance**: JWT session token (30-day expiration)
3. **API Requests**: Bearer token authentication
4. **Token Refresh**: Automatic handling of expired tokens
5. **Password Changes**: Invalidate all existing tokens

### Certificate Pinning (Android)
- **Local Connection**: Pinned certificate for local server
- **Remote Connection**: Pinned certificate for Cloudflare tunnel
- **Updates**: Certificate updates require app update
- **Validation**: SHA-256 fingerprint verification

### Rate Limiting
- **API Protection**: Express rate limiter (100 requests/minute)
- **Cloudflare**: Additional protection via Cloudflare
- **Error Handling**: Proper error responses for rate limits

## 🌍 Deployment

### Production Deployment
```bash
# Build all components
docker-compose -f docker-compose.prod.yml build

# Start production services
docker-compose -f docker-compose.prod.yml up -d

# Configure Cloudflare tunnel
# Set up SSL certificates
# Configure domain and DNS
```

### Environment Variables
```bash
# Backend (.env)
DATABASE_URL=postgresql://user:pass@localhost:5432/boat_tracking
JWT_SECRET=your-secret-key
JWT_EXPIRATION=30d
PORT=8585

# Web (.env)
VITE_API_BASE_URL=https://your-domain.com/api/v1
```

## 📖 API Documentation

### Authentication
```bash
# Login
POST /api/v1/auth/login
{
  "username": "admin",
  "password": "password"
}

# Change password
POST /api/v1/auth/change-password
Authorization: Bearer <token>
{
  "currentPassword": "old",
  "newPassword": "new"
}
```

### Boats
```bash
# List boats
GET /api/v1/boats
Authorization: Bearer <token>

# Create boat
POST /api/v1/boats
Authorization: Bearer <token>
{
  "name": "My Boat",
  "metadata": {}
}
```

### Trips
```bash
# List trips
GET /api/v1/trips?boatId=<id>&startDate=2024-01-01
Authorization: Bearer <token>

# Create trip
POST /api/v1/trips
Authorization: Bearer <token>
{
  "boatId": "boat-id",
  "startTime": "2024-01-01T10:00:00Z",
  "endTime": "2024-01-01T14:00:00Z",
  "waterType": "coastal",
  "role": "captain",
  "gpsPoints": [...]
}
```

## 🐛 Troubleshooting

### Common Issues

#### Backend Won't Start
```bash
# Check Docker status
docker-compose ps

# View logs
docker-compose logs backend

# Restart services
docker-compose restart
```

#### Database Connection Issues
```bash
# Check database status
docker-compose exec postgres pg_isready

# Reset database
docker-compose exec backend npm run reset-db
```

#### Android Build Issues
```bash
# Clean build
./gradlew clean

# Check SDK configuration
# Verify local.properties
# Update dependencies
```

#### Certificate Pinning Errors
- Verify certificate fingerprints
- Check network connectivity
- Update app if certificates changed

### Performance Optimization
- **Database**: Add indexes for frequently queried fields
- **Photos**: Use web-optimized versions for display
- **GPS Data**: Implement data compression for large trips
- **Caching**: Use React Query for efficient data caching

## 🤝 Contributing

### Development Workflow
1. **Fork** the repository
2. **Create** a feature branch
3. **Implement** changes with tests
4. **Run** property tests: `./run-property-tests.sh`
5. **Submit** a pull request

### Code Standards
- **TypeScript**: Strict type checking
- **ESLint**: Code linting and formatting
- **Property Tests**: Required for business logic
- **Documentation**: Update README for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LCARS Design**: Inspired by Star Trek TNG/Voyager computer interface
- **Property-Based Testing**: Using fast-check and Kotest libraries
- **Maps**: Leaflet and Google Maps for visualization
- **Icons**: Various open-source icon libraries

## 📞 Support

For support and questions:
- **Issues**: Create a GitHub issue
- **Documentation**: Check this README and inline code comments
- **Testing**: Run `./run-property-tests.sh` to verify system correctness

---

**Captain's Log - Navigate your maritime adventures with confidence** ⚓