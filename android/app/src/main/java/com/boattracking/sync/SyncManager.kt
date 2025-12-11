package com.boattracking.sync

import android.content.Context
import android.util.Log
import androidx.work.*
import java.util.concurrent.TimeUnit

/**
 * Manager for scheduling and controlling sync operations
 */
class SyncManager(private val context: Context) {

    companion object {
        const val TAG = "SyncManager"
        const val PERIODIC_SYNC_WORK_NAME = "periodic_trip_sync"
        const val ONE_TIME_SYNC_WORK_NAME = "one_time_trip_sync"
        
        // Sync every 15 minutes when online
        private const val SYNC_INTERVAL_MINUTES = 15L

        @Volatile
        private var INSTANCE: SyncManager? = null

        fun getInstance(context: Context): SyncManager {
            return INSTANCE ?: synchronized(this) {
                val instance = SyncManager(context.applicationContext)
                INSTANCE = instance
                instance
            }
        }
    }

    /**
     * Schedule periodic sync work
     * This will run every 15 minutes when the device has internet connectivity
     */
    fun schedulePeriodicSync() {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val syncRequest = PeriodicWorkRequestBuilder<TripSyncWorker>(
            SYNC_INTERVAL_MINUTES,
            TimeUnit.MINUTES
        )
            .setConstraints(constraints)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniquePeriodicWork(
            PERIODIC_SYNC_WORK_NAME,
            ExistingPeriodicWorkPolicy.KEEP,
            syncRequest
        )

        Log.d(TAG, "Scheduled periodic sync every $SYNC_INTERVAL_MINUTES minutes")
    }

    /**
     * Trigger an immediate one-time sync
     * Useful for manual sync or after completing a trip
     */
    fun triggerImmediateSync() {
        val constraints = Constraints.Builder()
            .setRequiredNetworkType(NetworkType.CONNECTED)
            .build()

        val syncRequest = OneTimeWorkRequestBuilder<TripSyncWorker>()
            .setConstraints(constraints)
            .setBackoffCriteria(
                BackoffPolicy.EXPONENTIAL,
                WorkRequest.MIN_BACKOFF_MILLIS,
                TimeUnit.MILLISECONDS
            )
            .build()

        WorkManager.getInstance(context).enqueueUniqueWork(
            ONE_TIME_SYNC_WORK_NAME,
            ExistingWorkPolicy.REPLACE,
            syncRequest
        )

        Log.d(TAG, "Triggered immediate sync")
    }

    /**
     * Cancel all sync work
     */
    fun cancelAllSync() {
        WorkManager.getInstance(context).cancelUniqueWork(PERIODIC_SYNC_WORK_NAME)
        WorkManager.getInstance(context).cancelUniqueWork(ONE_TIME_SYNC_WORK_NAME)
        Log.d(TAG, "Cancelled all sync work")
    }

    /**
     * Get sync work status
     */
    fun getSyncWorkInfo(): androidx.lifecycle.LiveData<List<WorkInfo>> {
        return WorkManager.getInstance(context)
            .getWorkInfosForUniqueWorkLiveData(PERIODIC_SYNC_WORK_NAME)
    }

    /**
     * Check if sync is currently running
     */
    suspend fun isSyncRunning(): Boolean {
        val workInfos = WorkManager.getInstance(context)
            .getWorkInfosForUniqueWork(PERIODIC_SYNC_WORK_NAME)
            .await()
        
        return workInfos.any { it.state == WorkInfo.State.RUNNING }
    }
}
