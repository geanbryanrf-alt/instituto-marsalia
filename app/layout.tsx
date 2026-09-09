import type { Metadata } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource-variable/manrope';
import './globals.css';
import { MotionProvider } from '@/components/motion/MotionProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://instituto-marsalia.bryan-027.chatgpt.site'),
  title: {
    default: 'Instituto Marsalia | Saúde Integrada e Pilates',
    template: '%s | Instituto Marsalia',
  },
  description: 'Saúde, movimento e cuidado em um só lugar. Uma experiência integrada em Pilates e diferentes áreas da saúde.',
  openGraph: {
    title: 'Instituto Marsalia | Saúde Integrada e Pilates',
    description: 'Saúde, movimento e cuidado em um só lugar.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary', title: 'Instituto Marsalia', description: 'Saúde, movimento e cuidado em um só lugar.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang='pt-BR'><body><MotionProvider />{children}</body></html>;
}
