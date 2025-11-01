export const SITE = {
  name: 'Erika Zuñiga',
  phone: '+56 9 4287 4934',
  get cleanPhone() {
    return this.phone.replace(/\D/g, '')
  },
  city: 'Región Metropolitana',
  region: 'V Región',
  email: 'ezuniga@ucmchile.cl',
  slug: '{slug}',
  domain: 'https://tu-dominio.cl'
}
