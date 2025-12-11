package com.boattracking.ui

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.platform.LocalContext
import com.boattracking.ui.boats.BoatListScreen
import com.boattracking.ui.license.LicenseProgressScreen
import com.boattracking.ui.settings.SettingsScreen
import com.boattracking.ui.trips.TripNavigation
import com.boattracking.util.LicenseTrackingPreferences

/**
 * Main navigation structure with bottom navigation bar.
 * Provides navigation between Trips, Boats, and Settings sections.
 */
@Composable
fun MainNavigation() {
    val context = LocalContext.current
    val licensePrefs = remember { LicenseTrackingPreferences(context) }
    var isLicenseTrackingEnabled by remember { mutableStateOf(licensePrefs.isLicenseTrackingEnabled) }
    var selectedTab by remember { mutableStateOf(NavigationTab.Trips) }

    // Get available tabs based on settings
    val availableTabs = remember(isLicenseTrackingEnabled) {
        if (isLicenseTrackingEnabled) {
            NavigationTab.values().toList()
        } else {
            NavigationTab.values().filter { it != NavigationTab.License }
        }
    }

    // Reset selected tab if license tab is disabled and currently selected
    LaunchedEffect(isLicenseTrackingEnabled) {
        if (!isLicenseTrackingEnabled && selectedTab == NavigationTab.License) {
            selectedTab = NavigationTab.Trips
        }
    }

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
            NavigationTab.Trips -> {
                TripNavigation(modifier = Modifier.padding(paddingValues))
            }
            NavigationTab.Boats -> {
                BoatListScreen(modifier = Modifier.padding(paddingValues))
            }
            NavigationTab.License -> {
                LicenseProgressScreen(modifier = Modifier.padding(paddingValues))
            }
            NavigationTab.Settings -> {
                SettingsScreen(
                    modifier = Modifier.padding(paddingValues),
                    onLicenseTrackingChanged = { enabled ->
                        isLicenseTrackingEnabled = enabled
                    }
                )
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
    License("License", Icons.Filled.Star),
    Settings("Settings", Icons.Filled.Settings)
}
