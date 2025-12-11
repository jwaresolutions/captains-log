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

    // Captain's Log endpoints
    @GET("api/v1/captain-log/progress")
    suspend fun getLicenseProgress(): Response<LicenseProgressResponse>

    @GET("api/v1/captain-log/sea-time-days")
    suspend fun getSeaTimeDays(
        @Query("startDate") startDate: String? = null,
        @Query("endDate") endDate: String? = null
    ): Response<List<SeaTimeDayResponse>>

    @GET("api/v1/captain-log/breakdown")
    suspend fun getSeaTimeBreakdown(
        @Query("year") year: Int? = null
    ): Response<List<SeaTimeBreakdownResponse>>

    @GET("api/v1/captain-log/check-day/{date}")
    suspend fun checkSeaTimeDay(@Path("date") date: String): Response<SeaTimeDayCheckResponse>

    // Notes endpoints
    @POST("api/v1/notes")
    suspend fun createNote(@Body request: CreateNoteRequest): Response<NoteResponse>

    @GET("api/v1/notes")
    suspend fun getNotes(
        @Query("type") type: String? = null,
        @Query("boatId") boatId: String? = null,
        @Query("tripId") tripId: String? = null,
        @Query("tags") tags: List<String>? = null,
        @Query("search") search: String? = null
    ): Response<List<NoteResponse>>

    @GET("api/v1/notes/{id}")
    suspend fun getNote(@Path("id") id: String): Response<NoteResponse>

    @PUT("api/v1/notes/{id}")
    suspend fun updateNote(
        @Path("id") id: String,
        @Body request: UpdateNoteRequest
    ): Response<NoteResponse>

    @DELETE("api/v1/notes/{id}")
    suspend fun deleteNote(@Path("id") id: String): Response<Unit>

    @POST("api/v1/notes/{id}/tags")
    suspend fun addNoteTags(
        @Path("id") id: String,
        @Body tags: Map<String, List<String>>
    ): Response<NoteResponse>

    @DELETE("api/v1/notes/{id}/tags")
    suspend fun removeNoteTags(
        @Path("id") id: String,
        @Body tags: Map<String, List<String>>
    ): Response<NoteResponse>

    @GET("api/v1/notes/tags/all")
    suspend fun getAllTags(): Response<TagsResponse>

    // Todo endpoints
    @POST("api/v1/todos")
    suspend fun createTodoList(@Body request: CreateTodoListRequest): Response<TodoListResponse>

    @GET("api/v1/todos")
    suspend fun getTodoLists(
        @Query("boatId") boatId: String? = null
    ): Response<List<TodoListResponse>>

    @GET("api/v1/todos/{id}")
    suspend fun getTodoList(@Path("id") id: String): Response<TodoListResponse>

    @PUT("api/v1/todos/{id}")
    suspend fun updateTodoList(
        @Path("id") id: String,
        @Body request: UpdateTodoListRequest
    ): Response<TodoListResponse>

    @DELETE("api/v1/todos/{id}")
    suspend fun deleteTodoList(@Path("id") id: String): Response<Unit>

    @POST("api/v1/todos/{id}/items")
    suspend fun createTodoItem(
        @Path("id") listId: String,
        @Body request: CreateTodoItemRequest
    ): Response<TodoItemResponse>

    @PUT("api/v1/todos/items/{itemId}")
    suspend fun updateTodoItem(
        @Path("itemId") itemId: String,
        @Body request: UpdateTodoItemRequest
    ): Response<TodoItemResponse>

    @PATCH("api/v1/todos/items/{itemId}/complete")
    suspend fun toggleTodoItemCompletion(
        @Path("itemId") itemId: String
    ): Response<TodoItemResponse>

    @DELETE("api/v1/todos/items/{itemId}")
    suspend fun deleteTodoItem(@Path("itemId") itemId: String): Response<Unit>
}
