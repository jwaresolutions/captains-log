package com.boattracking.database.dao

import androidx.room.*
import com.boattracking.database.entities.MaintenanceCompletionEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface MaintenanceCompletionDao {
    
    @Query("SELECT * FROM maintenance_completions WHERE maintenanceTaskId = :taskId ORDER BY completedAt DESC")
    fun getCompletionsByTask(taskId: String): Flow<List<MaintenanceCompletionEntity>>
    
    @Query("SELECT * FROM maintenance_completions WHERE id = :id")
    suspend fun getCompletionById(id: String): MaintenanceCompletionEntity?
    
    @Query("SELECT * FROM maintenance_completions WHERE synced = 0")
    suspend fun getUnsyncedCompletions(): List<MaintenanceCompletionEntity>
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertCompletion(completion: MaintenanceCompletionEntity)
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertCompletions(completions: List<MaintenanceCompletionEntity>)
    
    @Update
    suspend fun updateCompletion(completion: MaintenanceCompletionEntity)
    
    @Delete
    suspend fun deleteCompletion(completion: MaintenanceCompletionEntity)
    
    @Query("DELETE FROM maintenance_completions WHERE id = :id")
    suspend fun deleteCompletionById(id: String)
    
    @Query("UPDATE maintenance_completions SET synced = 1 WHERE id = :id")
    suspend fun markAsSynced(id: String)
    
    @Query("DELETE FROM maintenance_completions")
    suspend fun deleteAll()
}