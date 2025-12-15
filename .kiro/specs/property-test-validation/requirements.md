# Requirements Document

## Introduction

This specification addresses the critical need to validate and fix all property-based tests in the boat tracking system. The system has undergone significant database schema changes (maintenance system restructure from task-based to template-event structure), but several property tests are still referencing the old schema, causing test failures. Additionally, there are type mismatches and one edge case failure in the daily automation tests.

## Glossary

- **Property-Based Test (PBT)**: A testing approach that validates universal properties across randomly generated inputs
- **Template-Event Structure**: The new maintenance system architecture using MaintenanceTemplate and MaintenanceEvent models
- **Task-Based Structure**: The old maintenance system architecture using MaintenanceTask and MaintenanceCompletion models (deprecated)
- **Fast-Check**: The property-based testing library used in the backend
- **Prisma Client**: The database ORM client that provides type-safe database access
- **Schema Migration**: The process of updating database structure and related code

## Requirements

### Requirement 1

**User Story:** As a developer, I want all property-based tests to pass consistently, so that I can trust the correctness properties of the system are validated.

#### Acceptance Criteria

1. WHEN running all backend property tests, THE system SHALL execute all tests without compilation errors
2. WHEN running all backend property tests, THE system SHALL pass all property validations with 100+ iterations each
3. WHEN property tests reference database models, THE system SHALL use the current schema structure (template-event, not task-based)
4. WHEN property tests access model properties, THE system SHALL use properties that exist on the current data types
5. WHEN property tests clean up test data, THE system SHALL reference tables that exist in the current schema

### Requirement 2

**User Story:** As a developer, I want property tests to use the correct data types and model structures, so that tests accurately validate the current system implementation.

#### Acceptance Criteria

1. WHEN maintenance-related property tests run, THE system SHALL use MaintenanceTemplate and MaintenanceEvent models instead of deprecated MaintenanceTask and MaintenanceCompletion
2. WHEN property tests access model properties, THE system SHALL use the correct property names from the current Prisma-generated types
3. WHEN property tests create test data, THE system SHALL create data using the current schema structure
4. WHEN property tests validate relationships, THE system SHALL validate the current template-event relationships
5. WHEN property tests clean database state, THE system SHALL clean the correct tables (maintenanceTemplate, maintenanceEvent)

### Requirement 3

**User Story:** As a developer, I want the daily automation property test edge case to be resolved, so that all property tests pass reliably.

#### Acceptance Criteria

1. WHEN the daily automation property test generates events with 4-month intervals, THE system SHALL handle the edge case where generated events span less than 200 days
2. WHEN property tests validate event generation timeframes, THE system SHALL use realistic expectations for different recurrence intervals
3. WHEN property tests encounter edge cases in date calculations, THE system SHALL handle them gracefully without false failures
4. WHEN property tests validate recurrence patterns, THE system SHALL account for month-length variations in interval calculations
5. WHEN property tests run multiple iterations, THE system SHALL pass consistently across all generated test cases

### Requirement 4

**User Story:** As a developer, I want photo-related property tests to use the correct entity association structure, so that photo attachment validation works correctly.

#### Acceptance Criteria

1. WHEN photo property tests validate entity associations, THE system SHALL use the EntityPhoto junction table structure
2. WHEN photo property tests access photo properties, THE system SHALL use properties that exist on the current Photo model
3. WHEN photo property tests validate photo-trip associations, THE system SHALL use the correct relationship structure through EntityPhoto
4. WHEN photo property tests clean up test data, THE system SHALL clean both Photo and EntityPhoto records
5. WHEN photo property tests validate photo metadata, THE system SHALL use the current Photo model structure

### Requirement 5

**User Story:** As a developer, I want notification property tests to work with the current maintenance system, so that notification generation validation is accurate.

#### Acceptance Criteria

1. WHEN notification property tests create maintenance data, THE system SHALL use MaintenanceTemplate and MaintenanceEvent models
2. WHEN notification property tests validate notification content, THE system SHALL reference the correct template and event properties
3. WHEN notification property tests check entity associations, THE system SHALL use the correct entityType and entityId for maintenance events
4. WHEN notification property tests clean up test data, THE system SHALL clean the correct maintenance tables
5. WHEN notification property tests validate boat-specific behavior, THE system SHALL use the current boat-template-event relationship structure

### Requirement 6

**User Story:** As a developer, I want a comprehensive validation script that verifies all property tests pass, so that I can quickly identify and resolve any remaining issues.

#### Acceptance Criteria

1. WHEN running the validation script, THE system SHALL execute all property tests and report their status
2. WHEN property tests fail, THE system SHALL provide detailed failure analysis and recommended fixes
3. WHEN all property tests pass, THE system SHALL confirm that all correctness properties are validated
4. WHEN the validation script completes, THE system SHALL provide a summary of test coverage across all system components
5. WHEN property tests are fixed, THE system SHALL maintain backward compatibility with existing functionality