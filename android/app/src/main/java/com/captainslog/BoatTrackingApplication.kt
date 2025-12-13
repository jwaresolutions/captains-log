package com.captainslog

import android.app.Application
import com.captainslog.connection.ConnectionManager
import com.captainslog.database.AppDatabase
import com.captainslog.sync.SyncManager
import com.captainslog.sync.SyncNotificationHelper

class BoatTrackingApplication : Application() {
    lateinit var database: AppDatabase
        private set

    lateinit var connectionManager: ConnectionManager
        private set

    lateinit var syncManager: SyncManager
        private set

    override fun onCreate() {
        super.onCreate()
        
        // Initialize database
        database = AppDatabase.getDatabase(this)
        
        // Initialize connection manager
        connectionManager = ConnectionManager.getInstance(this)
        connectionManager.initialize()

        // Initialize sync manager
        syncManager = SyncManager.getInstance(this)
        
        // Create notification channel for sync notifications
        SyncNotificationHelper.createNotificationChannel(this)
        
        // Schedule periodic sync
        syncManager.schedulePeriodicSync()
    }
}
