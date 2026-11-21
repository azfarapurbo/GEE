import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export type PageId =
  | 'home'
  | 'services'
  | 'destinations'
  | 'stories'
  | 'about'
  | 'contact'
  | 'admin';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'stories', label: 'Stories' },
  { id: 'about', label: 'About' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/90 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single clean brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-display text-lg font-bold tracking-tight text-[#0F213E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F213E]"
        >
          Global Education Expert
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const active = currentPage === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F213E] ${
                  active
                    ? 'text-[#0F213E]'
                    : 'text-slate-600 hover:text-[#0F213E]'
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#B45309]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden rounded-lg bg-[#0F213E] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#19335D] whitespace-nowrap shrink-0 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F213E]"
          >
            Book Consultation
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F213E]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    active
                      ? 'bg-slate-100 text-[#0F213E]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span className="text-xs font-medium text-[#B45309]">Current</span>
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="mt-2 min-h-[44px] w-full rounded-lg bg-[#0F213E] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#19335D]"
            >
              Book Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
