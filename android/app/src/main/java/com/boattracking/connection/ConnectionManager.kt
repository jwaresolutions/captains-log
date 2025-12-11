package com.boattracking.connection

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import com.boattracking.network.ApiService
import com.boattracking.security.CertificatePinnerBuilder
import com.boattracking.security.SecurePreferences
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

class ConnectionManager(private val context: Context) {
    private val securePreferences = SecurePreferences(context)
    private var localApiService: ApiService? = null
    private var remoteApiService: ApiService? = null
    private var currentConnectionType: ConnectionType = ConnectionType.NONE
    
    // Callback for token expiration
    var onTokenExpired: (() -> Unit)? = null

    enum class ConnectionType {
        LOCAL, REMOTE, NONE
    }

    data class ConnectionConfig(
        val localUrl: String?,
        val remoteUrl: String,
        val jwtToken: String?,
        val localCertPin: String?,
        val remoteCertPin: String
    )

    fun initialize() {
        val config = getConnectionConfig() ?: return

        // Build certificate pinner
        val certificatePinner = CertificatePinnerBuilder.build(
            localUrl = config.localUrl,
            localPin = config.localCertPin,
            remoteUrl = config.remoteUrl,
            remotePin = config.remoteCertPin
        )

        // Create OkHttp client with certificate pinning and JWT token authentication
        val loggingInterceptor = HttpLoggingInterceptor().apply {
            level = HttpLoggingInterceptor.Level.BODY
        }

        val authInterceptor = okhttp3.Interceptor { chain ->
            val originalRequest = chain.request()
            
            // Add Authorization header if JWT token is available
            val request = if (!config.jwtToken.isNullOrEmpty()) {
                originalRequest.newBuilder()
                    .addHeader("Authorization", "Bearer ${config.jwtToken}")
                    .build()
            } else {
                originalRequest
            }
            
            val response = chain.proceed(request)
            
            // Check for 401 Unauthorized (token expired or invalid)
            if (response.code == 401 && !config.jwtToken.isNullOrEmpty()) {
                android.util.Log.w("ConnectionManager", "Token expired or invalid (401), clearing session")
                // Clear token on 401 response
                securePreferences.jwtToken = null
                securePreferences.username = null
                // Notify listeners
                onTokenExpired?.invoke()
            }
            
            response
        }

        // Local client with short timeout
        if (!config.localUrl.isNullOrEmpty()) {
            val localClient = OkHttpClient.Builder()
                .certificatePinner(certificatePinner)
                .addInterceptor(authInterceptor)
                .addInterceptor(loggingInterceptor)
                .connectTimeout(2, TimeUnit.SECONDS)
                .readTimeout(5, TimeUnit.SECONDS)
                .writeTimeout(5, TimeUnit.SECONDS)
                .build()

            localApiService = Retrofit.Builder()
                .baseUrl(config.localUrl)
                .client(localClient)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
                .create(ApiService::class.java)
        }

        // Remote client with normal timeout
        val remoteClient = OkHttpClient.Builder()
            .certificatePinner(certificatePinner)
            .addInterceptor(authInterceptor)
            .addInterceptor(loggingInterceptor)
            .connectTimeout(10, TimeUnit.SECONDS)
            .readTimeout(30, TimeUnit.SECONDS)
            .writeTimeout(30, TimeUnit.SECONDS)
            .build()

        remoteApiService = Retrofit.Builder()
            .baseUrl(config.remoteUrl)
            .client(remoteClient)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
            .create(ApiService::class.java)
    }

