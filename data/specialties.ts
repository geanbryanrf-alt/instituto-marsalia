export type Specialty = {
  slug: string;
  name: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
};

export const specialties: Specialty[] = [
  { slug: 'pilates', name: 'Pilates', featured: true, image: '/images/pilates.jpg', shortDescription: 'Movimento acompanhado, grupos reduzidos e atenção à individualidade.' },
  { slug: 'fisioterapia', name: 'Fisioterapia', image: '/images/detail.jpg', shortDescription: 'Cuidado orientado para movimento, funcionalidade e qualidade de vida.' },
  { slug: 'psicologia', name: 'Psicologia', image: '/images/psicologia.jpg', shortDescription: 'Um espaço de escuta, acolhimento e cuidado com a saúde emocional.' },
  { slug: 'nutricao', name: 'Nutrição', image: '/images/psicologia.jpg', shortDescription: 'Acompanhamento alimentar atento à rotina e às necessidades individuais.' },
  { slug: 'odontologia', name: 'Odontologia', image: '/images/odontologia-2.jpg', shortDescription: 'Cuidado odontológico em um ambiente sereno, funcional e acolhedor.' },
  { slug: 'clinica-geral', name: 'Clínica Geral', image: '/images/recepcao-4.jpg', shortDescription: 'Atenção à saúde de forma abrangente, próxima e contínua.' },
  { slug: 'nutrologia', name: 'Nutrologia', image: '/images/recepcao-1.jpg', shortDescription: 'Uma visão clínica integrada aos hábitos, à prevenção e ao bem-estar.' },
  { slug: 'dermatologia', name: 'Dermatologia', image: '/images/odontologia-1.jpg', shortDescription: 'Cuidado especializado com a saúde e o equilíbrio da pele.' },
  { slug: 'ginecologia', name: 'Ginecologia', image: '/images/recepcao-3.jpg', shortDescription: 'Acompanhamento atento às diferentes fases da saúde da mulher.' },
];
