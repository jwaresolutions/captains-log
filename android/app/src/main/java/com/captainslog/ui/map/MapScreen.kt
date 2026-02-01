package com.captainslog.ui.map

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
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.lifecycle.viewmodel.compose.viewModel
import com.captainslog.database.entities.GpsPointEntity
import com.captainslog.database.entities.TripEntity
import com.captainslog.repository.MarkedLocationWithDistance
import com.captainslog.viewmodel.MapViewModel
import com.captainslog.viewmodel.MapUiState
import com.captainslog.viewmodel.MapFilter
import com.captainslog.nautical.NauticalSettingsManager
import com.captainslog.nautical.tile.NauticalTileSources
import com.google.android.gms.location.LocationServices
import kotlinx.coroutines.launch
import org.osmdroid.config.Configuration
import org.osmdroid.tileprovider.MapTileProviderBasic
import org.osmdroid.tileprovider.tilesource.TileSourceFactory
import org.osmdroid.tileprovider.tilesource.OnlineTileSourceBase
import org.osmdroid.tileprovider.tilesource.XYTileSource
import org.osmdroid.util.GeoPoint
import org.osmdroid.views.MapView
import org.osmdroid.views.overlay.Marker
import org.osmdroid.views.overlay.Polyline
import org.osmdroid.views.overlay.TilesOverlay
import org.osmdroid.views.overlay.mylocation.GpsMyLocationProvider
import org.osmdroid.views.overlay.mylocation.MyLocationNewOverlay

/**
 * Main map screen with OpenStreetMap integration
 * Displays trip routes, marked locations, and provides location marking functionality
 * Features marine charts via OpenSeaMap overlay
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
    var selectedLocation by remember { mutableStateOf<GeoPoint?>(null) }
    var currentLocation by remember { mutableStateOf<Location?>(null) }
    var showMarineLayer by remember { mutableStateOf(true) }
    var mapView by remember { mutableStateOf<MapView?>(null) }
    val nauticalSettingsManager = remember { NauticalSettingsManager.getInstance(context) }
    var hasLocationPermission by remember { 
        mutableStateOf(
            ContextCompat.checkSelfPermission(
                context, 
                Manifest.permission.ACCESS_FINE_LOCATION
            ) == PackageManager.PERMISSION_GRANTED
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
                mapView?.controller?.animateTo(
                    GeoPoint(location.latitude, location.longitude)
                )
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

    Box(modifier = modifier.fillMaxSize()) {
        // OpenStreetMap with osmdroid
        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { ctx ->
                // Configure osmdroid
                Configuration.getInstance().load(ctx, ctx.getSharedPreferences("osmdroid", 0))
                Configuration.getInstance().userAgentValue = "CaptainsLog"
                
                MapView(ctx).apply {
                    mapView = this
                    
                    // Set tile source to OpenStreetMap
                    setTileSource(TileSourceFactory.MAPNIK)
                    
                    // Enable built-in zoom controls
                    setBuiltInZoomControls(true)
                    setMultiTouchControls(true)
                    
                    // Set initial position (Seattle, WA)
                    controller.setZoom(12.0)
                    controller.setCenter(GeoPoint(47.6062, -122.3321))

                    // Add nautical tile layers based on settings
                    addNauticalTileLayers(this, nauticalSettingsManager)
                    
                    // Add location overlay if permission granted
                    if (hasLocationPermission) {
                        addLocationOverlay(this, ctx)
                    }
                    
                    // Touch handling is managed by osmdroid for pan/zoom
                    // Location adding is handled by the + button only
                }
            },
            update = { mapViewInstance ->
                // Update overlays when UI state changes
                updateMapOverlays(mapViewInstance, uiState, showMarineLayer, nauticalSettingsManager)
            }
        )

        // Floating Action Buttons
        Column(
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            // Marine layer toggle
            FloatingActionButton(
                onClick = {
                    showMarineLayer = !showMarineLayer
                    mapView?.let { updateMapOverlays(it, uiState, showMarineLayer, nauticalSettingsManager) }
                },
                containerColor = if (showMarineLayer) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.surfaceVariant
            ) {
                Icon(
                    imageVector = Icons.Default.Settings,
                    contentDescription = "Toggle Marine Layer",
                    tint = if (showMarineLayer) MaterialTheme.colorScheme.onPrimary else MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
            
            // Current location button
            FloatingActionButton(
                onClick = {
                    if (hasLocationPermission) {
                        getCurrentLocation(context) { location ->
                            currentLocation = location
                            mapView?.controller?.animateTo(
                                GeoPoint(location.latitude, location.longitude)
                            )
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
                        selectedLocation = GeoPoint(location.latitude, location.longitude)
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
            showMarineLayer = showMarineLayer,
            onFilterChange = { filter ->
                viewModel.updateFilter(filter)
            },
            onMarineLayerToggle = {
                showMarineLayer = !showMarineLayer
                mapView?.let { updateMapOverlays(it, uiState, showMarineLayer, nauticalSettingsManager) }
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
 * Add nautical tile layer overlays based on settings
 */
private fun addNauticalTileLayers(mapView: MapView, settingsManager: NauticalSettingsManager) {
    NauticalTileSources.tileProviderIds.forEach { id ->
        if (settingsManager.isEnabled(id)) {
            val tileSource = NauticalTileSources.getSourceById(id) ?: return@forEach
            val overlay = TilesOverlay(
                MapTileProviderBasic(mapView.context, tileSource),
                mapView.context
            )
            overlay.setLoadingBackgroundColor(android.graphics.Color.TRANSPARENT)
            mapView.overlayManager.add(overlay)
        }
    }
}

