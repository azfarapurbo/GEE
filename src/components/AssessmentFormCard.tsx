import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  CONSULTATION_EMAIL,
  submitConsultation,
} from '../lib/consultations';
import {
  combinePreferredDateAndTime,
  ConsultationFormValues,
  consultationSchema,
  COUNSELING_TIME_SLOTS,
  DEGREE_LEVELS,
  extractIsoDateFromPreferred,
  extractTimeFromPreferred,
  formatIsoDateToSlash,
  STUDY_DESTINATIONS,
} from '../lib/validation';

interface FieldErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  preferredDateTime?: string;
  destination?: string;
  degreeLevel?: string;
  message?: string;
}

const INITIAL_VALUES: ConsultationFormValues = {
  fullName: '',
  email: '',
  phone: '',
  preferredDateTime: '',
  destination: 'Malaysia',
  degreeLevel: 'Undergraduate',
  message: '',
};

export function AssessmentFormCard() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<ConsultationFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedRef, setConfirmedRef] = useState<{
    id: string;
    fullName: string;
    email: string;
    phone: string;
    preferredDateTime: string;
    destination: string;
    degreeLevel: string;
    message: string;
    emailSent: boolean;
  } | null>(null);

  const syncedIsoDate = extractIsoDateFromPreferred(form.preferredDateTime);
  const syncedTime = extractTimeFromPreferred(form.preferredDateTime);

  const handleNextStep = () => {
    const step1Check = consultationSchema
      .pick({
        fullName: true,
        email: true,
        phone: true,
        preferredDateTime: true,
      })
      .safeParse({
        fullName: form.fullName,
        email: form.email,
        phone: form.phone,
        preferredDateTime: form.preferredDateTime,
      });

    if (!step1Check.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of step1Check.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setForm((prev) => ({
      ...prev,
      preferredDateTime: step1Check.data.preferredDateTime,
    }));
    setErrors({});
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const parsed = consultationSchema.safeParse(form);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      if (
        nextErrors.fullName ||
        nextErrors.email ||
        nextErrors.phone ||
        nextErrors.preferredDateTime
      ) {
        setStep(1);
      }
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const result = await submitConsultation(parsed.data);
      setConfirmedRef({
        id: result.id,
        fullName: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        preferredDateTime: parsed.data.preferredDateTime,
        destination: parsed.data.destination,
        degreeLevel: parsed.data.degreeLevel,
        message: parsed.data.message,
        emailSent: result.emailSent,
      });
      setForm(INITIAL_VALUES);
      setStep(1);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : 'Unable to submit your assessment request right now. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (confirmedRef) {
    return (
      <div className="rounded-2xl border border-cyan-400/35 bg-[#0B1120]/60 p-6 backdrop-blur-xl shadow-[0_0_28px_rgba(6,182,212,0.14)] sm:p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/15 text-cyan-300">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-white">
          Free Assessment Request Confirmed
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Thank you, <span className="font-semibold text-white">{confirmedRef.fullName}</span>. Your profile inquiry for{' '}
          <span className="font-semibold text-cyan-300">{confirmedRef.destination}</span> ({confirmedRef.degreeLevel}) on{' '}
          <span className="font-semibold text-white">{confirmedRef.preferredDateTime}</span> has been saved and routed to{' '}
          <a
            href={`mailto:${CONSULTATION_EMAIL}`}
            className="font-medium text-cyan-300 underline underline-offset-4 hover:text-white"
          >
            {CONSULTATION_EMAIL}
          </a>
          . A senior GEE counselor will reach out within 24–48 hours.
        </p>

        <div className="mt-5 rounded-xl border border-white/10 bg-[#0B1120]/70 px-4 py-3">
          <p className="text-xs font-medium text-slate-400">Booking Reference ID</p>
          <p className="mt-0.5 font-mono text-sm font-semibold text-white tabular-nums">
            {confirmedRef.id}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(
              `Assessment Request (${confirmedRef.id}): ${confirmedRef.fullName} - ${confirmedRef.destination}`
            )}&body=${encodeURIComponent(
              [
                `Reference ID: ${confirmedRef.id}`,
                `Full Name: ${confirmedRef.fullName}`,
                `Email Address: ${confirmedRef.email}`,
                `Phone / WhatsApp Number: ${confirmedRef.phone}`,
                `Preferred Date & Time: ${confirmedRef.preferredDateTime}`,
                `Preferred Study Destination: ${confirmedRef.destination}`,
                `Desired Degree Level: ${confirmedRef.degreeLevel}`,
                `Academic Background: ${confirmedRef.message || 'N/A'}`,
              ].join('\n')
            )}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_22px_rgba(6,182,212,0.45)] whitespace-nowrap shrink-0"
          >
            Send Email Copy to Counselor
          </a>
          <button
            type="button"
            onClick={() => setConfirmedRef(null)}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/[0.1] whitespace-nowrap shrink-0"
          >
            Submit Another Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Free Profile &amp; Visa Assessment
          </h3>
          <p className="mt-1 text-xs text-slate-300">
            Step {step} of 2 · {step === 1 ? 'Contact & Preferred Schedule' : 'Study Destination & Degree Level'}
          </p>
        </div>
        <div
          role="group"
          aria-label="Assessment form steps"
          className="flex items-center gap-1 rounded-lg bg-[#0B1120]/70 p-1"
        >
          <button
            type="button"
            onClick={() => setStep(1)}
            className={`min-h-[32px] rounded-md px-3 py-1 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              step === 1
                ? 'bg-[#4F46E5] text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            01. Details
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className={`min-h-[32px] rounded-md px-3 py-1 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
              step === 2
                ? 'bg-[#4F46E5] text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            02. Pathway
          </button>
        </div>
      </div>

      {submitError && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200"
        >
          {submitError}
        </div>
      )}

      {step === 1 ? (
        <div className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="home-fullName"
              className="block text-sm font-medium text-slate-200"
            >
              Full Name *
            </label>
            <input
              id="home-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              value={form.fullName}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, fullName: e.target.value }))
              }
              placeholder="e.g., Nadia Rahman"
              className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            {errors.fullName && (
              <p className="mt-1.5 text-xs font-medium text-amber-300">
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="home-email"
                className="block text-sm font-medium text-slate-200"
              >
                Email Address *
              </label>
              <input
                id="home-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={120}
                value={form.email}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="you@example.com"
                className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs font-medium text-amber-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="home-phone"
                className="block text-sm font-medium text-slate-200"
              >
                Phone / WhatsApp Number *
              </label>
              <input
                id="home-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={30}
                value={form.phone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="+880 1717149453"
                className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
              />
              {errors.phone && (
                <p className="mt-1.5 text-xs font-medium text-amber-300">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <label
                htmlFor="home-preferredDateTime"
                className="block text-sm font-medium text-slate-200"
              >
                Preferred Date &amp; Time *
              </label>
              <span className="text-[11px] text-slate-400">
                Format: Date, Time (e.g., 01/01/2016, 12:00 PM)
              </span>
            </div>
            <input
              id="home-preferredDateTime"
              name="preferredDateTime"
              type="text"
              required
              maxLength={80}
              value={form.preferredDateTime}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  preferredDateTime: e.target.value,
                }))
              }
              placeholder="01/01/2016, 12:00 PM"
              className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none tabular-nums"
            />
            <div className="mt-2 grid grid-cols-2 gap-2">
              <input
                type="date"
                aria-label="Pick preferred consultation date"
                value={syncedIsoDate}
                onChange={(e) => {
                  const slashDate = formatIsoDateToSlash(e.target.value);
                  if (!slashDate) return;
                  setForm((prev) => ({
                    ...prev,
                    preferredDateTime: combinePreferredDateAndTime(
                      slashDate,
                      syncedTime || '12:00 PM'
                    ),
                  }));
                }}
                className="min-h-[38px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-3 py-1.5 text-xs text-slate-200 [color-scheme:dark] focus:border-cyan-400 focus:outline-none"
              />
              <select
                aria-label="Pick preferred consultation time"
                value={syncedTime}
                onChange={(e) => {
                  const chosenTime = e.target.value;
                  if (!chosenTime) return;
                  const currentSlashDate = formatIsoDateToSlash(syncedIsoDate);
                  setForm((prev) => ({
                    ...prev,
                    preferredDateTime: combinePreferredDateAndTime(
                      currentSlashDate,
                      chosenTime
                    ),
                  }));
                }}
                className="min-h-[38px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-3 py-1.5 text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
              >
                <option value="" className="bg-[#0B1120] text-slate-400">
                  Select time slot
                </option>
                {COUNSELING_TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot} className="bg-[#0B1120] text-white">
                    {slot}
                  </option>
                ))}
              </select>
            </div>
            {errors.preferredDateTime && (
              <p className="mt-1.5 text-xs font-medium text-amber-300">
                {errors.preferredDateTime}
              </p>
            )}
          </div>

          <div className="flex flex-col items-start justify-between gap-3 pt-2 sm:flex-row sm:items-center">
            <p className="text-xs text-slate-400">
              Routed directly to{' '}
              <a
                href={`mailto:${CONSULTATION_EMAIL}`}
                className="text-cyan-300 underline-offset-4 hover:underline"
              >
                {CONSULTATION_EMAIL}
              </a>
            </p>
            <button
              type="button"
              onClick={handleNextStep}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] whitespace-nowrap shrink-0"
            >
              <span>Continue to Study Goals</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="home-destination"
                className="block text-sm font-medium text-slate-200"
              >
                Preferred Study Destination *
              </label>
              <select
                id="home-destination"
                name="destination"
                value={form.destination}
                onChange={(e) => {
                  const nextDest = e.target.value as ConsultationFormValues['destination'];
                  const allowsFoundationDiploma =
                    nextDest === 'Malaysia' ||
                    nextDest === 'Undecided / Need Guidance';
                  setForm((prev) => ({
                    ...prev,
                    destination: nextDest,
                    degreeLevel:
                      !allowsFoundationDiploma &&
                      (prev.degreeLevel === 'Diploma' ||
                        prev.degreeLevel === 'Foundation')
                        ? 'Undergraduate'
                        : prev.degreeLevel,
                  }));
                }}
                className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-3.5 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              >
                {STUDY_DESTINATIONS.map((dest) => (
                  <option key={dest} value={dest} className="bg-[#0B1120] text-white">
                    {dest}
                  </option>
                ))}
              </select>
              {errors.destination && (
                <p className="mt-1.5 text-xs font-medium text-amber-300">
                  {errors.destination}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="home-degreeLevel"
                className="block text-sm font-medium text-slate-200"
              >
                Desired Degree Level *
              </label>
              <select
                id="home-degreeLevel"
                name="degreeLevel"
                value={form.degreeLevel}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    degreeLevel: e.target.value as ConsultationFormValues['degreeLevel'],
                  }))
                }
                className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-3.5 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              >
                {DEGREE_LEVELS.filter(
                  (level) =>
                    form.destination === 'Malaysia' ||
                    form.destination === 'Undecided / Need Guidance' ||
                    level === 'Undergraduate' ||
                    level === 'Masters'
                ).map((level) => (
                  <option key={level} value={level} className="bg-[#0B1120] text-white">
                    {level}
                  </option>
                ))}
              </select>
              {errors.degreeLevel && (
                <p className="mt-1.5 text-xs font-medium text-amber-300">
                  {errors.degreeLevel}
                </p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="home-message"
              className="block text-sm font-medium text-slate-200"
            >
              Academic Background &amp; Target Course (Optional)
            </label>
            <textarea
              id="home-message"
              name="message"
              rows={3}
              maxLength={1500}
              value={form.message}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Share your SSC/HSC/Bachelor GPA, IELTS score, preferred field of study, or scholarship interest..."
              className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1.5 text-xs font-medium text-amber-300">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.1] hover:text-white whitespace-nowrap shrink-0"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back</span>
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0"
            >
              {submitting ? 'Submitting Assessment...' : 'Book Free Assessment'}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
