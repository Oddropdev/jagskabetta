export type Deal = {
  slug: string;
  name: string;
  offer: string;
  terms: string;
  logo: string;
  affiliateUrl?: string;
  highlight?: boolean;
};

export const deals: Deal[] = [
  { slug: "casino-alpha", name: "Casino Alpha", offer: "100% upp till 2000 kr", terms: "Oms. x30 • Min dep 100 kr • 18+", logo: "🦁", highlight: true },
  { slug: "bet-beta", name: "Bet Beta", offer: "100 Free Spins", terms: "Endast nya spelare • 18+", logo: "🎲" },
  { slug: "spin-gamma", name: "Spin Gamma", offer: "25% cashback", terms: "Gäller utvalda spel • 18+", logo: "🌀" },
  { slug: "jackpot-delta", name: "Jackpot Delta", offer: "200 Free Spins", terms: "Nya kunder • Oms. x35 • 18+", logo: "💎" },
  { slug: "live-epsilon", name: "Live Epsilon", offer: "Bonus upp till 1000 kr", terms: "Verifiering krävs • 18+", logo: "🎥" },
  { slug: "slots-zeta", name: "Slots Zeta", offer: "50 Free Spins", terms: "Utvalda slots • 18+", logo: "🎰" },
  { slug: "sports-eta", name: "Sports Eta", offer: "Riskfritt spel 300 kr", terms: "Gäller sport • 18+", logo: "🏟️" },
  { slug: "vip-theta", name: "VIP Theta", offer: "VIP-erbjudande", terms: "Personliga villkor • 18+", logo: "👑" },
];
