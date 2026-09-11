'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function MotionProvider() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.95,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(500, 33);

    const context = gsap.context(() => {
      // Mark each section as it enters the viewport, for a subtle living rhythm
      gsap.utils.toArray<HTMLElement>('main > section').forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 72%',
          end: 'bottom 28%',
          toggleClass: { targets: section, className: 'is-in-view' },
        });
      });

      // A restrained progress line keeps the visitor oriented through the story
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          start: 0,
          end: 'max',
          scrub: 0.2,
        },
      });

      // Reveal individual elements with elegance
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        const delay = parseFloat(element.dataset.delay || '0');
        gsap.fromTo(
          element,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          }
        );
      });

      // Staggered reveal for lists and step grids
      gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((container) => {
        const items = container.children;
        gsap.fromTo(
          items,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 85%',
              once: true,
            },
          }
        );
      });

      // Subtle atmospheric parallax
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
        const speed = parseFloat(element.dataset.speed || '5');
        gsap.fromTo(
          element,
          { yPercent: -speed },
          {
            yPercent: speed,
            ease: 'none',
            scrollTrigger: {
              trigger: element.parentElement || element,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          }
        );
      });

      // Images respond slowly to the scroll, creating depth without distraction
      gsap.utils.toArray<HTMLImageElement>(
        '.pilates-image-frame img, .space-editorial-gallery img, .spec-card-image'
      ).forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.14, filter: 'saturate(0.84) brightness(0.9)' },
          {
            scale: 1,
            filter: 'saturate(1) brightness(1)',
            ease: 'none',
            scrollTrigger: {
              trigger: image.parentElement || image,
              start: 'top 88%',
              end: 'bottom 28%',
              scrub: 0.9,
            },
          }
        );
      });

      // Subtle scale-down for opening / hero images
      gsap.utils.toArray<HTMLElement>('[data-scale-in]').forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.8,
            ease: 'power2.out',
          }
        );
      });
    });

    return () => {
      gsap.ticker.remove(updateTicker);
      context.revert();
      lenis.destroy();
    };
  }, []);

  return <div className='scroll-progress' aria-hidden='true' />;
}
