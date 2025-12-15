# Implementation Plan

Convert the maintenance system restructure design into a series of prompts for a code-generation LLM that will implement each step with incremental progress. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step. Focus ONLY on tasks that involve writing, modifying, or testing code.

## Phase 6 Extension: Maintenance System Restructure

- [ ] 6.11 Create new database schema for template-event structure
  - Create MaintenanceTemplate table with boat association, title, description, component, recurrence, estimated cost, estimated time, and isActive fields
  - Create MaintenanceEvent table with template reference, due date, completion fields, actual cost, actual time, and completion notes
  - Drop existing MaintenanceTask and MaintenanceCompletion tables
  - Create database migration script
  - Update Prisma schema with new models and relationships
  - Add indexes for performance (boatId, templateId, dueDate, completedAt, isActive)
  - _Requirements: 1.1, 1.2, 1.6, 2.1, 2.3, 2.4, 2.5, 9.1_

- [ ] 6.12 Implement MaintenanceTemplate service
  - Create TemplateManager service with CRUD operations for maintenance templates
  - Implement template validation (required fields: boat, title, description, component, recurrence, estimated cost, estimated time)
  - Add template photo attachment functionality using existing EntityPhoto junction table
  - Implement template deletion with cascade to future events
  - Add template enable/disable functionality
  - _Requirements: 1.1, 1.2, 1.5, 1.6_

- [ ] 6.13 Write property tests for template management
  - **Property 1: Template creation validation**
  - **Validates: Requirements 1.1**
  - **Property 2: Template photo attachment**
  - **Validates: Requirements 1.2**
  - **Property 5: Template field editing**
  - **Validates: Requirements 1.5**
  - **Property 6: Template cascade deletion**
  - **Validates: Requirements 1.6**

- [ ] 6.14 Implement EventGenerator service
  - Create EventGenerator service for generating maintenance events from templates
  - Implement recurrence calculation algorithms (days, weeks, months, years, engine hours)
  - Add one-year horizon event generation logic
  - Implement bulk event updates for template changes
  - Add due date calculation based on recurrence patterns
  - Ensure proper template-event relationship linking
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ] 6.15 Write property tests for event generation
  - **Property 7: Event generation from template**
  - **Validates: Requirements 2.1**
  - **Property 9: Template data copying to events**
  - **Validates: Requirements 2.3**
  - **Property 10: Due date calculation accuracy**
  - **Validates: Requirements 2.4**
  - **Property 11: Event-template relationship integrity**
  - **Validates: Requirements 2.5**

- [ ] 6.16 Implement MaintenanceEvent service
  - Create EventManager service for maintenance event lifecycle management
  - Implement event filtering for upcoming and completed events
  - Add event completion functionality with cost, notes, and photo recording
  - Implement event detail retrieval with template information
  - Add completion photo attachment using EntityPhoto junction table
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [ ] 6.17 Write property tests for event management
  - **Property 12: Upcoming events filtering**
  - **Validates: Requirements 3.1**
  - **Property 13: Completed events filtering**
  - **Validates: Requirements 3.2**
  - **Property 15: Template photo visibility on events**
  - **Validates: Requirements 3.4**
  - **Property 16: Event completion data recording**
  - **Validates: Requirements 3.5**
  - **Property 17: Completed event photo display**
  - **Validates: Requirements 3.6**

- [ ] 6.18 Implement daily maintenance task automation
  - Create daily scheduled job that runs at midnight UTC
  - Implement logic to check all active templates for missing events within one-year horizon
  - Add event generation for templates missing future events
  - Implement logging for events created and errors encountered
  - Add error handling and retry logic for failed executions
  - Exclude disabled templates from event generation while preserving existing events
  - _Requirements: 2.6, 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 6.19 Write property tests for daily automation
  - **Property 8: Daily task event maintenance**
  - **Validates: Requirements 2.2**
  - **Property 27: Daily task event detection**
  - **Validates: Requirements 10.1, 10.2**
  - **Property 28: Daily task logging and error handling**
  - **Validates: Requirements 10.3, 10.4**
  - **Property 29: Template disable behavior**
  - **Validates: Requirements 10.5**

- [ ] 6.20 Create API endpoints for maintenance templates
  - Implement POST /api/v1/maintenance/templates (create template)
  - Implement GET /api/v1/maintenance/templates (list templates by boat)
  - Implement GET /api/v1/maintenance/templates/:id (get template details)
  - Implement PUT /api/v1/maintenance/templates/:id (update template)
  - Implement DELETE /api/v1/maintenance/templates/:id (delete template with cascade)
  - Implement POST /api/v1/maintenance/templates/:id/photos (attach template photo)
  - Implement DELETE /api/v1/maintenance/templates/:id/photos/:photoId (remove template photo)
  - _Requirements: 1.1, 1.2, 1.4, 1.5, 1.6_

- [ ] 6.21 Create API endpoints for maintenance events
  - Implement GET /api/v1/maintenance/events/upcoming (get upcoming events)
  - Implement GET /api/v1/maintenance/events/completed (get completed events)
  - Implement GET /api/v1/maintenance/events/:id (get event details with template info)
  - Implement POST /api/v1/maintenance/events/:id/complete (complete event with cost, notes, photos)
  - Implement POST /api/v1/maintenance/events/:id/photos (attach completion photo)
  - Implement DELETE /api/v1/maintenance/events/:id/photos/:photoId (remove completion photo)
  - _Requirements: 3.1, 3.2, 3.3, 3.5, 3.6_

