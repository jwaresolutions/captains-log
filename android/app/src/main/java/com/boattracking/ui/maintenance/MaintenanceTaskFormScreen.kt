package com.boattracking.ui.maintenance

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.DateRange
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Delete

import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.FileProvider
import androidx.core.content.ContextCompat
import android.Manifest
import android.content.pm.PackageManager
import java.io.File
import coil.compose.AsyncImage
import androidx.compose.foundation.layout.size
import com.boattracking.database.entities.BoatEntity
import com.boattracking.network.models.RecurrenceSchedule
import com.boattracking.viewmodel.BoatViewModel
import com.boattracking.viewmodel.MaintenanceViewModel
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MaintenanceTaskFormScreen(
    taskId: String? = null, // null for create, non-null for edit
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier,
    viewModel: MaintenanceViewModel,
    boatViewModel: BoatViewModel
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val task by if (taskId != null) {
        viewModel.getTaskById(taskId).collectAsStateWithLifecycle(initialValue = null)
    } else {
        remember { mutableStateOf(null) }
    }
    
    val boats by boatViewModel.getAllBoats().collectAsStateWithLifecycle(initialValue = emptyList())
    
    // Form state
    var title by remember { mutableStateOf("") }
    var description by remember { mutableStateOf("") }
    var component by remember { mutableStateOf("") }
    var selectedBoat by remember { mutableStateOf<BoatEntity?>(null) }
    var dueDate by remember { mutableStateOf(Date()) }
    var hasRecurrence by remember { mutableStateOf(false) }
    var recurrenceType by remember { mutableStateOf("days") }
    var recurrenceInterval by remember { mutableStateOf("30") }
    var photos by remember { mutableStateOf<List<String>>(emptyList()) }
    var showPhotoOptions by remember { mutableStateOf(false) }
    
    // Photo functionality
    val context = LocalContext.current
    var tempPhotoUri by remember { mutableStateOf<android.net.Uri?>(null) }
    
    // Gallery launcher
    val galleryLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent()
    ) { uri ->
        uri?.let {
            android.util.Log.d("MaintenanceForm", "Gallery photo selected: $it")
            photos = photos + it.toString()
        }
    }
    
    // Camera launcher
    val cameraLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.TakePicture()
    ) { success ->
        android.util.Log.d("MaintenanceForm", "Camera result: $success")
        if (success) {
            tempPhotoUri?.let {
                android.util.Log.d("MaintenanceForm", "Camera photo saved: $it")
                photos = photos + it.toString()
            }
        }
    }
    
    // Camera permission launcher
    val cameraPermissionLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        android.util.Log.d("MaintenanceForm", "Camera permission granted: $isGranted")
        if (isGranted) {
            // Permission granted, launch camera
            try {
                val tempPhotosDir = File(context.filesDir, "temp_photos")
                if (!tempPhotosDir.exists()) {
                    tempPhotosDir.mkdirs()
                }
                val photoFile = File(
                    tempPhotosDir,
                    "maintenance_photo_${System.currentTimeMillis()}.jpg"
                )
                tempPhotoUri = FileProvider.getUriForFile(
                    context,
                    "${context.packageName}.fileprovider",
                    photoFile
                )
                android.util.Log.d("MaintenanceForm", "Launching camera with URI: $tempPhotoUri")
                tempPhotoUri?.let { uri ->
                    cameraLauncher.launch(uri)
                }
            } catch (e: Exception) {
                android.util.Log.e("MaintenanceForm", "Error launching camera after permission", e)
            }
        } else {
            android.util.Log.w("MaintenanceForm", "Camera permission denied")
        }
    }
    
    // Error states
    var titleError by remember { mutableStateOf<String?>(null) }
    var boatError by remember { mutableStateOf<String?>(null) }
    var recurrenceError by remember { mutableStateOf<String?>(null) }
    
    // Date picker state
    var showDatePicker by remember { mutableStateOf(false) }
    val datePickerState = rememberDatePickerState(
        initialSelectedDateMillis = dueDate.time
    )

    // Initialize form with existing task data
    LaunchedEffect(task) {
        task?.let { existingTask ->
            title = existingTask.title
            description = existingTask.description ?: ""
            component = existingTask.component ?: ""
            dueDate = existingTask.dueDate
            hasRecurrence = existingTask.recurrenceType != null
            recurrenceType = existingTask.recurrenceType ?: "days"
            recurrenceInterval = existingTask.recurrenceInterval?.toString() ?: "30"
            
            // Find the boat
            selectedBoat = boats.find { it.id == existingTask.boatId }
        }
    }

    // Handle form submission success
    LaunchedEffect(uiState.message) {
        uiState.message?.let { message ->
            android.util.Log.d("MaintenanceForm", "Received message: $message")
            if (message.contains("created") || message.contains("updated")) {
                android.util.Log.d("MaintenanceForm", "Success message received, navigating back")
                
                // TODO: Upload photos to the created/updated task
                // For now, photos are stored locally but not uploaded
                // This would require the task ID from the creation response
                
                // Clear the message to prevent re-triggering
                viewModel.clearMessage()
                onNavigateBack()
            }
        }
    }

    // Handle form submission errors
    LaunchedEffect(uiState.error) {
        uiState.error?.let { error ->
            android.util.Log.e("MaintenanceForm", "Received error: $error")
        }
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text(if (taskId == null) "Create Maintenance Task" else "Edit Maintenance Task") },
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
                .verticalScroll(rememberScrollState())
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    Text(
                        text = "Task Details",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )

                    // Title field
                    OutlinedTextField(
                        value = title,
                        onValueChange = { 
                            title = it
                            titleError = null
                        },
                        label = { Text("Title *") },
                        placeholder = { Text("e.g., Oil Change, Engine Service") },
                        isError = titleError != null,
                        supportingText = titleError?.let { { Text(it) } },
                        modifier = Modifier.fillMaxWidth()
                    )

                    // Description field
                    OutlinedTextField(
                        value = description,
                        onValueChange = { description = it },
                        label = { Text("Description") },
                        placeholder = { Text("Additional details about the maintenance task...") },
                        minLines = 2,
                        maxLines = 4,
                        modifier = Modifier.fillMaxWidth()
                    )

                    // Component field
                    OutlinedTextField(
                        value = component,
                        onValueChange = { component = it },
                        label = { Text("Component/System") },
                        placeholder = { Text("e.g., Engine, Electrical, Hull") },
                        modifier = Modifier.fillMaxWidth()
                    )

                    // Boat selection
                    var expandedBoat by remember { mutableStateOf(false) }
                    ExposedDropdownMenuBox(
                        expanded = expandedBoat,
                        onExpandedChange = { expandedBoat = !expandedBoat }
                    ) {
                        OutlinedTextField(
                            value = selectedBoat?.name ?: "",
                            onValueChange = { },
                            readOnly = true,
                            label = { Text("Boat *") },
                            placeholder = { Text("Select a boat") },
                            trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expandedBoat) },
                            isError = boatError != null,
                            supportingText = boatError?.let { { Text(it) } },
                            modifier = Modifier
                                .fillMaxWidth()
                                .menuAnchor()
                        )
                        
                        ExposedDropdownMenu(
                            expanded = expandedBoat,
                            onDismissRequest = { expandedBoat = false }
                        ) {
                            boats.forEach { boat ->
                                DropdownMenuItem(
                                    text = { Text(boat.name) },
                                    onClick = {
                                        selectedBoat = boat
                                        boatError = null
                                        expandedBoat = false
                                    }
                                )
                            }
                        }
                    }

                    // Due date
                    OutlinedTextField(
                        value = SimpleDateFormat("MMM dd, yyyy", Locale.getDefault()).format(dueDate),
                        onValueChange = { },
                        readOnly = true,
                        label = { Text("Due Date") },
                        trailingIcon = {
                            IconButton(onClick = { showDatePicker = true }) {
                                Icon(Icons.Default.DateRange, contentDescription = "Select Date")
                            }
                        },
                        modifier = Modifier.fillMaxWidth()
                    )
                }
            }

            // Recurrence section
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Checkbox(
                            checked = hasRecurrence,
                            onCheckedChange = { hasRecurrence = it }
                        )
                        Text(
                            text = "Recurring Task",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold
                        )
                    }

                    if (hasRecurrence) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            verticalAlignment = Alignment.Top
                        ) {
                            // Interval
                            OutlinedTextField(
                                value = recurrenceInterval,
                                onValueChange = { 
                                    recurrenceInterval = it
                                    recurrenceError = null
                                },
                                label = { Text("Every") },
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
                                isError = recurrenceError != null,
                                modifier = Modifier.weight(1f)
                            )

                            // Type
                            var expandedRecurrence by remember { mutableStateOf(false) }
                            ExposedDropdownMenuBox(
                                expanded = expandedRecurrence,
                                onExpandedChange = { expandedRecurrence = !expandedRecurrence },
                                modifier = Modifier.weight(2f)
                            ) {
                                OutlinedTextField(
                                    value = recurrenceType.replaceFirstChar { it.uppercase() },
                                    onValueChange = { },
                                    readOnly = true,
                                    label = { Text("Period") },
                                    trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = expandedRecurrence) },
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .menuAnchor()
                                )
                                
                                ExposedDropdownMenu(
                                    expanded = expandedRecurrence,
                                    onDismissRequest = { expandedRecurrence = false }
                                ) {
                                    listOf("days", "weeks", "months", "years").forEach { type ->
                                        DropdownMenuItem(
                                            text = { Text(type.replaceFirstChar { it.uppercase() }) },
                                            onClick = {
                                                recurrenceType = type
                                                expandedRecurrence = false
                                            }
                                        )
                                    }
                                }
                            }
                        }

                        recurrenceError?.let { error ->
                            Text(
                                text = error,
                                color = MaterialTheme.colorScheme.error,
                                style = MaterialTheme.typography.bodySmall
                            )
                        }
                    }
                }
            }

            // Photos section
            Card(
                modifier = Modifier.fillMaxWidth()
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    Text(
                        text = "Photos",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.Bold
                    )
                    
                    Text(
                        text = "Add photos of the equipment or area requiring maintenance",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    
                    // Add photo buttons
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        OutlinedButton(
                            onClick = { 
                                // Check camera permission first
                                when (ContextCompat.checkSelfPermission(context, Manifest.permission.CAMERA)) {
                                    PackageManager.PERMISSION_GRANTED -> {
                                        // Permission already granted, launch camera directly
                                        try {
                                            val tempPhotosDir = File(context.filesDir, "temp_photos")
                                            if (!tempPhotosDir.exists()) {
                                                tempPhotosDir.mkdirs()
                                            }
                                            val photoFile = File(
                                                tempPhotosDir,
                                                "maintenance_photo_${System.currentTimeMillis()}.jpg"
                                            )
                                            tempPhotoUri = FileProvider.getUriForFile(
                                                context,
                                                "${context.packageName}.fileprovider",
                                                photoFile
                                            )
                                            android.util.Log.d("MaintenanceForm", "Launching camera with URI: $tempPhotoUri")
                                            tempPhotoUri?.let { uri ->
                                                cameraLauncher.launch(uri)
                                            }
                                        } catch (e: Exception) {
                                            android.util.Log.e("MaintenanceForm", "Error launching camera", e)
                                        }
                                    }
                                    else -> {
                                        // Request camera permission
                                        android.util.Log.d("MaintenanceForm", "Requesting camera permission")
                                        cameraPermissionLauncher.launch(Manifest.permission.CAMERA)
                                    }
                                }
                            },
                            modifier = Modifier.weight(1f)
                        ) {
                            Icon(Icons.Default.Add, contentDescription = "Take Photo")
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("Camera")
                        }
                        
                        OutlinedButton(
                            onClick = { 
                                try {
                                    android.util.Log.d("MaintenanceForm", "Launching gallery picker")
                                    galleryLauncher.launch("image/*")
                                } catch (e: Exception) {
                                    android.util.Log.e("MaintenanceForm", "Error launching gallery", e)
                                }
                            },
                            modifier = Modifier.weight(1f)
                        ) {
                            Icon(Icons.Default.Add, contentDescription = "Choose Photo")
                            Spacer(modifier = Modifier.width(4.dp))
                            Text("Gallery")
                        }
                    }
                    
                    // Display selected photos
                    if (photos.isNotEmpty()) {
                        photos.forEachIndexed { index, photoUri ->
                            Card(
                                modifier = Modifier.fillMaxWidth()
                            ) {
                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .padding(8.dp),
                                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    // Photo thumbnail
                                    AsyncImage(
                                        model = photoUri,
                                        contentDescription = "Photo ${index + 1}",
                                        modifier = Modifier.size(60.dp)
                                    )
                                    
                                    // Photo info
                                    Column(
                                        modifier = Modifier.weight(1f)
                                    ) {
                                        Text(
                                            text = "Photo ${index + 1}",
                                            style = MaterialTheme.typography.bodyMedium,
                                            fontWeight = FontWeight.Medium
                                        )
                                        Text(
                                            text = "Maintenance photo",
                                            style = MaterialTheme.typography.bodySmall,
                                            color = MaterialTheme.colorScheme.onSurfaceVariant
                                        )
                                    }
                                    
                                    // Delete button
                                    IconButton(
                                        onClick = { 
                                            photos = photos.filterIndexed { i, _ -> i != index }
                                        }
                                    ) {
                                        Icon(
                                            Icons.Default.Delete, 
                                            contentDescription = "Remove Photo",
                                            tint = MaterialTheme.colorScheme.error
                                        )
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // Show helpful message when no boats are available
            if (boats.isEmpty()) {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Text(
                            text = "No Boats Available",
                            style = MaterialTheme.typography.titleMedium,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onPrimaryContainer
                        )
                        Text(
                            text = "You need to create a boat before you can create maintenance tasks. Please go to the Home screen and create a boat first.",
                            color = MaterialTheme.colorScheme.onPrimaryContainer
                        )
                    }
                }
            }

            // Action buttons
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                // Cancel button
                OutlinedButton(
                    onClick = onNavigateBack,
                    modifier = Modifier.weight(1f)
                ) {
                    Text("Cancel")
                }
                
                // Submit button
                Button(
                    onClick = {
                        println("BUTTON CLICKED - MaintenanceForm")
                        
                        // Clear previous errors
                        titleError = null
                        boatError = null
                        recurrenceError = null
                        
                        // Validate form
                        var hasErrors = false

                        if (title.isBlank()) {
                            titleError = "Title is required"
                            hasErrors = true
                        }

                        if (selectedBoat == null) {
                            boatError = "Please select a boat"
                            hasErrors = true
                        }

                        if (hasRecurrence) {
                            val interval = recurrenceInterval.toIntOrNull()
                            if (interval == null || interval <= 0) {
                                recurrenceError = "Please enter a valid interval (positive number)"
                                hasErrors = true
                            }
                        }

                        if (hasErrors) {
                            return@Button
                        }

                        // Create recurrence schedule
                        val recurrence = if (hasRecurrence) {
                            val intervalValue = recurrenceInterval.toIntOrNull() ?: 1
                            RecurrenceSchedule(
                                type = recurrenceType,
                                interval = intervalValue
                            )
                        } else null

                        // Submit form
                        if (taskId == null) {
                            // Create new task
                            viewModel.createMaintenanceTask(
                                boatId = selectedBoat!!.id,
                                title = title.trim(),
                                description = description.takeIf { it.isNotBlank() }?.trim(),
                                component = component.takeIf { it.isNotBlank() }?.trim(),
                                dueDate = dueDate,
                                recurrence = recurrence
                            )
                        } else {
                            // Update existing task
                            viewModel.updateMaintenanceTask(
                                id = taskId,
                                title = title.trim(),
                                description = description.takeIf { it.isNotBlank() }?.trim(),
                                component = component.takeIf { it.isNotBlank() }?.trim(),
                                dueDate = dueDate,
                                recurrence = recurrence
                            )
                        }
                    },
                    enabled = !uiState.isLoading && boats.isNotEmpty(),
                    modifier = Modifier.weight(1f)
                ) {
                    if (uiState.isLoading) {
                        CircularProgressIndicator(
                            modifier = Modifier.size(16.dp),
                            strokeWidth = 2.dp
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                    }
                    Text(if (taskId == null) "Create Task" else "Update Task")
                }
            }

            // Success message
            uiState.message?.let { message ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
                ) {
                    Text(
                        text = message,
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onPrimaryContainer
                    )
                }
            }

            // Error message
            uiState.error?.let { error ->
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer)
                ) {
                    Column(
                        modifier = Modifier.padding(16.dp)
                    ) {
                        Text(
                            text = "Error",
                            style = MaterialTheme.typography.titleMedium,
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )
                        Text(
                            text = error,
                            color = MaterialTheme.colorScheme.onErrorContainer
                        )
                        Spacer(modifier = Modifier.height(8.dp))
                        Button(
                            onClick = { viewModel.clearError() },
                            colors = ButtonDefaults.buttonColors(
                                containerColor = MaterialTheme.colorScheme.error
                            )
                        ) {
                            Text("Dismiss")
                        }
                    }
                }
            }
        }
    }

    // Date picker dialog
    if (showDatePicker) {
        DatePickerDialog(
            onDateSelected = { selectedDateMillis ->
                selectedDateMillis?.let {
                    dueDate = Date(it)
                }
                showDatePicker = false
            },
            onDismiss = { showDatePicker = false }
        )
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun DatePickerDialog(
    onDateSelected: (Long?) -> Unit,
    onDismiss: () -> Unit
) {
    val datePickerState = rememberDatePickerState()

    DatePickerDialog(
        onDismissRequest = onDismiss,
        confirmButton = {
            TextButton(onClick = { onDateSelected(datePickerState.selectedDateMillis) }) {
                Text("OK")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text("Cancel")
            }
        }
    ) {
        DatePicker(state = datePickerState)
    }
}