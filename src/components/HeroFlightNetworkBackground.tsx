import { useEffect, useRef } from 'react';

interface CountryHub {
  id: string;
  label: string;
  bx: number;
  by: number;
  labelOffsetX: number;
  labelOffsetY: number;
  tint: 'cyan' | 'indigo' | 'gold';
  depth: number;
  phase: number;
}

interface FlightRoute {
  from: string;
  to: string;
  curve: number;
  durationSec: number;
  delayRatio: number;
  tint: 'cyan' | 'gold';
}

const COUNTRY_HUBS: CountryHub[] = [
  {
    id: 'canada',
    label: 'Canada',
    bx: 0.21,
    by: 0.31,
    labelOffsetX: 0,
    labelOffsetY: -16,
    tint: 'cyan',
    depth: 0.9,
    phase: 0.3,
  },
  {
    id: 'uk',
    label: 'UK',
    bx: 0.455,
    by: 0.28,
    labelOffsetX: -20,
    labelOffsetY: -14,
    tint: 'indigo',
    depth: 1.0,
    phase: 1.1,
  },
  {
    id: 'netherlands',
    label: 'Netherlands',
    bx: 0.495,
    by: 0.305,
    labelOffsetX: 16,
    labelOffsetY: -16,
    tint: 'cyan',
    depth: 1.05,
    phase: 2.0,
  },
  {
    id: 'germany',
    label: 'Germany',
    bx: 0.535,
    by: 0.355,
    labelOffsetX: 14,
    labelOffsetY: 16,
    tint: 'gold',
    depth: 1.1,
    phase: 2.8,
  },
  {
    id: 'malaysia',
    label: 'Malaysia',
    bx: 0.745,
    by: 0.585,
    labelOffsetX: -12,
    labelOffsetY: 18,
    tint: 'cyan',
    depth: 1.2,
    phase: 0.7,
  },
  {
    id: 'south-korea',
    label: 'South Korea',
    bx: 0.825,
    by: 0.36,
    labelOffsetX: 12,
    labelOffsetY: -15,
    tint: 'indigo',
    depth: 1.05,
    phase: 3.6,
  },
  {
    id: 'australia',
    label: 'Australia',
    bx: 0.845,
    by: 0.755,
    labelOffsetX: 0,
    labelOffsetY: 18,
    tint: 'gold',
    depth: 1.15,
    phase: 4.5,
  },
];

const FLIGHT_ROUTES: FlightRoute[] = [
  { from: 'malaysia', to: 'uk', curve: -0.24, durationSec: 11, delayRatio: 0.0, tint: 'cyan' },
  { from: 'malaysia', to: 'germany', curve: -0.21, durationSec: 10.5, delayRatio: 0.32, tint: 'gold' },
  { from: 'malaysia', to: 'australia', curve: 0.22, durationSec: 8.5, delayRatio: 0.58, tint: 'cyan' },
  { from: 'uk', to: 'canada', curve: -0.26, durationSec: 9.5, delayRatio: 0.18, tint: 'cyan' },
  { from: 'malaysia', to: 'south-korea', curve: -0.22, durationSec: 9.0, delayRatio: 0.72, tint: 'gold' },
  { from: 'netherlands', to: 'canada', curve: -0.22, durationSec: 10.0, delayRatio: 0.45, tint: 'cyan' },
  { from: 'germany', to: 'south-korea', curve: -0.25, durationSec: 11.5, delayRatio: 0.85, tint: 'gold' },
];

