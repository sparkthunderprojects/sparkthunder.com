import type { Metadata } from "next";
import { BrandGrid } from "@/components/BrandGrid";
import { BRANDS, SITE } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Brands",
  description: `Explore the ${SITE.name} family of brands: original universes, comics, tabletop games and play tools.`,
  alternates: { canonical: "/brands" },
};

const listJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `${SITE.name} brands`,
  itemListElement: BRANDS.map((b, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: b.name,
    url: `${SITE.url}/brands/${b.slug}`,
  })),
};

export default function BrandsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }} />

      <section className="relative overflow-hidden border-b border-line">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70% 120% at 85% 0%, rgba(56,189,248,0.18), transparent 60%), linear-gradient(180deg,#0a0c16,#05060a)",
          }}
        />
        <div className="relative mx-auto max-w-[1500px] px-6 pb-14 pt-40 md:px-12 md:pb-20 md:pt-52">
          <div className="border-l-2 border-spark pl-6">
            <h1 className="display text-[clamp(3rem,8vw,6.5rem)] uppercase tracking-tight">Brands</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              From original universes and comics to tabletop games and the tools to play them, explore
              the family of brands that make up Sparkthunder.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24">
        <BrandGrid brands={BRANDS} />
      </section>
    </>
  );
}
