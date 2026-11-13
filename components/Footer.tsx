import Link from "next/link";
import { Bolt } from "./Bolt";
import { BRANDS, SITE } from "@/lib/brands";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-12">
        <div>
          <div className="flex items-center gap-3">
            <Bolt className="h-8 w-auto text-spark" />
            <span className="text-sm uppercase tracking-[0.38em]">{SITE.name}</span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">{SITE.description}</p>
        </div>

        <nav aria-label="Brands">
          <p className="eyebrow">Brands</p>
          <ul className="mt-5 space-y-3 text-sm">
            {BRANDS.map((b) => (
              <li key={b.slug}>
                <Link href={`/brands/${b.slug}`} className="text-white/80 hover:text-white">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="eyebrow">Sparkthunder</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/about" className="text-white/80 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <a href="https://knightverge.com" className="text-white/80 hover:text-white">
                Knightverge.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line px-6 py-6 text-center text-xs text-muted md:px-12">
        © 2026 {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
