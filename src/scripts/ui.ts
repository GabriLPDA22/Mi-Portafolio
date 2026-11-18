/** Interacciones de la interfaz: cabecera, menú móvil, volver arriba y formulario. */
import { scrollToTarget } from './motion';

/* ------------------------------------------------------------------ */
/* Cabecera: fondo al hacer scroll + menú móvil                          */
/* ------------------------------------------------------------------ */

export function initHeader() {
  const bar = document.querySelector<HTMLElement>('[data-header-bar] .header-progress');
  if (bar) {
    let frame = 0;
    let lastValue = '';
    // Progreso de lectura: transform directo en la línea (no una variable CSS en la cabecera,
    // que obligaría a recalcular los estilos de toda la cápsula en cada frame).
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, window.scrollY / max).toFixed(3) : '0';
      if (value === lastValue) return;
      lastValue = value;
      bar.style.transform = `scaleX(${value})`;
    };
    // Primera medida en el siguiente frame: no fuerza un layout síncrono durante la carga.
    frame = requestAnimationFrame(update);
    window.addEventListener(
      'scroll',
      () => {
        if (!frame) frame = requestAnimationFrame(update);
      },
      { passive: true },
    );
  }

  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');
  if (toggle && menu) {
    const header = toggle.closest('header');
    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose! : toggle.dataset.labelOpen!);
      menu.dataset.open = String(open);
      menu.toggleAttribute('inert', !open);
      menu.setAttribute('aria-hidden', String(!open));
      // Lo que queda tapado por el menú no recibe foco (la cabecera sigue activa: tiene el botón)
      for (const el of document.body.children) {
        if (el !== menu && el !== header && el.tagName !== 'SCRIPT') el.toggleAttribute('inert', open);
      }
      // El scroll vive en <html> (overflow-x: hidden), así que se bloquean los dos.
      document.documentElement.style.overflow = open ? 'hidden' : '';
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.querySelector('[data-menu-close]')?.addEventListener('click', () => {
      setOpen(false);
      toggle.focus();
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.querySelector('[data-home-link]')?.addEventListener('click', () => setOpen(false));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    // Al pasar a escritorio (lg: 1024 px) el menú se oculta por CSS: cerrarlo para devolver el scroll.
    window.matchMedia('(min-width: 1024px)').addEventListener('change', (e) => {
      if (e.matches && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
  }

  // Enlaces internos (#seccion): con content-visibility las secciones lejanas aún no tienen su
  // altura real y el salto no caería exacto. Se renderiza todo justo antes (captura: va primero).
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (a && a.pathname === location.pathname && a.hash) document.documentElement.classList.add('cv-all');
    },
    true,
  );
  if (location.hash) document.documentElement.classList.add('cv-all');

  // Nivel actual: la sección que ocupa el centro de la pantalla.
  const levelEl = document.querySelector<HTMLElement>('[data-hud-level]');
  const levelN = document.querySelector<HTMLElement>('[data-hud-level-n]');
  const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')];
  const ids = [...new Set(links.map((a) => a.dataset.navLink!))];
  const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
  if (!sections.length || !('IntersectionObserver' in window)) {
    if (levelEl) levelEl.hidden = true;
  } else {
    const setLevel = (id: string | null) => {
      links.forEach((a) => a.setAttribute('aria-current', String(a.dataset.navLink === id)));
      if (levelN) levelN.textContent = id ? String(ids.indexOf(id) + 1).padStart(2, '0') : '00';
    };
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setLevel(entry.target.id);
          else if (entry.target === sections[0] && entry.boundingClientRect.top > 0) setLevel(null);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((el) => io.observe(el));
  }

  // Al cambiar de idioma se conserva la sección que estás VIENDO (no el #ancla de la URL,
  // que se queda antiguo al hacer scroll: p. ej. #contacto tras pulsar "Contacto" y volver arriba).
  document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((a) => {
    a.addEventListener('click', () => {
      const base = a.href.split('#')[0];
      if (!sections.length) {
        a.href = base + location.hash;
        return;
      }
      // Sección que ocupa el centro de la pantalla ahora mismo (en la portada: ninguna).
      const mid = window.innerHeight / 2;
      const visible = sections.find((el) => {
        const r = el.getBoundingClientRect();
        return r.top <= mid && r.bottom >= mid;
      });
      a.href = base + (visible ? `#${visible.id}` : '');
    });
  });
}

/* ------------------------------------------------------------------ */
/* Botón "volver arriba"                                               */
/* ------------------------------------------------------------------ */

export function initScrollToTop() {
  const button = document.querySelector<HTMLButtonElement>('[data-scroll-top]');
  if (!button) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    button.classList.toggle('is-in', window.scrollY > 400);
  };
  update();
  window.addEventListener(
    'scroll',
    () => {
      if (!frame) frame = requestAnimationFrame(update);
    },
    { passive: true },
  );
  button.addEventListener('click', () => scrollToTarget(0));
}

/* ------------------------------------------------------------------ */
/* Formulario de contacto: endpoint propio + Cloudflare Turnstile       */
/* ------------------------------------------------------------------ */

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
}
type TurnstileWindow = Window & { turnstile?: TurnstileApi; __onTurnstile?: () => void };

