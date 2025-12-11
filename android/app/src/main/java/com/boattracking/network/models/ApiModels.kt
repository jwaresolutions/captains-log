package com.boattracking.network.models

import com.google.gson.annotations.SerializedName

// Boat models
data class BoatResponse(
    val id: String,
    val name: String,
    val enabled: Boolean,
    val isActive: Boolean,
    val metadata: Map<String, Any>?,
    val createdAt: String,
    val updatedAt: String
)

data class CreateBoatRequest(
    val name: String,
    val metadata: Map<String, Any>? = null
)

// Trip models
data class TripResponse(
    val id: String,
    val boatId: String,
    val startTime: String,
    val endTime: String?,
    val waterType: String,
    val role: String,
    val gpsPoints: List<GpsPointResponse>?,
    val statistics: TripStatistics?,
    val manualData: ManualData?,
    val createdAt: String,
    val updatedAt: String
)

data class GpsPointResponse(
    val id: String,
    val latitude: Double,
    val longitude: Double,
    val altitude: Double?,
    val accuracy: Float?,
    val speed: Float?,
    val heading: Float?,
    val timestamp: String
)

data class TripStatistics(
    val durationSeconds: Long,
    val distanceMeters: Double,
    val averageSpeedKnots: Double,
    val maxSpeedKnots: Double,
    val stopPoints: List<StopPoint>?
)

data class StopPoint(
    val latitude: Double,
    val longitude: Double,
    val startTime: String,
    val endTime: String,
    val durationSeconds: Long
)

data class ManualData(
    val engineHours: Double?,
    val fuelConsumed: Double?,
    val weatherConditions: String?,
    val numberOfPassengers: Int?,
    val destination: String?
)

data class CreateTripRequest(
    val boatId: String,
    val startTime: String,
    val endTime: String?,
    val waterType: String = "inland",
    val role: String = "captain",
    val gpsPoints: List<CreateGpsPointRequest>,
    val manualData: ManualData? = null
)

data class CreateGpsPointRequest(
    val latitude: Double,
    val longitude: Double,
    val altitude: Double?,
    val accuracy: Float?,
    val speed: Float?,
    val heading: Float?,
    val timestamp: String
)

data class UpdateTripRequest(
    val waterType: String?,
    val role: String?,
    val manualData: ManualData?
)

// Authentication models
data class LoginRequest(
    val username: String,
    val password: String
)

data class LoginResponse(
    val user: UserResponse,
    val token: String,
    val expiresIn: String
)

data class UserResponse(
    val id: String,
    val username: String,
    val createdAt: String,
    val updatedAt: String
)

data class LogoutResponse(
    val message: String
)

data class ChangePasswordRequest(
    val currentPassword: String,
    val newPassword: String
)

data class ChangePasswordResponse(
    val message: String
)

// Captain's Log models
data class LicenseProgressResponse(
    val totalDays: Int,
    val totalHours: Double,
    val daysInLast3Years: Int,
    val hoursInLast3Years: Double,
    val daysRemaining360: Int,
    val daysRemaining90In3Years: Int,
    val estimatedCompletion360: String?,
    val estimatedCompletion90In3Years: String?,
    val averageDaysPerMonth: Double
)

data class SeaTimeDayResponse(
    val date: String, // YYYY-MM-DD format
    val totalHours: Double,
    val trips: List<SeaTimeDayTripResponse>
)

data class SeaTimeDayTripResponse(
    val id: String,
    val boatId: String,
    val startTime: String, // ISO format
    val endTime: String,   // ISO format
    val durationHours: Double
)

data class SeaTimeBreakdownResponse(
    val month: String, // YYYY-MM format
    val days: Int,
    val hours: Double
)

data class SeaTimeDayCheckResponse(
    val date: String,
    val isSeaTimeDay: Boolean
)

// Note models
data class NoteResponse(
    val id: String,
    val content: String,
    val type: String,
    val boatId: String?,
    val tripId: String?,
    val tags: List<String>,
    val createdAt: String,
    val updatedAt: String,
    val boat: BoatResponse?,
    val trip: TripResponse?
)

data class CreateNoteRequest(
    val content: String,
    val type: String,
    val boatId: String? = null,
    val tripId: String? = null,
    val tags: List<String> = emptyList()
)

data class UpdateNoteRequest(
    val content: String?,
    val tags: List<String>?
)

data class TagsResponse(
    val data: List<String>,
    val count: Int
)

// Todo models
data class TodoListResponse(
    val id: String,
    val title: String,
    val boatId: String?,
    val createdAt: String,
    val updatedAt: String,
    val items: List<TodoItemResponse>,
    val boat: BoatResponse?
)

data class TodoItemResponse(
    val id: String,
    val todoListId: String,
    val content: String,
    val completed: Boolean,
    val completedAt: String?,
    val createdAt: String,
    val updatedAt: String
)

data class CreateTodoListRequest(
    val title: String,
    val boatId: String? = null
)

data class UpdateTodoListRequest(
    val title: String?,
    val boatId: String?
)

data class CreateTodoItemRequest(
    val content: String
)

data class UpdateTodoItemRequest(
    val content: String?,
    val completed: Boolean?
)

// Generic response wrapper
data class ApiResponse<T>(
    val data: T?,
    val error: ApiError?
)

data class ApiError(
    val code: String,
    val message: String,
    val details: Any?
)
