import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface SeaTimeDay {
  date: string; // YYYY-MM-DD format
  totalHours: number;
  trips: Array<{
    id: string;
    boatId: string;
    startTime: Date;
    endTime: Date;
    durationHours: number;
  }>;
}

export interface LicenseProgress {
  totalDays: number;
  totalHours: number;
  daysInLast3Years: number;
  hoursInLast3Years: number;
  daysRemaining360: number;
  daysRemaining90In3Years: number;
  estimatedCompletion360: Date | null;
  estimatedCompletion90In3Years: Date | null;
  averageDaysPerMonth: number;
}

/**
 * Captain's Log Service
 * 
 * Handles sea time calculations for captain's license progress tracking.
 * Implements the following rules:
 * - 4+ hours in a day = 1 sea time day
 * - Multi-day trips count as separate days
 * - Same-day trips aggregate together
 * - Only trips where role = 'captain' count
 * - Cross-boat aggregation supported
 */
export class CaptainLogService {
  /**
   * Calculate sea time days from completed trips where user was captain
   * 
   * @param startDate Optional start date filter
   * @param endDate Optional end date filter
   * @returns Array of sea time days with trip details
   */
  async calculateSeaTimeDays(startDate?: Date, endDate?: Date): Promise<SeaTimeDay[]> {
    // Get all completed trips where user was captain
    const trips = await prisma.trip.findMany({
      where: {
        role: 'captain',
        endTime: {
          not: null,
          ...(startDate && { gte: startDate }),
          ...(endDate && { lte: endDate })
        }
      },
      orderBy: {
        startTime: 'asc'
      }
    });

    // Group trips by date and calculate daily totals
    const dayMap = new Map<string, SeaTimeDay>();

    for (const trip of trips) {
      if (!trip.endTime) continue; // Skip incomplete trips

      const tripDays = this.splitTripIntoDays(trip);
      
      for (const dayData of tripDays) {
        const dateKey = dayData.date;
        
        if (!dayMap.has(dateKey)) {
          dayMap.set(dateKey, {
            date: dateKey,
            totalHours: 0,
            trips: []
          });
        }

        const seaTimeDay = dayMap.get(dateKey)!;
        seaTimeDay.totalHours += dayData.hours;
        seaTimeDay.trips.push({
          id: trip.id,
          boatId: trip.boatId,
          startTime: dayData.startTime,
          endTime: dayData.endTime,
          durationHours: dayData.hours
        });
      }
    }

    // Filter to only days with 4+ hours (sea time day requirement)
    const seaTimeDays = Array.from(dayMap.values())
      .filter(day => day.totalHours >= 4.0)
      .sort((a, b) => a.date.localeCompare(b.date));

    return seaTimeDays;
  }

