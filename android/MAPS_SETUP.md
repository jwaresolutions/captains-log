# Google Maps Setup for Android App

The Android app uses Google Maps to display trip routes and marked locations. To enable map functionality, you need to configure a Google Maps API key.

## Quick Setup

1. **Get a Google Maps API key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps SDK for Android" API
   - Create credentials (API Key)
   - Restrict the key to Android apps (recommended)

2. **Configure the API key:**
   ```bash
   # Edit android/local.properties
   echo "MAPS_API_KEY=your_actual_api_key_here" >> android/local.properties
   ```

3. **Rebuild the app:**
   ```bash
   cd android
   ./gradlew clean assembleDebug
   ```

## Detailed Steps

### 1. Google Cloud Console Setup

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project:
   - Click "Select a project" → "New Project"
   - Name: "Boat Tracking" (or your preference)
   - Click "Create"

3. Enable Maps SDK for Android:
   - Go to "APIs & Services" → "Library"
   - Search for "Maps SDK for Android"
   - Click on it and press "Enable"

4. Create API Key:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key

### 2. Secure Your API Key (Recommended)

1. Click on your API key in the credentials list
2. Under "Application restrictions":
   - Select "Android apps"
   - Click "Add an item"
   - Package name: `com.boattracking`
   - SHA-1 certificate fingerprint: (get from your keystore)

To get your SHA-1 fingerprint for debug builds:
```bash
cd android
./gradlew signingReport
# Look for the SHA1 fingerprint under "Variant: debug"
```

### 3. Configure Local Properties

Edit `android/local.properties` and add your API key:

```properties
# Google Maps API Key
MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Important:** Never commit your API key to version control. The `local.properties` file is already in `.gitignore`.

### 4. Rebuild and Test

```bash
cd android
./gradlew clean assembleDebug
./gradlew installDebug  # If you have a device connected
```

## Troubleshooting

### Map shows gray tiles or "For development purposes only"
- Your API key may not be properly configured
- Check that the package name restriction matches `com.boattracking`
- Verify the SHA-1 fingerprint is correct
- Make sure "Maps SDK for Android" is enabled in Google Cloud Console

### App crashes when opening map tab
- API key is missing or invalid
- The app now shows a configuration message instead of crashing
- Follow the setup steps above

### Billing concerns
- Google Maps has a generous free tier (28,000 map loads per month)
- For personal use, you're unlikely to exceed the free limits
- Set up billing alerts in Google Cloud Console if concerned

## Free Tier Limits

Google Maps API includes these free monthly quotas:
- 28,000 map loads
- 40,000 directions requests  
- 100,000 geocoding requests

For a personal boat tracking app, these limits are typically sufficient.

## Alternative: Disable Maps

If you prefer not to set up Google Maps, the app works fine without it:
- Trip tracking still works (GPS data is saved)
- You can view trip data in lists
- Map tab shows a configuration message instead of crashing
- All other features remain fully functional

The map is primarily for visualization - the core tracking functionality doesn't depend on it.