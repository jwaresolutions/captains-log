package com.captainslog.sync

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.captainslog.R

/**
 * Helper for showing sync-related notifications
 */
object SyncNotificationHelper {

    private const val CHANNEL_ID = "sync_notifications"
    private const val CHANNEL_NAME = "Sync Notifications"
    private const val CHANNEL_DESCRIPTION = "Notifications about data synchronization and conflicts"

    /**
     * Create notification channel (required for Android O+)
     */
    fun createNotificationChannel(context: Context) {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val importance = NotificationManager.IMPORTANCE_DEFAULT
            val channel = NotificationChannel(CHANNEL_ID, CHANNEL_NAME, importance).apply {
                description = CHANNEL_DESCRIPTION
            }

            val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
            notificationManager.createNotificationChannel(channel)
        }
    }

    /**
     * Show a notification about a sync conflict
     */
    fun showConflictNotification(
        context: Context,
        tripId: String,
        conflictMessage: String
    ) {
        createNotificationChannel(context)

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle("Trip Sync Conflict")
            .setContentText(conflictMessage)
            .setStyle(NotificationCompat.BigTextStyle().bigText(conflictMessage))
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .build()

        try {
            NotificationManagerCompat.from(context).notify(tripId.hashCode(), notification)
        } catch (e: SecurityException) {
            // Permission not granted, skip notification
            android.util.Log.w("SyncNotificationHelper", "Notification permission not granted")
        }
    }

    /**
     * Show a notification about successful sync
     */
    fun showSyncSuccessNotification(
        context: Context,
        syncedCount: Int
    ) {
        createNotificationChannel(context)

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle("Sync Complete")
            .setContentText("Successfully synced $syncedCount trip(s)")
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setAutoCancel(true)
            .build()

        try {
            NotificationManagerCompat.from(context).notify(1001, notification)
        } catch (e: SecurityException) {
            // Permission not granted, skip notification
            android.util.Log.w("SyncNotificationHelper", "Notification permission not granted")
        }
    }

    /**
     * Show a notification about sync failure
     */
    fun showSyncFailureNotification(
        context: Context,
        errorMessage: String
    ) {
        createNotificationChannel(context)

        val notification = NotificationCompat.Builder(context, CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_alert)
            .setContentTitle("Sync Failed")
            .setContentText(errorMessage)
            .setStyle(NotificationCompat.BigTextStyle().bigText(errorMessage))
            .setPriority(NotificationCompat.PRIORITY_DEFAULT)
            .setAutoCancel(true)
            .build()

        try {
            NotificationManagerCompat.from(context).notify(1002, notification)
        } catch (e: SecurityException) {
            // Permission not granted, skip notification
            android.util.Log.w("SyncNotificationHelper", "Notification permission not granted")
        }
    }
}
