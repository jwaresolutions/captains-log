package com.boattracking.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.boattracking.viewmodel.MaintenanceViewModel
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MaintenanceTaskCompletionScreen(
    taskId: String,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier,
    viewModel: MaintenanceViewModel
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val task by viewModel.getTaskById(taskId).collectAsStateWithLifecycle(initialValue = null)
    
    var cost by remember { mutableStateOf("") }
    var notes by remember { mutableStateOf("") }
    var costError by remember { mutableStateOf<String?>(null) }

    // Handle completion success
    LaunchedEffect(uiState.message) {
        uiState.message?.let { message ->
            if (message.contains("completed")) {
                onNavigateBack()
            }
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Complete Maintenance Task") },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                    }
                }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = modifier
                .fillMaxSize()
                .padding(paddingValues)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            // Task info card
            if (task != null) {
                TaskCompletionInfoCard(task = task!!)
            }

            // Completion form
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    Text(
                        text = "Completion Details",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )

                    // Cost field
                    OutlinedTextField(
                        value = cost,
                        onValueChange = { newValue ->
                            cost = newValue
                            costError = null
                        },
                        label = { Text("Cost (optional)") },
                        placeholder = { Text("0.00") },
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal),
                        isError = costError != null,
                        supportingText = costError?.let { { Text(it) } },
                        modifier = Modifier.fillMaxWidth()
                    )

                    // Notes field
                    OutlinedTextField(
                        value = notes,
                        onValueChange = { notes = it },
                        label = { Text("Notes (optional)") },
                        placeholder = { Text("Add any notes about the maintenance work...") },
                        minLines = 3,
                        maxLines = 6,
                        modifier = Modifier.fillMaxWidth()
                    )

                    // Photo capture component
                    com.boattracking.ui.components.PhotoCaptureComponent(
                        entityType = "maintenance",
                        entityId = taskId
                    )

                    // Complete button
                    Button(
                        onClick = {
                            // Validate cost
                            val costValue = if (cost.isBlank()) {
                                null
                            } else {
                                try {
                                    cost.toDouble().takeIf { it >= 0 }
                                } catch (e: NumberFormatException) {
                                    costError = "Please enter a valid cost"
                                    return@Button
                                }
                            }

                            if (costValue != null && costValue < 0) {
                                costError = "Cost cannot be negative"
                                return@Button
                            }

                            // Complete the task
                            viewModel.completeMaintenanceTask(
                                id = taskId,
                                cost = costValue,
                                notes = notes.takeIf { it.isNotBlank() }
                            )
                        },
                        enabled = !uiState.isLoading,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        if (uiState.isLoading) {
                            CircularProgressIndicator(
                                modifier = Modifier.size(16.dp),
                                strokeWidth = 2.dp
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                        }
                        Text("Complete Task")
                    }
                }
            }

            // Error message
            uiState.error?.let { error ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer)
                ) {
                    Text(
                        text = error,
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onErrorContainer
                    )
                }
            }
        }
    }
}

@Composable
private fun TaskCompletionInfoCard(
    task: com.boattracking.database.entities.MaintenanceTaskEntity,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }

    Card(
        modifier = modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp)
        ) {
            Text(
                text = task.title,
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )

            if (!task.description.isNullOrBlank()) {
                Text(
                    text = task.description,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                if (!task.component.isNullOrBlank()) {
                    Text(
                        text = "Component: ${task.component}",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                Text(
                    text = "Due: ${dateFormat.format(task.dueDate)}",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}