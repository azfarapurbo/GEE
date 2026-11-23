import { useState } from 'react';
import { ArrowRight, Camera, User } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { PageId } from '../components/Navbar';
import { ScrollReveal } from '../components/ScrollReveal';
import { STUDENT_STORIES } from '../data/consultancyData';

interface StoriesPageProps {
  onNavigate: (page: PageId) => void;
}

const STORY_FILTERS: {
  id: 'all' | 'europe' | 'usa' | 'uk' | 'east-asia';
  label: string;
}[] = [
  { id: 'all', label: 'All Outcomes' },
  { id: 'europe', label: 'Europe' },
  { id: 'usa', label: 'USA' },
  { id: 'uk', label: 'United Kingdom' },
  { id: 'east-asia', label: 'Rest of World' },
];

export function StoriesPage({ onNavigate }: StoriesPageProps) {
  const [regionFilter, setRegionFilter] = useState<
    'all' | 'europe' | 'usa' | 'uk' | 'east-asia'
  >('all');

  const stories =
    regionFilter === 'all'
      ? STUDENT_STORIES
      : STUDENT_STORIES.filter((s) => s.destinationId === regionFilter);

  return (
    <div className="bg-transparent text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-cyan-300">
            Student Success Stories
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            Verified admissions, Erasmus Mundus awards, and international placements.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Read verified alumni reviews from students placed by Global Education Expert across Europe, the United States, the United Kingdom, and international medical universities.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-white tabular-nums">
                <AnimatedCounter value="500+" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Students Placed Globally
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
              <p className="font-display text-2xl font-bold text-cyan-300 tabular-nums">
                <AnimatedCounter value="98%" immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Visa Success Rate
              </p>
            </div>
            <div className="col-span-2 rounded-xl border border-white/10 bg-[#0B1120]/60 px-5 py-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 sm:col-span-1">
              <p className="font-display text-2xl font-bold text-amber-300 tabular-nums">
                <AnimatedCounter value={STUDENT_STORIES.length} immediate />
              </p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Featured Alumni Reviews
              </p>
            </div>
          </div>

          <div
            role="group"
            aria-label="Filter stories by destination"
            className="mt-8 inline-flex flex-wrap items-center gap-1 rounded-lg border border-white/10 bg-[#0B1120]/60 p-1 backdrop-blur-xl"
          >
            {STORY_FILTERS.map((tab) => {
              const active = regionFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRegionFilter(tab.id)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] text-white shadow-sm'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl bg-transparent px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, idx) => (
            <ScrollReveal key={story.id} staggerIndex={idx % 3} className="h-full">
              <article className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-[#0B1120]/60 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10">
                <div>
                  {/* Blank Photo Slot Ready for Future Student Portrait */}
                  <div className="relative aspect-[16/10] w-full border-b border-white/10 bg-[#0B1120]/70 p-4">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-cyan-400/25 bg-white/[0.02] p-4 text-center">
                      <div className="flex items-center gap-1.5 text-cyan-300/75">
                        <User className="h-5 w-5" aria-hidden="true" />
                        <Camera className="h-4 w-4 text-indigo-300/75" aria-hidden="true" />
                      </div>
                      <p className="mt-2 text-xs font-medium text-slate-400">
                        Student Photo — Upload Slot
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pt-5">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <span className="font-semibold text-cyan-300">
                        {story.destinationLabel}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{story.degreeLevel}</span>
                    </div>
                    <p className="mt-1.5 font-display text-sm font-semibold text-amber-300">
                      {story.outcomeMetric}
                    </p>
                    <blockquote className="mt-3 text-sm leading-relaxed text-slate-200">
                      “{story.quote}”
                    </blockquote>
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 px-6 py-4">
                  <p className="font-display text-base font-semibold text-white">
                    {story.studentName}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Origin: {story.originCountry} · Admitted to {story.university}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    {story.program} · {story.intakeYear}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-14 rounded-xl border border-white/10 bg-[#0B1120]/60 px-8 py-10 text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Start building your own admission case
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Share your target degree and preferred country in a free 30-minute consultation session.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-all hover:shadow-[0_0_24px_rgba(6,182,212,0.55)] whitespace-nowrap shrink-0 sm:mt-0"
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
