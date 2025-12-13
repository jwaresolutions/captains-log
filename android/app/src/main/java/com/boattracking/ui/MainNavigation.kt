package com.boattracking.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Build
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.compose.ui.zIndex
import com.boattracking.ui.home.HomeScreen
import com.boattracking.ui.license.LicenseProgressScreen
import com.boattracking.ui.maintenance.MaintenanceNavigation
import com.boattracking.ui.map.MapScreen
import com.boattracking.ui.notes.NotesNavigation
import com.boattracking.ui.sensors.SensorManagementScreen
import com.boattracking.ui.settings.SettingsScreen
import com.boattracking.ui.todos.TodoNavigation
import com.boattracking.ui.trips.TripNavigation
import com.boattracking.util.NavigationPreferences

/**
 * Main navigation structure with bottom navigation bar.
 * Features configurable tabs and consistent top bar across all screens.
 */
@Composable
fun MainNavigation() {
    val context = LocalContext.current
    val navPrefs = remember { NavigationPreferences(context) }
    var isSensorsEnabled by remember { mutableStateOf(navPrefs.isSensorsEnabled) }
    var isLicenseEnabled by remember { mutableStateOf(navPrefs.isLicenseEnabled) }
    var selectedTab by remember { mutableStateOf(NavigationTab.Home) }
    
    // Track current screen (including top bar actions)
    var currentScreen: CurrentScreen by remember { mutableStateOf(CurrentScreen.Tab(NavigationTab.Home)) }

    // Get available tabs based on user preferences
    val availableTabs = remember(isSensorsEnabled, isLicenseEnabled) {
        buildList {
            // Core tabs (always available)
            add(NavigationTab.Home)
            add(NavigationTab.Trips)
            add(NavigationTab.Maintenance)
            add(NavigationTab.Map)
            
            // Optional tabs (user configurable)
            if (isSensorsEnabled) add(NavigationTab.Sensors)
            if (isLicenseEnabled) add(NavigationTab.License)
        }
    }

    // Reset selected tab if it becomes unavailable
    LaunchedEffect(availableTabs) {
        if (selectedTab !in availableTabs) {
            selectedTab = NavigationTab.Home
            currentScreen = CurrentScreen.Tab(NavigationTab.Home)
        }
    }
    
    // Function to refresh navigation preferences
    val refreshNavPrefs = {
        isSensorsEnabled = navPrefs.isSensorsEnabled
        isLicenseEnabled = navPrefs.isLicenseEnabled
    }

    // Main navigation with integrated top bar actions
    Scaffold(
        topBar = {
            com.boattracking.ui.components.AppTopBar(
                title = when (val screen = currentScreen) {
                    is CurrentScreen.Tab -> when (screen.tab) {
                        NavigationTab.Home -> "Captain's Log"
                        NavigationTab.Trips -> "Trips"
                        NavigationTab.Maintenance -> "Maintenance"
                        NavigationTab.Map -> "Map"
                        NavigationTab.Sensors -> "Sensors"
                        NavigationTab.License -> "License Progress"
                    }
                    CurrentScreen.Notes -> "Notes"
                    CurrentScreen.Todos -> "Todos"
                    CurrentScreen.Settings -> "Settings"
                },
                onNotesClick = { currentScreen = CurrentScreen.Notes },
                onTodosClick = { currentScreen = CurrentScreen.Todos },
                onSettingsClick = { currentScreen = CurrentScreen.Settings },
                // Highlight active top bar button
                notesActive = currentScreen == CurrentScreen.Notes,
                todosActive = currentScreen == CurrentScreen.Todos,
                settingsActive = currentScreen == CurrentScreen.Settings
            )
        },
        bottomBar = {
            NavigationBar {
                availableTabs.forEach { tab ->
                    NavigationBarItem(
                        icon = { Icon(tab.icon, contentDescription = tab.label) },
                        label = { Text(tab.label) },
                        selected = currentScreen is CurrentScreen.Tab && (currentScreen as CurrentScreen.Tab).tab == tab,
                        onClick = { 
                            selectedTab = tab
                            currentScreen = CurrentScreen.Tab(tab)
                        }
                    )
                }
            }
        }
    ) { paddingValues ->
        when (val screen = currentScreen) {
            is CurrentScreen.Tab -> {
                when (screen.tab) {
                    NavigationTab.Home -> {
                        HomeScreen(
                            modifier = Modifier.padding(paddingValues),
                            onNotesClick = { currentScreen = CurrentScreen.Notes },
                            onTodosClick = { currentScreen = CurrentScreen.Todos },
                            onSettingsClick = { currentScreen = CurrentScreen.Settings }
                        )
                    }
                    NavigationTab.Trips -> {
                        TripNavigation(modifier = Modifier.padding(paddingValues))
                    }
                    NavigationTab.Maintenance -> {
                        MaintenanceNavigation(modifier = Modifier.padding(paddingValues))
                    }
                    NavigationTab.Map -> {
                        MapScreen(modifier = Modifier.padding(paddingValues))
                    }
                    NavigationTab.Sensors -> {
                        SensorManagementScreen(modifier = Modifier.padding(paddingValues))
                    }
                    NavigationTab.License -> {
                        LicenseProgressScreen(modifier = Modifier.padding(paddingValues))
                    }
                }
            }
            CurrentScreen.Notes -> {
                NotesNavigation(modifier = Modifier.padding(paddingValues))
            }
            CurrentScreen.Todos -> {
                TodoNavigation()
            }
            CurrentScreen.Settings -> {
                SettingsScreen(
                    modifier = Modifier.padding(paddingValues),
                    onNotesClick = { currentScreen = CurrentScreen.Notes },
                    onTodosClick = { currentScreen = CurrentScreen.Todos },
                    onNavigationPrefsChanged = refreshNavPrefs
                )
            }
        }
    }
}

/**
 * Enum representing the main navigation tabs.
 * Core tabs (Home, Trips, Maintenance, Map) are always available.
 * Optional tabs (Sensors, License) can be enabled/disabled by user.
 */
enum class NavigationTab(val label: String, val icon: ImageVector) {
    Home("Home", Icons.Filled.Home),
    Trips("Trips", Icons.Filled.List),
    Maintenance("Maintenance", Icons.Filled.Build),
    Map("Map", Icons.Filled.LocationOn),
    Sensors("Sensors", Icons.Filled.Info),
    License("License", Icons.Filled.Star)
}

/**
 * Sealed class representing all possible screens in the app.
 * Includes both bottom navigation tabs and top bar actions.
 */
sealed class CurrentScreen {
    data class Tab(val tab: NavigationTab) : CurrentScreen()
    object Notes : CurrentScreen()
    object Todos : CurrentScreen()
    object Settings : CurrentScreen()
}
