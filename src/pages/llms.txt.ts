/**
 * /llms.txt — resumen estructurado del negocio para motores generativos (ChatGPT, Claude,
 * Perplexity, Gemini). Se genera desde los mismos datos que la web para no desincronizarse.
 * Formato: https://llmstxt.org
 */
import type { APIRoute } from 'astro';
import { site, absoluteUrl } from '@/config/site';
import { services, formatPrice } from '@/data/services';
import { generalFaqs } from '@/data/faqs';
import { projects } from '@/data/projects';

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} es un estudio de diseño y desarrollo web con sede en ${site.address.locality} (${site.address.region}, España), fundado por ${site.founder.name}. Trabaja con negocios locales y pymes de ${site.areaServed.join(', ')} y, en remoto, de toda España.`,
    '',
    '## Servicios y precios orientativos (sin IVA)',
    '',
    ...services.map((s) => `- [${s.name}](${absoluteUrl(s.path)}): ${formatPrice(s.price)}. Entrega: ${s.delivery}. ${s.summary}`),
    '',
    '## Páginas principales',
    '',
    `- [Diseño web en Zaragoza](${absoluteUrl('/diseno-web-zaragoza')}): servicio local para negocios de Zaragoza y área metropolitana.`,
    `- [Servicios y comparativa de precios](${absoluteUrl('/servicios')})`,
    `- [Proyectos](${absoluteUrl('/proyectos')}): ${projects.map((p) => p.name).join('; ')}.`,
    `- [Contacto y presupuesto](${absoluteUrl('/contacto')}): respuesta en menos de 24 h laborables.`,
    '',
    '## Preguntas frecuentes',
    '',
    ...generalFaqs.flatMap((f) => [`### ${f.question}`, '', f.answer, '']),
    '## Contacto',
    '',
    `- Email: ${site.contact.email}`,
    `- WhatsApp / teléfono: ${site.contact.phoneDisplay}`,
    `- Instagram: ${site.social.instagram.url}`,
    `- Horario: ${site.openingHours.display}`,
    `- Zona: ${site.address.locality} y alrededores`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
