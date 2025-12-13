package com.boattracking.ui.home

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.boattracking.ui.components.AppTopBar

/**
 * Home screen displaying the Captain's Log logo and app branding.
 * This serves as the main landing page of the application.
 */
@Composable
fun HomeScreen(
    modifier: Modifier = Modifier,
    onNotesClick: () -> Unit = {},
    onTodosClick: () -> Unit = {},
    onSettingsClick: () -> Unit = {}
) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            // ASCII Art Logo
            Text(
                text = """
 ____            _        _       _     
/ ___|__ _ _ __ | |_ __ _(_)_ __ ( )___ 
| |   / _` | '_ \| __/ _` | | '_ \|// __|
| |__| (_| | |_) | || (_| | | | | | \__ \
\____\__,_| .__/ \__\__,_|_|_| |_| |___/
          |_|                          
 _                 
| |    ___   __ _ 
| |   / _ \ / _` |
| |__| (_) | (_| |
|_____\___/ \__, |
            |___/ 
                """.trimIndent(),
                fontFamily = FontFamily.Monospace,
                fontSize = 12.sp,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.primary
            )
            
            Spacer(modifier = Modifier.height(32.dp))
            
            // App subtitle
            Text(
                text = "Boat Tracking & Captain's Log System",
                style = MaterialTheme.typography.titleMedium,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.onSurface
            )
            
            Spacer(modifier = Modifier.height(16.dp))
            
            Text(
                text = "Navigate using the tabs below to manage your trips, maintenance, and more.",
                style = MaterialTheme.typography.bodyMedium,
                textAlign = TextAlign.Center,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }