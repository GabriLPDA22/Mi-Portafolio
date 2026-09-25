/**
 * Idiomas por ruta: español en `/`, inglés en `/en`. Cada página es HTML estático
 * indexable (con hreflang), en vez de cambiar los textos con JavaScript.
 */
import { translations } from '@/lib/translations';
import type { Locale } from '@/lib/i18n';

export type { Locale };
export type T = (typeof translations)['es'];

export const getT = (locale: Locale): T => translations[locale] as T;

/** Ruta localizada: localePath('en', '/privacidad') → '/en/privacidad'. */
export const localePath = (locale: Locale, path = '/') => {
  if (locale === 'es') return path;
  return path === '/' ? '/en' : `/en${path}`;
};

/** Portada del idioma, para construir anclas (`${home}#proyectos`). */
export const homePath = (locale: Locale) => (locale === 'es' ? '/' : '/en');

export const otherLocale = (locale: Locale): Locale => (locale === 'es' ? 'en' : 'es');

/** Rótulos "de videojuego" de cada sección (chip HUD de la cabecera). */
export const gameLabels = {
  es: {
    level: 'Nivel',
    about: 'Perfil del jugador',
    services: 'Habilidades',
    projects: 'Selecciona nivel',
    experience: 'Misiones completadas',
    results: 'Reglas del equipo',
    contact: 'Modo cooperativo',
    selected: 'Selected',
    slot: 'Slot',
    completed: 'Completada',
    current: 'En curso',
  },
  en: {
    level: 'Level',
    about: 'Player profile',
    services: 'Skills',
    projects: 'Select a level',
    experience: 'Completed quests',
    results: 'House rules',
    contact: 'Co-op mode',
    selected: 'Selected',
    slot: 'Slot',
    completed: 'Completed',
    current: 'Ongoing',
  },
} as const;
