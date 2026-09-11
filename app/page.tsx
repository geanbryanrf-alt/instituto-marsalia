import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { Hero } from '@/components/sections/Hero';
import { FounderStory } from '@/components/sections/FounderStory';
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
    text: 'Quando necessário, diferentes especialidades atuam de forma complementar em uma mesma jornada.',
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
      {/* 1) HERO SECTION CINEMATOGRÁFICO CONFORME IMAGEM DE REFERÊNCIA */}
      <Hero />

      {/* 2) PROPÓSITO E FUNDADORES */}
      <FounderStory />

      {/* 3) METODOLOGIA DE CUIDADO — REDESIGN EDITORIAL CENTRADO */}
      <section className='institute-story-section' id='instituto'>
        <div className='care-editorial-container'>

          {/* — HEADLINE E INTRO CENTRADOS — */}
          <div className='care-editorial-header' data-reveal>
            <h2 className='care-editorial-heading'>
              <span className='care-heading-line'>Como cuidamos</span>
              <em className='care-heading-accent'>no Marsalia.</em>
            </h2>
            <p className='care-editorial-lead'>
              Cada etapa do atendimento foi pensada para oferecer acolhimento,
              integração entre especialidades e continuidade no acompanhamento.
            </p>
          </div>

          {/* — TRÊS CARDS DE CUIDADO — */}
          <div className='care-cards-grid' data-stagger>
            {careSteps.map((step) => (
              <article
                key={step.number}
                className='care-card'
              >
                <span className='care-card-number'>{step.number}</span>
                <div className='care-card-content'>
                  <h3 className='care-card-title'>{step.title}</h3>
                  <p className='care-card-desc'>{step.text}</p>
                </div>
                <div className='care-card-footer'>
                  <span className='care-card-arrow' aria-hidden='true'>→</span>
                </div>
              </article>
            ))}
          </div>


        </div>
      </section>

      {/* 5) SEÇÃO PILATES ELEVADA */}
      <section className='pilates-section' id='pilates'>
        <div className='pilates-split-container'>
          <div className='pilates-media-col' data-reveal>
            <div className='pilates-image-frame'>
              <Image
                src='/images/pilates.jpg'
                alt='Studio de Pilates do Instituto Marsalia com equipamentos completos'
                fill
                sizes='(max-width: 980px) 100vw, 50vw'
                className='pilates-img'
                quality={85}
                loading='lazy'
                data-parallax
                data-speed='3'
              />
              <div className='pilates-badge-overlay'>
                <small>ESTÚDIO DEDICADO</small>
                <strong>Turmas Reduzidas</strong>
              </div>
            </div>
          </div>

          <div className='pilates-copy-col' data-reveal data-delay='0.15'>
            <p className='pilates-eyebrow'>O MÉTODO PILATES</p>
            <h2>
              Pilates<br />
              <em>no Marsalia.</em>
            </h2>
            <p className='pilates-tagline'>Movimento com precisão e presença.</p>
            <p className='pilates-description'>
              No Instituto Marsalia, o Pilates transcende o exercício mecânico. Conduzido por fisioterapeutas
              e instrutores dedicados, cada sessão respeita sua biomecânica e potencializa sua postura,
              alívio de tensões e mobilidade duradoura.
            </p>

            <div className='pilates-highlights-list'>
              <div className='highlight-row'>
                <span className='highlight-icon'>01</span>
                <div>
                  <strong>Avaliação inicial postural individualizada</strong>
                  <p>Mapeamento de padrões biomecânicos e metas personalizadas.</p>
                </div>
              </div>
              <div className='highlight-row'>
                <span className='highlight-icon'>02</span>
                <div>
                  <strong>Turmas com atenção personalizada</strong>
                  <p>Grupos estritamente reduzidos para correção e acompanhamento contínuo.</p>
                </div>
              </div>
              <div className='highlight-row'>
                <span className='highlight-icon'>03</span>
                <div>
                  <strong>Aparelhos de alta precisão</strong>
                  <p>Studio moderno e silencioso, projetado para foco e serenidade.</p>
                </div>
              </div>
            </div>

            <div className='pilates-actions'>
              <Link href='#planos' className='button button-champagne'>
                Conhecer os planos de Pilates <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6) ESPECIALIDADES INTEGRADAS CURADAS */}
      <SpecialtyExplorer />

      {/* 7) PLANOS E NÍVEIS DE CUIDADO */}
      <Plans />

      {/* 8) O ESPAÇO — GALERIA ARQUITETÔNICA EDITORIAL */}
      <section className='space-section' id='espaco'>
        <div className='space-header-editorial' data-reveal>
          <div className='space-title-block'>
            <p className='space-eyebrow'>O ESPAÇO</p>
            <h2>
              Um ambiente que<br />
              <em>desacelera o tempo.</em>
            </h2>
          </div>
          <div className='space-desc-block'>
            <p>
              Do piso à iluminação difusa, cada ambiente do Instituto Marsalia foi desenhado
              para proporcionar conforto acústico, privacidade e uma sensação imediata de pausa
              na rotina urbana.
            </p>
          </div>
        </div>

        <div className='space-editorial-gallery'>
          <figure className='space-hero-shot' data-reveal>
            <div className='space-shot-inner' data-parallax data-speed='3'>
              <Image
                src='/images/odontologia-1.jpg'
                alt='Consultório de alta precisão e conforto no Instituto Marsalia'
                fill
                sizes='(max-width: 980px) 100vw, 55vw'
                quality={85}
                loading='lazy'
              />
            </div>
            <figcaption>
              <span>CONSULTÓRIOS CLÍNICOS</span>
              <strong>Tecnologia e Serenidade</strong>
            </figcaption>
          </figure>

          <div className='space-secondary-column'>
            <figure className='space-detail-shot' data-reveal data-delay='0.2'>
              <div className='space-shot-inner' data-parallax data-speed='5'>
                <Image
                  src='/images/psicologia.jpg'
                  alt='Ambiente de escuta acolhedora no Instituto Marsalia'
                  fill
                  sizes='(max-width: 980px) 100vw, 38vw'
                  quality={85}
                  loading='lazy'
                />
              </div>
              <figcaption>
                <span>SALA DE ATENDIMENTO</span>
                <strong>Escuta e Acolhimento Íntimo</strong>
              </figcaption>
            </figure>

            <figure className='space-accent-shot' data-reveal data-delay='0.3'>
              <div className='space-shot-inner' data-parallax data-speed='4'>
                <Image
                  src='/images/detail.jpg'
                  alt='Detalhes do espaço Marsalia'
                  fill
                  sizes='(max-width: 980px) 100vw, 38vw'
                  quality={85}
                  loading='lazy'
                />
              </div>
              <figcaption>
                <span>DETALHES & TEXTURAS</span>
                <strong>Atenção a Cada Cuidado</strong>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 9) FINAL CTA CINEMATOGRÁFICO */}
      <section className='final-cta' id='contato'>
        <div className='final-cta-glow' aria-hidden='true' />
        <div className='final-cta-content' data-reveal>
          <p className='final-cta-eyebrow'>AGENDAMENTO</p>
          <h2>
            <span className='final-cta-heading-line'>O seu cuidado integral</span>
            <em>começa agora.</em>
          </h2>

          <p className='final-cta-text'>
            Agende uma conversa com nossa equipe, conheça os planos de Pilates
            e experimente a sensação de uma saúde cuidada por inteiro.
          </p>

          <div className='final-cta-buttons'>
            <Link href='#planos' className='button button-champagne button-large'>
              Ver planos de Pilates <span>↗</span>
            </Link>
            <a
              href='https://wa.me/5527999981466?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Marsalia'
              target='_blank'
              rel='noopener noreferrer'
              className='button button-outline-light button-large'
            >
              Falar no WhatsApp <span>↗</span>
            </a>
          </div>

          <div className='final-cta-location'>
            <span>INSTITUTO MARSALIA</span>
            <small>Atendimento presencial com agendamento prévio</small>
          </div>
        </div>
      </section>

      <section className='location-section' id='localizacao'>
        <div className='location-inner'>
          <div className='location-content' data-reveal>
          <p className='location-eyebrow'>ONDE ESTAMOS</p>
          <h2>
            Venha conhecer<br />
            <em>o Marsalia.</em>
          </h2>
          <address>
            Rua Ladeira Campo Santo<br />
            Governador Lindenberg, ES<br />
            29720-000, Brasil
          </address>
          <p className='location-phone'>+55 27 99998-1466</p>
          <div className='location-actions'>
            <a
              className='button button-outline-dark'
              href='https://www.google.com/maps/search/?api=1&query=Rua%20Ladeira%20Campo%20Santo%2C%20Governador%20Lindenberg%2C%20ES%2C%2029720-000'
              target='_blank'
              rel='noopener noreferrer'
            >
              Abrir no Maps <span>↗</span>
            </a>
            <a
              className='location-whatsapp'
              href='https://wa.me/5527999981466?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.'
              target='_blank'
              rel='noopener noreferrer'
            >
              Agendar pelo WhatsApp <span>↗</span>
            </a>
          </div>
        </div>

          <div className='location-map' data-reveal data-delay='0.15'>
          <iframe
            title='Localização do Instituto Marsalia'
            src='https://www.google.com/maps?q=Rua%20Ladeira%20Campo%20Santo%2C%20Governador%20Lindenberg%2C%20ES%2C%2029720-000&z=16&output=embed'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
