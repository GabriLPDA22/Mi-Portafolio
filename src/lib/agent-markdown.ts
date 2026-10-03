/**
 * Versión markdown de la portada para agentes de IA (Accept: text/markdown, /index.md, /en.md)
 * y /llms.txt. Se genera en build a partir de las mismas traducciones y datos que pinta la
 * página, así nunca se desincroniza ni dice nada que la web no diga.
 */
import { getT, type Locale } from '@/i18n';
import { STACK_GROUPS, stackItems, type StackGroup } from '@/data/inventory';
import { getPro } from '@/lib/pro-content';
import { personData } from '@/lib/structured-data';

export const SITE = 'https://gabrielcodes.dev';
const CV = `${SITE}/cv/Gabriel-Saiz-CV.pdf`;

const PROJECT_URLS: Record<string, string> = {
  arch: 'https://apps.apple.com/us/app/the-arch/id6753820007',
  huvegrym: 'https://huvegrym.es',
  'tarot-divinidad': 'https://divinidad000.com',
};

const list = (items: readonly string[]) => items.map((i) => `- ${i}`).join('\n');

export function homeMarkdown(locale: Locale): string {
  const t = getT(locale);
  const es = locale === 'es';
  const home = es ? `${SITE}/` : `${SITE}/en`;
  const [linkedin, github] = personData.sameAs;

  const experience = t.experience.items
    .map((e) => {
      const company = 'url' in e && e.url ? `[${e.company}](${e.url})` : e.company;
      return `### ${e.role} — ${company}\n\n*${e.period} · ${e.location}*\n\n${e.description}\n\n${list(e.bullets)}`;
    })
    .join('\n\n');

  const projects = t.projects.items
    .map((p) => {
      const url = PROJECT_URLS[p.id];
      const title = url ? `[${p.title}](${url})` : p.title;
      return `### ${title} — ${p.subtitle}\n\n${p.description}\n\n${list(p.bullets)}\n\nStack: ${p.chips.join(', ')}`;
    })
    .join('\n\n');

  const stack = (Object.keys(STACK_GROUPS) as StackGroup[])
    .map((g) => `- **${getPro(locale).stack.groups[g]}:** ${stackItems(g).map((i) => i.name).join(', ')}`)
    .join('\n');

  const r = t.results.items;
  const ways = [r.communication, r.iterations, r.code, r.product].map((w) => `**${w.title}.** ${w.text}`);

  return `# ${t.hero.name} — ${t.hero.title}

> ${t.hero.subtitle}

- ${es ? 'Estado' : 'Status'}: ${t.hero.availability}
- ${es ? 'Ubicación' : 'Location'}: ${t.contact.badges.noCommitment}
- Email: ${personData.email}
- CV (PDF): ${CV}
- LinkedIn: ${linkedin}
- GitHub: ${github}
- Web: ${home}

## ${es ? 'Sobre mí' : 'About me'}

${t.about.subtitle}

${list(t.about.bullets)}

## ${es ? 'Stack' : 'Tech stack'}

${stack}

## ${es ? 'Experiencia' : 'Experience'}

${experience}

## ${es ? 'Proyectos en producción' : 'Projects in production'}

${projects}

## ${es ? 'Cómo trabajo' : 'How I work'}

${list(ways)}

## ${es ? 'Contacto' : 'Contact'}

${t.contact.subtitle}

- Email: ${personData.email}
- ${es ? 'Formulario' : 'Form'}: ${home}#contacto
`;
}

export function llmsTxt(): string {
  const t = getT('es');
  return `# ${t.hero.name}

> ${personData.description}

${t.hero.proof}. ${t.hero.availability}.

## Perfil

- [Portfolio (markdown, ES)](${SITE}/index.md): experiencia, proyectos, stack y contacto
- [Portfolio (markdown, EN)](${SITE}/en.md): same content in English
- [CV (PDF)](${CV})

## Enlaces

- [LinkedIn](${personData.sameAs[0]})
- [GitHub](${personData.sameAs[1]})
- Email: ${personData.email}
`;
}

export const markdownResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
