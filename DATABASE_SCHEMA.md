# Database Schema Documentation

## Overview

The Boat Tracking System uses PostgreSQL with 17 tables to manage boats, trips, GPS tracking, user authentication, maintenance, notes, todos, notifications, locations, photos, and sensor data.

## Table Descriptions

### 1. Boat
**Purpose**: Stores boat information and settings for the fleet management system.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique boat identifier | Required, Auto-generated |
| `name` | String | Display name of the boat | Required |
| `enabled` | Boolean | Whether boat is active in the system | Default: true, Indexed |
| `isActive` | Boolean | Currently selected boat for operations | Default: false, Indexed |
| `metadata` | JSON | Flexible storage for boat specifications | Optional |
| `createdAt` | DateTime | Record creation timestamp | Auto-generated |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- One-to-many with Trip (boatId)
- One-to-many with Note (boatId)
- One-to-many with TodoList (boatId)
- One-to-many with MaintenanceTask (boatId)

---

### 2. Trip
**Purpose**: Records individual boat trips with timing, statistics, and manual data entry.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique trip identifier | Required, Auto-generated |
| `boatId` | String (UUID) | **Foreign Key** to Boat | Required, Indexed |
| `startTime` | DateTime | Trip start timestamp | Required, Indexed |
| `endTime` | DateTime | Trip end timestamp | Optional (null for active trips), Indexed |
| `waterType` | String | Type of water (inland/coastal/offshore) | Default: "inland" |
| `role` | String | User's role (captain/crew/observer) | Default: "captain" |
| `timezone` | String | Timezone for the trip | Optional |
| `durationSeconds` | Integer | Computed trip duration | Optional |
| `distanceMeters` | Float | Computed trip distance | Optional |
| `averageSpeedKnots` | Float | Computed average speed | Optional |
| `maxSpeedKnots` | Float | Computed maximum speed | Optional |
| `engineHours` | Float | Manual entry - engine runtime | Optional |
| `fuelConsumed` | Float | Manual entry - fuel usage | Optional |
| `weatherConditions` | String | Manual entry - weather description | Optional |
| `numberOfPassengers` | Integer | Manual entry - passenger count | Optional |
| `numberOfCrew` | Integer | Manual entry - crew count | Optional |
| `destination` | String | Manual entry - trip destination | Optional |
| `createdAt` | DateTime | Record creation timestamp | Auto-generated |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- Many-to-one with Boat (boatId)
- One-to-many with GPSPoint (tripId)
- One-to-many with Note (tripId)
- One-to-many with SensorReading (tripId)

---

### 3. GPSPoint
**Purpose**: Stores individual GPS coordinates and telemetry data for trip tracking.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique GPS point identifier | Required, Auto-generated |
| `tripId` | String (UUID) | **Foreign Key** to Trip | Required, Indexed |
| `latitude` | Float | GPS latitude coordinate | Required |
| `longitude` | Float | GPS longitude coordinate | Required |
| `altitude` | Float | GPS altitude in meters | Optional |
| `accuracy` | Float | GPS accuracy in meters | Optional |
| `speed` | Float | Speed in knots at this point | Optional |
| `heading` | Float | Compass heading in degrees | Optional |
| `timestamp` | DateTime | When GPS point was recorded | Required, Indexed |
| `isStopPoint` | Boolean | Whether this represents a stop | Default: false |

**Relationships**:
- Many-to-one with Trip (tripId)

---

### 4. User
**Purpose**: Manages user accounts for system authentication and authorization.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique user identifier | Required, Auto-generated |
| `username` | String | Unique username for login | Required, Unique, Indexed |
| `passwordHash` | String | Bcrypt hashed password | Required |
| `createdAt` | DateTime | Account creation timestamp | Auto-generated |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- One-to-many with SessionToken (userId)

---

