import { Fragment, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, Search } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  EUROPE_COUNTRIES_UNIVERSITIES,
  GLOBAL_PARTNER_GROUPS,
  PHOTO_FALLBACK_SRC,
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
  const [flagshipRegion, setFlagshipRegion] =
    useState<DestinationRegionId>(initialRegion);
  const [flagshipSearch, setFlagshipSearch] = useState('');

  useEffect(() => {
    setFlagshipRegion(selectedRegion);
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

  const flagshipUniversities = useMemo(() => {
    const q = flagshipSearch.trim().toLowerCase();
    return STUDY_DESTINATIONS.filter(
      (dest) => flagshipRegion === 'all' || dest.id === flagshipRegion
    ).flatMap((dest) =>
      dest.partnerUniversities
        .filter((uni) => {
          if (!q) return true;
          return (
            uni.name.toLowerCase().includes(q) ||
            uni.city.toLowerCase().includes(q) ||
            uni.flagshipPrograms.toLowerCase().includes(q) ||
            dest.regionLabel.toLowerCase().includes(q)
          );
        })
        .map((uni) => ({
          regionId: dest.id,
          regionLabel: dest.regionLabel,
          ...uni,
        }))
    );
  }, [flagshipRegion, flagshipSearch]);

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
        row.universityLocation.toLowerCase().includes(q) ||
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
    <div className="bg-transparent text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-cyan-300">
            Where Will You Study?
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Explore our study abroad destinations across{' '}
            <AnimatedCounter value="850+" immediate /> university programs.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Browse universities, university locations, international scholarships, and post-study work opportunities across Canada, USA, UK, Australia, Europe, Malaysia, and the Rest of the World.
          </p>

          {/* Above-the-fold Frosted Stats Strip */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value={576} immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Indexed Universities
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-cyan-300 tabular-nums">
                <AnimatedCounter value="850+" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Degree Pathways
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-amber-300 tabular-nums">
                <AnimatedCounter
                  value={EUROPE_COUNTRIES_UNIVERSITIES.length}
                  immediate
                />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                European Countries
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value="98%" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Visa Success Rate
              </p>
            </div>
          </div>

          {/* Interactive Filter Controls */}
          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter destinations by region"
              className="flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/60 p-1 backdrop-blur-xl"
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
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-[0_0_14px_rgba(6,182,212,0.35)]'
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
              aria-label="Filter destinations by degree level"
              className="flex flex-wrap items-center gap-1 self-start rounded-lg border border-white/10 bg-[#0B1120]/60 p-1 backdrop-blur-xl"
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
                    className={`min-h-[40px] rounded-md px-3 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-[0_0_14px_rgba(6,182,212,0.35)]'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
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

      <section className="mx-auto max-w-7xl space-y-10 bg-transparent px-4 py-14 sm:px-6 lg:px-8">
        {filteredDestinations.map((dest, idx) => (
          <Fragment key={dest.id}>
            <ScrollReveal staggerIndex={idx % 3}>
              <article className="group overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.14)]">
                <div className="grid items-stretch lg:grid-cols-12">
                  <div className="relative overflow-hidden lg:col-span-5">
                    <ResilientImage
                      src={dest.image}
                      alt={dest.imageAlt}
                      fallbackSrc={PHOTO_FALLBACK_SRC}
                      fallbackTitle={dest.regionLabel}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-xs font-semibold text-cyan-300">
                        {dest.universityLocation}
                      </p>
                      <p className="mt-0.5 font-display text-lg font-bold text-white">
                        {dest.regionLabel}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <span className="font-semibold text-amber-300">
                        {dest.regionLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Location: {dest.universityLocation}</span>
                      <span aria-hidden="true">·</span>
                      <span>Intakes: {dest.intakeWindows}</span>
                    </div>

                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                      {dest.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {dest.tagline}
                    </p>

                    <dl className="mt-5 grid gap-4 border-y border-white/10 py-4 sm:grid-cols-3">
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          Program Section
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-cyan-300">
                          {dest.levelsSupported.join(' · ')}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          Post-Study Work Pathway
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-slate-200">
                          {dest.postStudyWork}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold text-slate-400">
                          Typical Entry Requirements
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-slate-200">
                          {dest.entryRequirements}
                        </dd>
                      </div>
                    </dl>

                    <ul className="mt-4 space-y-2">
                      {dest.highlights.map((item) => (
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

                    <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
                      {isDirectorySlug(dest.id) && (
                        <a
                          href="#university-directory"
                          onClick={() => {
                            setDirectorySlug(dest.id as DirectoryCountrySlug);
                            setDirectoryPage(1);
                          }}
                          className="text-xs font-semibold text-cyan-300 underline-offset-4 hover:text-white hover:underline"
                        >
                          Jump to Full {dest.regionLabel} Location &amp; Scholarship Table (
                          {DESTINATION_DIRECTORIES[dest.id].length})
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] whitespace-nowrap shrink-0"
                      >
                        <span>Book Counseling for {dest.regionLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>

            {dest.id === 'europe' && (
              <ScrollReveal>
                <section
                  aria-labelledby="europe-countries-heading"
                  className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8"
                >
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                      <p className="text-xs font-semibold tracking-wide text-cyan-300">
                        Europe · Country-by-Country University Directory
                      </p>
                      <h3
                        id="europe-countries-heading"
                        className="mt-2 font-display text-2xl font-bold tracking-tight text-white"
                      >
                        European Universities by Individual Country
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-300">
                        Browse partner and indexed universities organized individually across{' '}
                        <AnimatedCounter
                          value={EUROPE_COUNTRIES_UNIVERSITIES.length}
                        />{' '}
                        European countries.
                      </p>
                    </div>
                  </div>

                  <div
                    role="group"
                    aria-label="Filter European universities by country"
                    className="mt-6 flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-1"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedEuropeCountry('All')}
                      className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 tabular-nums ${
                        selectedEuropeCountry === 'All'
                          ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
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
                          className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 tabular-nums ${
                            active
                              ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {entry.universities.length > 0
                            ? `${entry.country} (${entry.universities.length})`
                            : entry.country}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {EUROPE_COUNTRIES_UNIVERSITIES.filter(
                      (entry) =>
                        selectedEuropeCountry === 'All' ||
                        entry.country === selectedEuropeCountry
                    ).map((entry) => {
                      const isTruncatedOverview =
                        selectedEuropeCountry === 'All' &&
                        entry.universities.length > 15;
                      const visibleUniversities = isTruncatedOverview
                        ? entry.universities.slice(0, 12)
                        : entry.universities;

                      return (
                        <div
                          key={entry.country}
                          className={`rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 ${
                            selectedEuropeCountry !== 'All'
                              ? 'md:col-span-2 lg:col-span-3'
                              : ''
                          }`}
                        >
                          <div className="flex items-baseline justify-between border-b border-white/10 pb-2.5">
                            <h4 className="font-display text-base font-bold text-white">
                              {entry.country}
                            </h4>
                            <span className="font-mono text-xs font-medium text-cyan-300 tabular-nums">
                              {entry.universities.length > 0 ? (
                                <>
                                  <AnimatedCounter value={entry.universities.length} />{' '}
                                  {entry.universities.length === 1
                                    ? 'University'
                                    : 'Universities'}
                                </>
                              ) : (
                                'University List'
                              )}
                            </span>
                          </div>
                          {entry.universities.length === 0 ? (
                            <div className="mt-3 flex min-h-[88px] items-center justify-center rounded-md border border-dashed border-white/20 bg-[#0B1120]/50 p-4 text-center text-xs text-slate-400">
                              University list section — ready to be updated.
                            </div>
                          ) : (
                            <>
                              <ul
                                className={`mt-3 gap-x-6 gap-y-2 text-sm text-slate-200 ${
                                  selectedEuropeCountry !== 'All'
                                    ? 'grid sm:grid-cols-2 lg:grid-cols-3'
                                    : 'space-y-2'
                                }`}
                              >
                                {visibleUniversities.map((uni) => (
                                  <li key={uni} className="flex items-start gap-2">
                                    <Check
                                      className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                                      aria-hidden="true"
                                    />
                                    <span>{uni}</span>
                                  </li>
                                ))}
                              </ul>
                              {isTruncatedOverview && (
                                <button
                                  type="button"
                                  onClick={() => setSelectedEuropeCountry(entry.country)}
                                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 underline-offset-4 hover:text-white hover:underline whitespace-nowrap shrink-0"
                                >
                                  <span>
                                    View all {entry.universities.length} {entry.country} universities
                                  </span>
                                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              </ScrollReveal>
            )}
          </Fragment>
        ))}

        {/* Flagship Programs by University */}
        <ScrollReveal>
          <section
            id="flagship-programs"
            aria-labelledby="flagship-programs-heading"
            className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Best Subject Strengths by Institution
                </p>
                <h2
                  id="flagship-programs-heading"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-white"
                >
                  Flagship Programs
                </h2>
                <p className="mt-1.5 text-sm text-slate-300">
                  Explore each university&apos;s top academic strengths and flagship programs across our study destinations.
                </p>
              </div>

              <div className="relative w-full sm:w-80">
                <Search
                  className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={flagshipSearch}
                  onChange={(e) => setFlagshipSearch(e.target.value)}
                  placeholder="Search university or flagship program..."
                  aria-label="Search flagship programs by university or subject"
                  className="min-h-[42px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 pr-3 pl-9 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            <div
              role="group"
              aria-label="Filter flagship programs by destination"
              className="mt-6 flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-1"
            >
              {REGION_FILTERS.map((filter) => {
                const active = flagshipRegion === filter.id;
                return (
                  <button
                    key={`flagship-${filter.id}`}
                    type="button"
                    onClick={() => setFlagshipRegion(filter.id)}
                    className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
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

            {flagshipUniversities.length === 0 ? (
              <p className="mt-6 rounded-lg border border-white/10 bg-[#0B1120]/50 px-4 py-8 text-center text-sm text-slate-400">
                No flagship programs matched your selected filter or search term.
              </p>
            ) : (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {flagshipUniversities.map((uni) => (
                  <div
                    key={`${uni.regionId}-${uni.name}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-base font-bold text-white">
                        {uni.name}
                      </h3>
                      <span className="text-xs font-semibold text-amber-300">
                        {uni.regionLabel} · {uni.city}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {uni.name} has Flagship Programs as{' '}
                      <span className="font-semibold text-white">
                        {uni.flagshipPrograms}
                      </span>
                      .
                    </p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </ScrollReveal>

        {/* Complete Searchable Multi-Country University Location & Scholarship Directory */}
        <ScrollReveal>
          <section
            id="university-directory"
            aria-labelledby="university-directory-heading"
            className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8"
          >
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Complete University &amp; Scholarship Database
                </p>
                <h2
                  id="university-directory-heading"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-white"
                >
                  {activeDirectoryMeta.label} University Locations &amp; Scholarships (
                  <AnimatedCounter
                    value={DESTINATION_DIRECTORIES[directorySlug].length}
                  />{' '}
                  Universities)
                </h2>
                <p className="mt-1.5 text-sm text-slate-300">
                  Universities are ordered by global ranking serial number (Sl.). Switch country tabs or search by university name, degree level, university location, or international scholarship details.
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
                  className="min-h-[42px] w-full rounded-lg border border-white/15 bg-[#0B1120]/80 py-2 pr-3 pl-9 text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Country Directory Tabs */}
            <div
              role="tablist"
              aria-label="Select country university directory"
              className="mt-6 flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/70 p-1"
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
                    className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 tabular-nums ${
                      active
                        ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {meta.label} ({count})
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex flex-col justify-between gap-3 rounded-lg border border-amber-400/25 bg-amber-500/10 px-4 py-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold text-white">
                  {activeDirectoryMeta.label} Program Section:{' '}
                  <span className="text-amber-300">
                    {directorySlug === 'malaysia'
                      ? 'Foundation · Diploma · Undergraduate · Masters (ALL Levels)'
                      : 'Undergraduate · Masters (ALL Levels)'}
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
                          ? 'bg-[#4F46E5] text-white'
                          : 'bg-white/10 text-slate-200 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {lvl === 'All' ? 'All Programs' : lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-5 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-white/10 bg-white/[0.06] text-xs font-semibold text-cyan-200">
                  <tr>
                    <th className="px-4 py-3 font-mono tabular-nums">Sl.</th>
                    <th className="px-4 py-3">University Name</th>
                    <th className="px-4 py-3">Program</th>
                    <th className="px-4 py-3">
                      {activeDirectoryMeta.locationLabel}
                    </th>
                    <th className="px-4 py-3">International Scholarship</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {paginatedRows.length === 0 ? (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-8 text-center text-sm text-slate-400"
                      >
                        No universities in {activeDirectoryMeta.label} matched your search or degree filter.
                      </td>
                    </tr>
                  ) : (
                    paginatedRows.map((row) => (
                      <tr
                        key={`${directorySlug}-${row.slNo}-${row.universityName}-${row.program}`}
                        className="bg-transparent transition-colors hover:bg-white/[0.06]"
                      >
                        <td className="px-4 py-3 font-mono text-xs text-slate-400 tabular-nums">
                          {row.slNo}
                        </td>
                        <td className="px-4 py-3 font-semibold text-white">
                          {row.universityName}
                        </td>
                        <td className="px-4 py-3 text-cyan-200 whitespace-nowrap">
                          {row.program}
                        </td>
                        <td className="px-4 py-3 text-xs font-medium text-slate-200">
                          {row.universityLocation}
                        </td>
                        <td className="px-4 py-3 text-xs leading-relaxed text-slate-300">
                          {row.internationalScholarship}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="mt-4 flex flex-col items-start justify-between gap-3 text-xs text-slate-300 sm:flex-row sm:items-center">
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
                    setDirectoryPage((p) => Math.min(totalPages, p + 1))
                  }
                  className="min-h-[36px] rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Rest of the World & Extended Partner Network */}
        <ScrollReveal>
          <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:p-8">
            <div className="grid gap-8 border-b border-white/10 pb-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Rest of the World &amp; Extended Partner Network
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white">
                  Global Pathway Options Beyond Featured Destinations
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  For students considering countries outside our primary featured corridors, our counselors compare study options, university locations, scholarships, intakes, and visa pathways worldwide.
                </p>
                <p className="mt-4 text-xs font-semibold text-slate-400">
                  Active Regions Covered
                </p>
                <p className="mt-1 text-sm font-medium text-cyan-200">
                  {REST_OF_WORLD_PATHS.join(' · ')}
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-md lg:col-span-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Counseling Included for Global &amp; Medical Pathways
                </h3>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {REST_OF_WORLD_SERVICES.map((svc) => (
                    <li
                      key={svc}
                      className="flex items-start gap-2 text-sm text-slate-200"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                        aria-hidden="true"
                      />
                      <span>{svc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-lg font-bold text-white">
                <AnimatedCounter value={25} /> Global Partner Universities &amp; Institutions
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Direct partner admissions across Canada, USA, Australia, New Zealand, Europe, and Malaysia.
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {GLOBAL_PARTNER_GROUPS.map((group) => (
                  <div
                    key={group.region}
                    className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
                  >
                    <h4 className="font-display text-base font-semibold text-white">
                      {group.region}
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      {group.universities.map((uni) => (
                        <li key={uni} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
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
        </ScrollReveal>
      </section>
    </div>
  );
}
