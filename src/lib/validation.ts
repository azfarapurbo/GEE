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
  'Diploma',
  'Foundation',
  'Undergraduate',
  'Masters',
] as const;

export const CONSULTATION_STATUSES = [
  'pending',
  'scheduled',
  'completed',
  'archived',
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
  destination: z.enum(STUDY_DESTINATIONS, {
    message: 'Please select a preferred study destination.',
  }),
  degreeLevel: z.enum(DEGREE_LEVELS, {
    message: 'Please select your desired degree level.',
  }),
  preferredDateTime: z
    .string()
    .trim()
    .min(4, 'Please specify your preferred consultation date and time.')
    .max(80, 'Preferred date/time cannot exceed 80 characters.'),
  message: z
    .string()
    .trim()
    .max(1500, 'Message cannot exceed 1,500 characters.')
    .default(''),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