### 5. SessionToken
**Purpose**: Manages JWT session tokens for user authentication and session management.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique token record identifier | Required, Auto-generated |
| `userId` | String (UUID) | **Foreign Key** to User | Required, Indexed |
| `token` | String | JWT token string | Required, Unique, Indexed |
| `expiresAt` | DateTime | Token expiration timestamp | Required, Indexed |
| `isRevoked` | Boolean | Whether token has been revoked | Default: false, Indexed |
| `createdAt` | DateTime | Token creation timestamp | Auto-generated |

**Relationships**:
- Many-to-one with User (userId)

---

### 6. Note
**Purpose**: Stores notes that can be general, boat-specific, or trip-specific with tag organization.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique note identifier | Required, Auto-generated |
| `content` | String | Note text content | Required |
| `type` | String | Note type (general/boat/trip) | Required, Indexed |
| `boatId` | String (UUID) | **Foreign Key** to Boat (optional) | Optional, Indexed |
| `tripId` | String (UUID) | **Foreign Key** to Trip (optional) | Optional, Indexed |
| `tags` | String[] | Array of organization tags | Optional |
| `createdAt` | DateTime | Note creation timestamp | Auto-generated, Indexed |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- Many-to-one with Boat (boatId) - optional
- Many-to-one with Trip (tripId) - optional

---

### 7. TodoList
**Purpose**: Manages named to-do lists that can be general or boat-specific.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique list identifier | Required, Auto-generated |
| `title` | String | List display name | Required |
| `boatId` | String (UUID) | **Foreign Key** to Boat (optional) | Optional, Indexed |
| `createdAt` | DateTime | List creation timestamp | Auto-generated, Indexed |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- Many-to-one with Boat (boatId) - optional
- One-to-many with TodoItem (todoListId)

---

### 8. TodoItem
**Purpose**: Individual tasks within to-do lists with completion tracking.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique item identifier | Required, Auto-generated |
| `todoListId` | String (UUID) | **Foreign Key** to TodoList | Required, Indexed |
| `content` | String | Task description | Required |
| `completed` | Boolean | Whether task is completed | Default: false, Indexed |
| `completedAt` | DateTime | When task was completed | Optional |
| `createdAt` | DateTime | Item creation timestamp | Auto-generated, Indexed |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- Many-to-one with TodoList (todoListId)

---

### 9. MaintenanceTask
**Purpose**: Scheduled maintenance tasks with recurrence patterns and due date tracking.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique task identifier | Required, Auto-generated |
| `boatId` | String (UUID) | **Foreign Key** to Boat | Required, Indexed |
| `title` | String | Task name/description | Required |
| `description` | String | Detailed task description | Optional |
| `component` | String | Related boat component/system | Optional |
| `dueDate` | DateTime | When task is due | Required, Indexed |
| `recurrence` | JSON | Recurrence configuration | Optional |
| `createdAt` | DateTime | Task creation timestamp | Auto-generated, Indexed |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Recurrence JSON Structure**:
```json
{
  "type": "days|weeks|months|years|engine_hours",
  "interval": number
}
```

**Relationships**:
- Many-to-one with Boat (boatId)
- One-to-many with MaintenanceCompletion (maintenanceTaskId)

---

### 10. MaintenanceCompletion
**Purpose**: Records of completed maintenance tasks with cost tracking and notes.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique completion identifier | Required, Auto-generated |
| `maintenanceTaskId` | String (UUID) | **Foreign Key** to MaintenanceTask | Required, Indexed |
| `completedAt` | DateTime | When maintenance was completed | Default: now(), Indexed |
| `cost` | Float | Cost of maintenance (optional) | Optional |
| `notes` | String | Completion notes | Optional |
| `createdAt` | DateTime | Record creation timestamp | Auto-generated |

**Relationships**:
- Many-to-one with MaintenanceTask (maintenanceTaskId)

---

