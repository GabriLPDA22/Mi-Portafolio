import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Gabriel Saiz — Desarrollador Freelance Full-Stack",
    short_name: "Gabriel Saiz",
    description:
      "Desarrollador móvil freelance especializado en React Native, Next.js y .NET. Apps iOS/Android, webs y dashboards.",
    start_url: "/",
    display: "standalone",
    background_color: "#101010",
    theme_color: "#ccf53f",
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
