import { z } from 'zod';

export const STUDY_DESTINATIONS = [
  'Malaysia',
  'Europe (Germany / EU)',
  'United Kingdom',
  'East Asia (Japan / South Korea)',
  'Canada / USA / Australia',
  'Rest of the World',
  'Undecided / Need Guidance',
] as const;

export const DEGREE_LEVELS = [
  'Foundation',
  'Diploma',
  'Undergraduate',
  'Masters',
] as const;

export const CONSULTATION_STATUSES = [
  'pending',
  'scheduled',
  'completed',
  'archived',
] as const;

export const COUNSELING_TIME_SLOTS = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '06:30 PM',
] as const;

export type StudyDestinationOption = (typeof STUDY_DESTINATIONS)[number];
export type DegreeLevelOption = (typeof DEGREE_LEVELS)[number];
export type ConsultationStatus = (typeof CONSULTATION_STATUSES)[number];

/**
 * Strips ASCII control characters and angle brackets to neutralize HTML/script injection
 * before persisting or forwarding form strings.
 */
export function sanitizeInput(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const PREFERRED_DATE_TIME_REGEX =
  /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(\d{4}),\s*(0?[1-9]|1[0-2]):([0-5][0-9])\s*(AM|PM)$/i;

export function isValidCalendarDate(day: number, month: number, year: number): boolean {
  if (month < 1 || month > 12 || day < 1 || year < 1900 || year > 2100) {
    return false;
  }
  const dt = new Date(year, month - 1, day);
  return (
    dt.getFullYear() === year &&
    dt.getMonth() === month - 1 &&
    dt.getDate() === day
  );
}

export function normalizePreferredDateTime(raw: string): string {
  const cleaned = sanitizeInput(raw);
  const match = cleaned.match(PREFERRED_DATE_TIME_REGEX);
  if (!match) return cleaned;
  const [, d, m, y, hh, mm, ampm] = match;
  return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}, ${hh.padStart(2, '0')}:${mm} ${ampm.toUpperCase()}`;
}

export function extractIsoDateFromPreferred(preferredDateTime: string): string {
  const match = preferredDateTime.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (!match) return '';
  const [, d, m, y] = match;
  const day = Number(d);
  const month = Number(m);
  const year = Number(y);
  if (!isValidCalendarDate(day, month, year)) return '';
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
}

export function extractTimeFromPreferred(preferredDateTime: string): string {
  const match = preferredDateTime.match(/,\s*(0?[1-9]|1[0-2]):([0-5][0-9])\s*(AM|PM)$/i);
  if (!match) return '';
  const [, hh, mm, ampm] = match;
  return `${hh.padStart(2, '0')}:${mm} ${ampm.toUpperCase()}`;
}

export function formatIsoDateToSlash(isoDate: string): string {
  const match = isoDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return '';
  const [, y, m, d] = match;
  return `${d}/${m}/${y}`;
}

export function getTodaySlashDate(): string {
  const now = new Date();
  const d = String(now.getDate()).padStart(2, '0');
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const y = String(now.getFullYear());
  return `${d}/${m}/${y}`;
}

export function combinePreferredDateAndTime(dateSlash: string, time12h: string): string {
  const safeDate = dateSlash || getTodaySlashDate();
  const safeTime = time12h || '12:00 PM';
  return `${safeDate}, ${safeTime}`;
}

export const consultationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Please enter your full name (at least 2 characters).')
    .max(100, 'Full name cannot exceed 100 characters.'),
  email: z
    .string()
    .trim()
    .min(5, 'Please enter a valid email address.')
    .max(120, 'Email cannot exceed 120 characters.')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone or WhatsApp number with country code.')
    .max(30, 'Phone number cannot exceed 30 characters.')
    .regex(
      /^\+?[0-9\s\-()]{7,30}$/,
      'Use digits, spaces, parentheses, hyphens, or a leading + sign.'
    ),
  preferredDateTime: z
    .string()
    .trim()
    .max(80, 'Preferred Date & Time cannot exceed 80 characters.')
    .refine((val) => {
      const match = val.match(PREFERRED_DATE_TIME_REGEX);
      if (!match) return false;
      const day = Number(match[1]);
      const month = Number(match[2]);
      const year = Number(match[3]);
      return isValidCalendarDate(day, month, year);
    }, 'Use Date, Time format — Example: 01/01/2016, 12:00 PM')
    .transform((val) => normalizePreferredDateTime(val)),
  destination: z.enum(STUDY_DESTINATIONS, {
    message: 'Please select a preferred study destination.',
  }),
  degreeLevel: z.enum(DEGREE_LEVELS, {
    message: 'Please select your desired degree level.',
  }),
  message: z
    .string()
    .trim()
    .max(1500, 'Message cannot exceed 1,500 characters.')
    .default(''),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
