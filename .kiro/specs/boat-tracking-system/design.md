# Design Document

## Overview

The Boat Tracking System is a full-stack application consisting of three main components:

1. **Backend API** - A RESTful API server built with Node.js/Express that handles business logic, data persistence, and serves as the central hub for both web and mobile clients
2. **Web Application** - A React-based single-page application with LCARS design system (Star Trek TNG/Voyager aesthetic) that provides a comprehensive dashboard and management interface
3. **Android Application** - A native Android app built with Kotlin that provides mobile-first features including GPS tracking, offline functionality, and sensor integration

The system uses PostgreSQL as the primary database, deployed via Docker Compose for easy setup and portability. All communication between clients and the API is secured using API key authentication over HTTPS through a Cloudflare tunnel.

## Architecture

### Security Architecture

The system implements mutual authentication to ensure both the client and server can verify each other's identity:

**Server Authentication (Certificate Pinning):**
- The Android Application uses TLS certificate pinning to verify the server's identity
- The app stores expected certificate fingerprints (SHA-256 hash of the public key) for both local and remote connections
- Both local and remote connections use HTTPS with Cloudflare-issued certificates
- On each HTTPS connection, the app verifies the server's certificate matches the appropriate pinned fingerprint
- This prevents man-in-the-middle attacks even if a Certificate Authority is compromised
- Certificate updates require an Android Application update (safest approach for personal use)

**Client Authentication (Username/Password with Session Tokens):**
- Users create accounts with a username and password
- The Backend API hashes passwords using bcrypt before storing them in the database
- On login, the user provides username and password
- The Backend API validates credentials and issues a JWT (JSON Web Token) session token
- The Android Application stores the session token securely using EncryptedSharedPreferences
- The Android Application includes the session token in the Authorization header of each request
- Session tokens have a configurable expiration time (default: 30 days)
- When a session token expires, the user must log in again
- Password changes invalidate all existing session tokens, requiring re-login on all devices

