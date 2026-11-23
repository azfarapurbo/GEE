import { useState } from 'react';
import {
  Award,
  BadgeCheck,
  Briefcase,
  Camera,
  ExternalLink,
  Globe2,
  GraduationCap,
  ShieldCheck,
  User,
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

const FOUNDER_PRIMARY_SRC = `${import.meta.env.BASE_URL}assets/aistudio/Gemini_Generated_Image_lcactulcactulcac_7d8fe3db.jpg`;
const FOUNDER_SECONDARY_SRC = `${import.meta.env.BASE_URL}images/founder-samir-rahman.jpg`;

function LinkedInIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const EDUCATION_CREDENTIALS = [
  'MSc, Political Economy & Economic History — The London School of Economics and Political Science (LSE)',
  'BSc, Development Economics, International Development, Political Economy & Area Studies — SOAS, University of London',
];

const LEADERSHIP_EXPERIENCE = [
  'Director of Operations, Sunshine Education Group (2011 – Present)',
  'Principal, Sunshine Grammar School (2022 – 2026)',
  'SAT Test Center Supervisor, College Board — Center #74108 (2016 – Present)',
  'Student Counsellor, Sunshine Grammar School (2014 – 2022) — Guided students into top global universities including Cornell, UCL, University of Manchester, NYU, HKUST, University of Melbourne, KAIST, BUET, IUT, and CUET.',
];

const INTERNATIONAL_DELEGATIONS = [
  'Delegate, Atlantic Canada FAM Tour — Canadian High Commission (2023)',
  'Delegate, South Asia Education Mission to Australia — Australian High Commission (2018)',
  'Delegate, Austrade High School Mission (South Asia) — Australian High Commission (2017)',
];

const PROFESSIONAL_CERTIFICATIONS = [
  'UK Agent & Counsellor Training — Certification Award',
  'Ethical Business Practices in International Student Recruitment',
  'ApplyBoard Counsellor Course — Ireland',
];

const KEY_PLACEMENTS = [
  'College Board Center #74108',
  'Cornell',
  'UCL',
  'University of Manchester',
  'NYU',
  'HKUST',
  'University of Melbourne',
  'KAIST',
  'BUET',
  'IUT',
  'CUET',
];

const VENTURE_ECOSYSTEM = [
  { id: 'gee', label: 'Global Education Expert' },
  { id: 'seg', label: 'Sunshine Education Group' },
  { id: 'sebwa', label: 'SEBWA (Western Australia Curriculum)' },
  { id: 'ysi', label: 'YSI Bangla & BePro Ed-Tech', count: '15,000+' },
  { id: 'kings', label: 'Kings Shipping & Trading Co. Ltd.' },
];

export function FounderExecutiveSection() {
  const [imgSrc, setImgSrc] = useState(FOUNDER_PRIMARY_SRC);
  const [triedSecondary, setTriedSecondary] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleImageError = () => {
    if (!triedSecondary) {
      setTriedSecondary(true);
      setImgSrc(FOUNDER_SECONDARY_SRC);
      return;
    }
    setShowPlaceholder(true);
  };

  return (
    <section
      aria-labelledby="founder-profile-heading"
      className="mx-auto max-w-7xl bg-transparent px-4 pt-14 sm:px-6 lg:px-8"
    >
      <ScrollReveal>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/35 sm:p-8 lg:p-10">
          {/* Top Executive Bio Split */}
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-10">
            {/* 1. Executive Portrait Frame with Gradient Border & Graceful Fallback */}
            <div className="relative mx-auto shrink-0 lg:mx-0">
              <div className="h-44 w-44 rounded-2xl bg-gradient-to-tr from-cyan-400 to-indigo-500 p-1 shadow-[0_0_32px_rgba(6,182,212,0.3)] md:h-56 md:w-56">
                {showPlaceholder ? (
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[12px] border-2 border-dashed border-cyan-400/40 bg-[#0B1120]/80 p-4 text-center">
                    <div className="flex items-center gap-1.5 text-cyan-300">
                      <User className="h-6 w-6" aria-hidden="true" />
                      <Camera className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                    </div>
                    <p className="mt-2.5 text-xs font-medium text-slate-300">
                      Founder Portrait — Upload Photo
                    </p>
                  </div>
                ) : (
                  <div className="group relative h-full w-full overflow-hidden rounded-[12px] bg-[#0B1120]/80">
                    <img
                      src={imgSrc}
                      alt="Samir Rahman — Director of Operations, Sunshine Education Group & Founder of Global Education Expert"
                      onError={handleImageError}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120]/70 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>

              {/* Floating Verified Leadership Badge */}
              <div className="absolute -right-2 -bottom-2.5 rounded-lg border border-cyan-400/40 bg-[#0B1120]/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-cyan-200 shadow-[0_8px_20px_rgba(0,0,0,0.45)] backdrop-blur-md whitespace-nowrap">
                MSc, LSE • Founder
              </div>
            </div>

            {/* 2. Profile Header, LinkedIn CTA, Bio Summary & Key Placement Badges */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-cyan-300">
                    Leadership Spotlight · Founder &amp; Owner
                  </p>
                  <h2
                    id="founder-profile-heading"
                    className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                  >
                    Samir Rahman
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed font-medium text-amber-300">
                    Director of Operations, Sunshine Education Group | Former Principal, Sunshine Grammar School
                  </p>
                </div>

                <a
                  href="https://www.linkedin.com/in/sgr1981/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-lg border border-cyan-400/40 bg-gradient-to-r from-[#4F46E5]/85 to-[#06B6D4]/85 px-4 py-2.5 text-xs font-semibold text-white shadow-[0_0_18px_rgba(6,182,212,0.28)] backdrop-blur-md transition-all duration-200 hover:border-cyan-300 hover:from-[#4F46E5] hover:to-[#06B6D4] hover:shadow-[0_0_26px_rgba(6,182,212,0.5)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  <LinkedInIcon />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
                </a>
              </div>

              {/* Bio Summary */}
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                <p>
                  Samir Rahman has led Sunshine Education&apos;s schools—including Sunshine Grammar School, the oldest international school in Chattogram—and international pathway programs for over 15 years. He has also served as the official College Board SAT Test Center Supervisor at the school since 2016.
                </p>
              </div>

              {/* Key University Placements & Test Center Authority Tags */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs font-semibold tracking-wide text-slate-400">
                  Authorized Test Center &amp; Notable Alumni University Placements
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {KEY_PLACEMENTS.map((badge, index) => (
                    <span
                      key={badge}
                      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium backdrop-blur-md transition-colors ${
                        index === 0
                          ? 'border-amber-400/35 bg-amber-500/10 text-amber-200'
                          : 'border-cyan-400/20 bg-white/5 text-slate-200 hover:border-cyan-400/45 hover:text-white'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Scannable Executive Credentials Grid */}
          <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
            {/* Education */}
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/55 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300">
                <GraduationCap className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-sm font-bold tracking-wide text-white">
                  Education
                </h3>
              </div>
              <ul className="mt-3 space-y-2.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {EDUCATION_CREDENTIALS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership & Counselling Experience */}
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/55 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300">
                <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-sm font-bold tracking-wide text-white">
                  Leadership &amp; Counselling Experience
                </h3>
              </div>
              <ul className="mt-3 space-y-2.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {LEADERSHIP_EXPERIENCE.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* International Delegations */}
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/55 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300">
                <Globe2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-sm font-bold tracking-wide text-white">
                  International Delegations
                </h3>
              </div>
              <ul className="mt-3 space-y-2.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {INTERNATIONAL_DELEGATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Certifications */}
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/55 p-5 backdrop-blur-md">
              <div className="flex items-center gap-2 text-cyan-300">
                <BadgeCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-sm font-bold tracking-wide text-white">
                  Professional Certifications
                </h3>
              </div>
              <ul className="mt-3 space-y-2.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                {PROFESSIONAL_CERTIFICATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Key Authority & Diplomatic Highlights (3-Column Glass Cards with Animated Counters) */}
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <Briefcase className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-display text-xl font-bold text-white tabular-nums">
                  <AnimatedCounter value="15+" /> Years
                </span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold text-amber-300">
                Educational Leadership &amp; Operations
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Director of Operations at Sunshine Education Group (2011 – Present) &amp; former Principal of Sunshine Grammar School (2022 – 2026).
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <Award className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-display text-xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={6} /> Global Accreditations
                </span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold text-amber-300">
                Recognized Test &amp; Curriculum Authority
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                College Board SAT Center #74108, UCAS UK, Cambridge CIE, Pearson Edexcel, SCSA Western Australia, and IDP IELTS Partner School.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <div className="flex items-center gap-2.5 text-cyan-300">
                <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-display text-xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={3} /> Diplomatic Missions
                </span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold text-amber-300">
                International University Delegate
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Canadian High Commission Atlantic Canada FAM Tour (2023), Australian High Commission South Asia Mission (2018), and Austrade Mission (2017).
              </p>
            </div>
          </div>

          {/* 5. Leadership & Ed-Tech Innovation Ecosystem Badges */}
          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-xs font-semibold tracking-wide text-slate-400">
              Leadership &amp; Ed-Tech Innovation Ecosystem
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {VENTURE_ECOSYSTEM.map((item) => (
                <span
                  key={item.id}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/40 hover:bg-white/10 hover:text-white"
                >
                  <span>
                    {item.label}
                    {item.count ? (
                      <>
                        {' '}
                        (<AnimatedCounter value={item.count} /> students tested)
                      </>
                    ) : null}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
