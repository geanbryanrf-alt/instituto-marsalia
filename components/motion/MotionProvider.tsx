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
    gsap.ticker.lagSmoothing(0);

    const context = gsap.context(() => {
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

  return null;
}
