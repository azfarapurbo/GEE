import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import { ScrollReveal } from '../components/ScrollReveal';
import { CORE_SERVICES, PHOTO_FALLBACK_SRC } from '../data/consultancyData';
import {
  GLOBAL_SCHOLARSHIPS,
  ScholarshipStudyLevel,
} from '../data/scholarshipsData';

type ScholarshipRegionFilter =
  | 'all'
  | 'malaysia'
  | 'usa'
  | 'canada'
  | 'uk'
  | 'australia'
  | 'europe'
  | 'global';

type LevelFilter = 'All' | ScholarshipStudyLevel;

const SCHOLARSHIP_FILTERS: { id: ScholarshipRegionFilter; label: string }[] = [
  { id: 'all', label: `All Countries (${GLOBAL_SCHOLARSHIPS.length})` },
  { id: 'malaysia', label: 'Malaysia' },
  { id: 'usa', label: 'USA' },
  { id: 'canada', label: 'Canada' },
  { id: 'uk', label: 'UK' },
  { id: 'australia', label: 'Australia' },
  { id: 'europe', label: 'Europe' },
  { id: 'global', label: 'New Zealand & Global' },
];

const SCHOLARSHIP_LEVEL_FILTERS: LevelFilter[] = [
  'All',
  'Foundation',
  'Diploma',
  'Undergraduate',
  'Masters',
];

const SCHOLARSHIP_PAGE_SIZE = 15;

function matchesScholarshipRegion(
  countryRaw: string,
  region: ScholarshipRegionFilter
): boolean {
  if (region === 'all') return true;
  const c = countryRaw.trim().toLowerCase();
  switch (region) {
    case 'malaysia':
      return c.includes('malaysia');
    case 'usa':
      return c.includes('usa');
    case 'canada':
      return c.includes('canada');
    case 'uk':
      return c.includes('uk') || c.includes('scotland') || c.includes('wales');
    case 'australia':
      return c.includes('australia');
    case 'europe':
      return (
        c.includes('europe') ||
        c.includes('spain') ||
        c.includes('sweden') ||
        c.includes('ireland') ||
        c.includes('germany') ||
        c.includes('netherlands')
      );
    case 'global':
      return (
        c === '' ||
        c === 'all' ||
        c.includes('new zealand') ||
        c.includes('multiple') ||
        c.includes('mpower')
      );
  }
}

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

