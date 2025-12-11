# Launcher Icons

This directory should contain the app launcher icons in various densities.

## Required Files

You need to create launcher icons for the following densities:

- `mipmap-mdpi/ic_launcher.png` (48x48 dp)
- `mipmap-hdpi/ic_launcher.png` (72x72 dp)
- `mipmap-xhdpi/ic_launcher.png` (96x96 dp)
- `mipmap-xxhdpi/ic_launcher.png` (144x144 dp)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192 dp)

And round icons:
- `mipmap-mdpi/ic_launcher_round.png`
- `mipmap-hdpi/ic_launcher_round.png`
- `mipmap-xhdpi/ic_launcher_round.png`
- `mipmap-xxhdpi/ic_launcher_round.png`
- `mipmap-xxxhdpi/ic_launcher_round.png`

## Generating Icons

You can use Android Studio's Image Asset Studio:
1. Right-click on `res` folder
2. Select New > Image Asset
3. Choose "Launcher Icons (Adaptive and Legacy)"
4. Configure your icon
5. Click "Next" and "Finish"

Or use online tools like:
- https://romannurik.github.io/AndroidAssetStudio/
- https://icon.kitchen/

## Temporary Solution

For development, you can use Android Studio's default launcher icon by:
1. Opening the project in Android Studio
2. The IDE will generate default icons automatically
