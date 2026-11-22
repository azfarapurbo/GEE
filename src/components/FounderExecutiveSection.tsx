import { useState } from 'react';
import { Award, Briefcase, Camera, ExternalLink, Globe2, User } from 'lucide-react';
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
                      alt="Samir Rahman — Founder & Owner of Global Education Expert"
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

            {/* 2. Profile Header, LinkedIn CTA, Overview Bio & Ecosystem Badges */}
            <div className="min-w-0 flex-1">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-cyan-300">
                    Meet Our Founder &amp; Owner
                  </p>
                  <h2
                    id="founder-profile-heading"
                    className="mt-1.5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                  >
                    Samir Rahman
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed font-medium text-amber-300">
                    Founder &amp; Owner, Global Education Expert | Director of Operations, Sunshine Education Group | MSc, London School of Economics (LSE)
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

              {/* 3. Authoritative Executive Overview */}
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                <p>
                  An alumnus of the London School of Economics (LSE), Samir Rahman leads Global Education Expert and serves as Director of Operations at Sunshine Education Group—overseeing Chattogram’s oldest international school (est. 1985) and pioneering global curricula including Cambridge (CAIE), Pearson Edexcel, and Western Australian (WACE) programs.
                </p>
                <p>
                  As a longtime College Board SAT Center Supervisor (Center #74108) and senior university counselor, he has guided students to secure admissions into world-renowned institutions including Cornell, UCL, NYU, University of Melbourne, HKUST, and KAIST, alongside top engineering universities like BUET.
                </p>
              </div>

              {/* 5. Venturing & Ed-Tech Innovation Badges */}
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
          </div>

          {/* 4. Key Authority & Diplomatic Highlights (3-Column Glass Cards with Animated Counters) */}
          <div className="mt-8 grid gap-5 border-t border-white/10 pt-8 md:grid-cols-3">
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
                Director of Operations at Sunshine Education Group &amp; former Principal of Sunshine Grammar School.
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
                <Globe2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-display text-xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={3} /> Diplomatic Missions
                </span>
              </div>
              <h3 className="mt-2 font-display text-sm font-semibold text-amber-300">
                International University Delegate
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Selected by the High Commissions of Australia and Canada for the Austrade Mission 2017, South Asia Education Mission to Australia 2018, and Atlantic Canada FAM Tour 2023—visiting G8 Australian and top Canadian public universities.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
