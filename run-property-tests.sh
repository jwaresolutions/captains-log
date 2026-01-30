#!/bin/bash
# Universal Property Test Runner for Boat Tracking System
# Runs property tests with individual output files and consolidated reporting

# Note: Don't use 'set -e' here as we want to continue running tests even if some fail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"

# Colors for output (only when not redirected)
if [ -t 1 ]; then
    RED='\033[0;31m'
    GREEN='\033[0;32m'
    YELLOW='\033[1;33m'
    BLUE='\033[0;34m'
    PURPLE='\033[0;35m'
    CYAN='\033[0;36m'
    NC='\033[0m' # No Color
else
    RED=''
    GREEN=''
    YELLOW=''
    BLUE=''
    PURPLE=''
    CYAN=''
    NC=''
fi

# Configuration defaults
BACKEND_ENABLED=true
ANDROID_ENABLED=true
VERBOSE=false
SPECIFIC_TESTS=""
SHOW_HELP=false
ITERATIONS=100
TIMEOUT=120  # 2 minutes default timeout per test
CONFIG_FILE=""
JSON_CONFIG=""

# Test pattern variables (can be set by JSON config)
BACKEND_TEST_PATTERNS=""
BACKEND_ITERATIONS=""
ANDROID_TEST_PATTERNS=""
ANDROID_ITERATIONS=""

# Output directory for test results
OUTPUT_DIR="$PROJECT_ROOT/temp/test-results"
mkdir -p "$OUTPUT_DIR"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --backend-only)
            ANDROID_ENABLED=false
            shift
            ;;
        --android-only)
            BACKEND_ENABLED=false
            shift
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        --tests|-t)
            SPECIFIC_TESTS="$2"
            shift 2
            ;;
        --iterations|-i)
            ITERATIONS="$2"
            shift 2
            ;;
        --timeout)
            TIMEOUT="$2"
            shift 2
            ;;
        --config|-c)
            CONFIG_FILE="$2"
            shift 2
            ;;
        --json|-j)
            JSON_CONFIG="$2"
            shift 2
            ;;
        --help|-h)
            SHOW_HELP=true
            shift
            ;;
        *)
            echo "Unknown option: $1"
            SHOW_HELP=true
            shift
            ;;
    esac
done

# Show help
if [ "$SHOW_HELP" = true ]; then
    echo "Universal Property Test Runner for Boat Tracking System"
    echo ""
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --backend-only        Run only backend property tests"
    echo "  --android-only        Run only Android property tests"
    echo "  --verbose, -v         Show detailed progress information"
    echo "  --tests, -t PATTERN   Run specific tests matching pattern (e.g., 'auth', 'trip')"
    echo "  --iterations, -i NUM  Number of property test iterations (default: 100)"
    echo "  --timeout SECONDS     Timeout per test in seconds (default: 300)"
    echo "  --config, -c FILE     JSON configuration file path"
    echo "  --json, -j JSON       JSON configuration string"
    echo "  --help, -h            Show this help message"
    echo ""
    echo "Output:"
    echo "  - Individual test outputs saved to temp/test-results/"
    echo "  - Final report shows status and output file for each test"
    echo "  - Progress indicators show execution status"
    echo ""
    echo "JSON Configuration Format:"
    echo "  {"
    echo "    \"backend\": {"
    echo "      \"enabled\": true,"
    echo "      \"tests\": [\"auth\", \"trip\", \"boat\"],"
    echo "      \"iterations\": 100"
    echo "    },"
    echo "    \"android\": {"
    echo "      \"enabled\": true,"
    echo "      \"tests\": [\"connection\", \"repository\"],"
    echo "      \"iterations\": 100"
    echo "    },"
    echo "    \"global\": {"
    echo "      \"verbose\": false,"
    echo "      \"timeout\": 300"
    echo "    }"
    echo "  }"
    echo ""
    echo "Examples:"
    echo "  $0                           # Run all property tests"
    echo "  $0 --backend-only            # Run only backend tests"
    echo "  $0 --tests auth              # Run only auth-related tests"
    echo "  $0 --config tests.json       # Run tests from JSON config file"
    echo ""
    exit 0
