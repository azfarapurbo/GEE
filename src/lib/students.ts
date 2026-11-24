import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from './firebase';
import {
  ApplicationStage,
  DEFAULT_ASSIGNED_COUNSELOR,
  DOCUMENT_CHECKLIST_ITEMS,
  DocumentKey,
  DocumentStatus,
  PortalAcademicLevel,
  PortalDestination,
  portalPreferencesSchema,
  StudentNoteRecord,
  StudentProfileRecord,
} from './portalTypes';
import { sanitizeInput } from './validation';

function toDateOrNull(value: unknown): Date | null {
  if (value instanceof Timestamp) return value.toDate();
  if (
    value &&
    typeof value === 'object' &&
    'toDate' in value &&
    typeof (value as { toDate: () => Date }).toDate === 'function'
  ) {
    return (value as { toDate: () => Date }).toDate();
  }
  return null;
}

function mapDocToStudent(id: string, data: Record<string, unknown>): StudentProfileRecord {
  return {
    uid: String(data.uid ?? id),
    role: 'student',
    fullName: String(data.fullName ?? ''),
    email: String(data.email ?? ''),
    phone: String(data.phone ?? ''),
    preferredDestination: (data.preferredDestination as PortalDestination) ?? 'UK',
    academicLevel: (data.academicLevel as PortalAcademicLevel) ?? "Master's/MBA",
    applicationStage:
      (data.applicationStage as ApplicationStage) ?? 'Profile Submitted',
    assignedCounselor: String(data.assignedCounselor ?? DEFAULT_ASSIGNED_COUNSELOR),
    passportStatus: (data.passportStatus as DocumentStatus) ?? 'missing',
    passportFileName: String(data.passportFileName ?? ''),
    transcriptsStatus: (data.transcriptsStatus as DocumentStatus) ?? 'missing',
    transcriptsFileName: String(data.transcriptsFileName ?? ''),
    englishTestStatus: (data.englishTestStatus as DocumentStatus) ?? 'missing',
    englishTestFileName: String(data.englishTestFileName ?? ''),
    sopStatus: (data.sopStatus as DocumentStatus) ?? 'missing',
    sopFileName: String(data.sopFileName ?? ''),
    createdAt: toDateOrNull(data.createdAt),
    updatedAt: toDateOrNull(data.updatedAt),
  };
}

export interface CreateStudentInput {
  uid: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDestination: PortalDestination;
  academicLevel: PortalAcademicLevel;
}

const PENDING_CACHE_PREFIX = 'gex_pending_student_';

export function savePendingStudentDraft(profile: StudentProfileRecord): void {
  try {
    window.localStorage.setItem(
      `${PENDING_CACHE_PREFIX}${profile.uid}`,
      JSON.stringify({
        ...profile,
        createdAt: profile.createdAt ? profile.createdAt.toISOString() : new Date().toISOString(),
        updatedAt: profile.updatedAt ? profile.updatedAt.toISOString() : new Date().toISOString(),
      })
    );
  } catch {
    // Ignore storage quota issues
  }
}

