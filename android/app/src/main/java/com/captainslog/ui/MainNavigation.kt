package com.captainslog.ui

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Build
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.activity.compose.BackHandler
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import com.captainslog.ui.components.BreadcrumbItem
import com.captainslog.ui.home.HomeScreen
import com.captainslog.ui.license.LicenseProgressScreen
import com.captainslog.ui.maintenance.MaintenanceNavigation
import com.captainslog.ui.map.MapScreen
import com.captainslog.ui.notes.NotesNavigation
import com.captainslog.ui.sensors.SensorManagementScreen
import com.captainslog.ui.settings.SettingsScreen
import com.captainslog.ui.todos.TodoNavigation
import com.captainslog.ui.trips.TripNavigation

/**
 * Main navigation structure with bottom navigation bar.
 * All tabs are always visible. Top bar shows breadcrumb trail.
 */
@Composable
fun MainNavigation(onSignOut: () -> Unit = {}) {
    var selectedTab by remember { mutableStateOf(NavigationTab.Home) }

    // Track current screen (including top bar actions)
    var currentScreen: CurrentScreen by remember { mutableStateOf(CurrentScreen.Tab(NavigationTab.Home)) }

    // Nested breadcrumbs reported by child navigations
    var nestedBreadcrumbs by remember { mutableStateOf<List<BreadcrumbItem>>(emptyList()) }
    // Back handler from child navigation (navigate to child's root/list)
    var childBackHandler by remember { mutableStateOf<(() -> Unit)?>(null) }

    // Bottom nav tabs (Home excluded - accessed via "Captain's Log" title)
    val availableTabs = NavigationTab.entries.filter { it != NavigationTab.Home }

    // Build full breadcrumb list: top-level label + nested breadcrumbs
    val topLevelLabel = when (val screen = currentScreen) {
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
    }

    val breadcrumbs = if (nestedBreadcrumbs.isEmpty()) {
        listOf(BreadcrumbItem(label = topLevelLabel))
    } else {
        val topClick = childBackHandler
        listOf(BreadcrumbItem(label = topLevelLabel, onClick = topClick)) + nestedBreadcrumbs
    }

    // Main navigation with integrated top bar actions
    Scaffold(
        topBar = {
            com.captainslog.ui.components.AppTopBar(
                breadcrumbs = breadcrumbs,
                onNotesClick = {
                    nestedBreadcrumbs = emptyList()
                    currentScreen = CurrentScreen.Notes
                },
                onTodosClick = {
                    nestedBreadcrumbs = emptyList()
                    currentScreen = CurrentScreen.Todos
                },
                onSettingsClick = {
                    nestedBreadcrumbs = emptyList()
                    currentScreen = CurrentScreen.Settings
                },
                // Highlight active top bar button
                notesActive = currentScreen == CurrentScreen.Notes,
                todosActive = currentScreen == CurrentScreen.Todos,
                settingsActive = currentScreen == CurrentScreen.Settings,
                onTitleClick = {
                    nestedBreadcrumbs = emptyList()
                    childBackHandler = null
                    selectedTab = NavigationTab.Home
                    currentScreen = CurrentScreen.Tab(NavigationTab.Home)
                }
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
                            nestedBreadcrumbs = emptyList()
                            currentScreen = CurrentScreen.Tab(tab)
                        }
                    )
                }
            }
        }
    ) { paddingValues ->
        // Handle Android back button
        BackHandler(enabled = nestedBreadcrumbs.isNotEmpty() || currentScreen !is CurrentScreen.Tab) {
            if (nestedBreadcrumbs.isNotEmpty() && childBackHandler != null) {
                childBackHandler?.invoke()
            } else {
                nestedBreadcrumbs = emptyList()
                childBackHandler = null
                currentScreen = CurrentScreen.Tab(selectedTab)
            }
        }

        when (val screen = currentScreen) {
            is CurrentScreen.Tab -> {
                when (screen.tab) {
                    NavigationTab.Home -> {
                        HomeScreen(
                            modifier = Modifier.padding(paddingValues),
                            onNotesClick = {
                                nestedBreadcrumbs = emptyList()
                                currentScreen = CurrentScreen.Notes
                            },
                            onTodosClick = {
                                nestedBreadcrumbs = emptyList()
                                currentScreen = CurrentScreen.Todos
                            },
                            onSettingsClick = {
                                nestedBreadcrumbs = emptyList()
                                currentScreen = CurrentScreen.Settings
                            }
                        )
                    }
                    NavigationTab.Trips -> {
                        TripNavigation(
                            modifier = Modifier.padding(paddingValues),
                            onBreadcrumbChanged = { crumbs, backToRoot ->
                                nestedBreadcrumbs = crumbs
                                childBackHandler = backToRoot
                            }
                        )
                    }
                    NavigationTab.Maintenance -> {
                        MaintenanceNavigation(
                            modifier = Modifier.padding(paddingValues),
                            onBreadcrumbChanged = { crumbs, backToRoot ->
                                nestedBreadcrumbs = crumbs
                                childBackHandler = backToRoot
                            }
                        )
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
                NotesNavigation(
                    modifier = Modifier.padding(paddingValues),
                    onBreadcrumbChanged = { crumbs, backToRoot ->
                        nestedBreadcrumbs = crumbs
                        childBackHandler = backToRoot
                    }
                )
            }
            CurrentScreen.Todos -> {
                TodoNavigation(
                    modifier = Modifier.padding(paddingValues),
                    onBreadcrumbChanged = { crumbs, backToRoot ->
                        nestedBreadcrumbs = crumbs
                        childBackHandler = backToRoot
                    }
                )
            }
            CurrentScreen.Settings -> {
                SettingsScreen(
                    modifier = Modifier.padding(paddingValues),
                    onNotesClick = {
                        nestedBreadcrumbs = emptyList()
                        currentScreen = CurrentScreen.Notes
                    },
                    onTodosClick = {
                        nestedBreadcrumbs = emptyList()
                        currentScreen = CurrentScreen.Todos
                    },
                    onSignOut = onSignOut,
                    onBreadcrumbChanged = { crumbs, backToRoot ->
                        nestedBreadcrumbs = crumbs
                        childBackHandler = backToRoot
                    }
                )
            }
        }
    }
}

/**
 * Enum representing the main navigation tabs.
 * All tabs are always visible.
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
