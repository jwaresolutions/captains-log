package com.boattracking.viewmodel

import android.app.Application
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.ServiceConnection
import android.os.IBinder
import android.util.Log
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.viewModelScope
import com.boattracking.database.AppDatabase
import com.boattracking.database.entities.GpsPointEntity
import com.boattracking.database.entities.TripEntity
import com.boattracking.repository.BoatRepository
import com.boattracking.repository.TripRepository
import com.boattracking.repository.TripStatistics
import com.boattracking.service.GpsTrackingService
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.launch

/**
 * ViewModel for managing trip tracking and GPS service interaction.
 * Provides UI state and handles communication with the GPS tracking service.
 */
class TripTrackingViewModel(application: Application) : AndroidViewModel(application) {

    companion object {
        private const val TAG = "TripTrackingViewModel"
    }

    private val repository: TripRepository
    private val database: AppDatabase
    private var gpsTrackingService: GpsTrackingService? = null
    private var serviceBound = false

    private val _isTracking = MutableLiveData<Boolean>(false)
    val isTracking: LiveData<Boolean> = _isTracking

    private val _currentTripId = MutableLiveData<String?>()
    val currentTripId: LiveData<String?> = _currentTripId

    private val _currentTrip = MutableLiveData<TripEntity?>()
    val currentTrip: LiveData<TripEntity?> = _currentTrip

    private val _errorMessage = MutableLiveData<String?>()
    val errorMessage: LiveData<String?> = _errorMessage

    private val serviceConnection = object : ServiceConnection {
        override fun onServiceConnected(name: ComponentName?, service: IBinder?) {
            val binder = service as GpsTrackingService.LocalBinder
            gpsTrackingService = binder.getService()
            serviceBound = true
            
            Log.d(TAG, "Service connected")
            
            // Update tracking state
            _isTracking.value = gpsTrackingService?.isTracking() ?: false
            _currentTripId.value = gpsTrackingService?.getCurrentTripId()
            
            Log.d(TAG, "Tracking state: ${_isTracking.value}, Trip ID: ${_currentTripId.value}")
            
            // Load current trip if tracking
            _currentTripId.value?.let { tripId ->
                loadTrip(tripId)
            }
        }

        override fun onServiceDisconnected(name: ComponentName?) {
            Log.d(TAG, "Service disconnected")
            gpsTrackingService = null
            serviceBound = false
            _isTracking.value = false
        }
    }

    init {
        database = AppDatabase.getDatabase(application)
        repository = TripRepository(database)
    }

    /**
     * Bind to the GPS tracking service
     */
    fun bindToService(context: Context) {
        val intent = Intent(context, GpsTrackingService::class.java)
        context.bindService(intent, serviceConnection, Context.BIND_AUTO_CREATE)
    }

    /**
     * Unbind from the GPS tracking service
     */
    fun unbindFromService(context: Context) {
        if (serviceBound) {
            context.unbindService(serviceConnection)
            serviceBound = false
        }
    }

    /**
     * Start a new trip with GPS tracking
     * Validates that the boat exists before starting the trip
     * Prevents starting a new trip if one is already active
     */
    fun startTrip(
        context: Context,
        boatId: String,
        waterType: String = GpsTrackingService.DEFAULT_WATER_TYPE,
        role: String = GpsTrackingService.DEFAULT_ROLE,
        updateIntervalMs: Long = GpsTrackingService.DEFAULT_UPDATE_INTERVAL_MS
    ) {
        Log.d(TAG, "Starting trip for boat: $boatId, waterType: $waterType, role: $role")
        
        // Clear any previous error messages
        _errorMessage.value = null
        
        // Check if a trip is already active
        if (_isTracking.value == true) {
            val errorMsg = "A trip is already in progress. Please stop the current trip first."
            Log.e(TAG, "Failed to start trip: $errorMsg")
            _errorMessage.value = errorMsg
            return
        }
        
        // Validate boat exists before starting trip
        viewModelScope.launch {
            try {
                val boat = database.boatDao().getBoatById(boatId)
                
                if (boat == null) {
                    val errorMsg = "Boat not found. Please select a valid boat."
                    Log.e(TAG, "Failed to start trip: $errorMsg (boatId: $boatId)")
                    _errorMessage.value = errorMsg
                    return@launch
                }
                
                if (!boat.enabled) {
                    val errorMsg = "Boat '${boat.name}' is disabled. Please enable it first."
                    Log.e(TAG, "Failed to start trip: $errorMsg")
                    _errorMessage.value = errorMsg
                    return@launch
                }
                
                Log.d(TAG, "Boat validated: ${boat.name} (${boat.id})")
                
                // Boat exists and is enabled, start the service
                val intent = Intent(context, GpsTrackingService::class.java).apply {
                    action = GpsTrackingService.ACTION_START_TRIP
                    putExtra(GpsTrackingService.EXTRA_BOAT_ID, boatId)
                    putExtra(GpsTrackingService.EXTRA_WATER_TYPE, waterType)
                    putExtra(GpsTrackingService.EXTRA_ROLE, role)
                    putExtra(GpsTrackingService.EXTRA_UPDATE_INTERVAL, updateIntervalMs)
                }
                
                Log.d(TAG, "Starting GPS tracking service")
                context.startForegroundService(intent)
                _isTracking.value = true
                Log.d(TAG, "Trip started successfully")
                
            } catch (e: Exception) {
                val errorMsg = "Failed to start trip: ${e.message}"
                Log.e(TAG, errorMsg, e)
                _errorMessage.value = errorMsg
            }
        }
    }
    
    /**
     * Clear error message
     */
    fun clearError() {
        _errorMessage.value = null
    }

    /**
     * Stop the current trip
     */
    fun stopTrip(context: Context) {
        val intent = Intent(context, GpsTrackingService::class.java).apply {
            action = GpsTrackingService.ACTION_STOP_TRIP
        }
        
        context.startService(intent)
        _isTracking.value = false
        _currentTripId.value = null
        _currentTrip.value = null
    }

    /**
     * Get all trips
     */
    fun getAllTrips(): Flow<List<TripEntity>> {
        return repository.getAllTrips()
    }

    /**
     * Get a specific trip by ID
     */
    fun loadTrip(tripId: String) {
        viewModelScope.launch {
            val trip = repository.getTripById(tripId)
            _currentTrip.value = trip
        }
    }

    /**
     * Get GPS points for a trip
     */
    fun getGpsPointsForTrip(tripId: String): Flow<List<GpsPointEntity>> {
        return repository.getGpsPointsForTrip(tripId)
    }

    /**
     * Calculate statistics for a trip
     */
    suspend fun calculateTripStatistics(tripId: String): TripStatistics {
        return repository.calculateTripStatistics(tripId)
    }

    /**
     * Update trip details (water type, role, manual data)
     */
    fun updateTrip(trip: TripEntity) {
        viewModelScope.launch {
            repository.updateTrip(trip)
            if (trip.id == _currentTripId.value) {
                _currentTrip.value = trip
            }
        }
    }

    /**
     * Delete a trip
     */
    fun deleteTrip(trip: TripEntity) {
        viewModelScope.launch {
            repository.deleteTrip(trip)
        }
    }

    override fun onCleared() {
        super.onCleared()
        // Note: Service unbinding should be done in the Activity/Fragment lifecycle
    }
}
