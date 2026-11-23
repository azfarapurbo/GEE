import { useEffect, useMemo, useRef, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import {
  Download,
  Lock,
  LogOut,
  Search,
  Trash2,
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import {
  ConsultationRecord,
  deleteConsultationRecord,
  subscribeConsultations,
  updateConsultationRecord,
} from '../lib/consultations';
import {
  auth,
  googleAuthProvider,
  isAuthorizedAdminEmail,
} from '../lib/firebase';
import { CONSULTATION_STATUSES, ConsultationStatus } from '../lib/validation';

const STATUS_LABELS: Record<ConsultationStatus, string> = {
  pending: 'Pending Review',
  scheduled: 'Scheduled',
  completed: 'Completed',
  archived: 'Archived',
};

const EXPECTED_POPUP_CANCEL_CODES = new Set([
  'auth/popup-closed-by-user',
  'auth/user-cancelled',
  'auth/cancelled-popup-request',
  'auth/popup-blocked',
]);

function getFirebaseErrorCode(err: unknown): string {
  if (typeof err === 'object' && err !== null && 'code' in err) {
    return String((err as { code: unknown }).code);
  }
  return '';
}

function formatGoogleSignInError(err: unknown): string {
  const code = getFirebaseErrorCode(err);
  switch (code) {
    case 'auth/popup-closed-by-user':
      return 'The Google sign-in window was closed before completing login. Click "Sign in with Google" to try again.';
    case 'auth/user-cancelled':
      return 'Google sign-in permission was declined. Please choose your authorized account and approve access to continue.';
    case 'auth/cancelled-popup-request':
      return 'A Google sign-in window is already in progress. Please finish or close the open popup and try again.';
    case 'auth/popup-blocked':
      return 'Your browser blocked the Google sign-in popup. Please allow popups for this site and click "Sign in with Google" again.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorized for Firebase Google Sign-In. Add the current hostname under Firebase Authentication → Settings → Authorized domains.';
    case 'auth/network-request-failed':
      return 'Network error while connecting to Google sign-in. Please check your internet connection and try again.';
    default:
      return 'Unable to complete Google sign-in right now. Please try again.';
  }
}

export function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [authReady, setAuthReady] = useState(false);
  const [signingIn, setSigningIn] = useState(false);
  const signingInRef = useRef(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [records, setRecords] = useState<ConsultationRecord[]>([]);
  const [loadingRecords, setLoadingRecords] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);

  const [statusFilter, setStatusFilter] = useState<'all' | ConsultationStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draftStatus, setDraftStatus] = useState<ConsultationStatus>('pending');
  const [draftNotes, setDraftNotes] = useState('');
  const [savingUpdate, setSavingUpdate] = useState(false);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
    return () => unsubscribe();
  }, []);

  const isAuthorizedAdmin =
    Boolean(user) &&
    Boolean(user?.emailVerified) &&
    isAuthorizedAdminEmail(user?.email);

  useEffect(() => {
    if (!authReady || !isAuthorizedAdmin) {
      setRecords([]);
      return;
    }

    setLoadingRecords(true);
    setDataError(null);

    const unsubscribe = subscribeConsultations(
      (items) => {
        setRecords(items);
        setLoadingRecords(false);
      },
      (err) => {
        setDataError(err.message);
        setLoadingRecords(false);
      }
    );

    return () => unsubscribe();
  }, [authReady, isAuthorizedAdmin]);

  const selectedRecord = useMemo(
    () => records.find((r) => r.id === selectedId) ?? null,
    [records, selectedId]
  );

  const handleSelectRecord = (record: ConsultationRecord) => {
    setSelectedId(record.id);
    setDraftStatus(record.status);
    setDraftNotes(record.adminNotes);
    setSaveFeedback(null);
  };

  const handleGoogleSignIn = async () => {
    if (signingInRef.current) return;
    signingInRef.current = true;
    setSigningIn(true);
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      const code = getFirebaseErrorCode(err);
      if (!EXPECTED_POPUP_CANCEL_CODES.has(code)) {
        console.warn('Admin sign-in warning:', code || err);
      }
      setAuthError(formatGoogleSignInError(err));
    } finally {
      signingInRef.current = false;
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setSelectedId(null);
      setAuthError(null);
    } catch {
      setAuthError('Could not sign out cleanly. Please refresh and try again.');
    }
  };

  const handleSaveChanges = async () => {
    if (!selectedRecord) return;
    setSavingUpdate(true);
    setSaveFeedback(null);
    try {
      await updateConsultationRecord(selectedRecord.id, draftStatus, draftNotes);
      setSaveFeedback('Saved');
    } catch (err) {
      console.error('Failed to update consultation:', err);
      setSaveFeedback('Update failed');
    } finally {
      setSavingUpdate(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteConsultationRecord(id);
      if (selectedId === id) {
        setSelectedId(null);
      }
    } catch (err) {
      console.error('Failed to delete consultation:', err);
      setDataError('Could not delete record. Please verify admin permissions.');
    }
  };

  const filteredRecords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return records.filter((r) => {
      const matchesStatus = statusFilter === 'all' || r.status === statusFilter;
      const matchesSearch =
        !q ||
        r.fullName.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.destination.toLowerCase().includes(q) ||
        r.degreeLevel.toLowerCase().includes(q);
      return matchesStatus && matchesSearch;
    });
  }, [records, statusFilter, searchQuery]);

  const counts = useMemo(() => {
    return {
      total: records.length,
      pending: records.filter((r) => r.status === 'pending').length,
      scheduled: records.filter((r) => r.status === 'scheduled').length,
      completed: records.filter((r) => r.status === 'completed').length,
    };
  }, [records]);

  const handleExportCsv = () => {
    const headers = [
      'Reference ID',
      'Full Name',
      'Email Address',
      'Phone / WhatsApp Number',
      'Preferred Study Destination',
      'Desired Degree Level',
      'Preferred Date & Time',
      'Status',
      'Message',
      'Admin Notes',
      'Submitted At',
    ];
    const escapeCell = (val: string) =>
      `"${val.replace(/"/g, '""').replace(/\r?\n/g, ' ')}"`;
    const rows = filteredRecords.map((r) =>
      [
        r.id,
        r.fullName,
        r.email,
        r.phone,
        r.destination,
        r.degreeLevel,
        r.preferredDateTime,
        r.status,
        r.message,
        r.adminNotes,
        r.createdAt ? r.createdAt.toISOString() : '',
      ]
        .map(escapeCell)
        .join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `consultations-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!authReady) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-sm text-slate-300">
        Verifying counselor session...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/15 text-cyan-300">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-white">
            Consultant Admin Portal
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Sign in with your authorized Global Education Expert Google account to review student consultation bookings, update scheduling statuses, and export inquiries.
          </p>

          {authError && (
            <p
              role="alert"
              className="mt-4 rounded-lg border border-red-400/30 bg-red-500/15 px-3 py-2 text-xs text-red-200"
            >
              {authError}
            </p>
          )}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={signingIn}
            className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {signingIn ? 'Signing in with Google...' : 'Sign in with Google'}
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthorizedAdmin) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <div className="rounded-xl border border-amber-400/30 bg-[#0B1120]/60 p-8 text-center backdrop-blur-xl">
          <h1 className="font-display text-xl font-bold text-white">
            Restricted Counselor Access
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            Signed in as <span className="font-medium text-white">{user.email}</span>. Consultation booking records are restricted to verified consultancy administrators.
          </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-transparent py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-cyan-300">
              Consultant Admin Portal
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl">
              Consultation Bookings &amp; Student Inquiries
            </h1>
            <p className="mt-1 text-xs text-slate-400">
              Signed in as {user.email}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={filteredRecords.length === 0}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/10 disabled:opacity-50 whitespace-nowrap shrink-0"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CSV</span>
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur-md hover:border-cyan-400/50 hover:bg-white/10 whitespace-nowrap shrink-0"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* KPI Summary Strip */}
        <div className="mt-6 grid grid-cols-2 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-400">Total Inquiries</p>
            <p className="mt-1 font-display text-2xl font-bold text-white tabular-nums">
              <AnimatedCounter value={counts.total} immediate />
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-400">Pending Review</p>
            <p className="mt-1 font-display text-2xl font-bold text-amber-300 tabular-nums">
              <AnimatedCounter value={counts.pending} immediate />
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-400">Scheduled</p>
            <p className="mt-1 font-display text-2xl font-bold text-cyan-300 tabular-nums">
              <AnimatedCounter value={counts.scheduled} immediate />
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-400">Completed</p>
            <p className="mt-1 font-display text-2xl font-bold text-emerald-300 tabular-nums">
              <AnimatedCounter value={counts.completed} immediate />
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="group"
            aria-label="Filter bookings by status"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/60 p-1 backdrop-blur-xl"
          >
            {(['all', ...CONSULTATION_STATUSES] as const).map((status) => {
              const active = statusFilter === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {status === 'all' ? 'All Bookings' : STATUS_LABELS[status]}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search name, email, destination..."
              aria-label="Search consultation bookings"
              className="min-h-[40px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 py-2 pr-3 pl-9 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        {dataError && (
          <div className="mt-6 rounded-lg border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200">
            {dataError}
          </div>
        )}

        {/* Split Table + Inspector */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl lg:col-span-7">
            {loadingRecords ? (
              <div className="p-10 text-center text-sm text-slate-400">
                Loading consultation records...
              </div>
            ) : filteredRecords.length === 0 ? (
              <div className="p-10 text-center text-sm text-slate-400">
                No consultation bookings match your current filter.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-white/10 bg-white/[0.06] text-xs font-semibold text-cyan-200">
                    <tr>
                      <th className="px-4 py-3">Student</th>
                      <th className="px-4 py-3">Destination</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {filteredRecords.map((rec) => {
                      const isSelected = rec.id === selectedId;
                      return (
                        <tr
                          key={rec.id}
                          onClick={() => handleSelectRecord(rec)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-white/10' : 'hover:bg-white/[0.05]'
                          }`}
                        >
                          <td className="px-4 py-3">
                            <p className="font-semibold text-white">
                              {rec.fullName}
                            </p>
                            <p className="text-xs text-slate-400">{rec.email}</p>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-200">
                            <p className="font-medium">{rec.destination}</p>
                            <p className="text-slate-400">{rec.degreeLevel}</p>
                          </td>
                          <td className="px-4 py-3 text-xs font-medium text-cyan-200">
                            {STATUS_LABELS[rec.status]}
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-xs text-slate-400 tabular-nums whitespace-nowrap">
                            {rec.createdAt
                              ? rec.createdAt.toLocaleDateString()
                              : 'Pending'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 lg:col-span-5">
            {selectedRecord ? (
              <div>
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-xs text-slate-400">
                      Ref: {selectedRecord.id}
                    </p>
                    <h2 className="mt-1 font-display text-lg font-bold text-white">
                      {selectedRecord.fullName}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(selectedRecord.id)}
                    aria-label="Delete consultation booking"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-slate-400 transition-colors hover:border-red-400/40 hover:bg-red-500/15 hover:text-red-300"
                    title="Delete booking"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-medium text-slate-400">
                      Email Address &amp; Phone / WhatsApp Number
                    </dt>
                    <dd className="mt-0.5 text-slate-200">
                      {selectedRecord.email} · {selectedRecord.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">
                      Preferred Study Destination &amp; Desired Degree Level
                    </dt>
                    <dd className="mt-0.5 text-slate-200">
                      {selectedRecord.destination} · {selectedRecord.degreeLevel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">
                      Preferred Date &amp; Time
                    </dt>
                    <dd className="mt-0.5 font-mono text-cyan-200 tabular-nums">
                      {selectedRecord.preferredDateTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-400">
                      Student Message
                    </dt>
                    <dd className="mt-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-3 text-xs leading-relaxed text-slate-200">
                      {selectedRecord.message || 'No additional notes provided.'}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 space-y-4 border-t border-white/10 pt-4">
                  <div>
                    <label
                      htmlFor="admin-status"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      Counseling Status
                    </label>
                    <select
                      id="admin-status"
                      value={draftStatus}
                      onChange={(e) =>
                        setDraftStatus(e.target.value as ConsultationStatus)
                      }
                      className="mt-1.5 min-h-[40px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      {CONSULTATION_STATUSES.map((st) => (
                        <option key={st} value={st} className="bg-[#0B1120] text-white">
                          {STATUS_LABELS[st]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="admin-notes"
                      className="block text-xs font-semibold text-slate-200"
                    >
                      Counselor Notes
                    </label>
                    <textarea
                      id="admin-notes"
                      rows={3}
                      maxLength={1000}
                      value={draftNotes}
                      onChange={(e) => setDraftNotes(e.target.value)}
                      placeholder="Record meeting link, shortlisted universities, or follow-up tasks..."
                      className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-cyan-300">
                      {saveFeedback ?? ''}
                    </span>
                    <button
                      type="button"
                      onClick={handleSaveChanges}
                      disabled={savingUpdate}
                      className="min-h-[40px] rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-2 text-xs font-semibold text-white transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.45)] disabled:opacity-60"
                    >
                      {savingUpdate ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-sm text-slate-400">
                Select a consultation record from the table to inspect student details, update its status, or add counselor notes.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
