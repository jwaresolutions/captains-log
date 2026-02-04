# Android Standalone Mode - Full Specification

**Generated:** 2025-02-03
**Status:** Autopilot Phase 0 Complete

---

## Part 1: Requirements Analysis

### Functional Requirements

1. **Standalone Mode Operation**
   - App launches directly to main screen without login
   - All core features work without server connection
   - GPS tracking, trip logging, boat management fully functional locally

2. **Optional Server Connection**
   - Settings → "Connect to Server" with URL + credentials form
   - JWT-based authentication
   - Initial sync uploads local data, downloads server data
   - Conflict resolution UI (keep local / keep server / keep both)

3. **Disconnection Flow**
   - Prompt to download data first
   - Keep all user-owned boats and captain trips
   - Keep crew trips as read-only
   - Remove data owned by others
   - Hide Maintenance and Sensors after disconnect

4. **Peer-to-Peer Sharing**
   - Boat sharing via QR code (small data)
   - Trip sharing via file export (JSON with GPS data)
   - Origin tracking for deduplication on re-import
   - Ownership-based conflict resolution (boat owner / trip captain wins)

5. **Local License Calculation**
   - Calculate sea days from local trip database
   - 4+ hours on water = 1 sea day
   - Track 360-day requirement and 90-days-in-3-years

6. **Conditional Feature Visibility**
   - Hide Maintenance tab in standalone mode
   - Hide Sensors tab in standalone mode
   - Disable notifications in standalone mode

### Non-Functional Requirements

- **Performance:** License calculation < 500ms for 1000 trips
- **UX:** First trip logged < 2 minutes from install
- **Security:** Server credentials stored in encrypted preferences
- **Reliability:** No data loss during connect/disconnect flows

### Implicit Requirements

- Device identifier (UUID) for origin tracking
- Room migration for new entity fields
- ConnectionManager refactoring for nullable API service
- File provider for trip sharing
- Camera permission for QR scanning (optional)

### Out of Scope

- Multi-device sync in standalone mode (requires server)
- Crew registration in standalone mode (requires server)
- Push notifications in standalone mode
- Sensor data persistence in standalone mode
- Automatic conflict resolution (always prompts user)

---

## Part 2: Technical Specification

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         MainActivity                             │
│  (No auth check - goes directly to MainAppContent)              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      AppModeManager                              │
│  - appMode: STANDALONE | CONNECTED                              │
│  - Determines feature visibility                                 │
│  - Manages connect/disconnect flows                             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
           ┌───────────────┴───────────────┐
           │                               │
           ▼                               ▼
┌─────────────────────┐         ┌─────────────────────┐
│   STANDALONE MODE   │         │   CONNECTED MODE    │
├─────────────────────┤         ├─────────────────────┤
│ • Local Room DB     │         │ • Local + Server    │
│ • No sync           │         │ • Background sync   │
│ • P2P sharing       │         │ • P2P sharing       │
│ • Local license     │         │ • Local license     │
│ • Hide Maint/Sensors│         │ • Show all tabs     │
└─────────────────────┘         └─────────────────────┘
```

### Data Model Changes

**BoatEntity - Add fields:**
- `ownerId: String?` - User ID of boat owner (null = local user)
- `originSource: String?` - Device identifier for P2P shares
- `originTimestamp: Long?` - Unix timestamp when shared/imported

**TripEntity - Add fields:**
- `captainId: String?` - User ID of captain (null = local user)
- `originSource: String?` - Device identifier for P2P shares
- `originTimestamp: Long?` - Unix timestamp when shared/imported
- `isReadOnly: Boolean` - True for crew trips after disconnect

**Other entities (NoteEntity, MarkedLocationEntity, TodoListEntity, PhotoEntity):**
- `originSource: String?`
- `originTimestamp: Long?`

**Room Migration 9 → 10:**
```kotlin
database.execSQL("ALTER TABLE boats ADD COLUMN ownerId TEXT")
database.execSQL("ALTER TABLE boats ADD COLUMN originSource TEXT")
database.execSQL("ALTER TABLE boats ADD COLUMN originTimestamp INTEGER")
database.execSQL("ALTER TABLE trips ADD COLUMN captainId TEXT")
database.execSQL("ALTER TABLE trips ADD COLUMN originSource TEXT")
database.execSQL("ALTER TABLE trips ADD COLUMN originTimestamp INTEGER")
database.execSQL("ALTER TABLE trips ADD COLUMN isReadOnly INTEGER NOT NULL DEFAULT 0")
// ... similar for other entities
```

### New File Structure

```
android/app/src/main/java/com/captainslog/
├── mode/
│   ├── AppMode.kt                    # STANDALONE | CONNECTED enum
│   └── AppModeManager.kt             # Mode state and transitions
├── sharing/
│   ├── BoatShareGenerator.kt         # QR code generation
│   ├── BoatQrScannerScreen.kt        # QR scanning UI
│   ├── TripExporter.kt               # JSON file export
│   ├── TripImporter.kt               # JSON file import
│   └── models/
│       ├── BoatShareData.kt          # QR payload model
│       └── TripExportData.kt         # File export model
├── license/
│   └── LicenseCalculator.kt          # Local sea time calculation
├── ui/
│   ├── sharing/
│   │   ├── ShareBoatScreen.kt        # QR display UI
│   │   ├── ScanBoatScreen.kt         # Camera scanner UI
│   │   └── ShareTripScreen.kt        # Share sheet UI
│   └── settings/
│       └── ServerConnectionScreen.kt # Server config form
└── database/
    └── migrations/
        └── Migration_9_10.kt         # New entity fields
