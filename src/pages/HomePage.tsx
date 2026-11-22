import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  Building2,
  Clock,
  Compass,
  GraduationCap,
  Mail,
  Phone,
  Plane,
  ShieldCheck,
} from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { AssessmentFormCard } from '../components/AssessmentFormCard';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  COMPANY_CONTACT,
  DESTINATION_LANDMARK_IMAGES,
  GLOBAL_PARTNER_GROUPS,
  HERO_COLLAGE_IMAGES,
  PHOTO_FALLBACK_SRC,
  SERVICE_LIFESTYLE_IMAGES,
  STUDENT_STORIES,
  TRUST_METRICS,
} from '../data/consultancyData';
import { CONSULTATION_EMAIL } from '../lib/consultations';
import { DestinationRegionId } from './DestinationsPage';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination?: (destId: DestinationRegionId) => void;
}

type ExplorerCategory =
  | 'all'
  | 'malaysia'
  | 'europe-uk'
  | 'east-asia'
  | 'australia-canada';

interface ExplorerDestination {
  id: string;
  category: Exclude<ExplorerCategory, 'all'>;
  targetRegion: DestinationRegionId;
  flag: string;
  country: string;
  universityLocation: string;
  programsLabel: string;
  highlight: string;
  popularUniversities: string;
  visaPostStudy: string;
  image: string;
  imageAlt: string;
}

const EXPLORER_FILTERS: { id: ExplorerCategory; label: string }[] = [
  { id: 'all', label: 'All Destinations' },
  { id: 'malaysia', label: 'Malaysia' },
  { id: 'europe-uk', label: 'Europe & UK' },
  { id: 'east-asia', label: 'South Korea & China' },
  { id: 'australia-canada', label: 'Australia & Canada' },
];

