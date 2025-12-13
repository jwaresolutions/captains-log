package com.boattracking.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.boattracking.database.entities.MaintenanceTaskEntity
import com.boattracking.viewmodel.MaintenanceViewModel
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MaintenanceListScreen(
    onNavigateToTaskDetail: (String) -> Unit,
    onNavigateToCreateTask: () -> Unit,
    onNavigateToEdit: (String) -> Unit = { },
    modifier: Modifier = Modifier,
    viewModel: MaintenanceViewModel
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val allTasks by viewModel.allTasks.collectAsStateWithLifecycle(initialValue = emptyList())
    val upcomingTasks by viewModel.upcomingTasks.collectAsStateWithLifecycle(initialValue = emptyList())
    val overdueTasks by viewModel.overdueTasks.collectAsStateWithLifecycle(initialValue = emptyList())
    
    var selectedTab by remember { mutableStateOf(MaintenanceTab.All) }

    // Show error or success messages
    LaunchedEffect(uiState.error) {
        uiState.error?.let {
            // Error will be shown in the UI
        }
    }

    LaunchedEffect(uiState.message) {
        uiState.message?.let {
            // Success message will be shown in the UI
        }
    }

    Box(modifier = modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize()
        ) {
        // Tab row
        TabRow(selectedTabIndex = selectedTab.ordinal) {
            MaintenanceTab.values().forEach { tab ->
                Tab(
                    selected = selectedTab == tab,
                    onClick = { selectedTab = tab },
                    text = { 
                        Row(
                            verticalAlignment = Alignment.CenterVertically,
                            horizontalArrangement = Arrangement.spacedBy(4.dp)
                        ) {
                            Text(tab.title)
                            when (tab) {
                                MaintenanceTab.Overdue -> {
                                    if (overdueTasks.isNotEmpty()) {
                                        Badge {
                                            Text("${overdueTasks.size}")
                                        }
                                    }
                                }
                                MaintenanceTab.Upcoming -> {
                                    if (upcomingTasks.isNotEmpty()) {
                                        Badge {
                                            Text("${upcomingTasks.size}")
                                        }
                                    }
                                }
                                else -> {}
                            }
                        }
                    }
                )
            }
        }

        // Content
        Box(modifier = Modifier.fillMaxSize()) {
            when {
                uiState.isLoading -> {
                    CircularProgressIndicator(
                        modifier = Modifier.align(Alignment.Center)
                    )
                }
                else -> {
                    val tasksToShow = when (selectedTab) {
                        MaintenanceTab.All -> allTasks
                        MaintenanceTab.Overdue -> overdueTasks
                        MaintenanceTab.Upcoming -> upcomingTasks
                    }

                    if (tasksToShow.isEmpty()) {
                        EmptyMaintenanceState(
                            tab = selectedTab,
                            onCreateTask = onNavigateToCreateTask,
                            modifier = Modifier.align(Alignment.Center)
                        )
                    } else {
                        LazyColumn(
                            modifier = Modifier.fillMaxSize(),
                            contentPadding = PaddingValues(16.dp),
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            items(tasksToShow) { task ->
                                MaintenanceTaskCard(
                                    task = task,
                                    onClick = { 
                                        println("Task clicked: ${task.id}")
                                        onNavigateToTaskDetail(task.id) 
                                    },
                                    onEdit = { onNavigateToEdit(task.id) },
                                    onDelete = { viewModel.deleteMaintenanceTask(task.id) },
                                    onComplete = { viewModel.completeMaintenanceTask(task.id) },
                                    viewModel = viewModel
                                )
                            }
                        }
                    }
                }
            }

            }

            // Error/Success messages
            uiState.error?.let { error ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer)
                ) {
                    Text(
                        text = error,
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onErrorContainer
                    )
                }
            }

            uiState.message?.let { message ->
                Card(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
                ) {
                    Text(
                        text = message,
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onPrimaryContainer
                    )
                }
            }
        }
        
        // Floating Action Button
        FloatingActionButton(
            onClick = onNavigateToCreateTask,
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(bottom = 88.dp, end = 16.dp)
        ) {
            Icon(Icons.Default.Add, contentDescription = "Add Maintenance Task")
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun MaintenanceTaskCard(
    task: MaintenanceTaskEntity,
    onClick: () -> Unit,
    onEdit: () -> Unit,
    onDelete: () -> Unit,
    onComplete: () -> Unit,
    viewModel: MaintenanceViewModel,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }
    val isOverdue = viewModel.isTaskOverdue(task)
    val isDueSoon = viewModel.isTaskDueSoon(task)
    val daysUntilDue = viewModel.getDaysUntilDue(task)
    val recurrenceText = viewModel.formatRecurrence(task)
    var showDeleteDialog by remember { mutableStateOf(false) }

    Card(
        onClick = onClick,
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = when {
                isOverdue -> MaterialTheme.colorScheme.errorContainer
                isDueSoon -> MaterialTheme.colorScheme.warningContainer
                else -> MaterialTheme.colorScheme.surfaceVariant
            }
        )
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.Top
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = task.title,
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    if (!task.description.isNullOrBlank()) {
                        Text(
                            text = task.description,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    if (!task.component.isNullOrBlank()) {
                        Text(
                            text = "Component: ${task.component}",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }

                if (isOverdue || isDueSoon) {
                    Icon(
                        Icons.Default.Warning,
                        contentDescription = if (isOverdue) "Overdue" else "Due Soon",
                        tint = if (isOverdue) MaterialTheme.colorScheme.error else MaterialTheme.colorScheme.primary
                    )
                }
            }

            Divider()

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "Due: ${dateFormat.format(task.dueDate)}",
                        style = MaterialTheme.typography.bodySmall,
                        fontWeight = if (isOverdue || isDueSoon) FontWeight.Bold else FontWeight.Normal,
                        color = when {
                            isOverdue -> MaterialTheme.colorScheme.error
                            isDueSoon -> MaterialTheme.colorScheme.primary
                            else -> MaterialTheme.colorScheme.onSurfaceVariant
                        }
                    )
                    
                    val daysText = when {
                        isOverdue -> "${-daysUntilDue} days overdue"
                        daysUntilDue == 0L -> "Due today"
                        daysUntilDue == 1L -> "Due tomorrow"
                        else -> "Due in $daysUntilDue days"
                    }
                    
                    Text(
                        text = daysText,
                        style = MaterialTheme.typography.bodySmall,
                        color = when {
                            isOverdue -> MaterialTheme.colorScheme.error
                            isDueSoon -> MaterialTheme.colorScheme.primary
                            else -> MaterialTheme.colorScheme.onSurfaceVariant
                        }
                    )
                }

                if (recurrenceText != null) {
                    Text(
                        text = recurrenceText,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
            
            // Action buttons with debug background
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                horizontalArrangement = Arrangement.SpaceEvenly,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Button(
                    onClick = onComplete,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.primary
                    )
                ) {
                    Text("Complete")
                }
                Button(
                    onClick = onEdit,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.secondary
                    )
                ) {
                    Text("Edit")
                }
                Button(
                    onClick = { showDeleteDialog = true },
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.error
                    )
                ) {
                    Text("Delete")
                }
            }
        }
    }
    
    // Delete confirmation dialog
    if (showDeleteDialog) {
        AlertDialog(
            onDismissRequest = { showDeleteDialog = false },
            title = { Text("Delete Maintenance Task") },
            text = { Text("Are you sure you want to delete \"${task.title}\"? This action cannot be undone.") },
            confirmButton = {
                TextButton(
                    onClick = {
                        showDeleteDialog = false
                        onDelete()
                    },
                    colors = ButtonDefaults.textButtonColors(
                        contentColor = MaterialTheme.colorScheme.error
                    )
                ) {
                    Text("Delete")
                }
            },
            dismissButton = {
                TextButton(onClick = { showDeleteDialog = false }) {
                    Text("Cancel")
                }
            }
        )
    }
}