    /**
     * Get the appropriate API service based on connection availability
     * Tries local first with 2-second timeout, falls back to remote
     */
    suspend fun getApiService(): ApiService {
        // Try local connection first if available
        if (localApiService != null) {
            try {
                // Attempt to use local connection
                // The timeout is already configured in the OkHttpClient (2 seconds)
                currentConnectionType = ConnectionType.LOCAL
                return localApiService!!
            } catch (e: Exception) {
                // Local connection failed or timed out, fall back to remote
                android.util.Log.w("ConnectionManager", "Local connection failed, falling back to remote: ${e.message}")
                currentConnectionType = ConnectionType.REMOTE
            }
        }

        // Use remote connection
        currentConnectionType = ConnectionType.REMOTE
        return remoteApiService ?: throw IllegalStateException("API service not initialized")
    }

    /**
     * Get API service with preference for local connection when on WiFi
     * This is useful for photo uploads to save bandwidth
     */
    suspend fun getApiServicePreferLocal(): ApiService {
        // Only try local if on WiFi
        if (localApiService != null && isOnWiFi()) {
            try {
                currentConnectionType = ConnectionType.LOCAL
                return localApiService!!
            } catch (e: Exception) {
                android.util.Log.w("ConnectionManager", "Local connection failed, falling back to remote: ${e.message}")
                currentConnectionType = ConnectionType.REMOTE
            }
        }

        // Use remote connection
        currentConnectionType = ConnectionType.REMOTE
        return remoteApiService ?: throw IllegalStateException("API service not initialized")
    }

    fun getCurrentConnectionType(): ConnectionType = currentConnectionType

    /**
     * Test connection to verify configuration
     * Returns a pair of (localSuccess, remoteSuccess)
     */
    suspend fun testConnections(): Pair<Boolean, Boolean> {
        var localSuccess = false
        var remoteSuccess = false

        // Test local connection if configured
        if (localApiService != null) {
            try {
                // Use health endpoint which doesn't require auth
                val response = localApiService!!.healthCheck()
                localSuccess = response.isSuccessful
                android.util.Log.d("ConnectionManager", "Local connection test: ${response.code()}")
            } catch (e: Exception) {
                android.util.Log.w("ConnectionManager", "Local connection test failed", e)
                localSuccess = false
            }
        }

        // Test remote connection
        try {
            // Use health endpoint which doesn't require auth
            val response = remoteApiService!!.healthCheck()
            remoteSuccess = response.isSuccessful
            android.util.Log.d("ConnectionManager", "Remote connection test: ${response.code()}")
        } catch (e: Exception) {
            android.util.Log.e("ConnectionManager", "Remote connection test failed", e)
            remoteSuccess = false
        }

        return Pair(localSuccess, remoteSuccess)
    }

    fun isOnWiFi(): Boolean {
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        val capabilities = connectivityManager.getNetworkCapabilities(network) ?: return false
        return capabilities.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)
    }

    fun isOnMobileData(): Boolean {
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        val capabilities = connectivityManager.getNetworkCapabilities(network) ?: return false
        return capabilities.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)
    }

    fun hasInternetConnection(): Boolean {
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val network = connectivityManager.activeNetwork ?: return false
        val capabilities = connectivityManager.getNetworkCapabilities(network) ?: return false
        return capabilities.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET)
    }

    private fun getConnectionConfig(): ConnectionConfig? {
        val remoteUrl = securePreferences.remoteUrl ?: return null
        
        // In debug builds, certificate pins are optional
        val remoteCertPin = if (com.boattracking.BuildConfig.REQUIRE_CERT_PINNING) {
            securePreferences.remoteCertPin ?: return null
        } else {
            securePreferences.remoteCertPin ?: ""
        }

        return ConnectionConfig(
            localUrl = securePreferences.localUrl,
            remoteUrl = remoteUrl,
            jwtToken = securePreferences.jwtToken,
            localCertPin = securePreferences.localCertPin,
            remoteCertPin = remoteCertPin
        )
    }

    companion object {
        @Volatile
        private var INSTANCE: ConnectionManager? = null

        fun getInstance(context: Context): ConnectionManager {
            return INSTANCE ?: synchronized(this) {
                val instance = ConnectionManager(context.applicationContext)
                INSTANCE = instance
                instance
            }
        }
    }
}
