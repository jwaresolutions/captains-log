package com.captainslog

import android.content.pm.PackageManager
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.LocationOn
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.captainslog.connection.ConnectionManager
import com.captainslog.security.SecurePreferences
import com.captainslog.ui.auth.LoginScreen

import com.captainslog.ui.theme.BoatTrackingTheme
import com.captainslog.ui.MainNavigation
import com.captainslog.util.PermissionManager

class MainActivity : ComponentActivity() {
    companion object {
        private const val TAG = "MainActivity"
    }
    
    private lateinit var securePreferences: SecurePreferences
    private lateinit var connectionManager: ConnectionManager
    private var permissionsGranted by mutableStateOf(false)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        Log.d(TAG, "MainActivity onCreate")
        
        securePreferences = SecurePreferences(this)
        connectionManager = ConnectionManager.getInstance(this)
        
        // Set up token expiration callback
        connectionManager.onTokenExpired = {
            // Recreate activity to show login screen
            runOnUiThread {
                recreate()
            }
        }
        
        // Check and request permissions
        checkAndRequestPermissions()

        setContent {
            BoatTrackingTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    if (permissionsGranted) {
                        MainContent(
                            isLoggedIn = securePreferences.jwtToken != null,
                            onLoginSuccess = {
                                // Recreate activity to reload with new login
                                recreate()
                            }
                        )
                    } else {
                        PermissionRequestScreen(
                            onPermissionsRequested = {
                                checkAndRequestPermissions()
                            }
                        )
                    }
                }
            }
        }
    }
    
    private fun checkAndRequestPermissions() {
        Log.d(TAG, "Checking permissions...")
        
        if (PermissionManager.hasAllRequiredPermissions(this)) {
            Log.d(TAG, "All permissions granted")
            permissionsGranted = true
        } else {
            Log.d(TAG, "Missing permissions, requesting...")
            val missingPermissions = PermissionManager.getMissingPermissions(this)
            Log.d(TAG, "Missing permissions: $missingPermissions")
            
            PermissionManager.requestAllPermissions(this)
        }
    }
    
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<out String>,
        grantResults: IntArray
    ) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        
        Log.d(TAG, "Permission result: requestCode=$requestCode")
        
        when (requestCode) {
            PermissionManager.ALL_PERMISSIONS_REQUEST_CODE,
            PermissionManager.LOCATION_PERMISSION_REQUEST_CODE,
            PermissionManager.NOTIFICATION_PERMISSION_REQUEST_CODE -> {
                
                val allGranted = grantResults.isNotEmpty() && 
                    grantResults.all { it == PackageManager.PERMISSION_GRANTED }
                
                Log.d(TAG, "All permissions granted: $allGranted")
                
                if (allGranted) {
                    permissionsGranted = true
                    Log.d(TAG, "Permissions granted - app can proceed")
                } else {
                    Log.w(TAG, "Some permissions denied")
                    // Check if we have the minimum required permissions
                    if (PermissionManager.hasLocationPermissions(this)) {
                        Log.d(TAG, "Location permissions granted - proceeding with limited functionality")
                        permissionsGranted = true
                    } else {
                        Log.e(TAG, "Critical permissions denied - cannot proceed")
                        permissionsGranted = false
                    }
                }
            }
        }
    }
}

@Composable
fun MainContent(
    isLoggedIn: Boolean,
    onLoginSuccess: () -> Unit
) {
    when {
        !isLoggedIn -> {
            // Not logged in - show login screen
            LoginScreen(onLoginSuccess = onLoginSuccess)
        }
        else -> {
            // Logged in - show main app
            MainApp()
        }
    }
}

@Composable
fun MainApp() {
    // Main app with bottom navigation
    MainNavigation()
}

@Composable
fun PermissionRequestScreen(
    onPermissionsRequested: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Icon(
            imageVector = Icons.Default.LocationOn,
            contentDescription = null,
            modifier = Modifier.size(64.dp),
            tint = MaterialTheme.colorScheme.primary
        )
        
        Spacer(modifier = Modifier.height(24.dp))
        
        Text(
            text = "Permissions Required",
            style = MaterialTheme.typography.headlineMedium,
            textAlign = TextAlign.Center
        )
        
        Spacer(modifier = Modifier.height(16.dp))
        
        Text(
            text = "This app needs location permissions to track your boat trips and provide GPS functionality.",
            style = MaterialTheme.typography.bodyLarge,
            textAlign = TextAlign.Center,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        
        Spacer(modifier = Modifier.height(32.dp))
        
        Button(
            onClick = onPermissionsRequested,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Grant Permissions")
        }
    }
}
