import Link from "next/link";
import type { Brand } from "@/lib/brands";

export function BrandCard({ brand, index }: { brand: Brand; index: number }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group relative flex aspect-[3/4] w-[78vw] shrink-0 snap-start flex-col justify-end overflow-hidden border border-line sm:w-[44vw] lg:w-[26vw] lg:max-w-[420px]"
    >
      <div
        className="absolute inset-0 transition duration-700 group-hover:scale-105"
        style={{ backgroundImage: brand.art }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <span className="absolute left-6 top-6 text-xs tracking-[0.3em] text-white/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="absolute right-6 top-6 border px-2 py-1 text-[0.62rem] uppercase tracking-[0.22em]"
        style={{ borderColor: brand.accent, color: brand.accent }}
      >
        {brand.status}
      </span>
      <div className="relative p-6">
        <p className="eyebrow">{brand.category}</p>
        <h3 className="display mt-3 text-4xl">{brand.name}</h3>
        <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-white/70">{brand.tagline}</p>
        <span className="link-arrow mt-5 inline-block text-xs uppercase tracking-[0.26em]">
          Explore
        </span>
      </div>
    </Link>
  );
}