@Composable
private fun EmptyMaintenanceState(
    tab: MaintenanceTab,
    onCreateTask: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = when (tab) {
                MaintenanceTab.All -> "No maintenance tasks"
                MaintenanceTab.Overdue -> "No overdue tasks"
                MaintenanceTab.Upcoming -> "No upcoming tasks"
            },
            style = MaterialTheme.typography.headlineSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        
        Text(
            text = when (tab) {
                MaintenanceTab.All -> "Create your first maintenance task to keep track of boat maintenance schedules."
                MaintenanceTab.Overdue -> "Great! You have no overdue maintenance tasks."
                MaintenanceTab.Upcoming -> "No maintenance tasks are due in the next 7 days."
            },
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )

        if (tab == MaintenanceTab.All) {
            Button(onClick = onCreateTask) {
                Text("Create Maintenance Task")
            }
        }
    }
}

enum class MaintenanceTab(val title: String) {
    All("All"),
    Overdue("Overdue"),
    Upcoming("Upcoming")
}

// Extension property for warning container color (Material 3 doesn't have this by default)
val ColorScheme.warningContainer: Color
    get() = if (this == lightColorScheme()) {
        Color(0xFFFFF4E6) // Light orange
    } else {
        Color(0xFF3E2723) // Dark brown
    }