package com.captainslog.database.entities

import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.ForeignKey
import androidx.room.Index
import java.util.Date

@Entity(
    tableName = "maintenance_completions",
    foreignKeys = [
        ForeignKey(
            entity = MaintenanceTaskEntity::class,
            parentColumns = ["id"],
            childColumns = ["maintenanceTaskId"],
            onDelete = ForeignKey.CASCADE
        )
    ],
    indices = [
        Index(value = ["maintenanceTaskId"]),
        Index(value = ["completedAt"])
    ]
)
data class MaintenanceCompletionEntity(
    @PrimaryKey
    val id: String,
    val maintenanceTaskId: String,
    val completedAt: Date,
    val cost: Double?,
    val notes: String?,
    val createdAt: Date,
    val synced: Boolean = false
)