import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Saiz — Desarrollador Full-Stack",
    short_name: "Gabriel Saiz",
    description:
      "Desarrollador full-stack con experiencia en React Native, Next.js y .NET. Portfolio y trayectoria profesional.",
    start_url: "/",
    display: "standalone",
    background_color: "#120e0b",
    theme_color: "#f0b429",
    lang: "es",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
