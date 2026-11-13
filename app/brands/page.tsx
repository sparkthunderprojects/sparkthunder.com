import type { Metadata } from "next";
import { BrandGrid } from "@/components/BrandGrid";
import { BrandsHero } from "@/components/BrandsHero";
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

      <BrandsHero />

      <section className="mx-auto max-w-[1500px] px-6 pb-24 pt-6 md:px-12 md:pb-32">
        <BrandGrid brands={BRANDS} />
      </section>
    </>
  );
}