const EXPLORER_DESTINATIONS: ExplorerDestination[] = [
  {
    id: 'malaysia',
    category: 'malaysia',
    targetRegion: 'malaysia',
    flag: '🇲🇾',
    country: 'Malaysia',
    universityLocation: 'Kuala Lumpur · Subang Jaya · Semenyih',
    programsLabel: 'Foundation · Diploma · Undergraduate · Masters (ALL Levels)',
    highlight: 'Affordable living costs, English-medium UK/Australian branch campuses, and high EMGS visa predictability.',
    popularUniversities: 'Monash Malaysia, Nottingham Malaysia, Taylor’s, UCSI, Sunway, SEGi',
    visaPostStudy: 'EMGS Student Pass + 12-month Graduate Pass',
    image: DESTINATION_LANDMARK_IMAGES.malaysia.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.malaysia.alt,
  },
  {
    id: 'uk',
    category: 'europe-uk',
    targetRegion: 'uk',
    flag: '🇬🇧',
    country: 'United Kingdom',
    universityLocation: 'London · Edinburgh · Manchester · Leeds',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Intensive 1-year Master’s degrees, 2-year Graduate Route post-study work visa, and GREAT/Chevening scholarships.',
    popularUniversities: 'University of Leeds, University of Glasgow, Coventry, Hertfordshire',
    visaPostStudy: '2-year UK Graduate Route Work Visa',
    image: DESTINATION_LANDMARK_IMAGES.uk.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.uk.alt,
  },
  {
    id: 'germany',
    category: 'europe-uk',
    targetRegion: 'europe',
    flag: '🇩🇪',
    country: 'Germany',
    universityLocation: 'Berlin · Munich · Hamburg · Cologne',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Public and applied sciences university tracks, engineering degrees, and guided APS & Blocked Account setup.',
    popularUniversities: 'IU International, BSBI, Munich Business School, German TU Tracks',
    visaPostStudy: '18-month German Job Seeker Permit',
    image: DESTINATION_LANDMARK_IMAGES.germany.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.germany.alt,
  },
  {
    id: 'netherlands-belgium',
    category: 'europe-uk',
    targetRegion: 'europe',
    flag: '🇳🇱 🇧🇪',
    country: 'Netherlands & Belgium',
    universityLocation: 'Amsterdam · Apeldoorn · Brussels',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Research-led Dutch and Belgian business and technology programs with 20 hrs/week EU student work rights.',
    popularUniversities: 'Wittenborg University of Applied Sciences, United Business Institutes (UBI)',
    visaPostStudy: 'EU Orientation Year Residence Track',
    image: DESTINATION_LANDMARK_IMAGES.netherlandsBelgium.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.netherlandsBelgium.alt,
  },
  {
    id: 'spain',
    category: 'europe-uk',
    targetRegion: 'europe',
    flag: '🇪🇸',
    country: 'Spain',
    universityLocation: 'Barcelona · Madrid · Murcia',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Accredited Spanish business, hospitality, architecture, and design degrees taught in English across vibrant hubs.',
    popularUniversities: 'Universidad Europea, UCAM, EAE Business School, European University Barcelona',
    visaPostStudy: 'Post-Study Job Search & EU Residence Tracks',
    image: DESTINATION_LANDMARK_IMAGES.spain.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.spain.alt,
  },
  {
    id: 'australia',
    category: 'australia-canada',
    targetRegion: 'australia',
    flag: '🇦🇺',
    country: 'Australia',
    universityLocation: 'Sydney · Melbourne · Brisbane · Perth',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Group of Eight academic excellence, institutional merit bursaries, and thorough Genuine Student (GS) preparation.',
    popularUniversities: 'University of Sydney, UNSW Sydney, University of Queensland, Deakin',
    visaPostStudy: '2–4 Year Subclass 485 Post-Study Work',
    image: DESTINATION_LANDMARK_IMAGES.australia.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.australia.alt,
  },
  {
    id: 'canada',
    category: 'australia-canada',
    targetRegion: 'canada',
    flag: '🇨🇦',
    country: 'Canada',
    universityLocation: 'Toronto · Waterloo · Ottawa · Vancouver',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Co-op work-integrated degrees, paid campus placements, and clear Post-Graduation Work Permit (PGWP) routes.',
    popularUniversities: 'University of Waterloo, University of Ottawa, Manitoba, Memorial',
    visaPostStudy: 'Up to 3-year PGWP & PR Pathways',
    image: DESTINATION_LANDMARK_IMAGES.canada.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.canada.alt,
  },
  {
    id: 'south-korea',
    category: 'east-asia',
    targetRegion: 'east-asia',
    flag: '🇰🇷',
    country: 'South Korea',
    universityLocation: 'Seoul · Busan · Daejeon',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Global Korea Scholarship (GKS) mentoring and English-taught engineering, AI, and international affairs campuses.',
    popularUniversities: 'Yonsei University (Underwood), Korean Research & STEM Hubs',
    visaPostStudy: 'D-10 Post-Graduation Job-Seeking Visa',
    image: DESTINATION_LANDMARK_IMAGES.southKorea.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.southKorea.alt,
  },
  {
    id: 'china',
    category: 'east-asia',
    targetRegion: 'east-asia',
    flag: '🇨🇳',
    country: 'China',
    universityLocation: 'Shanghai · Beijing · Nanjing · Hangzhou',
    programsLabel: 'Undergraduate · Masters (ALL Levels)',
    highlight: 'Chinese Government Scholarship pathways alongside English-taught MBBS, civil engineering, and commerce programs.',
    popularUniversities: 'Recognized Chinese Public Engineering & Medical Universities',
    visaPostStudy: 'Graduate Internship & Talent Visa Pathways',
    image: DESTINATION_LANDMARK_IMAGES.china.src,
    imageAlt: DESTINATION_LANDMARK_IMAGES.china.alt,
  },
];

const CORE_PILLARS = [
  {
    icon: GraduationCap,
    title: 'University Admission',
    description:
      'Profile-matched shortlisting across 576+ indexed universities, Statement of Purpose (SOP) editing, and fast-track offer processing.',
    accent: 'border-indigo-400/35 bg-indigo-500/20 text-indigo-200',
    image: SERVICE_LIFESTYLE_IMAGES.counseling.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.counseling.alt,
  },
  {
    icon: ShieldCheck,
    title: 'Visa Processing',
    description:
      'Country-specific documentation audits for EMGS Malaysia, German APS & Blocked Accounts, UKVI CAS, Canadian Permits, and F-1 interviews.',
    accent: 'border-cyan-400/35 bg-cyan-500/20 text-cyan-200',
    image: SERVICE_LIFESTYLE_IMAGES.visaPassport.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.visaPassport.alt,
  },
  {
    icon: BookOpenCheck,
    title: 'IELTS Guidance',
    description:
      'Targeted IELTS score strategy, English proficiency planning, and MOI or university-specific waiver eligibility checks.',
    accent: 'border-sky-400/35 bg-sky-500/20 text-sky-200',
    image: SERVICE_LIFESTYLE_IMAGES.ieltsLibrary.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.ieltsLibrary.alt,
  },
  {
    icon: Award,
    title: 'Scholarship Assistance',
    description:
      'Strategic applications across 99+ indexed awards including Chevening, GREAT, DAAD, GKS, Study in Canada, MIS, and merit waivers.',
    accent: 'border-amber-400/35 bg-amber-500/20 text-amber-200',
    image: SERVICE_LIFESTYLE_IMAGES.scholarshipAdvisory.src,
    imageAlt: SERVICE_LIFESTYLE_IMAGES.scholarshipAdvisory.alt,
  },
];

