"use client";

import { useEffect, useState } from "react";
import { site } from "@/site/site.config";

const AFFILIATE_URL =
  "https://media.comeon.com/tracking.php?tracking_code&aid=121093&mid=1782&sid=461196&pid=400";

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

      <div className="relative mx-auto max-w-5xl px-4 py-8">
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
        <section className="mx-auto mt-10 max-w-2xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            BÄSTA ERBJUDANDEN & BONUSAR
          </h1>
          <p className="mt-3 text-sm text-white/75">
            Snabb översikt av aktuella erbjudanden och kampanjer. Tydliga villkor. 18+.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="noreferrer nofollow sponsored"
              className="rounded-2xl bg-yellow-300 px-6 py-3 text-sm font-extrabold text-slate-900 shadow-[0_18px_55px_rgba(0,0,0,0.55)] hover:bg-yellow-200"
            >
              SE ERBJUDANDE
            </a>
          </div>

          <div className="mt-2 text-[11px] text-white/60">
            18+ · Spela ansvarsfullt · Stöd & gränser
          </div>
        </section>

        {/* Single card = full 16:9 OG (no extra text area) */}
        <section className="mx-auto mt-10 max-w-3xl">
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="noreferrer nofollow sponsored"
            className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur"
          >
            <div className="relative">
              <div className="aspect-video w-full bg-black/25">
                <img
                  src="/og1.png"
                  alt=""
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* subtle hover sheen */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              <div className="absolute left-3 top-3 rounded-xl bg-yellow-300 px-3 py-1 text-[11px] font-extrabold text-slate-900 shadow-sm">
                ERBJUDANDE
              </div>

              <div className="absolute bottom-3 right-3 rounded-xl bg-black/45 px-3 py-2 text-xs font-semibold text-white/90 backdrop-blur">
                Klicka för att öppna →
              </div>
            </div>
          </a>
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
            <a className="underline" href={site.links.privacy}>
              Integritet
            </a>{" "}
            ·{" "}
            <a className="underline" href="/kontakt">
              Kontakt
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}