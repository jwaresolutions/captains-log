package com.captainslog.database.dao

import androidx.room.*
import com.captainslog.database.entities.MaintenanceTaskEntity
import kotlinx.coroutines.flow.Flow
import java.util.Date

@Dao
interface MaintenanceTaskDao {
    
    @Query("SELECT * FROM maintenance_tasks ORDER BY dueDate ASC")
    fun getAllTasks(): Flow<List<MaintenanceTaskEntity>>
    
    @Query("SELECT * FROM maintenance_tasks WHERE boatId = :boatId ORDER BY dueDate ASC")
    fun getTasksByBoat(boatId: String): Flow<List<MaintenanceTaskEntity>>
    
    @Query("SELECT * FROM maintenance_tasks WHERE id = :id")
    suspend fun getTaskById(id: String): MaintenanceTaskEntity?
    
    @Query("SELECT * FROM maintenance_tasks WHERE dueDate <= :cutoffDate ORDER BY dueDate ASC")
    suspend fun getUpcomingTasks(cutoffDate: Date): List<MaintenanceTaskEntity>
    
    @Query("SELECT * FROM maintenance_tasks WHERE synced = 0")
    suspend fun getUnsyncedTasks(): List<MaintenanceTaskEntity>
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTask(task: MaintenanceTaskEntity)
    
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insertTasks(tasks: List<MaintenanceTaskEntity>)
    
    @Update
    suspend fun updateTask(task: MaintenanceTaskEntity)
    
    @Delete
    suspend fun deleteTask(task: MaintenanceTaskEntity)
    
    @Query("DELETE FROM maintenance_tasks WHERE id = :id")
    suspend fun deleteTaskById(id: String)
    
    @Query("UPDATE maintenance_tasks SET synced = 1 WHERE id = :id")
    suspend fun markAsSynced(id: String)
    
    @Query("DELETE FROM maintenance_tasks")
    suspend fun deleteAll()
}