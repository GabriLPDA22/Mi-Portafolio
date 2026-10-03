/**
 * BUG RUN, el minijuego escondido: se abre con los botones [data-arcade-open] (visibles solo
 * con JS) o con el código Konami ↑↑↓↓←→←→BA. El juego se descarga al abrirlo, no antes.
 */

type ArcadeTexts = Parameters<typeof import('./arcade').openArcade>[0];

const readTexts = (): ArcadeTexts | null => {
  const el = document.getElementById('game-data');
  if (!el?.textContent) return null;
  try {
    return (JSON.parse(el.textContent) as { arcade?: ArcadeTexts }).arcade ?? null;
  } catch {
    return null;
  }
};

const openArcadeLazy = () => {
  const texts = readTexts();
  if (!texts) return;
  void import('./arcade').then(({ openArcade }) => openArcade(texts));
};

export function initArcade() {
  document.querySelectorAll<HTMLButtonElement>('[data-arcade-open]').forEach((btn) => {
    btn.hidden = false;
    btn.addEventListener('click', openArcadeLazy);
  });

  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let pos = 0;
  window.addEventListener('keydown', (e) => {
    if (document.querySelector('.arcade')) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = key === code[pos] ? pos + 1 : key === code[0] ? 1 : 0;
    if (pos === code.length) {
      pos = 0;
      openArcadeLazy();
    }
  });
}
