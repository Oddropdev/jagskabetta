import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/site/site.config";

export const metadata: Metadata = {
  title: `${site.copy.h1} - ${site.brand.name}`,
  description: site.brand.description,
  robots:
    site.mode === "demo"
      ? { index: false, follow: false }
      : { index: true, follow: true },

  metadataBase: new URL(`https://${site.brand.domain}`),

  openGraph: {
    title: `${site.copy.h1} - ${site.brand.name}`,
    description: site.brand.description,
    url: `https://${site.brand.domain}`,
    siteName: site.brand.name,
    locale: site.brand.locale,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.brand.name }],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.copy.h1} - ${site.brand.name}`,
    description: site.brand.description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.brand.locale}>
      <body>{children}</body>
    </html>
  );
}
