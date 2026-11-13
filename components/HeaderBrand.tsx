'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * The logo in the header. On the homepage the opening scene already shows the
 * logo in the middle of the screen, so the header copy fades in after it.
 */
export default function HeaderBrand() {
  const home = usePathname() === '/';
  return (
    <Link href="/" aria-label="Sparkthunder home" className={`block ${home ? 'brand-late' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sparkthunder-logo.png" alt="Sparkthunder" width={960} height={160} className="h-7 w-auto md:h-8" />
    </Link>
  );
}
