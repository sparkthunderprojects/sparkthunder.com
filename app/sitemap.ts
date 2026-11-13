import type { MetadataRoute } from "next";
import { BRANDS, SITE } from "@/lib/brands";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, priority: 1 },
    { url: `${SITE.url}/brands`, priority: 0.9 },
    { url: `${SITE.url}/about`, priority: 0.8 },
    ...BRANDS.map((b) => ({ url: `${SITE.url}/brands/${b.slug}`, priority: 0.7 })),
  ];
}
