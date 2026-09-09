export const contact = {
  whatsapp: '',
  phone: '',
  address: '',
  instagram: '',
  openingHours: '',
  schedulingUrl: '',
} as const;

export const hasDirectContact = Boolean(
  contact.whatsapp || contact.phone || contact.schedulingUrl,
);
