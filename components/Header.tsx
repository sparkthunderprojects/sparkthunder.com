"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderBrand from "./HeaderBrand";

const NAV = [
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About" },
];

/**
 * See-through header. It sits over the top of every page with no background,
 * and turns into a frosted glass bar once the page is scrolled.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-black/30 backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-6 transition-all duration-300 md:px-12 ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <HeaderBrand />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-xs uppercase tracking-[0.24em] text-white/75 transition hover:text-white"
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
            className="absolute right-0 mt-4 flex w-56 flex-col gap-1 border border-white/10 bg-black/50 p-4 backdrop-blur-xl"
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
