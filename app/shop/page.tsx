import type { Metadata } from "next";
import Link from "next/link";
import { ShopLogo } from "@/components/ShopLogo";
import { BrandGrid } from "@/components/BrandGrid";
import { BRANDS, SITE } from "@/lib/brands";

const SHOP_URL = "https://sparkthunder.shop";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "The Sparkthunder Shop at sparkthunder.shop is the one place to buy official merchandise from every Sparkthunder franchise, from Knightverge to Roll Combat and beyond.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: `The Sparkthunder Shop | ${SITE.name}`,
    description: "Official merchandise from every Sparkthunder franchise, in one place.",
  },
};

const MERCH = [
  { src: "/shop/icons-tee.jpg", name: "Icons Tee", note: "Nine emblems from the universe, one bold grid." },
  { src: "/shop/black-ronin-long-sleeve.jpg", name: "Black Ronin Long Sleeve", note: "The hat, the eyes and the name, with a mark on the sleeve." },
  { src: "/shop/team-ronin-tee.jpg", name: "Team Ronin Tee", note: "Pick your side." },
  { src: "/shop/team-tachi-tee.jpg", name: "Team Tachi Tee", note: "Crossed blades on the chest." },
  { src: "/shop/team-hood-tee.jpg", name: "Team Hood Tee", note: "Heavy cotton, big type, small symbol." },
  { src: "/shop/team-grace-tee.jpg", name: "Team Grace Tee", note: "Horns up." },
  { src: "/shop/tachi-tee.jpg", name: "Tachi Tee", note: "Swords above, name below." },
  { src: "/shop/black-ronin-poster.jpg", name: "Black Ronin Poster", note: "Minimal wall art for the character with the red eyes." },
];

const FINDS = [
  {
    title: "Wear your world",
    text: "Apparel and accessories that carry the symbols, heroes and houses of the universes you love, made to be worn out of the house and not just kept in a drawer.",
  },
  {
    title: "Keep the collection",
    text: "Prints, posters and collectables for the shelf and the wall, built around the characters and places fans already know by name.",
  },
  {
    title: "Take it to the table",
    text: "Gear for the tabletop, from the Roll Combat games to everything that makes a session feel like it belongs to the world you are playing in.",
  },
  {
    title: "Pick up the story",
    text: "Comics and printed books from our universes, gathered next to the merchandise so a new fan can start reading and start collecting on the same visit.",
  },
];

const PROMISES = [
  {
    title: "Official, always",
    text: "Everything in the shop is made or approved by Sparkthunder. If it is for sale at sparkthunder.shop, it belongs to the universe it carries.",
  },
  {
    title: "Every franchise, one basket",
    text: "Knightverge, Roll Combat, Occult Inc and each universe still to come share one shop. You never have to learn a new site to buy something new.",
  },
  {
    title: "Built with the worlds",
    text: "Our merchandise is designed by the people who create the universes, so the details are right: the right emblem, the right colours, the right name.",
  },
];