### 11. Notification
**Purpose**: System notifications for maintenance due dates and other alerts.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique notification identifier | Required, Auto-generated |
| `type` | String | Notification type (maintenance_due/system) | Required, Indexed |
| `title` | String | Notification title | Required |
| `message` | String | Notification content | Required |
| `entityType` | String | Related entity type (optional) | Optional |
| `entityId` | String (UUID) | Related entity ID (optional) | Optional |
| `read` | Boolean | Whether notification has been read | Default: false, Indexed |
| `createdAt` | DateTime | Notification creation timestamp | Auto-generated, Indexed |

**Composite Index**: (entityType, entityId)

**Relationships**:
- Generic relationships to any entity via entityType/entityId pattern

---

### 12. MarkedLocation
**Purpose**: Saved map locations like fishing spots, marinas, anchorages, and hazards.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique location identifier | Required, Auto-generated |
| `name` | String | Location display name | Required |
| `latitude` | Float | GPS latitude coordinate | Required |
| `longitude` | Float | GPS longitude coordinate | Required |
| `category` | String | Location type (fishing/marina/anchorage/hazard/other) | Required, Indexed |
| `notes` | String | Additional location information | Optional |
| `tags` | String[] | Array of organization tags | Optional |
| `tripId` | String (UUID) | **Foreign Key** to Trip (optional) | Optional, Indexed |
| `createdAt` | DateTime | Location creation timestamp | Auto-generated, Indexed |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Composite Index**: (latitude, longitude)

**Relationships**:
- Many-to-one with Trip (tripId) - optional

---

### 13. Photo
**Purpose**: Reusable photo storage that can be attached to multiple entities via junction table.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique photo identifier | Required, Auto-generated |
| `originalPath` | String | Path to high-resolution original | Required |
| `webOptimizedPath` | String | Path to web-optimized version (1920px) | Required |
| `mimeType` | String | Image MIME type | Required |
| `sizeBytes` | Integer | File size in bytes | Required |
| `category` | String | Photo type (reference/completion/general) | Default: "general", Indexed |
| `title` | String | Photo title/description | Optional |
| `metadata` | JSON | Image metadata (width, height, etc.) | Optional |
| `createdAt` | DateTime | Photo upload timestamp | Auto-generated, Indexed |

**Metadata JSON Structure**:
```json
{
  "width": number,
  "height": number,
  "takenAt": "ISO datetime string",
  "camera": "device info",
  "gps": {
    "latitude": number,
    "longitude": number
  }
}
```

**Relationships**:
- Many-to-many with various entities via EntityPhoto junction table

---

### 14. SensorType
**Purpose**: Defines sensor types for Arduino integration with logging configuration.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique sensor type identifier | Required, Auto-generated |
| `name` | String | Sensor type name (fuel_level, battery_voltage, etc.) | Required, Unique, Indexed |
| `unit` | String | Unit of measurement (liters, volts, boolean) | Required |
| `loggingFrequency` | String | Logging type (continuous/snapshot) | Required, Indexed |
| `description` | String | Sensor description | Optional |
| `createdAt` | DateTime | Type creation timestamp | Auto-generated |
| `updatedAt` | DateTime | Last modification timestamp | Auto-updated |

**Relationships**:
- One-to-many with SensorReading (sensorTypeId)

---

### 15. EntityPhoto
**Purpose**: Junction table enabling many-to-many relationships between photos and various entities (trips, maintenance tasks, todos, notes).

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique relationship identifier | Required, Auto-generated |
| `photoId` | String (UUID) | **Foreign Key** to Photo | Required, Indexed |
| `entityType` | String | Type of entity (trip/maintenance_task/maintenance_completion/todo_item/note) | Required, Indexed |
| `entityId` | String (UUID) | ID of related entity | Required, Indexed |
| `createdAt` | DateTime | Relationship creation timestamp | Auto-generated |

**Composite Indexes**: 
- (photoId, entityType, entityId) - Unique constraint
- (entityType, entityId) - For finding photos by entity

**Relationships**:
- Many-to-one with Photo (photoId)
- Generic relationships to Trip, MaintenanceTask, MaintenanceCompletion, TodoItem, Note via entityType/entityId pattern

