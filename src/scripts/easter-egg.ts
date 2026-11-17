/**
 * Easter egg: el minijuego BUG RUN (con ranking global) se abre con el código Konami
 * (↑↑↓↓←→←→BA) o con el botón "Insert coin" del pie. Se descarga solo al abrirlo.
 */
type ArcadeTexts = Parameters<typeof import('./arcade').openArcade>[0];

const readTexts = (): ArcadeTexts | null => {
  const el = document.getElementById('arcade-data');
  try {
    return el ? (JSON.parse(el.textContent || 'null') as ArcadeTexts) : null;
  } catch {
    return null;
  }
};

const open = () => {
  const texts = readTexts();
  if (!texts || document.querySelector('.arcade')) return;
  void import('./arcade').then(({ openArcade }) => openArcade(texts));
};

export function initEasterEgg() {
  document.querySelectorAll<HTMLButtonElement>('[data-arcade-open]').forEach((btn) => {
    btn.hidden = false;
    btn.addEventListener('click', open);
  });

  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.arcade')) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos === code.length) {
      pos = 0;
      open();
    }
  });
}
