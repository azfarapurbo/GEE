import { useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { CORE_SERVICES } from '../data/consultancyData';
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
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-[#92400E]">
            Consultancy Scope &amp; Deliverables
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-4xl">
            Structured higher education advisory from first shortlist to arrival.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            We replace fragmented agency handoffs with a single accountable advisory track covering course selection, applications, scholarships, visa filings, and pre-departure orientation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.number}
              className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="font-mono font-semibold text-[#B45309] tabular-nums">
                    {service.number}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{service.stage}</span>
                  <span aria-hidden="true">·</span>
                  <span>{service.timeline}</span>
                </div>
                <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-[#0F213E]">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.summary}
                </p>
              </div>

              <div className="lg:col-span-7 lg:pl-6">
                <h3 className="text-xs font-semibold tracking-wide text-slate-500">
                  Included Deliverables
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
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

        {/* Four-Stage Process */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#0F213E]">
            How Your Application Moves Forward
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADMISSIONS_MILESTONES.map((milestone) => (
              <div
                key={milestone.step}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="font-mono text-xs font-semibold text-[#B45309] tabular-nums">
                  {milestone.step}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-[#0F213E]">
                  {milestone.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global Scholarship Directory (95 Awards) */}
        <div className="mt-16 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                Scholarship Guidance · {GLOBAL_SCHOLARSHIPS.length} Indexed Awards
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E]">
                International Scholarships &amp; Fellowships Directory
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
                className="min-h-[42px] w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter scholarships by country or region"
              className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
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
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                      active
                        ? 'bg-white text-[#0F213E] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F213E]'
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
              className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
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
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-[#0F213E] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F213E]'
                    }`}
                  >
                    {lvl === 'All' ? 'All Levels' : lvl}
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            Diploma and Foundation scholarships apply exclusively to Malaysia; all other destinations cover Undergraduate and Masters levels.
          </p>

          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-mono tabular-nums">Sl.</th>
                  <th className="px-4 py-3">Scholarship / Award</th>
                  <th className="px-4 py-3">Country / Region</th>
                  <th className="px-4 py-3">Study Levels</th>
                  <th className="px-4 py-3">Scholarship Program</th>
                  <th className="px-4 py-3">Eligibility &amp; Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedScholarships.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-8 text-center text-sm text-slate-500"
                    >
                      No scholarships matched your current filter or search term.
                    </td>
                  </tr>
                ) : (
                  paginatedScholarships.map((item) => (
                    <tr
                      key={`${item.slNo}-${item.award}`}
                      className="bg-white hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 tabular-nums">
                        {item.slNo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#0F213E]">
                        {item.award}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {item.country || 'International / Multi-Region'}
                      </td>
                      <td className="px-4 py-3 text-xs font-medium text-slate-700">
                        {item.levels.join(' · ')}
                      </td>
                      <td className="px-4 py-3 text-xs font-medium text-[#92400E]">
                        {item.funding}
                      </td>
                      <td className="px-4 py-3 text-xs leading-relaxed text-slate-600">
                        {item.comments || 'Varies by Scholarship Qualification'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-600 sm:flex-row sm:items-center">
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
                className="min-h-[36px] rounded-md border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
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
                className="min-h-[36px] rounded-md border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-slate-200 bg-white p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-xl font-bold text-[#0F213E]">
              Unsure which intake or scholarship cycle fits your profile?
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Speak directly with an advisor to receive a tailored university shortlist and document checklist.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F213E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#19335D] whitespace-nowrap shrink-0"
          >
            <span>Request Profile Assessment</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
