package com.boattracking.util

import android.content.Context
import android.content.SharedPreferences

/**
 * Utility class for managing debug-related preferences.
 * Handles storing and retrieving debug settings like debug mode toggle.
 */
class DebugPreferences(context: Context) {
    
    companion object {
        private const val PREFS_NAME = "debug_preferences"
        private const val KEY_DEBUG_MODE = "debug_mode_enabled"
        
        // Default to debug mode enabled for development
        private const val DEFAULT_DEBUG_MODE = true
    }
    
    private val prefs: SharedPreferences = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    
    /**
     * Get whether debug mode is enabled
     */
    var isDebugModeEnabled: Boolean
        get() = prefs.getBoolean(KEY_DEBUG_MODE, DEFAULT_DEBUG_MODE)
        set(value) {
            prefs.edit()
                .putBoolean(KEY_DEBUG_MODE, value)
                .apply()
        }
    
    /**
     * Toggle debug mode on/off
     */
    fun toggleDebugMode(): Boolean {
        isDebugModeEnabled = !isDebugModeEnabled
        return isDebugModeEnabled
    }
    
    /**
     * Reset debug preferences to defaults
     */
    fun reset() {
        prefs.edit().clear().apply()
    }
}