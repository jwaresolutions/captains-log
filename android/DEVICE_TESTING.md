# Android Device Testing Guide

## Overview

This guide covers comprehensive testing of the Boat Tracking Android application across different devices, Android versions, and scenarios.

## Supported Android Versions

- **Minimum SDK**: Android 8.0 (API 26)
- **Target SDK**: Android 16 (API 35)
- **Compile SDK**: Android 16 (API 35)

## Testing Matrix

### Recommended Test Devices/Emulators

#### Primary Testing (Must Test)
- **Pixel 6** (API 35) - Latest Android
- **Pixel 4** (API 30) - Common version
- **Samsung Galaxy S21** (API 33) - Samsung UI
- **OnePlus 9** (API 31) - OxygenOS

#### Secondary Testing (Should Test)
- **Pixel 3** (API 28) - Older device
- **Samsung Galaxy A52** (API 31) - Mid-range
- **Xiaomi Mi 11** (API 30) - MIUI
- **Huawei P30** (API 28) - EMUI (if available)

#### Minimum Testing (Edge Cases)
- **Generic Device** (API 26) - Minimum supported
- **Tablet** (API 33) - Large screen
- **Foldable** (API 33) - Flexible display

## Android Studio Testing Setup

### Creating Test Emulators

1. **Open Device Manager**
   ```
   View → Tool Windows → Device Manager
   ```

2. **Create Primary Test Emulators**
   ```
   Create Device → Phone → Pixel 6 → API 35 (Android 16)
   Create Device → Phone → Pixel 4 → API 30 (Android 11)
   Create Device → Phone → Galaxy S21 → API 33 (Android 13)
   Create Device → Tablet → Pixel C → API 33 (Android 13)
   ```

3. **Configure Emulator Settings**
   - Enable GPS
   - Set up camera (virtual scene or webcam)
   - Configure network settings
   - Enable Bluetooth (limited support)

### Running Tests

#### Unit Tests
```bash
# Run all unit tests
./gradlew test

# Run specific test class
./gradlew test --tests ConnectionManagerTest

# Run with coverage
./gradlew testDebugUnitTestCoverage
```

#### Instrumented Tests
```bash
# Run all instrumented tests (requires emulator/device)
./gradlew connectedAndroidTest

# Run specific test
./gradlew connectedAndroidTest -Pandroid.testInstrumentationRunnerArguments.class=com.captainslog.ExampleInstrumentedTest
```

#### Property Tests
```bash
# Use universal property test runner
cd .. && ./run-property-tests.sh --android-only
```

## Core Functionality Testing

### 1. Authentication & Setup

#### Test Scenarios
- [ ] **First Launch**: Setup wizard appears
- [ ] **Login Flow**: Username/password authentication
- [ ] **Token Storage**: JWT stored in EncryptedSharedPreferences
- [ ] **Token Expiration**: Automatic re-login prompt
- [ ] **Invalid Credentials**: Error handling

#### Android Studio Testing
```kotlin
// Monitor authentication in Logcat
adb logcat | grep -E "(Auth|Login|Token)"

// Check EncryptedSharedPreferences
View → Tool Windows → App Inspection → Database Inspector
```

### 2. GPS Tracking & Location Services

#### Test Scenarios
- [ ] **Permission Request**: Location permission prompt
- [ ] **GPS Accuracy**: Location updates every 5 seconds
- [ ] **Background Tracking**: Foreground service continues tracking
- [ ] **Battery Optimization**: App excluded from battery optimization
- [ ] **Stop Point Detection**: 5+ minutes in 45-foot radius

#### Android Studio Testing
```kotlin
// Simulate GPS coordinates
Extended Controls (⋯) → Location → Single Points or GPX/KML playback

// Monitor GPS in Logcat
adb logcat | grep -E "(GPS|Location|Tracking)"

// Check GPS data in database
App Inspection → Database Inspector → gps_points table
```