  /**
   * Split a trip into daily segments for multi-day trips
   * 
   * @param trip Trip to split
   * @returns Array of daily segments
   */
  private splitTripIntoDays(trip: any): Array<{
    date: string;
    hours: number;
    startTime: Date;
    endTime: Date;
  }> {
    if (!trip.endTime) return [];

    const startTime = new Date(trip.startTime);
    const endTime = new Date(trip.endTime);
    const days: Array<{ date: string; hours: number; startTime: Date; endTime: Date }> = [];

    // Get the start date (local date, not UTC)
    let currentDate = new Date(startTime);
    currentDate.setHours(0, 0, 0, 0); // Start of day

    while (currentDate <= endTime) {
      const dayStart = new Date(currentDate);
      const dayEnd = new Date(currentDate);
      dayEnd.setHours(23, 59, 59, 999); // End of day

      // Calculate the overlap between trip and this day
      const segmentStart = new Date(Math.max(startTime.getTime(), dayStart.getTime()));
      const segmentEnd = new Date(Math.min(endTime.getTime(), dayEnd.getTime()));

      if (segmentStart < segmentEnd) {
        const hours = (segmentEnd.getTime() - segmentStart.getTime()) / (1000 * 60 * 60);
        
        days.push({
          date: this.formatDate(currentDate),
          hours: hours,
          startTime: segmentStart,
          endTime: segmentEnd
        });
      }

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  }

  /**
   * Calculate license progress including goals and estimates
   * 
   * @returns Complete license progress information
   */
  async getLicenseProgress(): Promise<LicenseProgress> {
    const now = new Date();
    const threeYearsAgo = new Date(now);
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    // Get all sea time days
    const allSeaTimeDays = await this.calculateSeaTimeDays();
    const recentSeaTimeDays = await this.calculateSeaTimeDays(threeYearsAgo);

    // Calculate totals
    const totalDays = allSeaTimeDays.length;
    const totalHours = allSeaTimeDays.reduce((sum, day) => sum + day.totalHours, 0);
    const daysInLast3Years = recentSeaTimeDays.length;
    const hoursInLast3Years = recentSeaTimeDays.reduce((sum, day) => sum + day.totalHours, 0);

    // Calculate remaining days for goals
    const daysRemaining360 = Math.max(0, 360 - totalDays);
    const daysRemaining90In3Years = Math.max(0, 90 - daysInLast3Years);

    // Calculate average rate for estimates
    let averageDaysPerMonth = 0;
    let estimatedCompletion360: Date | null = null;
    let estimatedCompletion90In3Years: Date | null = null;

    if (recentSeaTimeDays.length > 0) {
      // Calculate rate based on recent activity (last 12 months)
      const oneYearAgo = new Date(now);
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      const lastYearDays = recentSeaTimeDays.filter(day => 
        new Date(day.date) >= oneYearAgo
      ).length;

      averageDaysPerMonth = lastYearDays / 12;

      // Estimate completion dates if there's activity
      if (averageDaysPerMonth > 0) {
        if (daysRemaining360 > 0) {
          const monthsTo360 = daysRemaining360 / averageDaysPerMonth;
          estimatedCompletion360 = new Date(now);
          estimatedCompletion360.setMonth(estimatedCompletion360.getMonth() + monthsTo360);
        }

        if (daysRemaining90In3Years > 0) {
          const monthsTo90 = daysRemaining90In3Years / averageDaysPerMonth;
          estimatedCompletion90In3Years = new Date(now);
          estimatedCompletion90In3Years.setMonth(estimatedCompletion90In3Years.getMonth() + monthsTo90);
        }
      }
    }

    return {
      totalDays,
      totalHours,
      daysInLast3Years,
      hoursInLast3Years,
      daysRemaining360,
      daysRemaining90In3Years,
      estimatedCompletion360,
      estimatedCompletion90In3Years,
      averageDaysPerMonth
    };
  }

  /**
   * Get detailed sea time breakdown by month/year
   * 
   * @param year Optional year filter
   * @returns Monthly breakdown of sea time
   */
  async getSeaTimeBreakdown(year?: number): Promise<Array<{
    month: string; // YYYY-MM format
    days: number;
    hours: number;
  }>> {
    const startDate = year ? new Date(year, 0, 1) : undefined;
    const endDate = year ? new Date(year, 11, 31, 23, 59, 59) : undefined;

    const seaTimeDays = await this.calculateSeaTimeDays(startDate, endDate);

    // Group by month
    const monthMap = new Map<string, { days: number; hours: number }>();

    for (const day of seaTimeDays) {
      const monthKey = day.date.substring(0, 7); // YYYY-MM
      
      if (!monthMap.has(monthKey)) {
        monthMap.set(monthKey, { days: 0, hours: 0 });
      }

      const monthData = monthMap.get(monthKey)!;
      monthData.days += 1;
      monthData.hours += day.totalHours;
    }

    return Array.from(monthMap.entries())
      .map(([month, data]) => ({
        month,
        days: data.days,
        hours: data.hours
      }))
      .sort((a, b) => a.month.localeCompare(b.month));
  }

  /**
   * Check if a specific date qualifies as a sea time day
   * 
   * @param date Date to check (YYYY-MM-DD format)
   * @returns True if date has 4+ hours as captain
   */
  async isSeaTimeDay(date: string): Promise<boolean> {
    const startOfDay = new Date(date + 'T00:00:00');
    const endOfDay = new Date(date + 'T23:59:59');

    const seaTimeDays = await this.calculateSeaTimeDays(startOfDay, endOfDay);
    return seaTimeDays.length > 0;
  }

  /**
   * Format date as YYYY-MM-DD string
   */
  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
}

export const captainLogService = new CaptainLogService();