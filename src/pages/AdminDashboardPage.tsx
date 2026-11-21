import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth';
import {
  Download,
  Lock,
  LogOut,
  Search,
  Trash2,
} from 'lucide-react';
import {
  ConsultationRecord,
  deleteConsultationRecord,
  subscribeConsultations,
  updateConsultationRecord,
} from '../lib/consultations';
import {
  auth,
  AUTHORIZED_ADMIN_EMAILS,
  googleAuthProvider,
} from '../lib/firebase';
import { CONSULTATION_STATUSES, ConsultationStatus } from '../lib/validation';

const STATUS_LABELS: Record<ConsultationStatus, string> = {
  pending: 'Pending Review',
  scheduled: 'Scheduled',
  completed: 'Completed',
  archived: 'Archived',
};

export function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [authReady, setAuthReady] = useState(false);
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
    AUTHORIZED_ADMIN_EMAILS.includes((user?.email ?? '').toLowerCase());

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
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error('Admin sign-in error:', err);
      setAuthError('Sign-in was cancelled or blocked. Please allow popups and try again.');
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setSelectedId(null);
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
      'Email',
      'Phone',
      'Destination',
      'Degree Level',
      'Preferred Date/Time',
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
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-sm text-slate-600">
        Verifying counselor session...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-[#0F213E]">
            <Lock className="h-5 w-5" aria-hidden="true" />
          </div>
          <h1 className="mt-4 font-display text-2xl font-bold text-[#0F213E]">
            Consultant Admin Portal
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Sign in with your authorized Global Education Expert Google account to review student consultation bookings, update scheduling statuses, and export inquiries.
          </p>

          {authError && (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
              {authError}
            </p>
          )}

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#0F213E] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#19335D]"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  if (!isAuthorizedAdmin) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <div className="rounded-xl border border-amber-200 bg-white p-8 text-center">
          <h1 className="font-display text-xl font-bold text-[#0F213E]">
            Restricted Counselor Access
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Signed in as <span className="font-medium text-slate-900">{user.email}</span>. Consultation booking records are restricted to verified consultancy administrators.
          </p>
          <button
            type="button"
            onClick={handleSignOut}
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Bar */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#92400E]">
              Consultant Admin Portal
            </p>
            <h1 className="mt-1 font-display text-2xl font-bold text-[#0F213E] sm:text-3xl">
              Consultation Bookings &amp; Student Inquiries
            </h1>
            <p className="mt-1 text-xs text-slate-500">
              Signed in as {user.email}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleExportCsv}
              disabled={filteredRecords.length === 0}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-[#0F213E] hover:bg-slate-50 disabled:opacity-50 whitespace-nowrap shrink-0"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download CSV</span>
            </button>
            <button
              type="button"
              onClick={handleSignOut}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0"
            >
              <LogOut className="h-4 w-4" aria-hidden="true" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* KPI Summary Strip */}
        <div className="mt-6 grid grid-cols-2 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Total Inquiries</p>
            <p className="mt-1 font-display text-2xl font-bold text-[#0F213E] tabular-nums">
              {counts.total}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Pending Review</p>
            <p className="mt-1 font-display text-2xl font-bold text-[#B45309] tabular-nums">
              {counts.pending}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Scheduled</p>
            <p className="mt-1 font-display text-2xl font-bold text-[#0F213E] tabular-nums">
              {counts.scheduled}
            </p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-medium text-slate-500">Completed</p>
            <p className="mt-1 font-display text-2xl font-bold text-emerald-700 tabular-nums">
              {counts.completed}
            </p>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div
            role="group"
            aria-label="Filter bookings by status"
            className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-200/70 p-1"
          >
            {(['all', ...CONSULTATION_STATUSES] as const).map((status) => {
              const active = statusFilter === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setStatusFilter(status)}
                  className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-[#0F213E] shadow-sm'
                      : 'text-slate-600 hover:text-[#0F213E]'
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
              className="min-h-[40px] w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none"
            />
          </div>
        </div>

        {dataError && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {dataError}
          </div>
        )}

        {/* Split Table + Inspector */}
        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white lg:col-span-7">
            {loadingRecords ? (
              <div className="p-10 text-center text-sm text-slate-500">
                Loading consultation records...
              </div>
            ) : filteredRecords.length === 0 ? (
              <div className="p-10 text-center text-sm text-slate-500">
                No consultation bookings match your current filter.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                    <tr>
                      <th className="px-4 py-3">Student</th>
                      <th className="px-4 py-3">Destination</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Submitted</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredRecords.map((rec) => {
                      const isSelected = rec.id === selectedId;
                      return (
                        <tr
                          key={rec.id}
                          onClick={() => handleSelectRecord(rec)}
                          className={`cursor-pointer transition-colors ${
                            isSelected ? 'bg-slate-100' : 'hover:bg-slate-50'
                          }`}
                        >
                          <td className="px-4 py-3">
                            <p className="font-semibold text-[#0F213E]">
                              {rec.fullName}
                            </p>
                            <p className="text-xs text-slate-500">{rec.email}</p>
                          </td>
                          <td className="px-4 py-3 text-xs text-slate-700">
                            <p className="font-medium">{rec.destination}</p>
                            <p className="text-slate-500">{rec.degreeLevel}</p>
                          </td>
                          <td className="px-4 py-3 text-xs font-medium text-slate-700">
                            {STATUS_LABELS[rec.status]}
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-xs text-slate-500 tabular-nums whitespace-nowrap">
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

          <div className="rounded-xl border border-slate-200 bg-white p-6 lg:col-span-5">
            {selectedRecord ? (
              <div>
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
                  <div>
                    <p className="font-mono text-xs text-slate-400">
                      Ref: {selectedRecord.id}
                    </p>
                    <h2 className="mt-1 font-display text-lg font-bold text-[#0F213E]">
                      {selectedRecord.fullName}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDelete(selectedRecord.id)}
                    aria-label="Delete consultation booking"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                    title="Delete booking"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Email &amp; Phone</dt>
                    <dd className="mt-0.5 text-slate-800">
                      {selectedRecord.email} · {selectedRecord.phone}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Target Pathway
                    </dt>
                    <dd className="mt-0.5 text-slate-800">
                      {selectedRecord.destination} · {selectedRecord.degreeLevel}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Requested Date &amp; Time
                    </dt>
                    <dd className="mt-0.5 text-slate-800">
                      {selectedRecord.preferredDateTime}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-medium text-slate-500">
                      Student Message
                    </dt>
                    <dd className="mt-1 rounded-lg bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
                      {selectedRecord.message || 'No additional notes provided.'}
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 space-y-4 border-t border-slate-100 pt-4">
                  <div>
                    <label
                      htmlFor="admin-status"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Counseling Status
                    </label>
                    <select
                      id="admin-status"
                      value={draftStatus}
                      onChange={(e) =>
                        setDraftStatus(e.target.value as ConsultationStatus)
                      }
                      className="mt-1.5 min-h-[40px] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#0F213E] focus:outline-none"
                    >
                      {CONSULTATION_STATUSES.map((st) => (
                        <option key={st} value={st}>
                          {STATUS_LABELS[st]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="admin-notes"
                      className="block text-xs font-semibold text-slate-700"
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
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-[#0F213E] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-medium text-slate-600">
                      {saveFeedback ?? ''}
                    </span>
                    <button
                      type="button"
                      onClick={handleSaveChanges}
                      disabled={savingUpdate}
                      className="min-h-[40px] rounded-lg bg-[#0F213E] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#19335D] disabled:opacity-60"
                    >
                      {savingUpdate ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center text-sm text-slate-500">
                Select a consultation record from the table to inspect student details, update its status, or add counselor notes.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