---

### 16. SensorReading
**Purpose**: Individual sensor data readings collected during trips via Bluetooth.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `id` | String (UUID) | **Primary Key** - Unique reading identifier | Required, Auto-generated |
| `tripId` | String (UUID) | **Foreign Key** to Trip | Required, Indexed |
| `sensorTypeId` | String (UUID) | **Foreign Key** to SensorType | Required, Indexed |
| `value` | Float | Numeric sensor value | Required |
| `unit` | String | Unit of measurement (copied from SensorType) | Required |
| `timestamp` | DateTime | When reading was taken | Required, Indexed |
| `createdAt` | DateTime | Record creation timestamp | Auto-generated |

**Composite Index**: (tripId, sensorTypeId, timestamp)

**Relationships**:
- Many-to-one with Trip (tripId)
- Many-to-one with SensorType (sensorTypeId)

---

## Database Relationships Diagram

```
┌─────────────┐    ┌──────────────┐    ┌─────────────┐
│    User     │    │ SessionToken │    │    Boat     │
│             │    │              │    │             │
│ id (PK)     │◄──┤│ userId (FK)  │    │ id (PK)     │
│ username    │   1│ token        │    │ name        │
│ passwordHash│    │ expiresAt    │    │ enabled     │
└─────────────┘   M└──────────────┘    │ isActive    │
                                       └─────────────┘
                                              │1
                                              │
                                              ▼M
                  ┌─────────────┐    ┌──────────────┐    ┌─────────────┐
                  │ GPSPoint    │    │    Trip      │    │    Note     │
                  │             │    │              │    │             │
                  │ id (PK)     │    │ id (PK)      │◄──┤│ tripId (FK) │
                  │ tripId (FK) │───►│ boatId (FK)  │   1│ boatId (FK) │──┐
                  │ latitude    │   M│ startTime    │    │ content     │  │
                  │ longitude   │    │ endTime      │   M│ type        │  │
                  │ timestamp   │    │ waterType    │    └─────────────┘  │
                  │ isStopPoint │    │ role         │                     │
                  └─────────────┘    │numPassengers │                     │
                                     │ numCrew      │                     │
                                     └──────────────┘                     │
                                            │1                            │
                                            │                             │
                                            ▼M                            │
                  ┌─────────────┐    ┌──────────────┐                     │
                  │SensorReading│    │ SensorType   │                     │
                  │             │    │              │                     │
                  │ id (PK)     │    │ id (PK)      │                     │
                  │ tripId (FK) │───►│ name         │◄────────────────────┤
                  │sensorTypeId │   M│ unit         │                    M│
                  │ value       │    │loggingFreq   │                     │
                  │ timestamp   │    └──────────────┘                     │
                  └─────────────┘           │1                            │
                                           │                             │
                                           ▼M                            │
                                    ┌──────────────┐                     │
                                    │    Photo     │                     │
                                    │              │                     │
                                    │ id (PK)      │                     │
                                    │ originalPath │◄──────────────────┐ │
                                    │webOptimized  │                   │ │
                                    │ category     │                   │ │
                                    │ title        │                   │ │
                                    └──────────────┘                   │ │
                                           │1                          │ │
                                           │                           │ │
                                           ▼M                          │ │
                                    ┌──────────────┐                   │ │
                                    │ EntityPhoto  │                   │ │
                                    │              │                   │ │
                                    │ id (PK)      │                   │ │
                                    │ photoId (FK) │───────────────────┘ │
                                    │ entityType   │                     │
                                    │ entityId     │                     │
                                    └──────────────┘                     │
                                                                         │
┌─────────────┐    ┌──────────────┐    ┌──────────────┐                 │
│  TodoList   │    │  TodoItem    │    │MaintenanceTask│                │
│             │    │              │    │              │                 │
│ id (PK)     │◄──┤│todoListId(FK)│    │ id (PK)      │◄────────────────┘
│ title       │   1│ content      │    │ boatId (FK)  │
│ boatId (FK) │    │ completed    │    │ title        │
└─────────────┘   M│ completedAt  │    │ dueDate      │
       ▲           └──────────────┘    │ recurrence   │
       │                               └──────────────┘
       │                                      │1
       │                                      │
       │                                      ▼M
       │                               ┌──────────────┐
       │                               │Maintenance   │
       │                               │Completion    │
       │                               │              │
       │                               │ id (PK)      │
       │                               │maintTaskId   │
       │                               │ completedAt  │
       │                               │ cost         │
       │                               └──────────────┘
       │
       │
       └──────────────────────────────────────────────────────────┐
                                                                  │
┌─────────────┐    ┌──────────────┐                              │
│Notification │    │MarkedLocation│                              │
│             │    │              │                              │
│ id (PK)     │    │ id (PK)      │                              │
│ type        │    │ name         │                              │
│ title       │    │ latitude     │                              │
│ message     │    │ longitude    │                              │
│ entityType  │    │ category     │                              │
│ entityId    │    │ tripId (FK)  │──────────────────────────────┤
│ read        │    │ tags         │                              │
└─────────────┘    └──────────────┘                              │
                                                                 │
                                                                 │
                                    ┌─────────────┐              │
                                    │    Boat     │◄─────────────┘
                                    │             │
                                    │ id (PK)     │
                                    │ name        │
                                    │ enabled     │
                                    │ isActive    │
                                    └─────────────┘
```