export function loadPendingStudentDraft(uid: string): StudentProfileRecord | null {
  try {
    const raw = window.localStorage.getItem(`${PENDING_CACHE_PREFIX}${uid}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    return {
      ...mapDocToStudent(uid, parsed),
      createdAt: parsed.createdAt ? new Date(String(parsed.createdAt)) : new Date(),
      updatedAt: parsed.updatedAt ? new Date(String(parsed.updatedAt)) : new Date(),
    };
  } catch {
    return null;
  }
}

export function clearPendingStudentDraft(uid: string): void {
  try {
    window.localStorage.removeItem(`${PENDING_CACHE_PREFIX}${uid}`);
  } catch {
    // Ignore storage removal errors
  }
}

export function buildLocalStudentProfile(input: CreateStudentInput): StudentProfileRecord {
  const now = new Date();
  return {
    uid: input.uid,
    role: 'student',
    fullName: sanitizeInput(input.fullName).slice(0, 100),
    email: sanitizeInput(input.email).slice(0, 120),
    phone: sanitizeInput(input.phone).slice(0, 30),
    preferredDestination: input.preferredDestination,
    academicLevel: input.academicLevel,
    applicationStage: 'Profile Submitted',
    assignedCounselor: DEFAULT_ASSIGNED_COUNSELOR,
    passportStatus: 'missing',
    passportFileName: '',
    transcriptsStatus: 'missing',
    transcriptsFileName: '',
    englishTestStatus: 'missing',
    englishTestFileName: '',
    sopStatus: 'missing',
    sopFileName: '',
    createdAt: now,
    updatedAt: now,
  };
}

export async function createStudentProfile(input: CreateStudentInput): Promise<void> {
  const path = `students/${input.uid}`;
  const cleanName = sanitizeInput(input.fullName).slice(0, 100);
  const cleanEmail = sanitizeInput(input.email).slice(0, 120);
  const cleanPhone = sanitizeInput(input.phone).slice(0, 30);

  try {
    await setDoc(doc(db, 'students', input.uid), {
      uid: input.uid,
      role: 'student',
      fullName: cleanName,
      email: cleanEmail,
      phone: cleanPhone,
      preferredDestination: input.preferredDestination,
      academicLevel: input.academicLevel,
      applicationStage: 'Profile Submitted',
      assignedCounselor: DEFAULT_ASSIGNED_COUNSELOR,
      passportStatus: 'missing',
      passportFileName: '',
      transcriptsStatus: 'missing',
      transcriptsFileName: '',
      englishTestStatus: 'missing',
      englishTestFileName: '',
      sopStatus: 'missing',
      sopFileName: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, path);
  }
}

export async function getStudentProfile(uid: string): Promise<StudentProfileRecord | null> {
  const path = `students/${uid}`;
  try {
    const snap = await getDoc(doc(db, 'students', uid));
    if (!snap.exists()) return null;
    return mapDocToStudent(snap.id, snap.data() as Record<string, unknown>);
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export function subscribeStudentProfile(
  uid: string,
  onData: (profile: StudentProfileRecord | null) => void,
  onError: (err: Error) => void
): () => void {
  const path = `students/${uid}`;
  return onSnapshot(
    doc(db, 'students', uid),
    (snap) => {
      if (!snap.exists()) {
        onData(null);
        return;
      }
      onData(mapDocToStudent(snap.id, snap.data() as Record<string, unknown>));
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.GET, path);
      } catch (wrapped) {
        onError(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
      }
    }
  );
}

export function subscribeAllStudents(
  onData: (students: StudentProfileRecord[]) => void,
  onError: (err: Error) => void
): () => void {
  const path = 'students';
  const q = query(collection(db, path), orderBy('createdAt', 'desc'));
  return onSnapshot(
    q,
    (snapshot) => {
      const items = snapshot.docs.map((docSnap) =>
        mapDocToStudent(docSnap.id, docSnap.data() as Record<string, unknown>)
      );
      onData(items);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        onError(wrapped instanceof Error ? wrapped : new Error(String(wrapped)));
      }
    }
  );
}

export async function updateStudentPreferences(
  uid: string,
  values: {
    fullName: string;
    phone: string;
    preferredDestination: PortalDestination;
    academicLevel: PortalAcademicLevel;
  }
): Promise<void> {
  const path = `students/${uid}`;
  const validated = portalPreferencesSchema.parse({
    fullName: sanitizeInput(values.fullName),
    phone: sanitizeInput(values.phone),
    preferredDestination: values.preferredDestination,
    academicLevel: values.academicLevel,
  });

  try {
    await updateDoc(doc(db, 'students', uid), {
      fullName: validated.fullName,
      phone: validated.phone,
      preferredDestination: validated.preferredDestination,
      academicLevel: validated.academicLevel,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function uploadStudentDocumentMeta(
  uid: string,
  docKey: DocumentKey,
  fileName: string
): Promise<void> {
  const path = `students/${uid}`;
  const meta = DOCUMENT_CHECKLIST_ITEMS.find((d) => d.key === docKey);
  if (!meta) return;

  const cleanFileName = sanitizeInput(fileName).slice(0, 140) || `${docKey}-document.pdf`;
  try {
    await updateDoc(doc(db, 'students', uid), {
      [meta.statusField]: 'uploaded',
      [meta.fileField]: cleanFileName,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function adminUpdateStudentApplication(
  uid: string,
  updates: {
    applicationStage: ApplicationStage;
    assignedCounselor: string;
    passportStatus: DocumentStatus;
    transcriptsStatus: DocumentStatus;
    englishTestStatus: DocumentStatus;
    sopStatus: DocumentStatus;
  }
): Promise<void> {
  const path = `students/${uid}`;
  const cleanCounselor = sanitizeInput(updates.assignedCounselor).slice(0, 120) || DEFAULT_ASSIGNED_COUNSELOR;
  try {
    await updateDoc(doc(db, 'students', uid), {
      applicationStage: updates.applicationStage,
      assignedCounselor: cleanCounselor,
      passportStatus: updates.passportStatus,
      transcriptsStatus: updates.transcriptsStatus,
      englishTestStatus: updates.englishTestStatus,
      sopStatus: updates.sopStatus,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function adminGetStudentNote(studentId: string): Promise<StudentNoteRecord | null> {
  const path = `studentNotes/${studentId}`;
  try {
    const snap = await getDoc(doc(db, 'studentNotes', studentId));
    if (!snap.exists()) return null;
    const data = snap.data() as Record<string, unknown>;
    return {
      studentId: String(data.studentId ?? studentId),
      notes: String(data.notes ?? ''),
      updatedBy: String(data.updatedBy ?? ''),
      updatedAt: toDateOrNull(data.updatedAt),
    };
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function adminSaveStudentNote(
  studentId: string,
  notes: string,
  updatedBy: string
): Promise<void> {
  const path = `studentNotes/${studentId}`;
  const cleanNotes = sanitizeInput(notes).slice(0, 2000);
  const cleanUpdater = sanitizeInput(updatedBy).slice(0, 120) || 'Admin Counselor';
  try {
    await setDoc(doc(db, 'studentNotes', studentId), {
      studentId,
      notes: cleanNotes,
      updatedBy: cleanUpdater,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
