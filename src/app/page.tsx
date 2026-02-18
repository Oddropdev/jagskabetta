"use client";

import { useEffect, useState } from "react";
import { deals } from "@/data/deals";
import { site } from "@/site/site.config";
import { resolveDealHref } from "@/lib/slug";

const TAGS = [
  { text: "SENASTE", cls: "bg-yellow-300 text-slate-900" },
  { text: "TOPPVAL", cls: "bg-sky-500 text-slate-900" },
  { text: "ERBJUDANDE", cls: "bg-orange-500 text-slate-900" },
  { text: "REKAR", cls: "bg-white text-slate-900" },
  { text: "VERIFIERAT", cls: "bg-emerald-400 text-slate-900" },
  { text: "HOCKEY", cls: "bg-amber-500 text-slate-900" },
];

function TextLogo({ size = "md" }: { size?: "md" | "lg" }) {
  const cls = size === "lg" ? "text-2xl leading-[0.95]" : "text-xl leading-[0.95]";
  return (
    <div className={`font-extrabold tracking-tight ${cls}`}>
      <div className="text-white">Jag</div>
      <div className="text-yellow-300">Ska</div>
      <div className="text-white">
        Betta<span className="text-yellow-300">.</span>
      </div>
    </div>
  );
}

export default function Home() {
  const top = deals.slice(0, 6);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

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

      {/* Mobile menu overlay */}
      {menuOpen ? (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute left-4 right-4 top-4 rounded-3xl border border-white/10 bg-[#0B0F1E]/95 p-4 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
            <div className="flex items-start justify-between">
              <TextLogo size="lg" />
              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <nav className="mt-4 grid gap-2 text-sm">
              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Hem
              </a>

              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                href="#kort"
                onClick={() => setMenuOpen(false)}
              >
                Bonusar
              </a>

              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                href={site.links.privacy}
                onClick={() => setMenuOpen(false)}
              >
                Integritet
              </a>

              <a
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                href="/kontakt"
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </a>
            </nav>
          </div>
        </div>
      ) : null}

      <div className="relative mx-auto max-w-6xl px-4 py-8">
        {/* Top bar */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10 sm:hidden"
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>

            <a href="/" className="flex items-center gap-3">
              <TextLogo size="lg" />
            </a>

            <nav className="ml-6 hidden items-center gap-6 text-xs font-semibold text-white/75 sm:flex">
              <a className="hover:text-white" href="/">
                HEM
              </a>
              <a className="hover:text-white" href="#kort">
                BONUSAR
              </a>
              <a className="hover:text-white" href={site.links.privacy}>
                INTEGRITET
              </a>
              <a className="hover:text-white" href="/kontakt">
                KONTAKT
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10 sm:inline-flex"
              href="/kontakt"
            >
              KONTAKT
            </a>
            <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
              SE
            </span>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto mt-10 max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            DIN SPORTKOLL BÖRJAR HÄR.
          </h1>
          <p className="mt-3 text-sm text-white/75">
            Speltips, jämförelser och snabba översikter – i samma flöde.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={top[0] ? resolveDealHref(top[0].slug) : "/"}
              className="rounded-2xl bg-yellow-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:bg-yellow-200"
            >
              {site.mode === "live" ? "KOLLA LÄGET NU" : "KOLLA LÄGET (DEMO)"}
            </a>
          </div>

          <div className="mt-2 text-[11px] text-white/60">
            18+ · Spela ansvarsfullt · Stöd & gränser
          </div>
        </section>

        {/* 6 cards */}
        <section id="kort" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((d, idx) => {
            const tag = TAGS[idx] ?? TAGS[0];
            const infoHref = `/out/${d.slug}`;

            return (
              <article
                key={d.slug}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur"
              >
                <a href={infoHref} className="block">
                  <div className="relative">
                    <img
                      src={`/og${idx + 1}.png`}
                      alt=""
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className={`absolute left-3 top-3 rounded-xl px-3 py-1 text-[11px] font-extrabold shadow-sm ${tag.cls}`}>
                      {tag.text}
                    </div>
                  </div>
                </a>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-base font-extrabold">{d.name}</div>
                      <div className="mt-2 text-sm text-white/85">{d.offer}</div>
                      <div className="mt-1 text-xs text-white/60">{d.terms}</div>
                    </div>

                    <a
                      href={infoHref}
                      className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                    >
                      Läs mer
                    </a>
                  </div>

                  <a
                    href={resolveDealHref(d.slug)}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-200"
                  >
                    {site.mode === "live" ? site.copy.cta : site.copy.cta_demo}
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        {/* Footer */}
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
            <a className="underline" href="/kontakt">Kontakt</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
