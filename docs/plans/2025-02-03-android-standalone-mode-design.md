# Android Standalone Mode Design

**Date:** 2025-02-03
**Status:** Draft
**Author:** Brainstorming session

## Overview

Enable the Android app to work completely standalone without requiring a backend server. Users can optionally connect to a server for multi-device sync, crew features, and maintenance tracking. Peer-to-peer sharing allows collaboration between standalone users.

## Core Concept

- App works fully standalone out of the box - no server, no login, no account required
- Server connection is optional, found in Settings
- Bidirectional: users can connect and disconnect from servers at any time
- First launch opens directly to main screen, ready to use

## Feature Availability by Mode

| Feature | Standalone | Connected |
|---------|:----------:|:---------:|
| Boats, Trips, GPS tracking | Yes | Yes |
| Notes, Todos, Marked Locations | Yes | Yes |
| Photos | Yes (local) | Yes (synced) |
| Captain's License Progress | Yes (local calc) | Yes (local calc) |
| Maps | Yes | Yes |
| Peer-to-peer sharing | Yes (QR/file) | Yes (QR/file) |
| Multi-device sync | No | Yes |
| Crew registration | No | Yes |
| Maintenance tracking | Hidden | Yes |
| Sensors | Hidden | Yes |
| Notifications | Disabled | Yes |

## Connecting to a Server

### Location
Settings → "Connect to Server"

### UI Flow
1. User taps "Connect to Server"
2. Form displays:
   - Server URL field (e.g., `https://captains-log.example.com`)
   - Username field
   - Password field
   - Info note: *"Connecting to a server enables multi-device sync, crew features, and maintenance tracking."*
3. User submits → app authenticates via JWT
4. On success: triggers initial sync

### Initial Sync Behavior
- All local data uploads to server (boats, trips, notes, todos, locations, photos)
- Server data downloads and merges with local
- User becomes "owner" of their uploaded data
- Conflicts resolved with user prompt (keep local / keep server / keep both)

### Post-Connection State
- Navigation updates to show Maintenance and Sensors
- Sync indicator appears in UI
- App behaves as current offline-first with sync

### Error Handling
- Invalid credentials → clear error message, retry
- Server unreachable → "Could not connect. Check URL and try again."
- Partial sync failure → queue failed items, retry automatically

## Disconnecting from a Server

### Location
Settings → (when connected) "Server: [url]" → "Disconnect"

### Disconnect Flow
1. User taps "Disconnect"
2. Prompt appears: *"Download all your data before disconnecting?"*
   - **"Download & Disconnect"** - Fetches latest from server first, then disconnects
   - **"Disconnect Now"** - Uses current local data, skips download
   - **"Cancel"** - Abort
3. App processes data ownership:
   - **Keep:** All boats user owns
   - **Keep:** All trips where user was captain
   - **Keep:** All trips where user was crew (marked read-only)
   - **Keep:** All notes, todos, locations, photos user created
   - **Remove:** Data owned by other users
4. Clears server credentials
5. Navigation updates: Maintenance and Sensors hidden
6. App returns to standalone mode

### Post-Disconnect State
- All kept data remains fully functional
- Trips where user was crew are read-only (can view, not edit)
- User can continue logging new trips as captain
- Can reconnect to same or different server later

### Edge Cases
- Unsynced local changes at disconnect time: warn user, offer to sync first or lose changes
- Large data download: show progress indicator

## Peer-to-Peer Sharing (Standalone)

### Purpose
Share boats and trips between standalone users without a server.

### Sharing Methods

| Data Type | Method | Reason |
|-----------|--------|--------|
| Boat | QR code | Small data, quick visual share |
| Trip (with GPS) | Share sheet (file) | GPS data can be large, use standard Android sharing |

### Share Flow (Sender)
1. Open boat or trip details
2. Tap "Share" button
3. For boats: QR code displays on screen
4. For trips: Share sheet opens (AirDrop, Messages, email, save to files, etc.)

