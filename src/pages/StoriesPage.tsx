import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PageId } from '../components/Navbar';
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
    <div className="bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-wide text-[#92400E]">
            Student Success Stories
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-[#0F213E] [text-wrap:balance] sm:text-4xl">
            Verified admissions, Erasmus Mundus awards, and international placements.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Read verified alumni reviews from students placed by Global Education Expert across Europe, the United States, the United Kingdom, and international medical universities.
          </p>

          <div
            role="group"
            aria-label="Filter stories by destination"
            className="mt-8 inline-flex flex-wrap items-center gap-1 rounded-lg bg-slate-100 p-1"
          >
            {STORY_FILTERS.map((tab) => {
              const active = regionFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRegionFilter(tab.id)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-white text-[#0F213E] shadow-sm'
                      : 'text-slate-600 hover:text-[#0F213E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="font-semibold text-[#92400E]">
                    {story.destinationLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{story.degreeLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{story.intakeYear}</span>
                </div>

                <p className="mt-3 font-display text-sm font-semibold text-[#0F213E]">
                  {story.outcomeMetric}
                </p>

                <blockquote className="mt-3 text-sm leading-relaxed text-slate-700">
                  “{story.quote}”
                </blockquote>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="font-display text-base font-semibold text-[#0F213E]">
                  {story.studentName}
                </p>
                <p className="mt-0.5 text-xs text-slate-600">
                  Origin: {story.originCountry} · Admitted to {story.university}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{story.program}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-xl bg-[#0F213E] px-8 py-10 text-white sm:flex sm:items-center sm:justify-between">
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
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 whitespace-nowrap shrink-0 sm:mt-0"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
