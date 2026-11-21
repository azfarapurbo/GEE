import { PageId } from './Navbar';
import { COMPANY_CONTACT } from '../data/consultancyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const year = Math.max(2027, new Date().getFullYear());

  return (
    <footer className="border-t border-slate-200 bg-[#0B172A] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="font-display text-lg font-bold tracking-tight text-white">
              Global Education Expert
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Study abroad consultancy helping international students secure university admissions, merit scholarships, and student visas worldwide.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <a
                href={COMPANY_CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Facebook
              </a>
              <a
                href={COMPANY_CONTACT.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                YouTube
              </a>
              <a
                href={COMPANY_CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-white hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Services &amp; Scholarships
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('destinations')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Destinations &amp; Partners
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('stories')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="text-slate-300 transition-colors hover:text-white"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Chittagong Office
            </h3>
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              {COMPANY_CONTACT.offices[0].addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={COMPANY_CONTACT.offices[0].phoneHref}
                  className="font-mono text-xs text-amber-400 hover:text-amber-300"
                >
                  {COMPANY_CONTACT.offices[0].phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-xs text-slate-300 underline-offset-4 hover:text-white hover:underline"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              Khulna Office
            </h3>
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              {COMPANY_CONTACT.offices[1].addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={COMPANY_CONTACT.offices[1].phoneHref}
                  className="font-mono text-xs text-amber-400 hover:text-amber-300"
                >
                  {COMPANY_CONTACT.offices[1].phoneDisplay}
                </a>
              </p>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Book a Free Consultation
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('admin')}
                  className="text-xs text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Consultant Admin Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {year} Global Education Expert. All rights reserved.</p>
          <p>Transparent university admissions &amp; student visa guidance.</p>
        </div>
      </div>
    </footer>
  );
}