```

### Dependencies to Add

```kotlin
// QR Code Generation (ZXing)
implementation("com.journeyapps:zxing-android-embedded:4.3.0")
implementation("com.google.zxing:core:3.5.2")

// QR Code Scanning (ML Kit)
implementation("com.google.mlkit:barcode-scanning:17.2.0")
```

### Key Component Changes

| Component | Change |
|-----------|--------|
| `MainActivity.kt` | Remove JWT check, go directly to MainAppContent |
| `MainNavigation.kt` | Filter tabs based on AppMode |
| `SettingsScreen.kt` | Add Server section with Connect/Disconnect |
| `ConnectionManager.kt` | Make API service nullable, add isServerConfigured |
| `LicenseProgressViewModel.kt` | Use local LicenseCalculator instead of API |
| `SyncManager.kt` | Only schedule sync when CONNECTED |

### Sharing Formats

**Boat QR (JSON):**
```json
{"v":1,"type":"boat","origin":"device:abc123","ts":1706900000,
 "data":{"id":"uuid","name":"Sea Breeze","enabled":true}}
```

**Trip Export (.captainslog JSON):**
```json
{
  "version": 1,
  "type": "trip",
  "origin": "device:abc123",
  "exportedAt": 1706900000,
  "trip": { ... },
  "gpsPoints": [ ... ],
  "notes": [ ... ],
  "photos": [ ... ]
}
```

---

## Part 3: Implementation Tasks (Revised per Critic Review)

### Phase 1: Foundation (Mode Management & DB Migration)
1. Create AppMode enum and AppModeManager
2. Add deviceId generation to SecurePreferences (lazy UUID initialization)
3. Add new entity fields to BoatEntity (ownerId, originSource, originTimestamp)
4. Add new entity fields to TripEntity (captainId, originSource, originTimestamp, isReadOnly)
5. Add origin fields to other entities (NoteEntity, PhotoEntity, MarkedLocationEntity, TodoListEntity)
6. Create Room Migration 9 → 10 AND remove fallbackToDestructiveMigration()
7. Update TripDao with ownership-filtered queries (getTripsForUser, getReadOnlyTrips)
8. Update BoatDao with ownership-filtered queries (getOwnedBoats)
9. Refactor ConnectionManager for nullable API service

### Phase 2: Entry Point & Navigation
10. Remove JWT requirement from MainActivity
11. Add conditional tab visibility in MainNavigation
12. Update SettingsScreen with Server section

### Phase 3: Server Connection UI
13. Create ServerConnectionScreen (connect form)
14. Create ConflictResolutionDialog composable (keep-local/keep-server/keep-both)
15. Add initial sync with conflict resolution flow
16. Create disconnect flow with data ownership processing

### Phase 4: Local License Calculation
17. Create LicenseCalculator with sea day algorithm
18. Update LicenseProgressViewModel to use local calculator

### Phase 5: Peer-to-Peer Sharing
19. Add QR dependencies (ZXing, ML Kit)
20. Add FileProvider configuration and intent filters (needed before exporters)
21. Create sharing data models (BoatShareData, TripExportData)
22. Create BoatShareGenerator (QR generation)
23. Create ShareBoatScreen (QR display)
24. Create ScanBoatScreen (QR scanner) and BoatImporter
25. Create TripExporter and TripImporter
26. Create ShareTripScreen with Android share sheet
27. Add share buttons to boat and trip list screens

### Phase 6: Polish & Testing
28. Disable notifications in standalone mode
29. Update SyncManager to respect mode
30. Update BoatTrackingApplication initialization
31. Integration tests for complete flows

---

**PLANNING_COMPLETE**
