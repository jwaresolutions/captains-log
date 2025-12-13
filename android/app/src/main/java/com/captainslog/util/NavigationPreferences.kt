package com.captainslog.util

import android.content.Context
import android.content.SharedPreferences

/**
 * Manages user preferences for navigation tab visibility.
 * Allows users to enable/disable optional navigation tabs.
 */
class NavigationPreferences(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences(
        "navigation_preferences", 
        Context.MODE_PRIVATE
    )

    companion object {
        private const val KEY_SENSORS_ENABLED = "sensors_enabled"
        private const val KEY_LICENSE_ENABLED = "license_enabled"
        private const val KEY_MAPS_ENABLED = "maps_enabled"
        
        // Core tabs are always enabled: Home, Trips, Maintenance
        // Optional tabs can be toggled: Sensors, License, Maps
    }

    /**
     * Whether the Sensors tab should be visible in bottom navigation.
     * Default: false (disabled)
     */
    var isSensorsEnabled: Boolean
        get() = prefs.getBoolean(KEY_SENSORS_ENABLED, false)
        set(value) = prefs.edit().putBoolean(KEY_SENSORS_ENABLED, value).apply()

    /**
     * Whether the License tab should be visible in bottom navigation.
     * Default: false (disabled)
     */
    var isLicenseEnabled: Boolean
        get() = prefs.getBoolean(KEY_LICENSE_ENABLED, false)
        set(value) = prefs.edit().putBoolean(KEY_LICENSE_ENABLED, value).apply()

    /**
     * Whether the Maps tab should be visible in bottom navigation.
     * Default: false (disabled)
     */
    var isMapsEnabled: Boolean
        get() = prefs.getBoolean(KEY_MAPS_ENABLED, false)
        set(value) = prefs.edit().putBoolean(KEY_MAPS_ENABLED, value).apply()

    /**
     * Reset all navigation preferences to defaults.
     */
    fun resetToDefaults() {
        prefs.edit()
            .putBoolean(KEY_SENSORS_ENABLED, false)
            .putBoolean(KEY_LICENSE_ENABLED, false)
            .putBoolean(KEY_MAPS_ENABLED, false)
            .apply()
    }
}