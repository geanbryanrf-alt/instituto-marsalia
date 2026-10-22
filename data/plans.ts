export type PilatesPlan = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  fidelity: string;
  enrollment: string;
  price2x: number;
  price3x: number;
  benefits: string[];
};

export const pilatesPlans: PilatesPlan[] = [
  {
    slug: 'essencial',
    name: 'Essencial',
    tagline: 'Liberdade para começar.',
    description: 'Para começar no Marsalia sem compromisso de longo prazo.',
    duration: '1 mês',
    fidelity: 'Sem fidelidade',
    enrollment: 'R$ 100',
    price2x: 300,
    price3x: 380,
    benefits: [
      'Anamnese inicial',
      'Aulas em grupos reduzidos',
      'Exercícios direcionados',
      'Acompanhamento profissional',
    ],
  },
  {
    slug: 'premium',
    name: 'Premium',
    tagline: 'Constância para evoluir.',
    description: 'Para quem busca continuidade, monitoramento e vantagens adicionais.',
    duration: '6 meses',
    fidelity: '6 meses de fidelidade',
    enrollment: 'R$ 100',
    price2x: 280,
    price3x: 340,
    benefits: [
      'Avaliação física e postural completa',
      'Reavaliação de evolução em 3 meses',
      'Registro e acompanhamento dos resultados',
      '10% de desconto em serviços selecionados',
      'Triagem e acompanhamento de indicadores de saúde',
    ],
  },
  {
    slug: 'exclusive',
    name: 'Exclusive',
    tagline: 'A proposta mais completa.',
    description: 'Para quem prefere um plano de longo prazo, com continuidade e diálogo entre áreas.',
    duration: '12 meses',
    fidelity: '12 meses de fidelidade',
    enrollment: 'Isenta',
    price2x: 250,
    price3x: 300,
    benefits: [
      'Avaliação física e postural completa',
      'Reavaliações periódicas a cada 3 meses',
      'Comparativo de evolução',
      '15% de desconto em serviços selecionados',
      'Consulta nutricional de avaliação',
    ],
  },
];

export const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
