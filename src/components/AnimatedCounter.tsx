import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string | number;
  durationMs?: number;
  immediate?: boolean;
  className?: string;
}

interface ParsedMetric {
  prefix: string;
  target: number;
  decimals: number;
  hasCommas: boolean;
  suffix: string;
}

function parseMetricValue(raw: string | number): ParsedMetric | null {
  const str = String(raw).trim();
  const match = str.match(/^([^\d.-]*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!match) return null;

  const [, prefix, numPart, suffix] = match;
  const hasCommas = numPart.includes(',');
  const cleanNum = numPart.replace(/,/g, '');
  const decimalIdx = cleanNum.indexOf('.');
  const decimals = decimalIdx >= 0 ? cleanNum.length - decimalIdx - 1 : 0;
  const target = Number.parseFloat(cleanNum);

  if (!Number.isFinite(target)) return null;
  return { prefix, target, decimals, hasCommas, suffix };
}

function formatNumber(
  num: number,
  decimals: number,
  hasCommas: boolean
): string {
  const fixed = decimals > 0 ? num.toFixed(decimals) : Math.round(num).toString();
  if (!hasCommas) return fixed;

  const [intPart, decPart] = fixed.split('.');
  const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return decPart !== undefined ? `${formattedInt}.${decPart}` : formattedInt;
}

export function AnimatedCounter({
  value,
  durationMs = 2000,
  immediate = false,
  className = '',
}: AnimatedCounterProps) {
  const parsed = parseMetricValue(value);
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [hasStarted, setHasStarted] = useState(immediate);
  const [displayValue, setDisplayValue] = useState<string>(() => {
    if (!parsed) return String(value);
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return String(value);
    }
    return `${parsed.prefix}${formatNumber(0, parsed.decimals, parsed.hasCommas)}${parsed.suffix}`;
  });

  useEffect(() => {
    const el = elRef.current;
    if (!el || !parsed) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setHasStarted(true);
      setDisplayValue(String(value));
      return;
    }

    if (immediate) {
      setHasStarted(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, value, parsed !== null]);

  useEffect(() => {
    if (!parsed) {
      setDisplayValue(String(value));
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      setDisplayValue(String(value));
      return;
    }

    if (!hasStarted) return;

    let rafId = 0;
    let startTime: number | null = null;
    const { prefix, target, decimals, hasCommas, suffix } = parsed;

    const step = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Smooth cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      setDisplayValue(
        `${prefix}${formatNumber(current, decimals, hasCommas)}${suffix}`
      );

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(
          `${prefix}${formatNumber(target, decimals, hasCommas)}${suffix}`
        );
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [hasStarted, value, durationMs]);

  return (
    <span ref={elRef} className={`tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
}