fi

# Parse JSON configuration if provided
parse_json_config() {
    local json_content=""
    
    if [ -n "$CONFIG_FILE" ]; then
        if [ ! -f "$CONFIG_FILE" ]; then
            echo -e "${RED}Error: Configuration file '$CONFIG_FILE' not found${NC}"
            exit 1
        fi
        json_content=$(cat "$CONFIG_FILE")
    elif [ -n "$JSON_CONFIG" ]; then
        json_content="$JSON_CONFIG"
    else
        return 0  # No JSON config provided
    fi
    
    # Check if jq is available for JSON parsing
    if ! command -v jq &> /dev/null; then
        echo -e "${RED}Error: jq is required for JSON configuration parsing${NC}"
        echo -e "${RED}Install with: brew install jq${NC}"
        exit 1
    fi
    
    # Validate JSON
    if ! echo "$json_content" | jq . > /dev/null 2>&1; then
        echo -e "${RED}Error: Invalid JSON configuration${NC}"
        exit 1
    fi
    
    # Parse global settings
    local global_verbose=$(echo "$json_content" | jq -r '.global.verbose // empty')
    local global_timeout=$(echo "$json_content" | jq -r '.global.timeout // empty')
    
    if [ "$global_verbose" = "true" ]; then
        VERBOSE=true
    elif [ "$global_verbose" = "false" ]; then
        VERBOSE=false
    fi
    
    if [ -n "$global_timeout" ] && [ "$global_timeout" != "empty" ]; then
        TIMEOUT="$global_timeout"
    fi
    
    # Parse backend settings
    local backend_enabled=$(echo "$json_content" | jq -r '.backend.enabled // empty')
    local backend_iterations=$(echo "$json_content" | jq -r '.backend.iterations // empty')
    local backend_tests=$(echo "$json_content" | jq -r '.backend.tests[]? // empty' | tr '\n' '|' | sed 's/|$//')
    
    if [ "$backend_enabled" = "false" ]; then
        BACKEND_ENABLED=false
    elif [ "$backend_enabled" = "true" ]; then
        BACKEND_ENABLED=true
    fi
    
    if [ -n "$backend_tests" ]; then
        BACKEND_TEST_PATTERNS="$backend_tests"
    fi
    
    if [ -n "$backend_iterations" ] && [ "$backend_iterations" != "empty" ]; then
        BACKEND_ITERATIONS="$backend_iterations"
    fi
    
    # Parse Android settings
    local android_enabled=$(echo "$json_content" | jq -r '.android.enabled // empty')
    local android_iterations=$(echo "$json_content" | jq -r '.android.iterations // empty')
    local android_tests=$(echo "$json_content" | jq -r '.android.tests[]? // empty' | tr '\n' '|' | sed 's/|$//')
    
    if [ "$android_enabled" = "false" ]; then
        ANDROID_ENABLED=false
    elif [ "$android_enabled" = "true" ]; then
        ANDROID_ENABLED=true
    fi
    
    if [ -n "$android_tests" ]; then
        ANDROID_TEST_PATTERNS="$android_tests"
    fi
    
    if [ -n "$android_iterations" ] && [ "$android_iterations" != "empty" ]; then
        ANDROID_ITERATIONS="$android_iterations"
    fi
}

# Call JSON parser
parse_json_config

# Global test tracking
declare -a TEST_RESULTS
START_TIME=$(date +%s)

# Progress tracking
show_progress() {
    local current=$1
    local total=$2
    local platform=$3
    local test_name=$4
    
    local percent=$((current * 100 / total))
    printf "\r${CYAN}[$platform]${NC} Progress: %d/%d (%d%%) - Running: %s" "$current" "$total" "$percent" "$test_name"
}

