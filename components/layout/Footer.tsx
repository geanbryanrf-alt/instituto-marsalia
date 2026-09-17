import Link from 'next/link';
import { navigation } from '@/data/navigation';
import { contact } from '@/data/contact';

export function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-content'>
        <div className='footer-brand'>
          <div className='footer-mark'>
            <span>INSTITUTO</span>
            <strong>MARSALIA</strong>
          </div>
          <p>Saúde, movimento e bem-estar para uma rotina mais presente.</p>
        </div>

        <nav className='footer-nav' aria-label='Navegação do rodapé'>
          <span className='footer-label'>NAVEGAÇÃO</span>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <div className='footer-contact'>
          <span className='footer-label'>CONTATO E AGENDAMENTO</span>
          <a className='footer-phone' href={`tel:${contact.phone}`}>
            <small>Telefone e WhatsApp</small>
            <strong>{contact.phone}</strong>
          </a>
          <address>
            {contact.address}<br />
            <small>{contact.openingHours}</small>
          </address>
          <a
            className='footer-whatsapp'
            href={`${contact.schedulingUrl}?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento.`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Agendar pelo WhatsApp <span>↗</span>
          </a>
        </div>
      </div>

      <div className='footer-bottom'>
        <p className='footer-note'>© {new Date().getFullYear()} Instituto Marsalia</p>
        <p className='footer-signature'>Saúde integrada e acolhedora.</p>
      </div>
    </footer>
  );
}