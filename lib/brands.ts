export type BrandStatus = "Live" | "In development";

export type Brand = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  description: string[];
  status: BrandStatus;
  href?: string;
  /** Tailwind-free CSS gradient used as the cinematic key art until real art is dropped in. */
  art: string;
  accent: string;
  highlights?: { title: string; text: string }[];
  /** Brand logo shown on the tile and the brand page. Brands without one show their name in type. */
  logo?: { src: string; width: number; height: number };
  /** Background of the brand tile on the brands page. */
  tileBg: string;
  /** "light" tiles use dark text and a dark logo, "dark" tiles the opposite. */
  tone: "dark" | "light";
  /** Set when the logo file has its own opaque light background that should blend into the tile. */
  logoBlend?: boolean;
  /** Wide key-art banner used as the brand page hero. */
  banner?: string;
};

export const SITE = {
  name: "Sparkthunder",
  url: "https://sparkthunder.com",
  tagline: "Worlds worth entering.",
  description:
    "Sparkthunder is the home of original universes, comics, tabletop games and the tools to play them — Knightverge, Roll Combat, Occult Inc and more.",
};

export const BRANDS: Brand[] = [
  {
    slug: "knightverge",
    name: "Knightverge",
    category: "Comics & Universe",
    tagline: "A vast universe, mapped.",
    summary:
      "The comic book label at the heart of Sparkthunder — a sprawling, interconnected universe of heroes, villains, powers and places.",
    description: [
      "Knightverge is Sparkthunder's comic book label: a deeply mapped universe built to be explored, not just read. Every character, location, power and moment sits inside one connected world.",
      "Knightverge.com is the lore home for that universe — character profiles, timelines, powers and the connections between them — so fans can follow any thread as far as it goes.",
    ],
    status: "Live",
    href: "https://knightverge.com",
    art: "radial-gradient(120% 90% at 20% 10%, #1d4ed8 0%, transparent 55%), radial-gradient(90% 80% at 85% 90%, #7c3aed 0%, transparent 60%), linear-gradient(160deg,#050816,#0b1030)",
    accent: "#60a5fa",
    logo: { src: "/brands/logos/knightverge.png", width: 1000, height: 224 },
    banner: "/brands/banners/knightverge.jpg",
    tileBg: "radial-gradient(90% 90% at 50% 0%, rgba(212,160,23,0.28), transparent 65%), linear-gradient(160deg,#0a0d1f,#05060f)",
    tone: "dark",
    highlights: [
      { title: "Characters", text: "Deep profiles with powers, gear, history and relationships." },
      { title: "Timeline", text: "A universe-wide timeline you can filter and follow." },
      { title: "Connections", text: "See how every hero, villain and place links together." },
    ],
  },
  {
    slug: "roll-combat",
    name: "Roll Combat",
    category: "Tabletop Games",
    tagline: "Roll for your story.",
    summary:
      "The label behind Sparkthunder's tabletop RPGs and the virtual tabletop to play them on, including Knightverge Legacy, set in the Knightverge universe.",
    description: [
      "Roll Combat is the brand through which Sparkthunder releases its role-playing games. Its flagship, Knightverge Legacy, lets players step into the Knightverge universe as a Persona — choosing an Origin and an Archetype and building a legend over a long-running campaign.",
      "Every system is designed around a world that already exists, so tables start with story, stakes and history instead of a blank page.",
      "Roll Combat VTT is the virtual tabletop for Roll Combat games: interactive battle maps with fog of war and vision, tokens, initiative and combat tracking, realtime chat and 3D dice, plus automation tools that help Game Masters run a session smoothly.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 80% 10%, #ffffff 0%, transparent 60%), linear-gradient(160deg,#eef0f5,#b4b9c6)",
    accent: "#b45309",
    logo: { src: "/brands/logos/roll-combat.png", width: 800, height: 634 },
    tileBg: "radial-gradient(90% 90% at 50% 0%, #ffffff, transparent 70%), linear-gradient(160deg,#e6e8ee,#b4b9c6)",
    tone: "light",
    highlights: [
      { title: "Knightverge Legacy", text: "A long-form tabletop RPG set in the Knightverge universe." },
      { title: "Personas", text: "Choose an Origin and an Archetype and shape your own legend." },
      { title: "Roll Combat VTT", text: "A virtual tabletop with battle maps, tokens, dice and combat tools." },
    ],
  },
  {
    slug: "occult-inc",
    name: "Occult Inc",
    category: "Original Universe",
    tagline: "Something is watching.",
    summary:
      "A second original Sparkthunder universe — a separate world, with its own mysteries, currently in development.",
    description: [
      "Occult Inc is a new original universe from Sparkthunder, separate from Knightverge and built from the ground up as its own world.",
      "It is in development. More will be revealed here as it takes shape.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 75% 15%, #6d28d9 0%, transparent 55%), radial-gradient(90% 80% at 10% 90%, #1e1b4b 0%, transparent 60%), linear-gradient(160deg,#0b0618,#07050f)",
    accent: "#a78bfa",
    logo: { src: "/brands/logos/occult-inc.png", width: 1194, height: 437 },
    banner: "/brands/banners/occult-inc.jpg",
    tileBg: "radial-gradient(90% 90% at 50% 0%, rgba(139,92,246,0.35), transparent 65%), linear-gradient(160deg,#120a24,#07050f)",
    tone: "dark",
    highlights: [
      { title: "A new world", text: "Its own rules, characters and secrets — separate from Knightverge." },
      { title: "In development", text: "Follow Sparkthunder for the first reveal." },
    ],
  },
  {
    slug: "shadeveil",
    name: "Shadeveil",
    category: "Sparkthunder Brand",
    tagline: "Step behind the veil.",
    summary: "A Sparkthunder brand with a gothic edge. More will be revealed here soon.",
    description: [
      "Shadeveil is a Sparkthunder brand currently in development.",
      "Details are being kept behind the veil for now. Check back for the first reveal.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 80% 10%, #ddd6f3 0%, transparent 60%), linear-gradient(160deg,#f3effb,#b9afd4)",
    accent: "#7c3aed",
    logo: { src: "/brands/logos/shadeveil.png", width: 1000, height: 364 },
    tileBg: "radial-gradient(90% 90% at 50% 0%, #ffffff, transparent 70%), linear-gradient(160deg,#ebe6f6,#b9afd4)",
    tone: "light",
  },
  {
    slug: "ludicrous-laughs",
    name: "Ludicrous Laughs",
    category: "Sparkthunder Brand",
    tagline: "Cartoon chaos!",
    summary: "The loud, bright, cartoon side of Sparkthunder. More coming soon.",
    description: [
      "Ludicrous Laughs is a Sparkthunder brand currently in development.",
      "Expect cartoon chaos. Details will be announced here.",
    ],
    status: "In development",
    art: "linear-gradient(160deg,#fffaf0,#fde9c8)",
    accent: "#ef4444",
    logo: { src: "/brands/logos/ludicrous-laughs.jpg", width: 1200, height: 655 },
    tileBg: "#fefaee",
    tone: "light",
    logoBlend: true,
  },
  {
    slug: "grim-gala",
    name: "Grim Gala",
    category: "Horror Label",
    tagline: "The horror label.",
    summary: "Grim Gala is Sparkthunder's horror label. More coming soon.",
    description: [
      "Grim Gala is a horror label, separate in tone from the rest of the Sparkthunder family.",
      "Details will be announced here.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 50% 10%, #9f1239 0%, transparent 60%), linear-gradient(160deg,#14060a,#07030a)",
    accent: "#e11d48",
    logo: { src: "/brands/logos/grim-gala.png", width: 900, height: 682 },
    tileBg: "radial-gradient(90% 90% at 50% 0%, rgba(225,29,72,0.28), transparent 65%), linear-gradient(160deg,#16070c,#07030a)",
    tone: "dark",
  },
];

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}
