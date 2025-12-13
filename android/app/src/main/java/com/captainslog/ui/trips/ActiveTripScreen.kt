package com.captainslog.ui.trips

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.captainslog.database.entities.BoatEntity
import com.captainslog.database.entities.TripEntity
import java.text.SimpleDateFormat
import java.util.*

/**
 * Screen for managing active trip recording.
 * Shows start/stop buttons and current trip information.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ActiveTripScreen(
    isTracking: Boolean,
    currentTrip: TripEntity?,
    onStartTrip: (String, String, String) -> Unit,
    onStopTrip: () -> Unit,
    boats: List<BoatEntity> = emptyList(),
    activeBoat: BoatEntity? = null,
    errorMessage: String? = null,
    onErrorDismissed: () -> Unit = {},
    onForceCleanup: () -> Unit = {},
    onRefreshState: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    var showStartDialog by remember { mutableStateOf(false) }
    
    // Show error snackbar if there's an error message
    val snackbarHostState = remember { SnackbarHostState() }
    
    LaunchedEffect(errorMessage) {
        errorMessage?.let {
            snackbarHostState.showSnackbar(
                message = it,
                duration = SnackbarDuration.Long
            )
            onErrorDismissed()
        }
    }
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Active Trip") },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer
                )
            )
        },
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Top
        ) {
            // Debug info (ALWAYS visible) - BRIGHT YELLOW BACKGROUND
            Card(
                modifier = Modifier.fillMaxWidth(),
                colors = CardDefaults.cardColors(containerColor = androidx.compose.ui.graphics.Color.Yellow)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text("Debug Info:", style = MaterialTheme.typography.titleSmall)
                    Text("isTracking: $isTracking", style = MaterialTheme.typography.bodySmall)
                    Text("currentTrip: ${if (currentTrip != null) "Not null (${currentTrip.id})" else "null"}", style = MaterialTheme.typography.bodySmall)
                    Text("Show stop button: ${isTracking && currentTrip != null}", style = MaterialTheme.typography.bodySmall)
                    Text("Available boats: ${boats.size}", style = MaterialTheme.typography.bodySmall)
                    Text("Active boat: ${activeBoat?.name ?: "none"}", style = MaterialTheme.typography.bodySmall)
                    Text("Error: ${errorMessage ?: "none"}", style = MaterialTheme.typography.bodySmall)
                    
                    // More detailed debug info
                    Text("isTracking type: ${isTracking::class.simpleName}", style = MaterialTheme.typography.bodySmall)
                    Text("currentTrip type: ${currentTrip?.let { it::class.simpleName } ?: "null"}", style = MaterialTheme.typography.bodySmall)
                    if (currentTrip != null) {
                        Text("Trip ID: ${currentTrip.id}", style = MaterialTheme.typography.bodySmall)
                        Text("Trip start: ${currentTrip.startTime}", style = MaterialTheme.typography.bodySmall)
                        Text("Trip end: ${currentTrip.endTime ?: "null"}", style = MaterialTheme.typography.bodySmall)
                    }
                    
                    Spacer(modifier = Modifier.height(8.dp))
                    
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(4.dp)
                    ) {
                        Button(
                            onClick = {
                                android.util.Log.d("ActiveTripScreen", "Force cleanup button clicked")
                                onForceCleanup()
                            },
                            modifier = Modifier.weight(1f),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.secondary
                            )
                        ) {
                            Text("Cleanup", style = MaterialTheme.typography.bodySmall)
                        }
                        
                        Button(
                            onClick = {
                                android.util.Log.d("ActiveTripScreen", "Manual refresh button clicked")
                                onRefreshState()
                            },
                            modifier = Modifier.weight(1f),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.tertiary
                            )
                        ) {
                            Text("Refresh", style = MaterialTheme.typography.bodySmall)
                        }
                        
                        Button(
                            onClick = {
                                android.util.Log.d("ActiveTripScreen", "Force stop button clicked")
                                onStopTrip()
                            },
                            modifier = Modifier.weight(1f),
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.error
                            )
                        ) {
                            Text("STOP", style = MaterialTheme.typography.bodySmall)
                        }
                    }
                }
            }
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // MAIN CONTENT AREA
            if (isTracking && currentTrip != null) {
                // Show active trip information WITH STOP BUTTON
                ActiveTripInfo(
                    trip = currentTrip,
                    onStopTrip = onStopTrip
                )
                
                Spacer(modifier = Modifier.height(16.dp))
                
                // ALSO SHOW DEBUG CARD WHEN TRIP IS ACTIVE
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = androidx.compose.ui.graphics.Color.Red.copy(alpha = 0.3f))
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text("EMERGENCY CONTROLS:", style = MaterialTheme.typography.titleSmall)
                        
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(4.dp)
                        ) {
                            Button(
                                onClick = {
                                    android.util.Log.d("ActiveTripScreen", "Emergency stop button clicked")
                                    onStopTrip()
                                },
                                modifier = Modifier.weight(1f),
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = MaterialTheme.colorScheme.error
                                )
                            ) {
                                Text("EMERGENCY STOP", style = MaterialTheme.typography.bodySmall)
                            }
                            
                            Button(
                                onClick = {
                                    android.util.Log.d("ActiveTripScreen", "Manual refresh button clicked")
                                    onRefreshState()
                                },
                                modifier = Modifier.weight(1f),
                                colors = ButtonDefaults.buttonColors(
                                    containerColor = MaterialTheme.colorScheme.tertiary
                                )
                            ) {
                                Text("Refresh", style = MaterialTheme.typography.bodySmall)
                            }
                        }
                    }
                }
            } else {
                // Show start trip button
                Icon(
                    imageVector = Icons.Default.PlayArrow,
                    contentDescription = null,
                    modifier = Modifier.size(120.dp),
                    tint = MaterialTheme.colorScheme.primary
                )
                
                Spacer(modifier = Modifier.height(24.dp))
                
                Text(
                    text = "Ready to start tracking",
                    style = MaterialTheme.typography.headlineSmall,
                    fontWeight = FontWeight.Bold
                )
                
                Spacer(modifier = Modifier.height(8.dp))
                
                Text(
                    text = "Press the button below to begin recording your trip",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                
                Spacer(modifier = Modifier.height(32.dp))
                
                Button(
                    onClick = { 
                        android.util.Log.d("ActiveTripScreen", "Start Trip button clicked")
                        showStartDialog = true 
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(56.dp)
                ) {
                    Icon(Icons.Default.PlayArrow, contentDescription = null)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Start Trip", style = MaterialTheme.typography.titleMedium)
                }
            }
        }
    }
    
    if (showStartDialog) {
        android.util.Log.d("ActiveTripScreen", "Showing StartTripDialog")
        StartTripDialog(
            onDismiss = { 
                android.util.Log.d("ActiveTripScreen", "Dialog dismissed")
                showStartDialog = false 
            },
            onConfirm = { boatId, waterType, role ->
                android.util.Log.d("ActiveTripScreen", "Dialog confirmed: boatId=$boatId")
                onStartTrip(boatId, waterType, role)
                showStartDialog = false
            },
            boats = boats,
            activeBoat = activeBoat
        )
    }
}

@Composable
fun ActiveTripInfo(
    trip: TripEntity,
    onStopTrip: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(24.dp)
        ) {
            Text(
                text = "Trip in Progress",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.primary
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            Divider()
            
            Spacer(modifier = Modifier.height(16.dp))
            
            InfoRow(label = "Started", value = formatDateTime(trip.startTime))
            Spacer(modifier = Modifier.height(12.dp))
            
            InfoRow(label = "Water Type", value = trip.waterType.capitalize(Locale.getDefault()))
            Spacer(modifier = Modifier.height(12.dp))
            
            InfoRow(label = "Role", value = trip.role.capitalize(Locale.getDefault()))
            Spacer(modifier = Modifier.height(12.dp))
            
            InfoRow(label = "Boat ID", value = trip.boatId)
            
            Spacer(modifier = Modifier.height(16.dp))
            
            Divider()
            
            Spacer(modifier = Modifier.height(16.dp))
            
            // Duration counter
            val currentTime by remember { mutableStateOf(System.currentTimeMillis()) }
            val durationMinutes = (currentTime - trip.startTime.time) / (1000 * 60)
            
            Text(
                text = "Duration: ${formatDuration(durationMinutes)}",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Medium
            )
            
            Spacer(modifier = Modifier.height(24.dp))
            
            // STOP TRIP BUTTON - ALWAYS VISIBLE IN TRIP DETAILS
            Button(
                onClick = {
                    android.util.Log.d("ActiveTripInfo", "STOP TRIP button clicked")
                    onStopTrip()
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(56.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.error
                )
            ) {
                Text("■", style = MaterialTheme.typography.headlineMedium)
                Spacer(modifier = Modifier.width(8.dp))
                Text("STOP TRIP", style = MaterialTheme.typography.titleMedium)
            }
        }
    }
}

@Composable
fun InfoRow(
    label: String,
    value: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyLarge,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyLarge,
            fontWeight = FontWeight.Medium
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StartTripDialog(
    onDismiss: () -> Unit,
    onConfirm: (String, String, String) -> Unit,
    boats: List<BoatEntity> = emptyList(),
    activeBoat: BoatEntity? = null
) {
    // Initialize with active boat if available, otherwise first boat, otherwise empty
    var selectedBoat by remember { 
        mutableStateOf(
            activeBoat ?: boats.firstOrNull()
        ) 
    }
    var waterType by remember { mutableStateOf("inland") }
    var role by remember { mutableStateOf("captain") }
    var expandedBoat by remember { mutableStateOf(false) }
    var expandedWaterType by remember { mutableStateOf(false) }
    var expandedRole by remember { mutableStateOf(false) }
    
    val waterTypes = listOf("inland", "coastal", "offshore")
    val roles = listOf("captain", "crew", "observer")
    
    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text("Start New Trip") },
        text = {
            Column(
                modifier = Modifier.fillMaxWidth(),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                // Show message if no boats exist
                if (boats.isEmpty()) {
                    Text(
                        text = "No boats available. Please create a boat first.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.error
                    )
                } else {
                    // Boat dropdown
                    ExposedDropdownMenuBox(
                        expanded = expandedBoat,
                        onExpandedChange = { expandedBoat = it }
                    ) {
                        OutlinedTextField(
                            value = selectedBoat?.name ?: "Select a boat",
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Boat") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expandedBoat) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor(),
                            isError = selectedBoat == null
                        )
                        ExposedDropdownMenu(
                            expanded = expandedBoat,
                            onDismissRequest = { expandedBoat = false }
                        ) {
                            boats.forEach { boat ->
                                DropdownMenuItem(
                                    text = { 
                                        Row(
                                            modifier = Modifier.fillMaxWidth(),
                                            horizontalArrangement = Arrangement.SpaceBetween
                                        ) {
                                            Text(boat.name)
                                            if (boat.isActive) {
                                                Text(
                                                    text = "Active",
                                                    style = MaterialTheme.typography.bodySmall,
                                                    color = MaterialTheme.colorScheme.primary
                                                )
                                            }
                                        }
                                    },
                                    onClick = {
                                        selectedBoat = boat
                                        expandedBoat = false
                                    }
                                )
                            }
                        }
                    }
                    
                    // Water Type dropdown
                    ExposedDropdownMenuBox(
                        expanded = expandedWaterType,
                        onExpandedChange = { expandedWaterType = it }
                    ) {
                        OutlinedTextField(
                            value = waterType.capitalize(Locale.getDefault()),
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Water Type") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expandedWaterType) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                        )
                        ExposedDropdownMenu(
                            expanded = expandedWaterType,
                            onDismissRequest = { expandedWaterType = false }
                        ) {
                            waterTypes.forEach { type ->
                                DropdownMenuItem(
                                    text = { Text(type.capitalize(Locale.getDefault())) },
                                    onClick = {
                                        waterType = type
                                        expandedWaterType = false
                                    }
                                )
                            }
                        }
                    }
                    
                    // Role dropdown
                    ExposedDropdownMenuBox(
                        expanded = expandedRole,
                        onExpandedChange = { expandedRole = it }
                    ) {
                        OutlinedTextField(
                            value = role.capitalize(Locale.getDefault()),
                            onValueChange = {},
                            readOnly = true,
                            label = { Text("Role") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expandedRole) },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                        )
                        ExposedDropdownMenu(
                            expanded = expandedRole,
                            onDismissRequest = { expandedRole = false }
                        ) {
                            roles.forEach { r ->
                                DropdownMenuItem(
                                    text = { Text(r.capitalize(Locale.getDefault())) },
                                    onClick = {
                                        role = r
                                        expandedRole = false
                                    }
                                )
                            }
                        }
                    }
                }
            }
        },
        confirmButton = {
            Button(
                onClick = { 
                    selectedBoat?.let { boat ->
                        android.util.Log.d("StartTripDialog", "Starting trip for boat: ${boat.name} (${boat.id})")
                        onConfirm(boat.id, waterType, role)
                    }
                },
                enabled = selectedBoat != null && boats.isNotEmpty()
            ) {
                Text("Start")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    )
}

private fun formatDateTime(date: Date): String {
    val formatter = SimpleDateFormat("MMM dd, yyyy HH:mm", Locale.getDefault())
    return formatter.format(date)
}

private fun formatDuration(minutes: Long): String {
    val hours = minutes / 60
    val mins = minutes % 60
    return when {
        hours > 0 -> "${hours}h ${mins}m"
        else -> "${mins}m"
    }
}
