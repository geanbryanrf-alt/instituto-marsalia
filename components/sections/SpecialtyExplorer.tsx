'use client';

import Image from 'next/image';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { specialties } from '@/data/specialties';

export function SpecialtyExplorer() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    dragFree: false,
    loop: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const animationFrame = window.requestAnimationFrame(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const getCardPosition = (index: number) => {
    const distance = (index - selectedIndex + specialties.length) % specialties.length;
    if (distance === 0) return 'active';
    if (distance === 1) return 'next';
    if (distance === specialties.length - 1) return 'prev';
    return 'far';
  };

  return (
    <section className='spec-section' id='especialidades'>
      {/* ── HEADER ── */}
      <div className='spec-header' data-reveal>

        {/* center */}
        <div className='spec-header-center'>
          <span className='spec-label'>04 — ESPECIALIDADES</span>
          <h2 className='spec-heading'>
            <span className='spec-heading-normal'>Escolha por onde</span>
            <em className='spec-heading-italic'>começar sua jornada.</em>
          </h2>
          <p className='spec-subheading'>
            No Instituto Marsalia, cada área de atendimento dialoga com as demais
            e se adapta à sua história, ao seu ritmo e às necessidades do corpo e da mente.
          </p>
        </div>


      </div>

      {/* ── CAROUSEL ── */}
      <div className='spec-carousel-root'>
        {/* Floating Side Navigation Arrows */}
        <button
          type='button'
          className='spec-nav-btn spec-nav-btn--prev'
          onClick={scrollPrev}
          aria-label='Especialidade anterior'
        >
          <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
            <path d='m15 18-6-6 6-6' />
          </svg>
        </button>

        <button
          type='button'
          className='spec-nav-btn spec-nav-btn--next'
          onClick={scrollNext}
          aria-label='Próxima especialidade'
        >
          <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
            <path d='m9 18 6-6-6-6' />
          </svg>
        </button>

        <section
          className='spec-carousel-viewport'
          ref={emblaRef}
          aria-roledescription='carrossel'
          aria-label='Especialidades do Instituto Marsalia'
        >
          <div className='spec-carousel-container'>
            {specialties.map((spec, index) => {
              const isActive = index === selectedIndex;
              const position = getCardPosition(index);
              const num = String(index + 1).padStart(2, '0');

              return (
                <article
                  key={spec.slug}
                  className={`spec-card spec-card--${position}`}
                  aria-label={`Especialidade: ${spec.name}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => {
                    if (!isActive) scrollTo(index);
                  }}
                >
                  {/* Image */}
                  <div className='spec-card-image-wrap'>
                    <Image
                      src={spec.image}
                      alt={`Ambiente de ${spec.name} no Instituto Marsalia`}
                      fill
                      sizes='(max-width: 620px) 82vw, (max-width: 1100px) 68vw, 720px'
                      className='spec-card-image'
                      quality={85}
                      loading='lazy'
                      draggable={false}
                    />
                    {/* Badge */}
                    <div className='spec-card-badge'>
                      <span className='spec-card-badge-num'>{num}</span>
                      {isActive && (
                        <span className='spec-card-badge-focus'>EM FOCO</span>
                      )}
                    </div>
                  </div>

                  {/* Body */}
                  <div className='spec-card-body'>
                    <div className='spec-card-body-top'>
                      <h3 className='spec-card-name'>{spec.name}</h3>
                      <p className='spec-card-desc'>{spec.shortDescription}</p>
                    </div>

                    {/* Active extras */}
                    {isActive && spec.tags && (
                      <div className='spec-card-tags'>
                        {spec.tags.map((tag) => (
                          <span key={tag} className='spec-card-tag'>{tag}</span>
                        ))}
                      </div>
                    )}

                    <div className='spec-card-cta-row'>
                      {isActive ? (
                        <a
                          href='#contato'
                          className='spec-card-cta-primary'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Agendar atendimento <span aria-hidden='true'>↗</span>
                        </a>
                      ) : (
                        <button
                          type='button'
                          className='spec-card-cta-ghost'
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollTo(index);
                          }}
                          aria-label={`Ver detalhes de ${spec.name}`}
                        >
                          <span aria-hidden='true'>→</span>
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── CONTROLS & HINT ── */}
        <div className='spec-controls' aria-label='Controles do carrossel de especialidades'>
          <button
            type='button'
            className='spec-ctrl-btn spec-ctrl-btn--prev'
            onClick={scrollPrev}
            aria-label='Especialidade anterior'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <path d='m15 18-6-6 6-6' />
            </svg>
          </button>

          <div className='spec-progress' aria-live='polite'>
            <span className='spec-progress-count'>
              <strong>{String(selectedIndex + 1).padStart(2, '0')}</strong>
              <span aria-hidden='true'> / </span>
              {String(specialties.length).padStart(2, '0')}
            </span>
            <div className='spec-dots' role='tablist' aria-label='Navegar para especialidade'>
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  type='button'
                  role='tab'
                  aria-selected={index === selectedIndex}
                  aria-label={`Ir para ${specialties[index]?.name ?? `especialidade ${index + 1}`}`}
                  className={`spec-dot ${index === selectedIndex ? 'spec-dot--active' : ''}`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
            <span className='spec-drag-hint'>Clique nas setas ou arraste para os lados</span>
          </div>

          <button
            type='button'
            className='spec-ctrl-btn spec-ctrl-btn--next'
            onClick={scrollNext}
            aria-label='Próxima especialidade'
          >
            <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <path d='m9 18 6-6-6-6' />
            </svg>
          </button>
        </div>
      </div>


    </section>
  );
}
