# Map Touch Interaction Fix

## Issue
The map was triggering the "Add Location" dialog on any touch, which interfered with normal map interactions like:
- Pinch-to-zoom
- Pan/drag to move around
- General map exploration

## Solution
Removed the touch listener that was intercepting all touch events and triggering the location dialog.

### What Was Changed
**File**: `android/app/src/main/java/com/captainslog/ui/map/MapScreen.kt`

**Removed**:
```kotlin
// Handle long press for adding locations
setOnTouchListener { _, event ->
    if (event.action == android.view.MotionEvent.ACTION_DOWN) {
        val projection = projection
        val geoPoint = projection.fromPixels(event.x.toInt(), event.y.toInt()) as GeoPoint
        
        // Check for long press (simplified - you might want to use GestureDetector)
        selectedLocation = geoPoint
        showLocationDialog = true
    }
    false
}
```

**Replaced with**:
```kotlin
// Touch handling is managed by osmdroid for pan/zoom
// Location adding is handled by the + button only
```

## Result
- ✅ **Normal map interactions work**: Pinch-to-zoom, pan, drag all work smoothly
- ✅ **Add location still available**: Users can still add locations using the dedicated + button
- ✅ **Better UX**: No accidental dialogs when exploring the map
- ✅ **osmdroid handles touch**: The library properly manages all map gestures

## User Experience
Users can now:
1. **Explore the map freely** without triggering dialogs
2. **Zoom and pan smoothly** using standard gestures
3. **Add locations intentionally** using the + floating action button
4. **Toggle marine layer** using the marine layer button

This provides a much more intuitive and standard map experience that users expect from mobile mapping applications.