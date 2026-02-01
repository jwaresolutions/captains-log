package com.captainslog.viewmodel

import android.app.Application
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.captainslog.connection.ConnectionManager
import com.captainslog.database.AppDatabase
import com.captainslog.database.entities.GpsPointEntity
import com.captainslog.database.entities.MarkedLocationEntity
import com.captainslog.database.entities.TripEntity
import com.captainslog.repository.MarkedLocationRepository
import com.captainslog.repository.MarkedLocationWithDistance
import com.captainslog.repository.TripRepository
import com.captainslog.nautical.NauticalSettingsManager
import com.captainslog.nautical.tile.NauticalTileSources
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch


/**
 * ViewModel for the map screen
 */
class MapViewModel(application: Application) : AndroidViewModel(application) {
    
    companion object {
        private const val TAG = "MapViewModel"
    }

    private val _uiState = MutableStateFlow(MapUiState())
    val uiState: StateFlow<MapUiState> = _uiState.asStateFlow()

    private val tripRepository: TripRepository
    private val markedLocationRepository: MarkedLocationRepository
    private val connectionManager: ConnectionManager
    val nauticalSettingsManager: NauticalSettingsManager

    init {
        val database = AppDatabase.getInstance(application)
        connectionManager = ConnectionManager.getInstance(application)
        connectionManager.initialize()
        
        // Initialize repositories with ConnectionManager
        tripRepository = TripRepository(database, application)
        markedLocationRepository = MarkedLocationRepository(database, connectionManager)
        nauticalSettingsManager = NauticalSettingsManager.getInstance(application)

        // Load initial data
        loadTrips()
        loadMarkedLocations()
    }

    /**
     * Load trips and their GPS points
     */
    fun loadTrips() {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true)
                
                tripRepository.getAllTrips().collect { trips ->
                    val filteredTrips = if (_uiState.value.filter.showTrips) {
                        trips.filter { it.endTime != null } // Only show completed trips
                    } else {
                        emptyList()
                    }

                    // Load GPS points for each trip
                    val tripGpsPoints = mutableMapOf<String, List<GpsPointEntity>>()
                    for (trip in filteredTrips) {
                        tripRepository.getGpsPointsForTrip(trip.id).collect { gpsPoints ->
                            tripGpsPoints[trip.id] = gpsPoints
                        }
                    }

                    _uiState.value = _uiState.value.copy(
                        trips = filteredTrips,
                        tripGpsPoints = tripGpsPoints,
                        isLoading = false,
                        error = null
                    )
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error loading trips", e)
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }

    /**
     * Load marked locations
     */
    fun loadMarkedLocations() {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true)

                val currentState = _uiState.value
                if (currentState.currentLatitude != null && currentState.currentLongitude != null) {
                    // Load with distance calculation
                    markedLocationRepository.getMarkedLocationsWithDistance(
                        currentState.currentLatitude,
                        currentState.currentLongitude
                    ).collect { locationsWithDistance ->
                        val filteredLocations = if (_uiState.value.filter.showMarkedLocations) {
                            locationsWithDistance
                        } else {
                            emptyList()
                        }

                        _uiState.value = _uiState.value.copy(
                            markedLocations = filteredLocations,
                            isLoading = false,
                            error = null
                        )
                    }
                } else {
                    // Load without distance calculation
                    markedLocationRepository.getAllMarkedLocations().collect { locations ->
                        val locationsWithDistance = locations.map { location ->
                            MarkedLocationWithDistance(
                                location = location,
                                distanceMeters = 0.0
                            )
                        }

                        val filteredLocations = if (_uiState.value.filter.showMarkedLocations) {
                            locationsWithDistance
                        } else {
                            emptyList()
                        }

                        _uiState.value = _uiState.value.copy(
                            markedLocations = filteredLocations,
                            isLoading = false,
                            error = null
                        )
                    }
                }

