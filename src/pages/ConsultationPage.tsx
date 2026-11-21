import { FormEvent, useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import {
  CONSULTATION_EMAIL,
  submitConsultation,
} from '../lib/consultations';
import {
  ConsultationFormValues,
  consultationSchema,
  DEGREE_LEVELS,
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
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-[#92400E]">
            Consultation &amp; Contact
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-4xl">
            Book your free 1-on-1 study abroad consultation.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Share your preferred destination, degree level, and available date. A regional education counselor will review your inquiry and reply within 24–48 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Contact Details Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h2 className="font-display text-lg font-bold text-[#0F213E]">
                Direct Advisory Channels
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Consultations are conducted via Google Meet, Zoom, WhatsApp Video, or in person by appointment.
              </p>

              <dl className="mt-6 space-y-5 text-sm">
                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Consultation &amp; Admissions Email
                    </dt>
                    <dd className="mt-1 text-slate-600">
                      <a
                        href={`mailto:${CONSULTATION_EMAIL}`}
                        className="font-medium text-[#0F213E] underline-offset-4 hover:text-[#B45309] hover:underline"
                      >
                        {CONSULTATION_EMAIL}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-slate-900">
                      Phone &amp; WhatsApp Lines
                    </dt>
                    <dd className="mt-1 space-y-1 font-mono text-xs text-slate-700">
                      <p>Chittagong: +880 1717 149453</p>
                      <p>Dhaka: +880 1717 149453</p>
                      <p>Khulna: +880 1686 395927</p>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                    aria-hidden="true"
                  />
                  <div className="space-y-3">
                    <div>
                      <dt className="font-semibold text-slate-900">Chittagong Office</dt>
                      <dd className="mt-0.5 text-slate-600">
                        Epic Emdad Heights, Chattoshawri Circle, Mehedibag (EBL Building), Flat B-8 (Left Side), Chittagong
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-slate-900">Khulna Office</dt>
                      <dd className="mt-0.5 text-slate-600">
                        6th Floor, United Tower, KDA Avenue (Shib Bari Mor), Khulna 9100, Bangladesh
                      </dd>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-slate-900">Counseling Hours</dt>
                    <dd className="mt-1 space-y-1.5 text-slate-600">
                      <p>Bangladesh Time: Saturday – Thursday: 10:00 AM – 6:30 PM</p>
                      <p>Our online Counseling Hours Sunday - Saturday: 10:00 AM – 6:30 PM</p>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-semibold text-slate-900">Social Channels</dt>
                    <dd className="mt-1 flex flex-wrap gap-4 text-xs font-semibold text-[#0F213E]">
                      <a
                        href="https://www.facebook.com/GlobalEduExp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:text-[#B45309] hover:underline"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.youtube.com/@GlobalEduExp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:text-[#B45309] hover:underline"
                      >
                        YouTube
                      </a>
                      <a
                        href="https://www.instagram.com/globaleduexp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:text-[#B45309] hover:underline"
                      >
                        Instagram
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>

          {/* Interactive Consultation Booking Form */}
          <div className="lg:col-span-8">
            {confirmedRef ? (
              <div className="rounded-xl border border-emerald-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                  <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-[#0F213E]">
                  Consultation Request Confirmed
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Thank you, <span className="font-semibold text-slate-900">{confirmedRef.fullName}</span>. Your consultation inquiry for{' '}
                  <span className="font-semibold text-slate-900">{confirmedRef.destination}</span> ({confirmedRef.degreeLevel}) has been securely recorded and routed to{' '}
                  <a
                    href={`mailto:${CONSULTATION_EMAIL}`}
                    className="font-medium text-[#0F213E] underline underline-offset-4"
                  >
                    {CONSULTATION_EMAIL}
                  </a>
                  . A senior advisor will contact you within 24–48 hours.
                </p>

                <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-xs font-medium text-slate-500">
                    Booking Reference ID
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-semibold text-[#0F213E] tabular-nums">
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
                        `Email: ${confirmedRef.email}`,
                        `Phone / WhatsApp: ${confirmedRef.phone}`,
                        `Preferred Destination: ${confirmedRef.destination}`,
                        `Desired Degree Level: ${confirmedRef.degreeLevel}`,
                        `Preferred Date & Time: ${confirmedRef.preferredDateTime}`,
                        `Message: ${confirmedRef.message || 'N/A'}`,
                      ].join('\n')
                    )}`}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F213E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#19335D]"
                  >
                    Send Email Copy to Counselor
                  </a>
                  <button
                    type="button"
                    onClick={() => setConfirmedRef(null)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F213E] transition-colors hover:bg-slate-50"
                  >
                    Submit Another Consultation Request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <h2 className="font-display text-xl font-bold text-[#0F213E]">
                  Consultation Request Form
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Fields marked with * are required so an advisor can prepare relevant university options before your call.
                </p>

                {submitError && (
                  <div
                    role="alert"
                    className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                  >
                    {submitError}
                  </div>
                )}

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength={100}
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="e.g., Nadia Rahman"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={120}
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="you@example.com"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={30}
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="+60 12 345 6789"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDateTime"
                      className="block text-sm font-medium text-slate-800"
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
                      placeholder="e.g., Next Tuesday, 14:00 GMT+8"
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    />
                    {errors.preferredDateTime && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.preferredDateTime}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="destination"
                      className="block text-sm font-medium text-slate-800"
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
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    >
                      {STUDY_DESTINATIONS.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                    {errors.destination && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.destination}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="degreeLevel"
                      className="block text-sm font-medium text-slate-800"
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
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-sm text-slate-900 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                    >
                      {DEGREE_LEVELS.filter(
                        (level) =>
                          form.destination === 'Malaysia' ||
                          form.destination === 'Undecided / Need Guidance' ||
                          level === 'Undergraduate' ||
                          level === 'Masters'
                      ).map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-slate-500">
                      Diploma and Foundation are available in Malaysia; other countries offer Undergraduate and Masters.
                    </p>
                    {errors.degreeLevel && (
                      <p className="mt-1.5 text-xs font-medium text-red-700">
                        {errors.degreeLevel}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-800"
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
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none focus:ring-2 focus:ring-[#0F213E]/15"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-red-700">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-5 sm:flex-row sm:items-center">
                  <p className="text-xs text-slate-500">
                    Submissions are securely saved and routed to{' '}
                    <a
                      href={`mailto:${CONSULTATION_EMAIL}`}
                      className="font-medium text-[#0F213E] underline-offset-4 hover:underline"
                    >
                      {CONSULTATION_EMAIL}
                    </a>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F213E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#19335D] disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0"
                  >
                    {submitting ? 'Submitting Request...' : 'Confirm Consultation Booking'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
