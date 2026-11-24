import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { ScrollReveal } from '../components/ScrollReveal';
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
  destination?: string;
  degreeLevel?: string;
  preferredDateTime?: string;
  message?: string;
}

const INITIAL_FORM: ConsultationFormValues = {
  fullName: '',
  email: '',
  phone: '',
  destination: STUDY_DESTINATIONS[0],
  degreeLevel: DEGREE_LEVELS[2],
  preferredDateTime: '',
  message: '',
};

export function ConsultationPage() {
  const [form, setForm] = useState<ConsultationFormValues>(INITIAL_FORM);
  const syncedIsoDate = extractIsoDateFromPreferred(form.preferredDateTime);
  const syncedTime = extractTimeFromPreferred(form.preferredDateTime);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedRef, setConfirmedRef] = useState<{
    id: string;
    fullName: string;
    email: string;
    phone: string;
    destination: string;
    degreeLevel: string;
    preferredDateTime: string;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const parsed = consultationSchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      setErrors({
        fullName: flat.fullName?.[0],
        email: flat.email?.[0],
        phone: flat.phone?.[0],
        destination: flat.destination?.[0],
        degreeLevel: flat.degreeLevel?.[0],
        preferredDateTime: flat.preferredDateTime?.[0],
        message: flat.message?.[0],
      });
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
        destination: parsed.data.destination,
        degreeLevel: parsed.data.degreeLevel,
        preferredDateTime: parsed.data.preferredDateTime,
        message: parsed.data.message,
      });
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('Consultation submission failed:', err);
      setSubmitError(
        'We could not save your booking right now. Please verify your details and try again, or reach us directly on WhatsApp.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-transparent text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-cyan-300">
            Consultation &amp; Contact
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Book your free 1-on-1 study abroad consultation.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Share your preferred destination, degree level, and available date. A regional education counselor will review your inquiry and reply within 24–48 hours.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value="48h" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Maximum Response Turnaround
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-cyan-300 tabular-nums">
                <AnimatedCounter value="98%" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Student Visa Approval Rate
              </p>
            </div>
            <div className="col-span-2 rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 sm:col-span-1">
              <p className="font-display text-2xl font-bold text-amber-300 tabular-nums">
                <AnimatedCounter value={576} immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Indexed Partner Universities
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-transparent px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details Sidebar */}
          <ScrollReveal className="lg:col-span-4">
            <aside className="space-y-6">
              <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                <h2 className="font-display text-lg font-bold text-white">
                  Direct Advisory Channels
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  Consultations are conducted via Google Meet, Zoom, WhatsApp Video or in person by appointment.
                </p>

                <dl className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-white">
                        Consultation &amp; Admissions Email
                      </dt>
                      <dd className="mt-1 text-slate-300">
                        <a
                          href={`mailto:${CONSULTATION_EMAIL}`}
                          className="font-medium text-cyan-300 underline-offset-4 hover:text-white hover:underline"
                        >
                          {CONSULTATION_EMAIL}
                        </a>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-white">
                        Phone &amp; WhatsApp Lines
                      </dt>
                      <dd className="mt-1 space-y-1 font-mono text-xs text-slate-200">
                        <p>Chittagong: +880 1717149453</p>
                        <p>Dhaka: +880 1717149453</p>
                        <p>Khulna: +880 1686395927</p>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <div className="space-y-3">
                      <div>
                        <dt className="font-semibold text-white">Chittagong Office</dt>
                        <dd className="mt-0.5 text-slate-300">
                          House 11, Road 1, Nasirabad Housing Society, Chattogram
                        </dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-white">Khulna Office</dt>
                        <dd className="mt-0.5 text-slate-300">
                          6th Floor, United Tower, KDA Avenue (Shib Bari Mor), Khulna 9100, Bangladesh
                        </dd>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-white">Counseling Hours</dt>
                      <dd className="mt-1 space-y-3 text-slate-300">
                        <div>
                          <p className="font-medium text-slate-100">Office Counseling Hours:</p>
                          <p>Saturday – Thursday: 10:00 AM – 6:30 PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-slate-100">Our online Counseling Hours:</p>
                          <p>Sunday - Saturday: 10:00 AM – 6:30 PM</p>
                        </div>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe
                      className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-semibold text-white">Social Channels</dt>
                      <dd className="mt-1 flex flex-wrap gap-4 text-xs font-semibold text-cyan-300">
                        <a
                          href="https://www.facebook.com/GlobalEduExp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-white hover:underline"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.youtube.com/@GlobalEduExp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-white hover:underline"
                        >
                          YouTube
                        </a>
                        <a
                          href="https://www.instagram.com/globaleduexp/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-offset-4 hover:text-white hover:underline"
                        >
                          Instagram
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </aside>
          </ScrollReveal>

          {/* Interactive Consultation Booking Form */}
          <ScrollReveal staggerIndex={1} className="lg:col-span-8">
            {confirmedRef ? (
              <div className="rounded-xl border border-cyan-400/35 bg-[#0B1120]/60 p-8 backdrop-blur-xl shadow-[0_0_28px_rgba(6,182,212,0.14)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/15 text-cyan-300">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-white">
                  Consultation Request Confirmed
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Thank you, <span className="font-semibold text-white">{confirmedRef.fullName}</span>. Your consultation inquiry for{' '}
                  <span className="font-semibold text-cyan-300">{confirmedRef.destination}</span> ({confirmedRef.degreeLevel}) on{' '}
                  <span className="font-semibold text-white">{confirmedRef.preferredDateTime}</span> has been securely recorded and routed to{' '}
                  <a
                    href={`mailto:${CONSULTATION_EMAIL}`}
                    className="font-medium text-cyan-300 underline underline-offset-4 hover:text-white"
                  >
                    {CONSULTATION_EMAIL}
                  </a>
                  . A senior advisor will contact you within 24–48 hours.
                </p>

                <div className="mt-6 rounded-lg border border-white/10 bg-[#0B1120]/70 px-4 py-3">
                  <p className="text-xs font-medium text-slate-400">
                    Booking Reference ID
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-semibold text-white tabular-nums">
                    {confirmedRef.id}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${CONSULTATION_EMAIL}?subject=${encodeURIComponent(
                      `Consultation Booking (${confirmedRef.id}): ${confirmedRef.fullName} - ${confirmedRef.destination}`
                    )}&body=${encodeURIComponent(
                      [
                        `Reference ID: ${confirmedRef.id}`,
                        `Full Name: ${confirmedRef.fullName}`,
                        `Email Address: ${confirmedRef.email}`,
                        `Phone / WhatsApp Number: ${confirmedRef.phone}`,
                        `Preferred Date & Time: ${confirmedRef.preferredDateTime}`,
                        `Preferred Study Destination: ${confirmedRef.destination}`,
                        `Desired Degree Level: ${confirmedRef.degreeLevel}`,
                        `Message: ${confirmedRef.message || 'N/A'}`,
                      ].join('\n')
                    )}`}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-2.5 text-sm font-semibold text-white transition-shadow hover:shadow-[0_0_22px_rgba(6,182,212,0.5)]"
                  >
                    Send Email Copy to Counselor
                  </a>
                  <button
                    type="button"
                    onClick={() => setConfirmedRef(null)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Submit Another Consultation Request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8"
              >
                <h2 className="font-display text-xl font-bold text-white">
                  Consultation Request Form
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Fields marked with * are required so an advisor can prepare relevant university options before your call.
                </p>

                {submitError && (
                  <div
                    role="alert"
                    className="mt-5 rounded-lg border border-red-400/30 bg-red-500/15 px-4 py-3 text-sm text-red-200"
                  >
                    {submitError}
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
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

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
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
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
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

                  <div>
                    <label
                      htmlFor="preferredDateTime"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Preferred Date &amp; Time *
                    </label>
                    <input
                      id="preferredDateTime"
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
                        className="min-h-[38px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-2.5 py-1.5 text-xs text-slate-200 [color-scheme:dark] focus:border-cyan-400 focus:outline-none"
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
                        className="min-h-[38px] w-full rounded-lg border border-white/15 bg-[#0B1120] px-2.5 py-1.5 text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
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
                    <p className="mt-1 text-xs text-slate-400">
                      Format: Date, Time (Example: 01/01/2016, 12:00 PM)
                    </p>
                    {errors.preferredDateTime && (
                      <p className="mt-1.5 text-xs font-medium text-amber-300">
                        {errors.preferredDateTime}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Preferred Study Destination *
                    </label>
                    <select
                      id="destination"
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
                      htmlFor="degreeLevel"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Desired Degree Level *
                    </label>
                    <select
                      id="degreeLevel"
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
                    <p className="mt-1 text-xs text-slate-400">
                      Diploma and Foundation are available in Malaysia; other countries offer Undergraduate and Masters.
                    </p>
                    {errors.degreeLevel && (
                      <p className="mt-1.5 text-xs font-medium text-amber-300">
                        {errors.degreeLevel}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Academic Background &amp; Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={1500}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Share your latest GPA/grades, target intake month, preferred field of study, or scholarship questions..."
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#0B1120]/80 px-3.5 py-2.5 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-amber-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                  <p className="text-xs text-slate-400">
                    Submissions are securely saved and routed to{' '}
                    <a
                      href={`mailto:${CONSULTATION_EMAIL}`}
                      className="font-medium text-cyan-300 underline-offset-4 hover:underline"
                    >
                      {CONSULTATION_EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.5)] disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0"
                  >
                    {submitting ? 'Submitting Request...' : 'Confirm Consultation Booking'}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
