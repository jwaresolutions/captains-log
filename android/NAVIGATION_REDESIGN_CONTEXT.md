# Navigation Redesign Context

## Date: December 12, 2025

## Problem Statement
The current Android app has 9 navigation tabs in the bottom navigation bar, making it unusable on folded Z Fold screens where the icons become too small and cramped together.

## User Requirements
- Single layout for all screen sizes (no adaptive breakpoints)
- App name: "Captain's Log"
- Usable on Z Fold 7 both folded and unfolded
- Tablet support as future consideration

## Redesign Decisions

### New Navigation Structure

**Top Bar (Consistent Purple Across All Screens):**
```
[Captain's Log]                    [Notes] [Todos] [Settings⚙️]
```

**Bottom Navigation (User-Configurable):**
- **Default enabled:** Home, Trips, Maintenance, Map (4 tabs total)
- **Default disabled:** Sensors, License
- **Removed from bottom nav:** Boats (moved to Settings), Notes (moved to top), Todos (moved to top), Settings (moved to top)

### Implementation Changes

1. **Create Home Screen**
   - Simple logo page with "Captain's Log" ASCII art or text
   - Purple top bar consistent with other screens
   - This becomes the landing/default screen

2. **Update Navigation Tabs**
   ```kotlin
   enum class NavigationTab {
       Home("Home", Icons.Filled.Home),           // New - logo page
       Trips("Trips", Icons.Filled.DirectionsBoat), // Changed from Home icon
       Maintenance("Maintenance", Icons.Filled.Build),
       Map("Map", Icons.Filled.LocationOn),
       Sensors("Sensors", Icons.Filled.Info),     // Hidden by default
       License("License", Icons.Filled.Star)      // Hidden by default
   }
   ```

3. **Top Bar Components**
   - Consistent purple background across all screens
   - App title "Captain's Log" on left side
   - Three action buttons on right: Notes, Todos, Settings (gear icon)

4. **Settings Screen Updates**
   - Move "Boats" management from bottom nav to settings screen
   - Add "Navigation Tabs" section with enable/disable toggles:
     - ✅ Trips (enabled by default)
     - ✅ Maintenance (enabled by default) 
     - ✅ Map (enabled by default)
     - ❌ Sensors (disabled by default)
     - ❌ License (disabled by default)

5. **Logo Placeholder**
   - ASCII art "Captain's Log" in 2 lines, or simple text placeholder
   - Can be replaced with actual logo design later

### Benefits
- Reduces bottom navigation from 9 tabs to 4 by default
- Solves folded screen usability issue
- Maintains all functionality through top bar and settings
- User-configurable for different usage patterns
- Consistent purple top bar across entire app
- Cleaner, more organized navigation structure

### Default User Experience
1. App launches to Home screen with logo
2. Bottom nav shows: Home, Trips, Maintenance, Map
3. Top bar provides quick access to Notes, Todos, Settings
4. Users can enable Sensors/License tabs in Settings if needed
5. Boat management accessible through Settings

## Files to Modify
- `MainNavigation.kt` - Update navigation structure and tabs
- `SettingsScreen.kt` - Add boat management and tab toggles
- Create new `HomeScreen.kt` - Logo/landing page
- Update all screen composables to use consistent top bar
- Add preferences for tab visibility settings

## Status
- Context documented: ✅
- Implementation: ✅ COMPLETED

## Implementation Summary

### Completed Changes:
1. **Created HomeScreen.kt** - New landing page with "Captain's Log" ASCII art
2. **Created AppTopBar.kt** - Consistent purple top bar with Notes, Todos, Settings buttons
3. **Created NavigationPreferences.kt** - User preferences for tab visibility
4. **Updated MainNavigation.kt** - New navigation structure with overlay screens
5. **Updated SettingsScreen.kt** - Added boat management and navigation tab toggles
6. **Updated all main screens** - Applied consistent AppTopBar across:
   - TripListScreen.kt (added sync button)
   - MaintenanceListScreen.kt (wrapped in Scaffold)
   - MapScreen.kt (wrapped in Scaffold)
   - SensorManagementScreen.kt (wrapped in Scaffold)
   - LicenseProgressScreen.kt (updated TopAppBar)

### Navigation Structure:
- **Bottom Navigation**: Home, Trips, Maintenance, Map (4 tabs by default)
- **Top Bar Actions**: Notes, Todos, Settings (accessible from all screens)
- **Settings Toggles**: Enable/disable Sensors and License tabs
- **Boat Management**: Moved from bottom nav to Settings screen

### Default Configuration:
- **Enabled tabs**: Home, Trips, Maintenance, Map
- **Disabled tabs**: Sensors, License (can be enabled in Settings)
- **Purple top bar**: Consistent across all screens
- **App name**: "Captain's Log" displayed in top bar

### Build Status:
- ✅ Compiles successfully
- ⚠️ Some deprecation warnings (non-critical)
- 🎯 Ready for testing on Z Fold device

## Next Steps:
1. Test on Z Fold 7 (folded and unfolded)
2. Verify navigation flows work correctly
3. Test Settings toggles for Sensors/License tabs
4. Consider updating deprecated icons (AutoMirrored versions)
5. Test boat management integration in Settings