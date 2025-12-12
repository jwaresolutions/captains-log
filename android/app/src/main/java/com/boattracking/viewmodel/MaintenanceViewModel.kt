package com.boattracking.viewmodel

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.boattracking.connection.ConnectionManager
import com.boattracking.database.AppDatabase
import com.boattracking.database.entities.MaintenanceCompletionEntity
import com.boattracking.database.entities.MaintenanceTaskEntity
import com.boattracking.network.models.NotificationResponse
import com.boattracking.network.models.RecurrenceSchedule
import com.boattracking.repository.MaintenanceRepository
import com.boattracking.repository.NotificationRepository
import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.util.*

class MaintenanceViewModel(context: Context) : ViewModel() {
    
    private val maintenanceRepository: MaintenanceRepository
    private val notificationRepository: NotificationRepository

    init {
        val database = AppDatabase.getDatabase(context)
        val connectionManager = ConnectionManager.getInstance(context)
        connectionManager.initialize()
        
        // Initialize repository - get API service synchronously in init
        val apiService = runBlocking { connectionManager.getApiService() }
        maintenanceRepository = MaintenanceRepository(
            apiService = apiService,
            maintenanceTaskDao = database.maintenanceTaskDao(),
            maintenanceCompletionDao = database.maintenanceCompletionDao()
        )
        notificationRepository = NotificationRepository(apiService)
        
        // Fetch notifications on init
        fetchNotifications()
    }

    private val _uiState = MutableStateFlow(MaintenanceUiState())
    val uiState: StateFlow<MaintenanceUiState> = _uiState.asStateFlow()

    private val _selectedBoatId = MutableStateFlow<String?>(null)
    val selectedBoatId: StateFlow<String?> = _selectedBoatId.asStateFlow()

    // Get all maintenance tasks
    val allTasks: Flow<List<MaintenanceTaskEntity>> = 
        selectedBoatId.flatMapLatest { boatId ->
            if (boatId != null) {
                maintenanceRepository.getTasksByBoat(boatId)
            } else {
                maintenanceRepository.getAllTasks()
            }
        }

    // Get upcoming tasks (due within 7 days)
    val upcomingTasks: Flow<List<MaintenanceTaskEntity>> = 
        allTasks.map { tasks ->
            val cutoffDate = Calendar.getInstance().apply {
                add(Calendar.DAY_OF_MONTH, 7)
            }.time
            
            tasks.filter { task ->
                task.dueDate.before(cutoffDate) || task.dueDate == cutoffDate
            }.sortedBy { it.dueDate }
        }

    // Get overdue tasks
    val overdueTasks: Flow<List<MaintenanceTaskEntity>> = 
        allTasks.map { tasks ->
            val now = Date()
            tasks.filter { task ->
                task.dueDate.before(now)
            }.sortedBy { it.dueDate }
        }

    init {
        syncMaintenanceTasks()
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

    // Notification handling
    val notifications: Flow<List<NotificationResponse>> = notificationRepository.notifications

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

data class MaintenanceUiState(
    val isLoading: Boolean = false,
    val error: String? = null,
    val message: String? = null
)