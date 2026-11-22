import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  staggerIndex?: number;
  immediate?: boolean;
}

const STAGGER_DELAY_CLASSES = [
  'delay-0',
  'delay-75',
  'delay-150',
  'delay-200',
  'delay-300',
  'delay-[375ms]',
  'delay-[450ms]',
  'delay-500',
];

export function ScrollReveal({
  children,
  className = '',
  staggerIndex = 0,
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion || immediate) {
      setVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const delayClass =
    STAGGER_DELAY_CLASSES[
      Math.max(0, Math.min(staggerIndex, STAGGER_DELAY_CLASSES.length - 1))
    ];

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform] ${delayClass} ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
