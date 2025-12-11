package com.boattracking.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.boattracking.database.converters.DateConverter
import com.boattracking.database.dao.BoatDao
import com.boattracking.database.dao.GpsPointDao
import com.boattracking.database.dao.NoteDao
import com.boattracking.database.dao.PhotoDao
import com.boattracking.database.dao.TodoItemDao
import com.boattracking.database.dao.TodoListDao
import com.boattracking.database.dao.TripDao
import com.boattracking.database.entities.BoatEntity
import com.boattracking.database.entities.GpsPointEntity
import com.boattracking.database.entities.NoteEntity
import com.boattracking.database.entities.PhotoEntity
import com.boattracking.database.entities.TodoItemEntity
import com.boattracking.database.entities.TodoListEntity
import com.boattracking.database.entities.TripEntity

@Database(
    entities = [
        TripEntity::class,
        GpsPointEntity::class,
        PhotoEntity::class,
        BoatEntity::class,
        NoteEntity::class,
        TodoListEntity::class,
        TodoItemEntity::class
    ],
    version = 4,
    exportSchema = false
)
@TypeConverters(DateConverter::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun tripDao(): TripDao
    abstract fun gpsPointDao(): GpsPointDao
    abstract fun photoDao(): PhotoDao
    abstract fun boatDao(): BoatDao
    abstract fun noteDao(): NoteDao
    abstract fun todoListDao(): TodoListDao
    abstract fun todoItemDao(): TodoItemDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "boat_tracking_database"
                )
                    .fallbackToDestructiveMigration()
                    .build()
                INSTANCE = instance
                instance
            }
        }

        fun getInstance(context: Context): AppDatabase {
            return getDatabase(context)
        }
    }
}
