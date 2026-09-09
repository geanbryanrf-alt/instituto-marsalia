import Image from 'next/image';
import Link from 'next/link';
import { SiteShell } from '@/components/layout/SiteShell';
import { SpecialtyExplorer } from '@/components/sections/SpecialtyExplorer';
import { Plans } from '@/components/sections/Plans';

const careSteps = [
  {
    number: '01',
    subtitle: 'PRIMEIRO PASSO',
    title: 'Escuta inicial',
    text: 'Começamos entendendo o seu momento, sua rotina e o que você busca para a sua saúde.',
  },
  {
    number: '02',
    subtitle: 'VISÃO INTEGRADA',
    title: 'Cuidado conectado',
    text: 'Quando necessário, diferentes especialidades atuam de forma complementar na sua jornada.',
  },
  {
    number: '03',
    subtitle: 'CONTINUIDADE',
    title: 'Acompanhamento contínuo',
    text: 'O cuidado evolui com você, respeitando seu ritmo e seus objetivos ao longo do tempo.',
  },
] as const;

export default function Home() {
  return (
    <SiteShell>
      {/* 1) HERO SECTION CINEMATOGRÁFICO CENTRALIZADO */}
      <section className='home-hero' aria-label='Abertura — Instituto Marsalia'>
        <div className='hero-backdrop'>
          <Image
            src='/images/recepcao-2.jpg'
            alt='Ambiente acolhedor e arquitetônico da recepção do Instituto Marsalia'
            fill
            priority
            sizes='100vw'
            className='hero-backdrop-image'
            data-scale-in
          />
          <div className='hero-gradient-overlay' />
          <div className='hero-warm-tint' />
        </div>

        <div className='hero-content-wrapper'>
          <div className='hero-badge' data-reveal data-delay='0.1'>
            <span className='hero-dot' />
            <p className='eyebrow'>INSTITUTO MARSALIA • SAÚDE INTEGRADA & PILATES</p>
          </div>

          <div className='hero-main-title' data-reveal data-delay='0.25'>
            <h1>
              Um lugar para<br />
              <em>cuidar de você</em><br />
              por inteiro.
            </h1>
          </div>

          <p className='hero-lead-text' data-reveal data-delay='0.35'>
            Saúde, movimento e bem-estar reunidos em uma experiência próxima,
            atenta e integrada ao seu ritmo de vida.
          </p>

          <div className='hero-actions-cluster' data-reveal data-delay='0.45'>
            <Link href='#especialidades' className='button button-champagne'>
              Conheça as especialidades <span>↗</span>
            </Link>
            <Link href='#planos' className='text-link text-link-light'>
              Ver planos de Pilates <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2) METODOLOGIA DE CUIDADO */}
      <section className='institute-story-section' id='instituto'>
        <div className='care-journey-block'>
          <div className='care-journey-header' data-reveal>
            <div className='care-journey-title'>
              <h2>Como o cuidado se organiza no Marsalia.</h2>
              <p>
                Cada etapa do atendimento foi pensada para oferecer acolhimento, integração entre especialidades e continuidade no acompanhamento.
              </p>
            </div>
          </div>

          <div className='care-sequence-grid' data-stagger>
            {careSteps.map((step) => (
              <article key={step.number} className='care-step-card'>
                <div className='care-step-top'>
                  <span className='care-step-num'>{step.number}</span>
                  <span className='care-step-sub'>{step.subtitle}</span>
                </div>
                <div className='care-step-body'>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                <div className='care-step-accent-line' />
              </article>
            ))}
          </div>

          <figure className='integration-hero-frame' data-reveal>
            <div className='integration-image-wrap' data-parallax data-speed='4'>
              <Image
                src='/images/recepcao-3.jpg'
                alt='Arquitetura contemporânea e acolhedora da recepção do Instituto Marsalia'
                fill
                sizes='(max-width: 980px) 100vw, 92vw'
                className='integration-photo'
              />
            </div>
            <div className='integration-caption-bar'>
              <div className='caption-left'>
                <span className='caption-pill'>ARQUITETURA & BEM-ESTAR</span>
                <figcaption>Uma atmosfera concebida para diminuir o ritmo do dia.</figcaption>
              </div>
              <span className='caption-index'>MARSALIA • ESPAÇO</span>
            </div>
          </figure>
        </div>
      </section>

      {/* 4) INTERLÚDIO CINEMATOGRÁFICO: O MOVIMENTO CURA */}
      <section className='cinematic-interlude' aria-label='Interlúdio — Filosofia Marsalia'>
        <div className='interlude-bg'>
          <Image
            src='/images/recepcao-1.jpg'
            alt='Detalhe de luz e serenidade no Instituto Marsalia'
            fill
            sizes='100vw'
            className='interlude-image'
            data-parallax
            data-speed='6'
          />
          <div className='interlude-overlay' />
        </div>

        <div className='interlude-container' data-reveal>
          <h2 className='interlude-quote'>
            O movimento cura.<br />
            <em>A escuta acolhe.</em>
          </h2>
          <p className='interlude-subquote'>
            Acreditamos que o corpo humano encontra sua potência quando ganha presença,
            alinhamento e tempo para respirar.
          </p>
          <div className='interlude-divider' />
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
            <h2>
              Movimento com<br />
              <em>precisão e presença.</em>
            </h2>
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
          <h2>
            O seu cuidado integral<br />
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
              href='https://wa.me/?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Instituto%20Marsalia'
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
    </SiteShell>
  );
}
