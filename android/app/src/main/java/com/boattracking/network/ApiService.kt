package com.boattracking.network

import com.boattracking.network.models.*
import retrofit2.Response
import retrofit2.http.*

interface ApiService {
    // Health check endpoint (no auth required)
    @GET("health")
    suspend fun healthCheck(): Response<Unit>

    // Authentication endpoints (no auth required for login)
    @POST("api/v1/auth/login")
    suspend fun login(@Body request: LoginRequest): Response<LoginResponse>

    @POST("api/v1/auth/logout")
    suspend fun logout(): Response<LogoutResponse>

    @POST("api/v1/auth/change-password")
    suspend fun changePassword(@Body request: ChangePasswordRequest): Response<ChangePasswordResponse>

    // Boat endpoints
    @POST("api/v1/boats")
    suspend fun createBoat(@Body request: CreateBoatRequest): Response<BoatResponse>

    @GET("api/v1/boats")
    suspend fun getBoats(): Response<List<BoatResponse>>

    @GET("api/v1/boats/{id}")
    suspend fun getBoat(@Path("id") id: String): Response<BoatResponse>

    @PUT("api/v1/boats/{id}")
    suspend fun updateBoat(
        @Path("id") id: String,
        @Body request: CreateBoatRequest
    ): Response<BoatResponse>

    @PATCH("api/v1/boats/{id}/status")
    suspend fun updateBoatStatus(
        @Path("id") id: String,
        @Body request: Map<String, Boolean>
    ): Response<BoatResponse>

    @PATCH("api/v1/boats/{id}/active")
    suspend fun setActiveBoat(@Path("id") id: String): Response<BoatResponse>

    // Trip endpoints
    @POST("api/v1/trips")
    suspend fun createTrip(@Body request: CreateTripRequest): Response<TripResponse>

    @GET("api/v1/trips")
    suspend fun getTrips(
        @Query("boatId") boatId: String? = null,
        @Query("startDate") startDate: String? = null,
        @Query("endDate") endDate: String? = null
    ): Response<List<TripResponse>>

    @GET("api/v1/trips/{id}")
    suspend fun getTrip(@Path("id") id: String): Response<TripResponse>

    @PUT("api/v1/trips/{id}")
    suspend fun updateTrip(
        @Path("id") id: String,
        @Body request: UpdateTripRequest
    ): Response<TripResponse>

    @PATCH("api/v1/trips/{id}/manual-data")
    suspend fun updateTripManualData(
        @Path("id") id: String,
        @Body manualData: ManualData
    ): Response<TripResponse>
}
