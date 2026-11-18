// Ojo: este fichero va al navegador; no importar src/lib/email.ts (llevaría la dirección en claro al JS)
export const decodeEmail = (encoded: string) => [...atob(encoded)].reverse().join('');

/** Monta los enlaces de email protegidos (data-email): mailto y, si toca, el texto visible. */
export function initEmails() {
  document.querySelectorAll<HTMLAnchorElement>('a[data-email]').forEach((a) => {
    const email = decodeEmail(a.dataset.email!);
    a.href = `mailto:${email}`;
    const text = a.querySelector<HTMLElement>('[data-email-value]');
    if (text) text.textContent = email;
  });
}
