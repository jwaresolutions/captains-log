package com.captainslog.ui.home

import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.captainslog.R
import com.captainslog.ui.components.AppTopBar

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
            // Captain's Log Logo
            Image(
                painter = painterResource(id = R.drawable.captains_log_logo),
                contentDescription = "Captain's Log",
                modifier = Modifier
                    .height(200.dp)
                    .padding(bottom = 16.dp)
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