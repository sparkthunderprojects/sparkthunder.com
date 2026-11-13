import Link from "next/link";
import type { Brand } from "@/lib/brands";

/** One brand on the brands page: an art tile with the logo, and the name underneath. */
export function BrandTile({ brand, priority = false }: { brand: Brand; priority?: boolean }) {
  const light = brand.tone === "light";
  return (
    <li>
      <Link href={`/brands/${brand.slug}`} className="group block" aria-label={brand.name}>
        <div
          className="relative aspect-[5/4] overflow-hidden border border-line transition duration-500 group-hover:border-white/60"
          style={{ background: brand.tileBg }}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center transition duration-700 ease-out group-hover:scale-[1.06] ${brand.logoBlend ? "" : "p-[12%]"}`}
          >
            {brand.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={brand.logo.src}
                alt=""
                width={brand.logo.width}
                height={brand.logo.height}
                loading={priority ? "eager" : "lazy"}
                className={brand.logoBlend ? "h-full w-full object-cover" : "max-h-full max-w-full object-contain"}
              />
            ) : (
              <span
                className={`display text-center text-[clamp(1.6rem,2.6vw,2.4rem)] ${light ? "text-black" : "text-white"}`}
              >
                {brand.name}
              </span>
            )}
          </div>
          <span
            className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition duration-500 group-hover:scale-x-100"
            style={{ background: brand.accent }}
          />
        </div>
        <p className="mt-3 text-sm font-medium">{brand.name}</p>
        <p className="mt-1 text-xs text-muted">
          {brand.category} · {brand.status}
        </p>
      </Link>
    </li>
  );
}
