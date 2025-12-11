package com.boattracking

import android.app.Application
import com.boattracking.connection.ConnectionManager
import com.boattracking.database.AppDatabase
import com.boattracking.sync.SyncManager
import com.boattracking.sync.SyncNotificationHelper

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