const ADMISSIONS_MILESTONES = [
  {
    step: 'Stage 01',
    heading: 'Academic & Budget Diagnostic',
    detail:
      'Review transcripts, English proficiency status, and preferred country budgets within 48 hours of inquiry.',
  },
  {
    step: 'Stage 02',
    heading: 'Offer & Scholarship Submission',
    detail:
      'Submit polished applications to shortlisted partner universities alongside merit bursary forms.',
  },
  {
    step: 'Stage 03',
    heading: 'Embassy & Visa Compliance Audit',
    detail:
      'Verify bank statements, blocked accounts, EMGS/CAS files, and conduct 1-on-1 mock credibility interviews.',
  },
  {
    step: 'Stage 04',
    heading: 'Housing & Pre-Departure Briefing',
    detail:
      'Confirm student accommodation, flight readiness, local banking, and first-week campus onboarding.',
  },
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [scholarshipRegion, setScholarshipRegion] =
    useState<ScholarshipRegionFilter>('all');
  const [scholarshipLevel, setScholarshipLevel] = useState<LevelFilter>('All');
  const [scholarshipQuery, setScholarshipQuery] = useState('');
  const [scholarshipPage, setScholarshipPage] = useState(1);

  const filteredScholarships = useMemo(() => {
    const q = scholarshipQuery.trim().toLowerCase();
    return GLOBAL_SCHOLARSHIPS.filter((row) => {
      const regionOk = matchesScholarshipRegion(row.country, scholarshipRegion);
      const levelOk =
        scholarshipLevel === 'All' || row.levels.includes(scholarshipLevel);
      const queryOk =
        !q ||
        row.award.toLowerCase().includes(q) ||
        row.country.toLowerCase().includes(q) ||
        row.funding.toLowerCase().includes(q) ||
        row.levels.some((lvl) => lvl.toLowerCase().includes(q)) ||
        row.comments.toLowerCase().includes(q);
      return regionOk && levelOk && queryOk;
    });
  }, [scholarshipRegion, scholarshipLevel, scholarshipQuery]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredScholarships.length / SCHOLARSHIP_PAGE_SIZE)
  );
  const safePage = Math.min(scholarshipPage, totalPages);
  const paginatedScholarships = filteredScholarships.slice(
    (safePage - 1) * SCHOLARSHIP_PAGE_SIZE,
    safePage * SCHOLARSHIP_PAGE_SIZE
  );

  return (
    <div className="bg-transparent text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-cyan-300">
            Consultancy Scope &amp; Deliverables
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Structured higher education advisory from first shortlist to arrival.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            We replace fragmented agency handoffs with a single accountable advisory track covering course selection, applications, scholarships, visa filings, and pre-departure orientation.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value={CORE_SERVICES.length} immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Core Advisory Tracks
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-amber-300 tabular-nums">
                <AnimatedCounter value={GLOBAL_SCHOLARSHIPS.length} immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Indexed Scholarships
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-cyan-300 tabular-nums">
                <AnimatedCounter value="48h" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Profile Diagnostic Turnaround
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value="98%" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Visa Approval Accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-transparent px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.number}
                className="group grid items-center gap-8 p-6 transition-colors hover:bg-white/[0.03] sm:p-8 lg:grid-cols-12"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 lg:col-span-3">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackSrc={PHOTO_FALLBACK_SRC}
                    fallbackTitle={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute bottom-2.5 left-3 font-mono text-xs font-semibold text-amber-300 tabular-nums">
                    {service.number} {service.timeline}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="font-mono font-semibold text-amber-300 tabular-nums">
                      {service.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{service.stage}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.timeline}</span>
                  </div>
                  <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {service.summary}
                  </p>
                </div>

                <div className="lg:col-span-5 lg:pl-4">
                  <h3 className="text-xs font-semibold tracking-wide text-cyan-300">
                    Included Deliverables
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-slate-200"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Four-Stage Process */}
        <div className="mt-16">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white">
              How Your Application Moves Forward
            </h2>
          </ScrollReveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADMISSIONS_MILESTONES.map((milestone, idx) => (
              <ScrollReveal key={milestone.step} staggerIndex={idx} className="h-full">
                <div className="h-full rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                  <p className="font-mono text-xs font-semibold text-amber-300 tabular-nums">
                    {milestone.step}
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold text-white">
                    {milestone.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {milestone.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Global Scholarship Directory */}
        <ScrollReveal>
          <div className="mt-16 rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Scholarship Guidance ·{' '}
                  <AnimatedCounter value={GLOBAL_SCHOLARSHIPS.length} /> Indexed Awards
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  International Scholarships &amp; Fellowships Directory
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  Search government fellowships, research grants, and merit scholarships across the USA, Canada, UK, Australia, Europe, New Zealand, and multi-country pathways.
                </p>
              </div>

              <div className="relative w-full sm:w-80">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={scholarshipQuery}
                  onChange={(e) => {
                    setScholarshipQuery(e.target.value);
                    setScholarshipPage(1);
                  }}
                  placeholder="Search scholarships, country, or award..."
                  aria-label="Search international scholarships"
                  className="min-h-[42px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 py-2 pr-3 pl-9 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div
                role="group"
                aria-label="Filter scholarships by country or region"
                className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-1"
              >
                {SCHOLARSHIP_FILTERS.map((filter) => {
                  const active = scholarshipRegion === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => {
                        setScholarshipRegion(filter.id);
                        if (
                          filter.id !== 'all' &&
                          filter.id !== 'malaysia' &&
                          (scholarshipLevel === 'Diploma' ||
                            scholarshipLevel === 'Foundation')
                        ) {
                          setScholarshipLevel('All');
                        }
                        setScholarshipPage(1);
                      }}
                      className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 tabular-nums ${
                        active
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="group"
                aria-label="Filter scholarships by study level"
                className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-1"
              >
                {SCHOLARSHIP_LEVEL_FILTERS.map((lvl) => {
                  const active = scholarshipLevel === lvl;
                  return (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => {
                        setScholarshipLevel(lvl);
                        if (lvl === 'Diploma' || lvl === 'Foundation') {
                          setScholarshipRegion('malaysia');
                        }
                        setScholarshipPage(1);
                      }}
                      className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                        active
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {lvl === 'All' ? 'All Levels' : lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-400">
              Diploma and Foundation scholarships apply exclusively to Malaysia; all other destinations cover Undergraduate and Masters levels.
            </p>

            <div className="mt-4 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/10 bg-white/[0.06] text-xs font-semibold text-cyan-200">
                  <tr>
                    <th className="px-4 py-3 font-mono tabular-nums">Sl.</th>
                    <th className="px-4 py-3">Scholarship / Award</th>
                    <th className="px-4 py-3">Country / Region</th>
                    <th className="px-4 py-3">Study Levels</th>
                    <th className="px-4 py-3">Scholarship Program</th>
                    <th className="px-4 py-3">Eligibility &amp; Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {paginatedScholarships.length === 0 ? (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-sm text-slate-400"
                      >
                        No scholarships matched your current filter or search term.
                      </td>
                    </tr>
                  ) : (
                    paginatedScholarships.map((item) => (
                      <tr
                        key={`${item.slNo}-${item.award}`}
                        className="bg-transparent transition-colors hover:bg-white/[0.06]"
                      >
                        <td className="px-4 py-3 font-mono text-xs text-slate-400 tabular-nums">
                          {item.slNo}
                        </td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {item.award}
                        </td>
                        <td className="px-4 py-3 text-slate-200">
                          {item.country || 'International / Multi-Region'}
                        </td>
                        <td className="px-4 py-3 text-xs font-medium text-cyan-200">
                          {item.levels.join(' · ')}
                        </td>
                        <td className="px-4 py-3 text-xs font-medium text-amber-300">
                          {item.funding}
                        </td>
                        <td className="px-4 py-3 text-xs leading-relaxed text-slate-300">
                          {item.comments || 'Varies by Scholarship Qualification'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-300 sm:flex-row sm:items-center">
              <p className="tabular-nums">
                Showing{' '}
                {filteredScholarships.length === 0
                  ? 0
                  : (safePage - 1) * SCHOLARSHIP_PAGE_SIZE + 1}
                –
                {Math.min(
                  safePage * SCHOLARSHIP_PAGE_SIZE,
                  filteredScholarships.length
                )}{' '}
                of {filteredScholarships.length} scholarships
              </p>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safePage <= 1}
                  onClick={() => setScholarshipPage((p) => Math.max(1, p - 1))}
                  className="min-h-[36px] rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Previous
                </button>
                <span className="px-2 font-mono tabular-nums">
                  Page {safePage} / {totalPages}
                </span>
                <button
                  type="button"
                  disabled={safePage >= totalPages}
                  onClick={() =>
                    setScholarshipPage((p) => Math.min(totalPages, p + 1))
                  }
                  className="min-h-[36px] rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 bg-[#0B1120]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Unsure which intake or scholarship cycle fits your profile?
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Speak directly with an advisor to receive a tailored university shortlist and document checklist.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] whitespace-nowrap shrink-0"
            >
              <span>Request Profile Assessment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