## Key Relationships Summary

### Core Entity Relationships
- **Boat** → **Trip** (1:M) - Each boat can have multiple trips
- **Trip** → **GPSPoint** (1:M) - Each trip has multiple GPS coordinates
- **Trip** → **SensorReading** (1:M) - Each trip can have sensor data

### Authentication
- **User** → **SessionToken** (1:M) - Each user can have multiple active sessions

### Organization Features
- **Boat** → **Note** (1:M) - Boat-specific notes
- **Trip** → **Note** (1:M) - Trip-specific notes
- **Boat** → **TodoList** (1:M) - Boat-specific todo lists
- **TodoList** → **TodoItem** (1:M) - Items within lists

### Maintenance System
- **Boat** → **MaintenanceTask** (1:M) - Scheduled maintenance per boat
- **MaintenanceTask** → **MaintenanceCompletion** (1:M) - Completion history

### Media and Sensors
- **SensorType** → **SensorReading** (1:M) - Sensor definitions and readings
- **Photo** → **EntityPhoto** (1:M) - Photos can be attached to multiple entities
- **EntityPhoto** - Junction table enabling photo sharing across maintenance tasks, todos, notes, trips

### Standalone Tables
- **MarkedLocation** - Map locations with optional trip association
- **Notification** - System alerts with optional entity references

## Indexes Summary

### Primary Performance Indexes
- **Boat**: enabled, isActive
- **Trip**: boatId, startTime, endTime
- **GPSPoint**: tripId, timestamp
- **User**: username
- **SessionToken**: userId, token, expiresAt, isRevoked

### Search and Organization Indexes
- **Note**: type, boatId, tripId, createdAt
- **TodoList**: boatId, createdAt
- **TodoItem**: todoListId, completed, createdAt
- **MaintenanceTask**: boatId, dueDate, createdAt
- **MaintenanceCompletion**: maintenanceTaskId, completedAt

### Sensor and Media Indexes
- **SensorType**: name, loggingFrequency
- **SensorReading**: tripId, sensorTypeId, timestamp, (tripId, sensorTypeId, timestamp)
- **Photo**: category, createdAt
- **EntityPhoto**: photoId, entityType, (photoId, entityType, entityId), (entityType, entityId)
- **MarkedLocation**: category, (latitude, longitude), tripId, createdAt
- **Notification**: type, read, createdAt, (entityType, entityId)

This schema supports the complete boat tracking system with efficient querying, proper referential integrity, and flexible organization features.