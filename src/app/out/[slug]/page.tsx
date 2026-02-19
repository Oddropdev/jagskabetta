import { site } from "@/site/site.config";

export default async function OutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* subtle grain + vignette (same style as home) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 700px at 50% 15%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 600px at 20% 10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(250,204,21,0.08), transparent 62%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 6px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 py-10">
        <header className="flex items-start justify-between gap-4">
          <a
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
          >
            ← Tillbaka
          </a>

          <a
            href={site.links.privacy}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
          >
            Integritet
          </a>
        </header>

        <section className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
          <div className="text-xs font-semibold text-white/60">ID: {slug}</div>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
            Coming soon
          </h1>

          <p className="mt-3 text-sm text-white/75">
            Den här sidan är under uppbyggnad. Vi fyller på mer info snart.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/#kort"
              className="rounded-2xl bg-yellow-300 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-200"
            >
              Till erbjudanden
            </a>

            <a
              href={`mailto:${site.copy.email}`}
              className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-extrabold text-white/85 hover:bg-white/10"
            >
              Kontakta oss
            </a>
          </div>

          <div className="mt-6 text-[11px] text-white/60">
            18+ · Spela ansvarsfullt · {site.copy.disclosure}
          </div>
        </section>

        <footer className="mt-10 border-t border-white/10 pt-6 text-xs text-white/65">
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span className="font-semibold text-white/80">{site.copy.footer_rg}</span>
            <span className="text-white/30">·</span>
            <a className="underline" href={site.links.stodlinjen} target="_blank" rel="noreferrer">
              Stödlinjen
            </a>
            <span className="text-white/30">·</span>
            <a className="underline" href={site.links.spelpaus} target="_blank" rel="noreferrer">
              Spelpaus
            </a>
          </div>

          <div className="mt-2 text-center">{site.copy.disclosure}</div>

          <div className="mt-2 text-center">
            <a className="underline" href={site.links.privacy}>Integritet</a> ·{" "}
            <a className="underline" href={`mailto:${site.copy.email}`}>{site.copy.email}</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
