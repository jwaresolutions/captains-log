# Trip Sync Service

This package implements the offline-first trip synchronization system for the Boat Tracking Android application.

## Overview

The sync service handles:
- Automatic periodic synchronization of trips to the backend API
- Manual sync triggering
- Offline storage and sync queue management
- Conflict resolution using newest timestamp
- User notification of conflicts
- Conflict logging for user review

## Components

### TripSyncWorker
WorkManager worker that performs the actual sync operation.

**Features:**
- Syncs all unsynced trips to the backend API
- Includes GPS points and manual data
- Handles conflict detection and resolution
- Uses newest timestamp to resolve conflicts
- Logs conflicts for user review
- Notifies users when conflicts are resolved
- Retries failed syncs with exponential backoff

**Conflict Resolution Strategy:**
1. When creating a trip on the server, check if server has newer data
2. If server data is newer, update local trip with server data
3. If a 409 conflict occurs, fetch server version and compare timestamps
4. Keep the version with the newest timestamp
5. Log the conflict details
6. Notify the user

### SyncManager
Manages scheduling and control of sync operations.

**Features:**
- Schedules periodic sync every 15 minutes
- Triggers immediate one-time sync
- Monitors sync status
- Cancels sync operations

**Usage:**
```kotlin
val syncManager = SyncManager.getInstance(context)

// Schedule periodic sync (called automatically on app start)
syncManager.schedulePeriodicSync()

// Trigger immediate sync
syncManager.triggerImmediateSync()

// Check if sync is running
val isRunning = syncManager.isSyncRunning()

// Cancel all sync
syncManager.cancelAllSync()
```

### ConflictLogger
Logs sync conflicts to a file for user review.

**Features:**
- Logs conflict details (trip ID, timestamps, resolution)
- Provides access to conflict logs
- Allows clearing logs

**Log Format:**
```
=== Sync Conflict ===
Timestamp: 2024-12-06 10:30:45
Trip ID: abc123
Local Modified: 2024-12-06 10:25:00
Server Modified: 2024-12-06 10:28:00
Resolution: Server data kept (newer timestamp)
```

### SyncNotificationHelper
Shows notifications to users about sync events.

**Notification Types:**
- Conflict notifications (when conflicts are resolved)
- Success notifications (when sync completes)
- Failure notifications (when sync fails)

## Requirements Validation

This implementation satisfies the following requirements:

**Requirement 4.10:** Offline trip recording with automatic sync
- ✅ Trips are stored locally when offline
- ✅ Automatic sync when connectivity is restored

**Requirement 15.3:** Automatic sync of offline data
- ✅ WorkManager schedules periodic sync every 15 minutes
- ✅ Sync only runs when internet connection is available

**Requirement 15.4:** Conflict resolution using newest timestamp
- ✅ Conflicts detected by comparing lastModified timestamps
- ✅ Newest timestamp wins
- ✅ User is notified when conflicts are resolved

**Requirement 15.6:** Log conflict details for user review
- ✅ ConflictLogger logs all conflicts to a file
- ✅ Logs include trip ID, timestamps, and resolution
- ✅ Users can view logs in SyncSettingsScreen

## Architecture

```
┌─────────────────────────────────────────────────────┐
│                 BoatTrackingApplication             │
│  - Initializes SyncManager on app start             │
│  - Schedules periodic sync                          │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                    SyncManager                      │
│  - Schedules periodic sync (15 min)                 │
│  - Triggers immediate sync                          │
│  - Monitors sync status                             │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│                  TripSyncWorker                     │
│  - Fetches unsynced trips from Room                 │
│  - Uploads to backend API                           │
│  - Detects conflicts (409 or timestamp comparison)  │
│  - Resolves using newest timestamp                  │
│  - Updates local data if server is newer            │
│  - Logs conflicts                                   │
│  - Notifies user                                    │
└─────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
┌──────────────┐   ┌──────────────────┐   ┌──────────────┐
│ ConflictLogger│   │ SyncNotification │   │ TripRepository│
│              │   │     Helper       │   │              │
└──────────────┘   └──────────────────┘   └──────────────┘
```

## Testing

Property-based tests are implemented in:
- `android/app/src/test/java/com/boattracking/sync/TripSyncPropertyTest.kt`

Tests validate:
- **Property 12:** Offline data sync round trip
- **Property 43:** Sync conflict resolution
- **Property 55:** Sync conflict notification

## Usage in UI

### TripListScreen
Shows sync status with badges:
- "In Progress" - Trip is currently active
- "Not Synced" - Trip needs to be synced

Includes sync button in top bar to trigger immediate sync.

### SyncSettingsScreen
Provides:
- Manual sync trigger
- Conflict log viewer
- Clear logs button
- Sync information

## Future Enhancements

Potential improvements:
1. Batch sync optimization (sync multiple trips in one request)
2. Differential sync (only sync changed fields)
3. Photo sync integration
4. Sync progress indicator
5. Sync statistics (last sync time, success rate)
6. Configurable sync interval
7. WiFi-only sync option
8. Sync on trip completion trigger
