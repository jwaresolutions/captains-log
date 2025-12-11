# Testing Requirements and Workflow

## Critical Testing Rule: Consecutive Test Passes

**ABSOLUTE REQUIREMENT**: When a task involves multiple tests, ALL tests must pass consecutively in a single run before the task can be marked complete.

### The Problem This Solves

When fixing a failing test, changes can inadvertently break previously passing tests. If you don't re-run all tests after each fix, you may complete a task with broken tests, creating a false sense of progress.

### Mandatory Testing Workflow

When executing any task that involves testing:

1. **Initial Run**: Run ALL tests for the task
2. **If ANY test fails**:
   - Identify and fix the failing test(s)
   - **CRITICAL**: Re-run ALL tests from the beginning (not just the fixed test)
   - Repeat until ALL tests pass in a single consecutive run
3. **Task Completion**: Only mark the task complete when ALL tests pass together without any failures

### Examples

#### ❌ WRONG Approach
```
Run test A → Pass ✓
Run test B → Fail ✗
Fix test B
Run test B → Pass ✓
Mark task complete ← WRONG! Test A might now be broken
```

#### ✓ CORRECT Approach
```
Run all tests (A, B, C) → A passes, B fails, C passes
Fix test B
Run all tests (A, B, C) → A passes, B passes, C fails (fix broke C!)
Fix test C
Run all tests (A, B, C) → All pass ✓
Mark task complete ← CORRECT!
```

### Implementation Guidelines

#### Test Runner Scripts (REQUIRED for Multi-Test Tasks)

**CRITICAL**: For any task with multiple tests, you MUST create a test runner script that:
1. Runs ALL tests for that task in a single execution (backend, Android, web, etc.)
2. Outputs a clear pass/fail report at the end
3. Proves all tests ran consecutively without intervention

**Script Location**: Create scripts in project root `temp/` directory (excluded from git)

**Script Structure**:
- Main orchestrator script: `temp/task-{number}.sh` (e.g., `temp/task-1-25.sh`)
- Helper scripts if needed: `temp/task-{number}-backend.sh`, `temp/task-{number}-android.sh`
- The main script calls all helpers and produces a unified report

**Example Task 1.25 Orchestrator** (`temp/task-1-25.sh`):
```bash
#!/bin/bash
# Task 1.25: Run all property tests and verify they pass
# This script runs ALL tests for Phase 1 and produces a unified report

set -e  # Exit on first failure

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

echo "========================================"
echo "TASK 1.25: Phase 1 Property Tests"
echo "========================================"
echo ""

# Track results
BACKEND_PASSED=0
ANDROID_PASSED=0
OVERALL_PASSED=1

# Run backend property tests
echo "----------------------------------------"
echo "1. Running Backend Property Tests"
echo "----------------------------------------"
cd "$PROJECT_ROOT/backend"
if npm run test:property; then
  echo "✓ Backend property tests PASSED"
  BACKEND_PASSED=1
else
  echo "✗ Backend property tests FAILED"
  OVERALL_PASSED=0
fi
echo ""

# Run Android unit tests (if applicable for this task)
echo "----------------------------------------"
echo "2. Running Android Unit Tests"
echo "----------------------------------------"
cd "$PROJECT_ROOT/android"
if ./gradlew test --quiet; then
  echo "✓ Android unit tests PASSED"
  ANDROID_PASSED=1
else
  echo "✗ Android unit tests FAILED"
  OVERALL_PASSED=0
fi
echo ""

# Generate final report
echo "========================================"
echo "TASK 1.25 TEST REPORT"
echo "========================================"
echo ""
echo "Backend Property Tests: $([ $BACKEND_PASSED -eq 1 ] && echo '✓ PASSED' || echo '✗ FAILED')"
echo "Android Unit Tests:     $([ $ANDROID_PASSED -eq 1 ] && echo '✓ PASSED' || echo '✗ FAILED')"
echo ""
echo "========================================"
if [ $OVERALL_PASSED -eq 1 ]; then
  echo "✓✓✓ ALL TESTS PASSED ✓✓✓"
  echo "Task 1.25 can be marked complete"
  echo "========================================"
  exit 0
else
  echo "✗✗✗ SOME TESTS FAILED ✗✗✗"
  echo "Fix failures and re-run this script"
  echo "========================================"
  exit 1
fi
```

**Usage**:
```bash
# From project root
chmod +x temp/task-1-25.sh
./temp/task-1-25.sh
```

**Benefits**:
- Single command runs ALL tests for the task across all platforms
- Unified report shows exactly what passed/failed
- Guarantees all tests run together in one execution
- Prevents the "fix one, break another" problem
- Creates audit trail that tests passed consecutively
- Can be re-run easily during debugging
- Clear pass/fail status for task completion

#### For Tasks with Multiple Test Files
```bash
# Run ALL tests together
npm test                           # Backend: all tests
./gradlew test                     # Android: all unit tests
npm run test:property              # Backend: all property tests

# If any fail, fix and re-run ALL tests
# Do NOT run individual test files unless debugging
```

