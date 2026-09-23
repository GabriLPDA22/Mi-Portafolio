/**
 * Preguntas frecuentes. Cada respuesta empieza con la respuesta directa en la primera
 * frase (formato que extraen Google y los motores generativos) y después da contexto.
 * Se renderizan como HTML visible y como FAQPage en JSON-LD con el mismo texto.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const generalFaqs: Faq[] = [
  {
    question: '¿Cuánto cuesta una página web?',
    answer:
      'Una landing page cuesta entre 300 y 600 €, una web profesional para empresa entre 700 y 1.200 € y una web con reservas online entre 900 y 1.500 € (sin IVA). El precio final depende del número de páginas, de si necesitas textos o fotos y de las funciones extra. Antes de empezar recibes un presupuesto cerrado por escrito, sin costes ocultos.',
  },
  {
    question: '¿Cuánto tarda crear una web?',
    answer:
      'Una landing page se entrega en 1 o 2 semanas, una web profesional en 2 a 4 semanas y una web con reservas en 3 a 5 semanas. El plazo empieza cuando tenemos el contenido básico (logo, servicios y fotos). Si no lo tienes, te ayudamos a prepararlo.',
  },
  {
    question: '¿Una web ayuda a conseguir clientes?',
    answer:
      'Sí, siempre que esté pensada para ello: que cargue rápido, aparezca en Google cuando alguien busca tu servicio en tu zona y ponga fácil llamar, escribir por WhatsApp o reservar. Una web que solo "está" no vende; una web con SEO local, mensajes claros y llamadas a la acción visibles convierte visitas en contactos.',
  },
  {
    question: '¿Hacéis mantenimiento?',
    answer:
      'Sí. El plan de mantenimiento cuesta desde 25 € al mes e incluye actualizaciones de seguridad, copias de seguridad, monitorización de caídas, pequeños cambios de contenido y soporte directo por WhatsApp. No es obligatorio: la web es tuya y puedes gestionarla como prefieras.',
  },
  {
    question: '¿La web será mía?',
    answer:
      'Sí, la web, el dominio y el contenido son 100 % tuyos desde el primer día. El dominio se registra a tu nombre y te entregamos todos los accesos. No hay permanencia ni cuotas escondidas.',
  },
  {
    question: '¿Trabajáis solo en Zaragoza?',
    answer:
      'Trabajamos con negocios de Zaragoza y alrededores (Utebo, Cuarte de Huerva, Cadrete, La Puebla de Alfindén, Zuera…) y podemos reunirnos en persona. También hacemos proyectos en remoto para cualquier punto de España por videollamada.',
  },
];

export const landingFaqs: Faq[] = [
  {
    question: '¿Qué es una landing page y en qué se diferencia de una web?',
    answer:
      'Una landing page es una única página diseñada para que el visitante haga una acción concreta: llamar, reservar o pedir presupuesto. Una web completa tiene varias páginas y explica todo tu negocio. La landing es más barata, más rápida de lanzar y convierte mejor en campañas de publicidad.',
  },
  {
    question: '¿Cuánto cuesta una landing page profesional?',
    answer:
      'Entre 300 y 600 € sin IVA. Una landing sencilla con formulario y WhatsApp está en la parte baja; si necesitas redacción completa, varias secciones de producto o integración con herramientas de email marketing, sube hacia los 600 €.',
  },
  {
    question: '¿Sirve una landing page para Google Ads?',
    answer:
      'Sí, es su uso principal. Una landing específica para cada campaña mejora el nivel de calidad de Google Ads, abarata el coste por clic y aumenta el porcentaje de visitas que se convierten en contactos frente a enviar el tráfico a la página de inicio.',
  },
  {
    question: '¿Puedo ampliar la landing a una web completa más adelante?',
    answer:
      'Sí. La landing se construye con la misma base que una web profesional, así que se puede ampliar con nuevas páginas sin rehacerla. Lo invertido no se pierde.',
  },
];

export const disenoWebFaqs: Faq[] = [
  {
    question: '¿Cuánto cuesta una página web para una empresa?',
    answer:
      'Una web profesional para empresa cuesta entre 700 y 1.200 € sin IVA, con hasta 6 páginas, diseño a medida, SEO local y optimización de velocidad. Las webs con tienda online o reservas tienen un presupuesto aparte.',
  },
  {
    question: '¿Qué necesito para empezar mi página web?',
    answer:
      'Solo una reunión de 30 minutos para contarnos tu negocio. Con eso preparamos la estructura. Si tienes logo, fotos y textos, perfecto; si no, te ayudamos a redactar los textos y a elegir imágenes profesionales.',
  },
  {
    question: '¿Mi web aparecerá en Google?',
    answer:
      'Sí. Todas las webs se entregan indexadas en Google Search Console, con sitemap, datos estructurados y títulos optimizados para las búsquedas de tu sector y tu zona. Posicionar en primeras posiciones depende de la competencia y del tiempo, pero la base técnica queda hecha desde el primer día.',
  },
  {
    question: '¿Se verá bien en el móvil?',
    answer:
      'Sí. Diseñamos primero para móvil, porque la mayoría de las visitas a webs de negocios locales llegan desde el teléfono. Cada web se prueba en móviles, tablets y ordenadores antes de publicarse.',
  },
];

export const reservasFaqs: Faq[] = [
  {
    question: '¿Cuánto cuesta una web con reservas online?',
    answer:
      'Entre 900 y 1.500 € sin IVA, incluyendo la web profesional completa y el sistema de reservas. El precio depende de si necesitas varios profesionales o salas, pago de señal online o sincronización con Google Calendar.',
  },
  {
    question: '¿Tengo que pagar una cuota mensual por el sistema de reservas?',
    answer:
      'No necesariamente. Podemos integrar un sistema propio en tu web sin cuotas por reserva, o conectar herramientas que ya uses. Te recomendamos la opción más rentable según tu volumen de reservas.',
  },
  {
    question: '¿Puedo cobrar una señal al reservar?',
    answer:
      'Sí. Se puede activar el pago de una señal o del importe completo con tarjeta, Apple Pay o Google Pay mediante una pasarela segura como Stripe. Reduce drásticamente las ausencias sin avisar.',
  },
  {
    question: '¿Qué negocios necesitan una web con reservas?',
    answer:
      'Restaurantes, clínicas de fisioterapia, dentistas, centros de estética, peluquerías, academias, gimnasios con clases dirigidas y cualquier negocio que hoy gestiona citas por teléfono o WhatsApp y pierde tiempo o clientes por ello.',
  },
];

export const mantenimientoFaqs: Faq[] = [
  {
    question: '¿Cuánto cuesta el mantenimiento de una página web?',
    answer:
      'Desde 25 € al mes sin IVA. Incluye actualizaciones, copias de seguridad, monitorización, pequeños cambios de contenido y soporte. Si tu web necesita más horas de cambios al mes, se ajusta el plan.',
  },
  {
    question: '¿Mantenéis webs que no habéis hecho vosotros?',
    answer:
      'Sí, después de una revisión inicial gratuita para comprobar su estado. Si la web tiene problemas graves de seguridad o velocidad, te lo decimos con claridad y te proponemos la solución más económica.',
  },
  {
    question: '¿Qué pasa si mi web se cae?',
    answer:
      'La monitorización avisa en minutos si la web deja de funcionar. Lo revisamos de inmediato y, si hace falta, restauramos la última copia de seguridad. Tú no tienes que hacer nada.',
  },
  {
    question: '¿Hay permanencia en el mantenimiento?',
    answer:
      'No. El mantenimiento es mensual y puedes darlo de baja cuando quieras con un simple aviso. Te entregamos todos los accesos y la última copia de seguridad.',
  },
];

export const zaragozaFaqs: Faq[] = [
  {
    question: '¿Cuánto cuesta hacer una página web en Zaragoza?',
    answer:
      'En Zaragoza, una página web profesional para un negocio cuesta entre 700 y 1.200 €; una landing page entre 300 y 600 € y una web con reservas entre 900 y 1.500 € (sin IVA). Son precios cerrados, sin cuotas obligatorias.',
  },
  {
    question: '¿Podemos reunirnos en persona?',
    answer:
      'Sí. Si tu negocio está en Zaragoza o alrededores, podemos vernos en tu local o en una cafetería para conocer tu negocio. El resto del proyecto se gestiona por videollamada, email o WhatsApp, como te sea más cómodo.',
  },
  {
    question: '¿Cómo ayuda el SEO local a un negocio de Zaragoza?',
    answer:
      'El SEO local hace que tu negocio aparezca cuando alguien busca tu servicio "en Zaragoza" o "cerca de mí", tanto en los resultados de Google como en Google Maps. Combina una web optimizada, datos estructurados y una ficha de Google Business Profile coherente con la web.',
  },
  {
    question: '¿También trabajáis para municipios cercanos?',
    answer:
      'Sí: Utebo, Cuarte de Huerva, Cadrete, María de Huerva, La Puebla de Alfindén, Villanueva de Gállego, Zuera, La Muela y el resto del área metropolitana de Zaragoza.',
  },
];

export const economicasFaqs: Faq[] = [
  {
    question: '¿Cuál es la página web más barata que hacéis?',
    answer:
      'Una landing page profesional desde 300 € (sin IVA): una sola página diseñada a medida, adaptada a móvil, con formulario, botón de WhatsApp, SEO básico y dominio, hosting y SSL configurados. Es la opción ideal para empezar a captar clientes con poco presupuesto y se puede ampliar más adelante sin rehacerla.',
  },
  {
    question: '¿Hay que pagar cuotas mensuales?',
    answer:
      'No. Pagas el precio de la web una sola vez y es tuya. Los únicos costes anuales son el dominio y el hosting, que se contratan a tu nombre y suelen rondar entre 30 y 100 € al año según el proveedor. El mantenimiento mensual es opcional.',
  },
  {
    question: '¿Por qué sois más baratos que una agencia?',
    answer:
      'Porque trabajas directamente con quien diseña y programa tu web: sin oficina, sin comerciales y sin intermediarios. Además usamos un proceso probado que evita horas perdidas. El ahorro va al precio, no a la calidad: cada web se entrega rápida, adaptada a móvil y preparada para Google.',
  },
  {
    question: '¿Una web barata puede salir en Google?',
    answer:
      'Sí, si está bien hecha. Lo que hace que una web aparezca en Google no es su precio, sino que cargue rápido, tenga textos pensados para las búsquedas de tus clientes y una estructura técnica correcta. Todas nuestras webs, incluida la más económica, se entregan con esa base de SEO.',
  },
];
