import type { Metadata } from "next";
import { Caveat, Nunito } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import CookieBanner from "@/components/ui/CookieBanner";
import { MotionProvider } from "@/components/providers/MotionProvider";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
  weight: ["600", "700"],
});

const siteUrl = "https://gabrielcodes.dev";

const siteDescription =
  "Gabriel Saiz — desarrollador full-stack en Zaragoza. Experiencia en React Native, Next.js y .NET. Apps en producción y abierto a oportunidades laborales.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriel Saiz — Desarrollador Full-Stack | Portfolio",
    template: "%s | Gabriel Saiz",
  },
  description: siteDescription,
  keywords: [
    "desarrollador full stack",
    "desarrollador React Native",
    "desarrollador Next.js",
    "desarrollador .NET",
    "portfolio desarrollador",
    "full stack developer España",
    "desarrollador Zaragoza",
    "empleo desarrollador full stack",
    "junior mid full stack Zaragoza",
    "React Native",
    "Next.js",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "Expo",
    "gabriel saiz",
  ],
  authors: [{ name: "Gabriel Saiz" }],
  creator: "Gabriel Saiz",
  publisher: "Gabriel Saiz",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Gabriel Saiz — Portfolio",
    title: "Gabriel Saiz — Desarrollador Full-Stack",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gabriel Saiz — Desarrollador full-stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Saiz — Desarrollador Full-Stack",
    description: siteDescription,
    images: [`${siteUrl}/img/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "tl7fbd-SUdovbuPNFSkybxDcu_TQs9maMuc0x9ar04c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${nunito.variable} ${caveat.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <meta name="description" content={siteDescription} />
        <meta name="theme-color" content="#120e0b" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen antialiased overflow-x-hidden max-w-[100vw]">
        <LocaleProvider>
          <MotionProvider>
            {children}
            <CookieBanner />
          </MotionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
