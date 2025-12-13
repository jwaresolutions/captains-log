package com.boattracking.ui.map

import android.Manifest
import android.content.pm.PackageManager
import android.location.Location
import android.util.Log
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.core.content.ContextCompat
import androidx.lifecycle.viewmodel.compose.viewModel
import com.boattracking.database.entities.GpsPointEntity
import com.boattracking.database.entities.TripEntity
import com.boattracking.repository.MarkedLocationWithDistance
import com.boattracking.viewmodel.MapViewModel
import com.boattracking.viewmodel.MapUiState
import com.boattracking.viewmodel.MapFilter
import com.google.android.gms.location.LocationServices
import com.google.android.gms.maps.CameraUpdateFactory
import com.google.android.gms.maps.model.*
import com.google.maps.android.compose.*
import kotlinx.coroutines.launch

/**
 * Main map screen with Google Maps integration
 * Displays trip routes, marked locations, and provides location marking functionality
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MapScreen(
    modifier: Modifier = Modifier,
    viewModel: MapViewModel = viewModel()
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    
    // State
    val uiState by viewModel.uiState.collectAsState()
    var showLocationDialog by remember { mutableStateOf(false) }
    var selectedLocation by remember { mutableStateOf<LatLng?>(null) }
    var currentLocation by remember { mutableStateOf<Location?>(null) }
    var hasLocationPermission by remember { 
        mutableStateOf(
            ContextCompat.checkSelfPermission(
                context, 
                Manifest.permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
        )
    }

    // Camera position state
    val cameraPositionState = rememberCameraPositionState {
        position = CameraPosition.fromLatLngZoom(
            LatLng(37.7749, -122.4194), // Default to San Francisco
            10f
        )
    }

    // Location permission launcher
    val locationPermissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        hasLocationPermission = isGranted
        if (isGranted) {
            getCurrentLocation(context) { location ->
                currentLocation = location
                // Move camera to current location
                scope.launch {
                    cameraPositionState.animate(
                        CameraUpdateFactory.newLatLngZoom(
                            LatLng(location.latitude, location.longitude),
                            15f
                        )
                    )
                }
            }
        }
    }

    // Get current location when permission is granted
    LaunchedEffect(hasLocationPermission) {
        if (hasLocationPermission) {
            getCurrentLocation(context) { location ->
                currentLocation = location
                viewModel.updateCurrentLocation(location.latitude, location.longitude)
            }
        }
    }

    // Load data
    LaunchedEffect(Unit) {
        viewModel.loadTrips()
        viewModel.loadMarkedLocations()
    }

    Scaffold(
        modifier = modifier,
        topBar = {
            com.boattracking.ui.components.AppTopBar(
                title = "Map",
                onNotesClick = { /* TODO: Navigate to Notes */ },
                onTodosClick = { /* TODO: Navigate to Todos */ },
                onSettingsClick = { /* TODO: Navigate to Settings */ }
            )
        }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
        // Google Map
        GoogleMap(
            modifier = Modifier.fillMaxSize(),
            cameraPositionState = cameraPositionState,
            properties = MapProperties(
                isMyLocationEnabled = hasLocationPermission,
                mapType = MapType.NORMAL
            ),
            uiSettings = MapUiSettings(
                myLocationButtonEnabled = true,
                zoomControlsEnabled = true,
                compassEnabled = true
            ),
            onMapLongClick = { latLng ->
                selectedLocation = latLng
                showLocationDialog = true
            }
        ) {
            // Draw trip routes
            uiState.trips.forEach { trip ->
                val gpsPoints = uiState.tripGpsPoints[trip.id] ?: emptyList()
                if (gpsPoints.isNotEmpty()) {
                    DrawTripRoute(
                        trip = trip,
                        gpsPoints = gpsPoints,
                        onTripClick = { /* Handle trip click */ }
                    )
                }
            }

            // Draw marked locations
            uiState.markedLocations.forEach { locationWithDistance ->
                DrawMarkedLocation(
                    markedLocation = locationWithDistance,
                    onLocationClick = { location ->
                        viewModel.selectMarkedLocation(location.location)
                    }
                )
            }

            // Show selected marked location details
            uiState.selectedMarkedLocation?.let { location ->
                MarkerInfoWindow(
                    state = MarkerState(
                        position = LatLng(location.latitude, location.longitude)
                    ),
                    title = location.name,
                    snippet = "${location.category} • ${location.notes ?: "No notes"}"
                )
            }
        }

        // Floating Action Buttons
        Column(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            // Current location button
            FloatingActionButton(
                onClick = {
                    if (hasLocationPermission) {
                        getCurrentLocation(context) { location ->
                            currentLocation = location
                            scope.launch {
                                cameraPositionState.animate(
                                    CameraUpdateFactory.newLatLngZoom(
                                        LatLng(location.latitude, location.longitude),
                                        15f
                                    )
                                )
                            }
                        }
                    } else {
                        locationPermissionLauncher.launch(Manifest.permission.ACCESS_FINE_LOCATION)
                    }
                },
                containerColor = MaterialTheme.colorScheme.primary
            ) {
                Icon(
                    imageVector = Icons.Default.LocationOn,
                    contentDescription = "My Location"
                )
            }

            // Add location button
            FloatingActionButton(
                onClick = {
                    currentLocation?.let { location ->
                        selectedLocation = LatLng(location.latitude, location.longitude)
                        showLocationDialog = true
                    }
                },
                containerColor = MaterialTheme.colorScheme.secondary
            ) {
                Icon(
                    imageVector = Icons.Default.Add,
                    contentDescription = "Add Location"
                )
            }
        }

        // Map controls overlay
        MapControlsOverlay(
            modifier = Modifier.align(Alignment.TopStart),
            uiState = uiState,
            onFilterChange = { filter ->
                viewModel.updateFilter(filter)
            },
            onRefresh = {
                viewModel.loadTrips()
                viewModel.loadMarkedLocations()
            }
        )

        // Loading indicator
        if (uiState.isLoading) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        }

        // Error message
        uiState.error?.let { error ->
            LaunchedEffect(error) {
                // Show error snackbar or dialog
            }
        }
    }

    // Add location dialog
    if (showLocationDialog && selectedLocation != null) {
        AddLocationDialog(
            location = selectedLocation!!,
            onDismiss = { 
                showLocationDialog = false
                selectedLocation = null
            },
            onConfirm = { name, category, notes, tags ->
                scope.launch {
                    viewModel.createMarkedLocation(
                        name = name,
                        latitude = selectedLocation!!.latitude,
                        longitude = selectedLocation!!.longitude,
                        category = category,
                        notes = notes,
                        tags = tags
                    )
                    showLocationDialog = false
                    selectedLocation = null
                }
            }
        )
        }
    }
}

