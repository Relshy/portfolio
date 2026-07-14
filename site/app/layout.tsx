import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Roblox systems developer for hire. Combat, economies, progression, datastores, and full custom commissions, all built server-side first. Fastest response on Discord.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Relshy — Roblox Systems Developer",
    template: "%s — Relshy",
  },
  description,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Relshy — Roblox Systems Developer",
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Relshy — Roblox systems developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relshy — Roblox Systems Developer",
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
