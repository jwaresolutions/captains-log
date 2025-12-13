package com.captainslog.viewmodel

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.captainslog.connection.ConnectionManager
import com.captainslog.database.AppDatabase
import com.captainslog.database.entities.MaintenanceCompletionEntity
import com.captainslog.database.entities.MaintenanceTaskEntity
import com.captainslog.network.models.NotificationResponse
import com.captainslog.network.models.RecurrenceSchedule
import com.captainslog.repository.MaintenanceRepository
import com.captainslog.repository.NotificationRepository
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch

import java.util.*
import java.util.Calendar

class MaintenanceViewModel(context: Context) : ViewModel() {
    
    private val maintenanceRepository: MaintenanceRepository
    private val notificationRepository: NotificationRepository
    private val connectionManager: ConnectionManager

    init {
        val database = AppDatabase.getDatabase(context)
        connectionManager = ConnectionManager.getInstance(context)
        connectionManager.initialize()
        
        // Initialize repository with lazy API service initialization
        maintenanceRepository = MaintenanceRepository(
            connectionManager = connectionManager,
            maintenanceTaskDao = database.maintenanceTaskDao(),
            maintenanceCompletionDao = database.maintenanceCompletionDao()
        )
        notificationRepository = NotificationRepository(connectionManager)
    }

    private val _uiState = MutableStateFlow(MaintenanceUiState())
    val uiState: StateFlow<MaintenanceUiState> = _uiState.asStateFlow()

    private val _selectedBoatId = MutableStateFlow<String?>(null)
    val selectedBoatId: StateFlow<String?> = _selectedBoatId.asStateFlow()

    // Get all maintenance tasks (one copy of recurring + incomplete non-recurring)
    val allTasks: Flow<List<MaintenanceTaskEntity>> by lazy {
        selectedBoatId.flatMapLatest { boatId ->
            if (boatId != null) {
                maintenanceRepository.getTasksByBoat(boatId)
            } else {
                maintenanceRepository.getAllTasks()
            }
        }.map { tasks ->
            tasks.filter { task ->
                // Include if: recurring task (show one copy) OR non-recurring incomplete task
                task.recurrenceType != null || !isTaskCompletedSync(task)
            }.sortedBy { it.dueDate }
        }
    }

    // Get upcoming events (generates multiple events for recurring tasks)
    val upcomingTasks: Flow<List<MaintenanceTaskEntity>> by lazy {
        selectedBoatId.flatMapLatest { boatId ->
            if (boatId != null) {
                maintenanceRepository.getTasksByBoat(boatId)
            } else {
                maintenanceRepository.getAllTasks()
            }
        }.map { tasks ->
            generateUpcomingEvents(tasks)
        }
    }

    // Get completed tasks (last 50 by default, configurable in settings)
    val completedTasks: Flow<List<MaintenanceCompletionEntity>> by lazy {
        selectedBoatId.flatMapLatest { boatId ->
            if (boatId != null) {
                maintenanceRepository.getCompletedTasksByBoat(boatId, limit = 50)
            } else {
                maintenanceRepository.getAllCompletedTasks(limit = 50)
            }
        }
    }

    fun setSelectedBoat(boatId: String?) {
        _selectedBoatId.value = boatId
    }

