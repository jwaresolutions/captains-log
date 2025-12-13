# Requirements Document

## Introduction

The Maintenance System Restructure enhances the boat tracking system's maintenance functionality by separating recurring maintenance templates from individual maintenance events. This restructure introduces a template-based scheduling system where recurring maintenance tasks generate individual events up to one year in advance, with improved photo management and user interface organization.

## Glossary

- **System**: The complete Boat Tracking System including web application, Android application, backend API, and database
- **Maintenance Template**: A recurring maintenance task definition that generates individual maintenance events on a schedule
- **Maintenance Event**: An individual maintenance occurrence generated from a template with a specific due date
- **Schedule Tab**: User interface tab showing maintenance templates that define recurring maintenance
- **Upcoming Tab**: User interface tab showing maintenance events that are due but not yet completed
- **Complete Tab**: User interface tab showing maintenance events that have been completed
- **Template Photos**: Reference photos attached to maintenance templates, visible on all events generated from that template
- **Completion Photos**: Before/after photos attached to specific maintenance event completions
- **Recurrence Schedule**: The timing pattern for generating maintenance events (days, weeks, months, years, engine hours)
- **One Year Horizon**: The system maintains maintenance events up to one year in advance
- **Daily Maintenance Task**: Automated backend process that ensures maintenance events exist within the one-year horizon
- **Schedule Change Confirmation**: User interface showing the impact of template changes on future events

## Requirements

### Requirement 1: Maintenance Template Management

**User Story:** As a boat operator, I want to create and manage recurring maintenance templates, so that I can define maintenance schedules that automatically generate individual maintenance events.

#### Acceptance Criteria

1. WHEN a user creates a maintenance template THEN the System SHALL require a boat association, title, description, component, recurrence schedule, and estimated cost and time
2. WHEN a user creates a maintenance template THEN the System SHALL allow attachment of template photos that serve as reference images
3. WHEN a user views the Schedule tab THEN the System SHALL display all maintenance templates with their recurrence information
4. WHEN a user clicks on a maintenance template THEN the System SHALL show template details including title, description, component, recurrence, estimated cost, estimated time, and template photos
5. WHEN a user edits a maintenance template THEN the System SHALL allow modification of all template fields including title, description, component, estimated cost, and estimated time
6. WHEN a user deletes a maintenance template THEN the System SHALL remove the template and all associated future maintenance events

### Requirement 2: Maintenance Event Generation

**User Story:** As a boat operator, I want the system to automatically generate maintenance events from templates, so that I have individual maintenance tasks scheduled up to one year in advance.

#### Acceptance Criteria

1. WHEN a maintenance template is created THEN the System SHALL generate maintenance events based on the recurrence schedule up to one year in advance
2. WHEN the daily maintenance task runs THEN the System SHALL create new maintenance events to maintain the one-year horizon for all active templates
3. WHEN a maintenance event is generated THEN the System SHALL copy the template's title, description, component, estimated cost, and estimated time
4. WHEN a maintenance event is generated THEN the System SHALL calculate the due date based on the template's recurrence schedule
5. WHEN a maintenance event is generated THEN the System SHALL link the event to its originating template
6. WHEN the daily maintenance task runs THEN the System SHALL execute at midnight UTC every day

### Requirement 3: Maintenance Event Management

**User Story:** As a boat operator, I want to view and complete individual maintenance events, so that I can track specific maintenance occurrences and record completion details.

#### Acceptance Criteria

1. WHEN a user views the Upcoming tab THEN the System SHALL display all maintenance events that are due but not completed
2. WHEN a user views the Complete tab THEN the System SHALL display all maintenance events that have been completed
3. WHEN a user clicks on a maintenance event THEN the System SHALL show event details including due date, template information, and completion status
4. WHEN a user views a maintenance event THEN the System SHALL display template photos from the originating template as reference images
5. WHEN a user completes a maintenance event THEN the System SHALL allow recording of completion date, actual cost, completion notes, and completion photos
6. WHEN a user views a completed maintenance event THEN the System SHALL display both template photos and completion photos

### Requirement 4: User Interface Restructure

**User Story:** As a boat operator, I want an organized maintenance interface with separate tabs for templates and events, so that I can easily manage recurring schedules and individual maintenance tasks.

#### Acceptance Criteria

1. WHEN a user accesses the maintenance section THEN the System SHALL display three tabs: Schedule, Upcoming, and Complete
2. WHEN a user removes the All tab THEN the System SHALL no longer display a combined view of templates and events
3. WHEN a user clicks on the Schedule tab THEN the System SHALL show only maintenance templates
4. WHEN a user clicks on the Upcoming tab THEN the System SHALL show only maintenance events that are not completed
5. WHEN a user clicks on the Complete tab THEN the System SHALL show only maintenance events that have been completed
6. WHEN a user views a maintenance event THEN the System SHALL provide a link to view the originating template

### Requirement 5: Template Schedule Modification

**User Story:** As a boat operator, I want to modify maintenance template schedules, so that I can adjust recurring maintenance timing and see the impact on future events.

#### Acceptance Criteria

1. WHEN a user changes a template's recurrence schedule THEN the System SHALL show a confirmation page listing all future events that will be affected
2. WHEN a user confirms schedule changes THEN the System SHALL update all future maintenance events to match the new schedule
3. WHEN schedule changes are applied THEN the System SHALL only affect future events and leave past and completed events unchanged
4. WHEN the user has server connectivity THEN the System SHALL apply schedule changes immediately after confirmation
5. WHEN the user lacks server connectivity THEN the System SHALL apply schedule changes when connectivity is restored and notify the user of the status