#### GPS Test Scenarios
1. **Static Location Test**
   - Set fixed coordinates
   - Start trip
   - Verify location updates
   - Check stop point detection after 5 minutes

2. **Route Simulation**
   - Load GPX file with route
   - Start playback
   - Verify route recording
   - Check distance/speed calculations

3. **Battery Impact Test**
   - Start GPS tracking
   - Monitor battery usage in Android Profiler
   - Verify acceptable battery drain

### 3. Network Connectivity & Sync

#### Test Scenarios
- [ ] **Dual Connection Mode**: Local priority, remote fallback
- [ ] **Connection Timeout**: 2-second local timeout
- [ ] **Certificate Pinning**: Verify certificate validation
- [ ] **Offline Mode**: Data stored locally when offline
- [ ] **Sync Recovery**: Data syncs when connectivity returns

#### Android Studio Testing
```kotlin
// Monitor network requests
View → Tool Windows → App Inspection → Network Inspector

// Simulate network conditions
Extended Controls (⋯) → Settings → Cellular/WiFi toggle

// Check offline data
App Inspection → Database Inspector → Check local tables
```

#### Network Test Scenarios
1. **Local Connection Test**
   - Connect to same WiFi as backend
   - Verify local endpoint used
   - Check connection speed

2. **Remote Fallback Test**
   - Disable local backend
   - Verify remote connection used
   - Check fallback timing

3. **Offline Sync Test**
   - Disable all network
   - Create trips, boats, notes
   - Re-enable network
   - Verify sync completion

### 4. Photo Capture & Upload

#### Test Scenarios
- [ ] **Camera Permission**: Camera access prompt
- [ ] **Photo Capture**: Take photos during trips
- [ ] **Local Storage**: Photos stored in Room database
- [ ] **WiFi-Only Upload**: Photos only upload on WiFi
- [ ] **Upload Progress**: Progress indicators work
- [ ] **7-Day Retention**: Local photos deleted after upload + 7 days

#### Android Studio Testing
```kotlin
// Configure camera
Extended Controls (⋯) → Camera → Virtual Scene or Webcam

// Monitor photo operations
adb logcat | grep -E "(Photo|Camera|Upload)"

// Check photo storage
App Inspection → Database Inspector → photos table
```

### 5. Bluetooth & Sensor Integration

#### Test Scenarios
- [ ] **Bluetooth Permission**: Bluetooth access prompt
- [ ] **Device Discovery**: Find Arduino devices
- [ ] **Pairing Process**: Pair with sensor device
- [ ] **Data Reception**: Receive sensor readings
- [ ] **Data Relay**: Forward data to backend

#### Android Studio Testing
```kotlin
// Monitor Bluetooth (requires physical device)
adb logcat | grep -E "(Bluetooth|Sensor|Arduino)"

// Note: Emulator has limited Bluetooth support
// Physical device recommended for Bluetooth testing
```

### 6. Background Services & Notifications

#### Test Scenarios
- [ ] **Foreground Service**: GPS tracking continues in background
- [ ] **Notification Persistence**: Tracking notification visible
- [ ] **WorkManager Jobs**: Sync jobs execute properly
- [ ] **Maintenance Notifications**: Due date alerts appear
- [ ] **Battery Optimization**: App works with optimization disabled

#### Android Studio Testing
```kotlin
// Monitor background services
adb shell dumpsys activity services com.captainslog

// Check WorkManager jobs
adb shell dumpsys jobscheduler | grep com.captainslog

// Monitor notifications
adb logcat | grep -E "(Notification|WorkManager)"
```

## Device-Specific Testing

### Samsung Devices (One UI)
- [ ] **UI Compatibility**: LCARS-style components render correctly
- [ ] **Samsung Knox**: Security features don't interfere
- [ ] **Edge Panels**: App works with edge features
- [ ] **Bixby Integration**: No conflicts with voice assistant

### OnePlus Devices (OxygenOS)
- [ ] **Gaming Mode**: App excluded from gaming optimizations
- [ ] **Battery Optimization**: Proper whitelist handling
- [ ] **Gesture Navigation**: Works with gesture controls

