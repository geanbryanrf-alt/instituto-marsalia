import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { contact } from '@/data/contact';

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-mark'>
        <span>INSTITUTO</span><strong>MARSALIA</strong>
      </div>
      <nav aria-label='Navegação do rodapé'>
        {navigation.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className='footer-contact'>
        {contact.instagram && <a href={contact.instagram}>Instagram</a>}
        {contact.phone && <a href={`tel:${contact.phone}`}>{contact.phone}</a>}
      </div>
      <p className='footer-note'>© {new Date().getFullYear()} Instituto Marsalia</p>
      <p className='footer-signature'>Cuidado integrado<br />e humanizado.</p>
    </footer>
  );
}