# Function to run a single backend test
run_single_backend_test() {
    local test_file="$1"
    local test_name=$(basename "$test_file" .property.test.ts)
    local output_file="$OUTPUT_DIR/backend-${test_name}.log"
    local iterations_to_use="$ITERATIONS"
    
    if [ -n "$BACKEND_ITERATIONS" ]; then
        iterations_to_use="$BACKEND_ITERATIONS"
    fi
    
    # Set up test environment
    export FC_NUM_RUNS=$iterations_to_use
    
    # Run the test and capture all output
    local start_time=$(date +%s)
    local exit_code=0
    
    # Run test with macOS-compatible timeout using background process
    # Use NODE_ENV=test to suppress Winston logging and Jest silent mode
    NODE_ENV=test npm test -- "$test_file" --silent --verbose=false --passWithNoTests > "$output_file" 2>&1 &
    local test_pid=$!
    
    # Wait for process with timeout and monitor file size
    local count=0
    local max_log_size=10485760  # 10MB max log file size
    
    while kill -0 $test_pid 2>/dev/null && [ $count -lt $TIMEOUT ]; do
        sleep 1
        count=$((count + 1))
        
        # Check log file size and truncate if too large
        if [ -f "$output_file" ]; then
            local file_size=$(stat -f%z "$output_file" 2>/dev/null || echo "0")
            if [ "$file_size" -gt $max_log_size ]; then
                echo "Log file truncated due to size limit (${max_log_size} bytes)" > "$output_file.tmp"
                tail -100 "$output_file" >> "$output_file.tmp"
                mv "$output_file.tmp" "$output_file"
            fi
        fi
    done
    
    # Kill if still running (timeout)
    if kill -0 $test_pid 2>/dev/null; then
        kill -9 $test_pid 2>/dev/null  # Use SIGKILL for stubborn processes
        wait $test_pid 2>/dev/null
        exit_code=124  # Timeout exit code
        echo "Test timed out after ${TIMEOUT}s" >> "$output_file"
    else
        wait $test_pid
        exit_code=$?
    fi
    
    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    
    # Record result
    TEST_RESULTS+=("BACKEND|$test_name|$exit_code|$duration|$output_file")
    
    return $exit_code
}

# Function to run backend property tests
run_backend_tests() {
    if [ "$BACKEND_ENABLED" = false ]; then
        return 0
    fi
    
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}BACKEND PROPERTY TESTS${NC}"
    echo -e "${BLUE}========================================${NC}"
    
    cd "$PROJECT_ROOT/backend"
    
    # Check if backend directory exists and has tests
    if [ ! -d "tests/property" ]; then
        echo -e "${YELLOW}No backend property tests found${NC}"
        return 0
    fi
    
    # Find test files
    local test_files
    local test_patterns="$SPECIFIC_TESTS"
    
    # Use JSON-configured patterns if available
    if [ -n "$BACKEND_TEST_PATTERNS" ]; then
        test_patterns="$BACKEND_TEST_PATTERNS"
    fi
    
    if [ -n "$test_patterns" ]; then
        # Handle multiple patterns separated by |
        test_files=""
        IFS='|' read -ra PATTERNS <<< "$test_patterns"
        for pattern in "${PATTERNS[@]}"; do
            pattern=$(echo "$pattern" | xargs)  # Trim whitespace
            if [ -n "$pattern" ]; then
                local pattern_files=$(find tests/property -name "*${pattern}*.property.test.ts" 2>/dev/null || true)
                if [ -n "$pattern_files" ]; then
                    if [ -z "$test_files" ]; then
                        test_files="$pattern_files"
                    else
                        test_files="$test_files"$'\n'"$pattern_files"
                    fi
                fi
            fi
        done
        test_files=$(echo "$test_files" | grep -v '^$' | sort -u)
    else
        test_files=$(find tests/property -name "*.property.test.ts" 2>/dev/null || true)
    fi
    
    if [ -z "$test_files" ]; then
        echo -e "${YELLOW}No matching backend property tests found${NC}"
        return 0
    fi
    
    # Convert to array
    local test_array=()
    while IFS= read -r line; do
        test_array+=("$line")
    done <<< "$test_files"
    
    local test_count=${#test_array[@]}
    echo -e "${CYAN}Found $test_count backend property test files${NC}"
    echo -e "${CYAN}Output files will be saved to: temp/test-results/backend-*.log${NC}"
    echo ""
    
    # Run each test individually
    local current=0
    for test_file in "${test_array[@]}"; do
        current=$((current + 1))
        local test_name=$(basename "$test_file" .property.test.ts)
        
        show_progress $current $test_count "Backend" "$test_name"
        
        run_single_backend_test "$test_file"
    done
    
    printf "\r%80s\r" ""  # Clear progress line
    echo -e "${GREEN}✓ Backend tests completed${NC}"
    
    cd "$PROJECT_ROOT"
}

