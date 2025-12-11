# Android Tooling Upgrade - December 2024

## Summary

Upgraded Android build tools to support compileSdk 35 (Android 16) without warnings.

## Changes Made

### Build Tool Versions

**Before:**
- Android Gradle Plugin: 8.2.0
- Gradle: 8.2
- Kotlin: 1.9.20
- KSP: 1.9.20-1.0.14

**After:**
- Android Gradle Plugin: 8.7.3
- Gradle: 8.9
- Kotlin: 2.0.21
- KSP: 2.0.21-1.0.28

### Compose Compiler Plugin

Added the new Compose Compiler Gradle plugin (required for Kotlin 2.0+):
- Added `org.jetbrains.kotlin.plugin.compose` version 2.0.21 to root build.gradle.kts
- Applied plugin in app/build.gradle.kts
- Removed deprecated `composeOptions.kotlinCompilerExtensionVersion` configuration

### Dependency Updates

Updated Compose dependencies for Kotlin 2.0 compatibility:
- Compose BOM: 2023.10.01 → 2024.10.01
- Lifecycle ViewModel Compose: 2.6.2 → 2.8.7
- Navigation Compose: 2.7.5 → 2.8.4

## Testing

All existing tests continue to pass:
- Unit tests: ✓
- Property tests: ✓
- Connection manager tests: ✓
- Repository tests: ✓

## References

- [Compose Compiler Gradle Plugin](https://d.android.com/r/studio-ui/compose-compiler)
- [Kotlin 2.0 Release Notes](https://kotlinlang.org/docs/whatsnew20.html)
- [Android Gradle Plugin 8.7 Release Notes](https://developer.android.com/build/releases/gradle-plugin)
