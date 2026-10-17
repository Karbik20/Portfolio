import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/content/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];
  return [
    { url: base.href, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: new URL(`/projects/${p.slug}`, base).href,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
