import Footer from "@/components/Footer"
import Header from "@/components/Header"
import StyledComponentsRegistry from "@/lib/registry"
import "@fontsource/iosevka/300.css"
import "@fontsource/iosevka/400.css"
import "@fontsource/iosevka/700.css"
import "@fontsource/iosevka/900.css"
import type { Metadata, Viewport } from "next"
import { Baloo_2 } from "next/font/google"
import "./globals.css"
import "./theme.css"

const description =
  "Relshy — Roblox systems developer. Gameplay systems, backend tools, and commissions."

export const metadata: Metadata = {
  metadataBase: new URL("https://relshy.nl"),
  title: { template: "%s | Relshy", default: "Relshy" },
  description,
  openGraph: {
    title: "Relshy",
    description: "​",
    siteName: "Relshy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relshy",
    description: "​",
  },
}

export const viewport: Viewport = {
  themeColor: "#AD4646",
}

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-logo",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={baloo2.variable}>
      <body>
        <div id="app">
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  )
}
