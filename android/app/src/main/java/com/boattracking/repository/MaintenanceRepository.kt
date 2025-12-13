package com.boattracking.repository

import android.util.Log
import com.boattracking.database.dao.MaintenanceCompletionDao
import com.boattracking.database.dao.MaintenanceTaskDao
import com.boattracking.database.entities.MaintenanceCompletionEntity
import com.boattracking.database.entities.MaintenanceTaskEntity
import com.boattracking.connection.ConnectionManager
import com.boattracking.network.ApiService
import com.boattracking.network.models.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map
import java.text.SimpleDateFormat
import java.util.*
class MaintenanceRepository(
    private val connectionManager: ConnectionManager,
    private val maintenanceTaskDao: MaintenanceTaskDao,
    private val maintenanceCompletionDao: MaintenanceCompletionDao
) {
    companion object {
        private const val TAG = "MaintenanceRepository"
        private val dateFormat = SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.US).apply {
            timeZone = TimeZone.getTimeZone("UTC")
        }
    }

    // Local data access
    fun getAllTasks(): Flow<List<MaintenanceTaskEntity>> = maintenanceTaskDao.getAllTasks()

    fun getTasksByBoat(boatId: String): Flow<List<MaintenanceTaskEntity>> = 
        maintenanceTaskDao.getTasksByBoat(boatId)

    suspend fun getTaskById(id: String): MaintenanceTaskEntity? = 
        maintenanceTaskDao.getTaskById(id)

    fun getCompletionsByTask(taskId: String): Flow<List<MaintenanceCompletionEntity>> = 
        maintenanceCompletionDao.getCompletionsByTask(taskId)

    // API operations with local caching
    suspend fun createMaintenanceTask(
        boatId: String,
        title: String,
        description: String? = null,
        component: String? = null,
        dueDate: Date,
        recurrence: RecurrenceSchedule? = null
    ): Result<MaintenanceTaskEntity> {
        return try {
            println("Repository: Creating request object")
            val request = CreateMaintenanceTaskRequest(
                boatId = boatId,
                title = title,
                description = description,
                component = component,
                dueDate = dateFormat.format(dueDate),
                recurrence = recurrence
            )

            // For now, force offline mode to bypass connection issues
            println("Repository: Forcing offline mode")
            val taskEntity = MaintenanceTaskEntity(
                id = UUID.randomUUID().toString(),
                boatId = boatId,
                title = title,
                description = description,
                component = component,
                dueDate = dueDate,
                recurrenceType = recurrence?.type,
                recurrenceInterval = recurrence?.interval,
                createdAt = Date(),
                updatedAt = Date(),
                synced = false
            )
            println("Repository: Inserting task offline")
            maintenanceTaskDao.insertTask(taskEntity)
            println("Repository: Task inserted, returning success")
            Log.d(TAG, "Created maintenance task offline: ${taskEntity.title}")
            return Result.success(taskEntity)
        } catch (e: Exception) {
            println("Repository: Exception in createMaintenanceTask: ${e.message}")
            Log.e(TAG, "Error creating maintenance task", e)
            
            // Save locally for offline sync as fallback
            val taskEntity = MaintenanceTaskEntity(
                id = UUID.randomUUID().toString(),
                boatId = boatId,
                title = title,
                description = description,
                component = component,
                dueDate = dueDate,
                recurrenceType = recurrence?.type,
                recurrenceInterval = recurrence?.interval,
                createdAt = Date(),
                updatedAt = Date(),
                synced = false
            )
            
            maintenanceTaskDao.insertTask(taskEntity)
            Log.d(TAG, "Created maintenance task offline (exception): ${taskEntity.title}")
            Result.success(taskEntity)
        }
    }

    suspend fun updateMaintenanceTask(
        id: String,
        title: String? = null,
        description: String? = null,
        component: String? = null,
        dueDate: Date? = null,
        recurrence: RecurrenceSchedule? = null
    ): Result<MaintenanceTaskEntity> {
        return try {
            println("Repository: Updating maintenance task offline")
            
            // Update locally (force offline mode like create)
            val existingTask = maintenanceTaskDao.getTaskById(id)
            if (existingTask != null) {
                val updatedTask = existingTask.copy(
                    title = title ?: existingTask.title,
                    description = description ?: existingTask.description,
                    component = component ?: existingTask.component,
                    dueDate = dueDate ?: existingTask.dueDate,
                    recurrenceType = recurrence?.type ?: existingTask.recurrenceType,
                    recurrenceInterval = recurrence?.interval ?: existingTask.recurrenceInterval,
                    updatedAt = Date(),
                    synced = false
                )
                println("Repository: Updating task in database")
                maintenanceTaskDao.updateTask(updatedTask)
                Log.d(TAG, "Updated maintenance task offline: ${updatedTask.title}")
                println("Repository: Task updated successfully")
                Result.success(updatedTask)
            } else {
                val error = "Task not found with id: $id"
                Log.e(TAG, error)
                Result.failure(Exception(error))
            }
        } catch (e: Exception) {
            println("Repository: Exception updating task: ${e.message}")
            Log.e(TAG, "Error updating maintenance task", e)
            Result.failure(e)
        }
    }

    suspend fun completeMaintenanceTask(
        id: String,
        cost: Double? = null,
        notes: String? = null
    ): Result<MaintenanceCompletionEntity> {
        return try {
            val request = CompleteMaintenanceTaskRequest(
                cost = cost,
                notes = notes
            )

            val apiService = connectionManager.getApiService()
            val response = apiService.completeMaintenanceTask(id, request)
            if (response.isSuccessful && response.body() != null) {
                val taskResponse = response.body()!!
                
                // Update the task
                val taskEntity = taskResponse.toEntity()
                maintenanceTaskDao.updateTask(taskEntity)
                
                // Get the latest completion (first in the list since it's ordered by completedAt DESC)
                val latestCompletion = taskResponse.completions.firstOrNull()
                if (latestCompletion != null) {
                    val completionEntity = latestCompletion.toEntity()
                    maintenanceCompletionDao.insertCompletion(completionEntity)
                    
                    Log.d(TAG, "Completed maintenance task: ${taskEntity.title}")
                    Result.success(completionEntity)
                } else {
                    Result.failure(Exception("No completion data returned"))
                }
            } else {
                val error = "Failed to complete maintenance task: ${response.code()}"
                Log.e(TAG, error)
                Result.failure(Exception(error))
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error completing maintenance task", e)
            
            // Save completion locally for offline sync
            val completionEntity = MaintenanceCompletionEntity(
                id = UUID.randomUUID().toString(),
                maintenanceTaskId = id,
                completedAt = Date(),
                cost = cost,
                notes = notes,
                createdAt = Date(),
                synced = false
            )
            
            maintenanceCompletionDao.insertCompletion(completionEntity)
            Result.success(completionEntity)
        }
    }

    suspend fun deleteMaintenanceTask(id: String): Result<Unit> {
        return try {
            println("Repository: Deleting maintenance task offline")
            
            // Delete from local database (force offline mode)
            maintenanceTaskDao.deleteTaskById(id)
            
            Log.d(TAG, "Deleted maintenance task offline: $id")
            println("Repository: Task deleted successfully")
            Result.success(Unit)
        } catch (e: Exception) {
            println("Repository: Exception deleting task: ${e.message}")
            Log.e(TAG, "Error deleting maintenance task", e)
            Result.failure(e)
        }
    }

    suspend fun syncMaintenanceTasks(): Result<Unit> {
        return try {
            Log.d(TAG, "Starting maintenance tasks sync")
            
            // Fetch all tasks from server
            val apiService = try {
                connectionManager.getApiService()
            } catch (e: IllegalStateException) {
                Log.w(TAG, "API service not initialized, cannot sync: ${e.message}")
                return Result.failure(e)
            }
            
            val response = apiService.getMaintenanceTasks()
            if (response.isSuccessful && response.body() != null) {
                val serverTasks = response.body()!!
                
                // Clear local data and insert server data
                maintenanceTaskDao.deleteAll()
                maintenanceCompletionDao.deleteAll()
                
                serverTasks.forEach { taskResponse ->
                    val taskEntity = taskResponse.toEntity()
                    maintenanceTaskDao.insertTask(taskEntity)
                    
                    // Insert completions
                    taskResponse.completions.forEach { completion ->
                        maintenanceCompletionDao.insertCompletion(completion.toEntity())
                    }
                }
                
                Log.d(TAG, "Synced ${serverTasks.size} maintenance tasks")
                Result.success(Unit)
            } else {
                val error = "Failed to sync maintenance tasks: ${response.code()}"
                Log.e(TAG, error)
                Result.failure(Exception(error))
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error syncing maintenance tasks", e)
            Result.failure(e)
        }
    }

    suspend fun getUpcomingTasks(days: Int = 7): Result<List<MaintenanceTaskEntity>> {
        return try {
            val cutoffDate = Calendar.getInstance().apply {
                add(Calendar.DAY_OF_MONTH, days)
            }.time
            
            val tasks = maintenanceTaskDao.getUpcomingTasks(cutoffDate)
            Result.success(tasks)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting upcoming tasks", e)
            Result.failure(e)
        }
    }

    // Extension functions to convert between API models and entities
    private fun MaintenanceTaskResponse.toEntity(): MaintenanceTaskEntity {
        return MaintenanceTaskEntity(
            id = id,
            boatId = boatId,
            title = title,
            description = description,
            component = component,
            dueDate = parseDate(dueDate),
            recurrenceType = recurrence?.type,
            recurrenceInterval = recurrence?.interval,
            createdAt = parseDate(createdAt),
            updatedAt = parseDate(updatedAt),
            synced = true
        )
    }

    private fun MaintenanceCompletionResponse.toEntity(): MaintenanceCompletionEntity {
        return MaintenanceCompletionEntity(
            id = id,
            maintenanceTaskId = maintenanceTaskId,
            completedAt = parseDate(completedAt),
            cost = cost,
            notes = notes,
            createdAt = parseDate(createdAt),
            synced = true
        )
    }

    private fun parseDate(dateString: String): Date {
        return try {
            dateFormat.parse(dateString) ?: Date()
        } catch (e: Exception) {
            Log.w(TAG, "Failed to parse date: $dateString", e)
            Date()
        }
    }
}