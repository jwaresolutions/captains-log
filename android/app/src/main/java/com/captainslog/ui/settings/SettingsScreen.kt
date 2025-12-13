package com.captainslog.ui.settings

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.ExitToApp
import androidx.compose.material.icons.filled.Lock
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.Build
import androidx.compose.material.icons.filled.List
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import android.util.Log
import com.captainslog.BuildConfig
import com.captainslog.connection.ConnectionManager
import com.captainslog.security.SecurePreferences
import com.captainslog.sync.ConflictLogger
import com.captainslog.util.DebugPreferences
import com.captainslog.ui.settings.SyncSettingsScreen
import com.captainslog.util.LicenseTrackingPreferences
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
    onNavigationPrefsChanged: () -> Unit = {}
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    
    var showSyncSettings by remember { mutableStateOf(false) }
    var showServerSettings by remember { mutableStateOf(false) }
    var showBoatManagement by remember { mutableStateOf(false) }
    var isSyncing by remember { mutableStateOf(false) }
    var conflictLogs by remember { mutableStateOf("No conflicts logged") }
    
    val conflictLogger = remember { ConflictLogger(context) }
    val debugPrefs = remember { DebugPreferences(context) }
    val navPrefs = remember { com.captainslog.util.NavigationPreferences(context) }

    var isDebugMode by remember { mutableStateOf(debugPrefs.isDebugModeEnabled) }
    var isSensorsEnabled by remember { mutableStateOf(navPrefs.isSensorsEnabled) }
    var isLicenseEnabled by remember { mutableStateOf(navPrefs.isLicenseEnabled) }
    var isMapsEnabled by remember { mutableStateOf(navPrefs.isMapsEnabled) }

    
    // Load conflict logs
    LaunchedEffect(Unit) {
        conflictLogs = conflictLogger.getConflictLogs()
    }

    if (showServerSettings) {
        ServerSettingsScreen(
            onBack = { showServerSettings = false }
        )
    } else if (showBoatManagement) {
        com.captainslog.ui.boats.BoatListScreen(
            modifier = Modifier.fillMaxSize()
        )
        // Add back button overlay
        Box(modifier = Modifier.fillMaxSize()) {
            IconButton(
                onClick = { showBoatManagement = false },
                modifier = Modifier
                    .align(Alignment.TopStart)
                    .padding(16.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.ArrowBack,
                    contentDescription = "Back"
                )
            }
        }
    } else if (showSyncSettings) {
        SyncSettingsScreen(
            conflictLogs = conflictLogs,
            isSyncing = isSyncing,
            onBack = { 
                showSyncSettings = false
                // Reload logs when returning
                conflictLogs = conflictLogger.getConflictLogs()
            },
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

            // Navigation Section
            SettingsSection(title = "Navigation Tabs") {
                NavigationTabToggleItem(
                    icon = Icons.Filled.Info,
                    title = "Sensors",
                    subtitle = "Show sensors tab in bottom navigation",
                    isEnabled = isSensorsEnabled,
                    onToggle = { enabled ->
                        isSensorsEnabled = enabled
                        navPrefs.isSensorsEnabled = enabled
                        onNavigationPrefsChanged()
                    }
                )
                
                NavigationTabToggleItem(
                    icon = Icons.Filled.Star,
                    title = "License Progress",
                    subtitle = "Show license tracking tab in bottom navigation",
                    isEnabled = isLicenseEnabled,
                    onToggle = { enabled ->
                        isLicenseEnabled = enabled
                        navPrefs.isLicenseEnabled = enabled
                        onNavigationPrefsChanged()
                    }
                )
                
                // Maps are now always enabled with OpenStreetMap (no API key needed)
                NavigationTabToggleItem(
                    icon = Icons.Filled.LocationOn,
                    title = "Maps",
                    subtitle = "Show maps tab with OpenStreetMap and marine charts",
                    isEnabled = isMapsEnabled,
                    onToggle = { enabled ->
                        isMapsEnabled = enabled
                        navPrefs.isMapsEnabled = enabled
                        onNavigationPrefsChanged()
                    }
                )
            }

            Divider()

            // Connection Settings Section
            SettingsSection(title = "Connection") {
                SettingsItem(
                    icon = Icons.Filled.Lock,
                    title = "Server Configuration",
                    subtitle = "Update server URL and certificate settings",
                    onClick = { showServerSettings = true }
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
                        // Clear session and restart activity
                        val securePrefs = SecurePreferences(context)
                        securePrefs.jwtToken = null
                        securePrefs.username = null
                        
                        // Restart the activity to show login screen
                        (context as? android.app.Activity)?.recreate()
                    }
                )
            }

            Divider()

            // Developer Section
            SettingsSection(title = "Developer") {
                DebugToggleItem(
                    isEnabled = isDebugMode,
                    onToggle = { enabled ->
                        isDebugMode = enabled
                        debugPrefs.isDebugModeEnabled = enabled
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

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ServerSettingsScreen(
    onBack: () -> Unit
) {
    val context = LocalContext.current
    val securePrefs = remember { SecurePreferences(context) }
    val scope = rememberCoroutineScope()
    
    var serverUrl by remember { mutableStateOf(securePrefs.remoteUrl ?: "") }
    var certPin by remember { mutableStateOf(securePrefs.remoteCertPin ?: "") }
    var localUrl by remember { mutableStateOf(securePrefs.localUrl ?: "") }
    var localCertPin by remember { mutableStateOf(securePrefs.localCertPin ?: "") }
    var saveSuccess by remember { mutableStateOf(false) }
    
    val snackbarHostState = remember { SnackbarHostState() }
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Server Settings") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(
                            imageVector = Icons.Default.ArrowBack,
                            contentDescription = "Back"
                        )
                    }
                }
            )
        },
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp)
                .verticalScroll(rememberScrollState()),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "Update your server connection settings. Authentication is handled through username/password login.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            
            // Current server URL display
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(
                    containerColor = MaterialTheme.colorScheme.surfaceVariant
                )
            ) {
                Column(
                    modifier = Modifier.padding(16.dp)
                ) {
                    Text(
                        text = "Current Remote Server",
                        style = MaterialTheme.typography.labelMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Spacer(modifier = Modifier.height(4.dp))
                    Text(
                        text = securePrefs.remoteUrl ?: "Not configured",
                        style = MaterialTheme.typography.bodyLarge
                    )
                    
                    if (securePrefs.localUrl != null) {
                        Spacer(modifier = Modifier.height(8.dp))
                        Text(
                            text = "Current Local Server",
                            style = MaterialTheme.typography.labelMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                        Spacer(modifier = Modifier.height(4.dp))
                        Text(
                            text = securePrefs.localUrl!!,
                            style = MaterialTheme.typography.bodyLarge
                        )
                    }
                }
            }
            
            Divider()
            
            // Remote Server Section
            Text(
                text = "Remote Server (Required)",
                style = MaterialTheme.typography.titleMedium
            )
            
            OutlinedTextField(
                value = serverUrl,
                onValueChange = { serverUrl = it },
                label = { Text("Remote Server URL") },
                placeholder = { Text("https://captainslog.jware.dev") },
                modifier = Modifier.fillMaxWidth(),
                singleLine = true
            )

            if (com.captainslog.BuildConfig.REQUIRE_CERT_PINNING) {
                OutlinedTextField(
                    value = certPin,
                    onValueChange = { certPin = it },
                    label = { Text("Remote Certificate Fingerprint (SHA-256)") },
                    placeholder = { Text("sha256/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = false,
                    maxLines = 3
                )
            }

            Divider()

            // Local Server Section (Optional)
            Text(
                text = "Local Server (Optional)",
                style = MaterialTheme.typography.titleMedium
            )

            Text(
                text = "Configure a local server for faster connections when on the same network. Leave blank to disable.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            OutlinedTextField(
                value = localUrl,
                onValueChange = { localUrl = it },
                label = { Text("Local Server URL") },
                placeholder = { Text("https://local.captainslog.jware.dev:8585") },
                modifier = Modifier.fillMaxWidth(),
                singleLine = true
            )

            if (com.captainslog.BuildConfig.REQUIRE_CERT_PINNING) {
                OutlinedTextField(
                    value = localCertPin,
                    onValueChange = { localCertPin = it },
                    label = { Text("Local Certificate Fingerprint (SHA-256)") },
                    placeholder = { Text("sha256/BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB=") },
                    modifier = Modifier.fillMaxWidth(),
                    singleLine = false,
                    maxLines = 3
                )
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Save button
            Button(
                onClick = {
                    scope.launch {
                        try {
                            if (serverUrl.isNotBlank()) {
                                securePrefs.remoteUrl = serverUrl
                            }
                            if (com.captainslog.BuildConfig.REQUIRE_CERT_PINNING && certPin.isNotBlank()) {
                                securePrefs.remoteCertPin = certPin
                            }
                            
                            // Save local settings (can be empty to disable local connection)
                            securePrefs.localUrl = if (localUrl.isNotBlank()) localUrl else null
                            if (com.captainslog.BuildConfig.REQUIRE_CERT_PINNING) {
                                securePrefs.localCertPin = if (localCertPin.isNotBlank()) localCertPin else null
                            }
                            
                            // Reinitialize connection manager with new settings
                            val connectionManager = ConnectionManager.getInstance(context)
                            connectionManager.initialize()
                            
                            snackbarHostState.showSnackbar(
                                message = "Settings saved successfully",
                                duration = SnackbarDuration.Short
                            )
                            saveSuccess = true
                            
                        } catch (e: Exception) {
                            snackbarHostState.showSnackbar(
                                message = "Failed to save settings: ${e.message}",
                                duration = SnackbarDuration.Long
                            )
                        }
                    }
                },
                enabled = serverUrl.isNotBlank(),
                modifier = Modifier.fillMaxWidth()
            ) {
                Text("Save Settings")
            }
            
            if (saveSuccess) {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(
                        containerColor = MaterialTheme.colorScheme.primaryContainer
                    )
                ) {
                    Text(
                        text = "✓ Settings saved. Connection manager has been updated with new settings.",
                        style = MaterialTheme.typography.bodyMedium,
                        modifier = Modifier.padding(16.dp)
                    )
                }
            }
        }
    }
}

@Composable
fun DebugToggleItem(
    isEnabled: Boolean,
    onToggle: (Boolean) -> Unit
) {
    Surface(
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Icon(
                imageVector = Icons.Default.Build,
                contentDescription = null,
                tint = if (isEnabled) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.size(24.dp)
            )
            
            Spacer(modifier = Modifier.width(16.dp))
            
            Column(
                modifier = Modifier.weight(1f)
            ) {
                Text(
                    text = "Debug Mode",
                    style = MaterialTheme.typography.bodyLarge
                )
                Text(
                    text = if (isEnabled) "Debug menus and buttons are visible" else "Debug menus and buttons are hidden",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            
            Switch(
                checked = isEnabled,
                onCheckedChange = onToggle
            )
        }
    }
}

@Composable
fun NavigationTabToggleItem(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    title: String,
    subtitle: String,
    isEnabled: Boolean,
    onToggle: (Boolean) -> Unit
) {
    Surface(
        modifier = Modifier.fillMaxWidth()
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
                tint = if (isEnabled) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurfaceVariant,
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
            
            Switch(
                checked = isEnabled,
                onCheckedChange = onToggle
            )
        }
    }
}



