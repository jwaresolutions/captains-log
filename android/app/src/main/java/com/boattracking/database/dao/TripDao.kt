package com.boattracking.database.dao

import androidx.room.*
import com.boattracking.database.entities.TripEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface TripDao {
    @Query("SELECT * FROM trips ORDER BY startTime DESC")
    fun getAllTrips(): Flow<List<TripEntity>>

    @Query("SELECT * FROM trips WHERE id = :tripId")
    suspend fun getTripById(tripId: String): TripEntity?

    @Query("SELECT * FROM trips WHERE synced = 0")
    suspend fun getUnsyncedTrips(): List<TripEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTrip(trip: TripEntity)

    @Update
    suspend fun updateTrip(trip: TripEntity)

    @Delete
    suspend fun deleteTrip(trip: TripEntity)

    @Query("UPDATE trips SET synced = 1 WHERE id = :tripId")
    suspend fun markAsSynced(tripId: String)
}
