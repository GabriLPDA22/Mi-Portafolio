/**
 * Convierte un sprite de caracteres en SVG compacto: un único <path> por color, con cada
 * tramo horizontal como subruta `M x y h w v1 h -w z`. Mucho menos HTML que un <rect> por tramo.
 * `only` limita el resultado a esos caracteres; `skip` los excluye.
 */
export function pixelPaths(
  rows: readonly string[],
  palette: Record<string, string>,
  { only, skip }: { only?: string; skip?: string } = {},
) {
  const byColor = new Map<string, string[]>();
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let x2 = x;
      while (x2 < row.length && row[x2] === ch) x2++;
      const fill = palette[ch];
      const wanted = (!only || only.includes(ch)) && !(skip && skip.includes(ch));
      if (fill && wanted) {
        const w = x2 - x;
        const list = byColor.get(fill) ?? [];
        list.push(`M${x} ${y}h${w}v1h-${w}z`);
        byColor.set(fill, list);
      }
      x = x2;
    }
  });
  return [...byColor].map(([fill, d]) => `<path fill="${fill}" d="${d.join('')}"/>`).join('');
}
