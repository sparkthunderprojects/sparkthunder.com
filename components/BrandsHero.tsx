import { BRANDS } from "@/lib/brands";

const COLS = 16;
const ROWS = 9;

/** Same fixed formula as the intro sparks, so every render draws the same mosaic. */
function rand(i: number, k: number) {
  const x = Math.sin((i + 1) * k) * 43758.5453;
  return x - Math.floor(x);
}

const CELLS = Array.from({ length: COLS * ROWS }, (_, i) => {
  const lit = rand(i, 78.233) > 0.93;
  const brand = BRANDS[i % BRANDS.length];
  return {
    a: 0.02 + rand(i, 12.9898) * 0.07,
    lit,
    tint: brand.accent,
    delay: Math.round(rand(i, 39.346) * 9 * 100) / 100,
    dur: 6 + Math.round(rand(i, 11.135) * 4 * 100) / 100,
  };
});

/** Faint white silhouettes of the brand logos, floating in the mosaic. */
const GHOSTS = BRANDS.filter((b) => b.logo && b.logo.src.endsWith(".png") && b.slug !== "roll-combat").map((b, i) => {
  const spots = [
    { left: "9%", top: "20%" },
    { left: "76%", top: "17%" },
    { left: "86%", top: "52%" },
    { left: "14%", top: "50%" },
    { left: "62%", top: "66%" },
  ];
  return { brand: b, ...spots[i % spots.length], delay: i * 1.7 };
});

export function BrandsHero() {
  return (
    <section aria-labelledby="brands-heading" className="relative isolate flex min-h-[82svh] items-end overflow-hidden bg-background">
      {/* mosaic of dark squares, a few of them catching the brand colours */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-[repeat(16,minmax(0,1fr))]"
        style={{ gridAutoRows: "calc(100vw / 16)" }}
      >
        {CELLS.map((c, i) => (
          <span
            key={i}
            className={`bh-cell ${c.lit ? "bh-lit" : ""}`}
            style={
              {
                "--a": c.a,
                "--tint": c.tint,
                "--delay": `${c.delay}s`,
                "--dur": `${c.dur}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div aria-hidden="true" className="bh-sweep absolute inset-0" />

      {GHOSTS.map((g) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={g.brand.slug}
          src={g.brand.logo!.src}
          alt=""
          aria-hidden="true"
          width={g.brand.logo!.width}
          height={g.brand.logo!.height}
          className="bh-ghost pointer-events-none absolute hidden w-[11vw] max-w-[190px] md:block"
          style={{ left: g.left, top: g.top, ["--delay" as string]: `${g.delay}s` }}
        />
      ))}

      {/* centre mark */}
      <div className="absolute inset-x-0 top-[14%] z-[2] flex justify-center md:top-[16%]">
        <div className="bh-logo-wrap w-[min(70vw,560px)]">
          <span className="bh-logo block" role="img" aria-label="Sparkthunder" />
        </div>
      </div>

      {/* depth: fade into the page, darken behind the header */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-40 bg-gradient-to-b from-black/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[60%] bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[3] bg-[radial-gradient(ellipse_at_50%_35%,transparent_45%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-[4] mx-auto w-full max-w-[1500px] px-6 pb-14 md:px-12 md:pb-20">
        <div className="rise border-l border-white/30 pl-6 md:pl-8">
          <h1 id="brands-heading" className="display text-[clamp(3rem,8vw,6.5rem)] uppercase tracking-tight">
            Brands
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            From original universes and comics to tabletop games and the tools to play them, explore the
            family of brands that make up Sparkthunder.
          </p>
        </div>
      </div>
    </section>
  );
}