                // Sync from API
                markedLocationRepository.syncMarkedLocationsFromApi()
            } catch (e: Exception) {
                Log.e(TAG, "Error loading marked locations", e)
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }

    /**
     * Update current location for distance calculations
     */
    fun updateCurrentLocation(latitude: Double, longitude: Double) {
        _uiState.value = _uiState.value.copy(
            currentLatitude = latitude,
            currentLongitude = longitude
        )
        
        // Reload marked locations with new distance calculations
        loadMarkedLocations()
    }

    /**
     * Create a new marked location
     */
    fun createMarkedLocation(
        name: String,
        latitude: Double,
        longitude: Double,
        category: String,
        notes: String,
        tags: List<String>
    ) {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true)
                
                val result = markedLocationRepository.createMarkedLocation(
                    name = name,
                    latitude = latitude,
                    longitude = longitude,
                    category = category,
                    notes = notes.ifBlank { null },
                    tags = tags
                )

                if (result.isSuccess) {
                    Log.d(TAG, "Marked location created successfully")
                    // Locations will be automatically updated via Flow
                } else {
                    val error = result.exceptionOrNull()?.message ?: "Failed to create location"
                    Log.e(TAG, "Failed to create marked location: $error")
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error
                    )
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error creating marked location", e)
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }

    /**
     * Select a marked location
     */
    fun selectMarkedLocation(location: MarkedLocationEntity) {
        _uiState.value = _uiState.value.copy(
            selectedMarkedLocation = location
        )
    }

    /**
     * Clear selected marked location
     */
    fun clearSelectedMarkedLocation() {
        _uiState.value = _uiState.value.copy(
            selectedMarkedLocation = null
        )
    }

    /**
     * Update map filter
     */
    fun updateFilter(filter: MapFilter) {
        _uiState.value = _uiState.value.copy(filter = filter)
        
        // Reload data based on new filter
        loadTrips()
        loadMarkedLocations()
    }

    /**
     * Search marked locations
     */
    fun searchMarkedLocations(query: String) {
        if (query.isBlank()) {
            loadMarkedLocations()
            return
        }

        viewModelScope.launch {
            try {
                markedLocationRepository.searchMarkedLocations(query).collect { locations ->
                    val locationsWithDistance = locations.map { location ->
                        val distance = if (_uiState.value.currentLatitude != null && _uiState.value.currentLongitude != null) {
                            calculateDistance(
                                _uiState.value.currentLatitude!!,
                                _uiState.value.currentLongitude!!,
                                location.latitude,
                                location.longitude
                            )
                        } else {
                            0.0
                        }
                        
                        MarkedLocationWithDistance(
                            location = location,
                            distanceMeters = distance
                        )
                    }

                    _uiState.value = _uiState.value.copy(
                        markedLocations = locationsWithDistance,
                        error = null
                    )
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error searching marked locations", e)
                _uiState.value = _uiState.value.copy(error = e.message)
            }
        }
    }

    /**
     * Get nearby marked locations
     */
    fun getNearbyMarkedLocations(radiusMeters: Double) {
        val currentLat = _uiState.value.currentLatitude
        val currentLon = _uiState.value.currentLongitude
        
        if (currentLat == null || currentLon == null) {
            Log.w(TAG, "Current location not available for nearby search")
            return
        }

        viewModelScope.launch {
            try {
                markedLocationRepository.getNearbyMarkedLocations(
                    currentLat, currentLon, radiusMeters
                ).collect { nearbyLocations ->
                    _uiState.value = _uiState.value.copy(
                        markedLocations = nearbyLocations,
                        error = null
                    )
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error getting nearby marked locations", e)
                _uiState.value = _uiState.value.copy(error = e.message)
            }
        }
    }

    /**
     * Calculate distance between two points (Haversine formula)
     */
    private fun calculateDistance(
        lat1: Double, lon1: Double,
        lat2: Double, lon2: Double
    ): Double {
        val earthRadius = 6371000.0 // Earth radius in meters
        val dLat = Math.toRadians(lat2 - lat1)
        val dLon = Math.toRadians(lon2 - lon1)
        
        val a = kotlin.math.sin(dLat / 2) * kotlin.math.sin(dLat / 2) +
                kotlin.math.cos(Math.toRadians(lat1)) * kotlin.math.cos(Math.toRadians(lat2)) *
                kotlin.math.sin(dLon / 2) * kotlin.math.sin(dLon / 2)
        
        val c = 2 * kotlin.math.atan2(kotlin.math.sqrt(a), kotlin.math.sqrt(1 - a))
        
        return earthRadius * c
    }
}

/**
 * UI state for the map screen
 */
data class MapUiState(
    val trips: List<TripEntity> = emptyList(),
    val tripGpsPoints: Map<String, List<GpsPointEntity>> = emptyMap(),
    val markedLocations: List<MarkedLocationWithDistance> = emptyList(),
    val selectedMarkedLocation: MarkedLocationEntity? = null,
    val currentLatitude: Double? = null,
    val currentLongitude: Double? = null,
    val filter: MapFilter = MapFilter(),
    val isLoading: Boolean = false,
    val error: String? = null,
    val enabledNauticalLayers: List<String> = emptyList()
)

/**
 * Filter options for the map
 */
data class MapFilter(
    val showTrips: Boolean = true,
    val showMarkedLocations: Boolean = true,
    val categoryFilter: String? = null,
    val tagFilter: List<String> = emptyList(),
    val showNauticalLayers: Boolean = true
)