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