#### For Tasks with Property Tests
```bash
# Property tests must run minimum 100 iterations
# All property tests for the task must pass consecutively

# Example: Task 1.25 has multiple property test files
npm run test:property              # Runs all property tests
# If auth.property.test.ts fails:
# 1. Fix the auth test
# 2. Re-run ALL property tests (not just auth)
# 3. Verify boat, trip, sync, rateLimiter tests still pass
```

#### For Android Tests
```bash
# Run all unit tests together
./gradlew test

# Run all instrumented tests together (requires emulator/device)
./gradlew connectedAndroidTest

# If any test fails, fix and re-run the entire test suite
```

### Test Execution Commands by Phase

#### Backend Tests
```bash
# All unit tests
npm test

# All property tests (minimum 100 iterations each)
npm run test:property

# Specific test file (for debugging only, not for completion verification)
npm test -- auth.test.ts

# All tests with coverage
npm test -- --coverage
```

#### Android Tests
```bash
# All unit tests
./gradlew test

# Specific test class (for debugging only)
./gradlew test --tests ConnectionManagerTest

# All instrumented tests
./gradlew connectedAndroidTest

# Clean and test
./gradlew clean test
```

#### Web Tests (when implemented)
```bash
# All unit tests
npm test

# All E2E tests
npm run test:e2e

# All property tests
npm run test:property
```

### Checkpoint Tasks

Checkpoint tasks (e.g., "1.25 Run all property tests and verify they pass") are specifically designed to ensure all tests pass together:

- **REQUIRED**: Create a test runner script in project root `temp/` directory for the checkpoint
- Run the complete test suite for the phase using the script
- Verify ALL tests pass in a single run (script will report this)
- If any test fails, fix it and re-run the ENTIRE suite using the script
- Do not proceed to the next phase until all tests pass consecutively
- The script output serves as proof that all tests passed together

The checkpoint script should follow the same pattern as task scripts (see above), running all relevant tests across all platforms and producing a unified report.

### Debugging vs. Completion Verification

**Debugging**: You may run individual test files to understand failures
```bash
npm test -- auth.property.test.ts  # Debug specific test
```

**Completion Verification**: You MUST run all tests together
```bash
npm run test:property              # Verify all property tests pass
npm test                           # Verify all unit tests pass
```

### When to Ask for Help

If you find yourself in a loop where:
- Fixing one test breaks another
- Tests pass individually but fail together
- You've attempted fixes more than 3 times

**STOP** and ask the user for guidance. Explain:
1. Which tests are failing
2. What fixes you've attempted
3. What the interdependencies appear to be
4. Request user input on how to proceed

### Property-Based Testing Specifics

Property tests are particularly sensitive to changes because they:
- Run 100+ iterations with random data
- May expose edge cases that unit tests miss
- Can fail intermittently if not properly designed

When property tests fail:
1. Understand the failing case (the library will show the counterexample)
2. Fix the implementation or the property definition
3. Re-run ALL property tests to ensure the fix doesn't break other properties
4. Verify the test passes consistently (run it multiple times if needed)

### Test Organization

Tests should be organized to make full suite runs efficient:

```
backend/tests/
├── unit/              # Fast unit tests
├── integration/       # Slower integration tests
└── property/          # Property-based tests (100+ iterations)
    ├── auth.property.test.ts
    ├── boat.property.test.ts
    ├── trip.property.test.ts
    ├── sync.property.test.ts
    └── rateLimiter.property.test.ts

android/app/src/
├── test/              # Unit tests (fast)
│   └── java/com/boattracking/
│       ├── connection/
│       ├── repository/
│       └── ui/
└── androidTest/       # Instrumented tests (slow, requires device)
    └── java/com/boattracking/
```

### Test Script Organization

All test runner scripts should be placed in the project root `temp/` directory (excluded from git):

```
temp/                   # Project-wide test orchestration scripts
  ├── task-1-38.sh     # Task 1.38: Authentication property tests (JWT/bcrypt)
  ├── task-1-7.sh      # Task 1.7: Boat service property tests
  ├── task-1-10.sh     # Task 1.10: Connection manager property tests
  ├── task-1-14.sh     # Task 1.14: Trip service property tests
  ├── task-1-17.sh     # Task 1.17: Sync service property tests
  ├── task-1-43.sh     # Task 1.43: Phase 1.5 checkpoint - all authentication tests
  ├── task-2-7.sh      # Task 2.7: Phase 2 checkpoint
  └── ...
```

Add to root `.gitignore`:
```
# Temporary test scripts
temp/
```

Each script:
- Is named after the task number (e.g., `task-1-25.sh`)
- Runs ALL tests required for that task across all platforms
- Produces a unified pass/fail report
- Returns exit code 0 for success, non-zero for failure

### Summary

**The Golden Rule**: A task with tests is NOT complete until ALL tests pass together in a single consecutive run. No exceptions.

**The Proof**: Use test runner scripts to prove all tests passed consecutively without intervention.

This ensures:
- Code quality and correctness
- No regression bugs
- Confidence in the implementation
- Proper validation of all requirements
- Audit trail that tests passed together
