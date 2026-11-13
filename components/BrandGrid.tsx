import { BrandTile } from "./BrandTile";
import type { Brand } from "@/lib/brands";

export function BrandGrid({ brands }: { brands: Brand[] }) {
  return (
    <ul className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {brands.map((b, i) => (
        <BrandTile key={b.slug} brand={b} priority={i < 4} />
      ))}
    </ul>
  );
}
