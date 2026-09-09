'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatBRL, pilatesPlans } from '@/data/plans';

export function Plans() {
  const [frequency, setFrequency] = useState<2 | 3>(2);

  return (
    <section id='planos' className='plans-section'>
      <div className='plans-heading' data-reveal>
        <div className='plans-title-wrap'>
          <h2>
            Sua jornada.<br />
            <em>Seu ritmo e constância.</em>
          </h2>
        </div>
        <div className='plans-heading-copy'>
          <p>
            O Pilates no Instituto Marsalia é estruturado em turmas reduzidas, com plano pedagógico
            orientado para alinhamento biomecânico, fortalecimento e bem-estar integral.
          </p>

          <div className='frequency-selector' role='group' aria-label='Frequência de aulas semanais'>
            <span className='frequency-label'>Frequência semanal:</span>
            <div className='frequency-pills'>
              <button
                type='button'
                className={`frequency-pill ${frequency === 2 ? 'is-active' : ''}`}
                onClick={() => setFrequency(2)}
                aria-pressed={frequency === 2}
              >
                <strong>2×</strong> por semana
              </button>
              <button
                type='button'
                className={`frequency-pill ${frequency === 3 ? 'is-active' : ''}`}
                onClick={() => setFrequency(3)}
                aria-pressed={frequency === 3}
              >
                <strong>3×</strong> por semana
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='plan-tiers' data-stagger>
        {pilatesPlans.map((plan, index) => {
          const price = frequency === 2 ? plan.price2x : plan.price3x;
          const isSignature = plan.slug === 'signature';

          return (
            <article
              key={plan.slug}
              className={`plan-tier ${isSignature ? 'is-signature' : ''}`}
            >
              <div className='plan-tier-header'>
                <div className='plan-tier-meta'>
                  <span className='plan-tier-index'>NÍVEL 0{index + 1}</span>
                  {isSignature && <span className='plan-tier-flag'>EXPERIÊNCIA INTEGRAL</span>}
                </div>
                <h3 className='plan-tier-name'>{plan.name}</h3>
                <p className='plan-tier-tagline'>{plan.tagline}</p>
                <p className='plan-tier-description'>{plan.description}</p>
              </div>

              <div className='plan-tier-investment'>
                <span className='investment-label'>Investimento mensal</span>
                <div className='investment-value'>
                  <strong key={`${plan.slug}-${frequency}`}>{formatBRL(price)}</strong>
                  <span>/ mês</span>
                </div>
                <p className='investment-frequency-note'>
                  {frequency} sessões por semana com acompanhamento próximo
                </p>
              </div>

              <div className='plan-tier-specs'>
                <div className='spec-item'>
                  <span>PERMANÊNCIA</span>
                  <strong>{plan.duration}</strong>
                </div>
                <div className='spec-item'>
                  <span>TAXA DE MATRÍCULA</span>
                  <strong>{plan.enrollment}</strong>
                </div>
              </div>

              <div className='plan-tier-features'>
                <span className='features-title'>O que está contemplado:</span>
                <ul>
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span className='feature-bullet' aria-hidden='true'>✦</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='plan-tier-action'>
                <Link
                  href='#contato'
                  className={`button ${isSignature ? 'button-champagne' : 'button-outline-dark'}`}
                >
                  Consultar disponibilidade <span>↗</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className='plans-editorial-footnote' data-reveal>
        <p>
          * Todas as novas admissões realizam avaliação inicial para direcionamento postural e técnico
          antes do início nas turmas regulares.
        </p>
      </div>
    </section>
  );
}
