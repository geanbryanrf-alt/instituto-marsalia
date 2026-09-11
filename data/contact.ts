export const contact = {
  whatsapp: '+55 27 99998-1466',
  phone: '+55 27 99998-1466',
  address: 'Rua Ladeira Campo Santo, Governador Lindenberg, ES, 29720-000',
  instagram: '',
  openingHours: 'Somente com hora marcada',
  schedulingUrl: 'https://wa.me/5527999981466',
} as const;

export const hasDirectContact = Boolean(
  contact.whatsapp || contact.phone || contact.schedulingUrl,
);