# Function to run a single Android test
run_single_android_test() {
    local test_pattern="$1"
    local test_name="$2"
    local output_file="$OUTPUT_DIR/android-${test_name}.log"
    local iterations_to_use="$ITERATIONS"
    
    if [ -n "$ANDROID_ITERATIONS" ]; then
        iterations_to_use="$ANDROID_ITERATIONS"
    fi
    
    # Run the test and capture all output
    local start_time=$(date +%s)
    local exit_code=0
    
    # Run test with macOS-compatible timeout using background process
    ./gradlew testDebugUnitTest --tests "*${test_pattern}*PropertyTest*" -Dkotest.proptest.default.iteration.count=$iterations_to_use --quiet > "$output_file" 2>&1 &
    local test_pid=$!
    
    # Wait for process with timeout
    local count=0
    while kill -0 $test_pid 2>/dev/null && [ $count -lt $TIMEOUT ]; do
        sleep 1
        count=$((count + 1))
    done
    
    # Kill if still running (timeout)
    if kill -0 $test_pid 2>/dev/null; then
        kill $test_pid 2>/dev/null
        wait $test_pid 2>/dev/null
        exit_code=124  # Timeout exit code
        echo "Test timed out after ${TIMEOUT}s" >> "$output_file"
    else
        wait $test_pid
        exit_code=$?
    fi
    
    local end_time=$(date +%s)
    local duration=$((end_time - start_time))
    
    # Record result
    TEST_RESULTS+=("ANDROID|$test_name|$exit_code|$duration|$output_file")
    
    return $exit_code
}

# Function to run Android property tests
run_android_tests() {
    if [ "$ANDROID_ENABLED" = false ]; then
        return 0
    fi
    
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE}ANDROID PROPERTY TESTS${NC}"
    echo -e "${BLUE}========================================${NC}"
    
    cd "$PROJECT_ROOT/android"
    
    # Check if Android directory exists and has tests
    if [ ! -d "app/src/test" ]; then
        echo -e "${YELLOW}No Android property tests found${NC}"
        return 0
    fi
    
    # Get test patterns
    local test_patterns="$SPECIFIC_TESTS"
    
    # Use JSON-configured patterns if available
    if [ -n "$ANDROID_TEST_PATTERNS" ]; then
        test_patterns="$ANDROID_TEST_PATTERNS"
    fi
    
    if [ -z "$test_patterns" ]; then
        # Find all property test patterns
        local test_files=$(find app/src/test -name "*PropertyTest.kt" 2>/dev/null || true)
        if [ -z "$test_files" ]; then
            echo -e "${YELLOW}No Android property tests found${NC}"
            return 0
        fi
        
        # Extract patterns from filenames
        test_patterns=""
        while IFS= read -r file; do
            local basename=$(basename "$file" PropertyTest.kt)
            if [ -z "$test_patterns" ]; then
                test_patterns="$basename"
            else
                test_patterns="$test_patterns|$basename"
            fi
        done <<< "$test_files"
    fi
    
    # Convert patterns to array
    local test_array=()
    IFS='|' read -ra PATTERNS <<< "$test_patterns"
    for pattern in "${PATTERNS[@]}"; do
        pattern=$(echo "$pattern" | xargs)  # Trim whitespace
        if [ -n "$pattern" ]; then
            test_array+=("$pattern")
        fi
    done
    
    local test_count=${#test_array[@]}
    echo -e "${CYAN}Found $test_count Android property test patterns${NC}"
    echo -e "${CYAN}Output files will be saved to: temp/test-results/android-*.log${NC}"
    echo ""
    
    # Run each test pattern individually
    local current=0
    for pattern in "${test_array[@]}"; do
        current=$((current + 1))
        
        show_progress $current $test_count "Android" "$pattern"
        
        run_single_android_test "$pattern" "$pattern"
    done
    
    printf "\r%80s\r" ""  # Clear progress line
    echo -e "${GREEN}✓ Android tests completed${NC}"
    
    cd "$PROJECT_ROOT"
}

