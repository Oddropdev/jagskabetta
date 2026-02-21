import { site } from "@/site/site.config";
import { deals } from "@/data/deals";

const URLS = [
  "https://media.comeon.com/tracking.php?tracking_code&aid=121093&mid=1782&sid=461196&pid=400",
  "https://media.hajper.com/tracking.php?tracking_code&aid=121093&mid=9611&sid=461196&pid=3694",
  "https://media.lyllocasino.com/tracking.php?tracking_code&aid=121093&mid=6291&sid=461196&pid=2847",
  "https://media.snabbare.com/tracking.php?tracking_code&aid=121093&mid=1960&sid=461196&pid=635",
  "https://media.casinostugan.com/tracking.php?tracking_code&aid=121093&mid=9507&sid=461196&pid=850",
  "https://media.hajper.com/tracking.php?tracking_code&aid=121093&mid=1968&sid=461196&pid=743",
] as const;

function tagForIndex(idx: number) {
  if (idx === 0) return { text: "ERBJUDANDE", cls: "bg-yellow-300 text-slate-900" };
  if (idx === 1) return { text: "SPORT", cls: "bg-sky-500 text-slate-900" };
  return { text: "CASINO", cls: "bg-white text-slate-900" };
}

export default function Erbjudanden() {
  const items = deals.slice(0, 6);

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 700px at 50% 15%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(900px 600px at 20% 10%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(900px 600px at 80% 20%, rgba(250,204,21,0.08), transparent 62%), repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 2px, transparent 6px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-8">
        <header className="flex items-center justify-between">
          <a href="/" className="text-sm font-semibold text-white/85 hover:text-white">
            ← Hem
          </a>

          <div className="flex items-center gap-3">
            <a className="text-sm font-semibold text-white/85 hover:text-white" href={site.links.privacy}>
              Integritet
            </a>
            <a className="text-sm font-semibold text-white/85 hover:text-white" href="/kontakt">
              Kontakt
            </a>
          </div>
        </header>

        <section className="mt-8">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Alla erbjudanden</h1>
          <p className="mt-2 text-sm text-white/75">Bläddra bland erbjudanden. 18+.</p>
        </section>

        <section className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((d, idx) => {
            const tag = tagForIndex(idx);
            const img = `/og${idx + 1}.png`;
            const href = URLS[idx];

            return (
              <a
                key={d.slug}
                href={href}
                target="_blank"
                rel="noreferrer nofollow sponsored"
                className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur"
              >
                <div className="relative">
                  <div className="aspect-video w-full bg-black/25">
                    <img src={img} alt="" className="h-full w-full object-contain" loading="lazy" />
                  </div>

                  <div
                    className={`absolute left-3 top-3 rounded-xl px-3 py-1 text-[11px] font-extrabold shadow-sm ${tag.cls}`}
                  >
                    {tag.text}
                  </div>

                  <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                </div>
              </a>
            );
          })}
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