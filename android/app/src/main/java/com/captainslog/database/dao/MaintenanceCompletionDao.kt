package com.captainslog.database.dao

import androidx.room.*
import com.captainslog.database.entities.MaintenanceCompletionEntity
import kotlinx.coroutines.flow.Flow

@Dao
interface MaintenanceCompletionDao {
    
    @Query("SELECT * FROM maintenance_completions WHERE maintenanceTaskId = :taskId ORDER BY completedAt DESC")
    fun getCompletionsByTask(taskId: String): Flow<List<MaintenanceCompletionEntity>>
    
    @Query("SELECT * FROM maintenance_completions WHERE maintenanceTaskId = :taskId ORDER BY completedAt DESC")
    suspend fun getCompletionsByTaskSync(taskId: String): List<MaintenanceCompletionEntity>
    
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
    
    @Query("SELECT * FROM maintenance_completions ORDER BY completedAt DESC LIMIT :limit")
    fun getAllCompletions(limit: Int): Flow<List<MaintenanceCompletionEntity>>
    
    @Query("""
        SELECT mc.* FROM maintenance_completions mc 
        INNER JOIN maintenance_tasks mt ON mc.maintenanceTaskId = mt.id 
        WHERE mt.boatId = :boatId 
        ORDER BY mc.completedAt DESC 
        LIMIT :limit
    """)
    fun getCompletionsByBoat(boatId: String, limit: Int): Flow<List<MaintenanceCompletionEntity>>
}