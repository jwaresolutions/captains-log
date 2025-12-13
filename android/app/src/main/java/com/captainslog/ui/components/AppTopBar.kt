package com.captainslog.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp

/**
 * Consistent top bar used across all screens in the app.
 * Features purple background with app title on left and action buttons on right.
 * Supports highlighting active buttons.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AppTopBar(
    title: String,
    onNotesClick: () -> Unit = {},
    onTodosClick: () -> Unit = {},
    onSettingsClick: () -> Unit = {},
    notesActive: Boolean = false,
    todosActive: Boolean = false,
    settingsActive: Boolean = false
) {
    TopAppBar(
        title = {
            Text(
                text = title,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
        },
        actions = {
            // Notes button
            IconButton(onClick = onNotesClick) {
                Icon(
                    imageVector = Icons.Filled.Edit,
                    contentDescription = "Notes",
                    tint = if (notesActive) Color.Yellow else Color.White
                )
            }
            
            // Todos button
            IconButton(onClick = onTodosClick) {
                Icon(
                    imageVector = Icons.Filled.CheckCircle,
                    contentDescription = "Todos",
                    tint = if (todosActive) Color.Yellow else Color.White
                )
            }
            
            // Settings button
            IconButton(onClick = onSettingsClick) {
                Icon(
                    imageVector = Icons.Filled.Settings,
                    contentDescription = "Settings",
                    tint = if (settingsActive) Color.Yellow else Color.White
                )
            }
        },
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = Color(0xFF9C27B0), // Purple color
            titleContentColor = Color.White,
            actionIconContentColor = Color.White
        )
    )
}