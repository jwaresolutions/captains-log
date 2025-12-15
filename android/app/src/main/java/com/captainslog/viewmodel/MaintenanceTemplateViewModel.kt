package com.captainslog.viewmodel

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.captainslog.database.AppDatabase
import com.captainslog.database.entities.MaintenanceTemplateEntity
import com.captainslog.database.entities.MaintenanceEventEntity

import kotlinx.coroutines.flow.*
import kotlinx.coroutines.launch
import java.util.*

data class MaintenanceTemplateUiState(
    val isLoading: Boolean = false,
    val error: String? = null,
    val message: String? = null
)

class MaintenanceTemplateViewModel(context: Context) : ViewModel() {
    private val database = AppDatabase.getDatabase(context)
    private val templateDao = database.maintenanceTemplateDao()
    private val eventDao = database.maintenanceEventDao()


    private val _uiState = MutableStateFlow(MaintenanceTemplateUiState())
    val uiState: StateFlow<MaintenanceTemplateUiState> = _uiState.asStateFlow()

    // Templates (Schedule tab)
    val allTemplates: Flow<List<MaintenanceTemplateEntity>> = templateDao.getAllActiveTemplates()

    // Events (Upcoming and Complete tabs)
    val upcomingEvents: Flow<List<MaintenanceEventEntity>> = eventDao.getUpcomingEvents()
    val completedEvents: Flow<List<MaintenanceEventEntity>> = eventDao.getCompletedEvents()

    fun getTemplateById(id: String): Flow<MaintenanceTemplateEntity?> {
        return templateDao.getTemplateById(id)
    }

    fun getEventById(id: String): Flow<MaintenanceEventEntity?> {
        return eventDao.getEventById(id)
    }

    fun getEventsByTemplate(templateId: String): Flow<List<MaintenanceEventEntity>> {
        return eventDao.getEventsByTemplate(templateId)
    }

    fun createTemplate(
        boatId: String,
        title: String,
        description: String,
        component: String,
        estimatedCost: Double?,
        estimatedTime: Int?,
        recurrenceType: String,
        recurrenceInterval: Int
    ) {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true, error = null)

                val template = MaintenanceTemplateEntity(
                    boatId = boatId,
                    title = title,
                    description = description,
                    component = component,
                    estimatedCost = estimatedCost,
                    estimatedTime = estimatedTime,
                    recurrenceType = recurrenceType,
                    recurrenceInterval = recurrenceInterval
                )

                // Save locally first
                templateDao.insertTemplate(template)

                // TODO: Sync to backend API
                // connectionManager.createMaintenanceTemplate(template)

                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    message = "Template created successfully"
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = "Failed to create template: ${e.message}"
                )
            }
        }
    }

    fun updateTemplate(template: MaintenanceTemplateEntity) {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true, error = null)

                val updatedTemplate = template.copy(updatedAt = Date())
                templateDao.updateTemplate(updatedTemplate)

                // TODO: Sync to backend API
                // connectionManager.updateMaintenanceTemplate(updatedTemplate)

                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    message = "Template updated successfully"
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = "Failed to update template: ${e.message}"
                )
            }
        }
    }

    fun deleteTemplate(templateId: String) {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true, error = null)

                templateDao.deleteTemplateById(templateId)

                // TODO: Sync to backend API
                // connectionManager.deleteMaintenanceTemplate(templateId)

                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    message = "Template deleted successfully"
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = "Failed to delete template: ${e.message}"
                )
            }
        }
    }

    fun completeEvent(
        eventId: String,
        actualCost: Double?,
        actualTime: Int?,
        notes: String?
    ) {
        viewModelScope.launch {
            try {
                _uiState.value = _uiState.value.copy(isLoading = true, error = null)

                eventDao.completeEvent(eventId, Date(), actualCost, actualTime, notes)

                // TODO: Sync to backend API
                // connectionManager.completeMaintenanceEvent(eventId, actualCost, actualTime, notes)

                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    message = "Event completed successfully"
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = "Failed to complete event: ${e.message}"
                )
            }
        }
    }

    fun formatRecurrence(template: MaintenanceTemplateEntity): String {
        val interval = template.recurrenceInterval
        val type = template.recurrenceType
        
        return when (type) {
            "days" -> if (interval == 1) "Daily" else "Every $interval days"
            "weeks" -> if (interval == 1) "Weekly" else "Every $interval weeks"
            "months" -> if (interval == 1) "Monthly" else "Every $interval months"
            "years" -> if (interval == 1) "Yearly" else "Every $interval years"
            "engine_hours" -> "Every $interval engine hours"
            else -> "Every $interval $type"
        }
    }

    fun getDaysUntilDue(event: MaintenanceEventEntity): Long {
        val now = Date()
        val diffInMillis = event.dueDate.time - now.time
        return diffInMillis / (1000 * 60 * 60 * 24)
    }

    fun getEventColor(event: MaintenanceEventEntity): TaskColor {
        if (event.completedAt != null) return TaskColor.GREEN
        
        val daysUntilDue = getDaysUntilDue(event)
        return when {
            daysUntilDue < 0 -> TaskColor.RED // Overdue
            daysUntilDue <= 7 -> TaskColor.YELLOW // Due soon
            else -> TaskColor.GRAY // Future
        }
    }

    fun clearMessage() {
        _uiState.value = _uiState.value.copy(message = null)
    }

    fun clearError() {
        _uiState.value = _uiState.value.copy(error = null)
    }
}

