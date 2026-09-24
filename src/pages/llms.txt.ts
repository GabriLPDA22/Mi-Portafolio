/**
 * /llms.txt — perfil profesional estructurado para motores generativos (ChatGPT, Claude,
 * Perplexity, Gemini). Se genera desde los mismos datos que la web. Formato: https://llmstxt.org
 */
import type { APIRoute } from 'astro';
import { site, absoluteUrl } from '@/config/site';
import { experience, education, achievements, skills, supportingSkills, alsoUsed } from '@/data/profile';
import { projects } from '@/data/projects';
import { tech } from '@/data/tech';

export const GET: APIRoute = () => {
  const lines = [
    `# ${site.fullName}`,
    '',
    `> ${site.description}`,
    '',
    `- Puesto: ${site.role} (${site.headline})`,
    `- Ubicación: ${site.location}`,
    `- Disponibilidad: ${site.availability}`,
    `- Busca: ${site.lookingFor}`,
    `- CV (PDF): ${absoluteUrl(site.documents.cv)}`,
    '',
    '## Experiencia',
    '',
    ...experience.flatMap((e) => [`### ${e.role} — ${e.company} (${e.period})`, '', e.summary, ...e.bullets.map((b) => `- ${b}`), '']),
    '## Proyectos',
    '',
    ...projects.map((p) => `- [${p.name}](${p.links[0]?.url ?? site.url}): ${p.label}. ${p.description} Stack: ${p.stack.join(', ')}.`),
    '',
    '## Formación',
    '',
    ...education.map((e) => `- ${e.title}, ${e.center} (${e.period}). ${e.bullets.join(' ')}`),
    '',
    '## Premios',
    '',
    ...achievements.map((a) => `- ${a.title} (${a.year}): ${a.detail}`),
    '',
    '## Habilidades',
    '',
    ...skills.map((g) => `- ${g.group}: ${g.items.map((id) => tech[id].name).join(', ')}`),
    `- Cloud y DevOps: ${supportingSkills.map((id) => tech[id].name).join(', ')}`,
    `- También: ${alsoUsed.map((id) => tech[id].name).join(', ')}`,
    '',
    '## Contacto',
    '',
    `- Email: ${site.contact.email}`,
    `- Teléfono: ${site.contact.phoneDisplay}`,
    `- LinkedIn: ${site.social.linkedin}`,
    `- GitHub: ${site.social.github}`,
    '',
  ];

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
