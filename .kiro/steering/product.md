# Product Overview

## Purpose

The Boat Tracking System is a comprehensive dual-platform application designed to help boat operators track vessel usage, maintain captain's logs for licensing purposes, manage maintenance schedules, and record detailed trip information including GPS tracking.

## System Components

- **Backend API**: RESTful API server handling business logic and data persistence
- **Web Application**: React-based dashboard with LCARS (Star Trek TNG/Voyager) design system for comprehensive management
- **Android Application**: Mobile app with GPS tracking, offline functionality, sensor integration, and dual connection mode
- **Database**: PostgreSQL for centralized data storage
- **Deployment**: Docker Compose for easy setup and portability

## Key Features

### Trip Management
- GPS tracking with configurable intervals (default 5 seconds)
- Offline trip recording with automatic sync
- Stop point detection (5+ minutes within 45-foot radius)
- Trip statistics: duration, distance, speed, heading
- Manual data entry: engine hours, fuel, weather, passengers, destination
- Photo attachments and trip notes
- Water type classification (Inland, Coastal, Offshore)
- Role tracking (captain, crew, observer)

### Captain's License Progress
- Sea Time Day calculation (4+ hours = 1 day)
- Progress tracking toward 6-pack OUPV requirements
- 360-day total and 90-days-in-3-years tracking
- Estimated completion dates based on usage rate
- Cross-boat trip aggregation
- Optional feature that can be disabled

### Boat Management
- Multiple boat support with active boat selection
- Enable/disable boats to suppress notifications
- Boat-specific notes and to-do lists
- Maintenance task scheduling per boat

### Maintenance Tracking
- Scheduled maintenance with custom recurrence
- Due date notifications (7 days advance)
- Cost tracking and photo documentation
- Maintenance history with before/after photos
- Component/system linkage

### Notes and Organization
- General notes, boat-specific notes, and trip notes
- Tag-based organization and filtering
- Search capabilities

### To-Do Lists
- Multiple named lists (general or boat-specific)
- Task completion tracking with timestamps
- List organization by boat

### Map Features
- Interactive map visualization of trip routes
- Marked locations with categories (fishing spots, marinas, anchorages, hazards)
- Distance calculation from current position
- Stop points highlighted on routes

### Sensor Integration
- Arduino-based sensor support via Bluetooth
- Extensible sensor types (fuel level, battery, bilge pump, temperature)
- Configurable logging frequencies
- Data relay to backend API



### Security
- Username/password authentication with bcrypt password hashing
- JWT session tokens for API authentication
- Session tokens stored securely using EncryptedSharedPreferences on Android
- Configurable session token expiration (default: 30 days)
- Password changes invalidate all existing session tokens
- TLS certificate pinning for server identity verification (separate pins for local/remote Cloudflare certificates)
- HTTPS via Cloudflare certificates for both local and remote connections
- Dual connection mode: local network priority with remote fallback
- Local connection timeout (2 seconds) for quick fallback
- Rate limiting on API (in addition to Cloudflare protection)
- Basic input validation (max lengths, required fields, data types)
- Certificate updates require app update (safest approach for personal use)

### Connection Architecture
- Android app supports both local and remote connection URLs
- Both connections use HTTPS with Cloudflare-issued certificates
- Each connection has its own pinned certificate fingerprint
- Local connection attempted first when on same network (faster, less bandwidth)
- Automatic fallback to remote Cloudflare tunnel if local unavailable
- WiFi-only photo uploads with local connection preference

### Data Management
- Offline functionality with automatic sync
- Sync conflict resolution: newest timestamp wins with user notification
- Photo optimization (1920px web versions)
- WiFi-only photo uploads
- 7-day local photo retention after upload before deletion
- Database and photo backups (manual and automatic)
- Time zone handling based on GPS coordinates (device timezone as fallback)
