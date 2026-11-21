import { Fragment, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import {
  EUROPE_COUNTRIES_UNIVERSITIES,
  GLOBAL_PARTNER_GROUPS,
  REST_OF_WORLD_PATHS,
  REST_OF_WORLD_SERVICES,
  STUDY_DESTINATIONS,
} from '../data/consultancyData';
import {
  DESTINATION_DIRECTORIES,
  DIRECTORY_COUNTRY_META,
  DirectoryCountrySlug,
} from '../data/destinationDirectories';

export type DestinationRegionId =
  | 'all'
  | 'canada'
  | 'usa'
  | 'uk'
  | 'australia'
  | 'europe'
  | 'malaysia'
  | 'east-asia';

interface DestinationsPageProps {
  initialRegion?: DestinationRegionId;
  onNavigate: (page: PageId) => void;
}

const REGION_FILTERS: {
  id: DestinationRegionId;
  label: string;
}[] = [
  { id: 'all', label: 'All Regions' },
  { id: 'canada', label: 'Canada' },
  { id: 'usa', label: 'USA' },
  { id: 'uk', label: 'UK' },
  { id: 'australia', label: 'Australia' },
  { id: 'europe', label: 'Europe' },
  { id: 'malaysia', label: 'Malaysia' },
  { id: 'east-asia', label: 'Rest of World' },
];

type StudyLevelFilter =
  | 'All'
  | 'Diploma'
  | 'Foundation'
  | 'Undergraduate'
  | 'Masters';

const LEVEL_FILTERS: StudyLevelFilter[] = [
  'All',
  'Foundation',
  'Diploma',
  'Undergraduate',
  'Masters',
];

const PAGE_SIZE = 15;

const DIRECTORY_SLUGS: DirectoryCountrySlug[] = [
  'canada',
  'usa',
  'uk',
  'australia',
  'europe',
  'malaysia',
];

function isDirectorySlug(id: DestinationRegionId): id is DirectoryCountrySlug {
  return DIRECTORY_SLUGS.includes(id as DirectoryCountrySlug);
}

export function DestinationsPage({
  initialRegion = 'all',
  onNavigate,
}: DestinationsPageProps) {
  const [selectedRegion, setSelectedRegion] =
    useState<DestinationRegionId>(initialRegion);
  const [selectedLevel, setSelectedLevel] = useState<StudyLevelFilter>('All');

  const [directorySlug, setDirectorySlug] = useState<DirectoryCountrySlug>(
    isDirectorySlug(initialRegion) ? initialRegion : 'canada'
  );
  const [directorySearch, setDirectorySearch] = useState('');
  const [directoryPage, setDirectoryPage] = useState(1);
  const [selectedEuropeCountry, setSelectedEuropeCountry] = useState<string>('All');

  useEffect(() => {
    if (isDirectorySlug(selectedRegion)) {
      setDirectorySlug(selectedRegion);
      setDirectoryPage(1);
    }
  }, [selectedRegion]);

  useEffect(() => {
    if (selectedLevel === 'Diploma' || selectedLevel === 'Foundation') {
      setDirectorySlug('malaysia');
      setDirectoryPage(1);
    }
  }, [selectedLevel]);

  const filteredDestinations = STUDY_DESTINATIONS.filter((dest) => {
    const matchesRegion = selectedRegion === 'all' || dest.id === selectedRegion;
    const matchesLevel =
      selectedLevel === 'All' || dest.levelsSupported.includes(selectedLevel);
    return matchesRegion && matchesLevel;
  });

  const activeDirectoryMeta =
    DIRECTORY_COUNTRY_META.find((m) => m.slug === directorySlug) ??
    DIRECTORY_COUNTRY_META[0];

  const visibleTopLevelFilters = useMemo(() => {
    if (selectedRegion === 'all' || selectedRegion === 'malaysia') {
      return LEVEL_FILTERS;
    }
    return LEVEL_FILTERS.filter(
      (lvl) => lvl === 'All' || lvl === 'Undergraduate' || lvl === 'Masters'
    );
  }, [selectedRegion]);

  const directoryLevelFilters = useMemo(() => {
    if (directorySlug === 'malaysia') {
      return LEVEL_FILTERS;
    }
    return LEVEL_FILTERS.filter(
      (lvl) => lvl === 'All' || lvl === 'Undergraduate' || lvl === 'Masters'
    );
  }, [directorySlug]);

  const activeDirectoryRows = useMemo(() => {
    const sourceRows = DESTINATION_DIRECTORIES[directorySlug] ?? [];
    const q = directorySearch.trim().toLowerCase();
    return sourceRows.filter((row) => {
      const matchesLevel =
        selectedLevel === 'All' ||
        row.program === selectedLevel ||
        row.program === 'ALL Levels' ||
        (row.program === 'Undergraduate & Masters' &&
          (selectedLevel === 'Undergraduate' || selectedLevel === 'Masters'));
      const matchesQuery =
        !q ||
        row.universityName.toLowerCase().includes(q) ||
        row.program.toLowerCase().includes(q) ||
        row.tuitionFee.toLowerCase().includes(q) ||
        row.internationalScholarship.toLowerCase().includes(q);
      return matchesLevel && matchesQuery;
    });
  }, [directorySlug, directorySearch, selectedLevel]);

  const totalPages = Math.max(
    1,
    Math.ceil(activeDirectoryRows.length / PAGE_SIZE)
  );
  const safePage = Math.min(directoryPage, totalPages);
  const paginatedRows = activeDirectoryRows.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  return (
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-[#92400E]">
            Where Will You Study?
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-4xl">
            Explore our study abroad destinations across 850+ university programs.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Browse universities, tuition fees, international scholarships, and post-study work opportunities across Canada, USA, UK, Australia, Europe, Malaysia, and the Rest of the World.
          </p>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter destinations by region"
              className="flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
            >
              {REGION_FILTERS.map((filter) => {
                const active = selectedRegion === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => {
                      setSelectedRegion(filter.id);
                      if (
                        filter.id !== 'all' &&
                        filter.id !== 'malaysia' &&
                        (selectedLevel === 'Foundation' ||
                          selectedLevel === 'Diploma')
                      ) {
                        setSelectedLevel('All');
                      }
                      setDirectoryPage(1);
                    }}
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
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
              aria-label="Filter destinations by degree level"
              className="flex flex-wrap items-center gap-1 self-start rounded-lg bg-slate-100 p-1"
            >
              {visibleTopLevelFilters.map((level) => {
                const active = selectedLevel === level;
                return (
                  <button
                    key={level}
                    type="button"
                    onClick={() => {
                      setSelectedLevel(level);
                      setDirectoryPage(1);
                    }}
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-white text-[#0F213E] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F213E]'
                    }`}
                  >
                    {level === 'All' ? 'All Levels' : level}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
        {filteredDestinations.map((dest) => (
          <Fragment key={dest.id}>
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid items-stretch lg:grid-cols-12">
              <div className="lg:col-span-5">
                <ResilientImage
                  src={dest.image}
                  alt={dest.imageAlt}
                  fallbackTitle={dest.regionLabel}
                  className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
                />
              </div>

              <div className="p-6 sm:p-8 lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="font-semibold text-[#92400E]">{dest.regionLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Tuition: {dest.tuitionRange}</span>
                  <span aria-hidden="true">·</span>
                  <span>Intakes: {dest.intakeWindows}</span>
                </div>

                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E]">
                  {dest.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {dest.tagline}
                </p>

                <dl className="mt-5 grid gap-4 border-y border-slate-100 py-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      Program Section
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-[#92400E]">
                      {dest.levelsSupported.join(' · ')}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      Post-Study Work Pathway
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {dest.postStudyWork}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-slate-500">
                      Typical Entry Requirements
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-slate-800">
                      {dest.entryRequirements}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-4 space-y-2">
                  {dest.highlights.map((item) => (
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

                {/* Partner Universities Highlights */}
                <div className="mt-6">
                  <h3 className="text-xs font-semibold tracking-wide text-slate-500">
                    Featured Partner Institutions
                  </h3>
                  <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                        <tr>
                          <th className="px-4 py-2.5">University</th>
                          <th className="px-4 py-2.5">City</th>
                          <th className="px-4 py-2.5">Flagship Programs</th>
                          <th className="px-4 py-2.5 text-right">Tuition Fee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {dest.partnerUniversities.map((uni) => (
                          <tr key={uni.name} className="bg-white">
                            <td className="px-4 py-2.5 font-medium text-[#0F213E]">
                              {uni.name}
                            </td>
                            <td className="px-4 py-2.5 text-slate-600">{uni.city}</td>
                            <td className="px-4 py-2.5 text-slate-600">
                              {uni.flagshipPrograms}
                            </td>
                            <td className="px-4 py-2.5 text-right text-xs font-medium text-slate-700 whitespace-nowrap">
                              {uni.tuitionNote}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
                  {isDirectorySlug(dest.id) && (
                    <a
                      href="#university-directory"
                      onClick={() => {
                        setDirectorySlug(dest.id as DirectoryCountrySlug);
                        setDirectoryPage(1);
                      }}
                      className="text-xs font-semibold text-[#0F213E] underline-offset-4 hover:text-[#B45309] hover:underline"
                    >
                      Jump to Full {dest.regionLabel} Fee &amp; Scholarship Table (
                      {DESTINATION_DIRECTORIES[dest.id].length})
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F213E] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#19335D] whitespace-nowrap shrink-0"
                  >
                    <span>Book Counseling for {dest.regionLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </article>

            {dest.id === 'europe' && (
              <section
                aria-labelledby="europe-countries-heading"
                className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                      Europe · Country-by-Country University Directory
                    </p>
                    <h3
                      id="europe-countries-heading"
                      className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E]"
                    >
                      European Universities by Individual Country
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-600">
                      Browse partner and indexed universities organized individually across {EUROPE_COUNTRIES_UNIVERSITIES.length} European countries. Tuition depends on student profile.
                    </p>
                  </div>
                </div>

                <div
                  role="group"
                  aria-label="Filter European universities by country"
                  className="mt-6 flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedEuropeCountry('All')}
                    className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                      selectedEuropeCountry === 'All'
                        ? 'bg-white text-[#0F213E] shadow-sm'
                        : 'text-slate-600 hover:text-[#0F213E]'
                    }`}
                  >
                    All Countries ({EUROPE_COUNTRIES_UNIVERSITIES.length})
                  </button>
                  {EUROPE_COUNTRIES_UNIVERSITIES.map((entry) => {
                    const active = selectedEuropeCountry === entry.country;
                    return (
                      <button
                        key={entry.country}
                        type="button"
                        onClick={() => setSelectedEuropeCountry(entry.country)}
                        className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                          active
                            ? 'bg-white text-[#0F213E] shadow-sm'
                            : 'text-slate-600 hover:text-[#0F213E]'
                        }`}
                      >
                        {entry.country} ({entry.universities.length})
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {EUROPE_COUNTRIES_UNIVERSITIES.filter(
                    (entry) =>
                      selectedEuropeCountry === 'All' ||
                      entry.country === selectedEuropeCountry
                  ).map((entry) => (
                    <div
                      key={entry.country}
                      className={`rounded-lg border border-slate-200 bg-slate-50/70 p-5 ${
                        selectedEuropeCountry !== 'All'
                          ? 'md:col-span-2 lg:col-span-3'
                          : ''
                      }`}
                    >
                      <div className="flex items-baseline justify-between border-b border-slate-200 pb-2.5">
                        <h4 className="font-display text-base font-bold text-[#0F213E]">
                          {entry.country}
                        </h4>
                        <span className="font-mono text-xs font-medium text-slate-500 tabular-nums">
                          {entry.universities.length}{' '}
                          {entry.universities.length === 1
                            ? 'University'
                            : 'Universities'}
                        </span>
                      </div>
                      <ul
                        className={`mt-3 gap-x-6 gap-y-2 text-sm text-slate-700 ${
                          selectedEuropeCountry !== 'All'
                            ? 'grid sm:grid-cols-2 lg:grid-cols-3'
                            : 'space-y-2'
                        }`}
                      >
                        {entry.universities.map((uni) => (
                          <li key={uni} className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]"
                              aria-hidden="true"
                            />
                            <span>{uni}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </Fragment>
        ))}

        {/* Complete Searchable Multi-Country University Tuition & Scholarship Directory */}
        <section
          id="university-directory"
          aria-labelledby="university-directory-heading"
          className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                Complete University &amp; Scholarship Database
              </p>
              <h2
                id="university-directory-heading"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E]"
              >
                {activeDirectoryMeta.label} University Tuition &amp; Scholarships (
                {DESTINATION_DIRECTORIES[directorySlug].length} Programs)
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Switch country tabs or search by university name, degree level, tuition fee, or international scholarship details.
              </p>
            </div>

            <div className="relative w-full sm:w-80">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={directorySearch}
                onChange={(e) => {
                  setDirectorySearch(e.target.value);
                  setDirectoryPage(1);
                }}
                placeholder={`Search ${activeDirectoryMeta.label} universities...`}
                aria-label="Search university directory"
                className="min-h-[42px] w-full rounded-lg border border-slate-300 bg-white py-2 pr-3 pl-9 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0F213E] focus:outline-none"
              />
            </div>
          </div>

          {/* Country Directory Tabs */}
          <div
            role="tablist"
            aria-label="Select country university directory"
            className="mt-6 flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
          >
            {DIRECTORY_COUNTRY_META.map((meta) => {
              const active = directorySlug === meta.slug;
              const count = DESTINATION_DIRECTORIES[meta.slug].length;
              return (
                <button
                  key={meta.slug}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setDirectorySlug(meta.slug);
                    if (
                      meta.slug !== 'malaysia' &&
                      (selectedLevel === 'Foundation' ||
                        selectedLevel === 'Diploma')
                    ) {
                      setSelectedLevel('All');
                    }
                    setDirectoryPage(1);
                  }}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 tabular-nums ${
                    active
                      ? 'bg-white text-[#0F213E] shadow-sm'
                      : 'text-slate-600 hover:text-[#0F213E]'
                  }`}
                >
                  {meta.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col justify-between gap-3 rounded-lg border border-amber-200/80 bg-amber-50/50 px-4 py-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-semibold text-[#0F213E]">
                {activeDirectoryMeta.label} Program Section:{' '}
                <span className="text-[#92400E]">
                  {directorySlug === 'malaysia'
                    ? 'Foundation · Diploma · Undergraduate · Masters (ALL Levels)'
                    : 'Undergraduate · Masters'}
                </span>
              </p>
            </div>

            <div
              role="group"
              aria-label={`Filter ${activeDirectoryMeta.label} directory by program`}
              className="flex flex-wrap items-center gap-1"
            >
              {directoryLevelFilters.map((lvl) => {
                const active = selectedLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => {
                      setSelectedLevel(lvl);
                      setDirectoryPage(1);
                    }}
                    className={`min-h-[34px] rounded-md px-2.5 py-1 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-[#0F213E] text-white'
                        : 'bg-white text-slate-700 hover:text-[#0F213E]'
                    }`}
                  >
                    {lvl === 'All' ? 'All Programs' : lvl}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-mono tabular-nums">Sl.</th>
                  <th className="px-4 py-3">University Name</th>
                  <th className="px-4 py-3">Program</th>
                  <th className="px-4 py-3 text-right">
                    {activeDirectoryMeta.currencyLabel}
                  </th>
                  <th className="px-4 py-3">International Scholarship</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {paginatedRows.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-4 py-8 text-center text-sm text-slate-500"
                    >
                      No universities in {activeDirectoryMeta.label} matched your search or degree filter.
                    </td>
                  </tr>
                ) : (
                  paginatedRows.map((row) => (
                    <tr
                      key={`${directorySlug}-${row.slNo}-${row.universityName}-${row.program}`}
                      className="bg-white hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-slate-500 tabular-nums">
                        {row.slNo}
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#0F213E]">
                        {row.universityName}
                      </td>
                      <td className="px-4 py-3 text-slate-700 whitespace-nowrap">
                        {row.program}
                      </td>
                      <td className="px-4 py-3 text-right text-xs font-medium text-slate-700 whitespace-nowrap">
                        {row.tuitionFee}
                      </td>
                      <td className="px-4 py-3 text-xs leading-relaxed text-slate-600">
                        {row.internationalScholarship}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-600 sm:flex-row sm:items-center">
            <p className="tabular-nums">
              Showing{' '}
              {activeDirectoryRows.length === 0
                ? 0
                : (safePage - 1) * PAGE_SIZE + 1}
              –{Math.min(safePage * PAGE_SIZE, activeDirectoryRows.length)} of{' '}
              {activeDirectoryRows.length} entries
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={safePage <= 1}
                onClick={() => setDirectoryPage((p) => Math.max(1, p - 1))}
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
                  setDirectoryPage((p) => Math.min(totalPages, p + 1))
                }
                className="min-h-[36px] rounded-md border border-slate-300 bg-white px-3 py-1.5 font-semibold text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        {/* Rest of the World & Extended Partner Network */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-8 border-b border-slate-200 pb-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                Rest of the World &amp; Extended Partner Network
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E]">
                Global Pathway Options Beyond Featured Destinations
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                For students considering countries outside our primary featured corridors, our counselors compare study options, tuition ranges, scholarships, intakes, and visa pathways worldwide.
              </p>
              <p className="mt-4 text-xs font-semibold text-slate-500">
                Active Regions Covered
              </p>
              <p className="mt-1 text-sm font-medium text-[#0F213E]">
                {REST_OF_WORLD_PATHS.join(' · ')}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-5 lg:col-span-6">
              <h3 className="font-display text-sm font-semibold text-[#0F213E]">
                Counseling Included for Global &amp; Medical Pathways
              </h3>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {REST_OF_WORLD_SERVICES.map((svc) => (
                  <li
                    key={svc}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0F213E]"
                      aria-hidden="true"
                    />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-lg font-bold text-[#0F213E]">
              25 Global Partner Universities &amp; Institutions
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Direct partner admissions across Canada, USA, Australia, New Zealand, Europe, and Malaysia.
            </p>

            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {GLOBAL_PARTNER_GROUPS.map((group) => (
                <div
                  key={group.region}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 p-5"
                >
                  <h4 className="font-display text-base font-semibold text-[#0F213E]">
                    {group.region}
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {group.universities.map((uni) => (
                      <li key={uni} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]"
                          aria-hidden="true"
                        />
                        <span>{uni}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
