import { ArrowRight } from 'lucide-react';
import { PageId } from '../components/Navbar';
import { ResilientImage } from '../components/ResilientImage';
import {
  CORE_SERVICES,
  HERO_IMAGE,
  STUDENT_STORIES,
  STUDY_DESTINATIONS,
  TRUST_METRICS,
} from '../data/consultancyData';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectDestination?: (
    destId: 'canada' | 'usa' | 'uk' | 'australia' | 'europe' | 'malaysia' | 'east-asia'
  ) => void;
}

export function HomePage({ onNavigate, onSelectDestination }: HomePageProps) {
  const featuredStories = STUDENT_STORIES.slice(0, 3);
  const homeDestinations = STUDY_DESTINATIONS.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="text-xs font-medium tracking-wide text-slate-600">
                Canada <span aria-hidden="true">·</span> USA{' '}
                <span aria-hidden="true">·</span> UK{' '}
                <span aria-hidden="true">·</span> Australia{' '}
                <span aria-hidden="true">·</span> Europe{' '}
                <span aria-hidden="true">·</span> Malaysia
              </p>

              <h1
                className="mt-4 font-display font-bold tracking-tight text-[#0F213E] [text-wrap:balance]"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', lineHeight: 1.08 }}
              >
                University admissions and student visas, guided without guesswork.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Global Education Expert advises international students from course shortlisting and scholarship applications through embassy visa compliance and arrival readiness.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F213E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#19335D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F213E]"
                >
                  Book a Free Consultation
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('destinations')}
                  className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#0F213E] underline-offset-4 transition-colors hover:text-[#B45309] hover:underline whitespace-nowrap shrink-0"
                >
                  <span>Explore Study Destinations</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                <ResilientImage
                  src={HERO_IMAGE}
                  alt="International graduate students walking across a sunlit university campus quadrangle"
                  fallbackTitle="Global Education Expert — International Campus Pathways"
                  className="aspect-[16/9] h-full w-full object-cover lg:aspect-auto"
                />
              </div>
            </div>
          </div>

          {/* Full-Width 4-Column Trust Metrics Strip */}
          <div className="mt-12 grid grid-cols-2 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-slate-50/70 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="px-5 py-5 sm:px-6">
                <p className="font-display text-2xl font-bold tracking-tight text-[#0F213E] tabular-nums sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs text-slate-600">{metric.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Study Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#92400E]">
              Featured Study Regions
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-3xl">
              Compare tuition affordability, post-study work rights, and university pathways.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('destinations')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F213E] underline-offset-4 hover:text-[#B45309] hover:underline whitespace-nowrap shrink-0"
          >
            <span>Browse All 854 University Programs</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homeDestinations.map((dest) => (
            <article
              key={dest.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition-colors hover:border-slate-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <ResilientImage
                  src={dest.image}
                  alt={dest.imageAlt}
                  fallbackTitle={dest.regionLabel}
                  className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600">
                    <span className="font-semibold text-[#92400E]">{dest.regionLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>Tuition: {dest.tuitionRange}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-[#0F213E]">
                    {dest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {dest.tagline}
                  </p>
                  <p className="mt-3 text-xs font-semibold text-[#92400E]">
                    Programs: {dest.levelsSupported.join(' · ')}
                  </p>
                  <p className="mt-1.5 text-xs font-medium text-slate-700">
                    Post-Study Work: {dest.postStudyWork}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs text-slate-600">
                    Intakes: {dest.intakeWindows}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onSelectDestination) {
                        onSelectDestination(dest.id);
                      }
                      onNavigate('destinations');
                    }}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F213E] transition-colors hover:text-[#B45309] whitespace-nowrap shrink-0"
                  >
                    <span>Explore Pathway</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Core Services Editorial Overview */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold tracking-wide text-[#92400E]">
                End-to-End Advisory
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-3xl">
                Five structured stages from profile audit to campus arrival.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Every student receives a named senior counselor, verified document checklists, and transparent tuition and visa cost projections before paying any university deposit.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F213E] transition-colors hover:bg-slate-50 whitespace-nowrap shrink-0"
              >
                <span>Inspect Full Service Breakdown</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="divide-y divide-slate-200 lg:col-span-8">
              {CORE_SERVICES.map((service) => (
                <div
                  key={service.number}
                  className="py-5 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                    <h3 className="font-display text-lg font-semibold text-[#0F213E]">
                      <span className="mr-2 font-mono text-sm font-medium text-[#B45309] tabular-nums">
                        {service.number}
                      </span>
                      {service.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap shrink-0">
                      {service.stage} · {service.timeline}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                    {service.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adjacent Proof: Student Success Stories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-[#92400E]">
              Verified Admissions Outcomes
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-3xl">
              Recent student placements across four continents.
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('stories')}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F213E] underline-offset-4 hover:text-[#B45309] hover:underline whitespace-nowrap shrink-0"
          >
            <span>Read All Student Stories</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featuredStories.map((story) => (
            <blockquote
              key={story.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6"
            >
              <div>
                <p className="text-xs font-medium text-[#92400E]">
                  {story.outcomeMetric}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  “{story.quote}”
                </p>
              </div>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-display text-sm font-semibold text-[#0F213E]">
                  {story.studentName}
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  From {story.originCountry} · {story.university}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {story.program} · {story.intakeYear}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Bottom Conversion Band */}
        <div className="mt-16 rounded-xl bg-[#0F213E] px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white [text-wrap:balance]">
              Ready to plan your 2026 or 2027 university intake?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Schedule a 30-minute consultation with a senior advisor to evaluate your academic profile, eligible scholarships, and visa timeline.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
