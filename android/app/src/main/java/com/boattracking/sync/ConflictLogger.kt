package com.boattracking.sync

import android.content.Context
import android.util.Log
import java.io.File
import java.text.SimpleDateFormat
import java.util.*

/**
 * Logger for sync conflicts.
 * Logs conflict details to a file for user review.
 */
class ConflictLogger(private val context: Context) {

    companion object {
        const val TAG = "ConflictLogger"
        const val CONFLICT_LOG_FILE = "sync_conflicts.log"
    }

    /**
     * Log a sync conflict
     */
    fun logConflict(
        tripId: String,
        localModified: Date,
        serverModified: Date,
        resolution: String
    ) {
        try {
            val logFile = File(context.filesDir, CONFLICT_LOG_FILE)
            val timestamp = formatTimestamp(Date())
            
            val logEntry = buildString {
                appendLine("=== Sync Conflict ===")
                appendLine("Timestamp: $timestamp")
                appendLine("Trip ID: $tripId")
                appendLine("Local Modified: ${formatTimestamp(localModified)}")
                appendLine("Server Modified: ${formatTimestamp(serverModified)}")
                appendLine("Resolution: $resolution")
                appendLine()
            }

            logFile.appendText(logEntry)
            Log.d(TAG, "Logged conflict for trip $tripId")
        } catch (e: Exception) {
            Log.e(TAG, "Error logging conflict: ${e.message}", e)
        }
    }

    /**
     * Get all conflict logs
     */
    fun getConflictLogs(): String {
        return try {
            val logFile = File(context.filesDir, CONFLICT_LOG_FILE)
            if (logFile.exists()) {
                logFile.readText()
            } else {
                "No conflicts logged"
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error reading conflict logs: ${e.message}", e)
            "Error reading conflict logs"
        }
    }

    /**
     * Clear conflict logs
     */
    fun clearLogs() {
        try {
            val logFile = File(context.filesDir, CONFLICT_LOG_FILE)
            if (logFile.exists()) {
                logFile.delete()
            }
            Log.d(TAG, "Cleared conflict logs")
        } catch (e: Exception) {
            Log.e(TAG, "Error clearing conflict logs: ${e.message}", e)
        }
    }

    private fun formatTimestamp(date: Date): String {
        val format = SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.US)
        return format.format(date)
    }
}
