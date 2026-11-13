import Link from "next/link";
import HeaderBrand from "./HeaderBrand";
import { BRANDS } from "@/lib/brands";

const NAV = [
  { href: "/about", label: "About" },
  ...BRANDS.map((b) => ({ href: `/brands/${b.slug}`, label: b.name })),
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-12">
        <HeaderBrand />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-xs uppercase tracking-[0.24em] text-white/70 transition hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <details className="group relative lg:hidden">
          <summary className="cursor-pointer list-none text-xs uppercase tracking-[0.28em] text-white/80">
            <span className="group-[[open]]:hidden">Menu</span>
            <span className="hidden group-[[open]]:inline">Close</span>
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-4 flex w-64 flex-col gap-1 border border-line bg-black/90 p-4 backdrop-blur"
          >
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="py-2 text-sm uppercase tracking-[0.2em] text-white/80 hover:text-white"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
