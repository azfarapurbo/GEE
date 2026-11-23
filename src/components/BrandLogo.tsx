interface BrandLogoProps {
  size?: 'nav' | 'footer';
  showWordmark?: boolean;
}

function GeeEmblemSvg({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="geeCapGlobe" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="55%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        <linearGradient id="geeWarmAccent" x1="16" y1="16" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>

      {/* Mortarboard Diamond */}
      <path
        d="M32 7L54 14.5L32 22L10 14.5L32 7Z"
        fill="url(#geeCapGlobe)"
      />
      {/* Cap Crown */}
      <path
        d="M19 18.8V24.6C23.1 22.8 27.5 21.8 32 21.8C36.5 21.8 40.9 22.8 45 24.6V18.8L32 23.2L19 18.8Z"
        fill="url(#geeCapGlobe)"
        opacity="0.92"
      />
      {/* Tassel Cord & Pendant */}
      <path
        d="M50 15.8V25.2"
        stroke="url(#geeWarmAccent)"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="50" cy="25.8" r="1.7" fill="url(#geeWarmAccent)" />
      <path
        d="M50 27.2L47.8 33.4H52.2L50 27.2Z"
        fill="url(#geeWarmAccent)"
      />

      {/* Globe Outer Ring */}
      <circle
        cx="32"
        cy="34.8"
        r="12.2"
        stroke="url(#geeCapGlobe)"
        strokeWidth="2.2"
      />
      {/* Globe Vertical Meridians */}
      <line
        x1="32"
        y1="22.8"
        x2="32"
        y2="46.8"
        stroke="url(#geeCapGlobe)"
        strokeWidth="1.7"
      />
      <ellipse
        cx="32"
        cy="34.8"
        rx="6"
        ry="12.2"
        stroke="url(#geeCapGlobe)"
        strokeWidth="1.6"
      />
      {/* Globe Latitudes */}
      <line
        x1="20"
        y1="34.8"
        x2="44"
        y2="34.8"
        stroke="url(#geeCapGlobe)"
        strokeWidth="1.7"
      />
      <path
        d="M21.8 29.2C25 30.8 28.4 31.5 32 31.5C35.6 31.5 39 30.8 42.2 29.2"
        stroke="url(#geeCapGlobe)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M21.8 40.4C25 38.8 28.4 38.1 32 38.1C35.6 38.1 39 38.8 42.2 40.4"
        stroke="url(#geeCapGlobe)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Rounded Book Spine & Binding Base */}
      <path
        d="M46.5 48.2H21.2C18.3 48.2 16 50.4 16 53.1C16 55.8 18.3 58 21.2 58H46.5"
        stroke="url(#geeCapGlobe)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Book Pages Stack */}
      <rect
        x="19.5"
        y="50.5"
        width="26.2"
        height="5.2"
        rx="2.4"
        fill="url(#geeWarmAccent)"
      />
      <line
        x1="22"
        y1="52.3"
        x2="44"
        y2="52.3"
        stroke="#0B1120"
        strokeOpacity="0.35"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="54"
        x2="44"
        y2="54"
        stroke="#0B1120"
        strokeOpacity="0.35"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLogo({
  size = 'nav',
  showWordmark = true,
}: BrandLogoProps) {
  const isFooter = size === 'footer';

  return (
    <span className="group inline-flex items-center gap-3 whitespace-nowrap shrink-0">
      <span
        className={`relative flex shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-gradient-to-br from-[#4F46E5]/20 via-[#0B1120]/80 to-[#06B6D4]/20 shadow-[0_0_20px_rgba(6,182,212,0.2)] backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/55 group-hover:shadow-[0_0_28px_rgba(6,182,212,0.35)] ${
          isFooter ? 'h-14 w-14 p-2' : 'h-10 w-10 p-1.5'
        }`}
      >
        <GeeEmblemSvg className="h-full w-full drop-shadow-[0_2px_8px_rgba(6,182,212,0.28)]" />
      </span>

      {showWordmark && (
        <span
          className={`font-display font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent ${
            isFooter ? 'text-lg' : 'hidden text-base sm:inline lg:text-lg'
          }`}
        >
          Global Education Expert
        </span>
      )}
    </span>
  );
}
