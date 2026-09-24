/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Evita el overlay "layout router" al entrar por 127.0.0.1 vs localhost
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

module.exports = nextConfig;
