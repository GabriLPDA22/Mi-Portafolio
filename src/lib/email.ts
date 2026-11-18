/**
 * Email protegido frente a scrapers: el HTML nunca lleva la dirección en claro (ni en el texto ni
 * en el href). En el build se codifica (base64 del texto invertido) y el navegador la monta al
 * cargar. Los recolectores que leen el HTML sin ejecutar JS (la inmensa mayoría) no la ven.
 */
import { EMAIL } from '@/data/socials';

const toBase64 = (s: string) =>
  typeof Buffer !== 'undefined' ? Buffer.from(s, 'utf-8').toString('base64') : btoa(s);

/** Codificación que va en el HTML (build). Se decodifica en src/scripts/email.ts. */
export const encodeEmail = (email: string = EMAIL) => toBase64([...email].reverse().join(''));

export const EMAIL_ENCODED = encodeEmail();
