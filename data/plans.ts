export type PilatesPlan = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  enrollment: string;
  price2x: number;
  price3x: number;
  benefits: string[];
};

export const pilatesPlans: PilatesPlan[] = [
  {
    slug: 'essencial', name: 'Essencial', tagline: 'Liberdade para começar.',
    description: 'Para começar no Marsalia sem compromisso de longo prazo.',
    duration: '1 mês', enrollment: 'R$ 100', price2x: 320, price3x: 420,
    benefits: ['Anamnese inicial', 'Aulas em grupos reduzidos', 'Exercícios direcionados', 'Acompanhamento profissional'],
  },
  {
    slug: 'premium', name: 'Premium', tagline: 'Constância para evoluir.',
    description: 'Para quem busca continuidade, monitoramento e vantagens adicionais.',
    duration: '6 meses', enrollment: 'R$ 100', price2x: 290, price3x: 380,
    benefits: ['Avaliação física e postural completa', 'Reavaliação de evolução em 3 meses', 'Registro e acompanhamento dos resultados', '10% de desconto em serviços selecionados', 'Triagem de indicadores de saúde'],
  },
  {
    slug: 'signature', name: 'Marsalia Signature', tagline: 'A proposta mais completa.',
    description: 'Para quem prefere um plano de longo prazo, com continuidade e diálogo entre áreas.',
    duration: '12 meses', enrollment: 'Isenta', price2x: 260, price3x: 340,
    benefits: ['Matrícula cortesia', 'Avaliação física e postural completa', 'Reavaliações periódicas a cada 3 meses', 'Comparativo de evolução', '15% de desconto em serviços selecionados', 'Consulta nutricional de avaliação'],
  },
];

export const formatBRL = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
