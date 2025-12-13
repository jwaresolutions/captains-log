package com.captainslog.repository

import com.captainslog.database.AppDatabase
import com.captainslog.database.entities.BoatEntity
import com.captainslog.connection.ConnectionManager
import com.captainslog.network.ApiService
import com.captainslog.network.models.CreateBoatRequest
import kotlinx.coroutines.flow.Flow
import java.util.Date

/**
 * Repository for managing boat data.
 * Handles both local database operations and API synchronization.
 */
class BoatRepository(
    private val database: AppDatabase,
    private val connectionManager: ConnectionManager
) {

    /**
     * Get all boats as a Flow for reactive updates
     */
    fun getAllBoats(): Flow<List<BoatEntity>> {
        return database.boatDao().getAllBoats()
    }

    /**
     * Get a specific boat by ID
     */
    suspend fun getBoatById(boatId: String): BoatEntity? {
        return database.boatDao().getBoatById(boatId)
    }

    /**
     * Get the currently active boat
     */
    suspend fun getActiveBoat(): BoatEntity? {
        return database.boatDao().getActiveBoat()
    }

    /**
     * Create a new boat locally and sync to API
     */
    suspend fun createBoat(name: String): Result<BoatEntity> {
        return try {
            // Create boat locally first
            val boat = BoatEntity(
                name = name,
                enabled = true,
                isActive = false,
                synced = false,
                lastModified = Date(),
                createdAt = Date()
            )
            
            database.boatDao().insertBoat(boat)
            
            // Try to sync to API
            try {
                val apiService = connectionManager.getApiService()
                val response = apiService.createBoat(CreateBoatRequest(name = name))
                if (response.isSuccessful && response.body() != null) {
                    val apiBoat = response.body()!!
                    // Update local boat with server ID and mark as synced
                    val syncedBoat = boat.copy(
                        id = apiBoat.id,
                        isActive = apiBoat.isActive,
                        synced = true
                    )
                    database.boatDao().insertBoat(syncedBoat)
                    Result.success(syncedBoat)
                } else {
                    // API call failed, but boat is saved locally
                    Result.success(boat)
                }
            } catch (e: Exception) {
                // Network error, but boat is saved locally
                Result.success(boat)
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Update boat enabled status
     */
    suspend fun updateBoatStatus(boatId: String, enabled: Boolean): Result<Unit> {
        return try {
            val boat = database.boatDao().getBoatById(boatId)
            if (boat != null) {
                val updatedBoat = boat.copy(
                    enabled = enabled,
                    synced = false,
                    lastModified = Date()
                )
                database.boatDao().updateBoat(updatedBoat)
                
                // Try to sync to API
                try {
                    val apiService = connectionManager.getApiService()
                    apiService.updateBoatStatus(boatId, mapOf("enabled" to enabled))
                    database.boatDao().markAsSynced(boatId)
                } catch (e: Exception) {
                    // Network error, will sync later
                }
                
                Result.success(Unit)
            } else {
                Result.failure(Exception("Boat not found"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Set a boat as the active boat
     */
    suspend fun setActiveBoat(boatId: String): Result<Unit> {
        return try {
            // Clear all active boats first
            database.boatDao().clearActiveBoat()
            
            // Set the new active boat
            database.boatDao().setActiveBoat(boatId)
            
            // Mark as unsynced
            val boat = database.boatDao().getBoatById(boatId)
            if (boat != null) {
                database.boatDao().updateBoat(boat.copy(synced = false, lastModified = Date()))
            }
            
            // Try to sync to API
            try {
                val apiService = connectionManager.getApiService()
                apiService.setActiveBoat(boatId)
                database.boatDao().markAsSynced(boatId)
            } catch (e: Exception) {
                // Network error, will sync later
            }
            
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Sync boats from API to local database
     */
    suspend fun syncBoatsFromApi(): Result<Unit> {
        return try {
            val apiService = connectionManager.getApiService()
            val response = apiService.getBoats()
            if (response.isSuccessful && response.body() != null) {
                val apiBoats = response.body()!!.data
                val localBoats = apiBoats.map { apiBoat ->
                    BoatEntity(
                        id = apiBoat.id,
                        name = apiBoat.name,
                        enabled = apiBoat.enabled,
                        isActive = apiBoat.isActive,
                        synced = true,
                        lastModified = Date(),
                        createdAt = Date()
                    )
                }
                database.boatDao().insertBoats(localBoats)
                Result.success(Unit)
            } else {
                Result.failure(Exception("Failed to fetch boats from API"))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    /**
     * Sync unsynced boats to API
     */
    suspend fun syncBoatsToApi(): Result<Unit> {
        return try {
            val apiService = connectionManager.getApiService()
            val unsyncedBoats = database.boatDao().getUnsyncedBoats()
            for (boat in unsyncedBoats) {
                try {
                    // Try to update or create on server
                    val response = apiService.getBoat(boat.id)
                    if (response.isSuccessful) {
                        // Boat exists, update it
                        apiService.updateBoat(boat.id, CreateBoatRequest(name = boat.name))
                        if (boat.isActive) {
                            apiService.setActiveBoat(boat.id)
                        }
                        apiService.updateBoatStatus(boat.id, mapOf("enabled" to boat.enabled))
                    } else {
                        // Boat doesn't exist, create it
                        val createResponse = apiService.createBoat(CreateBoatRequest(name = boat.name))
                        if (createResponse.isSuccessful && createResponse.body() != null) {
                            val apiBoat = createResponse.body()!!
                            // Update local boat with server ID
                            val syncedBoat = boat.copy(id = apiBoat.id)
                            database.boatDao().insertBoat(syncedBoat)
                        }
                    }
                    database.boatDao().markAsSynced(boat.id)
                } catch (e: Exception) {
                    // Continue with next boat
                }
            }
            Result.success(Unit)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
