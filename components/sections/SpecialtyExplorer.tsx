'use client';

import Image from 'next/image';
import { useState } from 'react';
import { specialties } from '@/data/specialties';

export function SpecialtyExplorer() {
  const [active, setActive] = useState(0);
  const current = specialties[active];

  return (
    <section className='specialties-section' id='especialidades'>
      <div className='specialties-heading'>
        <p className='section-label'>04 — ESPECIALIDADES</p>
        <div>
          <h2>Escolha por onde<br /><em>começar.</em></h2>
          <p>Encontre a especialidade que faz sentido para o seu momento. Cada área é parte de uma experiência de cuidado mais completa.</p>
        </div>
      </div>
      <div className='specialty-showcase'>
        <div className='specialty-feature' aria-live='polite'>
          <div className='specialty-photo'>
            <Image key={current.image} src={current.image} alt={`Ambiente associado a ${current.name}`} fill sizes='(max-width: 800px) 100vw, 36vw' />
          </div>
          <div className='specialty-feature-copy'>
            <span>EM DESTAQUE</span>
            <h3>{current.name}</h3>
            <p>{current.shortDescription}</p>
          </div>
        </div>
        <div className='specialty-grid' role='list' aria-label='Especialidades do Instituto Marsalia'>
          {specialties.map((specialty, index) => (
            <button
              key={specialty.slug}
              type='button'
              className={index === active ? 'is-active' : ''}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
              role='listitem'
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{specialty.name}</strong>
              <b aria-hidden='true'>↗</b>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
