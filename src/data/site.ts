export const SITE = {
  // Nombre de la ejecutiva
  name: 'Erika Zuñiga',

  // Teléfono sin signos
  phone: '942874934',

  // Mensaje predeterminado de WhatsApp (tono neutro)
  whatsappMsg: 'Hola Erika, quisiera información sobre los planes UCM',

  // Email oficial
  email: 'ezuniga@ucmchile.cl',

  // Áreas o ciudades atendidas
  city: 'Región Metropolitana y V Región',

  // Dominio del sitio (sin slash)
  domain: 'https://www.rescatesmedicos.cl',

  // Imagen OG
  ogImage: '/images/og-default.png',

  // Título SEO neutral
  title: 'Ejecutiva de Planes UCM | Erika Zuñiga',

  // Descripción 100% segura
  description:
    'Información y asesoría comercial para contratar planes UCM. Consulta directamente con tu ejecutiva autorizada en Región Metropolitana y V Región.'
}

// Helpers universales
export const LINKS = {
  wa: () => `https://wa.me/56${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMsg)}`,
  call: () => `tel:+56${SITE.phone}`
}
