package com.captainslog.security

import android.content.Context
import android.content.SharedPreferences
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey

class SecurePreferences(context: Context) {
    private val masterKey = MasterKey.Builder(context)
        .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
        .build()

    private val sharedPreferences: SharedPreferences = EncryptedSharedPreferences.create(
        context,
        "boat_tracking_secure_prefs",
        masterKey,
        EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
        EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM
    )

    companion object {
        private const val KEY_JWT_TOKEN = "jwt_token"
        private const val KEY_USERNAME = "username"
        private const val KEY_LOCAL_URL = "local_url"
        private const val KEY_REMOTE_URL = "remote_url"
        private const val KEY_LOCAL_CERT_PIN = "local_cert_pin"
        private const val KEY_REMOTE_CERT_PIN = "remote_cert_pin"
        private const val KEY_SETUP_COMPLETE = "setup_complete"
    }

    var jwtToken: String?
        get() = sharedPreferences.getString(KEY_JWT_TOKEN, null)
        set(value) = sharedPreferences.edit().putString(KEY_JWT_TOKEN, value).apply()

    var username: String?
        get() = sharedPreferences.getString(KEY_USERNAME, null)
        set(value) = sharedPreferences.edit().putString(KEY_USERNAME, value).apply()

    var localUrl: String?
        get() = sharedPreferences.getString(KEY_LOCAL_URL, null)
        set(value) = sharedPreferences.edit().putString(KEY_LOCAL_URL, value).apply()

    var remoteUrl: String?
        get() = sharedPreferences.getString(KEY_REMOTE_URL, null)
        set(value) = sharedPreferences.edit().putString(KEY_REMOTE_URL, value).apply()

    var localCertPin: String?
        get() = sharedPreferences.getString(KEY_LOCAL_CERT_PIN, null)
        set(value) = sharedPreferences.edit().putString(KEY_LOCAL_CERT_PIN, value).apply()

    var remoteCertPin: String?
        get() = sharedPreferences.getString(KEY_REMOTE_CERT_PIN, null)
        set(value) = sharedPreferences.edit().putString(KEY_REMOTE_CERT_PIN, value).apply()

    var isSetupComplete: Boolean
        get() = sharedPreferences.getBoolean(KEY_SETUP_COMPLETE, false)
        set(value) = sharedPreferences.edit().putBoolean(KEY_SETUP_COMPLETE, value).apply()

    fun clear() {
        sharedPreferences.edit().clear().apply()
    }
}
