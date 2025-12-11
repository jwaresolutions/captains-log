package com.boattracking.ui

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import com.boattracking.ui.boats.BoatListScreen
import com.boattracking.ui.settings.SettingsScreen
import com.boattracking.ui.trips.TripNavigation

/**
 * Main navigation structure with bottom navigation bar.
 * Provides navigation between Trips, Boats, and Settings sections.
 */
@Composable
fun MainNavigation() {
    var selectedTab by remember { mutableStateOf(NavigationTab.Trips) }

    Scaffold(
        bottomBar = {
            NavigationBar {
                NavigationTab.values().forEach { tab ->
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
            NavigationTab.Trips -> {
                TripNavigation(modifier = Modifier.padding(paddingValues))
            }
            NavigationTab.Boats -> {
                BoatListScreen(modifier = Modifier.padding(paddingValues))
            }
            NavigationTab.Settings -> {
                SettingsScreen(modifier = Modifier.padding(paddingValues))
            }
        }
    }
}

/**
 * Enum representing the main navigation tabs
 */
enum class NavigationTab(val label: String, val icon: ImageVector) {
    Trips("Trips", Icons.Filled.Home),
    Boats("Boats", Icons.Filled.List),
    Settings("Settings", Icons.Filled.Settings)
}
