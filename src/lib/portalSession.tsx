import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { ConsultationRecord } from './consultations';
import { auth, isAuthorizedAdminEmail } from './firebase';
import {
  ApplicationStage,
  DocumentStatus,
  PortalAcademicLevel,
  PortalDestination,
  StudentProfileRecord,
} from './portalTypes';
import { ConsultationStatus } from './validation';

export type DemoModeRole = 'none' | 'student' | 'admin';

const INITIAL_DEMO_STUDENTS: StudentProfileRecord[] = [
  {
    uid: 'demo-student-nadia',
    role: 'student',
    fullName: 'Nadia Rahman',
    email: 'nadia.rahman@demo.globaleduexp.com',
    phone: '+880 1711-234567',
    preferredDestination: 'UK',
    academicLevel: "Master's/MBA",
    applicationStage: 'University Applied',
    assignedCounselor: 'UK, Canada & USA Pathway Desk',
    passportStatus: 'verified',
    passportFileName: 'Nadia_Rahman_Passport.pdf',
    transcriptsStatus: 'verified',
    transcriptsFileName: 'CUET_BSc_Transcripts_Final.pdf',
    englishTestStatus: 'uploaded',
    englishTestFileName: 'IELTS_Academic_7.5_TRF.pdf',
    sopStatus: 'verified',
    sopFileName: 'SOP_UCL_Manchester_MSc.pdf',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
  },
  {
    uid: 'demo-student-tanvir',
    role: 'student',
    fullName: 'Tanvir Ahmed',
    email: 'tanvir.ahmed@demo.globaleduexp.com',
    phone: '+880 1819-445566',
    preferredDestination: 'Europe/Schengen',
    academicLevel: "Master's/MBA",
    applicationStage: 'Offer Letter',
    assignedCounselor: 'Europe & Schengen Admissions Desk',
    passportStatus: 'verified',
    passportFileName: 'Tanvir_Passport_Bio.pdf',
    transcriptsStatus: 'verified',
    transcriptsFileName: 'BUET_ME_Transcripts.pdf',
    englishTestStatus: 'verified',
    englishTestFileName: 'IELTS_7.0_Score_Report.pdf',
    sopStatus: 'verified',
    sopFileName: 'Erasmus_Mundus_Motivation.pdf',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 25),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    uid: 'demo-student-farhana',
    role: 'student',
    fullName: 'Farhana Karim',
    email: 'farhana.karim@demo.globaleduexp.com',
    phone: '+880 1686-395110',
    preferredDestination: 'Malaysia',
    academicLevel: 'Foundation/Diploma',
    applicationStage: 'Visa Approved',
    assignedCounselor: 'Malaysia & Asia-Pacific Visa Desk',
    passportStatus: 'verified',
    passportFileName: 'Farhana_Passport.pdf',
    transcriptsStatus: 'verified',
    transcriptsFileName: 'ALevel_Statement_Results.pdf',
    englishTestStatus: 'verified',
    englishTestFileName: 'IELTS_6.5_TRF.pdf',
    sopStatus: 'verified',
    sopFileName: 'Taylors_Foundation_SOP.pdf',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 42),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
  },
  {
    uid: 'demo-student-sadia',
    role: 'student',
    fullName: 'Sadia Islam',
    email: 'sadia.islam@demo.globaleduexp.com',
    phone: '+880 1912-887766',
    preferredDestination: 'Canada',
    academicLevel: "Bachelor's",
    applicationStage: 'Document Review',
    assignedCounselor: 'Senior Counselor · Chittagong & Dhaka Desk',
    passportStatus: 'uploaded',
    passportFileName: 'Sadia_Passport_Scan.jpg',
    transcriptsStatus: 'uploaded',
    transcriptsFileName: 'HSC_2025_Marksheet.pdf',
    englishTestStatus: 'missing',
    englishTestFileName: '',
    sopStatus: 'missing',
    sopFileName: '',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 18),
  },
];

const INITIAL_DEMO_NOTES: Record<string, string> = {
  'demo-student-nadia':
    'Shortlisted University of Manchester and University of Leeds for MSc Data Science. IELTS TRF uploaded; verify TRF number on British Council portal before finalizing CAS.',
  'demo-student-tanvir':
    'Conditional offer received from TU Munich & Erasmus partner track. APS certificate verified; blocked account setup scheduled next week.',
  'demo-student-farhana':
    'EMGS eVAL approved at 100%. Pre-departure flight briefing scheduled for Subang Jaya intake.',
  'demo-student-sadia':
    'Waiting for IELTS Academic booking confirmation. Targetting Waterloo & Manitoba Fall intake.',
};

const INITIAL_DEMO_CONSULTATIONS: ConsultationRecord[] = [
  {
    id: 'DEMO-CONS-1042',
    fullName: 'Rafiqul Hasan',
    email: 'rafiqul.hasan@example.com',
    phone: '+880 1712-334455',
    destination: 'Europe (Germany / EU)',
    degreeLevel: 'Masters',
    preferredDateTime: '18/12/2026, 03:00 PM',
    message: 'Looking for public TU engineering programs in Germany with blocked account guidance.',
    status: 'pending',
    adminNotes: '',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
  },
  {
    id: 'DEMO-CONS-1039',
    fullName: 'Mehedi Chowdhury',
    email: 'mehedi.c@example.com',
    phone: '+880 1686-778899',
    destination: 'Malaysia',
    degreeLevel: 'Undergraduate',
    preferredDateTime: '19/12/2026, 11:30 AM',
    message: 'Interested in Monash Malaysia or Taylor’s Computer Science with merit scholarship.',
    status: 'scheduled',
    adminNotes: 'Google Meet link sent for Saturday 11:30 AM slot.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 28),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
  },
];

