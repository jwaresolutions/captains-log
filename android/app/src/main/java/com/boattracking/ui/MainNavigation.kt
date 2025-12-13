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
    
    // Track overlay screens (Notes, Todos, Settings)
    var showNotes by remember { mutableStateOf(false) }
    var showTodos by remember { mutableStateOf(false) }
    var showSettings by remember { mutableStateOf(false) }

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
        }
    }
    
    // Function to refresh navigation preferences
    val refreshNavPrefs = {
        isSensorsEnabled = navPrefs.isSensorsEnabled
        isLicenseEnabled = navPrefs.isLicenseEnabled
    }

    // Handle overlay screens
    when {
        showSettings -> {
            SettingsScreen(
                onNotesClick = { 
                    showSettings = false
                    showNotes = true 
                },
                onTodosClick = { 
                    showSettings = false
                    showTodos = true 
                },
                onNavigationPrefsChanged = refreshNavPrefs
            )
            // Add back navigation
            Box(modifier = Modifier.fillMaxSize()) {
                IconButton(
                    onClick = { showSettings = false },
                    modifier = Modifier
                        .align(Alignment.TopStart)
                        .padding(16.dp)
                        .zIndex(1f)
                ) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = "Back"
                    )
                }
            }
        }
        showNotes -> {
            NotesNavigation(modifier = Modifier.fillMaxSize())
            // Add back navigation
            Box(modifier = Modifier.fillMaxSize()) {
                IconButton(
                    onClick = { showNotes = false },
                    modifier = Modifier
                        .align(Alignment.TopStart)
                        .padding(16.dp)
                        .zIndex(1f)
                ) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = "Back"
                    )
                }
            }
        }
        showTodos -> {
            TodoNavigation()
            // Add back navigation
            Box(modifier = Modifier.fillMaxSize()) {
                IconButton(
                    onClick = { showTodos = false },
                    modifier = Modifier
                        .align(Alignment.TopStart)
                        .padding(16.dp)
                        .zIndex(1f)
                ) {
                    Icon(
                        imageVector = Icons.Default.ArrowBack,
                        contentDescription = "Back"
                    )
                }
            }
        }
        else -> {
            // Main navigation with bottom tabs
            Scaffold(
                bottomBar = {
                    NavigationBar {
                        availableTabs.forEach { tab ->
                            NavigationBarItem(
                                icon = { Icon(tab.icon, contentDescription = tab.label) },
                                label = { Text(tab.label) },
                                selected = selectedTab == tab,
                                onClick = { selectedTab = tab }
                            )
                        }
                    }
                }
            ) { paddingValues ->
                when (selectedTab) {
                    NavigationTab.Home -> {
                        HomeScreen(
                            modifier = Modifier.padding(paddingValues),
                            onNotesClick = { showNotes = true },
                            onTodosClick = { showTodos = true },
                            onSettingsClick = { showSettings = true }
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
