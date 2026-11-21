import {
  collection,
  deleteDoc,
  doc,
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
  ConsultationFormValues,
  consultationSchema,
  ConsultationStatus,
  sanitizeInput,
} from './validation';

export interface ConsultationRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  destination: string;
  degreeLevel: string;
  preferredDateTime: string;
  message: string;
  status: ConsultationStatus;
  adminNotes: string;
  createdAt: Date | null;
  updatedAt: Date | null;
}

function toDateOrNull(value: unknown): Date | null {
  if (value instanceof Timestamp) {
    return value.toDate();
  }
  if (value && typeof value === 'object' && 'toDate' in value && typeof (value as { toDate: () => Date }).toDate === 'function') {
    return (value as { toDate: () => Date }).toDate();
  }
  return null;
}

export const CONSULTATION_EMAIL = 'info.globaleduexp@gmail.com';

export async function submitConsultation(
  values: ConsultationFormValues
): Promise<{ id: string; emailSent: boolean }> {
  const sanitized = {
    fullName: sanitizeInput(values.fullName),
    email: sanitizeInput(values.email),
    phone: sanitizeInput(values.phone),
    destination: values.destination,
    degreeLevel: values.degreeLevel,
    preferredDateTime: sanitizeInput(values.preferredDateTime),
    message: sanitizeInput(values.message || ''),
  };

  const validated = consultationSchema.parse(sanitized);
  const collectionRef = collection(db, 'consultations');
  const docRef = doc(collectionRef);

  try {
    await setDoc(docRef, {
      fullName: validated.fullName,
      email: validated.email,
      phone: validated.phone,
      destination: validated.destination,
      degreeLevel: validated.degreeLevel,
      preferredDateTime: validated.preferredDateTime,
      message: validated.message,
      status: 'pending',
      adminNotes: '',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.CREATE, `consultations/${docRef.id}`);
  }

  let emailSent = false;
  try {
    const notifyRes = await fetch('/api/consultations/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        referenceId: docRef.id,
        ...validated,
      }),
    });
    if (notifyRes.ok) {
      const json = (await notifyRes.json()) as { emailSent?: boolean };
      emailSent = Boolean(json.emailSent);
    }
  } catch {
    // Firestore persistence already succeeded; optional server relay failure is non-blocking.
  }

  if (!emailSent) {
    try {
      const fsRes = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(CONSULTATION_EMAIL)}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            _subject: `New Consultation Booking: ${validated.fullName} (${validated.destination})`,
            _replyto: validated.email,
            referenceId: docRef.id,
            ...validated,
          }),
        }
      );
      emailSent = fsRes.ok;
    } catch {
      // Non-blocking fallback
    }
  }

  return { id: docRef.id, emailSent };
}

export function subscribeConsultations(
  onData: (records: ConsultationRecord[]) => void,
  onError: (err: Error) => void
): () => void {
  const path = 'consultations';
  const q = query(collection(db, path), orderBy('createdAt', 'desc'));

  return onSnapshot(
    q,
    (snapshot) => {
      const records: ConsultationRecord[] = snapshot.docs.map((docSnap) => {
        const data = docSnap.data();
        return {
          id: docSnap.id,
          fullName: String(data.fullName ?? ''),
          email: String(data.email ?? ''),
          phone: String(data.phone ?? ''),
          destination: String(data.destination ?? ''),
          degreeLevel: String(data.degreeLevel ?? ''),
          preferredDateTime: String(data.preferredDateTime ?? ''),
          message: String(data.message ?? ''),
          status: (data.status as ConsultationStatus) ?? 'pending',
          adminNotes: String(data.adminNotes ?? ''),
          createdAt: toDateOrNull(data.createdAt),
          updatedAt: toDateOrNull(data.updatedAt),
        };
      });
      onData(records);
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

export async function updateConsultationRecord(
  id: string,
  status: ConsultationStatus,
  adminNotes: string
): Promise<void> {
  const path = `consultations/${id}`;
  const cleanNotes = sanitizeInput(adminNotes).slice(0, 1000);
  try {
    await updateDoc(doc(db, 'consultations', id), {
      status,
      adminNotes: cleanNotes,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function deleteConsultationRecord(id: string): Promise<void> {
  const path = `consultations/${id}`;
  try {
    await deleteDoc(doc(db, 'consultations', id));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}
