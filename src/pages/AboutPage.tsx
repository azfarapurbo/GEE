import { ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import { ABOUT_ADVISORY_IMAGE, CONSULTANCY_TEAM } from '../data/consultancyData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

const TRUST_PRINCIPLES = [
  {
    title: '01. Transparent Financial & Tuition Breakdowns',
    detail:
      'We present official university fee schedules, living expense baselines, and visa financial proof thresholds upfront before you commit to any application.',
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
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                About Global Education Expert
              </p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-4xl">
                An admissions advisory built on academic rigor and honest counsel.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Founded to replace high-pressure sales agencies with accountable academic advising, Global Education Expert helps international students gain entry to reputable universities across Malaysia, Europe, the United Kingdom, and East Asia.
              </p>

              <div className="mt-8 grid gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-sm font-semibold text-[#0F213E]">
                    Our Mission
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    Equip every student and family with verified admissions data, scholarship clarity, and disciplined visa preparation.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-sm font-semibold text-[#0F213E]">
                    Our Vision
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    Be the most trusted cross-border higher education partner connecting emerging talent with global universities.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={ABOUT_ADVISORY_IMAGE}
                  alt="Senior international education consultant advising a prospective student over university prospectuses"
                  fallbackTitle="Global Education Expert Advisory Desk"
                  className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-[#92400E]">
            Advisory Standards
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E] sm:text-3xl">
            Why students and parents trust our process.
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {TRUST_PRINCIPLES.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <ShieldCheck className="h-5 w-5 text-[#B45309]" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-[#0F213E]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Senior Education Consultants */}
        <div className="mt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#92400E]">
              Advisory Leadership
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E] sm:text-3xl">
              Meet your regional education consultants.
            </h2>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {CONSULTANCY_TEAM.map((member) => (
              <article
                key={member.name}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6"
              >
                <div>
                  <p className="text-xs font-medium text-[#92400E]">
                    {member.specialization}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#0F213E]">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <p>{member.experience}</p>
                  <p className="mt-1">Languages: {member.languages}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-xl bg-[#0F213E] p-8 text-white sm:flex-row sm:items-center">
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
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 whitespace-nowrap shrink-0"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
