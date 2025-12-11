# Database Management Commands

This document describes the CLI commands available for managing the database during development.

## Commands

### reset-db

Resets the database by dropping all tables and recreating the schema from migrations. Optionally creates a default user.

**Usage:**

```bash
# Reset database without creating a user
npm run reset-db

# Reset database and create a default user
npm run reset-db -- --username <username> --password <password>
```

**Via Docker:**

```bash
# Reset database without creating a user
docker-compose exec backend npm run reset-db

# Reset database and create a default user
docker-compose exec backend npm run reset-db -- --username <username> --password <password>
```

**Example:**

```bash
npm run reset-db -- --username admin --password adminpass123
```

**Output:**

```
⚠️  WARNING: This will delete ALL data in the database!

Dropping all tables...
✓ All tables dropped and schema recreated

Creating default user...
✓ Default user created successfully
  Username: admin
  User ID: 04c252b3-55fb-4d46-8732-8eee51d51224
  Created: 2025-12-09T04:04:09.917Z

✓ Database reset complete
```

**Warning:** This command will delete ALL data in the database. Use with caution!

### seed-db

Seeds the database with test data including sample boats, trips with GPS points, and other entities.

**Usage:**

```bash
npm run seed-db
```

**Via Docker:**

```bash
docker-compose exec backend npm run seed-db
```

**Output:**

```
Seeding database with test data...

Creating sample boats...
✓ Created 3 boats: Sea Breeze, Wave Runner, Sunset Cruiser
Creating sample trips...
✓ Created 4 trips with GPS data
  - Trip 1: coastal (2h, 10.0 nm)
  - Trip 2: inland (5h, 25.0 nm)
  - Trip 3: offshore (3.5h, 20.0 nm)
  - Trip 4: Active trip (in progress)

✓ Database seeded successfully

Summary:
  - 3 boats (1 active, 1 enabled, 1 disabled)
  - 4 trips (3 completed, 1 active)
  - 131 GPS points
```

**Test Data Created:**

- **3 Boats:**
  - Sea Breeze (active, enabled) - Boston Whaler Montauk 21'
  - Wave Runner (enabled) - Grady-White Freedom 285 28'
  - Sunset Cruiser (disabled) - Sea Ray Sundancer 320 32'

- **4 Trips:**
  - Trip 1: 2-hour coastal trip with 24 GPS points and 1 stop point
  - Trip 2: 5-hour inland trip with 60 GPS points and 2 stop points
  - Trip 3: 3.5-hour offshore trip with 42 GPS points and 1 stop point
  - Trip 4: Active trip (in progress) with 5 GPS points

- **131 GPS Points** total across all trips with realistic coordinates, speeds, and headings

- **Manual Data:** All completed trips include engine hours, fuel consumption, weather conditions, passenger count, and destination

## Common Workflows

### Fresh Start for Development

Reset the database and create a test user:

```bash
npm run reset-db -- --username testuser --password testpass123
```

### Populate with Test Data

After resetting, seed the database:

```bash
npm run seed-db
```

### Complete Reset and Seed

```bash
npm run reset-db -- --username admin --password adminpass
npm run seed-db
```

### Verify Database Contents

```bash
npm run list-users
```

Or use Prisma Studio:

```bash
npx prisma studio
```

## Requirements Validated

These commands satisfy the following requirements:

- **Requirement 21.1:** Database reset command to drop all tables and recreate schema
- **Requirement 21.2:** Optional default user creation during reset
- **Requirement 21.3:** Seed command to populate database with test data

## Testing

Integration tests for these commands are located in:

```
backend/tests/integration/database-management.test.ts
```

Run the tests:

```bash
npm test -- database-management.test.ts
```

## Notes

- The `reset-db` command uses `prisma migrate reset --force` internally, which:
  - Drops all tables
  - Recreates the schema from migrations
  - Does NOT run seed scripts (we have a separate seed-db command)

- The `seed-db` command creates realistic test data that can be used for:
  - Manual testing of the application
  - Demonstrating features
  - Development and debugging
  - Integration testing

- Both commands can be run via Docker using `docker-compose exec backend`

- The seed data includes trips with different water types (inland, coastal, offshore), various durations, and realistic GPS tracking data with stop points
