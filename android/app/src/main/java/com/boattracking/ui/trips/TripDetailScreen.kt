package com.boattracking.ui.trips

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.boattracking.database.entities.GpsPointEntity
import com.boattracking.database.entities.TripEntity
import com.boattracking.repository.TripStatistics
import java.text.SimpleDateFormat
import java.util.*

/**
 * Screen displaying detailed information about a specific trip.
 * Shows trip statistics, GPS route information, and manual data.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TripDetailScreen(
    trip: TripEntity,
    gpsPoints: List<GpsPointEntity>,
    statistics: TripStatistics?,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Trip Details") },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.primaryContainer,
                    titleContentColor = MaterialTheme.colorScheme.onPrimaryContainer
                )
            )
        }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .fillMaxSize()
                .padding(paddingValues)
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Trip header
            TripHeaderCard(trip = trip)
            
            // Statistics card
            if (statistics != null) {
                TripStatisticsCard(statistics = statistics)
            }
            
            // GPS information
            GpsInformationCard(gpsPoints = gpsPoints)
            
            // Manual data if available
            if (hasManualData(trip)) {
                ManualDataCard(trip = trip)
            }
            
            // Sync status
            SyncStatusCard(trip = trip)
        }
    }
}

@Composable
fun TripHeaderCard(
    trip: TripEntity,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = formatTripDate(trip.startTime),
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            DetailRow(label = "Start Time", value = formatDateTime(trip.startTime))
            trip.endTime?.let {
                DetailRow(label = "End Time", value = formatDateTime(it))
            }
            DetailRow(label = "Water Type", value = trip.waterType.capitalize(Locale.getDefault()))
            DetailRow(label = "Role", value = trip.role.capitalize(Locale.getDefault()))
            DetailRow(label = "Boat ID", value = trip.boatId)
        }
    }
}

@Composable
fun TripStatisticsCard(
    statistics: TripStatistics,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = "Statistics",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            StatisticRow(
                label = "Duration",
                value = formatDuration(statistics.durationSeconds / 60)
            )
            StatisticRow(
                label = "Distance",
                value = String.format("%.2f nm", statistics.distanceMeters / 1852.0)
            )
            StatisticRow(
                label = "Average Speed",
                value = String.format("%.1f knots", statistics.averageSpeedKnots)
            )
            StatisticRow(
                label = "Max Speed",
                value = String.format("%.1f knots", statistics.maxSpeedKnots)
            )
        }
    }
}

@Composable
fun GpsInformationCard(
    gpsPoints: List<GpsPointEntity>,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = "GPS Information",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            DetailRow(
                label = "GPS Points",
                value = gpsPoints.size.toString()
            )
            
            if (gpsPoints.isNotEmpty()) {
                val firstPoint = gpsPoints.first()
                val lastPoint = gpsPoints.last()
                
                Spacer(modifier = Modifier.height(8.dp))
                
                Text(
                    text = "Start Position",
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Medium
                )
                DetailRow(
                    label = "Latitude",
                    value = String.format("%.6f", firstPoint.latitude)
                )
                DetailRow(
                    label = "Longitude",
                    value = String.format("%.6f", firstPoint.longitude)
                )
                
                Spacer(modifier = Modifier.height(8.dp))
                
                Text(
                    text = "End Position",
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Medium
                )
                DetailRow(
                    label = "Latitude",
                    value = String.format("%.6f", lastPoint.latitude)
                )
                DetailRow(
                    label = "Longitude",
                    value = String.format("%.6f", lastPoint.longitude)
                )
            }
        }
    }
}

@Composable
fun ManualDataCard(
    trip: TripEntity,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Text(
                text = "Manual Data",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            trip.engineHours?.let {
                DetailRow(label = "Engine Hours", value = String.format("%.1f hrs", it))
            }
            trip.fuelConsumed?.let {
                DetailRow(label = "Fuel Consumed", value = String.format("%.1f gal", it))
            }
            trip.weatherConditions?.let {
                DetailRow(label = "Weather", value = it)
            }
            trip.numberOfPassengers?.let {
                DetailRow(label = "Passengers", value = it.toString())
            }
            trip.destination?.let {
                DetailRow(label = "Destination", value = it)
            }
        }
    }
}

@Composable
fun SyncStatusCard(
    trip: TripEntity,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        colors = CardDefaults.cardColors(
            containerColor = if (trip.synced) {
                MaterialTheme.colorScheme.primaryContainer
            } else {
                MaterialTheme.colorScheme.secondaryContainer
            }
        )
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = "Sync Status",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = if (trip.synced) "Synced" else "Not Synced",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Medium
            )
        }
    }
}

@Composable
fun DetailRow(
    label: String,
    value: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyMedium,
            fontWeight = FontWeight.Medium
        )
    }
}

@Composable
fun StatisticRow(
    label: String,
    value: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
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
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary
        )
    }
}

private fun hasManualData(trip: TripEntity): Boolean {
    return trip.engineHours != null ||
            trip.fuelConsumed != null ||
            trip.weatherConditions != null ||
            trip.numberOfPassengers != null ||
            trip.destination != null
}

private fun formatTripDate(date: Date): String {
    val formatter = SimpleDateFormat("EEEE, MMM dd, yyyy", Locale.getDefault())
    return formatter.format(date)
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
