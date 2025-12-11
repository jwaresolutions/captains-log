package com.boattracking.ui.trips

import androidx.compose.runtime.*
import androidx.compose.runtime.livedata.observeAsState
import androidx.lifecycle.viewmodel.compose.viewModel
import com.boattracking.viewmodel.TripTrackingViewModel
import com.boattracking.viewmodel.BoatViewModel
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
    var activeBoat by remember { mutableStateOf<com.boattracking.database.entities.BoatEntity?>(null) }
    
    // Load active boat
    LaunchedEffect(boats) {
        activeBoat = boatViewModel.getActiveBoat()
    }
    
    // Navigation state
    var currentScreen by remember { mutableStateOf<TripScreen>(TripScreen.TripList) }
    var selectedTripId by remember { mutableStateOf<String?>(null) }
    
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
                onStartNewTrip = {
                    currentScreen = TripScreen.ActiveTrip
                }
            )
        }
        
        TripScreen.ActiveTrip -> {
            // Load current trip if tracking but trip not loaded
            LaunchedEffect(isTracking, currentTrip) {
                if (isTracking && currentTrip == null) {
                    viewModel.currentTripId.value?.let { tripId ->
                        viewModel.loadTrip(tripId)
                    }
                }
            }
            
            ActiveTripScreen(
                isTracking = isTracking,
                currentTrip = currentTrip,
                onStartTrip = { boatId, waterType, role ->
                    viewModel.startTrip(
                        context = context,
                        boatId = boatId,
                        waterType = waterType,
                        role = role
                    )
                },
                onStopTrip = {
                    viewModel.stopTrip(context)
                    currentScreen = TripScreen.TripList
                },
                boats = boats,
                activeBoat = activeBoat,
                errorMessage = errorMessage,
                onErrorDismissed = {
                    viewModel.clearError()
                }
            )
        }
        
        TripScreen.TripDetail -> {
            selectedTripId?.let { tripId ->
                val trip = trips.find { it.id == tripId }
                val gpsPoints by viewModel.getGpsPointsForTrip(tripId)
                    .collectAsState(initial = emptyList())
                
                var statistics by remember { mutableStateOf<com.boattracking.repository.TripStatistics?>(null) }
                
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
                        onNavigateBack = {
                            currentScreen = TripScreen.TripList
                            selectedTripId = null
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
    object ActiveTrip : TripScreen()
    object TripDetail : TripScreen()
}