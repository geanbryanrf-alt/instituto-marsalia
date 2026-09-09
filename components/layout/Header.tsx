'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/data/navigation';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const first = menuRef.current?.querySelector<HTMLElement>('a');
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === 'Tab' && menuRef.current) {
        const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a,button'));
        const firstItem = focusable[0];
        const lastItem = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Link href='/' className='wordmark' aria-label='Instituto Marsalia — início'>
          <span>INSTITUTO</span><strong>MARSALIA</strong>
        </Link>
        <nav className='desktop-nav' aria-label='Navegação principal'>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <Link href='#contato' className='header-cta'>Fale com a equipe <span>↗</span></Link>
        <button
          ref={triggerRef}
          className='menu-trigger'
          type='button'
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen((value) => !value)}
        >
          <span /><span />
        </button>
      </header>
      <div
        ref={menuRef}
        id='mobile-menu'
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        role='dialog'
        aria-modal='true'
        aria-label='Menu principal'
        aria-hidden={!open}
      >
        <div className='mobile-menu-top'>
          <span>INSTITUTO MARSALIA</span>
          <button type='button' onClick={() => setOpen(false)} aria-label='Fechar menu'>Fechar</button>
        </div>
        <nav>
          {navigation.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small><span>{item.label}</span><b>↗</b>
            </Link>
          ))}
        </nav>
        <p>Saúde, movimento e cuidado em um só lugar.</p>
      </div>
    </>
  );
}
