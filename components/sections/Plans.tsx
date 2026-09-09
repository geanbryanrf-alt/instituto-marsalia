'use client';

import { useState } from 'react';
import { formatBRL, pilatesPlans } from '@/data/plans';

export function Plans() {
  const [frequency, setFrequency] = useState<2 | 3>(2);

  return (
    <section id='planos' className='plans-section'>
      <div className='plans-heading'>
        <div>
          <p className='section-label'>05 — PLANOS DE PILATES</p>
          <h2>Seu ritmo.<br /><em>Sua escolha.</em></h2>
        </div>
        <div className='plans-heading-copy'>
          <p>Escolha a frequência que melhor acompanha a sua rotina. Os planos foram pensados para valorizar a constância do cuidado.</p>
          <div className='frequency-toggle' role='group' aria-label='Frequência semanal'>
            <button type='button' className={frequency === 2 ? 'active' : ''} onClick={() => setFrequency(2)} aria-pressed={frequency === 2}>2× por semana</button>
            <button type='button' className={frequency === 3 ? 'active' : ''} onClick={() => setFrequency(3)} aria-pressed={frequency === 3}>3× por semana</button>
          </div>
        </div>
      </div>
      <div className='plan-cards'>
        {pilatesPlans.map((plan, index) => {
          const price = frequency === 2 ? plan.price2x : plan.price3x;
          return (
            <article className={`plan-card ${plan.slug === 'signature' ? 'is-featured' : ''}`} key={plan.slug}>
              <div className='plan-card-top'>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {plan.slug === 'signature' && <small>MAIS COMPLETO</small>}
              </div>
              <h3>{plan.name}</h3>
              <p className='plan-tagline'>{plan.tagline}</p>
              <p className='plan-description'>{plan.description}</p>
              <div className='plan-price'><b>{formatBRL(price)}</b><span>por mês</span></div>
              <ul>{plan.benefits.slice(0, 4).map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
              <dl>
                <div><dt>PERMANÊNCIA</dt><dd>{plan.duration}</dd></div>
                <div><dt>MATRÍCULA</dt><dd>{plan.enrollment}</dd></div>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}
