export const WPP_NUMBER = '5511990270978';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/** Detecta se a visita veio de anúncio (gclid ou utm) para identificar a origem na mensagem. */
export function originLabel(): string {
  if (typeof window === 'undefined') return 'pelo seu site';
  const p = new URLSearchParams(window.location.search);
  if (p.get('gclid') || p.get('gbraid') || p.get('wbraid') || p.get('utm_source') === 'google') return 'pelo Google';
  return 'pelo seu site';
}

export function wppUrl(message: string): string {
  return `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Evento para o Google Tag Manager / Google Ads (conversões). */
export function track(event: string, data: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}