/**
 * Get current location using FusedLocationProviderClient
 */
@Suppress("MissingPermission")
private fun getCurrentLocation(
    context: android.content.Context,
    onLocationReceived: (Location) -> Unit
) {
    try {
        val fusedLocationClient = LocationServices.getFusedLocationProviderClient(context)
        fusedLocationClient.lastLocation.addOnSuccessListener { location ->
            location?.let { onLocationReceived(it) }
        }
    } catch (e: Exception) {
        Log.e("MapScreen", "Error getting current location", e)
    }
}

/**
 * Composable for drawing trip routes on the map
 */
@Composable
private fun DrawTripRoute(
    trip: TripEntity,
    gpsPoints: List<GpsPointEntity>,
    onTripClick: (TripEntity) -> Unit
) {
    if (gpsPoints.isEmpty()) return

    val points = gpsPoints.map { point ->
        LatLng(point.latitude, point.longitude)
    }

    // Draw polyline for the route
    Polyline(
        points = points,
        color = Color.Blue,
        width = 5f,
        pattern = null,
        clickable = true,
        onClick = { onTripClick(trip) }
    )

    // Start marker
    if (points.isNotEmpty()) {
        Marker(
            state = MarkerState(position = points.first()),
            title = "Trip Start",
            snippet = "Started: ${trip.startTime}",
            icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN)
        )
    }

    // End marker
    if (points.size > 1) {
        Marker(
            state = MarkerState(position = points.last()),
            title = "Trip End",
            snippet = "Ended: ${trip.endTime ?: "In Progress"}",
            icon = BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_RED)
        )
    }

    // Stop points (if available in statistics)
    // This would require trip statistics to be loaded
    // For now, we'll skip stop points implementation
}

/**
 * Composable for drawing marked locations on the map
 */
@Composable
private fun DrawMarkedLocation(
    markedLocation: MarkedLocationWithDistance,
    onLocationClick: (MarkedLocationWithDistance) -> Unit
) {
    val location = markedLocation.location
    val markerColor = when (location.category) {
        "fishing" -> BitmapDescriptorFactory.HUE_BLUE
        "marina" -> BitmapDescriptorFactory.HUE_CYAN
        "anchorage" -> BitmapDescriptorFactory.HUE_GREEN
        "hazard" -> BitmapDescriptorFactory.HUE_RED
        else -> BitmapDescriptorFactory.HUE_ORANGE
    }

    Marker(
        state = MarkerState(
            position = LatLng(location.latitude, location.longitude)
        ),
        title = location.name,
        snippet = buildString {
            append(location.category.replaceFirstChar { it.uppercase() })
            markedLocation.distanceMeters.let { distance ->
                if (distance > 0) {
                    append(" • ${String.format("%.1f", distance / 1000)} km")
                }
            }
            location.notes?.let { notes ->
                if (notes.isNotEmpty()) {
                    append("\n$notes")
                }
            }
        },
        icon = BitmapDescriptorFactory.defaultMarker(markerColor),
        onClick = {
            onLocationClick(markedLocation)
            true
        }
    )
}

/**
 * Map controls overlay for filtering and actions
 */
@Composable
private fun MapControlsOverlay(
    modifier: Modifier = Modifier,
    uiState: MapUiState,
    onFilterChange: (MapFilter) -> Unit,
    onRefresh: () -> Unit
) {
    Card(
        modifier = modifier.padding(16.dp),
        shape = RoundedCornerShape(8.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surface.copy(alpha = 0.9f)
        )
    ) {
        Column(
            modifier = Modifier.padding(12.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = "Map Controls",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold
            )

            Row(
                horizontalArrangement = Arrangement.spacedBy(8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Show trips toggle
                FilterChip(
                    selected = uiState.filter.showTrips,
                    onClick = { 
                        onFilterChange(uiState.filter.copy(showTrips = !uiState.filter.showTrips))
                    },
                    label = { Text("Trips") },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.LocationOn,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                    }
                )

                // Show locations toggle
                FilterChip(
                    selected = uiState.filter.showMarkedLocations,
                    onClick = { 
                        onFilterChange(uiState.filter.copy(showMarkedLocations = !uiState.filter.showMarkedLocations))
                    },
                    label = { Text("Locations") },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Place,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                    }
                )

                // Refresh button
                IconButton(
                    onClick = onRefresh,
                    modifier = Modifier.size(32.dp)
                ) {
                    Icon(
                        imageVector = Icons.Default.Refresh,
                        contentDescription = "Refresh",
                        modifier = Modifier.size(16.dp)
                    )
                }
            }
        }
    }
}