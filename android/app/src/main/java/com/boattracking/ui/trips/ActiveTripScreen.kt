package com.boattracking.ui.trips

import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.boattracking.database.entities.BoatEntity
import com.boattracking.database.entities.TripEntity
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
            verticalArrangement = Arrangement.Center
        ) {
            if (isTracking && currentTrip != null) {
                // Show active trip information
                ActiveTripInfo(trip = currentTrip)
                
                Spacer(modifier = Modifier.height(32.dp))
                
                // Stop button
                Button(
                    onClick = onStopTrip,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(56.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.error
                    )
                ) {
                    Text("■", style = MaterialTheme.typography.headlineMedium)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Stop Trip", style = MaterialTheme.typography.titleMedium)
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
                    onClick = { showStartDialog = true },
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
        StartTripDialog(
            onDismiss = { showStartDialog = false },
            onConfirm = { boatId, waterType, role ->
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
