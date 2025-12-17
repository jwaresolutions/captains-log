# Database Performance Indexes

## Overview

This document describes the performance indexes added to optimize frequently queried database operations in the Boat Tracking System.

## Added Composite Indexes

### Trip Table
- `Trip_role_endTime_idx` - Optimizes captain's log queries filtering by role='captain' AND endTime IS NOT NULL
- `Trip_startTime_endTime_idx` - Optimizes date range queries filtering by start and end times
- `Trip_boatId_role_startTime_idx` - Optimizes boat-specific captain trips ordered by time
- `Trip_endTime_role_idx` - Optimizes completed trips by role for license calculations

### MaintenanceEvent Table
- `MaintenanceEvent_dueDate_completedAt_idx` - Optimizes upcoming events queries (dueDate <= X AND completedAt IS NULL)
- `MaintenanceEvent_templateId_dueDate_idx` - Optimizes template events ordered by due date
- `MaintenanceEvent_templateId_completedAt_idx` - Optimizes template completion history queries

### MaintenanceTemplate Table
- `MaintenanceTemplate_boatId_isActive_idx` - Optimizes active templates per boat queries
- `MaintenanceTemplate_isActive_createdAt_idx` - Optimizes active templates ordered by creation

### Notification Table
- `Notification_read_createdAt_idx` - Optimizes unread notifications ordered by creation time
- `Notification_type_read_idx` - Optimizes notification type filtering with read status

### SessionToken Table
- `SessionToken_userId_isRevoked_idx` - Optimizes user's active tokens queries
- `SessionToken_expiresAt_isRevoked_idx` - Optimizes token cleanup queries

### TodoItem Table
- `TodoItem_todoListId_completed_idx` - Optimizes list items by completion status
- `TodoItem_completed_completedAt_idx` - Optimizes completed items ordered by completion time

### OfflineChange Table
- `OfflineChange_synced_timestamp_idx` - Optimizes unsynced changes ordered by time
- `OfflineChange_entityType_synced_idx` - Optimizes entity-specific sync status queries
- `OfflineChange_syncAttempts_lastSyncAttempt_idx` - Optimizes failed sync retry queries

## Query Performance Benefits

### Captain's License Calculations
The new `Trip_role_endTime_idx` and `Trip_endTime_role_idx` indexes significantly improve performance for:
- Calculating sea time days (trips where role='captain' and endTime IS NOT NULL)
- License progress queries filtering completed captain trips
- Date range queries for 3-year license requirements

### Maintenance System
The composite indexes on MaintenanceEvent improve:
- Dashboard queries for upcoming maintenance tasks
- Template-specific event listings
- Completion history retrieval

### Real-time Features
The notification and session token indexes optimize:
- Unread notification counts and listings
- Active session validation
- Token cleanup operations

### Sync Operations
The OfflineChange indexes improve:
- Offline data synchronization performance
- Failed sync retry logic
- Entity-specific sync status tracking

## Index Statistics

Total indexes by table:
- Trip: 12 indexes (4 new composite indexes added)
- MaintenanceEvent: 7 indexes (3 new composite indexes added)
- MaintenanceTemplate: 6 indexes (2 new composite indexes added)
- Notification: 7 indexes (2 new composite indexes added)
- SessionToken: 8 indexes (2 new composite indexes added)
- TodoItem: 6 indexes (2 new composite indexes added)
- OfflineChange: 9 indexes (3 new composite indexes added)

## Performance Testing

The indexes have been tested with representative queries and show significant performance improvements for:
- Complex WHERE clauses with multiple conditions
- ORDER BY operations on indexed columns
- JOIN operations using indexed foreign keys
- Date range queries with proper index utilization

## Maintenance

These indexes will be automatically maintained by PostgreSQL. Monitor query performance periodically and consider additional indexes if new query patterns emerge.

## Migration

The indexes were added via Prisma migration `20251216095110_add_performance_indexes` and manually verified in the database.