- [ ] 6.22 Implement schedule change preview and confirmation
  - Add preview functionality for template schedule changes showing affected future events
  - Implement confirmation workflow for schedule changes
  - Add bulk update logic for future events when schedule changes are confirmed
  - Ensure past and completed events remain unchanged during schedule updates
  - Add online/offline handling for schedule changes with sync when connectivity returns
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 6.23 Write property tests for schedule changes
  - **Property 20: Schedule change preview accuracy**
  - **Validates: Requirements 5.1**
  - **Property 21: Schedule change application**
  - **Validates: Requirements 5.2, 5.3**

- [ ] 6.24 Implement template information propagation
  - Add preview functionality for template information changes showing affected future events
  - Implement confirmation workflow for template changes (title, description, component, costs)
  - Add bulk update logic for future events when template information changes
  - Implement template photo propagation to all related events
  - Ensure completed events retain original data during template updates
  - Add online/offline handling for template changes with sync support
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [ ] 6.25 Write property tests for template propagation
  - **Property 22: Template information propagation**
  - **Validates: Requirements 6.1, 6.2, 6.3**
  - **Property 23: Template photo propagation**
  - **Validates: Requirements 6.4**

- [ ] 6.26 Update photo management for template-event structure
  - Update PhotoManager to handle template photo categorization
  - Implement completion photo isolation to specific events
  - Add photo display logic for events showing both template and completion photos
  - Update photo deletion to handle template vs completion photo removal
  - Ensure template photo changes are visible on all related events
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [ ] 6.27 Write property tests for photo management
  - **Property 24: Photo categorization accuracy**
  - **Validates: Requirements 7.1, 7.3**
  - **Property 25: Completion photo isolation**
  - **Validates: Requirements 7.6**

- [ ] 6.28 Update Android maintenance UI for template-event structure
  - Remove All tab and implement three-tab structure: Schedule, Upcoming, Complete
  - Create Schedule tab showing only maintenance templates with recurrence information
  - Update Upcoming tab to show only incomplete maintenance events
  - Update Complete tab to show only completed maintenance events
  - Add navigation links from events to originating templates with back button support
  - Implement template creation and editing forms with all required fields
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 8.1, 8.2, 8.3, 8.5_

- [ ] 6.29 Write property tests for UI navigation
  - **Property 18: Tab content filtering consistency**
  - **Validates: Requirements 4.3, 4.4, 4.5**
  - **Property 19: Event-template navigation links**
  - **Validates: Requirements 4.6, 8.1**
  - **Property 26: Navigation context preservation**
  - **Validates: Requirements 8.2, 8.3, 8.5**

- [ ] 6.30 Implement offline support for template changes
  - Add offline change queuing for template modifications
  - Implement sync logic for queued template changes when connectivity returns
  - Add conflict resolution using newest timestamp with user notification
  - Provide clear offline status feedback and queued action indicators
  - Handle daily task failures with retry logic and error logging
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [ ] 6.31 Write property tests for offline functionality
  - **Property 30: Offline change queuing and sync**
  - **Validates: Requirements 11.1, 11.2, 11.3**

- [ ] 6.32 Update notification system for maintenance events
  - Update notification generation to work with maintenance events instead of tasks
  - Ensure notifications include event title, due date, boat name, and event link
  - Maintain notification suppression for disabled boats
  - Update notification cleanup when events are completed
  - Handle notification schedule updates when template changes affect timing
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_

- [ ] 6.33 Write property tests for notification system
  - **Property 31: Maintenance notification generation**
  - **Validates: Requirements 12.1, 12.2**
  - **Property 32: Notification management**
  - **Validates: Requirements 12.3, 12.4**

- [ ] 6.34 Implement data migration and cleanup
  - Create migration script to clear existing MaintenanceTask and MaintenanceCompletion data
  - Preserve database schema structure for new template and event tables
  - Add notification to administrators about recreating maintenance templates
  - Ensure all maintenance-related functionality works with new structure
  - Test migration completeness and system functionality
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [ ] 6.35 Run all maintenance restructure property tests
  - **MANDATORY**: Use universal property test runner: `./run-property-tests.sh`
  - Run all 32 property tests with minimum 100 iterations each
  - Ensure all tests pass consecutively in a single run
  - Use JSON configuration for efficient execution of large test suite
  - Verify no regressions in existing functionality
  - Test template-event relationship integrity across all operations

- [ ] 6.36 Manual validation: Maintenance system restructure
  - **User Action**: Verify old maintenance data has been cleared from database
  - **User Action**: Create a new maintenance template with all required fields
    - **Android Studio**: Monitor Logcat for template creation API calls
  - **User Action**: Verify template appears in Schedule tab with recurrence information
  - **User Action**: Attach template photos and verify they appear on generated events
  - **User Action**: Check that maintenance events are generated up to one year in advance
    - **Android Studio**: Use Database Inspector to verify event generation
  - **User Action**: Navigate to Upcoming tab and verify only incomplete events appear
  - **User Action**: Complete a maintenance event with cost, notes, and completion photos
  - **User Action**: Verify completed event appears in Complete tab with both template and completion photos
  - **User Action**: Click event-to-template navigation link and verify back button works
  - **User Action**: Edit template schedule and verify confirmation page shows affected events
  - **User Action**: Confirm schedule change and verify future events are updated
  - **User Action**: Verify past and completed events remain unchanged after schedule change
  - **User Action**: Test template information changes (title, description) and verify propagation
  - **User Action**: Test offline template changes and verify sync when connectivity returns
    - **Android Studio**: Extended Controls → Settings → disable network, make changes, re-enable
  - **User Action**: Verify daily maintenance task creates missing events (simulate time passage)
    - **Android Studio**: Advance system date and trigger WorkManager task manually
  - **User Action**: Test notification generation for events due within one week
  - **User Action**: Verify disabled boat suppresses maintenance notifications
  - **User Action**: Delete a template and verify all future events are removed
    - **Android Studio**: Use Database Inspector to verify cascade deletion