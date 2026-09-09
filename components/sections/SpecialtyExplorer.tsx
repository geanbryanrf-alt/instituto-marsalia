'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { specialties } from '@/data/specialties';

export function SpecialtyExplorer() {
  const [active, setActive] = useState(0);
  const current = specialties[active];

  return (
    <section className='specialties-section' id='especialidades'>
      <div className='specialties-heading' data-reveal>
        <p className='section-label'>04 — ESPECIALIDADES INTEGRADAS</p>
        <div>
          <h2>
            Escolha por onde<br />
            <em>começar o seu cuidado.</em>
          </h2>
          <p>
            No Instituto Marsalia, cada área de atendimento dialoga com as demais.
            O cuidado não é fragmentado: ele se adapta à sua história, ao seu ritmo e ao que o seu corpo e sua mente necessitam.
          </p>
        </div>
      </div>

      <div className='specialty-curation'>
        {/* Curated interactive list */}
        <div className='specialty-nav-list' role='tablist' aria-label='Lista de especialidades do Instituto Marsalia'>
          {specialties.map((specialty, index) => {
            const isCurrent = index === active;
            return (
              <button
                key={specialty.slug}
                type='button'
                role='tab'
                aria-selected={isCurrent}
                id={`tab-${specialty.slug}`}
                aria-controls={`panel-${specialty.slug}`}
                className={`specialty-row ${isCurrent ? 'is-active' : ''}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <div className='specialty-row-meta'>
                  <span className='specialty-number'>{String(index + 1).padStart(2, '0')}</span>
                  <span className='specialty-title'>{specialty.name}</span>
                </div>
                <div className='specialty-row-action'>
                  <span className='specialty-hint'>{isCurrent ? 'Em foco' : 'Ver detalhes'}</span>
                  <span className='specialty-arrow' aria-hidden='true'>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Architectural Showcase */}
        <div className='specialty-stage' aria-live='polite'>
          <div className='specialty-stage-inner'>
            <div className='specialty-stage-media'>
              <div className='specialty-stage-glow' />
              <Image
                key={current.slug}
                src={current.image}
                alt={`Ambiente dedicado a ${current.name} no Instituto Marsalia`}
                fill
                priority={active === 0}
                sizes='(max-width: 980px) 100vw, 45vw'
                className='specialty-stage-image'
              />
              <div className='specialty-stage-badge'>
                <span>04.{String(active + 1).padStart(2, '0')}</span>
                <small>INSTITUTO MARSALIA</small>
              </div>
            </div>

            <div className='specialty-stage-content'>
              <div className='specialty-stage-header'>
                <span className='specialty-stage-tag'>Atendimento Integrado</span>
                <h3>{current.name}</h3>
              </div>
              <p className='specialty-stage-desc'>{current.shortDescription}</p>
              <div className='specialty-stage-footer'>
                <div className='specialty-stage-points'>
                  <span>Acolhimento individualizado</span>
                  <span>Ambiente privativo e sereno</span>
                  <span>Diálogo multidisciplinar</span>
                </div>
                <Link href='#contato' className='button button-outline-warm'>
                  Agendar atendimento <span>↗</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
