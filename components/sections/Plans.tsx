'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatBRL, pilatesPlans } from '@/data/plans';

export function Plans() {
  const [frequency, setFrequency] = useState<2 | 3>(2);

  return (
    <section id='planos' className='plans-section'>


      {/* ── CENTERED INTRO ── */}
      <div className='plans-intro' data-reveal>
        <span className='plans-intro-label'>05 — PLANOS DE PILATES</span>

        <h2 className='plans-intro-heading'>
          <span className='plans-heading-line1'>Um cuidado que</span>
          <em className='plans-heading-italic'>se adapta à sua rotina.</em>
        </h2>

        <p className='plans-intro-body'>
          Escolha a frequência que melhor acompanha a sua rotina.
          Os planos foram pensados para valorizar a constância do cuidado.
        </p>

        {/* Frequency Selector */}
        <div className='plans-freq-wrap' role='group' aria-label='Frequência de aulas semanais'>
          <span className='plans-freq-label'>FREQUÊNCIA SEMANAL</span>
          <div className='plans-freq-pills'>
            <button
              type='button'
              className={`plans-freq-btn ${frequency === 2 ? 'is-active' : ''}`}
              onClick={() => setFrequency(2)}
              aria-pressed={frequency === 2}
            >
              FREQUÊNCIA <strong>2×</strong>
            </button>
            <button
              type='button'
              className={`plans-freq-btn ${frequency === 3 ? 'is-active' : ''}`}
              onClick={() => setFrequency(3)}
              aria-pressed={frequency === 3}
            >
              FREQUÊNCIA <strong>3×</strong>
            </button>
          </div>
        </div>
      </div>

      {/* ── PLAN CARDS ── */}
      <div className='plans-grid' data-stagger>
        {pilatesPlans.map((plan, index) => {
          const price = frequency === 2 ? plan.price2x : plan.price3x;
          const isSignature = plan.slug === 'signature';
          const lvl = `PLANO 0${index + 1}`;

          return (
            <article
              key={plan.slug}
              className={`plan-card ${isSignature ? 'plan-card--signature' : ''}`}
            >
              {/* Header */}
              <div className='plan-card-header'>
                <div className='plan-card-meta'>
                  <span className='plan-card-index'>{lvl}</span>
                  {isSignature && (
                    <span className='plan-card-badge'>EXPERIÊNCIA INTEGRAL</span>
                  )}
                </div>
                <h3 className='plan-card-name'>{plan.name}</h3>
                <p className='plan-card-tagline'>{plan.tagline}</p>
                <p className='plan-card-desc'>{plan.description}</p>
              </div>

              {/* Investment */}
              <div className='plan-card-investment'>
                <span className='plan-invest-label'>VALOR ({frequency}x de)</span>
                <div className='plan-invest-row'>
                  <strong
                    className='plan-invest-price'
                    key={`${plan.slug}-${frequency}`}
                  >
                    {formatBRL(price)}
                  </strong>
                  <span className='plan-invest-period'>/mês</span>
                </div>
                <p className='plan-invest-note'>
                  {frequency === 2
                    ? 'Cuidado de qualidade, com condições especiais no plano semestral'
                    : 'Condições especiais no plano semestral e anual.'}
                </p>
              </div>

              {/* Specs strip */}
              <div className='plan-card-specs'>
                <div className='plan-spec-item'>
                  <span className='plan-spec-label'>FREQUÊNCIA</span>
                  <strong className='plan-spec-value'>{frequency}x por semana</strong>
                </div>
                <div className='plan-spec-item'>
                  <span className='plan-spec-label'>TAXA DE MATRÍCULA</span>
                  <strong className='plan-spec-value'>{plan.enrollment}</strong>
                </div>
              </div>

              {/* Features */}
              <div className='plan-card-features'>
                <span className='plan-features-title'>O QUE ESTÁ INCLUÍDO</span>
                <ul>
                  {plan.benefits.map((benefit) => (
                    <li key={benefit}>
                      <span className='plan-feature-check' aria-hidden='true'>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className='plan-card-action'>
                <Link
                  href='#contato'
                  className={`plan-cta ${isSignature ? 'plan-cta--signature' : 'plan-cta--default'}`}
                >
                  {isSignature
                    ? `Conheça o Plano Signature`
                    : `Conheça o Plano ${plan.name}`}
                  <span aria-hidden='true'> ↗</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      {/* ── FOOTNOTE ── */}
      <div className='plans-footnote' data-reveal>
        <p>
          * Todas as novas admissões realizam avaliação inicial para direcionamento
          postural e técnico antes do início nas turmas regulares.
        </p>
      </div>

    </section>
  );
}
