import type { Metadata } from "next";
import Link from "next/link";
import { Bolt } from "@/components/Bolt";
import { MyLogo } from "@/components/MyLogo";
import { SITE } from "@/lib/brands";

const ACCOUNT_URL = "https://mysparkthunder.com";

export const metadata: Metadata = {
  title: "MySparkthunder",
  description:
    "MySparkthunder is the one account that works across every Sparkthunder universe. Create it once, and save favourites, keep your reading history and manage your details in one place.",
  alternates: { canonical: "/my-sparkthunder" },
  openGraph: {
    title: `MySparkthunder | ${SITE.name}`,
    description: "One account for every Sparkthunder universe. Your worlds. One identity.",
  },
};

const STEPS = [
  {
    title: "Create it once",
    text: "Make your MySparkthunder account at mysparkthunder.com with your email and a password.",
  },
  {
    title: "Sign in anywhere",
    text: "On any connected site, choose Sign in with My Sparkthunder. Each universe also has its own sign-in page, so you never have to leave the world you are in.",
  },
  {
    title: "Stay in control",
    text: "You sign in on mysparkthunder.com, and it tells the site who you are. The site never sees your MySparkthunder password.",
  },
];

const FEATURES = [
  { title: "Favourites", text: "Save the characters and stories you love in each universe and find them again on any device." },
  { title: "Reading history", text: "Pick up where you left off, with your progress kept for you." },
  { title: "Wish list and orders", text: "When the Sparkthunder Shop opens, your wish list and orders will live in your account." },
  { title: "One place for your details", text: "Change your name, email and password in one place, for every site at once." },
];

const SITES = [
  { name: "Knightverge", text: "A shared comic universe of heroes, villains and legends.", live: true, href: "https://knightverge.com" },
  { name: "Knightverge Legacy", text: "The tabletop roleplaying game set in the Knightverge world.", live: true, href: "https://knightvergelegacy.com" },
  { name: "Roll Combat", text: "The home of our tabletop roleplaying games.", live: false },
  { name: "Sparkthunder Shop", text: "The shop for every Sparkthunder universe.", live: false },
  { name: "Occult Inc", text: "An original Sparkthunder universe, in development.", live: false },
];

