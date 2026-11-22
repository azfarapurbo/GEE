interface BrandLogoProps {
  size?: 'nav' | 'footer';
  showWordmark?: boolean;
}

export function BrandLogo({
  size = 'nav',
  showWordmark = true,
}: BrandLogoProps) {
  const isFooter = size === 'footer';

  return (
    <span className="inline-flex items-center gap-3 whitespace-nowrap shrink-0">
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white ring-1 ring-white/25 shadow-[0_0_16px_rgba(6,182,212,0.18)] ${
          isFooter ? 'h-16 w-[112px]' : 'h-12 w-[82px]'
        }`}
      >
        <img
          src="/assets/aistudio/GEE_OFFICIAL_LOGO_832861b1.jpeg"
          alt="Global Education Expert Official Logo"
          referrerPolicy="no-referrer"
          className={`max-w-none shrink-0 object-contain ${
            isFooter ? 'h-[172px] w-[172px]' : 'h-[124px] w-[124px]'
          }`}
        />
      </span>
      {showWordmark && (
        <span
          className={`font-display font-bold tracking-tight text-white ${
            isFooter ? 'text-base' : 'hidden text-base sm:inline lg:text-lg'
          }`}
        >
          Global Education Expert
        </span>
      )}
    </span>
  );
}
