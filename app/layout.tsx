import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Glaucio Costa | Especialista em Imóveis Industriais e Comerciais — Grande SP',
  description: 'Glaucio Costa — Especialista em áreas para Incorporação e imóveis industriais e comerciais na Grande SP. CRECI 148047F. CASAINC. Bora Interlagos.',
  keywords: ['corretor','imóveis industriais','incorporação','CASAINC','Bora Interlagos','Glaucio Costa','Grande SP'],
  openGraph: { title: 'Glaucio Costa | Imóveis — Grande SP', description: 'Especialista em Incorporação e imóveis na Grande SP. 19 anos de experiência.', type: 'website', locale: 'pt_BR' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
