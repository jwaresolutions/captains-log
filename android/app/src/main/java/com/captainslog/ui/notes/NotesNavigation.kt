package com.captainslog.ui.notes

import androidx.compose.runtime.*
import androidx.compose.ui.Modifier

/**
 * Navigation component for the Notes section.
 * Handles navigation between notes list and note editor screens.
 */
@Composable
fun NotesNavigation(
    modifier: Modifier = Modifier
) {
    var currentScreen by remember { mutableStateOf(NotesScreen.List) }
    var editingNoteId by remember { mutableStateOf<String?>(null) }
    var createNoteType by remember { mutableStateOf("general") }
    var createBoatId by remember { mutableStateOf<String?>(null) }
    var createTripId by remember { mutableStateOf<String?>(null) }

    when (currentScreen) {
        NotesScreen.List -> {
            NotesListScreen(
                modifier = modifier,
                onNoteClick = { noteId ->
                    editingNoteId = noteId
                    currentScreen = NotesScreen.Editor
                },
                onCreateNote = {
                    editingNoteId = null
                    createNoteType = "general"
                    createBoatId = null
                    createTripId = null
                    currentScreen = NotesScreen.Editor
                }
            )
        }
        
        NotesScreen.Editor -> {
            NoteEditorScreen(
                modifier = modifier,
                noteId = editingNoteId,
                initialNoteType = createNoteType,
                initialBoatId = createBoatId,
                initialTripId = createTripId,
                onNavigateBack = {
                    currentScreen = NotesScreen.List
                }
            )
        }
    }
}

/**
 * Enum representing the different screens in the Notes section
 */
enum class NotesScreen {
    List,
    Editor
}