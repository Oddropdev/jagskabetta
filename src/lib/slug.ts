import { site } from "@/site/site.config";

export function resolveDealHref(slug: string) {
  return site.mode === "live" ? `/go/${slug}` : `/out/${slug}`;
}
