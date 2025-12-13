package com.captainslog.ui.maintenance

import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.viewmodel.compose.viewModel
import com.captainslog.viewmodel.BoatViewModel
import com.captainslog.viewmodel.MaintenanceViewModel

@Composable
fun MaintenanceNavigation(
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val maintenanceViewModel: MaintenanceViewModel = viewModel { MaintenanceViewModel(context) }
    val boatViewModel: BoatViewModel = viewModel { BoatViewModel(context.applicationContext as android.app.Application) }
    
    var currentScreen by remember { mutableStateOf(MaintenanceScreen.List) }
    var selectedTaskId by remember { mutableStateOf<String?>(null) }

    when (currentScreen) {
        MaintenanceScreen.List -> {
            MaintenanceListScreen(
                onNavigateToTaskDetail = { taskId ->
                    selectedTaskId = taskId
                    currentScreen = MaintenanceScreen.Detail
                },
                onNavigateToCreateTask = {
                    currentScreen = MaintenanceScreen.Create
                },
                onNavigateToEdit = { taskId ->
                    selectedTaskId = taskId
                    currentScreen = MaintenanceScreen.Edit
                },
                modifier = modifier,
                viewModel = maintenanceViewModel
            )
        }
        
        MaintenanceScreen.Detail -> {
            selectedTaskId?.let { taskId ->
                MaintenanceTaskDetailScreen(
                    taskId = taskId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.List
                        selectedTaskId = null
                    },
                    onNavigateToEdit = { editTaskId ->
                        selectedTaskId = editTaskId
                        currentScreen = MaintenanceScreen.Edit
                    },
                    onNavigateToComplete = { completeTaskId ->
                        selectedTaskId = completeTaskId
                        currentScreen = MaintenanceScreen.Complete
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel
                )
            }
        }
        
        MaintenanceScreen.Create -> {
            MaintenanceTaskFormScreen(
                taskId = null,
                onNavigateBack = {
                    currentScreen = MaintenanceScreen.List
                },
                modifier = modifier,
                viewModel = maintenanceViewModel,
                boatViewModel = boatViewModel
            )
        }
        
        MaintenanceScreen.Edit -> {
            selectedTaskId?.let { taskId ->
                MaintenanceTaskFormScreen(
                    taskId = taskId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.Detail
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel,
                    boatViewModel = boatViewModel
                )
            }
        }
        
        MaintenanceScreen.Complete -> {
            selectedTaskId?.let { taskId ->
                MaintenanceTaskCompletionScreen(
                    taskId = taskId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.Detail
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel
                )
            }
        }
    }
}

enum class MaintenanceScreen {
    List,
    Detail,
    Create,
    Edit,
    Complete
}