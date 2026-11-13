import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRANDS, SITE, getBrand } from "@/lib/brands";

export function generateStaticParams() {
  return BRANDS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: PageProps<"/brands/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: brand.name,
    description: brand.summary,
    alternates: { canonical: `/brands/${brand.slug}` },
    openGraph: { title: `${brand.name} | ${SITE.name}`, description: brand.summary },
  };
}

export default async function BrandPage({ params }: PageProps<"/brands/[slug]">) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const others = BRANDS.filter((b) => b.slug !== brand.slug);

  return (
    <>
      <section className="grain relative flex min-h-[80svh] items-end overflow-hidden">
        <div className="drift absolute inset-0" style={{ backgroundImage: brand.art }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/40" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-20 md:px-12 md:pb-28">
          <p className="eyebrow rise">{brand.category}</p>
          <h1 className="display rise rise-2 mt-6 text-[clamp(3.5rem,11vw,10rem)]">{brand.name}</h1>
          <p className="rise rise-3 mt-6 max-w-xl text-xl text-white/75">{brand.tagline}</p>
          <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-5">
            <span
              className="border px-3 py-2 text-[0.68rem] uppercase tracking-[0.24em]"
              style={{ borderColor: brand.accent, color: brand.accent }}
            >
              {brand.status}
            </span>
            {brand.href && (
              <a
                href={brand.href}
                className="link-arrow border border-white bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.26em] text-black transition hover:bg-transparent hover:text-white"
              >
                Visit site
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-16 px-6 py-24 md:grid-cols-[1fr_1.2fr] md:px-12 md:py-32">
        <div>
          <p className="eyebrow">Overview</p>
          <p className="display mt-6 text-3xl md:text-5xl">{brand.summary}</p>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-white/70">
          {brand.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div
          className={`mx-auto grid max-w-[1500px] ${brand.highlights.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}
        >
          {brand.highlights.map((h, i) => (
            <div
              key={h.title}
              className={`px-6 py-16 md:px-12 md:py-20 ${i > 0 ? "border-t border-line md:border-l md:border-t-0" : ""}`}
            >
              <h2 className="display text-3xl" style={{ color: brand.accent }}>
                {h.title}
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-white/65">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-12">
        <div className="mx-auto max-w-[1500px]">
          <p className="eyebrow">More from Sparkthunder</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((b) => (
              <li key={b.slug}>
                <Link
                  href={`/brands/${b.slug}`}
                  className="link-arrow block border border-line p-6 transition hover:border-white"
                >
                  <span className="display text-2xl">{b.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
