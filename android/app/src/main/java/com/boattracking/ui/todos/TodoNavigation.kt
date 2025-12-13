package com.boattracking.ui.todos

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun TodoNavigation(
    modifier: Modifier = Modifier,
    navController: NavHostController = rememberNavController()
) {
    NavHost(
        navController = navController,
        startDestination = "todo_list"
    ) {
        composable("todo_list") {
            TodoListScreen(
                modifier = modifier,
                onNavigateToTodoDetail = { listId ->
                    navController.navigate("todo_detail/$listId")
                }
            )
        }
        
        composable("todo_detail/{listId}") { backStackEntry ->
            val listId = backStackEntry.arguments?.getString("listId") ?: return@composable
            TodoDetailScreen(
                modifier = modifier,
                listId = listId,
                onNavigateBack = {
                    navController.popBackStack()
                }
            )
        }
    }
}