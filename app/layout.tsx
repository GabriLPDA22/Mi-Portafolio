import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import CookieBanner from "@/components/ui/CookieBanner";
import { MotionProvider } from "@/components/providers/MotionProvider";
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

const siteUrl = "https://gabrielcodes.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Gabriel Saiz — Desarrollador Freelance Full-Stack | Apps Móviles y Web",
    template: "%s | Gabriel Saiz",
  },
  description:
    "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Apps móviles iOS/Android, webs y dashboards desde 2.500€. Presupuesto sin compromiso en 24h.",
  keywords: [
    // Primary keywords
    "desarrollador full stack freelance",
    "desarrollador freelance España",
    "desarrollador móvil freelance",
    "full stack developer freelance",
    "desarrollador React Native freelance",
    "desarrollador Next.js freelance",
    // Tarifas (keywords con impresiones)
    "fullstack freelance tarifas",
    "desarrollador freelance tarifas",
    "precio desarrollador freelance",
    "cuánto cuesta desarrollador freelance",
    // Technologies
    "React Native",
    "Next.js",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "Expo",
    "Node.js",
    // Services
    "desarrollo móvil",
    "apps iOS",
    "apps Android",
    "desarrollo web",
    "desarrollo de aplicaciones",
    "aplicaciones móviles",
    "web apps",
    "dashboards",
    "APIs REST",
    // Long-tail
    "crear app móvil",
    "desarrollo app iOS Android",
    "desarrollador .NET freelance",
    "desarrollo web moderno",
    "full stack developer España",
    "desarrollador freelance Zaragoza",
    "gabriel saiz",
    "gabriel saiz desarrollador",
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
    title: "Gabriel Saiz — Desarrollador Freelance Full-Stack | Apps Móviles y Web",
    description:
      "Apps móviles iOS/Android, webs y dashboards hechos a medida. Especialista en React Native, Next.js y .NET. Presupuesto gratis en 24h.",
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gabriel Saiz — Desarrollador freelance web y móvil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Saiz — Desarrollador Freelance Full-Stack",
    description:
      "Apps móviles iOS/Android, webs y dashboards a medida. React Native, Next.js y .NET. Presupuesto gratis en 24h.",
    images: [`${siteUrl}/img/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/icon.png",
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
      className={`${spaceGrotesk.variable} ${inter.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#060607" />
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
