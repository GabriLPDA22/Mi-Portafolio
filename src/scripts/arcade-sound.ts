/**
 * Efectos de sonido 8-bit de BUG RUN, sintetizados con Web Audio (ondas cuadradas/triangulares):
 * no hay ficheros de audio que descargar. El AudioContext se crea en la primera interacción
 * (política de autoplay de los navegadores) y la preferencia de silencio se recuerda.
 */
const MUTE_KEY = 'gs-bugrun-muted';

let ctx: AudioContext | null = null;
let muted = false;
try {
  muted = localStorage.getItem(MUTE_KEY) === '1';
} catch {
  /* sin almacenamiento */
}

const audio = () => {
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    // iOS 17+: que el juego suene aunque el interruptor de silencio del iPhone esté activado,
    // como un vídeo o un juego nativo (sin esto, Safari silencia todo el audio web)
    const session = (navigator as Navigator & { audioSession?: { type: string } }).audioSession;
    if (session) session.type = 'playback';
    ctx = new AC();
  }
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
};

/**
 * Desbloquea el audio en móvil. Los navegadores solo permiten arrancar el audio dentro de un gesto
 * "de activación": en pantallas táctiles eso es pointerup/touchend/click, NO pointerdown (que es lo
 * que usa el salto). Se llama en esos eventos y reproduce un buffer mudo (truco clásico para iOS).
 */
export const unlockAudio = () => {
  const ac = audio();
  if (!ac || (ac as AudioContext & { unlocked?: boolean }).unlocked) return;
  const src = ac.createBufferSource();
  src.buffer = ac.createBuffer(1, 1, 22050);
  src.connect(ac.destination);
  src.start(0);
  if (ac.state === 'running') (ac as AudioContext & { unlocked?: boolean }).unlocked = true;
};

/** Una nota: frecuencia inicial, duración (s), forma de onda, volumen y deslizamiento opcional. */
const tone = (freq: number, dur: number, delay = 0, type: OscillatorType = 'square', vol = 0.05, slideTo?: number) => {
  if (muted) return;
  const ac = audio();
  if (!ac) return;
  const t = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
};

const seq = (notes: number[], step: number, dur: number, type: OscillatorType = 'square', vol = 0.05) =>
  notes.forEach((f, i) => tone(f, dur, i * step, type, vol));

export const sfx = {
  jump: () => tone(300, 0.14, 0, 'square', 0.035, 620),
  start: () => seq([523, 659, 784], 0.07, 0.09),
  point: () => seq([988, 1319], 0.07, 0.1, 'square', 0.035),
  over: () => {
    seq([392, 330, 262], 0.13, 0.14, 'square', 0.05);
    tone(196, 0.45, 0.39, 'triangle', 0.08, 98);
  },
  select: () => tone(660, 0.05, 0, 'square', 0.03),
  error: () => seq([220, 185], 0.09, 0.1, 'square', 0.04),
  save: () => seq([523, 659, 784, 1047, 1319], 0.08, 0.12, 'square', 0.045),
};

export const isMuted = () => muted;

export const setMuted = (value: boolean) => {
  muted = value;
  try {
    localStorage.setItem(MUTE_KEY, value ? '1' : '0');
  } catch {
    /* sin almacenamiento */
  }
  if (!value) sfx.select();
};
