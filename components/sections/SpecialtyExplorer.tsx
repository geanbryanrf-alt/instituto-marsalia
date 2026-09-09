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
      <div className='section-intro' data-reveal>
        <p className='section-label'>04 — ESPECIALIDADES</p>
        <h2>O cuidado<br />por inteiro.</h2>
      </div>
      <div className='specialty-layout'>
        <div className='specialty-list'>
          {specialties.map((specialty, index) => (
            <button
              key={specialty.slug}
              className={index === active ? 'active' : ''}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <span>0{index + 1}</span><strong>{specialty.name}</strong><b>↗</b>
            </button>
          ))}
        </div>
        <div className='specialty-visual' aria-live='polite'>
          <div className='specialty-photo'>
            <Image key={current.image} src={current.image} alt={`Ambiente do Instituto Marsalia associado a ${current.name}`} fill sizes='(max-width: 800px) 100vw, 42vw' />
          </div>
          <p>{current.shortDescription}</p>
          <Link href='#especialidades' className='text-link'>Explorar especialidades <span>↗</span></Link>
        </div>
      </div>
    </section>
  );
}
