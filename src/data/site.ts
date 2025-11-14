export const SITE = {
  // Nombre de la ejecutiva
  name: 'Erika Zuñiga',

  // Teléfono sin signos, solo números
  phone: '942874934',

  // Mensaje predeterminado de WhatsApp
  whatsappMsg: 'Hola Erika, quiero cotizar un plan UCM',

  // Email oficial UCM
  // email: 'ezuniga@ucmchile.cl',
  email: 'ezuniga@ucmchile.cl',

  // Áreas o ciudades atendidas
  city: 'Región Metropolitana y V Región',

  // Dominio del sitio (sin slash al final)
  domain: 'https://www.rescatesmedicos.cl',

  // Imagen para OpenGraph
  ogImage: '/images/og-default.png',

  // Título SEO opcional (usa este por defecto)
  title: 'Contrata tu Plan UCM | Ejecutiva Oficial',

  // Descripción SEO opcional
  description:
    'Afíliate a UCM con ejecutiva oficial. Atención médica a domicilio 24/7 en RM y V Región. Cotiza hoy por WhatsApp o llamada directa.'
}

// Helpers universales
export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+569${SITE.phone}`
}
