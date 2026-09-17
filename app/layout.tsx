import type { Metadata, Viewport } from 'next';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/400-italic.css';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource-variable/manrope';
import './globals.css';
import { MotionProvider } from '@/components/motion/MotionProvider';

export const viewport: Viewport = {
  themeColor: '#171210',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://instituto-marsalia.bryan-027.chatgpt.site'),
  title: {
    default: 'Instituto Marsalia | Saúde Integrada e Pilates',
    template: '%s | Instituto Marsalia',
  },
  description: 'Saúde, movimento e bem-estar reunidos em uma proposta criteriosa, personalizada e integrada.',
  icons: {
    icon: [{
      url: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iMTUiIGZpbGw9InJnYigyOCAyMCAxNykiLz48cGF0aCBkPSJNMTUgNDZWMThoNmwxMSAxNSAxMS0xNWg2djI4aC01VjI3LjVMMzUgNDBoLTZsLTktMTIuNVY0NnoiIGZpbGw9InJnYigyMjAgMTkzIDE2MykiLz48cGF0aCBkPSJNMTYgMTJoMzIiIHN0cm9rZT0icmdiKDE1OSAxMjAgODkpIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
      type: 'image/svg+xml',
    }],
  },
  openGraph: {
    title: 'Instituto Marsalia | Saúde Integrada e Pilates',
    description: 'Saúde, movimento e bem-estar reunidos em uma proposta criteriosa e integrada.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary', title: 'Instituto Marsalia', description: 'Saúde, movimento e bem-estar reunidos em uma proposta criteriosa e integrada.' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang='pt-BR'><body><MotionProvider />{children}</body></html>;
}
