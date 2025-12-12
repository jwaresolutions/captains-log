package com.boattracking.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.boattracking.database.entities.MaintenanceCompletionEntity
import com.boattracking.database.entities.MaintenanceTaskEntity
import com.boattracking.viewmodel.MaintenanceViewModel
import java.text.NumberFormat
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MaintenanceTaskDetailScreen(
    taskId: String,
    onNavigateBack: () -> Unit,
    onNavigateToEdit: (String) -> Unit,
    onNavigateToComplete: (String) -> Unit,
    modifier: Modifier = Modifier,
    viewModel: MaintenanceViewModel
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val task by viewModel.getTaskById(taskId).collectAsStateWithLifecycle(initialValue = null)
    val completions by viewModel.getCompletionsByTask(taskId).collectAsStateWithLifecycle(initialValue = emptyList())
    
    var showDeleteDialog by remember { mutableStateOf(false) }

    // Show error or success messages
    LaunchedEffect(uiState.error) {
        uiState.error?.let {
            // Error will be shown in the UI
        }
    }

    LaunchedEffect(uiState.message) {
        uiState.message?.let {
            // Success message will be shown in the UI
            if (it.contains("deleted")) {
                onNavigateBack()
            }
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Maintenance Task") },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                },
                actions = {
                    if (task != null) {
                        IconButton(onClick = { onNavigateToEdit(taskId) }) {
                            Icon(Icons.Default.Edit, contentDescription = "Edit Task")
                        }
                        IconButton(onClick = { showDeleteDialog = true }) {
                            Icon(Icons.Default.Delete, contentDescription = "Delete Task")
                        }
                    }
                }
            )
        },
        floatingActionButton = {
            if (task != null) {
                FloatingActionButton(
                    onClick = { onNavigateToComplete(taskId) }
                ) {
                    Icon(Icons.Default.CheckCircle, contentDescription = "Complete Task")
                }
            }
        }
    ) { paddingValues ->
        when {
            uiState.isLoading -> {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(paddingValues),
                    contentAlignment = Alignment.Center
                ) {
                    CircularProgressIndicator()
                }
            }
            task == null -> {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .padding(paddingValues),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "Task not found",
                        style = MaterialTheme.typography.headlineSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
            else -> {
                LazyColumn(
                    modifier = modifier
                        .fillMaxSize()
                        .padding(paddingValues),
                    contentPadding = PaddingValues(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    item {
                        MaintenanceTaskInfoCard(
                            task = task!!,
                            viewModel = viewModel
                        )
                    }

                    item {
                        MaintenanceHistorySection(
                            completions = completions
                        )
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

    // Delete confirmation dialog
    if (showDeleteDialog) {
        AlertDialog(
            onDismissRequest = { showDeleteDialog = false },
            title = { Text("Delete Maintenance Task") },
            text = { Text("Are you sure you want to delete this maintenance task? This action cannot be undone.") },
            confirmButton = {
                TextButton(
                    onClick = {
                        showDeleteDialog = false
                        viewModel.deleteMaintenanceTask(taskId)
                    }
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
private fun MaintenanceTaskInfoCard(
    task: MaintenanceTaskEntity,
    viewModel: MaintenanceViewModel,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }
    val isOverdue = viewModel.isTaskOverdue(task)
    val isDueSoon = viewModel.isTaskDueSoon(task)
    val daysUntilDue = viewModel.getDaysUntilDue(task)
    val recurrenceText = viewModel.formatRecurrence(task)

    Card(
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
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(
                text = task.title,
                style = MaterialTheme.typography.headlineSmall,
                fontWeight = FontWeight.Bold
            )

            if (!task.description.isNullOrBlank()) {
                Text(
                    text = task.description,
                    style = MaterialTheme.typography.bodyLarge
                )
            }

            Divider()

            // Task details
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                if (!task.component.isNullOrBlank()) {
                    DetailRow(
                        label = "Component",
                        value = task.component
                    )
                }

                DetailRow(
                    label = "Due Date",
                    value = dateFormat.format(task.dueDate),
                    valueColor = when {
                        isOverdue -> MaterialTheme.colorScheme.error
                        isDueSoon -> MaterialTheme.colorScheme.primary
                        else -> MaterialTheme.colorScheme.onSurface
                    }
                )

                val daysText = when {
                    isOverdue -> "${-daysUntilDue} days overdue"
                    daysUntilDue == 0L -> "Due today"
                    daysUntilDue == 1L -> "Due tomorrow"
                    else -> "Due in $daysUntilDue days"
                }

                DetailRow(
                    label = "Status",
                    value = daysText,
                    valueColor = when {
                        isOverdue -> MaterialTheme.colorScheme.error
                        isDueSoon -> MaterialTheme.colorScheme.primary
                        else -> MaterialTheme.colorScheme.onSurface
                    }
                )

                if (recurrenceText != null) {
                    DetailRow(
                        label = "Recurrence",
                        value = recurrenceText
                    )
                }

                DetailRow(
                    label = "Created",
                    value = dateFormat.format(task.createdAt)
                )
            }
        }
    }
}

@Composable
private fun MaintenanceHistorySection(
    completions: List<MaintenanceCompletionEntity>,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth()
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Text(
                text = "Maintenance History",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )

            if (completions.isEmpty()) {
                Text(
                    text = "No maintenance history yet",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            } else {
                completions.forEach { completion ->
                    MaintenanceCompletionCard(completion = completion)
                }
            }
        }
    }
}

@Composable
private fun MaintenanceCompletionCard(
    completion: MaintenanceCompletionEntity,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy 'at' HH:mm", Locale.getDefault()) }
    val currencyFormat = remember { NumberFormat.getCurrencyInstance() }

    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
    ) {
        Column(
            modifier = Modifier.padding(12.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = "Completed ${dateFormat.format(completion.completedAt)}",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold
            )

            if (completion.cost != null && completion.cost > 0) {
                Text(
                    text = "Cost: ${currencyFormat.format(completion.cost)}",
                    style = MaterialTheme.typography.bodyMedium
                )
            }

            if (!completion.notes.isNullOrBlank()) {
                Text(
                    text = completion.notes,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}

@Composable
private fun DetailRow(
    label: String,
    value: String,
    valueColor: androidx.compose.ui.graphics.Color = MaterialTheme.colorScheme.onSurface,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.weight(1f)
        )
        Text(
            text = value,
            style = MaterialTheme.typography.bodyMedium,
            color = valueColor,
            fontWeight = FontWeight.Medium,
            modifier = Modifier.weight(1f)
        )
    }
}