package com.captainslog.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.background
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Warning
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.captainslog.database.entities.MaintenanceTaskEntity
import com.captainslog.database.entities.MaintenanceCompletionEntity
import com.captainslog.viewmodel.MaintenanceViewModel
import com.captainslog.viewmodel.TaskColor
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
    val completedTasks by viewModel.completedTasks.collectAsStateWithLifecycle(initialValue = emptyList())
    
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
                                MaintenanceTab.Upcoming -> {
                                    if (upcomingTasks.isNotEmpty()) {
                                        Badge {
                                            Text("${upcomingTasks.size}")
                                        }
                                    }
                                }
                                MaintenanceTab.Complete -> {
                                    if (completedTasks.isNotEmpty()) {
                                        Badge {
                                            Text("${completedTasks.size}")
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
                        MaintenanceTab.Upcoming -> upcomingTasks
                        MaintenanceTab.Complete -> emptyList() // Will show completed tasks differently
                    }

                    when (selectedTab) {
                        MaintenanceTab.Complete -> {
                            if (completedTasks.isEmpty()) {
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
                                    items(completedTasks) { completion ->
                                        CompletedMaintenanceCard(
                                            completion = completion,
                                            onClick = { 
                                                // Navigate to completion detail or task detail
                                                onNavigateToTaskDetail(completion.maintenanceTaskId) 
                                            },
                                            viewModel = viewModel
                                        )
                                    }
                                }
                            }
                        }
                        else -> {
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
                .padding(16.dp)
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
    val taskColor = viewModel.getTaskColor(task)
    val daysUntilDue = viewModel.getDaysUntilDue(task)
    val recurrenceText = viewModel.formatRecurrence(task)
    var showDeleteDialog by remember { mutableStateOf(false) }

    Card(
        onClick = onClick,
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
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

                // Days badge with colored oval background
                val daysText = when {
                    daysUntilDue < 0 -> "${-daysUntilDue}d"
                    daysUntilDue == 0L -> "Today"
                    else -> "${daysUntilDue}d"
                }
                
                val badgeColor = when (taskColor) {
                    TaskColor.RED -> Color(0xFFFFEBEE) // Light red
                    TaskColor.YELLOW -> Color(0xFFFFF3CD) // Light yellow
                    TaskColor.GREEN -> Color(0xFFD4EDDA) // Light green
                    TaskColor.GRAY -> Color(0xFFE0E0E0) // Light gray
                }
                
                val textColor = when (taskColor) {
                    TaskColor.RED -> Color(0xFFD32F2F) // Dark red
                    TaskColor.YELLOW -> Color(0xFFF57C00) // Dark orange
                    TaskColor.GREEN -> Color(0xFF388E3C) // Dark green
                    TaskColor.GRAY -> Color(0xFF616161) // Dark gray
                }
                
                Box(
                    modifier = Modifier
                        .background(
                            color = badgeColor,
                            shape = RoundedCornerShape(12.dp)
                        )
                        .padding(horizontal = 8.dp, vertical = 4.dp)
                ) {
                    Text(
                        text = daysText,
                        style = MaterialTheme.typography.bodySmall,
                        color = textColor,
                        fontWeight = FontWeight.Medium
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
                        fontWeight = if (taskColor == TaskColor.RED || taskColor == TaskColor.YELLOW) FontWeight.Bold else FontWeight.Normal,
                        color = when (taskColor) {
                            TaskColor.RED -> MaterialTheme.colorScheme.error
                            TaskColor.YELLOW -> MaterialTheme.colorScheme.primary
                            else -> MaterialTheme.colorScheme.onSurfaceVariant
                        }
                    )
                    
                    val daysText = when {
                        daysUntilDue < 0 -> "${-daysUntilDue} days overdue"
                        daysUntilDue == 0L -> "Due today"
                        daysUntilDue == 1L -> "Due tomorrow"
                        else -> "Due in $daysUntilDue days"
                    }
                    
                    Text(
                        text = daysText,
                        style = MaterialTheme.typography.bodySmall,
                        color = when (taskColor) {
                            TaskColor.RED -> MaterialTheme.colorScheme.error
                            TaskColor.YELLOW -> MaterialTheme.colorScheme.primary
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
private fun CompletedMaintenanceCard(
    completion: MaintenanceCompletionEntity,
    onClick: () -> Unit,
    viewModel: MaintenanceViewModel,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }
    val task by viewModel.getTaskById(completion.maintenanceTaskId).collectAsStateWithLifecycle(initialValue = null)

    Card(
        onClick = onClick,
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
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
                        text = task?.title ?: "Maintenance Task",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    task?.component?.let { component ->
                        Text(
                            text = "Component: $component",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    if (!completion.notes.isNullOrBlank()) {
                        Text(
                            text = completion.notes,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    completion.cost?.let { cost ->
                        Text(
                            text = "Cost: $${String.format("%.2f", cost)}",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }

                Icon(
                    Icons.Default.CheckCircle,
                    contentDescription = "Completed",
                    tint = MaterialTheme.colorScheme.primary
                )
            }

            Divider()

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Completed: ${dateFormat.format(completion.completedAt)}",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
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
                MaintenanceTab.Upcoming -> "No upcoming tasks"
                MaintenanceTab.Complete -> "No completed tasks"
            },
            style = MaterialTheme.typography.headlineSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        
        Text(
            text = when (tab) {
                MaintenanceTab.All -> "Create your first maintenance task to keep track of boat maintenance schedules."
                MaintenanceTab.Upcoming -> "No maintenance tasks are due in the next 90 days or overdue."
                MaintenanceTab.Complete -> "No maintenance tasks have been completed yet."
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
    Upcoming("Upcoming"),
    Complete("Complete")
}