let turnstileScript: Promise<TurnstileApi> | null = null;

/** Carga el script de Turnstile una sola vez, y solo cuando alguien usa el formulario (no afecta a la carga). */
function loadTurnstile(): Promise<TurnstileApi> {
  const w = window as TurnstileWindow;
  if (w.turnstile) return Promise.resolve(w.turnstile);
  turnstileScript ??= new Promise<TurnstileApi>((resolve, reject) => {
    w.__onTurnstile = () => resolve(w.turnstile!);
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__onTurnstile';
    script.async = true;
    script.onerror = () => {
      turnstileScript = null; // se puede reintentar
      script.remove();
      reject(new Error('turnstile_load'));
    };
    document.head.append(script);
  });
  return turnstileScript;
}

/**
 * Widget de Turnstile del formulario. Se renderiza invisible ("interaction-only": solo aparece si
 * Cloudflare necesita que la persona haga clic) y genera el token en segundo plano mientras se
 * rellena el formulario. Cada token vale para un único envío.
 */
function createTurnstile(container: HTMLElement, sitekey: string, language: string) {
  let widgetId: string | null = null;
  let api: TurnstileApi | null = null;
  let token: string | null = null;
  let waiters: ((t: string | null) => void)[] = [];
  const settle = (t: string | null) => {
    token = t;
    waiters.splice(0).forEach((w) => w(t));
  };

  const start = async () => {
    if (widgetId !== null) return;
    try {
      api = await loadTurnstile();
      if (widgetId !== null) return; // dos llamadas a la vez
      widgetId = api.render(container, {
        sitekey,
        action: 'contact',
        theme: 'dark',
        language,
        appearance: 'interaction-only',
        callback: (t: string) => settle(t),
        'expired-callback': () => {
          token = null;
          if (widgetId !== null) api?.reset(widgetId);
        },
        'error-callback': () => settle(null),
      });
    } catch {
      settle(null);
    }
  };

  return {
    start,
    /** Token listo para enviar (espera a que Turnstile termine, como mucho `timeout` ms). */
    async token(timeout = 20000): Promise<string | null> {
      await start();
      if (token) return token;
      return new Promise((resolve) => {
        const timer = window.setTimeout(() => {
          waiters = waiters.filter((w) => w !== done);
          resolve(null);
        }, timeout);
        const done = (t: string | null) => {
          window.clearTimeout(timer);
          resolve(t);
        };
        waiters.push(done);
      });
    },
    /** Tras cada envío: el token ya se ha gastado, se pide otro. */
    reset() {
      token = null;
      if (api && widgetId !== null) api.reset(widgetId);
    },
  };
}

export function initContactForm() {
  const root = document.querySelector<HTMLElement>('[data-contact]');
  const form = root?.querySelector<HTMLFormElement>('form');
  if (!root || !form) return;

  const success = root.querySelector<HTMLElement>('[data-contact-success]')!;
  const error = root.querySelector<HTMLElement>('[data-contact-error]')!;
  const errorText = error.querySelector<HTMLElement>('[data-error-text]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const idle = button.querySelector<HTMLElement>('[data-idle]')!;
  const loading = button.querySelector<HTMLElement>('[data-loading]')!;
  const msg = root.dataset;
  const turnstile = createTurnstile(root.querySelector<HTMLElement>('[data-turnstile]')!, msg.sitekey!, msg.locale ?? 'es');

  // Turnstile empieza a trabajar en cuanto la persona toca el formulario (no antes: no penaliza la carga)
  const warm = () => void turnstile.start();
  form.addEventListener('focusin', warm, { once: true });
  form.addEventListener('pointerdown', warm, { once: true });

  const setLoading = (on: boolean) => {
    button.disabled = on;
    idle.hidden = on;
    loading.hidden = !on;
  };
  const showError = (message: string) => {
    errorText.textContent = message;
    error.hidden = false;
  };
  const errorFor = (code: string | undefined, status: number) => {
    if (status === 429) return msg.msgRate!;
    if (code === 'captcha') return msg.msgCaptcha!;
    if (code === 'too_many_links') return msg.msgLinks!;
    if (code === 'invalid') return msg.msgInvalid!;
    return msg.msgFailed!;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) {
      showError(msg.msgRequired!);
      return;
    }

    error.hidden = true;
    setLoading(true);
    try {
      const token = await turnstile.token();
      if (!token) {
        showError(msg.msgCaptcha!);
        return;
      }
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          project: String(data.get('project') ?? ''),
          website: String(data.get('website') ?? ''), // honeypot
          locale: msg.locale,
          token,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        showError(errorFor(body.error, response.status));
        return;
      }
      form.reset();
      form.hidden = true;
      success.hidden = false;
      // Analítica (Umami): solo se cuenta el envío, nunca el contenido
      (window as unknown as { umami?: { track: (e: string) => void } }).umami?.track('contacto-enviado');
    } catch {
      showError(msg.msgFailed!);
    } finally {
      turnstile.reset();
      setLoading(false);
    }
  });

  root.querySelector('[data-contact-again]')?.addEventListener('click', () => {
    success.hidden = true;
    error.hidden = true;
    form.hidden = false;
  });
}
