'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/** Rising sparks, placed by a fixed formula so the server and browser draw the same ones. */
const EMBERS = Array.from({ length: 34 }, (_, i) => {
  const a = Math.sin((i + 1) * 12.9898) * 43758.5453;
  const b = Math.sin((i + 1) * 78.233) * 12345.6789;
  return {
    left: Math.round((12 + (a - Math.floor(a)) * 76) * 100) / 100,
    delay: Math.round((b - Math.floor(b)) * 9 * 100) / 100,
    duration: 7 + (i % 6) * 1.4,
    size: 1.5 + (i % 4) * 0.9,
    drift: ((i % 7) - 3) * 14,
    gold: i % 3 !== 0,
  };
});

/**
 * Opening scene for the homepage. A storm sky, a lightning strike, and the
 * Sparkthunder logo materialising in the flash, with a lens streak and
 * drifting sparks. The tagline and links fade in once the strike has landed.
 */
export default function IntroSky() {
  const ref = useRef<HTMLElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setLive(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-labelledby="intro-heading"
      className={`sky relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#03060f] ${live ? 'sky-live' : ''}`}
    >
      <h1 id="intro-heading" className="sr-only">
        Sparkthunder: worlds worth entering
      </h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/intro/night-sky.jpg" alt="" aria-hidden="true" className="sky-photo absolute inset-0 h-full w-full object-cover" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/intro/storm-strike.jpg" alt="" aria-hidden="true" className="sky-strike-img absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="sky-storm absolute inset-0" />

      <div aria-hidden="true" className="sky-flash absolute inset-0" />

      <div aria-hidden="true" className="sky-streak absolute left-1/2 top-1/2" />

      <div className="relative z-[3] w-[min(88vw,980px)]">
        <span aria-hidden="true" className="sky-logo-glow absolute inset-0 block" />
        <div className="sky-logo-wrap">
          <span className="sky-logo block" role="img" aria-label="Sparkthunder" />
        </div>
      </div>

      <div aria-hidden="true" className="sky-embers absolute inset-0 z-[2] overflow-hidden">
        {EMBERS.map((e, i) => (
          <span
            key={i}
            className="sky-ember"
            style={{
              left: `${e.left}%`,
              width: e.size,
              height: e.size,
              animationDelay: `${e.delay}s`,
              animationDuration: `${e.duration}s`,
              background: e.gold ? 'hsl(42 100% 70%)' : 'hsl(205 100% 92%)',
              boxShadow: `0 0 ${e.size * 4}px ${e.gold ? 'hsl(42 100% 60%)' : 'hsl(205 100% 80%)'}`,
              ['--drift' as string]: `${e.drift}px`,
            }}
          />
        ))}
      </div>

      {/* tagline and links, revealed after the strike */}
      <div className="sky-reveal absolute inset-x-0 bottom-0 z-[5] px-6 pb-10 text-center md:pb-14">
        <p className="display text-[clamp(1.5rem,3.4vw,2.6rem)]">Worlds worth entering.</p>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/65">
          Original universes, comics and tabletop games, and the tools to play them.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="#universes"
            className="border border-white bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
          >
            Explore our worlds
          </a>
          <Link
            href="/about"
            className="border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[0.26em] transition hover:border-white"
          >
            What is Sparkthunder
          </Link>
        </div>
        <span aria-hidden="true" className="sky-cue mt-8" />
      </div>

      {/* film look: dark bars top and bottom, tight vignette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[4] h-24 bg-gradient-to-b from-black/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-40 bg-gradient-to-t from-background to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.65)_100%)]" />
    </section>
  );
}
