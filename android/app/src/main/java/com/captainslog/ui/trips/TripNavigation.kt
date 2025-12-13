package com.captainslog.ui.trips

import androidx.compose.runtime.*
import androidx.compose.runtime.livedata.observeAsState
import androidx.lifecycle.viewmodel.compose.viewModel
import com.captainslog.viewmodel.TripTrackingViewModel
import com.captainslog.viewmodel.BoatViewModel
import androidx.compose.ui.platform.LocalContext
import kotlinx.coroutines.launch

/**
 * Navigation component for trip-related screens.
 * Manages navigation between trip list, active trip, and trip detail screens.
 */
@Composable
fun TripNavigation(
    modifier: androidx.compose.ui.Modifier = androidx.compose.ui.Modifier,
    viewModel: TripTrackingViewModel = viewModel(),
    boatViewModel: BoatViewModel = viewModel()
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    
    // Observe ViewModel state
    val isTracking by viewModel.isTracking.observeAsState(false)
    val currentTrip by viewModel.currentTrip.observeAsState()
    val errorMessage by viewModel.errorMessage.observeAsState()
    val trips by viewModel.getAllTrips().collectAsState(initial = emptyList())
    
    // Observe boat data
    val boats by boatViewModel.getAllBoats().collectAsState(initial = emptyList())
    var activeBoat by remember { mutableStateOf<com.captainslog.database.entities.BoatEntity?>(null) }
    
    // Load active boat
    LaunchedEffect(boats) {
        activeBoat = boatViewModel.getActiveBoat()
    }
    
    // Navigation state
    var currentScreen by remember { mutableStateOf<TripScreen>(TripScreen.TripList) }
    var selectedTripId by remember { mutableStateOf<String?>(null) }
    
    // Auto-navigate to TripDetail when tracking starts
    LaunchedEffect(isTracking, currentTrip) {
        val trip = currentTrip
        if (isTracking && trip != null && currentScreen == TripScreen.TripList) {
            android.util.Log.d("TripNavigation", "Auto-navigating to TripDetail because trip is active")
            selectedTripId = trip.id
            currentScreen = TripScreen.TripDetail
        }
    }
    
    // Bind to service on first composition
    DisposableEffect(Unit) {
        viewModel.bindToService(context)
        onDispose {
            viewModel.unbindFromService(context)
        }
    }
    
    when (currentScreen) {
        TripScreen.TripList -> {
            TripListScreen(
                trips = trips,
                onTripClick = { tripId ->
                    selectedTripId = tripId
                    currentScreen = TripScreen.TripDetail
                },
                onStartNewTrip = { boatId, waterType, role ->
                    android.util.Log.d("TripNavigation", "onStartTrip called: boatId=$boatId, waterType=$waterType, role=$role")
                    viewModel.startTrip(
                        context = context,
                        boatId = boatId,
                        waterType = waterType,
                        role = role
                    )
                    
                    // Navigate to trip detail after starting
                    scope.launch {
                        kotlinx.coroutines.delay(2000) // Wait for trip to start
                        viewModel.currentTripId.value?.let { tripId ->
                            selectedTripId = tripId
                            currentScreen = TripScreen.TripDetail
                        }
                    }
                },
                boats = boats,
                activeBoat = activeBoat,
                isTracking = isTracking,
                currentTrip = currentTrip,
                onForceCleanup = {
                    android.util.Log.d("TripNavigation", "Force cleanup requested")
                    viewModel.forceCleanup()
                },
                onRefreshState = {
                    android.util.Log.d("TripNavigation", "Manual refresh requested")
                    viewModel.refreshState()
                },
                onNuclearStop = {
                    android.util.Log.d("TripNavigation", "NUCLEAR STOP requested")
                    viewModel.forceStopEverything(context)
                }
            )
        }
        
        TripScreen.TripDetail -> {
            selectedTripId?.let { tripId ->
                val trip = trips.find { it.id == tripId }
                val gpsPoints by viewModel.getGpsPointsForTrip(tripId)
                    .collectAsState(initial = emptyList())
                
                var statistics by remember { mutableStateOf<com.captainslog.repository.TripStatistics?>(null) }
                
                LaunchedEffect(tripId) {
                    scope.launch {
                        statistics = viewModel.calculateTripStatistics(tripId)
                    }
                }
                
                if (trip != null) {
                    TripDetailScreen(
                        trip = trip,
                        gpsPoints = gpsPoints,
                        statistics = statistics,
                        boats = boats,
                        onNavigateBack = {
                            currentScreen = TripScreen.TripList
                            selectedTripId = null
                        },
                        onStopTrip = {
                            android.util.Log.d("TripNavigation", "Stop trip called from TripDetailScreen")
                            // Use force stop for more aggressive stopping
                            viewModel.forceStopEverything(context)
                            currentScreen = TripScreen.TripList
                            selectedTripId = null
                        },
                        onUpdateManualData = { updatedTrip ->
                            android.util.Log.d("TripNavigation", "Updating trip data for trip ${updatedTrip.id}")
                            scope.launch {
                                viewModel.updateTripManualData(updatedTrip)
                            }
                        }
                    )
                }
            }
        }
    }
}

/**
 * Sealed class representing different trip screens
 */
sealed class TripScreen {
    object TripList : TripScreen()
    object TripDetail : TripScreen()
}