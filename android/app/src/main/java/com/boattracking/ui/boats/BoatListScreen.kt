package com.boattracking.ui.boats

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Check
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.boattracking.database.entities.BoatEntity
import com.boattracking.viewmodel.BoatViewModel
import kotlinx.coroutines.launch

/**
 * Screen displaying list of all boats with management options.
 * Allows creating new boats, enabling/disabling boats, and setting active boat.
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BoatListScreen(
    modifier: Modifier = Modifier,
    viewModel: BoatViewModel = viewModel()
) {
    val boats by viewModel.getAllBoats().collectAsState(initial = emptyList())
    val isLoading by viewModel.isLoading.collectAsState()
    val error by viewModel.error.collectAsState()
    val successMessage by viewModel.successMessage.collectAsState()
    
    var showAddBoatDialog by remember { mutableStateOf(false) }
    val snackbarHostState = remember { SnackbarHostState() }
    val scope = rememberCoroutineScope()

    // Show error or success messages
    LaunchedEffect(error) {
        error?.let {
            scope.launch {
                snackbarHostState.showSnackbar(it)
                viewModel.clearError()
            }
        }
    }

    LaunchedEffect(successMessage) {
        successMessage?.let {
            scope.launch {
                snackbarHostState.showSnackbar(it)
                viewModel.clearSuccessMessage()
            }
        }
    }

    Scaffold(
        modifier = modifier,
        topBar = {
            TopAppBar(
                title = { Text("Boats") },
                actions = {
                    IconButton(onClick = { viewModel.syncBoatsFromApi() }) {
                        Icon(
                            imageVector = Icons.Default.Check,
                            contentDescription = "Sync boats"
                        )
                    }
                }
            )
        },
        floatingActionButton = {
            FloatingActionButton(
                onClick = { showAddBoatDialog = true }
            ) {
                Icon(Icons.Default.Add, contentDescription = "Add boat")
            }
        },
        snackbarHost = { SnackbarHost(snackbarHostState) }
    ) { paddingValues ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            when {
                isLoading && boats.isEmpty() -> {
                    CircularProgressIndicator(
                        modifier = Modifier.align(Alignment.Center)
                    )
                }
                boats.isEmpty() -> {
                    Text(
                        text = "No boats yet. Add your first boat!",
                        modifier = Modifier
                            .align(Alignment.Center)
                            .padding(16.dp),
                        style = MaterialTheme.typography.bodyLarge
                    )
                }
                else -> {
                    LazyColumn(
                        modifier = Modifier.fillMaxSize(),
                        contentPadding = PaddingValues(16.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items(boats) { boat ->
                            BoatCard(
                                boat = boat,
                                onToggleEnabled = { enabled ->
                                    viewModel.toggleBoatStatus(boat.id, enabled)
                                },
                                onSetActive = {
                                    viewModel.setActiveBoat(boat.id)
                                }
                            )
                        }
                    }
                }
            }
        }
    }

    if (showAddBoatDialog) {
        AddBoatDialog(
            onDismiss = { showAddBoatDialog = false },
            onConfirm = { name ->
                viewModel.createBoat(name)
                showAddBoatDialog = false
            }
        )
    }
}

@Composable
fun BoatCard(
    boat: BoatEntity,
    onToggleEnabled: (Boolean) -> Unit,
    onSetActive: () -> Unit
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = boat.name,
                        style = MaterialTheme.typography.titleMedium
                    )
                    
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.padding(top = 4.dp)
                    ) {
                        if (boat.isActive) {
                            AssistChip(
                                onClick = { },
                                label = { Text("Active") },
                                leadingIcon = {
                                    Icon(
                                        Icons.Default.Check,
                                        contentDescription = null,
                                        modifier = Modifier.size(16.dp)
                                    )
                                }
                            )
                        }
                        
                        if (!boat.synced) {
                            AssistChip(
                                onClick = { },
                                label = { Text("Not synced") }
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(8.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                // Enable/Disable toggle
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.weight(1f)
                ) {
                    Text(
                        text = if (boat.enabled) "Enabled" else "Disabled",
                        style = MaterialTheme.typography.bodySmall
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Switch(
                        checked = boat.enabled,
                        onCheckedChange = onToggleEnabled
                    )
                }

                // Set Active button
                if (!boat.isActive && boat.enabled) {
                    Button(
                        onClick = onSetActive,
                        modifier = Modifier.weight(1f)
                    ) {
                        Text("Set Active")
                    }
                }
            }
        }
    }
}
