'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial states for cinematic intro sequence
      gsap.set(imageWrapRef.current, { scale: 1.06, opacity: 0.85 });
      gsap.set(eyebrowRef.current, { opacity: 0, y: 14 });
      gsap.set([line1Ref.current, line2Ref.current, line3Ref.current], { yPercent: 115 });
      gsap.set(leadRef.current, { opacity: 0, y: 18 });
      gsap.set(ctaRef.current, { opacity: 0, y: 16 });

      // 2. Coordinated luxury entrance sequence
      const tl = gsap.timeline({ delay: 0.15 });

      tl.to(imageWrapRef.current, {
        scale: 1,
        opacity: 1,
        duration: 2.1,
        ease: 'power3.out',
      }, 0)
      .to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
      }, 0.22)
      .to([line1Ref.current, line2Ref.current, line3Ref.current], {
        yPercent: 0,
        duration: 1.05,
        stagger: 0.1,
        ease: 'power4.out',
      }, 0.38)
      .to(leadRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
      }, 0.72)
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
      }, 0.86);

      // 3. Subtle scroll-driven atmospheric depth
      gsap.to(imageWrapRef.current, {
        yPercent: 3.5,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.7,
        },
      });

      gsap.to('.hero-content-wrapper', {
        y: -30,
        opacity: 0.78,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '45% top',
          scrub: 0.7,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className='home-hero' aria-label='Abertura — Instituto Marsalia'>
      <div className='hero-backdrop'>
        <div ref={imageWrapRef} className='hero-backdrop-image-wrap'>
          <Image
            src='/images/recepcao-1.jpg'
            alt='Recepção arquitetônica e acolhedora do Instituto Marsalia'
            fill
            priority
            sizes='100vw'
            className='hero-backdrop-image'
          />
        </div>
        <div className='hero-overlay-radial' />
        <div className='hero-overlay-linear' />
        <div className='hero-overlay-tint' />
      </div>

      <div className='hero-content-wrapper'>
        {/* Eyebrow Pill */}
        <div ref={eyebrowRef} className='hero-eyebrow-pill'>
          <span className='hero-eyebrow-dot' aria-hidden='true'>•</span>
          <span className='hero-eyebrow-text'>INSTITUTO MARSALIA • SAÚDE INTEGRADA & PILATES</span>
        </div>

        {/* Monumental Editorial Headline */}
        <h1 className='hero-main-title'>
          <span className='hero-line-mask'>
            <span ref={line1Ref} className='hero-line hero-line-1'>Um lugar para</span>
          </span>
          <span className='hero-line-mask'>
            <em ref={line2Ref} className='hero-line hero-line-2'>cuidar de você</em>
          </span>
          <span className='hero-line-mask'>
            <span ref={line3Ref} className='hero-line hero-line-3'>por inteiro.</span>
          </span>
        </h1>

        {/* Supporting Paragraph */}
        <p ref={leadRef} className='hero-lead-text'>
          Saúde, movimento e bem-estar reunidos em uma experiência próxima,
          atenta e integrada ao seu ritmo de vida.
        </p>

        {/* Side-by-side Centered CTAs */}
        <div ref={ctaRef} className='hero-actions-cluster'>
          <Link href='#especialidades' className='hero-cta-primary'>
            CONHEÇA AS ESPECIALIDADES <span>↗</span>
          </Link>
          <Link href='#planos' className='hero-cta-secondary'>
            Ver planos de Pilates <span>↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
