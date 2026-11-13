import Link from "next/link";
import { Bolt } from "@/components/Bolt";
import { BrandCard } from "@/components/BrandCard";
import { BRANDS, SITE } from "@/lib/brands";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative flex min-h-[100svh] items-end overflow-hidden">
        <div
          className="drift absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(80% 70% at 70% 30%, rgba(56,189,248,0.35), transparent 60%), radial-gradient(70% 60% at 15% 85%, rgba(124,58,237,0.35), transparent 60%), linear-gradient(180deg,#04050a,#090b18)",
          }}
        />
        <Bolt className="flicker pointer-events-none absolute right-[8%] top-[14%] h-[62vh] w-auto text-spark/25 blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />

        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 md:px-12 md:pb-32">
          <p className="eyebrow rise">Sparkthunder</p>
          <h1 className="display rise rise-2 mt-6 max-w-[14ch] text-[clamp(3.5rem,11vw,10rem)]">
            {SITE.tagline}
          </h1>
          <p className="rise rise-3 mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Original universes, comics and tabletop games — and the tools to play them. Welcome to
            the home of Sparkthunder.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#universes"
              className="border border-white bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
            >
              Explore our worlds
            </a>
            <Link
              href="/about"
              className="border border-line px-7 py-4 text-xs uppercase tracking-[0.26em] transition hover:border-white"
            >
              What is Sparkthunder
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <p className="eyebrow">Who we are</p>
        <p className="display mt-8 max-w-5xl text-[clamp(2rem,5vw,4.5rem)]">
          We build worlds first — then the stories, games and tools that let you live inside them.
        </p>
      </section>

      {/* BRANDS RAIL */}
      <section id="universes" className="scroll-mt-8 border-t border-line py-24 md:py-32">
        <div className="mx-auto flex max-w-[1500px] items-end justify-between px-6 md:px-12">
          <div>
            <p className="eyebrow">The portfolio</p>
            <h2 className="display mt-5 text-5xl md:text-7xl">Our universes</h2>
          </div>
          <p className="hidden max-w-xs text-sm text-muted md:block">
            Scroll sideways to meet every Sparkthunder brand.
          </p>
        </div>
        <div className="mt-14 flex snap-x gap-5 overflow-x-auto px-6 pb-6 md:px-12">
          {BRANDS.map((b, i) => (
            <BrandCard key={b.slug} brand={b} index={i} />
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-3">
          {[
            ["Stories", "Comics and lore set in deeply connected universes built to be explored."],
            ["Games", "Tabletop role-playing systems that start from a world that already exists."],
            ["Tools", "A virtual tabletop and platforms that bring the table online."],
          ].map(([t, d], i) => (
            <div
              key={t}
              className={`px-6 py-16 md:px-12 md:py-24 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
            >
              <p className="eyebrow">0{i + 1}</p>
              <h3 className="display mt-6 text-4xl">{t}</h3>
              <p className="mt-5 max-w-sm leading-relaxed text-white/65">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative overflow-hidden border-t border-line">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70% 120% at 50% 120%, rgba(56,189,248,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 py-28 text-center md:px-12 md:py-40">
          <Bolt className="mx-auto h-14 w-auto text-spark" />
          <h2 className="display mx-auto mt-8 max-w-4xl text-[clamp(2.5rem,7vw,6rem)]">
            Step into Knightverge.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/65">
            The flagship universe is live now — characters, powers, timelines and the connections
            between them.
          </p>
          <a
            href="https://knightverge.com"
            className="link-arrow mt-10 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.26em] transition hover:bg-white hover:text-black"
          >
            Visit Knightverge.com
          </a>
        </div>
      </section>
    </>
  );
}
