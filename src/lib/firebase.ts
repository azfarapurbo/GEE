import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { doc, getDocFromServer, getFirestore } from 'firebase/firestore';
import appletConfig from '../../firebase-applet-config.json';

function readEnv(key: string): string {
  const env = import.meta.env as Record<string, string | undefined>;
  const val = env[key];
  return typeof val === 'string' ? val.trim() : '';
}

const resolvedConfig = {
  apiKey: readEnv('VITE_FIREBASE_API_KEY') || appletConfig.apiKey,
  authDomain: readEnv('VITE_FIREBASE_AUTH_DOMAIN') || appletConfig.authDomain,
  projectId: readEnv('VITE_FIREBASE_PROJECT_ID') || appletConfig.projectId,
  storageBucket: readEnv('VITE_FIREBASE_STORAGE_BUCKET') || appletConfig.storageBucket,
  messagingSenderId:
    readEnv('VITE_FIREBASE_MESSAGING_SENDER_ID') || appletConfig.messagingSenderId,
  appId: readEnv('VITE_FIREBASE_APP_ID') || appletConfig.appId,
  firestoreDatabaseId:
    readEnv('VITE_FIREBASE_DATABASE_ID') || appletConfig.firestoreDatabaseId || '(default)',
};

export const isFirebaseConfigured = Boolean(
  resolvedConfig.apiKey && resolvedConfig.projectId && resolvedConfig.appId
);

const app = initializeApp(resolvedConfig);

export const db =
  resolvedConfig.firestoreDatabaseId && resolvedConfig.firestoreDatabaseId !== '(default)'
    ? getFirestore(app, resolvedConfig.firestoreDatabaseId)
    : getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const BOOTSTRAPPED_ADMIN_EMAIL = 'azfar.mazumder@gmail.com';

const extraEnvAdmins = readEnv('VITE_ADMIN_EMAILS')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

export const AUTHORIZED_ADMIN_EMAILS = Array.from(
  new Set([
    'azfar.mazumder@gmail.com',
    'info.globaleduexp@gmail.com',
    ...extraEnvAdmins,
  ])
);

export function isAuthorizedAdminEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  return AUTHORIZED_ADMIN_EMAILS.includes(email.trim().toLowerCase());
}

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  if (!isFirebaseConfigured) return;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Firestore connection check failed: client is offline.');
    }
  }
}

void testConnection();