### Requirement 6: Template Information Propagation

**User Story:** As a boat operator, I want template changes to propagate to future events, so that updates to maintenance descriptions and details are reflected in upcoming maintenance.

#### Acceptance Criteria

1. WHEN a user changes template information (title, description, component, estimated cost, estimated time) THEN the System SHALL show a confirmation page listing affected future events
2. WHEN a user confirms template information changes THEN the System SHALL update all future maintenance events with the new template information
3. WHEN template information changes are applied THEN the System SHALL only affect future events and leave completed events unchanged
4. WHEN template photos are added or removed THEN the System SHALL make the changes visible on all future and existing events generated from that template
5. WHEN the user has server connectivity THEN the System SHALL apply template changes immediately after confirmation
6. WHEN the user lacks server connectivity THEN the System SHALL apply template changes when connectivity is restored and notify the user of the status

### Requirement 7: Photo Management Enhancement

**User Story:** As a boat operator, I want to attach reference photos to templates and completion photos to events, so that I can maintain visual documentation for maintenance procedures and results.

#### Acceptance Criteria

1. WHEN a user attaches photos to a maintenance template THEN the System SHALL categorize them as template photos
2. WHEN a user views any maintenance event THEN the System SHALL display template photos from the originating template as reference images
3. WHEN a user completes a maintenance event THEN the System SHALL allow attachment of completion photos specific to that event
4. WHEN a user views a completed maintenance event THEN the System SHALL display both template photos and completion photos with clear categorization
5. WHEN a user adds or removes template photos THEN the System SHALL make the changes visible on all events generated from that template
6. WHEN a user adds or removes completion photos THEN the System SHALL only affect the specific maintenance event

### Requirement 8: Navigation and User Experience

**User Story:** As a boat operator, I want intuitive navigation between templates and events, so that I can efficiently manage maintenance schedules and individual tasks.

#### Acceptance Criteria

1. WHEN a user views a maintenance event THEN the System SHALL provide a link to view the originating maintenance template
2. WHEN a user clicks the template link from an event THEN the System SHALL navigate to the template details in the Schedule tab
3. WHEN a user navigates from an event to its template THEN the System SHALL provide a back button to return to the original event
4. WHEN a user edits a template from an event link THEN the System SHALL show the same confirmation process for changes affecting future events
5. WHEN a user completes navigation actions THEN the System SHALL maintain context and return the user to the appropriate tab and view

### Requirement 9: Data Migration and System Cleanup

**User Story:** As a system administrator, I want to clean up existing maintenance data, so that the new template-based system starts with a clean slate.

#### Acceptance Criteria

1. WHEN the new maintenance system is deployed THEN the System SHALL remove all existing maintenance tasks and completion records
2. WHEN existing maintenance data is cleared THEN the System SHALL preserve the database schema structure for the new template and event tables
3. WHEN the system is ready for use THEN the System SHALL allow creation of new maintenance templates using the restructured interface
4. WHEN data cleanup is complete THEN the System SHALL notify administrators that maintenance templates need to be recreated
5. WHEN the migration is complete THEN the System SHALL ensure all maintenance-related functionality works with the new template-event structure

### Requirement 10: Backend Automation

**User Story:** As a system administrator, I want automated maintenance event generation, so that the system maintains a one-year horizon of scheduled maintenance without manual intervention.

#### Acceptance Criteria

1. WHEN the daily maintenance task executes THEN the System SHALL check all active maintenance templates for missing events within the one-year horizon
2. WHEN missing maintenance events are detected THEN the System SHALL generate new events based on the template's recurrence schedule
3. WHEN the daily task completes THEN the System SHALL log the number of events created and any errors encountered
4. WHEN the daily task fails THEN the System SHALL retry on the next scheduled execution and log the failure
5. WHEN maintenance templates are disabled THEN the System SHALL exclude them from daily event generation but preserve existing events

### Requirement 11: Error Handling and Offline Support

**User Story:** As a boat operator, I want the maintenance system to handle connectivity issues gracefully, so that I can continue working offline and sync changes when connectivity returns.

#### Acceptance Criteria

1. WHEN the user is offline and makes template changes THEN the System SHALL queue the changes for synchronization when connectivity returns
2. WHEN connectivity is restored THEN the System SHALL sync queued template changes and notify the user of the sync status
3. WHEN template changes conflict with server state THEN the System SHALL use the newest timestamp to resolve conflicts and notify the user
4. WHEN the daily maintenance task fails due to system issues THEN the System SHALL log the error and retry on the next scheduled execution
5. WHEN users attempt actions requiring server connectivity while offline THEN the System SHALL provide clear feedback about the offline status and queued actions

### Requirement 12: Notification System Integration

**User Story:** As a boat operator, I want to receive notifications for upcoming maintenance events, so that I don't miss important maintenance tasks.

#### Acceptance Criteria

1. WHEN a maintenance event is due within one week THEN the System SHALL send notifications to both the Android Application and Web Application
2. WHEN maintenance notifications are sent THEN the System SHALL include event title, due date, boat name, and link to the event details
3. WHEN a boat is disabled THEN the System SHALL suppress maintenance notifications for that boat's events
4. WHEN maintenance events are completed THEN the System SHALL remove or mark notifications as resolved
5. WHEN template changes affect notification timing THEN the System SHALL update notification schedules accordingly