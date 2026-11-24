import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type PageId =
  | 'home'
  | 'destinations'
  | 'services'
  | 'partners'
  | 'about'
  | 'stories'
  | 'contact'
  | 'admin';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About Us' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1120]/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Official GEX Brand Logo + Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
        >
          <BrandLogo size="nav" showWordmark />
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-4 lg:flex"
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
                className={`relative inline-flex items-center rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${
                  active
                    ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] p-[1px] text-white shadow-[0_0_18px_rgba(6,182,212,0.45)]'
                    : 'px-2.5 py-1.5 text-slate-300 hover:text-cyan-300'
                }`}
              >
                {active ? (
                  <span className="rounded-[7px] bg-[#0B1120]/90 px-3 py-1 text-white">
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA with glowing hover effect + Mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleLinkClick('contact')}
            className="hidden min-h-[40px] items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-4 py-2 text-xs font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-all duration-200 hover:shadow-[0_0_26px_rgba(6,182,212,0.6)] whitespace-nowrap shrink-0 sm:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Book Free Consultation
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-400/50 hover:bg-white/10 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Rich Glassmorphic Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B1120]/60 px-4 py-4 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => {
              const active = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`w-full rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] p-[1px] text-white shadow-[0_0_18px_rgba(6,182,212,0.4)]'
                      : 'flex min-h-[44px] items-center px-3 py-2 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {active ? (
                    <span className="flex min-h-[42px] w-full items-center justify-between rounded-[7px] bg-[#0B1120]/90 px-3 py-2 text-white">
                      <span>{link.label}</span>
                      <span className="text-xs font-medium text-cyan-300">
                        Active
                      </span>
                    </span>
                  ) : (
                    link.label
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleLinkClick('contact')}
              className="mt-2 min-h-[44px] w-full rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_16px_rgba(79,70,229,0.35)] transition-shadow hover:shadow-[0_0_24px_rgba(6,182,212,0.55)]"
            >
              Book Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
