#!/bin/bash
# Development Environment Verification Script

echo "========================================"
echo "Boat Tracking System - Environment Check"
echo "========================================"
echo ""

# Check Homebrew
echo "1. Homebrew:"
if command -v brew &> /dev/null; then
    echo "   ✓ Homebrew installed: $(brew --version | head -1)"
else
    echo "   ✗ Homebrew not found"
fi
echo ""

# Check Node.js
echo "2. Node.js:"
if command -v node &> /dev/null; then
    echo "   ✓ Node.js installed: $(node --version)"
    echo "   ✓ npm installed: $(npm --version)"
else
    echo "   ✗ Node.js not found - run: brew install node@20"
fi
echo ""

# Check Java
echo "3. Java:"
if command -v java &> /dev/null; then
    echo "   ✓ Java installed: $(java --version | head -1)"
else
    echo "   ✗ Java not found - run: brew install openjdk@17"
fi
echo ""

# Check Docker
echo "4. Docker:"
if command -v docker &> /dev/null; then
    echo "   ✓ Docker installed: $(docker --version)"
    if docker info &> /dev/null; then
        echo "   ✓ Docker daemon running"
    else
        echo "   ⚠ Docker daemon not running - start Docker Desktop"
    fi
else
    echo "   ✗ Docker not found"
fi
echo ""

# Check Git
echo "5. Git:"
if command -v git &> /dev/null; then
    echo "   ✓ Git installed: $(git --version)"
else
    echo "   ✗ Git not found"
fi
echo ""

# Check Android SDK (if ANDROID_HOME is set)
echo "6. Android SDK:"
if [ -n "$ANDROID_HOME" ]; then
    if [ -d "$ANDROID_HOME" ]; then
        echo "   ✓ ANDROID_HOME set: $ANDROID_HOME"
        if [ -f "$ANDROID_HOME/platform-tools/adb" ]; then
            echo "   ✓ ADB available"
        else
            echo "   ⚠ ADB not found in platform-tools"
        fi
    else
        echo "   ⚠ ANDROID_HOME set but directory doesn't exist"
    fi
else
    echo "   ⚠ ANDROID_HOME not set - configure in Android Studio"
fi
echo ""

echo "========================================"
echo "Next Steps:"
echo "1. Install missing tools listed above"
echo "2. Run 'npm install' in backend/ directory"
echo "3. Copy .env.example to .env and configure"
echo "4. Run 'docker-compose up -d' to start services"
echo "========================================"