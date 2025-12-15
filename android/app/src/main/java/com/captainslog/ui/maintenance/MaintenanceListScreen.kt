package com.captainslog.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.background
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.captainslog.database.entities.MaintenanceTemplateEntity
import com.captainslog.database.entities.MaintenanceEventEntity
import com.captainslog.viewmodel.MaintenanceTemplateViewModel
import com.captainslog.viewmodel.TaskColor
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MaintenanceListScreen(
    onNavigateToTemplateDetail: (String) -> Unit,
    onNavigateToEventDetail: (String) -> Unit,
    onNavigateToCreateTemplate: () -> Unit,
    onNavigateToEditTemplate: (String) -> Unit = { },
    modifier: Modifier = Modifier,
    viewModel: MaintenanceTemplateViewModel
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val allTemplates by viewModel.allTemplates.collectAsStateWithLifecycle(initialValue = emptyList())
    val upcomingEvents by viewModel.upcomingEvents.collectAsStateWithLifecycle(initialValue = emptyList())
    val completedEvents by viewModel.completedEvents.collectAsStateWithLifecycle(initialValue = emptyList())
    
    var selectedTab by remember { mutableStateOf(MaintenanceTab.Schedule) }

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
                                MaintenanceTab.Schedule -> {
                                    if (allTemplates.isNotEmpty()) {
                                        Badge {
                                            Text("${allTemplates.size}")
                                        }
                                    }
                                }
                                MaintenanceTab.Upcoming -> {
                                    if (upcomingEvents.isNotEmpty()) {
                                        Badge {
                                            Text("${upcomingEvents.size}")
                                        }
                                    }
                                }
                                MaintenanceTab.Complete -> {
                                    if (completedEvents.isNotEmpty()) {
                                        Badge {
                                            Text("${completedEvents.size}")
                                        }
                                    }
                                }
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
                    when (selectedTab) {
                        MaintenanceTab.Schedule -> {
                            if (allTemplates.isEmpty()) {
                                EmptyMaintenanceState(
                                    tab = selectedTab,
                                    onCreateTemplate = onNavigateToCreateTemplate,
                                    modifier = Modifier.align(Alignment.Center)
                                )
                            } else {
                                LazyColumn(
                                    modifier = Modifier.fillMaxSize(),
                                    contentPadding = PaddingValues(16.dp),
                                    verticalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    items(allTemplates) { template ->
                                        MaintenanceTemplateCard(
                                            template = template,
                                            onClick = { 
                                                onNavigateToTemplateDetail(template.id) 
                                            },
                                            onEdit = { onNavigateToEditTemplate(template.id) },
                                            onDelete = { viewModel.deleteTemplate(template.id) },
                                            viewModel = viewModel
                                        )
                                    }
                                }
                            }
                        }
                        MaintenanceTab.Upcoming -> {
                            if (upcomingEvents.isEmpty()) {
                                EmptyMaintenanceState(
                                    tab = selectedTab,
                                    onCreateTemplate = onNavigateToCreateTemplate,
                                    modifier = Modifier.align(Alignment.Center)
                                )
                            } else {
                                LazyColumn(
                                    modifier = Modifier.fillMaxSize(),
                                    contentPadding = PaddingValues(16.dp),
                                    verticalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    items(upcomingEvents) { event ->
                                        MaintenanceEventCard(
                                            event = event,
                                            onClick = { 
                                                onNavigateToEventDetail(event.id) 
                                            },
                                            onComplete = { 
                                                viewModel.completeEvent(event.id, null, null, null) 
                                            },
                                            onNavigateToTemplate = { 
                                                onNavigateToTemplateDetail(event.templateId) 
                                            },
                                            viewModel = viewModel
                                        )
                                    }
                                }
                            }
                        }
                        MaintenanceTab.Complete -> {
                            if (completedEvents.isEmpty()) {
                                EmptyMaintenanceState(
                                    tab = selectedTab,
                                    onCreateTemplate = onNavigateToCreateTemplate,
                                    modifier = Modifier.align(Alignment.Center)
                                )
                            } else {
                                LazyColumn(
                                    modifier = Modifier.fillMaxSize(),
                                    contentPadding = PaddingValues(16.dp),
                                    verticalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    items(completedEvents) { event ->
                                        CompletedMaintenanceEventCard(
                                            event = event,
                                            onClick = { 
                                                onNavigateToEventDetail(event.id) 
                                            },
                                            onNavigateToTemplate = { 
                                                onNavigateToTemplateDetail(event.templateId) 
                                            },
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
        
        // Floating Action Button - only show on Schedule tab
        if (selectedTab == MaintenanceTab.Schedule) {
            FloatingActionButton(
                onClick = onNavigateToCreateTemplate,
                modifier = Modifier
                    .align(Alignment.BottomEnd)
                    .padding(16.dp)
            ) {
                Icon(Icons.Default.Add, contentDescription = "Add Maintenance Template")
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun MaintenanceTemplateCard(
    template: MaintenanceTemplateEntity,
    onClick: () -> Unit,
    onEdit: () -> Unit,
    onDelete: () -> Unit,
    viewModel: MaintenanceTemplateViewModel,
    modifier: Modifier = Modifier
) {
    val recurrenceText = viewModel.formatRecurrence(template)
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
                        text = template.title,
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    Text(
                        text = template.description,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    
                    Text(
                        text = "Component: ${template.component}",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                Icon(
                    Icons.Default.Settings,
                    contentDescription = "Template",
                    tint = MaterialTheme.colorScheme.primary
                )
            }

            Divider()

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "Schedule: $recurrenceText",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    
                    template.estimatedCost?.let { cost ->
                        Text(
                            text = "Estimated Cost: $${String.format("%.2f", cost)}",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    template.estimatedTime?.let { time ->
                        Text(
                            text = "Estimated Time: ${time}min",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }
            
            // Action buttons
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                horizontalArrangement = Arrangement.SpaceEvenly,
                verticalAlignment = Alignment.CenterVertically
            ) {
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
            title = { Text("Delete Maintenance Template") },
            text = { Text("Are you sure you want to delete \"${template.title}\"? This will also delete all future events for this template.") },
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

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun MaintenanceEventCard(
    event: MaintenanceEventEntity,
    onClick: () -> Unit,
    onComplete: () -> Unit,
    onNavigateToTemplate: () -> Unit,
    viewModel: MaintenanceTemplateViewModel,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }
    val eventColor = viewModel.getEventColor(event)
    val daysUntilDue = viewModel.getDaysUntilDue(event)
    val template by viewModel.getTemplateById(event.templateId).collectAsStateWithLifecycle(initialValue = null)

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
                        text = template?.title ?: "Maintenance Event",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    template?.description?.let { description ->
                        Text(
                            text = description,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    template?.component?.let { component ->
                        Text(
                            text = "Component: $component",
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
                
                val badgeColor = when (eventColor) {
                    TaskColor.RED -> Color(0xFFFFEBEE) // Light red
                    TaskColor.YELLOW -> Color(0xFFFFF3CD) // Light yellow
                    TaskColor.GREEN -> Color(0xFFD4EDDA) // Light green
                    TaskColor.GRAY -> Color(0xFFE0E0E0) // Light gray
                }
                
                val textColor = when (eventColor) {
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
                        text = "Due: ${dateFormat.format(event.dueDate)}",
                        style = MaterialTheme.typography.bodySmall,
                        fontWeight = if (eventColor == TaskColor.RED || eventColor == TaskColor.YELLOW) FontWeight.Bold else FontWeight.Normal,
                        color = when (eventColor) {
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
                        color = when (eventColor) {
                            TaskColor.RED -> MaterialTheme.colorScheme.error
                            TaskColor.YELLOW -> MaterialTheme.colorScheme.primary
                            else -> MaterialTheme.colorScheme.onSurfaceVariant
                        }
                    )
                }

                // Link to template
                TextButton(
                    onClick = onNavigateToTemplate,
                    colors = ButtonDefaults.textButtonColors(
                        contentColor = MaterialTheme.colorScheme.primary
                    )
                ) {
                    Text("View Template")
                    Icon(
                        Icons.Default.ArrowForward,
                        contentDescription = "Go to template",
                        modifier = Modifier.size(16.dp)
                    )
                }
            }
            
            // Action buttons
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
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun CompletedMaintenanceEventCard(
    event: MaintenanceEventEntity,
    onClick: () -> Unit,
    onNavigateToTemplate: () -> Unit,
    viewModel: MaintenanceTemplateViewModel,
    modifier: Modifier = Modifier
) {
    val dateFormat = remember { SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()) }
    val template by viewModel.getTemplateById(event.templateId).collectAsStateWithLifecycle(initialValue = null)

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
                        text = template?.title ?: "Maintenance Event",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    template?.component?.let { component ->
                        Text(
                            text = "Component: $component",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    if (!event.notes.isNullOrBlank()) {
                        Text(
                            text = event.notes!!,
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    event.actualCost?.let { cost ->
                        Text(
                            text = "Cost: $${String.format("%.2f", cost)}",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    
                    event.actualTime?.let { time ->
                        Text(
                            text = "Time: ${time}min",
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
                    text = "Completed: ${dateFormat.format(event.completedAt!!)}",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                // Link to template
                TextButton(
                    onClick = onNavigateToTemplate,
                    colors = ButtonDefaults.textButtonColors(
                        contentColor = MaterialTheme.colorScheme.primary
                    )
                ) {
                    Text("View Template")
                    Icon(
                        Icons.Default.ArrowForward,
                        contentDescription = "Go to template",
                        modifier = Modifier.size(16.dp)
                    )
                }
            }
        }
    }
}

@Composable
private fun EmptyMaintenanceState(
    tab: MaintenanceTab,
    onCreateTemplate: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier.padding(32.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Text(
            text = when (tab) {
                MaintenanceTab.Schedule -> "No maintenance templates"
                MaintenanceTab.Upcoming -> "No upcoming events"
                MaintenanceTab.Complete -> "No completed events"
            },
            style = MaterialTheme.typography.headlineSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        
        Text(
            text = when (tab) {
                MaintenanceTab.Schedule -> "Create your first maintenance template to schedule recurring maintenance tasks."
                MaintenanceTab.Upcoming -> "No maintenance events are due in the next 90 days or overdue."
                MaintenanceTab.Complete -> "No maintenance events have been completed yet."
            },
            style = MaterialTheme.typography.bodyMedium,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )

        if (tab == MaintenanceTab.Schedule) {
            Button(onClick = onCreateTemplate) {
                Text("Create Maintenance Template")
            }
        }
    }
}

enum class MaintenanceTab(val title: String) {
    Schedule("Schedule"),
    Upcoming("Upcoming"),
    Complete("Complete")
}