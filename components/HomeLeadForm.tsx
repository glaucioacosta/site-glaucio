'use client';

import { useState } from 'react';
import { WPP_NUMBER } from './site';

const PERFIS: Record<string, string> = {
  comprador: 'Comprador: quero comprar um terreno ou imóvel',
  'corretor-parceria': 'Corretor: quero vender em parceria',
  incorporadora: 'Incorporadora: busco terrenos',
  investidor: 'Investidor',
  outro: 'Outro assunto',
};

export default function HomeLeadForm() {
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get('name') || '').trim();
    const fone = String(f.get('phone') || '').replace(/\D/g, '');
    const email = String(f.get('email') || '').trim();
    const perfil = PERFIS[String(f.get('profile') || '')] || '';
    const mensagem = String(f.get('message') || '').trim();

    if (nome.length < 2) return setError('Informe seu nome.');
    if (fone.length < 10) return setError('Informe um WhatsApp com DDD, por exemplo (11) 99999-9999.');
    setError('');

    const texto = [
      'Olá Glaucio, vim pelo seu site.',
      `Nome: ${nome}`,
      `WhatsApp: ${fone}`,
      email ? `E-mail: ${email}` : '',
      perfil ? `Perfil: ${perfil}` : '',
      mensagem ? `Mensagem: ${mensagem}` : '',
    ].filter(Boolean).join('\n');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'lead_form_submit', origem: 'home', perfil });
    window.open(`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
  };

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label className="sr-only" htmlFor="hf-name">Nome completo</label>
      <input id="hf-name" type="text" name="name" placeholder="Nome completo" autoComplete="name" required />
      <label className="sr-only" htmlFor="hf-phone">WhatsApp com DDD</label>
      <input id="hf-phone" type="tel" name="phone" placeholder="WhatsApp (com DDD)" inputMode="tel" autoComplete="tel" required />
      <label className="sr-only" htmlFor="hf-email">E-mail</label>
      <input id="hf-email" type="email" name="email" placeholder="E-mail (opcional)" autoComplete="email" />
      <label className="sr-only" htmlFor="hf-profile">Perfil</label>
      <select id="hf-profile" name="profile" defaultValue="">
        <option value="" disabled>Eu sou...</option>
        {Object.entries(PERFIS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      <label className="sr-only" htmlFor="hf-message">Mensagem</label>
      <textarea id="hf-message" name="message" placeholder="Mensagem (opcional)" />
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="btn-submit">Enviar pelo WhatsApp</button>
      <p className="form-note">O WhatsApp abre com sua mensagem pronta. É só tocar em enviar.</p>
    </form>
  );
}
