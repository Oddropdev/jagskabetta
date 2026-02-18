export const site = {
  brand: {
    name: "JagSkaBetta",
    domain: "jagskabetta.com",
    locale: "sv-SE",
    description: "Snabb översikt av aktuella erbjudanden. Tydliga villkor. 18+.",
  },
  copy: {
    h1: "Casinodeals & erbjudanden",
    intro: "Snabb översikt av aktuella erbjudanden. Tydliga villkor. 18+.",
    about: "En enkel deals-hub för social trafik. Transparenta villkor och tydlig reklammarkering.",
    cta: "Till casinot",
    cta_demo: "Läs mer (demo)",
    disclosure: "Reklam/Affiliate: Vi kan få provision via länkar utan extra kostnad för dig.",
    footer_rg: "18+ | Spela ansvarsfullt",
    email: "kontakt@jagskabetta.com",
  },
  links: {
    privacy: "/integritet",
    stodlinjen: "https://stodlinjen.se",
    spelpaus: "https://spelpaus.se",
  },
  mode: (process.env.NEXT_PUBLIC_MODE as "demo" | "live") || "demo",
} as const;
