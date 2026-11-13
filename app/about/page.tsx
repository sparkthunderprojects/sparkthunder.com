import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS, SITE } from "@/lib/brands";

export const metadata: Metadata = {
  title: "About",
  description: `What ${SITE.name} is: original universes, comics, tabletop games and play tools.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-[1500px] px-6 pb-20 pt-40 md:px-12 md:pt-56">
        <p className="eyebrow">About</p>
        <h1 className="display mt-6 max-w-5xl text-[clamp(3rem,9vw,8rem)]">
          What is Sparkthunder?
        </h1>
        <p className="mt-10 max-w-2xl text-xl leading-relaxed text-white/70">
          Sparkthunder is a home for original universes. We create the worlds, tell their stories in
          comics, turn them into tabletop games, and build the tools to play them.
        </p>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1500px] gap-px md:grid-cols-2">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              className="group border-b border-line px-6 py-14 transition hover:bg-white/[0.03] md:px-12"
            >
              <p className="eyebrow">{b.category}</p>
              <h2 className="display mt-4 text-4xl">{b.name}</h2>
              <p className="mt-4 max-w-md leading-relaxed text-white/65">{b.summary}</p>
              <span className="link-arrow mt-6 inline-block text-xs uppercase tracking-[0.26em]">
                Learn more
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