### Receive Flow (Recipient)
1. For QR: Open app → scan QR (camera or from settings)
2. For files: Tap received file → app opens and imports

### Origin Tracking
- Each shared item tagged with: source user identifier, share timestamp, original item ID
- On re-import: app detects "already have this from same source" → updates instead of duplicating

### Conflict Resolution
- Boat owner's version is authoritative for boat data
- Trip captain's version is authoritative for trip data
- Since both parties actively initiate transfer/receive, accept incoming data (user chose to receive it)

### Data Included in Share

| Boat Share | Trip Share |
|------------|------------|
| Boat name, type, specs | Trip metadata |
| Registration info | All GPS points |
| Fuel capacity | Crew list |
| Photo (optional) | Photos (optional) |
| | Notes for that trip |

## Captain's License Progress (Local Calculation)

### Current State
Calculated on backend server, Android displays results.

### New Architecture
Calculation logic lives in both Android and Web, computed from raw trip data.

### Calculation Logic (shared algorithm)
- Sea time rule: 4+ hours on water = 1 sea day
- Requirement: 360 sea days for license
- Tracks: total days, days per boat, days per time period
- Breakdown by: date range, boat, role (captain vs crew)

### Implementation

| Component | Responsibility |
|-----------|---------------|
| Android | Calculates from local trip database |
| Web | Calculates from server trip database |
| Backend API | Stores raw trip data only, no calculation endpoints needed |

### Data Flow
```
Trips (with timestamps, duration)
    → Local calculation engine
    → Progress UI (days completed, remaining, percentage)
```

### Sync Consideration
- When connected, both Android and Web see same trips (after sync)
- Both calculate same results (deterministic algorithm)
- No "authoritative" calculation - each client computes independently

## Technical Implementation

### Android Changes Required

| Area | Change |
|------|--------|
| Authentication | Make optional. New "standalone mode" flag. Skip login when no server configured. |
| Navigation | Conditionally show/hide Maintenance and Sensors based on connection state. |
| License Progress | Move calculation from API call to local repository method. Query trips from Room DB. |
| Sharing (new) | QR generator/scanner for boats. File export/import for trips. Origin tracking fields in entities. |
| Settings (new) | "Connect to Server" section with URL + credentials form. "Disconnect" option when connected. |
| Data entities | Add `ownerId`, `originSource`, `originTimestamp`, `isReadOnly` fields for ownership tracking. |
| Notifications | Disable notification fetching in standalone mode. |
| Sensors | Skip sensor type fetching, hide UI in standalone. |

### Backend Changes Required

| Area | Change |
|------|--------|
| License endpoints | Can be deprecated or kept for backwards compatibility. Web will calculate directly. |
| No other changes | Backend already supports the data model needed. |

### Web Changes Required

| Area | Change |
|------|--------|
| License Progress | Add calculation logic (port from Android or shared algorithm spec). |

### New Database Fields (Room)

```kotlin
BoatEntity:
  + ownerId: String?
  + originSource: String?      // "user:john@device123"
  + originTimestamp: Long?

TripEntity:
  + captainId: String
  + originSource: String?
  + originTimestamp: Long?
  + isReadOnly: Boolean = false
```

## User Journeys

### New Standalone User
Install → use immediately → log trips → track license progress

### Connect Later
Settings → add server → upload local data → gain crew/maintenance features

### Share with Friend
Share boat via QR → friend scans → both can log trips on same boat

### Disconnect
Download data → remove server → keep all personal data → back to standalone

## Open Questions

None at this time.

## Appendix: Ownership Model

- One captain per boat (owner)
- Crew can see trips and register themselves as crew members
- Boat owner's data is authoritative for boat information
- Trip captain's data is authoritative for trip information
- When disconnecting, keep all trips user participated in (captain or crew)
- Crew trips become read-only after disconnect