const FAQ = [
  {
    q: "What is the Sparkthunder Shop?",
    a: "It is the official store for Sparkthunder merchandise, at sparkthunder.shop. It brings every franchise together in one place, so fans of any of our universes can find what they are looking for.",
  },
  {
    q: "Is the shop open?",
    a: "The shop is being prepared. Follow Sparkthunder for the opening, and when it opens it will be at sparkthunder.shop.",
  },
  {
    q: "Which franchises will I find there?",
    a: "Every Sparkthunder franchise, including Knightverge, Roll Combat and Occult Inc. New universes join the shop as they launch.",
  },
  {
    q: "Do I need an account?",
    a: "Your MySparkthunder account is the one that works across every Sparkthunder site. When the shop opens, your wish list and orders will live in it.",
  },
  {
    q: "Is everything sold there official?",
    a: "Yes. The Sparkthunder Shop sells official Sparkthunder merchandise only.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Sparkthunder Shop",
    url: `${SITE.url}/shop`,
    about: { "@type": "Store", name: "Sparkthunder Shop", url: SHOP_URL, parentOrganization: { "@type": "Organization", name: SITE.name, url: SITE.url } },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ShopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="grain relative isolate flex min-h-[82svh] items-center justify-center overflow-hidden bg-[#03060f]">
        <div aria-hidden="true" className="shop-rows opacity-60">
          {[false, true].map((rev) => (
            <div key={String(rev)} className={`shop-row ${rev ? "shop-row-rev" : ""}`}>
              {[...(rev ? [...MERCH].reverse() : MERCH), ...(rev ? [...MERCH].reverse() : MERCH)].map((m, i) => (
                <div key={i} className="shop-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.src} alt="" width={900} height={900} loading="eager" />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 z-[1]"
          style={{ backgroundImage: "radial-gradient(55% 60% at 50% 50%, rgba(3,6,15,0.92), rgba(3,6,15,0.55) 70%, rgba(3,6,15,0.25))" }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/80 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />

        <div className="relative z-[2] mx-auto flex w-full max-w-[1500px] flex-col items-center px-6 pb-10 pt-28 text-center md:px-12">
          <p className="eyebrow rise">Official merchandise</p>
          <h1 aria-label="The Sparkthunder Shop" className="rise rise-2 mt-8 w-full">
            <ShopLogo />
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-xl text-white/75">
            Every universe. One official store.
          </p>
          <div className="rise rise-3 mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={SHOP_URL}
              className="border border-white bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
            >
              Visit sparkthunder.shop
            </a>
            <Link
              href="/brands"
              className="border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[0.26em] transition hover:border-white"
            >
              Explore the brands
            </Link>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-36">
        <div>
          <p className="eyebrow">What it is</p>
          <h2 className="display mt-6 text-4xl md:text-6xl">Take the world home.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-white/70">
          <p>
            Great stories do not stop when the page turns or the session ends. They end up on a wall, on a
            shelf, on a jacket, in a bag at the table. The Sparkthunder Shop is where that happens.
          </p>
          <p>
            It is the official home for merchandise from every Sparkthunder franchise. Whether you came
            for the heroes of Knightverge, the tabletop games of Roll Combat or the strange doors of Occult
            Inc, you will find it at one address: sparkthunder.shop.
          </p>
        </div>
      </section>

      {/* FRANCHISES */}
      <section id="franchises" className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 pt-20 md:px-12 md:pt-28">
          <p className="eyebrow">Shop by franchise</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Pick your universe.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Each franchise has its own look, its own heroes and its own fans. The shop keeps them together
            under one roof, and every new universe gets its place on the shelf as it launches.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-[1500px] px-6 pb-24 md:px-12 md:pb-32">
          <BrandGrid brands={BRANDS} />
        </div>
      </section>

      {/* FIRST LOOK */}
      <section id="first-look" className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">A first look</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Pick a side. Wear it.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">
            Team shirts, character tees and wall art, designed around the heroes and symbols fans already
            know. Here is some of what is on the way.
          </p>
          <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {MERCH.map((m) => (
              <li key={m.name}>
                <div className="overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.src} alt={m.name} width={900} height={900} loading="lazy" className="aspect-square w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <h3 className="mt-4 text-sm uppercase tracking-[0.2em]">{m.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{m.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHAT YOU'LL FIND */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">What you will find</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Made for fans, not just for shelves.</h2>
          <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
            {FINDS.map((f) => (
              <div key={f.title} className="bg-background p-8 md:p-12">
                <h3 className="display text-2xl md:text-3xl">{f.title}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-white/65">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">Why here</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">The official way to buy.</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {PROMISES.map((p, i) => (
              <div key={p.title} className="border-t border-white/20 pt-6">
                <p className="eyebrow">0{i + 1}</p>
                <h3 className="display mt-4 text-2xl md:text-3xl">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-white/65">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOUNT */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-32">
          <div>
            <p className="eyebrow">Your account</p>
            <h2 className="display mt-6 text-4xl md:text-5xl">One sign-in, every world.</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/70">
              The shop works with MySparkthunder, the single account for every Sparkthunder universe. When
              the shop opens, your wish list and your orders will live there alongside everything else, so
              you can pick up where you left off on any device.
            </p>
            <Link href="/my-sparkthunder" className="link-arrow mt-8 inline-block text-xs uppercase tracking-[0.26em]">
              About MySparkthunder
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-6 text-4xl md:text-5xl">Good to know.</h2>
          <div className="mt-12 divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-white/50 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 text-center md:px-12 md:py-32">
          <h2 className="display text-4xl md:text-6xl">Your universe is waiting.</h2>
          <a
            href={SHOP_URL}
            className="mt-10 inline-block border border-white bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
          >
            Go to sparkthunder.shop
          </a>
        </div>
      </section>
    </>
  );
}