// Stylized simplified continental outlines in normalized [0..1, 0..1] map coordinates
// Used both for crisp subtle wireframe outlines and a clean dotted landmass silhouette grid
const CONTINENT_POLYGONS: [number, number][][] = [
  // North America
  [
    [0.08, 0.21],
    [0.18, 0.17],
    [0.29, 0.19],
    [0.33, 0.28],
    [0.29, 0.38],
    [0.24, 0.46],
    [0.21, 0.52],
    [0.16, 0.44],
    [0.12, 0.34],
  ],
  // South America
  [
    [0.24, 0.54],
    [0.31, 0.56],
    [0.36, 0.64],
    [0.33, 0.76],
    [0.28, 0.88],
    [0.24, 0.77],
    [0.22, 0.62],
  ],
  // Europe (incl. UK & Continental corridors)
  [
    [0.44, 0.22],
    [0.52, 0.19],
    [0.59, 0.23],
    [0.6, 0.34],
    [0.54, 0.4],
    [0.46, 0.39],
    [0.44, 0.31],
  ],
  // Africa
  [
    [0.45, 0.43],
    [0.55, 0.43],
    [0.61, 0.52],
    [0.58, 0.68],
    [0.52, 0.79],
    [0.47, 0.67],
    [0.43, 0.53],
  ],
  // Eurasia & East/South-East Asia
  [
    [0.6, 0.2],
    [0.74, 0.18],
    [0.88, 0.23],
    [0.91, 0.34],
    [0.84, 0.45],
    [0.77, 0.59],
    [0.68, 0.56],
    [0.61, 0.44],
  ],
  // Australia & Maritime Oceania
  [
    [0.78, 0.69],
    [0.89, 0.68],
    [0.92, 0.78],
    [0.85, 0.84],
    [0.77, 0.79],
  ],
];

function pointInPolygon(x: number, y: number, poly: [number, number][]): boolean {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i][0];
    const yi = poly[i][1];
    const xj = poly[j][0];
    const yj = poly[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 1e-9) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const WORLD_MAP_DOTS: [number, number][] = (() => {
  const pts: [number, number][] = [];
  const stepX = 0.0165;
  const stepY = 0.025;
  for (let gx = 0.06; gx <= 0.94; gx += stepX) {
    for (let gy = 0.14; gy <= 0.9; gy += stepY) {
      if (CONTINENT_POLYGONS.some((poly) => pointInPolygon(gx, gy, poly))) {
        pts.push([gx, gy]);
      }
    }
  }
  return pts;
})();

const TINT_RGB: Record<CountryHub['tint'], string> = {
  cyan: '6, 182, 212',
  indigo: '79, 70, 229',
  gold: '245, 158, 11',
};

interface HeroFlightNetworkBackgroundProps {
  pointerRef?: React.MutableRefObject<{ x: number; y: number; active: boolean }>;
  parallaxTargetRef?: React.RefObject<HTMLDivElement | null>;
}

