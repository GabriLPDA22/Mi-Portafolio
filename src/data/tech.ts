/**
 * Registro de tecnologías con su logo (Simple Icons, CC0). Los logos se renderizan como SVG
 * inline en build: cero peticiones y cero JS. Las marcas que Simple Icons no incluye
 * (C#, AWS, SignalR…) usan un icono genérico de `Icon.astro`.
 */
import * as si from 'simple-icons';
import type { SimpleIcon } from 'simple-icons';

export interface Tech {
  name: string;
  /** Path SVG (viewBox 0 0 24 24) del logo oficial, si existe. */
  path?: string;
  /** Color de marca legible sobre fondo oscuro. */
  color: string;
  /** Icono genérico de respaldo cuando no hay logo oficial. */
  fallback?: 'cloud' | 'zap' | 'code' | 'server' | 'smartphone' | 'shield' | 'database';
}

const icons = si as unknown as Record<string, SimpleIcon>;

/** Las marcas con color casi negro (Expo, Next.js, Apple…) se muestran en blanco sobre el fondo oscuro. */
const readable = (hex: string) => {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.35 ? '#FFFFFF' : `#${hex}`;
};

const logo = (name: string, slug: string): Tech => {
  const icon = icons[`si${slug[0].toUpperCase()}${slug.slice(1)}`];
  if (!icon) throw new Error(`Simple Icons no incluye "${slug}"`);
  return { name, path: icon.path, color: readable(icon.hex) };
};

export const tech = {
  dotnet: logo('.NET', 'dotnet'),
  csharp: { name: 'C#', color: '#9B4F96', fallback: 'code' },
  vue: logo('Vue 3', 'vuedotjs'),
  typescript: logo('TypeScript', 'typescript'),
  javascript: logo('JavaScript', 'javascript'),
  reactNative: logo('React Native', 'react'),
  expo: logo('Expo', 'expo'),
  flutter: logo('Flutter', 'flutter'),
  postgresql: logo('PostgreSQL', 'postgresql'),
  mysql: logo('MySQL', 'mysql'),
  signalr: { name: 'SignalR', color: '#00E676', fallback: 'zap' },
  stripe: logo('Stripe', 'stripe'),
  aws: { name: 'AWS', color: '#FF9900', fallback: 'cloud' },
  docker: logo('Docker', 'docker'),
  kubernetes: logo('Kubernetes', 'kubernetes'),
  githubActions: logo('GitHub Actions', 'githubactions'),
  nginx: logo('Nginx', 'nginx'),
  linux: logo('Linux', 'linux'),
  astro: logo('Astro', 'astro'),
  tailwind: logo('Tailwind', 'tailwindcss'),
  vite: logo('Vite', 'vite'),
  nextjs: logo('Next.js', 'nextdotjs'),
  php: logo('PHP', 'php'),
  symfony: logo('Symfony', 'symfony'),
  wordpress: logo('WordPress', 'wordpress'),
  gitlab: logo('GitLab', 'gitlab'),
  figma: logo('Figma', 'figma'),
  appStore: logo('App Store', 'appstore'),
  googlePlay: logo('Google Play', 'googleplay'),
  codemagic: logo('Codemagic', 'codemagic'),
  jwt: logo('JWT', 'jsonwebtokens'),
  java: logo('Java', 'openjdk'),
} satisfies Record<string, Tech>;

export type TechId = keyof typeof tech;
