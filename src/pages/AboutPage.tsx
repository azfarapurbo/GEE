import { ArrowRight, ShieldCheck } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ABOUT_OFFICE_IMAGES,
  CONSULTANCY_TEAM,
  EUROPE_COUNTRIES_UNIVERSITIES,
  PHOTO_FALLBACK_SRC,
  TRUST_METRICS,
} from '../data/consultancyData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const TRUST_PRINCIPLES = [
  {
    title: '01. Transparent Financial & Location Breakdowns',
    detail:
      'We present official university locations, living expense baselines, and visa financial proof thresholds upfront before you commit to any application.',
  },
  {
    title: '02. Academic Fit Over Commission Bias',
    detail:
      'Whether a public European university or a Russell Group Master’s fits your goals best, our recommendations follow your academic and career ROI.',
  },
  {
    title: '03. Line-by-Line Visa Compliance Audits',
    detail:
      'Every statement of purpose, sponsor affidavit, EMGS filing, or UKVI CAS preparation undergoes two independent counselor reviews before submission.',
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="bg-transparent text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-cyan-300">
                About Global Education Expert
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
                An admissions advisory built on academic rigor and honest counsel.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Founded to replace high-pressure sales agencies with accountable academic advising, Global Education Expert helps international students gain entry to reputable universities across Malaysia, Europe, the United Kingdom, and East Asia.
              </p>

              <div className="mt-8 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-sm font-semibold text-white">
                    Our Mission
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    Equip every student and family with verified admissions data, scholarship clarity, and disciplined visa preparation.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-sm font-semibold text-white">
                    Our Vision
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                    Be the most trusted cross-border higher education partner connecting emerging talent with global universities.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50">
                <ResilientImage
                  src={ABOUT_OFFICE_IMAGES.officeTeam.src}
                  alt={ABOUT_OFFICE_IMAGES.officeTeam.alt}
                  fallbackSrc={PHOTO_FALLBACK_SRC}
                  fallbackTitle="Global Education Expert Advisory Desk"
                  loading="eager"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-semibold text-cyan-300">
                    Dedicated Counseling Teams
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-white">
                    Collaborative Student Advisory &amp; Admissions Strategy
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {TRUST_METRICS.slice(0, 3).map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <p className="font-display text-2xl font-bold text-white tabular-nums">
                  <AnimatedCounter value={metric.value} immediate />
                </p>
                <p className="mt-1 text-xs font-medium text-slate-300">
                  {metric.label}
                </p>
              </div>
            ))}
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-cyan-300 tabular-nums">
                <AnimatedCounter
                  value={EUROPE_COUNTRIES_UNIVERSITIES.length}
                  immediate
                />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                European Countries Indexed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="mx-auto max-w-7xl bg-transparent px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-cyan-300">
              Advisory Standards
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Why students and parents trust our process.
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {TRUST_PRINCIPLES.map((item, idx) => (
            <ScrollReveal key={item.title} staggerIndex={idx} className="h-full">
              <div className="h-full rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                <ShieldCheck className="h-5 w-5 text-amber-300" aria-hidden="true" />
                <h3 className="mt-3 font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Senior Education Consultants + Student Seminar Feature */}
        <div className="mt-16">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-wide text-cyan-300">
                Advisory Leadership &amp; Seminars
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Meet your regional education consultants.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-8">
            <div className="group grid overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 lg:grid-cols-12">
              <div className="relative overflow-hidden lg:col-span-5">
                <ResilientImage
                  src={ABOUT_OFFICE_IMAGES.studentSeminar.src}
                  alt={ABOUT_OFFICE_IMAGES.studentSeminar.alt}
                  fallbackSrc={PHOTO_FALLBACK_SRC}
                  fallbackTitle="Global Study Seminars & Workshops"
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:aspect-auto"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/40 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7">
                <p className="text-xs font-semibold tracking-wide text-amber-300">
                  University Workshops &amp; Info Sessions
                </p>
                <h3 className="mt-2 font-display text-xl font-bold text-white sm:text-2xl">
                  Interactive student seminars connecting applicants directly with international university pathways.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  Across Chittagong, Khulna, and live virtual halls, our counselors host admission workshops covering SOP writing, scholarship strategy, IELTS readiness, and pre-departure orientation for students and families.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {CONSULTANCY_TEAM.map((member, idx) => (
              <ScrollReveal key={member.name} staggerIndex={idx} className="h-full">
                <article className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-[#0B1120]/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                  <div>
                    <p className="text-xs font-medium text-amber-300">
                      {member.specialization}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-cyan-200">
                      {member.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-400">
                    <p>{member.experience}</p>
                    <p className="mt-1">Languages: {member.languages}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl border border-white/10 bg-[#0B1120]/60 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Speak directly with a regional specialist
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Schedule a 1-on-1 online or in-office consultation at a time that works for your family.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] whitespace-nowrap shrink-0"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