# Function to generate final report
generate_report() {
    local end_time=$(date +%s)
    local duration=$((end_time - START_TIME))
    local minutes=$((duration / 60))
    local seconds=$((duration % 60))
    
    echo ""
    echo -e "${PURPLE}========================================${NC}"
    echo -e "${PURPLE}PROPERTY TEST EXECUTION REPORT${NC}"
    echo -e "${PURPLE}========================================${NC}"
    echo ""
    
    # Configuration summary
    echo -e "${CYAN}Configuration:${NC}"
    if [ -n "$CONFIG_FILE" ]; then
        echo "  Config file: $CONFIG_FILE"
    elif [ -n "$JSON_CONFIG" ]; then
        echo "  JSON config: provided"
    fi
    echo "  Timeout per test: ${TIMEOUT}s"
    echo "  Backend enabled: $BACKEND_ENABLED"
    if [ -n "$BACKEND_TEST_PATTERNS" ]; then
        echo "  Backend tests: $BACKEND_TEST_PATTERNS"
        echo "  Backend iterations: $BACKEND_ITERATIONS"
    else
        echo "  Backend iterations: $ITERATIONS"
    fi
    echo "  Android enabled: $ANDROID_ENABLED"
    if [ -n "$ANDROID_TEST_PATTERNS" ]; then
        echo "  Android tests: $ANDROID_TEST_PATTERNS"
        echo "  Android iterations: $ANDROID_ITERATIONS"
    else
        echo "  Android iterations: $ITERATIONS"
    fi
    echo "  Output directory: $OUTPUT_DIR"
    echo ""
    
    # Test results
    echo -e "${CYAN}Test Results:${NC}"
    echo ""
    
    local total_tests=0
    local passed_tests=0
    local failed_tests=0
    local backend_tests=0
    local backend_passed=0
    local android_tests=0
    local android_passed=0
    
    # Sort results by platform and name
    local sorted_results=($(printf '%s\n' "${TEST_RESULTS[@]}" | sort))
    
    for result in "${sorted_results[@]}"; do
        IFS='|' read -ra PARTS <<< "$result"
        local platform="${PARTS[0]}"
        local test_name="${PARTS[1]}"
        local exit_code="${PARTS[2]}"
        local test_duration="${PARTS[3]}"
        local output_file="${PARTS[4]}"
        
        total_tests=$((total_tests + 1))
        
        if [ "$platform" = "BACKEND" ]; then
            backend_tests=$((backend_tests + 1))
        else
            android_tests=$((android_tests + 1))
        fi
        
        if [ "$exit_code" = "0" ]; then
            passed_tests=$((passed_tests + 1))
            if [ "$platform" = "BACKEND" ]; then
                backend_passed=$((backend_passed + 1))
            else
                android_passed=$((android_passed + 1))
            fi
            echo -e "  ${GREEN}✓ PASS${NC} [$platform] $test_name (${test_duration}s) → $(basename "$output_file")"
        else
            failed_tests=$((failed_tests + 1))
            echo -e "  ${RED}✗ FAIL${NC} [$platform] $test_name (${test_duration}s) → $(basename "$output_file")"
        fi
    done
    
    echo ""
    
    # Platform summary
    echo -e "${CYAN}Platform Summary:${NC}"
    if [ $backend_tests -gt 0 ]; then
        if [ $backend_passed -eq $backend_tests ]; then
            echo -e "  Backend:  ${GREEN}✓ PASSED${NC} ($backend_passed/$backend_tests tests)"
        else
            local backend_failed=$((backend_tests - backend_passed))
            echo -e "  Backend:  ${RED}✗ FAILED${NC} ($backend_passed passed, $backend_failed failed)"
        fi
    fi
    
    if [ $android_tests -gt 0 ]; then
        if [ $android_passed -eq $android_tests ]; then
            echo -e "  Android:  ${GREEN}✓ PASSED${NC} ($android_passed/$android_tests tests)"
        else
            local android_failed=$((android_tests - android_passed))
            echo -e "  Android:  ${RED}✗ FAILED${NC} ($android_passed passed, $android_failed failed)"
        fi
    fi
    echo ""
    
    # Overall summary
    echo -e "${CYAN}Overall Summary:${NC}"
    echo "  Total tests: $total_tests"
    echo "  Passed: $passed_tests"
    echo "  Failed: $failed_tests"
    echo "  Duration: ${minutes}m ${seconds}s"
    echo "  Output files: $OUTPUT_DIR/"
    echo ""
    
    # Final status
    if [ $failed_tests -eq 0 ] && [ $total_tests -gt 0 ]; then
        echo -e "${GREEN}✓✓✓ ALL PROPERTY TESTS PASSED ✓✓✓${NC}"
        echo -e "${GREEN}Property-based testing validation complete${NC}"
        echo ""
        return 0
    elif [ $total_tests -eq 0 ]; then
        echo -e "${YELLOW}⚠⚠⚠ NO PROPERTY TESTS FOUND ⚠⚠⚠${NC}"
        echo -e "${YELLOW}Check test configuration and file patterns${NC}"
        echo ""
        return 1
    else
        echo -e "${RED}✗✗✗ PROPERTY TESTS FAILED ✗✗✗${NC}"
        echo -e "${RED}$failed_tests out of $total_tests tests failed${NC}"
        echo -e "${RED}Check individual output files in $OUTPUT_DIR/ for details${NC}"
        echo ""
        return 1
    fi
}

