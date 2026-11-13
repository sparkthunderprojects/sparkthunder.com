import Link from "next/link";
import { Bolt } from "@/components/Bolt";
import IntroSky from "@/components/IntroSky";
import { BrandGrid } from "@/components/BrandGrid";
import { BRANDS } from "@/lib/brands";

export default function Home() {
  return (
    <>
      <IntroSky />

      {/* STATEMENT */}
      <section className="mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-40">
        <p className="eyebrow">Who we are</p>
        <p className="display mt-8 max-w-5xl text-[clamp(2rem,5vw,4.5rem)]">
          We build worlds first — then the stories, games and tools that let you live inside them.
        </p>
      </section>

      {/* BRANDS */}
      <section id="universes" className="scroll-mt-8 border-t border-line py-24 md:py-32">
        <div className="mx-auto flex max-w-[1500px] items-end justify-between px-6 md:px-12">
          <div>
            <p className="eyebrow">The portfolio</p>
            <h2 className="display mt-5 text-5xl md:text-7xl">Our brands</h2>
          </div>
          <Link href="/brands" className="link-arrow hidden text-xs uppercase tracking-[0.26em] md:block">
            All brands
          </Link>
        </div>
        <div className="mx-auto mt-14 max-w-[1500px] px-6 md:px-12">
          <BrandGrid brands={BRANDS} />
          <Link href="/brands" className="link-arrow mt-12 inline-block text-xs uppercase tracking-[0.26em] md:hidden">
            All brands
          </Link>
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
