import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F213E] via-[#1B3358] to-slate-800 p-6 text-center text-white ${className}`}
      >
        <GraduationCap className="mb-3 h-8 w-8 text-amber-400" aria-hidden="true" />
        <p className="font-display text-sm font-semibold tracking-tight text-white">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
