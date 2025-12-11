package com.boattracking

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import com.boattracking.connection.ConnectionManager
import com.boattracking.security.SecurePreferences
import com.boattracking.ui.auth.LoginScreen
import com.boattracking.ui.setup.SetupScreen
import com.boattracking.ui.theme.BoatTrackingTheme
import com.boattracking.ui.MainNavigation

class MainActivity : ComponentActivity() {
    private lateinit var securePreferences: SecurePreferences
    private lateinit var connectionManager: ConnectionManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        securePreferences = SecurePreferences(this)
        connectionManager = ConnectionManager.getInstance(this)
        
        // Set up token expiration callback
        connectionManager.onTokenExpired = {
            // Recreate activity to show login screen
            runOnUiThread {
                recreate()
            }
        }

        setContent {
            BoatTrackingTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    MainContent(
                        isSetupComplete = securePreferences.isSetupComplete,
                        isLoggedIn = securePreferences.jwtToken != null,
                        onSetupComplete = {
                            // Recreate activity to reload with new setup
                            recreate()
                        },
                        onLoginSuccess = {
                            // Recreate activity to reload with new login
                            recreate()
                        }
                    )
                }
            }
        }
    }
}

@Composable
fun MainContent(
    isSetupComplete: Boolean,
    isLoggedIn: Boolean,
    onSetupComplete: () -> Unit,
    onLoginSuccess: () -> Unit
) {
    when {
        !isSetupComplete -> {
            // First time setup - configure server
            SetupScreen(onSetupComplete = onSetupComplete)
        }
        !isLoggedIn -> {
            // Setup complete but not logged in - show login screen
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
