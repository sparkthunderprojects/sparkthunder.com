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
  highlights: { title: string; text: string }[];
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
      "The label behind Sparkthunder's tabletop RPGs — including Knightverge Legacy, set in the Knightverge universe.",
    description: [
      "Roll Combat is the brand through which Sparkthunder releases its role-playing games. Its flagship, Knightverge Legacy, lets players step into the Knightverge universe as a Persona — choosing an Origin and an Archetype and building a legend over a long-running campaign.",
      "Every system is designed around a world that already exists, so tables start with story, stakes and history instead of a blank page.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 80% 10%, #b45309 0%, transparent 55%), radial-gradient(90% 80% at 10% 95%, #be123c 0%, transparent 60%), linear-gradient(160deg,#120805,#1f0d0a)",
    accent: "#fbbf24",
    highlights: [
      { title: "Knightverge Legacy", text: "A long-form tabletop RPG set in the Knightverge universe." },
      { title: "Personas", text: "Choose an Origin and an Archetype and shape your own legend." },
      { title: "Powers & Abilities", text: "Distinct systems for innate Powers and trained Abilities." },
    ],
  },
  {
    slug: "roll-combat-vtt",
    name: "Roll Combat VTT",
    category: "Play Tools",
    tagline: "The table, anywhere.",
    summary:
      "A virtual tabletop built for Roll Combat games — maps, tokens, dice and combat in one place.",
    description: [
      "Roll Combat VTT is the virtual tabletop that brings Roll Combat games online: interactive battle maps with fog of war and vision, tokens, initiative and combat tracking, realtime chat and 3D dice.",
      "Game Masters get automation tools to run a session smoothly, and players get character sheets that live alongside the action.",
    ],
    status: "In development",
    art: "radial-gradient(110% 90% at 15% 15%, #0891b2 0%, transparent 55%), radial-gradient(90% 80% at 90% 90%, #4f46e5 0%, transparent 60%), linear-gradient(160deg,#04111a,#08182b)",
    accent: "#22d3ee",
    highlights: [
      { title: "Battle maps", text: "Layered maps, fog of war, vision and measurement tools." },
      { title: "Dice & chat", text: "Realtime chat with slash-command rolls and 3D physics dice." },
      { title: "Automation", text: "Visual rules that let Game Masters run sessions faster." },
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
    art: "radial-gradient(110% 90% at 75% 15%, #047857 0%, transparent 55%), radial-gradient(90% 80% at 10% 90%, #1e1b4b 0%, transparent 60%), linear-gradient(160deg,#03100c,#07130f)",
    accent: "#34d399",
    highlights: [
      { title: "A new world", text: "Its own rules, characters and secrets — separate from Knightverge." },
      { title: "In development", text: "Follow Sparkthunder for the first reveal." },
    ],
  },
];

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug);
}
