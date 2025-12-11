package com.boattracking.ui.trips

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.boattracking.database.entities.TripEntity
import java.text.SimpleDateFormat
import java.util.*

/**
 * Screen displaying a list of all trips.
 * Shows trip summary information and allows navigation to trip details.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TripListScreen(
    trips: List<TripEntity>,
    onTripClick: (String) -> Unit,
    onStartNewTrip: () -> Unit,
    onSyncTrips: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    // Check if there's an active trip (trip with no end time)
    val hasActiveTrip = trips.any { it.endTime == null }
    
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Trips") },
                actions = {
                    IconButton(onClick = onSyncTrips) {
                        Icon(
                            imageVector = Icons.Default.Refresh,
                            contentDescription = "Sync Trips"
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer
                )
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = onStartNewTrip,
                containerColor = if (hasActiveTrip) 
                    MaterialTheme.colorScheme.tertiary 
                else 
                    MaterialTheme.colorScheme.primary
            ) {
                Icon(
                    imageVector = if (hasActiveTrip) Icons.Default.Refresh else Icons.Default.Add,
                    contentDescription = if (hasActiveTrip) "View Active Trip" else "Start New Trip"
                )
            }
        }
    ) { paddingValues ->
        if (trips.isEmpty()) {
            EmptyTripList(
                onStartNewTrip = onStartNewTrip,
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
            )
        } else {
            LazyColumn(
                modifier = modifier
                    .fillMaxSize()
                    .padding(paddingValues),
                contentPadding = PaddingValues(16.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                items(trips, key = { it.id }) { trip ->
                    TripListItem(
                        trip = trip,
                        onClick = { onTripClick(trip.id) }
                    )
                }
            }
        }
    }
}

@Composable
fun TripListItem(
    trip: TripEntity,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onClick),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            // Trip date and status
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = formatTripDate(trip.startTime),
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold
                )
                
                if (trip.endTime == null) {
                    Badge(
                        containerColor = MaterialTheme.colorScheme.tertiary
                    ) {
                        Text("In Progress")
                    }
                } else if (!trip.synced) {
                    Badge(
                        containerColor = MaterialTheme.colorScheme.secondary
                    ) {
                        Text("Not Synced")
                    }
                }
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            // Trip details
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    TripDetailRow(
                        label = "Start:",
                        value = formatTime(trip.startTime)
                    )
                    trip.endTime?.let {
                        TripDetailRow(
                            label = "End:",
                            value = formatTime(it)
                        )
                    }
                }
                
                Column(horizontalAlignment = Alignment.End) {
                    TripDetailRow(
                        label = "Water:",
                        value = trip.waterType.capitalize(Locale.getDefault())
                    )
                    TripDetailRow(
                        label = "Role:",
                        value = trip.role.capitalize(Locale.getDefault())
                    )
                }
            }
            
            // Duration if trip is complete
            trip.endTime?.let { endTime ->
                Spacer(modifier = Modifier.height(8.dp))
                val durationMinutes = (endTime.time - trip.startTime.time) / (1000 * 60)
                Text(
                    text = "Duration: ${formatDuration(durationMinutes)}",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
fun TripDetailRow(
    label: String,
    value: String,
    modifier: Modifier = Modifier
) {
    Row(modifier = modifier) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Spacer(modifier = Modifier.width(4.dp))
        Text(
            text = value,
            style = MaterialTheme.typography.bodySmall,
            fontWeight = FontWeight.Medium
        )
    }
}

@Composable
fun EmptyTripList(
    onStartNewTrip: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier,
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(
            text = "No trips yet",
            style = MaterialTheme.typography.headlineSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "Start your first trip to begin tracking",
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Spacer(modifier = Modifier.height(24.dp))
        Button(onClick = onStartNewTrip) {
            Icon(Icons.Default.Add, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Start New Trip")
        }
    }
}

private fun formatTripDate(date: Date): String {
    val formatter = SimpleDateFormat("MMM dd, yyyy", Locale.getDefault())
    return formatter.format(date)
}

private fun formatTime(date: Date): String {
    val formatter = SimpleDateFormat("HH:mm", Locale.getDefault())
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
