import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";

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
    "Desarrollador Full-Stack freelance especializado en React Native, Next.js y .NET. Desarrollo de aplicaciones móviles iOS/Android, web apps y dashboards. Transformo ideas en productos digitales en producción con foco en rendimiento y mantenibilidad.",
  keywords: [
    "desarrollador full stack",
    "freelance developer",
    "React Native",
    "Next.js",
    "desarrollo móvil",
    "apps iOS",
    "apps Android",
    "desarrollo web",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "desarrollador freelance España",
    "desarrollo de aplicaciones",
    "full stack developer",
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
    // Añade aquí tus códigos de verificación cuando los tengas
    // google: "tu-codigo-google",
    // yandex: "tu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
