import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { deals } from "@/data/deals";
import { site } from "@/site/site.config";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const deal = deals.find((d) => d.slug === slug);
  if (!deal) return NextResponse.redirect(new URL("/", request.url));

  // demo: ei koskaan ulos (vaikka affiliateUrl olisi asetettu)
  if (site.mode !== "live") {
    return NextResponse.redirect(new URL(`/out/${slug}`, request.url));
  }

  // live: vain jos affiliateUrl löytyy
  if (!deal.affiliateUrl) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.redirect(deal.affiliateUrl, 302);
}
