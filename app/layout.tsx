import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import CookieBanner from "@/components/ui/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
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
    default: "Gabriel Saiz — Freelance Full-Stack Developer | Desarrollo Web y Apps Móviles",
    template: "%s | Gabriel Saiz",
  },
  description:
    "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles iOS/Android, web apps y dashboards. Transformo ideas en productos digitales en producción. Consulta gratuita.",
  keywords: [
    // Primary keywords
    "desarrollador full stack",
    "freelance developer",
    "desarrollador freelance España",
    "full stack developer",
    "desarrollador React Native",
    "desarrollador Next.js",
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
    // Long-tail keywords
    "desarrollador full stack freelance",
    "desarrollador React Native freelance",
    "desarrollador Next.js freelance",
    "crear app móvil",
    "desarrollo app iOS Android",
    "desarrollador .NET freelance",
    "desarrollo web moderno",
    "full stack developer España",
    "desarrollador freelance Zaragoza",
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
    title: "Gabriel Saiz — Freelance Full-Stack Developer",
    description:
      "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles, web apps y dashboards con foco en rendimiento.",
    images: [
      {
        url: `${siteUrl}/img/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gabriel Saiz — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Saiz — Freelance Full-Stack Developer",
    description:
      "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles y web apps.",
    images: [`${siteUrl}/img/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/icon.png", type: "image/png" },
    ],
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
      className={`${outfit.variable} ${inter.variable} overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased overflow-x-hidden max-w-[100vw]">
        <LocaleProvider>
          {children}
          <CookieBanner />
        </LocaleProvider>
      </body>
    </html>
  );
}