**Dual Connection Mode:**
- The Android Application supports two connection endpoints:
  - **Local Connection** (optional): Direct connection to server on local network via Cloudflare certificate (e.g., https://local.captainslog.jware.dev:8585)
  - **Remote Connection** (required): Connection through Cloudflare Tunnel (e.g., https://captainslog.jware.dev)
- Both connections use HTTPS with Cloudflare-issued certificates (one certificate per connection)
- Each connection has its own pinned certificate fingerprint
- Connection priority: Local first, then remote fallback
- Local connection timeout: 2 seconds for quick fallback
- Benefits:
  - Faster response times when on local network
  - Reduced internet bandwidth usage for large photo uploads
  - Automatic fallback ensures reliability
  - Consistent HTTPS security on both connections

**Authentication Flow:**
1. User logs in with username and password
2. Backend API validates credentials against bcrypt-hashed password in database
3. If valid, Backend API generates a JWT session token and returns it to the client
4. Android App stores session token securely in EncryptedSharedPreferences
5. For subsequent requests:
   a. Android App attempts HTTPS connection to local URL (if configured)
   b. If local connection fails or times out (2 seconds), app falls back to remote URL
   c. TLS handshake occurs - app verifies server certificate against the appropriate pinned fingerprint (local or remote)
   d. If certificate matches, connection proceeds; otherwise connection is rejected
   e. App sends API request with session token in Authorization header (Bearer token)
   f. Backend API validates the JWT token (signature, expiration)
   g. If token is valid, request is processed; otherwise 401 error is returned
   h. Rate limiting is applied (in addition to Cloudflare's protection)

### High-Level Architecture

```
┌─────────────────┐
│  Web Browser    │         HTTPS Request
│  (React/LCARS)  │────────────────────────┐
│                 │                        │
└─────────────────┘                        │
                                           │
┌─────────────────┐                        │
│  Arduino        │                        │
│  Sensors        │                        ▼
│  (Bluetooth)    │             ┌──────────────────┐
└────────┬────────┘             │                  │
         │                      │  Cloudflare      │
         │ Bluetooth            │  Tunnel          │
         │                      │                  │
         ▼                      │  (Reverse Proxy) │
┌─────────────────┐             │                  │
│  Android App    │ Remote HTTPS│  External Entry  │
│  (Kotlin)       │ (Fallback)  │  Point           │
│                 │────────────►│                  │
│  + Bluetooth    │             └────────┬─────────┘
│  + GPS          │◄────────────────────┬┘
│  + Foreground   │   Response          │
│    Service      │                     │ Routes to
│                 │                     │ localhost:8585
│  Connection     │   Local HTTPS       │
│  Manager:       │   (Priority)        │
│  1. Try Local   │          ┌──────────┘
│  2. Fallback    │          │
│     Remote      │          │
└─────────────────┘          │
         │                   ▼
         │          ┌──────────────────┐         ┌──────────────────┐
         │          │                  │         │                  │
         │          │   Backend API    │────────►│   PostgreSQL     │
         │          │   (Node.js)      │         │   Database       │
         │          │                  │         │                  │
         │          │   Port 8585      │         │   (Docker)       │
         │          │                  │         └──────────────────┘
         │          │   + Web Server   │
         │          │   + REST API     │
         │          │   + Auth         │
         │          │   + Cert Pinning │
         │          └──────────────────┘
         │                   ▲
         │                   │
         └───────────────────┘
              Direct HTTPS
              (When on same LAN)

Connection Strategy:
1. Android App tries local connection first (2 second timeout)
2. If local fails/unavailable, automatically falls back to remote via Cloudflare
3. Web Browser always uses Cloudflare Tunnel
4. Both connections use certificate pinning + API key authentication
```

### Technology Stack

**Backend:**
- Runtime: Node.js 20 LTS
- Framework: Express.js
- Database: PostgreSQL 16
- ORM: Prisma
- Authentication: API Key middleware
- Image Processing: Sharp (for photo optimization)
- Containerization: Docker + Docker Compose

**Web Application:**
- Framework: React 18
- UI Library: Custom LCARS-inspired design system (styled-components)
- State Management: React Context + React Query
- Routing: React Router v6
- Maps: Leaflet with React-Leaflet
- HTTP Client: Axios
- Build Tool: Vite
- Design System: LCARS (Library Computer Access/Retrieval System) aesthetic from Star Trek TNG/Voyager

**Android Application:**
- Language: Kotlin 2.0.21
- Build Tools: Android Gradle Plugin 8.7.3, Gradle 8.9, KSP 2.0.21-1.0.28
- Minimum SDK: Android 8.0 (API 26), Target SDK: Android 16 (API 35), Compile SDK: Android 16 (API 35)
- Architecture: MVVM with Jetpack Compose
- Database: Room (for offline storage)
- Networking: Retrofit + OkHttp with Certificate Pinning
- Security: TLS certificate pinning for server authentication, API key for client authentication
- Maps: Google Maps Android API
- Background Services: WorkManager + Foreground Service
- Bluetooth: Android Bluetooth API
- Image Loading: Coil

### Deployment Architecture

```
Docker Compose Stack:
├── backend-api (Node.js container)
│   ├── Exposed on port 8585
│   ├── Environment variables from .env
│   └── Volumes: /uploads (for photos)
├── postgres (PostgreSQL container)
│   ├── Internal port 5432
│   ├── Persistent volume for data
│   └── Automatic initialization scripts
└── Network: bridge network for inter-container communication
```

## Components and Interfaces

### Backend API Components

#### 1. API Server (Express Application)
- **Responsibility**: HTTP request handling, routing, middleware orchestration
- **Key Middleware**:
  - API Key Authentication Middleware
  - Request logging
  - Error handling
  - CORS configuration
  - Body parsing (JSON, multipart for photos)

#### 2. Authentication Service
- **Responsibility**: User authentication, session token management, certificate management
- **Methods**:
  - `login(username: string, password: string): Promise<{ user: User, token: string }>` - validates credentials and issues JWT session token
  - `validateToken(token: string): Promise<TokenValidationResult>` - validates JWT token signature and expiration
  - `refreshToken(token: string): Promise<string>` - issues new token before expiration (optional)
  - `logout(token: string): Promise<void>` - invalidates session token (adds to blacklist)
  - `changePassword(userId: string, oldPassword: string, newPassword: string): Promise<void>` - changes password and invalidates all existing tokens
  - `hashPassword(password: string): Promise<string>` - hashes password using bcrypt
  - `comparePassword(password: string, hash: string): Promise<boolean>` - compares password against bcrypt hash
  - `getCertificateFingerprints(): { local: string, remote: string }` - returns pinned certificate fingerprints
  - **Note**: User registration is NOT exposed as an API endpoint. Users can only be created via CLI command or initial setup wizard.

#### 3. Boat Service
- **Responsibility**: Boat entity CRUD operations
- **Methods**:
  - `createBoat(data: BoatCreateDTO): Boat`
  - `updateBoat(id: string, data: BoatUpdateDTO): Boat`
  - `getBoat(id: string): Boat`
  - `listBoats(): Boat[]`
  - `toggleBoatStatus(id: string, enabled: boolean): Boat`
  - `setActiveBoat(id: string): void`

#### 4. Trip Service
- **Responsibility**: Trip management, GPS data processing, statistics calculation
- **Methods**:
  - `createTrip(data: TripCreateDTO): Trip`
  - `updateTrip(id: string, data: TripUpdateDTO): Trip`
  - `getTrip(id: string): Trip`
  - `listTrips(filters: TripFilters): Trip[]`
  - `calculateTripStatistics(gpsPoints: GPSPoint[]): TripStatistics`
  - `detectStopPoints(gpsPoints: GPSPoint[]): StopPoint[]`
  - `addManualData(tripId: string, data: ManualDataDTO): Trip`

#### 5. Captain's Log Service
- **Responsibility**: Sea time calculation, license progress tracking
- **Methods**:
  - `calculateSeaTimeDays(trips: Trip[]): number`
  - `calculateSeaTimeDaysInRange(trips: Trip[], startDate: Date, endDate: Date): number`
  - `getLicenseProgress(): LicenseProgress`
  - `estimateTimeToGoal(currentRate: number): Estimate`
  - `isValidSeaTimeDay(trip: Trip, date: Date): boolean`

#### 6. Notes Service
- **Responsibility**: Note management across all types
- **Methods**:
  - `createNote(data: NoteCreateDTO): Note`
  - `updateNote(id: string, data: NoteUpdateDTO): Note`
  - `deleteNote(id: string): void`
  - `listNotes(filters: NoteFilters): Note[]`
  - `addTags(noteId: string, tags: string[]): Note`

#### 7. Todo Service
- **Responsibility**: To-do list and item management
- **Methods**:
  - `createList(data: TodoListCreateDTO): TodoList`
  - `updateList(id: string, data: TodoListUpdateDTO): TodoList`
  - `deleteList(id: string): void`
  - `addItem(listId: string, data: TodoItemDTO): TodoItem`
  - `toggleItemCompletion(itemId: string): TodoItem`
  - `listTodoLists(boatId?: string): TodoList[]`

#### 8. Maintenance Service
- **Responsibility**: Maintenance task scheduling, recurrence, notifications
- **Methods**:
  - `createTask(data: MaintenanceTaskCreateDTO): MaintenanceTask`
  - `updateTask(id: string, data: MaintenanceTaskUpdateDTO): MaintenanceTask`
  - `completeTask(id: string, data: CompletionDTO): MaintenanceTask`
  - `scheduleNextOccurrence(task: MaintenanceTask): MaintenanceTask`
  - `getUpcomingTasks(daysAhead: number): MaintenanceTask[]`
  - `getMaintenanceHistory(taskId: string): MaintenanceCompletion[]`

#### 9. Location Service
- **Responsibility**: Marked location management, distance calculations
- **Methods**:
  - `createMarkedLocation(data: LocationCreateDTO): MarkedLocation`
  - `updateMarkedLocation(id: string, data: LocationUpdateDTO): MarkedLocation`
  - `deleteMarkedLocation(id: string): void`
  - `listMarkedLocations(filters: LocationFilters): MarkedLocation[]`
  - `calculateDistance(point1: GPSCoordinate, point2: GPSCoordinate): number`
  - `findNearbyLocations(center: GPSCoordinate, radiusMeters: number): MarkedLocation[]`

#### 10. Photo Service
- **Responsibility**: Photo upload, storage, optimization
- **Methods**:
  - `uploadPhoto(file: Buffer, metadata: PhotoMetadata): Photo`
  - `optimizeForWeb(originalPath: string): string`
  - `deletePhoto(id: string): void`
  - `getPhoto(id: string): Photo`
  - `listPhotos(entityType: string, entityId: string): Photo[]`

#### 11. Sensor Service
- **Responsibility**: Sensor data ingestion and storage
- **Methods**:
  - `recordSensorData(data: SensorDataDTO): SensorReading`
  - `getSensorData(tripId: string, sensorType: string): SensorReading[]`
  - `registerSensorType(type: SensorTypeDTO): SensorType`

#### 12. Notification Service
- **Responsibility**: Notification generation and delivery
- **Methods**:
  - `createNotification(data: NotificationDTO): Notification`
  - `getActiveNotifications(): Notification[]`
  - `markAsRead(id: string): void`
  - `checkMaintenanceDue(): void` (scheduled job)

#### 13. Backup Service
- **Responsibility**: Database backup creation
- **Methods**:
  - `createManualBackup(): BackupFile`
  - `scheduleAutomaticBackup(schedule: string): void`
  - `listBackups(): BackupFile[]`
  - `downloadBackup(id: string): Stream`

#### 14. Sync Service
- **Responsibility**: Handling offline data synchronization
- **Methods**:
  - `syncTrip(data: TripSyncDTO): Trip`
  - `syncPhotos(photos: PhotoSyncDTO[]): Photo[]`
  - `resolveConflict(localData: any, serverData: any): any`

#### 15. Time Zone Service
- **Responsibility**: Time zone determination from GPS coordinates
- **Methods**:
  - `getTimeZoneFromCoordinates(lat: number, lon: number): string`
  - `getDeviceTimeZone(): string` - fallback when GPS unavailable
  - `convertToLocalTime(utcTime: Date, timezone: string): Date`

### Web Application Components

#### LCARS Design System

The web application will implement the LCARS (Library Computer Access/Retrieval System) aesthetic from Star Trek: The Next Generation and Voyager, featuring:

**Visual Characteristics:**
- **Color Palette**: 
  - Primary: Orange (#FF9966, #FFCC99)
  - Secondary: Purple/Magenta (#CC99CC, #9999CC)
  - Accent: Blue (#6688CC, #99CCFF)
  - Background: Black (#000000)
  - Text: White/Light colors for contrast
- **Typography**: 
  - Primary Font: "Antonio" or "Helvetica Neue" (bold, condensed)
  - Monospace Font: "Courier New" for data displays
  - Large, bold headers
  - All-caps labels
- **Layout Elements**:
  - Rounded pill-shaped buttons and panels
  - Angled corner elements (elbows)
  - Horizontal bars with rounded ends
  - Asymmetric layouts
  - Vertical side panels with stacked elements
  - Data readouts in rectangular panels
- **Interactive Elements**:
  - Buttons with rounded ends, solid colors
  - Hover states with brightness changes
  - Sound effects on interactions (optional)
  - Animated transitions between states
  - Blinking indicators for alerts

**Component Library:**
- `LCARSButton`: Pill-shaped button with LCARS styling
- `LCARSPanel`: Rounded rectangular panel for content
- `LCARSElbow`: Corner element for layout structure
- `LCARSBar`: Horizontal decorative bar
- `LCARSColumn`: Vertical side panel with stacked elements
- `LCARSDataDisplay`: Monospace data readout panel
- `LCARSHeader`: Large bold header with LCARS styling
- `LCARSAlert`: Blinking alert indicator

#### 1. Dashboard Page
- **Responsibility**: Summary view of all system data in LCARS interface
- **Displays**: Recent trips, license progress, upcoming maintenance, active to-do items
- **Components**: LCARSStatCard, LCARSTripList, LCARSProgressChart, LCARSMaintenanceAlert, LCARSTodoSummary
- **Layout**: Asymmetric with side columns, main content area, and decorative elbows

#### 2. Trip Management Module
- **Pages**: TripList, TripDetail, TripEdit
- **Components**: LCARSTripCard, LCARSTripMap, LCARSTripStatistics, LCARSManualDataForm, LCARSTripNotes
- **Layout**: Data panels with LCARS styling, map integrated into LCARS frame

#### 3. Boat Management Module
- **Pages**: BoatList, BoatDetail, BoatForm
- **Components**: LCARSBoatCard, LCARSBoatStatusToggle, LCARSBoatSelector
- **Layout**: List view with colored status indicators

#### 4. Notes Module
- **Pages**: NotesList, NoteEditor
- **Components**: LCARSNoteCard, LCARSNoteFilter, LCARSTagSelector
- **Layout**: Scrollable list with LCARS panels

#### 5. Todo Module
- **Pages**: TodoListView, TodoListManager
- **Components**: LCARSTodoList, LCARSTodoItem, LCARSTodoListCard
- **Layout**: Multiple lists in LCARS panels with completion indicators

#### 6. Maintenance Module
- **Pages**: MaintenanceList, MaintenanceDetail, MaintenanceForm
- **Components**: LCARSMaintenanceCard, LCARSRecurrenceScheduler, LCARSMaintenanceHistory, LCARSCostTracker
- **Layout**: Timeline view with LCARS styling, alerts in colored panels

#### 7. Map Module
- **Pages**: MapView
- **Components**: LCARSInteractiveMap, LCARSTripRouteLayer, LCARSMarkedLocationLayer, LCARSLocationMarker, LCARSLocationDetail
- **Layout**: Map in main area with LCARS control panels on sides

#### 8. Reports Module
- **Pages**: LicenseProgress, MaintenanceReports
- **Components**: LCARSProgressChart, LCARSEstimateDisplay, LCARSTripStatisticsTable
- **Layout**: Data displays in LCARS panels with progress bars

#### 9. Settings Module
- **Pages**: SystemSettings, BackupManager, AccountSettings
- **Components**: LCARSPasswordChange, LCARSBackupControls, LCARSSetupWizard, LCARSAccountInfo
- **Layout**: Form elements styled as LCARS controls

### Android Application Components

#### 1. Trip Recording Service (Foreground Service)
- **Responsibility**: Continuous GPS tracking during active trips
- **Features**:
  - Persistent notification
  - GPS location updates every 5 seconds (configurable)
  - Local storage of GPS points
  - Battery optimization handling
  - Wake lock management

#### 2. Offline Storage (Room Database)
- **Entities**: Trip, GPSPoint, Photo, Note, TodoItem, MaintenanceTask
- **DAOs**: TripDao, GPSPointDao, PhotoDao, NoteDao, TodoDao, MaintenanceDao
- **Responsibility**: Local data persistence and offline operation

#### 3. Sync Manager (WorkManager)
- **Responsibility**: Background synchronization when online
- **Features**:
  - Periodic sync checks
  - WiFi-only photo uploads
  - Conflict resolution
  - Retry logic with exponential backoff
  - Certificate pinning validation on all sync requests

#### 3a. Security Manager
- **Responsibility**: Certificate pinning and secure storage
- **Features**:
  - TLS certificate pinning implementation with separate pins for local and remote connections
  - Certificate fingerprint validation against Cloudflare-issued certificates
  - Secure API key storage using EncryptedSharedPreferences
  - Certificate updates via app updates only (no dynamic update mechanism)

#### 3b. Connection Manager
- **Responsibility**: Dual connection mode with local/remote fallback
- **Features**:
  - Local connection attempt with 2-second timeout
  - Automatic fallback to remote connection
  - Connection health monitoring
  - Preference for local connection when available
  - Network type detection (WiFi vs mobile data)

#### 4. Bluetooth Service
- **Responsibility**: Arduino sensor communication
- **Features**:
  - Device discovery and pairing
  - Data stream parsing
  - Sensor data buffering
  - Connection management

#### 5. Notification Manager
- **Responsibility**: Local notifications for maintenance tasks
- **Features**:
  - Scheduled notifications
  - Notification channels
  - Action buttons (complete, snooze)

#### 6. UI Screens (Jetpack Compose)
- **Screens**: Dashboard, TripList, ActiveTrip, TripDetail, BoatList, NotesList, TodoLists, MaintenanceList, MapView, Settings
- **ViewModels**: Corresponding ViewModel for each screen with LiveData/StateFlow

## Data Models

### Core Entities

#### Boat
```typescript
interface Boat {
  id: string;
  name: string;
  enabled: boolean;
  isActive: boolean;
  metadata?: {
    make?: string;
    model?: string;
    year?: number;
    registration?: string;
    length?: number;
    [key: string]: any;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

#### Trip
```typescript
interface Trip {
  id: string;
  boatId: string;
  startTime: Date;
  endTime: Date;
  waterType: 'inland' | 'coastal' | 'offshore';
  role: 'captain' | 'crew' | 'observer';
  gpsPoints: GPSPoint[];
  statistics: TripStatistics;
  manualData?: ManualData;
  notes: Note[];
  photos: Photo[];
  createdAt: Date;
  updatedAt: Date;
}

interface GPSPoint {
  id: string;
  tripId: string;
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
  speed?: number;
  heading?: number;
  timestamp: Date;
}

interface TripStatistics {
  durationSeconds: number;
  distanceMeters: number;
  averageSpeedKnots: number;
  maxSpeedKnots: number;
  stopPoints: StopPoint[];
}

interface StopPoint {
  latitude: number;
  longitude: number;
  startTime: Date;
  endTime: Date;
  durationSeconds: number;
}

interface ManualData {
  engineHours?: number;
  fuelConsumed?: number;
  weatherConditions?: string;
  numberOfPassengers?: number;
  destination?: string;
}
```

#### Note
```typescript
interface Note {
  id: string;
  content: string;
  type: 'general' | 'boat' | 'trip';
  boatId?: string;
  tripId?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

#### TodoList
```typescript
interface TodoList {
  id: string;
  title: string;
  type: 'general' | 'boat';
  boatId?: string;
  items: TodoItem[];
  createdAt: Date;
  updatedAt: Date;
}

interface TodoItem {
  id: string;
  listId: string;
  content: string;
  completed: boolean;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
```

#### MaintenanceTask
```typescript
interface MaintenanceTask {
  id: string;
  boatId: string;
  title: string;
  description?: string;
  component?: string;
  dueDate: Date;
  recurrence?: RecurrenceSchedule;
  completions: MaintenanceCompletion[];
  createdAt: Date;
  updatedAt: Date;
}

interface RecurrenceSchedule {
  type: 'days' | 'weeks' | 'months' | 'years' | 'engine_hours';
  interval: number;
}

interface MaintenanceCompletion {
  id: string;
  taskId: string;
  completedAt: Date;
  cost?: number;
  notes?: string;
  photos: Photo[];
}
```

#### MarkedLocation
```typescript
interface MarkedLocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  category: 'fishing' | 'marina' | 'anchorage' | 'hazard' | 'other';
  notes?: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

#### Photo
```typescript
interface Photo {
  id: string;
  entityType: 'trip' | 'maintenance' | 'note';
  entityId: string;
  originalPath: string;
  webOptimizedPath: string;
  mimeType: string;
  sizeBytes: number;
  metadata?: {
    width: number;
    height: number;
    takenAt?: Date;
  };
  createdAt: Date;
}
```

#### SensorReading
```typescript
interface SensorReading {
  id: string;
  tripId: string;
  sensorType: string;
  value: number;
  unit: string;
  timestamp: Date;
}

interface SensorType {
  id: string;
  name: string;
  unit: string;
  loggingFrequency: 'continuous' | 'snapshot';
}
```

#### LicenseProgress
```typescript
interface LicenseProgress {
  totalSeaTimeDays: number;
  seaTimeDaysLast3Years: number;
  totalHours: number;
  daysToGoal360: number;
  daysToGoal90: number;
  estimatedCompletionDate: Date;
  enabled: boolean;
}
```

#### Notification
```typescript
interface Notification {
  id: string;
  type: 'maintenance_due' | 'system';
  title: string;
  message: string;
  entityType?: string;
  entityId?: string;
  read: boolean;
  createdAt: Date;
}
```

#### User
```typescript
interface User {
  id: string;
  username: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

interface SessionToken {
  id: string;
  userId: string;
  token: string;
  expiresAt: Date;
  createdAt: Date;
  isRevoked: boolean;
}
```

### Database Schema (Prisma)

The PostgreSQL database will use the following schema structure:
- Tables for each entity above
- User table stores username and bcrypt-hashed password
- SessionToken table stores active session tokens with expiration and revocation status
- Indexes on frequently queried fields (boatId, tripId, userId, timestamps, token)
- Foreign key constraints for referential integrity
- Cascade deletes where appropriate (e.g., deleting a boat deletes its maintenance tasks)
- JSON columns for flexible metadata fields


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Session Token Authentication
*For any* API request to the Backend API, if the request does not include a valid, non-expired, non-revoked session token, then the system should reject the request with an authentication error.
**Validates: Requirements 2.4, 2.7**

### Property 2: Password Hashing
*For any* user account created, the system should store only the bcrypt hash of the password, never the plaintext password.
**Validates: Requirements 2.3**

### Property 3: Login Token Issuance
*For any* successful login with valid credentials, the system should issue a JWT session token that can be used for subsequent API requests.
**Validates: Requirements 2.2**

### Property 4: Password Change Token Invalidation
*For any* password change operation, all existing session tokens for that user should be invalidated, requiring re-login on all devices.
**Validates: Requirements 2.13**

### Property 5: Public Registration Rejection
*For any* attempt to register a user via the public API, the system should reject the request with an authorization error.
**Validates: Requirements 2.14**

### Property 6: CLI User Creation
*For any* user created via CLI command, the system should create a valid user account with bcrypt-hashed password that can be used for login.
**Validates: Requirements 2.1, 21.4**

### Property 7: Database Reset
*For any* database reset operation in development, the system should drop all tables, recreate the schema, and optionally create a test user if credentials are provided.
**Validates: Requirements 21.1, 21.2**

### Property 8: Boat Name Validation
*For any* boat creation request, if the boat name is empty or missing, then the system should reject the request; if the boat name is provided, then the system should accept the request.
**Validates: Requirements 3.1**

### Property 9: New Boat Becomes Active
*For any* newly created boat, the system should automatically set that boat as the Active Boat.
**Validates: Requirements 3.2**

### Property 10: Disabled Boat Notification Suppression
*For any* boat that is disabled, the system should not generate any notifications for that boat's maintenance tasks, while all boat data should remain intact and retrievable.
**Validates: Requirements 3.3, 9.7, 18.3**

### Property 11: Enable-Disable Round Trip
*For any* boat, disabling and then enabling the boat should restore its notification functionality to the original state.
**Validates: Requirements 3.4**

### Property 12: Boat List Completeness
*For any* set of boats in the system, querying the boat list should return all boats with their current enabled/disabled status.
**Validates: Requirements 3.5**

### Property 13: Active Boat Selection
*For any* boat selection operation, the selected boat should become the Active Boat for subsequent operations.
**Validates: Requirements 3.6**

### Property 14: Trip Statistics Calculation
*For any* trip with GPS points, ending the trip should produce statistics including duration, distance, average speed, and heading data derived from the GPS points.
**Validates: Requirements 4.3**

### Property 15: Stop Point Detection
*For any* sequence of GPS points where the boat remains within a 45-foot radius for at least 5 minutes, the system should mark that location as a Stop Point.
**Validates: Requirements 4.4**

### Property 16: Trip Required Fields
*For any* created trip, the trip should contain start time, end time, GPS route, water type, and associated Boat Entity.
**Validates: Requirements 4.5**

### Property 17: Speed and Heading Derivation
*For any* two consecutive GPS points with timestamps, the system should calculate speed and heading from the position and time differences.
**Validates: Requirements 4.8**

### Property 18: Offline Data Sync Round Trip
*For any* trip data stored locally while offline, after synchronization with the server, the server should contain equivalent trip data.
**Validates: Requirements 4.10, 15.3**

### Property 19: Trip Display Completeness
*For any* trip, displaying the trip should show start time, end time, duration, distance, average speed, water type, boat name, role, and GPS route.
**Validates: Requirements 5.1**

### Property 20: Trip Editability
*For any* completed trip, the system should allow editing of water type, boat selection, role, and manual data fields.
**Validates: Requirements 5.3**

### Property 21: Photo-Trip Association
*For any* photo attached to a trip, querying photos for that trip should return the attached photo.
**Validates: Requirements 5.5, 11.6**

### Property 22: Note-Trip Association
*For any* note attached to a trip, querying notes for that trip should return the attached note.
**Validates: Requirements 5.6, 7.3**

### Property 23: Sea Time Day Calculation
*For any* calendar day with trips totaling at least 4 cumulative hours, the system should count that day as exactly one Sea Time Day toward license progress.
**Validates: Requirements 6.1**

### Property 24: Multi-Day Trip Sea Time
*For any* trip spanning multiple calendar days, the system should count each calendar day with at least 4 hours of trip time as a separate Sea Time Day.
**Validates: Requirements 6.2**

### Property 25: Same-Day Trip Aggregation
*For any* set of multiple trips occurring on the same calendar day, the system should count them as a single Sea Time Day toward license progress, regardless of the total hours.
**Validates: Requirements 6.4**

### Property 26: Cross-Boat License Progress
*For any* set of trips across different boats, the captain's license progress calculation should include all trips regardless of which boat was used.
**Validates: Requirements 6.5**

### Property 27: License Progress Display Completeness
*For any* license progress query, the system should return total Sea Time Days, Sea Time Days within the last three years, and exact hours for each trip.
**Validates: Requirements 6.6**

### Property 28: License Goal Estimation (360 days)
*For any* usage history, the system should calculate an estimate of time to meet the 360-day requirement based on the current rate of sea time accumulation.
**Validates: Requirements 6.7**

### Property 29: License Goal Estimation (90 days in 3 years)
*For any* usage history, the system should calculate an estimate of time to meet the 90-days-in-three-years requirement based on the current rate.
**Validates: Requirements 6.8**

### Property 30: Boat-Specific Note Association
*For any* note created as boat-specific, querying notes for that boat should return the note.
**Validates: Requirements 7.2**

### Property 31: General Note Independence
*For any* note created as general, the note should not be associated with any boat or trip.
**Validates: Requirements 7.4**

### Property 32: Note Tag Filtering
*For any* tag filter applied to notes, the system should return only notes that have that tag.
**Validates: Requirements 7.5**

### Property 33: Todo List Title Validation
*For any* to-do list creation request, if the title is empty or missing, then the system should reject the request; if the title is provided, then the system should accept the request.
**Validates: Requirements 8.1**

### Property 34: Boat-Specific Todo Association
*For any* to-do list created as boat-specific, querying to-do lists for that boat should return the list.
**Validates: Requirements 8.2**

### Property 35: Todo Item Storage
*For any* item added to a to-do list, the item should be retrievable with its completion status.
**Validates: Requirements 8.3**

### Property 36: Todo Item Completion
*For any* to-do item marked as complete, the item should have completed=true and a completion timestamp.
**Validates: Requirements 8.4**

### Property 37: Todo List Display Completeness
*For any* to-do list query, the system should return all lists with their associated boat (if applicable) and completion status.
**Validates: Requirements 8.5**

### Property 38: Maintenance Task-Boat Association
*For any* maintenance task created, querying maintenance tasks for that boat should return the task.
**Validates: Requirements 9.1**

### Property 39: Recurring Task Auto-Scheduling
*For any* recurring maintenance task that is completed, the system should automatically create the next occurrence based on the recurrence schedule.
**Validates: Requirements 9.4**

### Property 40: Maintenance Due Notifications
*For any* maintenance task with a due date within 7 days, the system should generate a notification for both Android and Web applications.
**Validates: Requirements 9.6, 18.1, 18.2**

### Property 41: Maintenance History Completeness
*For any* maintenance task, querying the maintenance history should return all past completions with dates, costs, and photos.
**Validates: Requirements 9.8**

### Property 42: Marked Location Storage
*For any* marked location created, the system should store and return the GPS coordinates with associated notes, categories, and metadata.
**Validates: Requirements 10.2**

### Property 43: Distance Calculation
*For any* two GPS coordinates (current position and marked location), the system should calculate the distance between them.
**Validates: Requirements 10.5**

### Property 44: Photo Storage and Retrieval
*For any* photo uploaded to the system, the original high-resolution image should be stored and retrievable.
**Validates: Requirements 11.1**

### Property 45: Photo Web Optimization
*For any* photo uploaded, the system should create a web-optimized version at 1920px width.
**Validates: Requirements 11.2**

### Property 46: Database Backup Completeness
*For any* database backup created, the backup should include all database records and photo files.
**Validates: Requirements 12.3**

### Property 47: Sensor Data Relay
*For any* sensor data received from Arduino via Bluetooth, the data should be relayed to the Backend API and be retrievable.
**Validates: Requirements 13.2**

### Property 48: Dashboard Content Completeness
*For any* dashboard query, the system should return recent trips, captain's license progress, upcoming maintenance tasks, and active to-do items.
**Validates: Requirements 14.2**

### Property 49: Sync Conflict Resolution
*For any* data conflict during synchronization, the system should resolve the conflict by selecting the data with the newest timestamp and notify the user of the resolution.
**Validates: Requirements 15.4, 15.6**

### Property 50: Timezone Determination
*For any* GPS coordinate, the system should determine the appropriate time zone for that location. When GPS is unavailable, the system should use the device's current time zone.
**Validates: Requirements 16.1, 16.2**

### Property 51: Timezone Display
*For any* trip time displayed, the system should show the time in the appropriate time zone for that trip's location.
**Validates: Requirements 16.3**

### Property 52: Timezone Preservation
*For any* trip stored in the database, the system should preserve time zone information for accurate historical records.
**Validates: Requirements 16.4**

### Property 53: Notification Content Completeness
*For any* notification generated, the notification should include task name, due date, and associated boat name.
**Validates: Requirements 18.4**

### Property 54: Local Connection Priority
*For any* API request from the Android Application, if a local connection URL is configured, the system should attempt the local connection before falling back to the remote connection.
**Validates: Requirements 2.10**

### Property 55: Connection Timeout
*For any* local connection attempt, if the connection does not succeed within 2 seconds, the system should fall back to the remote connection.
**Validates: Requirements 2.11**

### Property 56: Photo Upload Network Restriction
*For any* photo upload attempt, if the device is connected via mobile data (not WiFi), the system should queue the photo and not upload until WiFi is available.
**Validates: Requirements 11.3**

### Property 57: Local Photo Upload Preference
*For any* photo upload on WiFi, if a local connection is available, the system should use the local connection to avoid internet traffic.
**Validates: Requirements 11.4**

### Property 58: Photo Retention Period
*For any* photo successfully uploaded to the server, the Android Application should retain the local copy for 7 days before deletion.
**Validates: Requirements 11.5**

### Property 59: API Rate Limiting
*For any* sequence of API requests exceeding the rate limit, the system should reject excess requests with appropriate error responses.
**Validates: Requirements 2.12**

### Property 60: Input Validation
*For any* user input, the system should validate required fields, data types, and maximum lengths before processing.
**Validates: Requirements 19.6**

### Property 61: Sync Conflict Notification
*For any* sync conflict resolved by timestamp, the system should notify the user that a conflict was resolved.
**Validates: Requirements 15.4, 15.6**

## Error Handlingor any* notification generated, the notification should include task name, due date, and associated boat name.
**Validates: Requirements 18.4**

## Error Handling

### API Error Responses

All API endpoints will return consistent error responses following this structure:

```typescript
interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: Date;
  path: string;
}
```

**Error Categories:**
- **Authentication Errors (401)**: Invalid or missing API key
- **Validation Errors (400)**: Invalid input data, missing required fields
- **Not Found Errors (404)**: Requested resource doesn't exist
- **Conflict Errors (409)**: Data conflicts during sync
- **Server Errors (500)**: Unexpected server failures

### GPS Tracking Error Handling

**Android Application:**
- **GPS Unavailable**: Display warning, continue trip with manual data entry option
- **GPS Accuracy Low**: Log accuracy value, allow user to decide whether to continue
- **Storage Full**: Alert user, prevent new trip start until space available
- **Battery Low**: Warn user, offer to reduce GPS sampling frequency

### Photo Upload Error Handling

**Android Application:**
- **Mobile Data Active**: Queue photos for later upload when WiFi available, show pending count
- **WiFi Available**: Attempt local connection first, fallback to remote
- **Upload Failure**: Retry with exponential backoff (3 attempts)
- **Server Storage Full**: Alert user, prevent new photo uploads
- **Local Connection Unavailable**: Automatically use remote connection
- **Post-Upload Retention**: Keep local copies for 7 days after successful upload before deletion

**Backend API:**
- **Invalid Image Format**: Return 400 error with supported formats
- **Image Too Large**: Return 413 error with size limit
- **Optimization Failure**: Log error, serve original if optimization fails

### Sync Error Handling

**Android Application:**
- **Network Timeout**: Retry with exponential backoff
- **Partial Sync Failure**: Mark failed items, retry individually
- **Conflict Detection**: Apply timestamp-based resolution, log conflicts, notify user of resolutions
- **Server Unavailable**: Queue changes, show offline indicator

### Database Error Handling

**Backend API:**
- **Connection Failure**: Retry connection, return 503 if unavailable
- **Query Timeout**: Log slow query, return 504 error
- **Constraint Violation**: Return 400 with specific constraint details
- **Transaction Failure**: Rollback, return 500 with safe error message

### Bluetooth Error Handling

**Android Application:**
- **Device Not Found**: Show pairing instructions
- **Connection Lost**: Attempt reconnection, alert user after 3 failures
- **Invalid Data Format**: Log error, discard invalid reading
- **Buffer Overflow**: Clear buffer, log warning

## Testing Strategy

### Unit Testing

**Backend API:**
- Test each service method in isolation with mocked dependencies
- Test API endpoints with mocked services
- Test middleware functions (authentication, error handling)
- Test utility functions (distance calculation, timezone lookup, statistics calculation)
- Test database queries with test database
- Framework: Jest
- Coverage Target: 80% for business logic

**Web Application:**
- Test React components with React Testing Library
- Test custom hooks
- Test LCARS design system components
- Test utility functions
- Test API client methods with mocked responses
- Framework: Vitest + React Testing Library
- Coverage Target: 70% for components

**Android Application:**
- Test ViewModels with mocked repositories
- Test repository methods with mocked DAOs
- Test utility functions
- Test Bluetooth service with mocked Bluetooth adapter
- Framework: JUnit 5 + MockK
- Coverage Target: 75% for business logic

### Property-Based Testing

**Framework Selection:**
- **Backend (Node.js)**: fast-check
- **Web (TypeScript)**: fast-check
- **Android (Kotlin)**: Kotest Property Testing

**Configuration:**
- Minimum 100 iterations per property test
- Each property test must include a comment tag: `**Feature: boat-tracking-system, Property {number}: {property_text}**`
- Each correctness property must be implemented by a single property-based test

**Key Properties to Test:**

1. **GPS Calculations** (Properties 8, 9, 11):
   - Generate random GPS point sequences
   - Verify statistics calculations are consistent
   - Verify stop point detection logic

2. **Sea Time Calculations** (Properties 17, 18, 19, 20):
   - Generate random trip sets with various durations and dates
   - Verify sea time day counting rules
   - Verify multi-day trip handling
   - Verify cross-boat aggregation

3. **Data Association** (Properties 15, 16, 24, 28, 32, 36):
   - Generate random entities and associations
   - Verify retrieval returns correct associated data
   - Verify filtering works correctly

4. **Validation** (Properties 2, 27):
   - Generate random valid and invalid inputs
   - Verify acceptance/rejection behavior

5. **Sync and Conflict Resolution** (Properties 12, 43):
   - Generate random data with timestamps
   - Verify sync preserves data
   - Verify conflict resolution uses newest timestamp

6. **Calculations** (Properties 22, 23, 37, 44):
   - Generate random inputs
   - Verify calculations produce valid outputs
   - Verify edge cases (zero distance, date boundaries)

### Integration Testing

**Backend API:**
- Test complete API flows (create boat → create trip → add photos)
- Test database transactions and rollbacks
- Test photo upload and optimization pipeline
- Test notification generation and delivery
- Framework: Jest with Supertest

**Android Application:**
- Test GPS tracking service with simulated locations
- Test offline storage and sync flow
- Test Bluetooth communication with mock device
- Framework: Espresso + Robolectric

### End-to-End Testing

**Web Application:**
- Test critical user flows (setup wizard, create trip, view dashboard)
- Test across different browsers
- Framework: Playwright

**Android Application:**
- Test on physical devices with real GPS
- Test offline scenarios
- Test background service behavior
- Framework: Espresso

### Performance Testing

**Backend API:**
- Load testing with multiple concurrent requests
- Database query performance with large datasets
- Photo optimization performance
- Tool: k6 or Artillery

**Android Application:**
- GPS tracking battery consumption
- Database query performance with large trip history
- Memory usage during long trips

### Security Testing

- API key validation testing
- Certificate pinning validation testing
- Man-in-the-middle attack prevention testing
- SQL injection prevention
- XSS prevention in web application
- File upload security (photo validation)
- HTTPS enforcement
- Secure storage testing (EncryptedSharedPreferences)

## Deployment and Operations

### Docker Compose Configuration

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: ${DB_NAME}
      POSTGRES_USER: ${DB_USER}
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - boat-tracking-network

  backend:
    build: ./backend
    ports:
      - "8585:8585"
    environment:
      DATABASE_URL: postgresql://${DB_USER}:${DB_PASSWORD}@postgres:5432/${DB_NAME}
      API_KEY: ${API_KEY}
      NODE_ENV: production
    volumes:
      - photo_storage:/app/uploads
    depends_on:
      - postgres
    networks:
      - boat-tracking-network

volumes:
  postgres_data:
  photo_storage:

networks:
  boat-tracking-network:
    driver: bridge
```

### Environment Variables (.env)

```
# Database
DB_NAME=boat_tracking
DB_USER=boat_user
DB_PASSWORD=<secure_password>

# API
PORT=8585
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100

# Authentication
JWT_SECRET=<secure_random_string>
JWT_EXPIRATION=30d

# Storage
PHOTO_STORAGE_PATH=/app/uploads
MAX_PHOTO_SIZE_MB=50

# Backup
BACKUP_PATH=/app/backups
AUTO_BACKUP_ENABLED=true
AUTO_BACKUP_SCHEDULE=0 2 * * *  # Daily at 2 AM
```

### Database Migrations

- Use Prisma Migrate for schema changes
- Migrations stored in version control
- Automatic migration on container startup
- Backup before migration in production

### CLI Commands

**User Management:**
```bash
# Create a new user (admin only - requires server access)
docker-compose exec backend npm run create-user -- --username <username> --password <password>

# Change user password
docker-compose exec backend npm run change-password -- --username <username> --password <new_password>

# List all users
docker-compose exec backend npm run list-users
```

**Database Management:**
```bash
# Reset database to defaults (DEVELOPMENT ONLY - destroys all data)
docker-compose exec backend npm run reset-db

# Reset database and create default user
docker-compose exec backend npm run reset-db -- --username admin --password <password>

# Seed database with test data (development only)
docker-compose exec backend npm run seed-db
```

**Initial Setup:**
- On first deployment, if no users exist, the system will prompt for initial user creation
- Initial setup can be done via:
  1. Web interface setup wizard (creates first user)
  2. CLI command: `docker-compose exec backend npm run create-user`
  3. Environment variable: `INITIAL_USER` and `INITIAL_PASSWORD` (auto-creates on startup)

### Monitoring and Logging

**Backend API:**
- Structured logging with Winston
- Log levels: error, warn, info, debug
- Request/response logging
- Error tracking with stack traces

**Android Application:**
- Crash reporting with Firebase Crashlytics
- Analytics for feature usage
- Performance monitoring

### Backup Strategy

**Database:**
- Automatic daily backups at 2 AM
- Manual backup via web interface
- Retention: 30 days
- Backup format: PostgreSQL dump

**Photos:**
- Included in system backups alongside database
- Photos stored in organized directory structure
- Original and optimized versions both backed up
- External offsite backup handled separately by system administrator

### Cloudflare Tunnel Configuration

- Tunnel configured to route to localhost:8585
- HTTPS enforced
- Rate limiting configured
- DDoS protection enabled

## Future Extensibility

### Plugin Architecture for Sensors

The system is designed to support future sensor types through a plugin architecture:

1. **Sensor Type Registration**: New sensor types can be registered via API
2. **Data Schema Flexibility**: Sensor readings use flexible JSON schema
3. **Custom Logging Frequencies**: Each sensor type can specify its logging behavior
4. **Bluetooth Protocol Abstraction**: Sensor communication abstracted from core logic

### API Versioning

- API endpoints versioned (e.g., `/api/v1/trips`)
- Backward compatibility maintained for at least 2 versions
- Deprecation warnings in API responses
- Migration guides for version upgrades

### Feature Flags

- Feature flags for gradual rollout of new features
- Stored in database, configurable via web interface
- Examples: captain's license tracking, sensor integration, advanced analytics

### Database Schema Evolution

- Prisma migrations support schema changes
- Backward-compatible changes preferred
- Data migration scripts for breaking changes
- Rollback capability for failed migrations

### Mobile App Updates

- Minimum supported API version tracked
- Graceful degradation for older app versions
- In-app update prompts for critical updates
- Feature detection based on API capabilities
