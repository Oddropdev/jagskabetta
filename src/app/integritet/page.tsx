import { site } from "@/site/site.config";

function TextLogo() {
  return (
    <div className="text-xl font-extrabold leading-[0.95] tracking-tight">
      <div className="text-white">Jag</div>
      <div className="text-yellow-300">Ska</div>
      <div className="text-white">
        Betta<span className="text-yellow-300">.</span>
      </div>
    </div>
  );
}

export default function Integritet() {
  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* subtle grain + vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 700px at 50% 15%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 600px at 20% 10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(250,204,21,0.08), transparent 62%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 6px)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 py-8">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <TextLogo />
          </a>

          <div className="flex items-center gap-2">
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
              href={`mailto:${site.copy.email}`}
            >
              Kontakt
            </a>
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
              SE
            </span>
          </div>
        </header>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
          <h1 className="text-2xl font-extrabold">Integritet</h1>
          <p className="mt-2 text-sm text-white/75">
            Den här sidan beskriver hur vi hanterar cookies, statistik och affiliate-länkar.
          </p>

          <div className="mt-6 space-y-5 text-sm text-white/80">
            <div>
              <h2 className="text-base font-extrabold text-white">Cookies & analys</h2>
              <p className="mt-1">
                Vi kan använda grundläggande cookies för att webbplatsen ska fungera och för enkel statistik.
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-white">Affiliate / reklam</h2>
              <p className="mt-1">
                {site.copy.disclosure}
              </p>
            </div>

            <div>
              <h2 className="text-base font-extrabold text-white">Kontakt</h2>
              <p className="mt-1">
                Vid frågor:{" "}
                <a className="underline" href={`mailto:${site.copy.email}`}>
                  {site.copy.email}
                </a>
              </p>
            </div>
          </div>

          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-300 px-5 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-200"
              href="/"
            >
              Tillbaka
            </a>
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
        </footer>
      </div>
    </main>
  );
}
