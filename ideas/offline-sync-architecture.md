# Offline Sync Architecture - Chunked Upload System

## Problem Statement

The current sync system has fundamental limitations:
- Single large JSON payloads fail when trips have many GPS points
- No handling for other offline data types (notes, todos, maintenance, settings)
- Photos mixed with other data instead of WiFi-only uploads
- Poor error recovery and progress tracking
- Not scalable for long offline periods or large datasets

## Proposed Solution: Comprehensive Offline Sync Queue

### Architecture Overview

A multi-tiered sync system that handles all offline data changes through chunked uploads with proper prioritization and network awareness.

### Components

#### 1. Client-Side Sync Queue System

**Queue Structure:**
```kotlin
data class SyncItem(
    val id: String,
    val dataType: DataType, // TRIP, NOTE, TODO, MAINTENANCE, SETTINGS, PHOTO
    val priority: Priority, // HIGH, MEDIUM, LOW
    val networkRequirement: NetworkType, // ANY, WIFI_ONLY
    val data: Any,
    val createdAt: Timestamp,
    val retryCount: Int = 0,
    val maxRetries: Int = 3
)

enum class DataType {
    TRIP, GPS_POINTS, NOTE, TODO, MAINTENANCE_EVENT, 
    SETTINGS, PHOTO, BOAT_CONFIG, SENSOR_DATA
}

enum class Priority {
    HIGH,    // Settings, critical updates - sync immediately
    MEDIUM,  // Trips, notes, todos - sync on any connection
    LOW      // Photos, large files - WiFi only
}
```

**Queue Management:**
- Persistent SQLite storage for queue items
- Automatic retry with exponential backoff
- Queue survives app restarts and crashes
- Separate processing threads by priority and network type

#### 2. Chunked Upload Protocol

**Chunk Upload Endpoint:**
```
POST /api/v1/sync/upload
Content-Type: application/json

{
  "batchId": "uuid-for-this-sync-batch",
  "chunkIndex": 0,
  "totalChunks": 5,
  "dataType": "trips",
  "metadata": {
    "originalSize": 2048576,
    "compression": "gzip",
    "checksum": "sha256-hash"
  },
  "data": "base64-encoded-chunk-data"
}
```

**Batch Status Endpoint:**
```
GET /api/v1/sync/batch/{batchId}/status
Response: {
  "batchId": "uuid",
  "status": "uploading|complete|failed",
  "chunksReceived": [0, 1, 3], // which chunks are received
  "totalChunks": 5,
  "missingChunks": [2, 4]
}
```

#### 3. Server-Side Staging System

**Staging Storage:**
- Temporary storage for incomplete batches
- Redis or filesystem-based chunk storage
- Automatic cleanup of abandoned uploads (24h timeout)
- Chunk validation and reassembly

**Processing Pipeline:**
```
1. Receive chunk → Validate → Store in staging
2. Check if batch complete → Reassemble → Validate full data
3. Process into appropriate tables (Trip, GPSPoint, Note, etc.)
4. Send confirmation to client
5. Cleanup staging data
```

#### 4. Network-Aware Sync Strategy

**Connection Type Detection:**
```kotlin
class NetworkManager {
    fun getCurrentNetworkType(): NetworkType
    fun isWiFiConnected(): Boolean
    fun isMeteredConnection(): Boolean
    fun getConnectionQuality(): ConnectionQuality
}
```

**Sync Priorities by Network:**
- **WiFi**: All queues process (high → medium → low priority)
- **Mobile Data**: Only high and medium priority queues
- **Poor Connection**: Only high priority queue
- **Offline**: Queue items, no processing

#### 5. Progress Tracking and User Feedback

**Sync Status UI:**
- Overall sync progress (items remaining by type)
- Current upload progress (chunk X of Y)
- Network status and sync strategy
- Failed items with retry options
- Estimated time to complete sync

### Implementation Phases

#### Phase 1: Basic Chunked Upload
- Implement chunked upload protocol
- Server-side staging and reassembly
- Basic retry logic
- Handle trips and GPS points only

#### Phase 2: Multi-Data Type Support
- Extend to all data types (notes, todos, maintenance)
- Priority-based queue processing
- Network-aware sync decisions

#### Phase 3: Advanced Features
- Photo-specific handling (WiFi-only, compression)
- Conflict resolution for concurrent edits
- Bandwidth throttling and adaptive chunk sizes
- Background sync optimization

#### Phase 4: Optimization
- Delta sync (only changed data)
- Compression and deduplication
- Predictive pre-sync based on usage patterns
- Advanced error recovery

### Technical Considerations

**Chunk Size Strategy:**
- Start with 1MB chunks for good balance
- Adaptive sizing based on connection quality
- Smaller chunks (256KB) for poor connections
- Larger chunks (5MB) for excellent WiFi

**Error Handling:**
- Individual chunk retry (don't restart entire batch)
- Exponential backoff with jitter
- Circuit breaker for repeated failures
- Graceful degradation (skip non-critical data)

**Security:**
- Chunk integrity verification (checksums)
- Encrypted staging storage
- Authentication for all sync endpoints
- Rate limiting to prevent abuse

**Performance:**
- Parallel chunk uploads (2-3 concurrent)
- Background processing to avoid UI blocking
- Efficient database operations (batch inserts)
- Memory management for large datasets

### Benefits

1. **Scalability**: Handles unlimited offline time and data size
2. **Reliability**: Recovers from partial failures gracefully
3. **Efficiency**: Only uploads what's needed, when appropriate
4. **User Experience**: Clear progress and network-aware behavior
5. **Maintainability**: Clean separation of concerns
6. **Extensibility**: Easy to add new data types

### Future Enhancements

- **Bidirectional Sync**: Handle server-side changes while offline
- **Conflict Resolution**: Merge strategies for concurrent edits
- **Selective Sync**: User chooses what to sync (e.g., skip old trips)
- **Sync Scheduling**: User-defined sync windows
- **Bandwidth Management**: Respect user data limits

## Next Steps

1. Design detailed API specifications
2. Create database schema for staging tables
3. Implement basic chunked upload proof-of-concept
4. Test with large trip datasets
5. Extend to other data types progressively

---

*This document captures the architectural vision for a robust offline-first sync system that can scale with the application's needs while providing excellent user experience across all network conditions.*