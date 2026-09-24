/**
 * Datos estructurados Schema.org (JSON-LD) de un portfolio personal.
 *
 * La entidad principal es `Person` con un `@id` estable; la portada es un `ProfilePage`
 * cuyo `mainEntity` es esa persona. Así Google y los motores generativos asocian nombre,
 * puesto, habilidades, formación, premios y perfiles sociales a la misma entidad.
 */
import { site, absoluteUrl } from '@/config/site';
import { education, achievements, skills } from '@/data/profile';
import { tech } from '@/data/tech';
import { projects } from '@/data/projects';

type Json = Record<string, unknown>;

export const ids = {
  person: `${site.url}/#person`,
  website: `${site.url}/#website`,
} as const;

export const personSchema = (): Json => ({
  '@type': 'Person',
  '@id': ids.person,
  name: site.fullName,
  alternateName: site.name,
  jobTitle: site.role,
  description: site.description,
  url: `${site.url}/`,
  image: absoluteUrl('/img/gabriel-saiz.webp'),
  email: `mailto:${site.contact.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Zaragoza', addressRegion: 'Aragón', addressCountry: 'ES' },
  knowsLanguage: [{ '@type': 'Language', name: 'Español', alternateName: 'es' }],
  knowsAbout: [...new Set(skills.flatMap((g) => g.items.map((id) => tech[id].name)))],
  alumniOf: [...new Set(education.map((e) => e.center))].map((name) => ({ '@type': 'EducationalOrganization', name })),
  award: achievements.map((a) => `${a.title} (${a.year})`),
  hasOccupation: {
    '@type': 'Occupation',
    name: site.role,
    occupationLocation: { '@type': 'City', name: 'Zaragoza' },
    skills: '.NET, C#, Vue 3, TypeScript, React Native, PostgreSQL, PHP, Symfony, Java, AWS',
  },
  sameAs: [site.social.linkedin, site.social.github],
});

export const websiteSchema = (): Json => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${site.url}/`,
  name: `${site.name} — ${site.role}`,
  inLanguage: 'es-ES',
  author: { '@id': ids.person },
});

export const profilePageSchema = (): Json => ({
  '@type': 'ProfilePage',
  '@id': `${site.url}/#profilepage`,
  url: `${site.url}/`,
  name: `${site.name} — ${site.role}`,
  inLanguage: 'es-ES',
  isPartOf: { '@id': ids.website },
  mainEntity: { '@id': ids.person },
});

export const projectsSchema = (): Json => ({
  '@type': 'ItemList',
  name: 'Proyectos',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': p.label.startsWith('App') ? 'SoftwareApplication' : 'CreativeWork',
      name: p.name,
      description: p.description,
      image: absoluteUrl(p.image.src),
      creator: { '@id': ids.person },
      keywords: p.stack.join(', '),
      ...(p.label.startsWith('App') ? { operatingSystem: 'iOS', applicationCategory: 'SocialNetworkingApplication' } : {}),
      ...(p.links[0] ? { url: p.links[0].url } : {}),
    },
  })),
});

export const webPageSchema = ({ path, title, description }: { path: string; title: string; description: string }): Json => ({
  '@type': 'WebPage',
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  inLanguage: 'es-ES',
  isPartOf: { '@id': ids.website },
});

/** Grafo completo: entidades globales + nodos específicos de la página. */
export const buildGraph = (pageNodes: Json[]): Json => ({
  '@context': 'https://schema.org',
  '@graph': [personSchema(), websiteSchema(), ...pageNodes],
});