# Main execution
main() {
    echo -e "${PURPLE}Universal Property Test Runner${NC}"
    echo -e "${PURPLE}Boat Tracking System${NC}"
    echo ""
    
    # Clean output directory
    rm -rf "$OUTPUT_DIR"
    mkdir -p "$OUTPUT_DIR"
    
    # Validate environment
    if [ "$BACKEND_ENABLED" = true ] && [ ! -f "$PROJECT_ROOT/backend/package.json" ]; then
        echo -e "${RED}Error: Backend directory not found or invalid${NC}"
        exit 1
    fi
    
    if [ "$ANDROID_ENABLED" = true ] && [ ! -f "$PROJECT_ROOT/android/build.gradle.kts" ]; then
        echo -e "${RED}Error: Android directory not found or invalid${NC}"
        exit 1
    fi
    
    # Check if backend services are running (for backend tests)
    if [ "$BACKEND_ENABLED" = true ]; then
        echo -e "${CYAN}Checking backend prerequisites...${NC}"
        if ! docker-compose ps postgres | grep -q "Up"; then
            echo -e "${YELLOW}Warning: PostgreSQL container not running${NC}"
            echo -e "${YELLOW}Backend property tests require database connection${NC}"
            echo -e "${YELLOW}Start services with: docker-compose up -d${NC}"
            echo ""
        fi
    fi
    
    # Run tests
    run_backend_tests
    run_android_tests
    
    # Generate report
    generate_report
    local exit_code=$?
    
    echo -e "${PURPLE}========================================${NC}"
    
    exit $exit_code
}

# Execute main function
main "$@"