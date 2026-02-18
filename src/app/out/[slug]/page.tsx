import { deals } from "@/data/deals";
import { site } from "@/site/site.config";
import { resolveDealHref } from "@/lib/slug";

function findOgIndex(slug: string) {
  const idx = deals.findIndex((d) => d.slug === slug);
  // OG kuvat on og1..og6 → käytetään vain jos slug on 0..5
  if (idx >= 0 && idx < 6) return idx + 1;
  return null;
}

export default async function OutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const deal = deals.find((d) => d.slug === slug);

  if (!deal) {
    return (
      <main className="min-h-screen bg-[#070A12] text-white">
        <div className="mx-auto max-w-3xl px-4 py-12">
          <a className="text-sm text-white/70 underline" href="/">
            ← Tillbaka
          </a>
          <h1 className="mt-6 text-2xl font-extrabold">Hittades inte</h1>
          <p className="mt-2 text-sm text-white/70">
            Den här sidan finns inte längre.
          </p>
        </div>
      </main>
    );
  }

  const ogIndex = findOgIndex(slug);

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <a className="text-sm text-white/70 underline" href="/">
          ← Tillbaka
        </a>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
          {ogIndex ? (
            <div className="relative">
              <img
                src={`/og${ogIndex}.png`}
                alt=""
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          ) : null}

          <div className="p-6">
            <div className="flex items-center gap-2">
              <span className="text-xl" aria-hidden>
                {deal.logo}
              </span>
              <h1 className="text-2xl font-extrabold">{deal.name}</h1>
            </div>

            <p className="mt-3 text-sm text-white/85">{deal.offer}</p>
            <p className="mt-1 text-xs text-white/60">{deal.terms}</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-extrabold">Coming soon</div>
              <p className="mt-1 text-sm text-white/70">
                Den här informationssidan är under uppbyggnad. Vi lägger till mer
                innehåll och jämförelser snart.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={resolveDealHref(deal.slug)}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-yellow-300 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-200"
              >
                {site.mode === "live" ? site.copy.cta : site.copy.cta_demo}
              </a>

              <a
                href="/"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 hover:bg-white/10"
              >
                Till listan
              </a>
            </div>

            <div className="mt-6 text-xs text-white/60">
              {site.copy.disclosure}
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-white/60">
          <div>{site.copy.footer_rg}</div>
          <div className="mt-2">
            <a className="underline" href={site.links.stodlinjen} target="_blank" rel="noreferrer">
              Stödlinjen
            </a>{" "}
            ·{" "}
            <a className="underline" href={site.links.spelpaus} target="_blank" rel="noreferrer">
              Spelpaus
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
