/**
 * The Sparkthunder Shop logo, as on sparkthunder.shop: the wordmark with a
 * yellow SHOP label under it, set between two thin rules.
 */
export function ShopLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`mx-auto flex w-[min(84vw,760px)] flex-col items-center gap-[clamp(0.5rem,1.4vw,1rem)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/shop-logo.png"
        alt=""
        width={1200}
        height={186}
        className="h-auto w-full drop-shadow-[0_0_24px_rgba(0,0,0,0.6)]"
      />
      <span aria-hidden="true" className="flex w-full items-center gap-[2.5%] text-[#ffd400]">
        <span className="h-px flex-1 bg-[#ffd400]/50" />
        <span
          className="pl-[0.6em] text-[clamp(1rem,3.4vw,1.9rem)] font-bold leading-none tracking-[0.6em]"
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          SHOP
        </span>
        <span className="h-px flex-1 bg-[#ffd400]/50" />
      </span>
    </span>
  );
}