    fun createMaintenanceTask(
        boatId: String,
        title: String,
        description: String? = null,
        component: String? = null,
        dueDate: Date,
        recurrence: RecurrenceSchedule? = null
    ) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = maintenanceRepository.createMaintenanceTask(
                boatId = boatId,
                title = title,
                description = description,
                component = component,
                dueDate = dueDate,
                recurrence = recurrence
            )
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        message = "Maintenance task created successfully"
                    )
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to create maintenance task"
                    )
                }
            )
        }
    }

    fun updateMaintenanceTask(
        id: String,
        title: String? = null,
        description: String? = null,
        component: String? = null,
        dueDate: Date? = null,
        recurrence: RecurrenceSchedule? = null
    ) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = maintenanceRepository.updateMaintenanceTask(
                id = id,
                title = title,
                description = description,
                component = component,
                dueDate = dueDate,
                recurrence = recurrence
            )
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        message = "Maintenance task updated successfully"
                    )
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to update maintenance task"
                    )
                }
            )
        }
    }

    fun completeMaintenanceTask(
        id: String,
        cost: Double? = null,
        notes: String? = null
    ) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = maintenanceRepository.completeMaintenanceTask(
                id = id,
                cost = cost,
                notes = notes
            )
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        message = "Maintenance task completed successfully"
                    )
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to complete maintenance task"
                    )
                }
            )
        }
    }

    fun deleteMaintenanceTask(id: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = maintenanceRepository.deleteMaintenanceTask(id)
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        message = "Maintenance task deleted successfully"
                    )
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to delete maintenance task"
                    )
                }
            )
        }
    }

    fun getTaskById(id: String): Flow<MaintenanceTaskEntity?> = flow {
        emit(maintenanceRepository.getTaskById(id))
    }

    fun getCompletionsByTask(taskId: String): Flow<List<MaintenanceCompletionEntity>> =
        maintenanceRepository.getCompletionsByTask(taskId)

    fun syncMaintenanceTasks() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = maintenanceRepository.syncMaintenanceTasks()
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        message = "Maintenance tasks synced successfully"
                    )
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to sync maintenance tasks"
                    )
                }
            )
        }
    }

    fun clearMessage() {
        _uiState.value = _uiState.value.copy(message = null)
    }

    fun clearError() {
        _uiState.value = _uiState.value.copy(error = null)
    }

    // Helper functions for UI
    fun isTaskOverdue(task: MaintenanceTaskEntity): Boolean {
        return task.dueDate.before(Date())
    }

    fun isTaskDueSoon(task: MaintenanceTaskEntity, days: Int = 7): Boolean {
        val cutoffDate = Calendar.getInstance().apply {
            add(Calendar.DAY_OF_MONTH, days)
        }.time
        
        return task.dueDate.before(cutoffDate) && !isTaskOverdue(task)
    }

    fun getDaysUntilDue(task: MaintenanceTaskEntity): Long {
        val now = Date()
        val diffInMillis = task.dueDate.time - now.time
        return diffInMillis / (1000 * 60 * 60 * 24)
    }

    fun formatRecurrence(task: MaintenanceTaskEntity): String? {
        if (task.recurrenceType == null || task.recurrenceInterval == null) {
            return null
        }
        
        val interval = task.recurrenceInterval
        val type = when (task.recurrenceType) {
            "days" -> if (interval == 1) "day" else "days"
            "weeks" -> if (interval == 1) "week" else "weeks"
            "months" -> if (interval == 1) "month" else "months"
            "years" -> if (interval == 1) "year" else "years"
            "engine_hours" -> "engine hours"
            else -> task.recurrenceType
        }
        
        return "Every $interval $type"
    }

    // Helper method to check if a task is completed (synchronous for use in flows)
    private fun isTaskCompletedSync(task: MaintenanceTaskEntity): Boolean {
        return try {
            // For now, return false - this would need to be implemented properly
            // with a synchronous database query or cached completion data
            false
        } catch (e: Exception) {
            false
        }
    }

    // Get task color based on due date
    fun getTaskColor(task: MaintenanceTaskEntity): TaskColor {
        val now = Date()
        val daysUntilDue = getDaysUntilDue(task)
        
        return when {
            task.dueDate.before(now) -> TaskColor.RED // Past due
            daysUntilDue <= 0 -> TaskColor.YELLOW // Today to 7 days
            daysUntilDue <= 7 -> TaskColor.YELLOW // Today to 7 days  
            daysUntilDue <= 30 -> TaskColor.GREEN // 8-30 days
            else -> TaskColor.GRAY // 30+ days
        }
    }

    // Generate upcoming events for the next 90 days
    private fun generateUpcomingEvents(tasks: List<MaintenanceTaskEntity>): List<MaintenanceTaskEntity> {
        val events = mutableListOf<MaintenanceTaskEntity>()
        val now = Date()
        val future90Days = Calendar.getInstance().apply {
            add(Calendar.DAY_OF_MONTH, 90)
        }.time
        
        tasks.forEach { task ->
            if (task.recurrenceType != null && task.recurrenceInterval != null) {
                // Generate multiple events for recurring tasks
                val occurrences = generateRecurringOccurrences(task, now, future90Days)
                events.addAll(occurrences)
            } else {
                // Non-recurring task - include if within range and not completed
                if ((task.dueDate.before(now) && !isTaskCompletedSync(task)) ||
                    (task.dueDate.after(now) && task.dueDate.before(future90Days)) ||
                    task.dueDate == future90Days) {
                    events.add(task)
                }
            }
        }
        
        return events.sortedBy { it.dueDate }
    }
    
    // Generate recurring occurrences within the date range
    private fun generateRecurringOccurrences(
        task: MaintenanceTaskEntity, 
        startDate: Date, 
        endDate: Date
    ): List<MaintenanceTaskEntity> {
        val occurrences = mutableListOf<MaintenanceTaskEntity>()
        val calendar = Calendar.getInstance()
        calendar.time = task.dueDate
        
        // Find the first occurrence after or equal to startDate
        while (calendar.time.before(startDate)) {
            addRecurrenceInterval(calendar, task.recurrenceType!!, task.recurrenceInterval!!)
        }
        
        // Generate occurrences until endDate
        var occurrenceCount = 0
        while (calendar.time.before(endDate) || calendar.time == endDate) {
            // Create a copy of the task with the new due date
            val occurrence = task.copy(
                id = "${task.id}_occurrence_${occurrenceCount}",
                dueDate = Date(calendar.timeInMillis)
            )
            occurrences.add(occurrence)
            occurrenceCount++
            
            // Move to next occurrence
            addRecurrenceInterval(calendar, task.recurrenceType!!, task.recurrenceInterval!!)
            
            // Safety limit to prevent infinite loops
            if (occurrenceCount > 10) break
        }
        
        return occurrences
    }
    
    // Add recurrence interval to calendar
    private fun addRecurrenceInterval(calendar: Calendar, type: String, interval: Int) {
        when (type) {
            "days" -> calendar.add(Calendar.DAY_OF_MONTH, interval)
            "weeks" -> calendar.add(Calendar.WEEK_OF_YEAR, interval)
            "months" -> calendar.add(Calendar.MONTH, interval)
            "years" -> calendar.add(Calendar.YEAR, interval)
        }
    }

    // Notification handling (lazy initialization)
    val notifications: Flow<List<NotificationResponse>> by lazy { notificationRepository.notifications }

    fun fetchNotifications() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            val result = notificationRepository.fetchNotifications()
            
            result.fold(
                onSuccess = {
                    _uiState.value = _uiState.value.copy(isLoading = false)
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        isLoading = false,
                        error = error.message ?: "Failed to fetch notifications"
                    )
                }
            )
        }
    }

    fun markNotificationAsRead(id: String) {
        viewModelScope.launch {
            val result = notificationRepository.markNotificationAsRead(id)
            
            result.fold(
                onSuccess = {
                    // Notification state is updated in the repository
                },
                onFailure = { error ->
                    _uiState.value = _uiState.value.copy(
                        error = error.message ?: "Failed to mark notification as read"
                    )
                }
            )
        }
    }

    fun getUnreadNotifications(): List<NotificationResponse> {
        return notificationRepository.getUnreadNotifications()
    }

    fun getMaintenanceNotifications(): List<NotificationResponse> {
        return notificationRepository.getMaintenanceNotifications()
    }
}

enum class TaskColor {
    RED,    // Past due
    YELLOW, // Today to 7 days
    GREEN,  // 8-30 days
    GRAY    // 30+ days
}

data class MaintenanceUiState(
    val isLoading: Boolean = false,
    val error: String? = null,
    val message: String? = null
)