import type { Metadata } from 'next';
import Script from 'next/script';
import CookieNotice from '@/components/CookieNotice';
import { GADS_ID } from '@/components/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.glauciocosta.com'),
  title: 'Glaucio Costa | Especialista em Imóveis Industriais e Comerciais — Grande SP',
  description: 'Glaucio Costa — Especialista em áreas para Incorporação e imóveis industriais e comerciais na Grande SP. CRECI 148047F. CASAINC. Bora Interlagos.',
  keywords: ['corretor','imóveis industriais','incorporação','CASAINC','Bora Interlagos','Glaucio Costa','Grande SP'],
  openGraph: { title: 'Glaucio Costa | Imóveis — Grande SP', description: 'Especialista em Incorporação e imóveis na Grande SP. 19 anos de experiência.', type: 'website', locale: 'pt_BR', siteName: 'Glaucio Costa Imóveis' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <CookieNotice />
        {/* Google tag (Google Ads) — em todas as páginas, para medição e remarketing */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`} strategy="afterInteractive" />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GADS_ID}');`}
        </Script>
      </body>
    </html>
  );
}