export function HeroFlightNetworkBackground({
  pointerRef,
  parallaxTargetRef,
}: HeroFlightNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const internalPointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let rafId = 0;
    let smoothX = 0;
    let smoothY = 0;

    // Tracks recent landing pulse strength [0..1] per hub when a plane arrives
    const landingRipples: Record<string, number> = {};
    for (const hub of COUNTRY_HUBS) {
      landingRipples[hub.id] = 0;
    }

    const updateSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    updateSize();

    const handlePointerMove = (e: PointerEvent) => {
      if (width === 0 || height === 0) return;
      internalPointerRef.current = {
        x: (e.clientX / width) * 2 - 1,
        y: (e.clientY / height) * 2 - 1,
        active: true,
      };
    };

    const handlePointerLeave = () => {
      internalPointerRef.current.active = false;
    };

    const handleResize = () => {
      updateSize();
      if (prefersReducedMotion) {
        drawFrame(0);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);

    const drawMinimalistAirplane = (
      x: number,
      y: number,
      angle: number,
      tint: FlightRoute['tint'],
      scale = 1
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.scale(scale, scale);

      // Soft outer glow behind aircraft
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 14);
      if (tint === 'gold') {
        glow.addColorStop(0, 'rgba(251, 191, 36, 0.55)');
      } else {
        glow.addColorStop(0, 'rgba(103, 232, 249, 0.55)');
      }
      glow.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.beginPath();
      ctx.arc(0, 0, 14, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Sleek minimalist chevron jet silhouette pointing along +X
      ctx.beginPath();
      ctx.moveTo(8, 0);
      ctx.lineTo(-4.5, -5.8);
      ctx.lineTo(-2.2, -0.8);
      ctx.lineTo(-7.2, -2.5);
      ctx.lineTo(-5.8, 0);
      ctx.lineTo(-7.2, 2.5);
      ctx.lineTo(-2.2, 0.8);
      ctx.lineTo(-4.5, 5.8);
      ctx.closePath();

      ctx.fillStyle = tint === 'gold' ? '#FDE68A' : '#ECFEFF';
      ctx.shadowColor = tint === 'gold' ? '#F59E0B' : '#06B6D4';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    };

    const drawFrame = (timestamp: number) => {
      if (width === 0 || height === 0) return;

      const t = timestamp * 0.001;
      const activePointer =
        pointerRef?.current?.active
          ? pointerRef.current
          : internalPointerRef.current;

      const targetX = activePointer.active ? activePointer.x : 0;
      const targetY = activePointer.active ? activePointer.y : 0;

      smoothX += (targetX - smoothX) * 0.055;
      smoothY += (targetY - smoothY) * 0.055;

      if (parallaxTargetRef?.current && !prefersReducedMotion && width >= 1024) {
        parallaxTargetRef.current.style.transform = `translate3d(${(
          smoothX * -12
        ).toFixed(2)}px, ${(smoothY * -9).toFixed(2)}px, 0)`;
      } else if (parallaxTargetRef?.current) {
        parallaxTargetRef.current.style.transform = 'translate3d(0px, 0px, 0)';
      }

      ctx.clearRect(0, 0, width, height);

      const isCompact = width < 768;
      const mapShiftX = smoothX * (isCompact ? 8 : 18);
      const mapShiftY = smoothY * (isCompact ? 6 : 13);

      // 1. Subtle Latitude / Longitude Cartographic Grid Lines
      ctx.save();
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.05)';
      ctx.lineWidth = 1;
      for (let lat = 0.2; lat <= 0.8; lat += 0.15) {
        const y = lat * height + mapShiftY * 0.45;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      for (let lon = 0.15; lon <= 0.85; lon += 0.14) {
        const x = lon * width + mapShiftX * 0.45;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Stylized Wireframe + Dotted World Map Silhouette
      ctx.save();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 1;
      for (const poly of CONTINENT_POLYGONS) {
        ctx.beginPath();
        for (let i = 0; i < poly.length; i++) {
          const px = poly[i][0] * width + mapShiftX * 0.6;
          const py = poly[i][1] * height + mapShiftY * 0.6;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(148, 163, 184, 0.14)';
      const dotRadius = isCompact ? 0.9 : 1.15;
      for (let i = 0; i < WORLD_MAP_DOTS.length; i++) {
        const [dx, dy] = WORLD_MAP_DOTS[i];
        const px = dx * width + mapShiftX * 0.6;
        const py = dy * height + mapShiftY * 0.6;
        ctx.fillRect(px - dotRadius * 0.5, py - dotRadius * 0.5, dotRadius, dotRadius);
      }
      ctx.restore();

      // Compute parallax positions for all 7 country hubs
      const hubPositions: Record<
        string,
        { x: number; y: number; hub: CountryHub }
      > = {};
      for (const hub of COUNTRY_HUBS) {
        const baseX = isCompact ? 0.05 + hub.bx * 0.9 : hub.bx;
        const baseY = isCompact ? 0.1 + hub.by * 0.8 : hub.by;
        const x = baseX * width + smoothX * 22 * hub.depth;
        const y = baseY * height + smoothY * 15 * hub.depth;
        hubPositions[hub.id] = { x, y, hub };
      }

      // Decay landing ripples smoothly
      for (const hub of COUNTRY_HUBS) {
        landingRipples[hub.id] = Math.max(0, landingRipples[hub.id] - 0.016);
      }

      // 3. Curved Flight Arcs + Traveling Airplanes + Luminous Cyan-and-Gold Contrails
      const cursorPxX = (0.5 + smoothX * 0.5) * width;
      const cursorPxY = (0.5 + smoothY * 0.5) * height;

      for (let i = 0; i < FLIGHT_ROUTES.length; i++) {
        const route = FLIGHT_ROUTES[i];
        const start = hubPositions[route.from];
        const end = hubPositions[route.to];
        if (!start || !end) continue;

        const mx = (start.x + end.x) * 0.5;
        const my = (start.y + end.y) * 0.5;
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const cx = mx - dy * route.curve;
        const cy = my + dx * route.curve;

        let proximity = 0;
        if (activePointer.active) {
          const dist = Math.hypot(cursorPxX - mx, cursorPxY - my);
          proximity = Math.max(0, 1 - dist / 280);
        }

        // Base dashed flight route guide
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.quadraticCurveTo(cx, cy, end.x, end.y);
        ctx.setLineDash([3, 7]);
        ctx.lineDashOffset = -t * 14;
        ctx.lineWidth = 1 + proximity * 0.5;
        ctx.strokeStyle =
          route.tint === 'gold'
            ? `rgba(245, 158, 11, ${0.14 + proximity * 0.2})`
            : `rgba(6, 182, 212, ${0.15 + proximity * 0.22})`;
        ctx.stroke();
        ctx.restore();

        // Motion parameter [0..1] per route with turnaround dwell for landing ripple
        const rawPhase = ((t / route.durationSec) + route.delayRatio) % 1;
        const flightActiveRatio = 0.86;

        if (rawPhase <= flightActiveRatio) {
          const p = rawPhase / flightActiveRatio;
          const tailStart = Math.max(0, p - 0.24);

          // Sample points along [tailStart..p] for luminous fading cyan-to-gold contrail
          const steps = 16;
          const tailPts: { x: number; y: number }[] = [];
          for (let s = 0; s <= steps; s++) {
            const u = tailStart + ((p - tailStart) * s) / steps;
            const invU = 1 - u;
            tailPts.push({
              x: invU * invU * start.x + 2 * invU * u * cx + u * u * end.x,
              y: invU * invU * start.y + 2 * invU * u * cy + u * u * end.y,
            });
          }

          if (tailPts.length >= 2) {
            const headPt = tailPts[tailPts.length - 1];
            const backPt = tailPts[0];
            const trailGrad = ctx.createLinearGradient(
              backPt.x,
              backPt.y,
              headPt.x,
              headPt.y
            );
            trailGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
            trailGrad.addColorStop(0.55, 'rgba(6, 182, 212, 0.55)');
            trailGrad.addColorStop(1, 'rgba(245, 158, 11, 0.92)');

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(tailPts[0].x, tailPts[0].y);
            for (let s = 1; s < tailPts.length; s++) {
              ctx.lineTo(tailPts[s].x, tailPts[s].y);
            }
            ctx.strokeStyle = trailGrad;
            ctx.lineWidth = 2.0 + proximity * 0.7;
            ctx.lineCap = 'round';
            ctx.stroke();
            ctx.restore();
          }

          // Plane position & derivative tangent angle
          const invP = 1 - p;
          const px = invP * invP * start.x + 2 * invP * p * cx + p * p * end.x;
          const py = invP * invP * start.y + 2 * invP * p * cy + p * p * end.y;
          const tx = 2 * invP * (cx - start.x) + 2 * p * (end.x - cx);
          const ty = 2 * invP * (cy - start.y) + 2 * p * (end.y - cy);
          const angle = Math.atan2(ty, tx);

          // Trigger glowing arrival ripple right as aircraft approaches destination pin
          if (p > 0.94) {
            landingRipples[route.to] = Math.max(
              landingRipples[route.to],
              1 - (p - 0.94) / 0.06
            );
          }

          drawMinimalistAirplane(
            px,
            py,
            angle,
            route.tint,
            isCompact ? 0.82 : 1.0
          );
        } else {
          // Soft arrival dwell ripple on destination country hub before next flight
          const arrivalProgress =
            (rawPhase - flightActiveRatio) / (1 - flightActiveRatio);
          if (arrivalProgress < 0.75) {
            landingRipples[route.to] = Math.max(
              landingRipples[route.to],
              1 - arrivalProgress / 0.75
            );
          }
        }
      }

      // 4. Pulsing Country Hub Pins + Sleek Floating Country Tags
      ctx.save();
      ctx.font = `${isCompact ? 10 : 11}px "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif`;
      ctx.textBaseline = 'middle';

      for (const hub of COUNTRY_HUBS) {
        const pos = hubPositions[hub.id];
        if (!pos) continue;
        const { x, y } = pos;
        const rgb = TINT_RGB[hub.tint];
        const beacon = 0.5 + 0.5 * Math.sin(t * 2.0 + hub.phase);
        const ripple = landingRipples[hub.id] || 0;

        // Ambient beacon glow
        const haloRadius = 18 + beacon * 6 + ripple * 14;
        const halo = ctx.createRadialGradient(x, y, 0, x, y, haloRadius);
        halo.addColorStop(0, `rgba(${rgb}, ${0.42 + ripple * 0.35})`);
        halo.addColorStop(1, `rgba(${rgb}, 0)`);
        ctx.beginPath();
        ctx.arc(x, y, haloRadius, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Ambient slow radar ring
        const radarRadius = 8 + ((t * 0.55 + hub.phase) % 1) * 18;
        const radarAlpha = (1 - ((t * 0.55 + hub.phase) % 1)) * 0.32;
        ctx.beginPath();
        ctx.arc(x, y, radarRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${rgb}, ${radarAlpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Bright arrival ripple ring when plane lands
        if (ripple > 0.02) {
          const arrivalRing = 10 + (1 - ripple) * 28;
          ctx.beginPath();
          ctx.arc(x, y, arrivalRing, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(103, 232, 249, ${ripple * 0.72})`;
          ctx.lineWidth = 1.6;
          ctx.stroke();
        }

        // Core beacon pin dot
        ctx.beginPath();
        ctx.arc(x, y, 3.6 + ripple * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

        // Sleek floating country tag
        const labelX = x + hub.labelOffsetX;
        const labelY = y + hub.labelOffsetY;
        const textWidth = ctx.measureText(hub.label).width;
        const padX = 7;
        const boxW = textWidth + padX * 2;
        const boxH = isCompact ? 18 : 20;

        // Hairline connector tick from pin to tag
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(labelX, labelY);
        ctx.strokeStyle = `rgba(${rgb}, 0.32)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Frosted mini country tag background
        ctx.fillStyle = 'rgba(11, 17, 32, 0.72)';
        ctx.strokeStyle = `rgba(${rgb}, ${0.28 + ripple * 0.45})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(labelX - boxW / 2, labelY - boxH / 2, boxW, boxH, 5);
        ctx.fill();
        ctx.stroke();

        ctx.textAlign = 'center';
        ctx.fillStyle = ripple > 0.2 ? '#A5F3FC' : 'rgba(226, 232, 240, 0.88)';
        ctx.fillText(hub.label, labelX, labelY + 0.5);
      }
      ctx.restore();
    };

    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      const loop = (ts: number) => {
        if (!document.hidden) {
          drawFrame(ts);
        }
        rafId = window.requestAnimationFrame(loop);
      };
      rafId = window.requestAnimationFrame(loop);
    }

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [pointerRef, parallaxTargetRef]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0B1120] select-none"
    >
      {/* Layer 1: Slowly Drifting Electric-Indigo & Cyan Aurora Light Waves */}
      <div className="animate-aurora-indigo hero-aurora-indigo absolute -top-28 right-[8%] h-[380px] w-[380px] rounded-full opacity-40 blur-[105px] sm:h-[600px] sm:w-[600px] sm:blur-[125px]" />
      <div className="animate-aurora-cyan hero-aurora-cyan absolute top-[20%] -left-24 h-[340px] w-[340px] rounded-full opacity-35 blur-[95px] sm:h-[540px] sm:w-[540px] sm:blur-[115px]" />
      <div className="animate-aurora-gold hero-aurora-gold absolute -bottom-24 right-[18%] h-[280px] w-[280px] rounded-full opacity-22 blur-[95px] sm:h-[440px] sm:w-[440px] sm:blur-[115px]" />

      {/* Layer 2: Stylized World Map Silhouette, Country Hubs, Curved Flight Arcs & Flying Airplanes */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-95"
      />

      {/* Layer 3: Soft Dark Radial Vignette Keeping Foreground Typography 100% Crisp */}
      <div className="hero-radial-vignette absolute inset-0 opacity-60" />
    </div>
  );
}
