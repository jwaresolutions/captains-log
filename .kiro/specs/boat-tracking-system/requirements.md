# Requirements Document

## Introduction

The Boat Tracking System is a comprehensive dual-platform application designed to help boat operators track their vessel usage, maintain captain's logs for licensing purposes, manage maintenance schedules, and record detailed trip information including GPS tracking. The system consists of a Docker-based web application (React with LCARS design system) and an Android mobile application, both connecting to a centralized database through a secure API accessed via Cloudflare tunnel.

## Glossary

- **System**: The complete Boat Tracking System including web application, Android application, backend API, and database
- **Web Application**: The React-based frontend running in Docker, accessible via web browser
- **Android Application**: The mobile app running on Android 8.0+ (API 26+) devices, targeting Android 16 (API 35), built with Kotlin 2.0.21, Android Gradle Plugin 8.7.3, and Gradle 8.9
- **Backend API**: The RESTful API server that handles data operations and communicates with the database
- **Trip**: A recorded journey on the water with start time, end time, GPS tracking, and associated metadata
- **Captain's Log**: The historical record of all trips used to track progress toward captain's license requirements
- **Sea Time Day**: A calendar day with at least 4 hours of cumulative trip time, counted toward captain's license requirements
- **Boat Entity**: A vessel record in the system with name and optional metadata
- **Active Boat**: The currently selected boat for operations and trip recording
- **General Notes**: Notes not associated with any specific boat
- **Boat-Specific Notes**: Notes associated with a particular boat
- **Trip Notes**: Notes attached to a specific trip
- **To-Do List**: A named collection of tasks that can be general or boat-specific
- **Maintenance Task**: A scheduled maintenance item with optional recurrence and due dates
- **Marked Location**: A saved GPS coordinate on the map with associated notes and metadata
- **Stop Point**: A location during a trip where the boat remained stationary for at least 5 minutes
- **Water Type**: Classification of water body (Inland, Coastal/Nearshore, Offshore)
- **User Account**: A username and password combination used to authenticate users accessing the System
- **Session Token**: A temporary authentication token issued after successful login, used to authenticate subsequent API requests
- **Sensor Data**: Information collected from Arduino-based controllers via Bluetooth
- **Sync**: The process of uploading offline data from the Android Application to the Backend API

## Requirements

### Requirement 1: System Architecture and Deployment

**User Story:** As a system administrator, I want a simple deployment process, so that I can quickly set up and run the boat tracking system.

#### Acceptance Criteria

1. WHEN the system is deployed THEN the System SHALL use Docker containers with docker-compose orchestration
2. WHEN a user clones the repository and updates the .env file THEN the System SHALL be fully deployable using a single docker-compose command
3. WHEN the Backend API starts THEN the System SHALL expose services on port 8585
4. WHEN the database is initialized THEN the System SHALL create the database within a Docker container
5. WHEN the Web Application is accessed THEN the System SHALL serve the React frontend with LCARS design system components (Star Trek TNG/Voyager aesthetic)
6. WHEN the system is first deployed THEN the System SHALL prompt the administrator to create an initial user account

### Requirement 2: Secure API Communication and Authentication

**User Story:** As a boat operator, I want secure communication between my phone and server with username/password authentication, so that my data remains protected and only I can access it.

#### Acceptance Criteria