const FAQ = [
  {
    q: "What is a MySparkthunder account?",
    a: "It is one account that works across every Sparkthunder universe. You create it once, then use the same email and password on each universe you join.",
  },
  {
    q: "Which sites does it work on?",
    a: "Every Sparkthunder universe. Knightverge and Knightverge Legacy are open now, and each new universe will use the same account.",
  },
  {
    q: "Are my favourites shared between universes?",
    a: "No. Each universe is separate, so your favourites and reading history stay with the universe they belong to. Your account page shows them in separate sections.",
  },
  {
    q: "Who can see my favourites and reading history?",
    a: "Only you can see them. Sparkthunder staff can see account details and activity totals when they are helping you with a support request.",
  },
  {
    q: "How do I delete my account?",
    a: "Open your account, choose Security and select Request account deletion. Deleting your account removes it from every Sparkthunder site, not just one.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MySparkthunderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <section className="grain relative isolate flex min-h-[74svh] items-end overflow-hidden bg-[#03060f]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/intro/night-sky.jpg"
          alt=""
          aria-hidden="true"
          className="drift absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(60% 70% at 78% 20%, rgba(125,211,252,0.22), transparent 65%)" }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-black/80 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-[1] h-2/3 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <Bolt className="flicker pointer-events-none absolute right-[10%] top-[18%] hidden h-[38vh] w-auto text-spark/20 md:block" />

        <div className="relative z-[2] mx-auto w-full max-w-[1500px] px-6 pb-16 md:px-12 md:pb-24">
          <p className="eyebrow rise">Your account</p>
          <h1 aria-label="MySparkthunder" className="rise rise-2 mt-8 pt-4">
            <MyLogo />
          </h1>
          <p className="rise rise-3 mt-5 max-w-xl text-xl text-white/75">Your worlds. One identity.</p>
          <div className="rise rise-3 mt-9 flex flex-wrap gap-4">
            <a
              href={`${ACCOUNT_URL}/signup`}
              className="border border-white bg-white px-7 py-3.5 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
            >
              Create your account
            </a>
            <a
              href={`${ACCOUNT_URL}/login`}
              className="border border-white/30 px-7 py-3.5 text-xs uppercase tracking-[0.26em] transition hover:border-white"
            >
              Sign in
            </a>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto grid max-w-[1500px] gap-14 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-36">
        <div>
          <p className="eyebrow">What it is</p>
          <h2 className="display mt-6 text-4xl md:text-6xl">One account for every world.</h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-white/70">
          <p>
            Sparkthunder is home to a growing set of original universes. Each one has its own story, its own
            characters and its own site. MySparkthunder is the single account that works across all of them.
          </p>
          <p>
            You create it once, and the same email and password sign you in on each universe you join. Nothing
            crosses over between universes: what you save in one stays in that universe, and your account page
            keeps each one in its own section.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 pt-20 md:px-12 md:pt-28">
          <p className="eyebrow">How it works</p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-[1500px] md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li
              key={s.title}
              className={`px-6 py-14 md:px-12 md:py-20 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
            >
              <span className="display text-6xl text-spark/80">0{i + 1}</span>
              <h3 className="display mt-6 text-3xl">{s.title}</h3>
              <p className="mt-4 max-w-sm leading-relaxed text-white/65">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* WHAT YOU CAN DO */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">What you can do with it</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Everything you keep, in one place.</h2>
          <ul className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.title} className="bg-background p-8 md:p-10">
                <h3 className="display text-2xl">{f.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/65">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WHERE IT WORKS */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">Where it works</p>
          <h2 className="display mt-6 max-w-3xl text-4xl md:text-6xl">Sign in across the family.</h2>
          <ul className="mt-14 divide-y divide-line border-y border-line">
            {SITES.map((s) => (
              <li key={s.name} className="flex flex-wrap items-center justify-between gap-4 py-6">
                <div>
                  <p className="display text-2xl">{s.name}</p>
                  <p className="mt-1 text-sm text-muted">{s.text}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span
                    className={`border px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.22em] ${
                      s.live ? "border-spark text-spark" : "border-white/25 text-white/55"
                    }`}
                  >
                    {s.live ? "Sign in now" : "Coming soon"}
                  </span>
                  {s.live && s.href && (
                    <a href={s.href} className="link-arrow text-xs uppercase tracking-[0.26em]">
                      Visit
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Google and email sign-in still work on each site. Using My Sparkthunder is always your choice.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-12 md:py-32">
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-6 text-4xl md:text-6xl">Good to know.</h2>
          <div className="mt-14 max-w-3xl divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-muted transition group-[[open]]:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-prose leading-relaxed text-white/65">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            More answers in the{" "}
            <a href={`${ACCOUNT_URL}/help`} className="text-spark hover:underline">
              MySparkthunder help page
            </a>
            , or write to{" "}
            <a href="mailto:hello@mysparkthunder.com" className="text-spark hover:underline">
              hello@mysparkthunder.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="grain relative overflow-hidden border-t border-line">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(70% 120% at 50% 120%, rgba(56,189,248,0.28), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 py-28 text-center md:px-12 md:py-40">
          <Bolt className="mx-auto h-12 w-auto text-spark" />
          <h2 className="display mx-auto mt-8 max-w-3xl text-[clamp(2.4rem,6vw,5rem)]">Ready to step in?</h2>
          <p className="mx-auto mt-5 max-w-md text-white/65">
            Create your MySparkthunder account once and carry it into every world.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`${ACCOUNT_URL}/signup`}
              className="border border-white bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
            >
              Create your account
            </a>
            <Link
              href="/brands"
              className="border border-white/30 px-8 py-4 text-xs uppercase tracking-[0.26em] transition hover:border-white"
            >
              Explore the brands
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
