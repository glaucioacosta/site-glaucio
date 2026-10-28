export const WPP_NUMBER = '5511990270978';

/** Google Ads */
export const GADS_ID = 'AW-18531414588';
/** Rótulo da conversão "Lead" (Metas → Conversões → ação → Configuração da tag). Cole entre as aspas. */
export const GADS_LEAD_LABEL = 'mT-XCLDr66wdELzku4RF';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
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

  // Conversão do Google Ads: clique no WhatsApp ou envio do formulário
  if (GADS_LEAD_LABEL && typeof window.gtag === 'function' && (event === 'whatsapp_click' || event === 'lead_form_submit')) {
    window.gtag('event', 'conversion', { send_to: `${GADS_ID}/${GADS_LEAD_LABEL}`, value: 1.0, currency: 'BRL', transport_type: 'beacon' });
  }
}
