/**
 * Constructores de datos estructurados Schema.org (JSON-LD).
 *
 * Todas las entidades globales tienen un `@id` estable para que cada página
 * las referencie en lugar de duplicarlas: Google y los motores generativos
 * unen el grafo y entienden que negocio, web y fundador son la misma entidad.
 */
import { site, absoluteUrl, PHONE_PLACEHOLDER } from '@/config/site';
import { services, type Service } from '@/data/services';
import type { Faq } from '@/data/faqs';

type Json = Record<string, unknown>;

export const ids = {
  business: `${site.url}/#business`,
  website: `${site.url}/#website`,
  person: `${site.url}/#gabriel-saiz`,
  logo: `${site.url}/#logo`,
} as const;

const serviceId = (s: Service) => `${absoluteUrl(s.path)}#service`;

const areaServed = () => [
  ...site.areaServed.map((name) => ({ '@type': 'City', name })),
  { '@type': 'AdministrativeArea', name: 'Provincia de Zaragoza' },
];

const offerFor = (s: Service): Json => {
  const base = {
    '@type': 'Offer',
    url: absoluteUrl(s.path),
    priceCurrency: site.pricing.currency,
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: 'Zaragoza' },
  };
  if (s.price.unit === 'mes') {
    return {
      ...base,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: s.price.min,
        priceCurrency: site.pricing.currency,
        unitCode: 'MON',
        valueAddedTaxIncluded: false,
      },
    };
  }
  return {
    ...base,
    priceSpecification: {
      '@type': 'PriceSpecification',
      minPrice: s.price.min,
      maxPrice: s.price.max,
      priceCurrency: site.pricing.currency,
      valueAddedTaxIncluded: false,
    },
  };
};

export const businessSchema = (): Json => ({
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': ids.business,
  name: site.name,
  alternateName: `${site.name} — Diseño web Zaragoza`,
  description: site.description,
  url: `${site.url}/`,
  logo: { '@type': 'ImageObject', '@id': ids.logo, url: absoluteUrl('/icon-512.png'), width: 512, height: 512 },
  image: absoluteUrl(site.ogImage),
  email: site.contact.email,
  ...(PHONE_PLACEHOLDER ? {} : { telephone: `+${site.contact.phoneE164}` }),
  priceRange: '300€ - 1500€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Transferencia bancaria, Tarjeta',
  foundingDate: site.foundingDate,
  founder: { '@id': ids.person },
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude },
  areaServed: areaServed(),
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: site.openingHours.days.map((d) => `https://schema.org/${d}`),
    opens: site.openingHours.opens,
    closes: site.openingHours.closes,
  },
  knowsAbout: [
    'Diseño web',
    'Desarrollo web',
    'Landing pages',
    'SEO local',
    'Sistemas de reservas online',
    'Mantenimiento web',
    'Optimización de velocidad web',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de diseño y desarrollo web',
    itemListElement: services.map((s) => ({ ...offerFor(s), itemOffered: { '@id': serviceId(s) } })),
  },
  sameAs: [site.founder.linkedin, site.founder.github],
});

export const websiteSchema = (): Json => ({
  '@type': 'WebSite',
  '@id': ids.website,
  url: `${site.url}/`,
  name: site.name,
  description: site.tagline,
  inLanguage: 'es-ES',
  publisher: { '@id': ids.business },
});

export const personSchema = (): Json => ({
  '@type': 'Person',
  '@id': ids.person,
  name: site.founder.name,
  jobTitle: site.founder.jobTitle,
  image: absoluteUrl('/img/gabriel-saiz.webp'),
  worksFor: { '@id': ids.business },
  address: { '@type': 'PostalAddress', addressLocality: 'Zaragoza', addressCountry: 'ES' },
  knowsAbout: ['Diseño web', 'Desarrollo web', 'SEO técnico', 'Vue.js', 'Astro', '.NET', 'AWS'],
  sameAs: [site.founder.linkedin, site.founder.github],
});

export const serviceSchema = (s: Service): Json => ({
  '@type': 'Service',
  '@id': serviceId(s),
  name: s.schemaName,
  serviceType: s.name,
  description: s.summary,
  url: absoluteUrl(s.path),
  provider: { '@id': ids.business },
  areaServed: areaServed(),
  audience: { '@type': 'BusinessAudience', audienceType: s.idealFor },
  offers: offerFor(s),
});

export const faqSchema = (faqs: Faq[]): Json => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export interface Crumb {
  name: string;
  path: string;
}

export const breadcrumbSchema = (crumbs: Crumb[]): Json => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path),
  })),
});

export const webPageSchema = ({
  path,
  title,
  description,
  type = 'WebPage',
}: {
  path: string;
  title: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}): Json => ({
  '@type': type,
  '@id': `${absoluteUrl(path)}#webpage`,
  url: absoluteUrl(path),
  name: title,
  description,
  inLanguage: 'es-ES',
  isPartOf: { '@id': ids.website },
  about: { '@id': ids.business },
});

/** Grafo completo de la página: entidades globales + específicas. */
export const buildGraph = (pageNodes: Json[]): Json => ({
  '@context': 'https://schema.org',
  '@graph': [businessSchema(), websiteSchema(), personSchema(), ...pageNodes],
});
