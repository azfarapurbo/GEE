import { BrandLogo } from './BrandLogo';
import { PageId } from './Navbar';
import { COMPANY_CONTACT } from '../data/consultancyData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const QUICK_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'destinations', label: 'Destinations & Flagship Programs' },
  { id: 'services', label: 'Services & Scholarships' },
  { id: 'partners', label: 'Partner Universities' },
  { id: 'stories', label: 'Success Stories' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact & Consultation' },
];

export function Footer({ onNavigate }: FooterProps) {
  const year = Math.max(2027, new Date().getFullYear());

  return (
    <footer className="border-t border-white/10 bg-[#0B1120]/60 backdrop-blur-xl text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <BrandLogo size="footer" showWordmark={false} />
            <p className="mt-4 font-display text-base font-bold tracking-tight text-white">
              Global Education Expert
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Study abroad consultancy helping international students secure university admissions, merit scholarships, and student visas worldwide.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-cyan-300">
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

          {/* Column 2: Perfectly Left-Aligned Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex w-full flex-col items-start space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="block w-full text-left text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Chittagong & Dhaka Desks */}
          <div className="flex flex-col items-start">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Chittagong &amp; Dhaka Desks
            </h3>
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              {COMPANY_CONTACT.offices[0].addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2 text-xs text-slate-400">
                Chittagong &amp; Dhaka Line:
              </p>
              <p>
                <a
                  href={COMPANY_CONTACT.offices[0].phoneHref}
                  className="font-mono text-xs text-cyan-300 hover:text-white"
                >
                  {COMPANY_CONTACT.offices[0].phoneDisplay}
                </a>
              </p>
              <p className="pt-1">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-xs text-slate-300 underline-offset-4 hover:text-white hover:underline"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Khulna Office & Counseling Hours */}
          <div className="flex flex-col items-start">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Khulna Office &amp; Hours
            </h3>
            <div className="mt-4 space-y-1 text-sm text-slate-300">
              {COMPANY_CONTACT.offices[1].addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={COMPANY_CONTACT.offices[1].phoneHref}
                  className="font-mono text-xs text-cyan-300 hover:text-white"
                >
                  {COMPANY_CONTACT.offices[1].phoneDisplay}
                </a>
              </p>
              <div className="space-y-1 pt-2 text-xs text-slate-400">
                <p className="font-medium text-slate-200">Office Counseling Hours:</p>
                <p>Saturday – Thursday: 10:00 AM – 6:30 PM</p>
                <p className="pt-1 font-medium text-slate-200">
                  Our online Counseling Hours:
                </p>
                <p>Sunday - Saturday: 10:00 AM – 6:30 PM</p>
              </div>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="block text-left font-medium text-amber-400 transition-colors hover:text-amber-300"
                >
                  Book a Free Consultation
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('admin')}
                  className="block text-left text-xs text-slate-400 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  Consultant Admin Portal
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {year} Global Education Expert. All rights reserved.</p>
          <p>Transparent university admissions &amp; student visa guidance.</p>
        </div>
      </div>
    </footer>
  );
}
