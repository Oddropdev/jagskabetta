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

export default function Kontakt() {
  const email = site.copy.email;

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
  const outlook = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}`;
  const mailto = `mailto:${email}`;

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

      <div className="relative mx-auto max-w-3xl px-4 py-8">
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <TextLogo />
          </a>

          <a
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
            href={site.links.privacy}
          >
            Integritet
          </a>
        </header>

        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
          <h1 className="text-2xl font-extrabold">Kontakt</h1>
          <p className="mt-2 text-sm text-white/75">
            Kontakta oss via e-post. Om din enhet inte öppnar e-postappen kan du använda webmail-knapparna nedan.
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs text-white/60">E-post</div>
            <div className="mt-1 text-sm font-semibold text-white">{email}</div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <a
              className="inline-flex items-center justify-center rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-extrabold text-slate-900 hover:bg-yellow-200"
              href={gmail}
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>

            <a
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-extrabold text-white/85 hover:bg-white/10"
              href={outlook}
              target="_blank"
              rel="noreferrer"
            >
              Outlook Web
            </a>

            <a
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-extrabold text-white/85 hover:bg-white/10"
              href={mailto}
            >
              Mail-app
            </a>
          </div>

          <div className="mt-6">
            <a
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-extrabold text-white/85 hover:bg-white/10"
              href="/"
            >
              Tillbaka
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