export function HomePage({ onNavigate, onSelectDestination }: HomePageProps) {
  const [explorerFilter, setExplorerFilter] = useState<ExplorerCategory>('all');
  const featuredStories = STUDENT_STORIES.slice(0, 3);

  const visibleExplorerCards = useMemo(() => {
    if (explorerFilter === 'all') return EXPLORER_DESTINATIONS;
    return EXPLORER_DESTINATIONS.filter((d) => d.category === explorerFilter);
  }, [explorerFilter]);

  const scrollToAssessment = () => {
    const el = document.getElementById('book-assessment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="bg-transparent text-white">
      {/* 1. Hero Section (Transparent so fixed flight-route motion graphics shine through) */}
      <section className="relative border-b border-white/10 bg-transparent text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-cyan-300/95">
                Malaysia <span aria-hidden="true">·</span> Europe{' '}
                <span aria-hidden="true">·</span> South Korea{' '}
                <span aria-hidden="true">·</span> China{' '}
                <span aria-hidden="true">·</span> Australia{' '}
                <span aria-hidden="true">·</span> Canada
              </p>

              <h1 className="mt-4 font-display text-[clamp(2.25rem,4.2vw,3.65rem)] leading-[1.08] font-bold tracking-tight text-white [text-wrap:balance]">
                Your Global Campus Awaits – Study Abroad with Experts
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                From university shortlisting, IELTS preparation, and merit scholarships to embassy visa approval, Global Education Expert (GEE) guides international students every step of the way.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('destinations')}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-200 hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <span>Explore Destinations</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={scrollToAssessment}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/20 bg-[#0B1120]/60 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:bg-white/10 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Book Free Assessment
                </button>
              </div>
            </div>

            {/* Real Campus & Airport Travel Photography Collage inside Frosted Glass Frames */}
            <div className="lg:col-span-6">
              <div className="relative grid gap-4 sm:grid-cols-12 lg:min-h-[390px]">
                {/* Primary Card: Smiling International University Students on Campus */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0B1120]/60 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:col-span-7 lg:col-span-8">
                  <div className="relative aspect-[4/3] h-full w-full overflow-hidden">
                    <ResilientImage
                      src={HERO_COLLAGE_IMAGES.campusStudents.src}
                      alt={HERO_COLLAGE_IMAGES.campusStudents.alt}
                      fallbackSrc={PHOTO_FALLBACK_SRC}
                      fallbackTitle="International Campus Life"
                      loading="eager"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                        <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>
                          <AnimatedCounter value={576} immediate /> Partner Universities
                        </span>
                      </div>
                      <p className="mt-1 font-display text-sm font-bold text-white sm:text-base">
                        Sunny Global Campuses · ALL Study Levels
                      </p>
                      <p className="mt-0.5 text-xs text-slate-300">
                        Malaysia, UK, Europe, Australia, Canada &amp; East Asia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Secondary Stacked Card: International Airport Departure & Scholarships */}
                <div className="flex flex-col gap-4 sm:col-span-5 lg:col-span-4">
                  <div className="group relative flex-1 overflow-hidden rounded-2xl border border-white/15 bg-[#0B1120]/60 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
                    <div className="relative aspect-[4/3] h-full min-h-[190px] w-full overflow-hidden">
                      <ResilientImage
                        src={HERO_COLLAGE_IMAGES.airportTravel.src}
                        alt={HERO_COLLAGE_IMAGES.airportTravel.alt}
                        fallbackSrc={PHOTO_FALLBACK_SRC}
                        fallbackTitle="Airport Departure & Visa Readiness"
                        loading="eager"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-3.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-300">
                          <Plane className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>Departure Ready</span>
                        </div>
                        <p className="mt-0.5 font-display text-xs font-bold text-white">
                          <AnimatedCounter value="98%" immediate /> Visa Success
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-[#0B1120]/65 px-4 py-3.5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-amber-400/30 bg-amber-400/15 text-amber-300">
                        <Compass className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-white">
                          <AnimatedCounter value="99+" immediate /> Fellowships
                        </p>
                        <p className="text-[11px] text-slate-300">
                          Merit &amp; Govt Grants
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Trust Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 divide-y divide-white/10 rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {TRUST_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="px-5 py-5 transition-colors hover:bg-white/5 sm:px-6"
              >
                <p className="font-display text-2xl font-bold tracking-tight text-white tabular-nums sm:text-3xl">
                  <AnimatedCounter value={metric.value} immediate />
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">{metric.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Destinations Explorer Section (Transparent Wrapper + Landmark Photography Cards) */}
      <section className="mx-auto max-w-7xl bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-cyan-300">
                Destinations Explorer
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                Compare degree pathways, locations, and post-study work rights across continents.
              </h2>
            </div>

            <div
              role="group"
              aria-label="Filter study destinations"
              className="flex flex-wrap items-center gap-1 self-start rounded-lg border border-white/10 bg-[#0B1120]/60 p-1 backdrop-blur-xl"
            >
              {EXPLORER_FILTERS.map((filter) => {
                const active = explorerFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setExplorerFilter(filter.id)}
                    className={`min-h-[38px] rounded-md px-3 py-1.5 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
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
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleExplorerCards.map((dest, idx) => (
            <ScrollReveal key={dest.id} staggerIndex={idx % 3} className="h-full">
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(6,182,212,0.16)]">
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <ResilientImage
                      src={dest.image}
                      alt={dest.imageAlt}
                      fallbackSrc={PHOTO_FALLBACK_SRC}
                      fallbackTitle={dest.country}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                      <div>
                        <p className="text-xs font-medium text-cyan-300">
                          {dest.universityLocation}
                        </p>
                        <h3 className="mt-0.5 font-display text-lg font-bold text-white">
                          {dest.country}
                        </h3>
                      </div>
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {dest.flag}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-semibold text-amber-300">
                      {dest.programsLabel}
                    </p>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {dest.highlight}
                    </p>

                    <div className="mt-4 border-t border-white/10 pt-3 text-xs text-slate-400">
                      <p className="font-semibold text-slate-200">Popular Universities:</p>
                      <p className="mt-0.5 leading-relaxed">{dest.popularUniversities}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
                  <span className="text-[11px] font-medium text-slate-400">
                    {dest.visaPostStudy}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectDestination) {
                        onSelectDestination(dest.targetRegion);
                      }
                      onNavigate('destinations');
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-300 transition-colors hover:text-white whitespace-nowrap shrink-0"
                  >
                    <span>Explore</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 underline-offset-4 hover:text-white hover:underline whitespace-nowrap shrink-0"
          >
            <span>
              Browse All <AnimatedCounter value={576} /> Indexed Universities &amp; Flagship Programs
            </span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </ScrollReveal>
      </section>

      {/* 3. Core Services Section (Transparent Wrapper + Lifestyle Photography Cards) */}
      <section className="border-y border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Core Services
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                  End-to-end study abroad advisory from IELTS preparation to visa approval.
                </h2>
              </div>

              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 bg-[#0B1120]/60 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-400/50 hover:bg-white/10 whitespace-nowrap shrink-0"
              >
                <span>
                  Explore Services &amp; <AnimatedCounter value={99} /> Scholarships
                </span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={pillar.title} staggerIndex={idx} className="h-full">
                  <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(6,182,212,0.14)]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        fallbackSrc={PHOTO_FALLBACK_SRC}
                        fallbackTitle={pillar.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                        aria-hidden="true"
                      />
                      <div
                        className={`absolute bottom-3 left-4 flex h-9 w-9 items-center justify-center rounded-lg border backdrop-blur-md ${pillar.accent}`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Partner Universities & Institutions Grid (Transparent Wrapper) */}
      <section
        id="partners"
        className="mx-auto max-w-7xl bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-cyan-300">
                Global Institutional Network
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                Partner universities and recognized degree networks worldwide.
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 underline-offset-4 hover:text-white hover:underline whitespace-nowrap shrink-0"
            >
              <span>
                View Full <AnimatedCounter value={576} />-University Directory
              </span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {GLOBAL_PARTNER_GROUPS.map((group, idx) => (
            <ScrollReveal key={group.region} staggerIndex={idx % 2} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(6,182,212,0.14)]">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-indigo-400/25 bg-indigo-500/15 text-indigo-300">
                      <Building2 className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white">
                      {group.region}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-cyan-300 tabular-nums">
                    <AnimatedCounter value={group.universities.length} /> Partners
                  </span>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {group.universities.map((uni) => (
                    <div
                      key={uni}
                      className="rounded-lg border border-white/10 bg-[#0B1120]/55 px-3.5 py-2.5 text-xs font-medium text-slate-200 transition-colors hover:border-indigo-400/40"
                    >
                      {uni}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Student Testimonials / Success Stories (Genuine Graduate Portraits + Dark Scrim) */}
      <section className="border-y border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <ScrollReveal>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-wide text-cyan-300">
                  Verified Admissions Outcomes
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                  Recent student placements and visa approvals across four continents.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('stories')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 underline-offset-4 hover:text-white hover:underline whitespace-nowrap shrink-0"
              >
                <span>Read All Student Stories</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredStories.map((story, idx) => (
              <ScrollReveal key={story.id} staggerIndex={idx} className="h-full">
                <blockquote className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(6,182,212,0.14)]">
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <ResilientImage
                        src={story.portraitImage}
                        alt={story.portraitAlt}
                        fallbackSrc={PHOTO_FALLBACK_SRC}
                        fallbackTitle={story.studentName}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                        aria-hidden="true"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-xs font-semibold text-amber-300">
                          {story.outcomeMetric}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pt-4">
                      <p className="text-sm leading-relaxed text-slate-200">
                        “{story.quote}”
                      </p>
                    </div>
                  </div>

                  <footer className="mt-6 border-t border-white/10 px-6 py-4">
                    <p className="font-display text-sm font-semibold text-white">
                      {story.studentName}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-300">
                      From {story.originCountry} · {story.university}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {story.program} · {story.intakeYear}
                    </p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. High-Converting Lead Capture / Consultation Booking Form (Transparent Wrapper) */}
      <section
        id="book-assessment"
        className="mx-auto max-w-7xl bg-transparent px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <ScrollReveal className="lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wide text-cyan-300">
                Start Your Application
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-3xl">
                Speak directly with a GEE counselor for your 2026 or 2027 intake.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Submit your academic details for a tailored university shortlist, scholarship eligibility audit, and transparent student visa roadmap.
              </p>

              <div className="mt-7 space-y-4 rounded-xl border border-white/10 bg-[#0B1120]/60 p-5 text-sm backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">Phone &amp; WhatsApp Lines</p>
                    <p className="text-slate-300">
                      Chittagong:{' '}
                      <a
                        href="tel:+8801717149453"
                        className="font-mono text-xs text-cyan-300 hover:text-white"
                      >
                        +880 1717149453
                      </a>
                    </p>
                    <p className="text-slate-300">
                      Dhaka:{' '}
                      <a
                        href="tel:+8801717149453"
                        className="font-mono text-xs text-cyan-300 hover:text-white"
                      >
                        +880 1717149453
                      </a>
                    </p>
                    <p className="text-slate-300">
                      Khulna:{' '}
                      <a
                        href="tel:+8801686395927"
                        className="font-mono text-xs text-cyan-300 hover:text-white"
                      >
                        +880 1686395927
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">Counseling Email</p>
                    <a
                      href={`mailto:${CONSULTATION_EMAIL}`}
                      className="text-cyan-300 underline-offset-4 hover:text-white hover:underline"
                    >
                      {CONSULTATION_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-4">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  <div className="space-y-2 text-xs text-slate-300">
                    <div>
                      <p className="font-semibold text-white">Counseling Hours</p>
                      <p className="mt-1 font-medium text-slate-200">Office Counseling Hours:</p>
                      <p>Saturday – Thursday: 10:00 AM – 6:30 PM</p>
                    </div>
                    <div>
                      <p className="font-medium text-slate-200">
                        Our online Counseling Hours:
                      </p>
                      <p>Sunday - Saturday: 10:00 AM – 6:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="pt-1 text-xs text-slate-400">
                  <p>{COMPANY_CONTACT.offices[0].addressLines.join(', ')}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal staggerIndex={1} className="lg:col-span-7">
            <AssessmentFormCard />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
