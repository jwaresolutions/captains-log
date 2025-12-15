package com.captainslog.ui.maintenance

import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.viewmodel.compose.viewModel
import com.captainslog.viewmodel.BoatViewModel
import com.captainslog.viewmodel.MaintenanceTemplateViewModel

@Composable
fun MaintenanceNavigation(
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current
    val maintenanceViewModel: MaintenanceTemplateViewModel = viewModel { MaintenanceTemplateViewModel(context) }
    val boatViewModel: BoatViewModel = viewModel { BoatViewModel(context.applicationContext as android.app.Application) }
    
    var currentScreen by remember { mutableStateOf(MaintenanceScreen.List) }
    var selectedTemplateId by remember { mutableStateOf<String?>(null) }
    var selectedEventId by remember { mutableStateOf<String?>(null) }

    when (currentScreen) {
        MaintenanceScreen.List -> {
            MaintenanceListScreen(
                onNavigateToTemplateDetail = { templateId ->
                    selectedTemplateId = templateId
                    currentScreen = MaintenanceScreen.TemplateDetail
                },
                onNavigateToEventDetail = { eventId ->
                    selectedEventId = eventId
                    currentScreen = MaintenanceScreen.EventDetail
                },
                onNavigateToCreateTemplate = {
                    currentScreen = MaintenanceScreen.CreateTemplate
                },
                onNavigateToEditTemplate = { templateId ->
                    selectedTemplateId = templateId
                    currentScreen = MaintenanceScreen.EditTemplate
                },
                modifier = modifier,
                viewModel = maintenanceViewModel
            )
        }
        
        MaintenanceScreen.TemplateDetail -> {
            selectedTemplateId?.let { templateId ->
                MaintenanceTemplateDetailScreen(
                    templateId = templateId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.List
                        selectedTemplateId = null
                    },
                    onNavigateToEdit = { editTemplateId ->
                        selectedTemplateId = editTemplateId
                        currentScreen = MaintenanceScreen.EditTemplate
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel
                )
            }
        }
        
        MaintenanceScreen.EventDetail -> {
            selectedEventId?.let { eventId ->
                MaintenanceEventDetailScreen(
                    eventId = eventId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.List
                        selectedEventId = null
                    },
                    onNavigateToTemplate = { templateId ->
                        selectedTemplateId = templateId
                        currentScreen = MaintenanceScreen.TemplateDetail
                    },
                    onNavigateToComplete = { completeEventId ->
                        selectedEventId = completeEventId
                        currentScreen = MaintenanceScreen.CompleteEvent
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel
                )
            }
        }
        
        MaintenanceScreen.CreateTemplate -> {
            MaintenanceTemplateFormScreen(
                templateId = null,
                onNavigateBack = {
                    currentScreen = MaintenanceScreen.List
                },
                modifier = modifier,
                viewModel = maintenanceViewModel,
                boatViewModel = boatViewModel
            )
        }
        
        MaintenanceScreen.EditTemplate -> {
            selectedTemplateId?.let { templateId ->
                MaintenanceTemplateFormScreen(
                    templateId = templateId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.TemplateDetail
                    },
                    modifier = modifier,
                    viewModel = maintenanceViewModel,
                    boatViewModel = boatViewModel
                )
            }
        }
        
        MaintenanceScreen.CompleteEvent -> {
            selectedEventId?.let { eventId ->
                MaintenanceEventCompletionScreen(
                    eventId = eventId,
                    onNavigateBack = {
                        currentScreen = MaintenanceScreen.EventDetail
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
    TemplateDetail,
    EventDetail,
    CreateTemplate,
    EditTemplate,
    CompleteEvent
}