/**
 * Add location overlay for showing current position
 */
@Suppress("MissingPermission")
private fun addLocationOverlay(mapView: MapView, context: android.content.Context) {
    val locationOverlay = MyLocationNewOverlay(GpsMyLocationProvider(context), mapView)
    locationOverlay.enableMyLocation()
    locationOverlay.enableFollowLocation()
    mapView.overlayManager.add(locationOverlay)
}

/**
 * Update map overlays based on UI state
 */
private fun updateMapOverlays(mapView: MapView, uiState: MapUiState, showMarineLayer: Boolean, nauticalSettingsManager: NauticalSettingsManager? = null) {
    // Clear existing overlays (except location)
    val overlaysToKeep = mapView.overlayManager.filter {
        it is MyLocationNewOverlay || (it is TilesOverlay && showMarineLayer)
    }
    mapView.overlayManager.clear()
    overlaysToKeep.forEach { mapView.overlayManager.add(it) }

    // Add nautical tile layers if enabled
    if (showMarineLayer && nauticalSettingsManager != null) {
        addNauticalTileLayers(mapView, nauticalSettingsManager)
    } else if (showMarineLayer && overlaysToKeep.none { it is TilesOverlay }) {
        // Fallback: add OpenSeaMap directly
        val marineOverlay = TilesOverlay(
            MapTileProviderBasic(mapView.context, NauticalTileSources.openSeaMap),
            mapView.context
        )
        marineOverlay.setLoadingBackgroundColor(android.graphics.Color.TRANSPARENT)
        mapView.overlayManager.add(marineOverlay)
    }
    
    // Add trip routes
    if (uiState.filter.showTrips) {
        uiState.trips.forEach { trip ->
            val gpsPoints = uiState.tripGpsPoints[trip.id] ?: emptyList()
            if (gpsPoints.isNotEmpty()) {
                addTripRoute(mapView, trip, gpsPoints)
            }
        }
    }
    
    // Add marked locations
    if (uiState.filter.showMarkedLocations) {
        uiState.markedLocations.forEach { locationWithDistance ->
            addMarkedLocationMarker(mapView, locationWithDistance)
        }
    }
    
    mapView.invalidate()
}

/**
 * Add trip route as polyline overlay
 */
private fun addTripRoute(mapView: MapView, trip: TripEntity, gpsPoints: List<GpsPointEntity>) {
    val points = gpsPoints.map { point ->
        GeoPoint(point.latitude, point.longitude)
    }
    
    if (points.isEmpty()) return
    
    // Create polyline for route
    val polyline = Polyline().apply {
        setPoints(points)
        outlinePaint.color = Color.Blue.toArgb()
        outlinePaint.strokeWidth = 8f
        title = "Trip: ${trip.startTime}"
    }
    mapView.overlayManager.add(polyline)
    
    // Start marker
    val startMarker = Marker(mapView).apply {
        position = points.first()
        title = "Trip Start"
        snippet = "Started: ${trip.startTime}"
        setAnchor(Marker.ANCHOR_CENTER, Marker.ANCHOR_BOTTOM)
        icon = ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_mylocation)
    }
    mapView.overlayManager.add(startMarker)
    
    // End marker (if trip is completed)
    if (points.size > 1 && trip.endTime != null) {
        val endMarker = Marker(mapView).apply {
            position = points.last()
            title = "Trip End"
            snippet = "Ended: ${trip.endTime}"
            setAnchor(Marker.ANCHOR_CENTER, Marker.ANCHOR_BOTTOM)
            icon = ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_close_clear_cancel)
        }
        mapView.overlayManager.add(endMarker)
    }
}

/**
 * Add marked location as marker overlay
 */
private fun addMarkedLocationMarker(mapView: MapView, locationWithDistance: MarkedLocationWithDistance) {
    val location = locationWithDistance.location
    
    val marker = Marker(mapView).apply {
        position = GeoPoint(location.latitude, location.longitude)
        title = location.name
        snippet = buildString {
            append(location.category.replaceFirstChar { it.uppercase() })
            if (locationWithDistance.distanceMeters > 0) {
                append(" • ${String.format("%.1f", locationWithDistance.distanceMeters / 1000)} km")
            }
            location.notes?.let { notes ->
                if (notes.isNotEmpty()) {
                    append("\n$notes")
                }
            }
        }
        setAnchor(Marker.ANCHOR_CENTER, Marker.ANCHOR_BOTTOM)
        
        // Set marker icon based on category
        icon = when (location.category) {
            "fishing" -> ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_compass)
            "marina" -> ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_directions)
            "anchorage" -> ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_mylocation)
            "hazard" -> ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_dialog_alert)
            else -> ContextCompat.getDrawable(mapView.context, android.R.drawable.ic_menu_mapmode)
        }
    }
    
    mapView.overlayManager.add(marker)
}



/**
 * Map controls overlay for filtering and actions
 */
@Composable
private fun MapControlsOverlay(
    modifier: Modifier = Modifier,
    uiState: MapUiState,
    showMarineLayer: Boolean,
    onFilterChange: (MapFilter) -> Unit,
    onMarineLayerToggle: () -> Unit,
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
                // Marine layer toggle
                FilterChip(
                    selected = showMarineLayer,
                    onClick = onMarineLayerToggle,
                    label = { Text("Marine") },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Settings,
                            contentDescription = null,
                            modifier = Modifier.size(16.dp)
                        )
                    }
                )
                
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

