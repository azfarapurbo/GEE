import { z } from 'zod';

export const PORTAL_DESTINATIONS = [
  'USA',
  'Canada',
  'UK',
  'Europe/Schengen',
  'Australia',
  'Malaysia',
] as const;

export const PORTAL_ACADEMIC_LEVELS = [
  'Foundation/Diploma',
  "Bachelor's",
  "Master's/MBA",
  'MBBS/Healthcare',
  'Ph.D.',
] as const;

export const APPLICATION_STAGES = [
  'Profile Submitted',
  'Document Review',
  'University Applied',
  'Offer Letter',
  'Visa Processing',
  'Visa Approved',
] as const;

export const TRACKER_PIPELINE_STAGES = [
  'Profile Submitted',
  'Document Review',
  'University Applied',
  'Offer Letter',
  'Visa Processing',
] as const;

export const DOC_STATUSES = ['missing', 'uploaded', 'verified'] as const;

export type PortalDestination = (typeof PORTAL_DESTINATIONS)[number];
export type PortalAcademicLevel = (typeof PORTAL_ACADEMIC_LEVELS)[number];
export type ApplicationStage = (typeof APPLICATION_STAGES)[number];
export type DocumentStatus = (typeof DOC_STATUSES)[number];
export type DocumentKey = 'passport' | 'transcripts' | 'englishTest' | 'sop';

export interface DocumentChecklistMeta {
  key: DocumentKey;
  statusField:
    | 'passportStatus'
    | 'transcriptsStatus'
    | 'englishTestStatus'
    | 'sopStatus';
  fileField:
    | 'passportFileName'
    | 'transcriptsFileName'
    | 'englishTestFileName'
    | 'sopFileName';
  label: string;
  helperText: string;
}

export const DOCUMENT_CHECKLIST_ITEMS: DocumentChecklistMeta[] = [
  {
    key: 'passport',
    statusField: 'passportStatus',
    fileField: 'passportFileName',
    label: 'Passport',
    helperText: 'Bio-data page scan (minimum 18 months validity)',
  },
  {
    key: 'transcripts',
    statusField: 'transcriptsStatus',
    fileField: 'transcriptsFileName',
    label: 'Academic Transcripts',
    helperText: 'SSC/HSC, O/A-Level, or Bachelor’s official marksheets',
  },
  {
    key: 'englishTest',
    statusField: 'englishTestStatus',
    fileField: 'englishTestFileName',
    label: 'IELTS / SAT Score',
    helperText: 'Official score report or Medium of Instruction (MOI) letter',
  },
  {
    key: 'sop',
    statusField: 'sopStatus',
    fileField: 'sopFileName',
    label: 'Statement of Purpose',
    helperText: 'Drafted motivation letter for university & visa review',
  },
];

export const DEFAULT_ASSIGNED_COUNSELOR =
  'Senior Counselor · Chittagong & Dhaka Desk';

export const COUNSELOR_OPTIONS = [
  'Senior Counselor · Chittagong & Dhaka Desk',
  'Europe & Schengen Admissions Desk',
  'UK, Canada & USA Pathway Desk',
  'Malaysia & Asia-Pacific Visa Desk',
  'Khulna Regional Advisory Desk',
] as const;

export interface CounselorDetails {
  name: string;
  deskLabel: string;
  phone: string;
  whatsappDigits: string;
  email: string;
  meetingModes: string;
}

export function getCounselorDetails(assignedCounselor: string): CounselorDetails {
  const isKhulna = assignedCounselor.toLowerCase().includes('khulna');
  return {
    name: assignedCounselor || DEFAULT_ASSIGNED_COUNSELOR,
    deskLabel: isKhulna
      ? 'Khulna Office (KDA Avenue, Shib Bari Mor)'
      : 'Chittagong & Dhaka Advisory Desk',
    phone: isKhulna ? '+880 1686395927' : '+880 1717149453',
    whatsappDigits: isKhulna ? '8801686395927' : '8801717149453',
    email: 'info.globaleduexp@gmail.com',
    meetingModes:
      'Google Meet, Zoom, WhatsApp Video, or in person by appointment',
  };
}

export interface StudentProfileRecord {
  uid: string;
  role: 'student';
  fullName: string;
  email: string;
  phone: string;
  preferredDestination: PortalDestination;
  academicLevel: PortalAcademicLevel;
  applicationStage: ApplicationStage;
  assignedCounselor: string;
  passportStatus: DocumentStatus;
  passportFileName: string;
  transcriptsStatus: DocumentStatus;
  transcriptsFileName: string;
  englishTestStatus: DocumentStatus;
  englishTestFileName: string;
  sopStatus: DocumentStatus;
  sopFileName: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface StudentNoteRecord {
  studentId: string;
  notes: string;
  updatedBy: string;
  updatedAt: Date | null;
}

export const portalSignInSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, 'Please enter your email address.')
    .max(120, 'Email cannot exceed 120 characters.')
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address.'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(128, 'Password is too long.'),
});

export const portalSignUpSchema = z.object({
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
    .min(7, 'Please enter a valid phone or WhatsApp number.')
    .max(30, 'Phone number cannot exceed 30 characters.')
    .regex(
      /^\+?[0-9\s\-()]{7,30}$/,
      'Use digits, spaces, parentheses, hyphens, or a leading + sign.'
    ),
  preferredDestination: z.enum(PORTAL_DESTINATIONS, {
    message: 'Please select a preferred study destination.',
  }),
  academicLevel: z.enum(PORTAL_ACADEMIC_LEVELS, {
    message: 'Please select your target academic level.',
  }),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters.')
    .max(128, 'Password cannot exceed 128 characters.'),
});

export const portalPreferencesSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, 'Full name must be at least 2 characters.')
    .max(100, 'Full name cannot exceed 100 characters.'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone or WhatsApp number.')
    .max(30, 'Phone number cannot exceed 30 characters.')
    .regex(
      /^\+?[0-9\s\-()]{7,30}$/,
      'Use digits, spaces, parentheses, hyphens, or a leading + sign.'
    ),
  preferredDestination: z.enum(PORTAL_DESTINATIONS),
  academicLevel: z.enum(PORTAL_ACADEMIC_LEVELS),
});

export const portalResetPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, 'Please enter your registered email address.')
    .max(120)
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address.'),
});
