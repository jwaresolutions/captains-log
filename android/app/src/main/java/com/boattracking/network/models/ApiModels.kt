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