interface PortalSessionContextValue {
  firebaseUser: User | null;
  authReady: boolean;
  isAuthorizedAdmin: boolean;
  demoMode: DemoModeRole;
  demoStudents: StudentProfileRecord[];
  activeDemoStudent: StudentProfileRecord;
  demoNotes: Record<string, string>;
  demoConsultations: ConsultationRecord[];
  enterDemoMode: (role: Exclude<DemoModeRole, 'none'>) => void;
  exitDemoMode: () => void;
  updateDemoStudentProfile: (
    uid: string,
    patch: Partial<
      Pick<
        StudentProfileRecord,
        | 'fullName'
        | 'phone'
        | 'preferredDestination'
        | 'academicLevel'
        | 'applicationStage'
        | 'assignedCounselor'
        | 'passportStatus'
        | 'passportFileName'
        | 'transcriptsStatus'
        | 'transcriptsFileName'
        | 'englishTestStatus'
        | 'englishTestFileName'
        | 'sopStatus'
        | 'sopFileName'
      >
    >
  ) => void;
  saveDemoStudentNote: (studentId: string, notes: string) => void;
  updateDemoConsultation: (
    id: string,
    status: ConsultationStatus,
    adminNotes: string
  ) => void;
  deleteDemoConsultation: (id: string) => void;
  registerDemoStudent: (input: {
    fullName: string;
    email: string;
    phone: string;
    preferredDestination: PortalDestination;
    academicLevel: PortalAcademicLevel;
  }) => void;
}

const PortalSessionContext = createContext<PortalSessionContextValue | null>(null);

export function PortalSessionProvider({ children }: { children: ReactNode }) {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(auth.currentUser);
  const [authReady, setAuthReady] = useState(false);

  const [demoMode, setDemoMode] = useState<DemoModeRole>('none');
  const [demoStudents, setDemoStudents] =
    useState<StudentProfileRecord[]>(INITIAL_DEMO_STUDENTS);
  const [activeDemoStudentUid, setActiveDemoStudentUid] = useState<string>(
    INITIAL_DEMO_STUDENTS[0].uid
  );
  const [demoNotes, setDemoNotes] =
    useState<Record<string, string>>(INITIAL_DEMO_NOTES);
  const [demoConsultations, setDemoConsultations] = useState<ConsultationRecord[]>(
    INITIAL_DEMO_CONSULTATIONS
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setFirebaseUser(user);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const isAuthorizedAdmin =
    Boolean(firebaseUser) &&
    Boolean(firebaseUser?.emailVerified) &&
    isAuthorizedAdminEmail(firebaseUser?.email);

  const activeDemoStudent =
    demoStudents.find((s) => s.uid === activeDemoStudentUid) ?? demoStudents[0];

  const enterDemoMode = (role: Exclude<DemoModeRole, 'none'>) => {
    setDemoMode(role);
  };

  const exitDemoMode = () => {
    setDemoMode('none');
  };

  const updateDemoStudentProfile: PortalSessionContextValue['updateDemoStudentProfile'] =
    (uid, patch) => {
      setDemoStudents((prev) =>
        prev.map((student) =>
          student.uid === uid
            ? { ...student, ...patch, updatedAt: new Date() }
            : student
        )
      );
    };

  const saveDemoStudentNote = (studentId: string, notes: string) => {
    setDemoNotes((prev) => ({ ...prev, [studentId]: notes }));
  };

  const updateDemoConsultation = (
    id: string,
    status: ConsultationStatus,
    adminNotes: string
  ) => {
    setDemoConsultations((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, status, adminNotes, updatedAt: new Date() }
          : item
      )
    );
  };

  const deleteDemoConsultation = (id: string) => {
    setDemoConsultations((prev) => prev.filter((item) => item.id !== id));
  };

  const registerDemoStudent: PortalSessionContextValue['registerDemoStudent'] = (
    input
  ) => {
    const uid = `demo-student-${Date.now()}`;
    const newStudent: StudentProfileRecord = {
      uid,
      role: 'student',
      fullName: input.fullName,
      email: input.email,
      phone: input.phone,
      preferredDestination: input.preferredDestination,
      academicLevel: input.academicLevel,
      applicationStage: 'Profile Submitted' as ApplicationStage,
      assignedCounselor: 'Senior Counselor · Chittagong & Dhaka Desk',
      passportStatus: 'missing',
      passportFileName: '',
      transcriptsStatus: 'missing',
      transcriptsFileName: '',
      englishTestStatus: 'missing',
      englishTestFileName: '',
      sopStatus: 'missing',
      sopFileName: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setDemoStudents((prev) => [newStudent, ...prev]);
    setActiveDemoStudentUid(uid);
    setDemoMode('student');
  };

  return (
    <PortalSessionContext.Provider
      value={{
        firebaseUser,
        authReady,
        isAuthorizedAdmin,
        demoMode,
        demoStudents,
        activeDemoStudent,
        demoNotes,
        demoConsultations,
        enterDemoMode,
        exitDemoMode,
        updateDemoStudentProfile,
        saveDemoStudentNote,
        updateDemoConsultation,
        deleteDemoConsultation,
        registerDemoStudent,
      }}
    >
      {children}
    </PortalSessionContext.Provider>
  );
}

export function usePortalSession(): PortalSessionContextValue {
  const ctx = useContext(PortalSessionContext);
  if (!ctx) {
    throw new Error('usePortalSession must be used within a PortalSessionProvider');
  }
  return ctx;
}
