'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatBRL, pilatesPlans } from '@/data/plans';

export function Plans({ compact = false }: { compact?: boolean }) {
  const [frequency, setFrequency] = useState<2 | 3>(2);

  return (
    <section id='planos' className={`plans-section ${compact ? 'plans-compact' : ''}`}>
      <div className='section-intro' data-reveal>
        <p className='section-label'>EXPERIÊNCIAS DE CUIDADO</p>
        <h2>Escolha o ritmo.<br />Nós cuidamos do percurso.</h2>
        <div className='frequency-toggle' role='group' aria-label='Frequência semanal'>
          <button className={frequency === 2 ? 'active' : ''} onClick={() => setFrequency(2)} aria-pressed={frequency === 2}>2× por semana</button>
          <button className={frequency === 3 ? 'active' : ''} onClick={() => setFrequency(3)} aria-pressed={frequency === 3}>3× por semana</button>
        </div>
      </div>
      <div className='plan-list'>
        {pilatesPlans.map((plan, index) => {
          const price = frequency === 2 ? plan.price2x : plan.price3x;
          return (
            <details className={`plan-row ${plan.slug === 'signature' ? 'is-signature' : ''}`} key={plan.slug} open={!compact && index === 2}>
              <summary>
                <span className='plan-index'>0{index + 1}</span>
                <span className='plan-name'>{plan.name}</span>
                <span className='plan-price' key={`${frequency}-${price}`}><b>{formatBRL(price)}</b><small>/ mês</small></span>
                <span className='plan-plus'>+</span>
              </summary>
              <div className='plan-details'>
                <div><p className='plan-tagline'>{plan.tagline}</p><p>{plan.description}</p></div>
                <ul>{plan.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
                <dl>
                  <div><dt>PERMANÊNCIA</dt><dd>{plan.duration}</dd></div>
                  <div><dt>MATRÍCULA</dt><dd>{plan.enrollment}</dd></div>
                </dl>
              </div>
            </details>
          );
        })}
      </div>
      <Link href='#pilates' className='text-link'>Conhecer o Pilates <span>↗</span></Link>
    </section>
  );
}