1. WHEN an administrator creates a user account via CLI THEN the System SHALL require a username and password
2. WHEN a user logs in with valid credentials THEN the System SHALL issue a session token for subsequent API requests
3. WHEN the Backend API stores a password THEN the System SHALL hash the password using bcrypt before storage
4. WHEN the Android Application communicates with the Backend API THEN the System SHALL authenticate requests using the session token in the Authorization header
5. WHEN the Android Application connects to the Backend API THEN the System SHALL verify the server's identity using TLS certificate pinning (separate certificates for local and remote connections via Cloudflare)
6. WHEN the Android Application connects to the server (local or remote) THEN the System SHALL use HTTPS with Cloudflare-issued certificates
7. WHEN a session token expires THEN the System SHALL require the user to log in again
8. WHEN the server certificate changes THEN the System SHALL require an Android Application update to update the pinned certificates
9. WHEN the Android Application is configured THEN the System SHALL allow specification of both a local connection URL (optional) and a remote connection URL (required), each with its own pinned certificate
10. WHEN the Android Application makes a request THEN the System SHALL attempt the local connection first and fall back to the remote connection if the local connection fails or times out
11. WHEN the local connection is attempted THEN the System SHALL timeout quickly (within 2 seconds) to avoid delays in falling back to remote connection
12. WHEN the Backend API receives requests THEN the System SHALL enforce rate limiting (in addition to Cloudflare's protection) to prevent API abuse
13. WHEN a user changes their password THEN the System SHALL invalidate all existing session tokens and require re-login
14. WHEN a user attempts to register via the API THEN the System SHALL reject the request (user creation only via CLI or initial setup)
15. WHEN the system is first deployed with no users THEN the System SHALL allow creation of the first user via setup wizard or CLI command

### Requirement 3: Boat Management

**User Story:** As a boat operator, I want to manage multiple boats in the system, so that I can track usage across different vessels.

#### Acceptance Criteria

1. WHEN a user adds a boat THEN the System SHALL require a boat name and allow optional additional fields
2. WHEN a user creates a boat THEN the System SHALL set that boat as the Active Boat by default
3. WHEN a user disables a boat THEN the System SHALL suppress all notifications for that boat while retaining all data
4. WHEN a user enables a boat THEN the System SHALL restore notifications for that boat
5. WHEN a user views the boat list THEN the System SHALL display all boats with their enabled/disabled status
6. WHEN a user selects a boat THEN the System SHALL set it as the Active Boat for subsequent operations

### Requirement 4: Trip Recording and GPS Tracking

**User Story:** As a boat operator, I want to record trips with detailed GPS tracking, so that I can maintain accurate logs of my time on the water.

#### Acceptance Criteria

1. WHEN a user starts a trip on the Android Application THEN the System SHALL begin recording GPS coordinates at a configurable interval with a default of 5 seconds
2. WHEN a trip is active THEN the System SHALL continue GPS tracking regardless of screen state using Android foreground services with a persistent notification
3. WHEN a user ends a trip THEN the System SHALL stop GPS recording and calculate trip statistics including duration, distance, average speed, and heading data
4. WHEN the boat remains stationary for at least 5 minutes within a 45-foot radius THEN the System SHALL mark that location as a Stop Point
5. WHEN a trip is recorded THEN the System SHALL capture start time, end time, GPS route, water type (defaulting to Inland), and the associated Boat Entity
6. WHEN a user specifies a boat for a trip THEN the System SHALL allow selection of any boat in the system with the Active Boat as default
7. WHEN a user specifies their role on a trip THEN the System SHALL record the role (captain, crew, observer) with captain as default
8. WHEN GPS data is collected THEN the System SHALL derive speed and heading from consecutive position samples
9. WHEN a trip is in progress and the Android Application is offline THEN the System SHALL continue logging GPS data locally
10. WHEN the Android Application regains connectivity THEN the System SHALL sync all offline trip data to the Backend API

### Requirement 5: Trip Data Management

**User Story:** As a boat operator, I want to view and edit trip details, so that I can maintain accurate records.

#### Acceptance Criteria

1. WHEN a user views a trip THEN the System SHALL display start time, end time, duration, distance, average speed, water type, boat name, role, and GPS route on a map
2. WHEN a user views a trip route on a map THEN the System SHALL render the path as a line with highlighted start point, end point, and all Stop Points
3. WHEN a user edits a trip THEN the System SHALL allow modification of water type, boat selection, role, and manual data fields at any time after trip completion
4. WHEN a user adds manual data to a trip THEN the System SHALL accept engine hours, fuel consumption, weather conditions, number of passengers, and destination
5. WHEN a user attaches photos to a trip THEN the System SHALL associate the images with that trip
6. WHEN a user adds Trip Notes THEN the System SHALL store the notes linked to that specific trip

### Requirement 6: Captain's License Progress Tracking

**User Story:** As a boat operator pursuing a captain's license, I want to track my progress toward the 6-pack OUPV requirements, so that I know when I'm eligible to apply.

#### Acceptance Criteria

1. WHEN the System calculates Sea Time Days THEN the System SHALL count any calendar day with at least 4 cumulative hours of trip time as one Sea Time Day
2. WHEN a single trip spans multiple calendar days THEN the System SHALL count each calendar day with at least 4 hours of trip time as a separate Sea Time Day
3. WHEN a trip crosses midnight with at least 4 hours before midnight and at least 4 hours after midnight THEN the System SHALL count both calendar days as Sea Time Days
4. WHEN multiple trips occur on the same calendar day THEN the System SHALL count them as a single Sea Time Day toward license progress
5. WHEN the System tracks captain's license progress THEN the System SHALL combine all trips regardless of which Boat Entity was used
6. WHEN the System displays license progress THEN the System SHALL show total Sea Time Days, Sea Time Days within the last three years, and exact hours for each trip
7. WHEN the System generates reports THEN the System SHALL estimate time to meet the 360-day requirement based on current usage rate
8. WHEN the System generates reports THEN the System SHALL estimate time to meet the 90-days-in-three-years requirement based on current usage rate
9. WHEN a user achieves their licensing goal THEN the System SHALL allow disabling the captain's license tracking feature

### Requirement 7: Notes Management

**User Story:** As a boat operator, I want to create and organize notes, so that I can document important information about my boat and trips.

#### Acceptance Criteria

1. WHEN a user creates a note THEN the System SHALL allow the note to be General Notes, Boat-Specific Notes, or Trip Notes
2. WHEN a user creates Boat-Specific Notes THEN the System SHALL associate the note with a specific Boat Entity
3. WHEN a user creates Trip Notes THEN the System SHALL associate the note with a specific Trip
4. WHEN a user creates General Notes THEN the System SHALL store the note independent of any boat or trip
5. WHEN a user views notes THEN the System SHALL allow filtering and searching by categories or tags
6. WHEN a user assigns tags to notes THEN the System SHALL support multiple tags per note for organization

### Requirement 8: To-Do List Management

**User Story:** As a boat operator, I want to create and manage multiple to-do lists, so that I can organize tasks and projects.

#### Acceptance Criteria

1. WHEN a user creates a to-do list THEN the System SHALL require a title and allow the list to be general or boat-specific
2. WHEN a user creates a boat-specific to-do list THEN the System SHALL associate the list with a specific Boat Entity
3. WHEN a user adds items to a to-do list THEN the System SHALL store each item with completion status
4. WHEN a user completes a to-do item THEN the System SHALL mark it as complete with timestamp
5. WHEN a user views to-do lists THEN the System SHALL display all lists with their associated boat (if applicable) and completion status

### Requirement 9: Maintenance Task Management

**User Story:** As a boat operator, I want to schedule and track maintenance tasks, so that I can keep my boat in good condition and receive timely reminders.

#### Acceptance Criteria

1. WHEN a user creates a maintenance task THEN the System SHALL associate it with a specific Boat Entity
2. WHEN a user creates a maintenance task THEN the System SHALL allow specification of due date, recurrence schedule, and linkage to boat systems or components
3. WHEN a user sets a recurrence schedule THEN the System SHALL support custom time intervals as specified by the user
4. WHEN a user completes a maintenance task THEN the System SHALL record the completion with timestamp and automatically schedule the next occurrence if recurring
5. WHEN a user completes a maintenance task THEN the System SHALL allow recording of costs and optional before/after photos
6. WHEN a maintenance task is due within one week THEN the System SHALL send notifications to both the Android Application and Web Application
7. WHEN a boat is disabled THEN the System SHALL suppress all maintenance notifications for that boat
8. WHEN a user views maintenance history THEN the System SHALL display all past completions with dates, costs, and photos

### Requirement 10: Map Visualization and Marked Locations

**User Story:** As a boat operator, I want to visualize my trips on a map and mark important locations, so that I can remember and navigate to significant spots.

#### Acceptance Criteria

1. WHEN a user views historical trips THEN the System SHALL display trip routes on an interactive map
2. WHEN a user marks a location THEN the System SHALL save the GPS coordinates with associated notes, categories, and metadata
3. WHEN a user views marked locations THEN the System SHALL display them on the map with labels
4. WHEN a user is planning or during a trip THEN the System SHALL make Marked Locations visible and selectable on the map
5. WHEN a user views a Marked Location THEN the System SHALL calculate and display the distance from the current position
6. WHEN a user categorizes marked locations THEN the System SHALL support types such as favorite fishing spots, marinas, anchorages, and hazards

### Requirement 11: Photo Management

**User Story:** As a boat operator, I want to attach photos to trips and maintenance records, so that I can document events visually.

#### Acceptance Criteria

1. WHEN a user attaches a photo THEN the System SHALL store the original high-resolution image on the server
2. WHEN a photo is uploaded THEN the System SHALL create a web-optimized version at 1920px width for display in the Web Application
3. WHEN the Android Application uploads photos THEN the System SHALL only sync photos over WiFi connections (not mobile data)
4. WHEN the Android Application uploads photos over WiFi THEN the System SHALL use the local connection if available to avoid unnecessary internet traffic
5. WHEN photos are successfully uploaded to the server THEN the Android Application SHALL retain local copies for 7 days before deletion to allow for backup verification
6. WHEN a user views photos in the Web Application THEN the System SHALL serve the web-optimized versions
7. WHEN photos are stored THEN the System SHALL index them in the database with references to associated trips or maintenance tasks

### Requirement 12: Database Backup

**User Story:** As a system administrator, I want to backup the database, so that I can protect my data from loss.

#### Acceptance Criteria

1. WHEN a user initiates a manual backup THEN the System SHALL create a complete database backup file for local download
2. WHEN automatic backup is configured THEN the System SHALL create scheduled database backups at specified intervals
3. WHEN a backup is created THEN the System SHALL include all database records and photo files
4. WHEN a backup file is generated THEN the System SHALL make it available for download through the Web Application

### Requirement 13: Arduino and Sensor Integration

**User Story:** As a boat operator, I want to integrate Arduino-based sensors, so that I can automatically collect additional data from my boat.

#### Acceptance Criteria

1. WHEN an Arduino controller is paired THEN the System SHALL communicate with it via Bluetooth from the Android Application
2. WHEN sensor data is received THEN the System SHALL relay it from the Android Application to the Backend API
3. WHEN sensor data is collected THEN the System SHALL support data types including fuel level, battery voltage, bilge pump status, temperature, and other custom sensors
4. WHEN sensor data is logged THEN the System SHALL use appropriate logging frequency based on the data type (continuous or snapshot)
5. WHEN the System is extended with new sensors THEN the System SHALL support installation of addon features without requiring core system modifications

### Requirement 14: Web Application Dashboard

**User Story:** As a boat operator, I want a comprehensive dashboard, so that I can quickly see the status of my boats and activities.

#### Acceptance Criteria

1. WHEN a user opens the Web Application THEN the System SHALL display a summary dashboard as the default view
2. WHEN the summary dashboard is displayed THEN the System SHALL show recent trips, captain's license progress, upcoming maintenance tasks, and active to-do items
3. WHEN a user navigates the Web Application THEN the System SHALL provide easy access to all features including trips, notes, to-do lists, maintenance, and maps
4. WHEN a user views the calendar THEN the System SHALL display trips and maintenance tasks in a calendar format
5. WHEN a user interacts with the dashboard THEN the System SHALL allow quick actions such as starting a trip or adding a note

### Requirement 15: Offline Functionality and Data Synchronization

**User Story:** As a boat operator, I want the Android app to work offline, so that I can continue logging trips even without internet connectivity.

#### Acceptance Criteria

1. WHEN the Android Application is offline THEN the System SHALL continue logging GPS data for active trips
2. WHEN the Android Application is offline THEN the System SHALL store all trip data locally until connectivity is restored
3. WHEN the Android Application regains connectivity THEN the System SHALL automatically sync all offline data to the Backend API
4. WHEN data conflicts occur during sync THEN the System SHALL resolve conflicts by using the data with the newest timestamp, and SHALL notify the user when conflicts are resolved
5. WHEN sync is in progress THEN the System SHALL provide visual feedback to the user on sync status
6. WHEN a sync conflict is detected THEN the System SHALL log the conflict details for user review if needed

### Requirement 16: Time Zone Handling

**User Story:** As a boat operator, I want automatic time zone handling, so that my trip times are recorded accurately regardless of location.

#### Acceptance Criteria

1. WHEN GPS data is recorded THEN the System SHALL determine the time zone based on GPS coordinates
2. WHEN no GPS data is available THEN the System SHALL default to the device's current time zone
3. WHEN trip times are displayed THEN the System SHALL show times in the appropriate time zone for that location
4. WHEN trip data is stored THEN the System SHALL preserve time zone information for accurate historical records

### Requirement 17: Initial Setup and Configuration

**User Story:** As a new user, I want a guided setup process, so that I can configure the system quickly and correctly.

#### Acceptance Criteria

1. WHEN the Web Application is accessed for the first time with no users in the system THEN the System SHALL present a setup wizard
2. WHEN the setup wizard runs THEN the System SHALL guide the user through creating the first user account, configuring boat name, default settings, and preferences
3. WHEN the setup wizard completes THEN the System SHALL save all configuration and proceed to the main dashboard
4. WHEN the system is in development THEN the System SHALL provide a CLI command to reset the database to defaults and optionally create a test user
5. WHEN the Android Application is installed THEN the System SHALL prompt for username, password, remote server URL (required), and local server URL (optional) configuration
6. WHEN the Android Application setup is complete THEN the System SHALL test both connection URLs and display connection status
7. WHEN an administrator needs to create additional users THEN the System SHALL provide a CLI command accessible via docker-compose

### Requirement 18: Notification System

**User Story:** As a boat operator, I want to receive timely notifications, so that I don't miss important maintenance tasks.

#### Acceptance Criteria

1. WHEN a maintenance task is due within one week THEN the System SHALL send a notification to the Android Application
2. WHEN a maintenance task is due within one week THEN the System SHALL display a notification in the Web Application
3. WHEN a boat is disabled THEN the System SHALL suppress all notifications for that boat's maintenance tasks
4. WHEN notifications are sent THEN the System SHALL include task name, due date, and associated boat name

### Requirement 19: Extensibility and Maintainability

**User Story:** As a developer, I want the system to be extensible and maintainable, so that new features can be added easily over time.

#### Acceptance Criteria

1. WHEN the system architecture is designed THEN the System SHALL use modular components with clear separation of concerns
2. WHEN new features are added THEN the System SHALL support extension without requiring modifications to core functionality
3. WHEN the codebase is maintained THEN the System SHALL follow consistent coding standards and include documentation
4. WHEN the API is versioned THEN the System SHALL support backward compatibility for Android Application updates
5. WHEN the database schema changes THEN the System SHALL support migrations without data loss
6. WHEN user input is received THEN the System SHALL perform basic input validation (max lengths, required fields, data type validation)

### Requirement 20: Phased Development and Verification

**User Story:** As a product owner, I want the system built in phases, so that I can verify functionality incrementally before proceeding.

#### Acceptance Criteria

1. WHEN development progresses THEN the System SHALL be built in discrete phases as defined in the implementation plan
2. WHEN a phase is completed THEN the System SHALL be in a functional state allowing verification before proceeding
3. WHEN phase verification occurs THEN the System SHALL demonstrate all features implemented in that phase
4. WHEN a phase is approved THEN the System SHALL proceed to the next phase of development
5. WHEN all phases are complete THEN the System SHALL deliver all requirements specified in this document

### Requirement 21: Development and Testing Tools

**User Story:** As a developer, I want convenient tools for development and testing, so that I can efficiently develop and debug the system.

#### Acceptance Criteria

1. WHEN a developer needs to reset the database THEN the System SHALL provide a CLI command to drop all tables and recreate the schema
2. WHEN a developer resets the database THEN the System SHALL optionally create a default test user with specified credentials
3. WHEN a developer needs to seed test data THEN the System SHALL provide a CLI command to populate the database with sample boats, trips, and other entities
4. WHEN a developer needs to create a user THEN the System SHALL provide a CLI command accessible via docker-compose exec
5. WHEN a developer needs to list all users THEN the System SHALL provide a CLI command to display all usernames
6. WHEN a developer needs to change a user's password THEN the System SHALL provide a CLI command to update the password and invalidate existing tokens