### Xiaomi Devices (MIUI)
- [ ] **MIUI Optimizations**: Background restrictions handled
- [ ] **Security Center**: App permissions work correctly
- [ ] **Battery Saver**: GPS tracking continues when enabled

### Huawei Devices (EMUI)
- [ ] **App Gallery**: Installation without Google Play
- [ ] **Power Management**: Background app management
- [ ] **HMS Services**: Location services work without GMS

## Performance Testing

### Memory Usage
```kotlin
// Monitor memory in Android Profiler
View → Tool Windows → Profiler
Select app → Memory
```

### Battery Consumption
```kotlin
// Monitor battery usage
View → Tool Windows → Profiler
Select app → Energy
```

### Network Usage
```kotlin
// Monitor data usage
View → Tool Windows → Profiler
Select app → Network
```

## Automated Testing Scripts

### Device Testing Script
```bash
#!/bin/bash
# Run comprehensive device tests

echo "🤖 Starting Android Device Testing"

# Check connected devices
adb devices

# Install app on all devices
./gradlew installDebug

# Run unit tests
./gradlew test

# Run instrumented tests on connected devices
./gradlew connectedAndroidTest

# Run property tests
cd .. && ./run-property-tests.sh --android-only

echo "✅ Device testing completed"
```

### Performance Monitoring Script
```bash
#!/bin/bash
# Monitor app performance

PACKAGE="com.captainslog"

echo "📊 Monitoring Performance for $PACKAGE"

# Memory usage
adb shell dumpsys meminfo $PACKAGE

# Battery usage
adb shell dumpsys batterystats $PACKAGE

# Network usage
adb shell dumpsys netstats detail

# CPU usage
adb shell top -n 1 | grep $PACKAGE
```

## Common Issues & Solutions

### GPS Issues
- **Problem**: GPS not updating
- **Solution**: Check location permissions, verify GPS enabled
- **Debug**: Monitor LocationManager in Logcat

### Network Issues
- **Problem**: API calls failing
- **Solution**: Check network permissions, verify endpoints
- **Debug**: Use Network Inspector to see requests

### Battery Issues
- **Problem**: High battery drain
- **Solution**: Optimize GPS update frequency, check wake locks
- **Debug**: Use Battery Profiler to identify drain sources

### Sync Issues
- **Problem**: Data not syncing
- **Solution**: Check WorkManager constraints, verify network
- **Debug**: Monitor WorkManager execution in Logcat

## Test Reporting

### Test Results Documentation
- Screenshot test results on each device
- Document performance metrics
- Note device-specific issues
- Record battery usage statistics

### Issue Tracking
- Create issues for device-specific problems
- Include device model, Android version, and logs
- Provide steps to reproduce
- Attach relevant screenshots/videos

## Continuous Integration

### Automated Device Testing
```yaml
# GitHub Actions example
- name: Run Android Tests
  uses: reactivecircus/android-emulator-runner@v2
  with:
    api-level: 30
    target: google_apis
    arch: x86_64
    script: ./gradlew connectedAndroidTest
```

### Test Coverage
- Aim for 80%+ unit test coverage
- Cover critical paths with instrumented tests
- Include property tests for business logic
- Test offline/online scenarios

## Manual Testing Checklist

### Pre-Release Testing
- [ ] Test on minimum supported Android version (API 26)
- [ ] Test on latest Android version (API 35)
- [ ] Test on at least 3 different device manufacturers
- [ ] Test with different screen sizes and densities
- [ ] Test with different network conditions
- [ ] Test battery optimization scenarios
- [ ] Test with accessibility services enabled
- [ ] Test in different languages/locales

### Release Validation
- [ ] All automated tests pass
- [ ] Performance metrics within acceptable ranges
- [ ] No critical bugs on primary test devices
- [ ] Battery usage acceptable for GPS tracking app
- [ ] Offline functionality works correctly
- [ ] Sync recovery works after network restoration