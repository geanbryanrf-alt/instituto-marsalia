import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { SpecialtyExplorer } from '@/components/sections/SpecialtyExplorer';
import { Plans } from '@/components/sections/Plans';

const careSteps = [
  {
    number: '01',
    title: 'Escuta inicial',
    text: 'Começamos entendendo o seu momento, sua rotina e o que você busca para a sua saúde.',
  },
  {
    number: '02',
    title: 'Cuidado conectado',
    text: 'Quando necessário, diferentes especialidades se complementam em uma mesma jornada.',
  },
  {
    number: '03',
    title: 'Acompanhamento contínuo',
    text: 'O cuidado evolui com você, respeitando seu ritmo e seus objetivos ao longo do tempo.',
  },
] as const;

export default function Home() {
  return (
    <SiteShell>
      <section className='home-hero'>
        <div className='hero-copy'>
          <p className='eyebrow'>INSTITUTO MARSALIA</p>
          <div className='hero-title'>
            <h1>Um lugar para<br /><em>cuidar de você</em><br />por inteiro.</h1>
            <p>Saúde, movimento e bem-estar reunidos em uma experiência próxima, atenta e integrada.</p>
          </div>
          <div className='hero-actions'>
            <Link href='#especialidades' className='button button-light'>Conheça as especialidades <span>↗</span></Link>
            <Link href='#planos' className='text-link'>Ver planos de Pilates <span>↗</span></Link>
          </div>
        </div>
        <div className='hero-photo'>
          <Image src='/images/recepcao-2.jpg' alt='Recepção do Instituto Marsalia' fill priority sizes='(max-width: 800px) 100vw, 50vw' className='hero-image' />
          <div className='hero-photo-note'><span>01</span><p>Um espaço criado para acolher.</p></div>
        </div>
      </section>

      <section className='intro-section' id='instituto'>
        <p className='section-label'>01 — O INSTITUTO</p>
        <div>
          <h2>Especialidades que se encontram.<br /><em>Cuidado que faz sentido.</em></h2>
          <p>No Marsalia, o cuidado não é dividido em partes. Reunimos diferentes áreas da saúde para tornar a sua jornada mais simples, próxima e contínua.</p>
        </div>
      </section>

      <section className='integration-section'>
        <div className='integration-heading'>
          <p className='section-label'>02 — INTEGRAÇÃO</p>
          <div>
            <h2>Uma jornada<br />que conversa<br /><em>com você.</em></h2>
            <p>Mais do que estar no mesmo endereço, nossas especialidades podem atuar de forma complementar para que seu cuidado tenha clareza e continuidade.</p>
          </div>
        </div>
        <div className='care-steps'>
          {careSteps.map((step) => (
            <article key={step.number} className='care-step'>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <figure className='integration-image'>
          <Image src='/images/recepcao-3.jpg' alt='Recepção do Instituto Marsalia' fill sizes='(max-width: 800px) 100vw, 90vw' />
          <figcaption>Uma experiência de cuidado em um só lugar.</figcaption>
        </figure>
      </section>

      <section className='pilates-section' id='pilates'>
        <div className='pilates-image'>
          <Image src='/images/pilates.jpg' alt='Sala de Pilates do Instituto Marsalia' fill sizes='(max-width: 800px) 100vw, 48vw' />
        </div>
        <div className='pilates-copy'>
          <p className='section-label'>03 — PILATES</p>
          <h2>Movimento com<br /><em>presença.</em></h2>
          <p>Uma experiência de Pilates pensada para o seu corpo, sua rotina e seus objetivos — com grupos reduzidos e acompanhamento profissional.</p>
          <ul>
            <li>Avaliação inicial individualizada</li>
            <li>Turmas com atenção próxima</li>
            <li>Exercícios direcionados a cada objetivo</li>
          </ul>
          <Link href='#planos' className='button button-outline'>Conhecer os planos <span>↗</span></Link>
        </div>
      </section>

      <SpecialtyExplorer />
      <Plans />

      <section className='space-section' id='espaco'>
        <div className='space-copy'>
          <p className='section-label'>06 — O ESPAÇO</p>
          <h2>Um ambiente que<br /><em>desacelera.</em></h2>
          <p>Conforto, funcionalidade e acolhimento em cada detalhe para que cuidar da saúde também seja uma pausa na rotina.</p>
        </div>
        <div className='space-images'>
          <figure className='space-large'><Image src='/images/odontologia-1.jpg' alt='Consultório do Instituto Marsalia' fill sizes='(max-width: 800px) 100vw, 45vw' /><figcaption>Precisão</figcaption></figure>
          <figure className='space-small'><Image src='/images/psicologia.jpg' alt='Ambiente de atendimento do Instituto Marsalia' fill sizes='(max-width: 800px) 100vw, 36vw' /><figcaption>Acolhimento</figcaption></figure>
        </div>
      </section>

      <section className='final-cta' id='contato'>
        <p className='section-label'>INSTITUTO MARSALIA</p>
        <h2>Seu cuidado<br /><em>começa aqui.</em></h2>
        <p>Escolha o seu ritmo e descubra uma nova forma de cuidar de você.</p>
        <Link href='#planos' className='button button-light'>Ver planos de Pilates <span>↗</span></Link>
      </section>
    </SiteShell>
  );
}
