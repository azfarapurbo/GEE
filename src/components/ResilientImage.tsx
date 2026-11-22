import { useEffect, useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSrc,
  loading = 'lazy',
}: ResilientImageProps) {
  const [activeSrc, setActiveSrc] = useState(src);
  const [usedFallbackSrc, setUsedFallbackSrc] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setActiveSrc(src);
    setUsedFallbackSrc(false);
    setFailed(false);
  }, [src]);

  const handleError = () => {
    if (fallbackSrc && !usedFallbackSrc && fallbackSrc !== activeSrc) {
      setUsedFallbackSrc(true);
      setActiveSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  };

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0B1120] via-[#172554]/80 to-[#0E7490]/40 p-6 text-center text-white ${className}`}
      >
        <GraduationCap
          className="mb-2.5 h-8 w-8 text-cyan-300"
          aria-hidden="true"
        />
        <p className="font-display text-sm font-semibold tracking-tight text-white">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={loading}
      onError={handleError}
      className={className}
    />
  );
}
