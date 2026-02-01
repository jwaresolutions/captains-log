package com.captainslog.ui.settings

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.ExitToApp
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.Place

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.captainslog.BuildConfig
import com.captainslog.ui.components.BreadcrumbItem
import com.captainslog.sync.ConflictLogger
import com.captainslog.ui.settings.SyncSettingsScreen
import com.captainslog.viewmodel.TripTrackingViewModel
import kotlinx.coroutines.launch

/**
 * Main settings screen with navigation to various settings sections
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun SettingsScreen(
    modifier: Modifier = Modifier,
    viewModel: TripTrackingViewModel = viewModel(),
    onNotesClick: () -> Unit = {},
    onTodosClick: () -> Unit = {},
    onSignOut: () -> Unit = {},
    onBreadcrumbChanged: (List<BreadcrumbItem>, (() -> Unit)?) -> Unit = { _, _ -> }
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    
    var showSyncSettings by remember { mutableStateOf(false) }
    var showBoatManagement by remember { mutableStateOf(false) }
    var showNauticalSettings by remember { mutableStateOf(false) }
    var isSyncing by remember { mutableStateOf(false) }
    var conflictLogs by remember { mutableStateOf("No conflicts logged") }
    
    val conflictLogger = remember { ConflictLogger(context) }

    // Load conflict logs
    LaunchedEffect(Unit) {
        conflictLogs = conflictLogger.getConflictLogs()
    }

    // Report breadcrumbs based on current sub-screen
    LaunchedEffect(showBoatManagement, showSyncSettings, showNauticalSettings) {
        val crumbs = when {
            showBoatManagement -> listOf(BreadcrumbItem("Manage Boats"))
            showSyncSettings -> listOf(BreadcrumbItem("Sync Settings"))
            showNauticalSettings -> listOf(BreadcrumbItem("Nautical Data"))
            else -> emptyList()
        }
        val backToRoot: (() -> Unit)? = if (showBoatManagement || showSyncSettings || showNauticalSettings) {
            { showBoatManagement = false; showSyncSettings = false; showNauticalSettings = false }
        } else null
        onBreadcrumbChanged(crumbs, backToRoot)
    }

    if (showNauticalSettings) {
        NauticalSettingsScreen(modifier = modifier)
    } else if (showBoatManagement) {
        // Simply use the original BoatListScreen - it works fine, just needs proper space
        com.captainslog.ui.boats.BoatListScreen(
            modifier = modifier
        )
    } else if (showSyncSettings) {
        SyncSettingsScreen(
            conflictLogs = conflictLogs,
            isSyncing = isSyncing,
            onTriggerSync = {
                scope.launch {
                    isSyncing = true
                    // Trigger sync via WorkManager
                    androidx.work.OneTimeWorkRequestBuilder<com.captainslog.sync.TripSyncWorker>()
                        .build()
                        .let { workRequest ->
                            androidx.work.WorkManager.getInstance(context)
                                .enqueue(workRequest)
                        }
                    // Wait a bit for sync to complete
                    kotlinx.coroutines.delay(2000)
                    isSyncing = false
                }
            },
            onClearLogs = {
                conflictLogger.clearLogs()
                conflictLogs = "No conflicts logged"
            }
        )
    } else {
        Column(
            modifier = modifier
                .fillMaxSize()
                .verticalScroll(rememberScrollState())
        ) {
            // Boat Management Section
            SettingsSection(title = "Boats") {
                SettingsItem(
                    icon = Icons.Filled.List,
                    title = "Manage Boats",
                    subtitle = "Add, enable/disable, and set active boat",
                    onClick = { showBoatManagement = true }
                )
            }

            Divider()

            // Nautical Data Section
            SettingsSection(title = "Nautical Data") {
                SettingsItem(
                    icon = Icons.Filled.Place,
                    title = "Nautical Data Providers",
                    subtitle = "Configure chart overlays, tides, AIS, and weather sources",
                    onClick = { showNauticalSettings = true }
                )
            }

            Divider()

            // Sync Settings Section
            SettingsSection(title = "Sync") {
                SettingsItem(
                    icon = Icons.Filled.Refresh,
                    title = "Sync Settings",
                    subtitle = "Manage trip synchronization and view conflict logs",
                    onClick = { showSyncSettings = true }
                )
            }

            Divider()

            // Account Section
            SettingsSection(title = "Account") {
                SettingsItem(
                    icon = Icons.Default.ExitToApp,
                    title = "Sign Out",
                    subtitle = "Sign out of your account",
                    onClick = {
                        scope.launch {
                            // Use LoginViewModel to properly logout
                            val loginViewModel = com.captainslog.ui.auth.LoginViewModel(context.applicationContext as android.app.Application)
                            loginViewModel.logout()

                            // Invoke sign-out callback
                            onSignOut()
                        }
                    }
                )
            }

            Divider()

            // About Section
            SettingsSection(title = "About") {
                SettingsItem(
                    icon = Icons.Default.Info,
                    title = "App Version",
                    subtitle = "Version ${BuildConfig.VERSION_NAME} (${BuildConfig.VERSION_CODE})",
                    onClick = null
                )
            }
        }
    }
}

@Composable
fun SettingsSection(
    title: String,
    content: @Composable ColumnScope.() -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp)
    ) {
        Text(
            text = title,
            style = MaterialTheme.typography.titleSmall,
            color = MaterialTheme.colorScheme.primary,
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
        )
        content()
    }
}

@Composable
fun SettingsItem(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    title: String,
    subtitle: String,
    onClick: (() -> Unit)?
) {
    Surface(
        modifier = Modifier
            .fillMaxWidth()
            .then(
                if (onClick != null) {
                    Modifier.clickable(onClick = onClick)
                } else {
                    Modifier
                }
            )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                imageVector = icon,
                contentDescription = null,
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(24.dp)
            )
            
            Spacer(modifier = Modifier.width(16.dp))
            
            Column(
                modifier = Modifier.weight(1f)
            ) {
                Text(
                    text = title,
                    style = MaterialTheme.typography.bodyLarge
                )
                Text(
                    text = subtitle,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            
            if (onClick != null) {
                Icon(
                    imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight,
                    contentDescription = "Navigate",
                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}




