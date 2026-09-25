/** Interacciones de la interfaz: cabecera, menú móvil, cookies, volver arriba y formulario. */

/* ------------------------------------------------------------------ */
/* Cabecera: fondo al hacer scroll + menú móvil                          */
/* ------------------------------------------------------------------ */

export function initHeader() {
  const bar = document.querySelector<HTMLElement>('[data-header-bar]');
  if (bar) {
    let frame = 0;
    // Barra de XP: progreso de lectura de la página (solo transform, sin reflow).
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.setProperty('--xp', max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : '0');
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
    const setOpen = (open: boolean) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? toggle.dataset.labelClose! : toggle.dataset.labelOpen!);
      menu.dataset.open = String(open);
      menu.toggleAttribute('inert', !open);
      menu.setAttribute('aria-hidden', String(!open));
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
/* Banner de cookies                                                    */
/* ------------------------------------------------------------------ */

export function initCookieBanner() {
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
  if (!banner) return;

  let consent: string | null = null;
  try {
    consent = localStorage.getItem('cookie-consent');
  } catch {
    /* almacenamiento bloqueado: se muestra el banner */
  }
  if (consent) return;

  banner.hidden = false;
  requestAnimationFrame(() => banner.classList.add('is-in'));

  banner.addEventListener('click', (e) => {
    const value = (e.target as HTMLElement).closest<HTMLElement>('[data-consent]')?.dataset.consent;
    if (!value) return;
    try {
      localStorage.setItem('cookie-consent', value);
      localStorage.setItem('cookie-consent-date', new Date().toISOString());
    } catch {
      /* sin almacenamiento: se volverá a preguntar */
    }
    banner.classList.remove('is-in');
    window.setTimeout(() => (banner.hidden = true), 300);
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
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ------------------------------------------------------------------ */
/* Formulario de contacto (Formspree, mismo endpoint que antes)         */
/* ------------------------------------------------------------------ */

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

  const sending = root.querySelector<HTMLElement>('[data-contact-sending]');
  const setLoading = (on: boolean) => {
    button.disabled = on;
    idle.hidden = on;
    loading.hidden = !on;
    if (sending) sending.hidden = !on;
  };
  const showError = (message: string) => {
    errorText.textContent = message;
    error.hidden = false;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    if (!name || !email || !message) {
      showError(root.dataset.msgRequired!);
      return;
    }

    error.hidden = true;
    setLoading(true);
    const select = form.querySelector<HTMLSelectElement>('select[name="project"]');
    const project = select && select.value ? select.selectedOptions[0].textContent?.trim() ?? '' : '';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, project, message, _subject: 'Contacto desde portfolio' }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      form.hidden = true;
      success.hidden = false;
    } catch {
      showError(root.dataset.msgFailed!);
    } finally {
      setLoading(false);
    }
  });

  root.querySelector('[data-contact-again]')?.addEventListener('click', () => {
    success.hidden = true;
    error.hidden = true;
    form.hidden = false;
  });
}
