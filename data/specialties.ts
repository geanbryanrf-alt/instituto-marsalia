export type Specialty = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  tags?: string[];
  cta?: string;
  featured?: boolean;
};

export const specialties: Specialty[] = [
  {
    slug: 'pilates',
    name: 'Pilates',
    featured: true,
    image: '/images/pilates.jpg',
    shortDescription: 'Movimento acompanhado, grupos reduzidos e orientação profissional.',
    tags: ['Avaliação inicial', 'Orientação próxima', 'Diálogo multidisciplinar'],
    cta: 'Agendar atendimento',
  },
  {
    slug: 'fisioterapia',
    name: 'Fisioterapia',
    image: '/images/detail.jpg',
    shortDescription: 'Movimento para uma vida com mais conforto, função e autonomia.',
    tags: ['Reabilitação', 'Funcionalidade', 'Bem-estar'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'psicologia',
    name: 'Psicologia',
    image: '/images/psicologia.jpg',
    shortDescription: 'Escuta que acolhe, organiza e fortalece.',
    tags: ['Saúde emocional', 'Acolhimento', 'Equilíbrio'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'nutricao',
    name: 'Nutrição',
    image: '/images/recepcao-2.jpg',
    shortDescription: 'Estratégia alimentar para mais saúde, energia e equilíbrio.',
    tags: ['Alimentação', 'Energia', 'Equilíbrio'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'odontologia',
    name: 'Odontologia',
    image: '/images/odontologia-2.jpg',
    shortDescription: 'Saúde bucal como parte do seu bem-estar integral.',
    tags: ['Saúde bucal', 'Estética', 'Prevenção'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'clinica-geral',
    name: 'Clínica Geral',
    image: '/images/recepcao-4.jpg',
    shortDescription: 'A base para uma vida longa e saudável.',
    tags: ['Prevenção', 'Saúde integral', 'Continuidade'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'nutrologia',
    name: 'Nutrologia',
    image: '/images/recepcao-1.jpg',
    shortDescription: 'Acompanhamento clínico com foco em metabolismo, performance e prevenção.',
    tags: ['Metabolismo', 'Performance', 'Prevenção'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'dermatologia',
    name: 'Dermatologia',
    image: '/images/odontologia-1.jpg',
    shortDescription: 'Saúde e estética da pele com avaliação criteriosa e personalizada.',
    tags: ['Saúde da pele', 'Estética', 'Personalizado'],
    cta: 'Ver detalhes',
  },
  {
    slug: 'ginecologia',
    name: 'Ginecologia',
    image: '/images/recepcao-3.jpg',
    shortDescription: 'Acompanhamento voltado à saúde e ao equilíbrio feminino.',
    tags: ['Saúde feminina', 'Equilíbrio', 'Acompanhamento'],
    cta: 'Ver detalhes',
  },
];
