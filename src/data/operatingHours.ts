export interface DaySchedule {
  dayIndex: number; // 0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday, 4 = Thursday, 5 = Friday, 6 = Saturday
  dayName: string;
  shortName: string;
  hours: string;
  prefixNote?: string;
  isOpen: boolean;
  isAppointmentOnly?: boolean;
}

// 7-day schedule starting with Monday and ending with Sunday
export const weeklyOperatingHours: DaySchedule[] = [
  { dayIndex: 1, dayName: 'Monday', shortName: 'Mon', hours: '9:00 AM – 6:00 PM', isOpen: true },
  { dayIndex: 2, dayName: 'Tuesday', shortName: 'Tue', hours: '9:00 AM – 6:00 PM', isOpen: true },
  { dayIndex: 3, dayName: 'Wednesday', shortName: 'Wed', hours: '9:00 AM – 6:00 PM', isOpen: true },
  { dayIndex: 4, dayName: 'Thursday', shortName: 'Thu', hours: '9:00 AM – 6:00 PM', isOpen: true },
  { dayIndex: 5, dayName: 'Friday', shortName: 'Fri', hours: '9:00 AM – 1:00 PM', isOpen: true },
  {
    dayIndex: 6,
    dayName: 'Saturday',
    shortName: 'Sat',
    hours: '9:00 AM – 2:00 PM',
    prefixNote: '(By Appt. Only)',
    isOpen: true,
    isAppointmentOnly: true,
  },
  { dayIndex: 0, dayName: 'Sunday', shortName: 'Sun', hours: 'Closed', isOpen: false },
];

export function getTodaySchedule() {
  const today = new Date();
  const currentDayIndex = today.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday
  const schedule = weeklyOperatingHours.find((item) => item.dayIndex === currentDayIndex) || weeklyOperatingHours[0];

  const formattedHours = schedule.prefixNote
    ? `${schedule.prefixNote} ${schedule.hours}`
    : schedule.hours;

  return {
    dayIndex: currentDayIndex,
    dayName: schedule.dayName,
    hours: schedule.hours,
    prefixNote: schedule.prefixNote,
    formattedHours,
    isOpen: schedule.isOpen,
    statusText: schedule.isOpen ? `Open Today: ${formattedHours}` : `Closed Today`,
    fullStatusText: schedule.isOpen
      ? `Open Today (${schedule.dayName}): ${formattedHours}`
      : `Closed Today (${schedule.dayName})`,
  };
}
