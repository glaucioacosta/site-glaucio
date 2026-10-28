'use client';

import { useState } from 'react';
import { originLabel, track, wppUrl } from './wpp';
import s from '@/app/panorama/panorama.module.css';

export default function LeadForm() {
  const [error, setError] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nome = String(f.get('nome') || '').trim();
    const fone = String(f.get('fone') || '').replace(/\D/g, '');
    const objetivo = String(f.get('objetivo') || '');
    const visita = f.get('visita') === 'on';

    if (nome.length < 2) return setError('Informe seu nome.');
    if (fone.length < 10) return setError('Informe um WhatsApp com DDD, por exemplo (11) 99999-9999.');
    setError('');

    const linhas = [
      `Olá Glaucio, vim ${originLabel()} e quero saber mais sobre o Panorama Skyline Ibirapuera.`,
      `Nome: ${nome}`,
      `WhatsApp: ${fone}`,
      objetivo ? `Objetivo: ${objetivo}` : '',
      visita ? 'Tenho interesse em visitar a obra.' : '',
    ].filter(Boolean);

    track('lead_form_submit', { objetivo, visita });
    window.open(wppUrl(linhas.join('\n')), '_blank', 'noopener');
  };

  return (
    <form className={s.form} onSubmit={onSubmit} noValidate>
      <label className={s.field}>
        <span>Nome</span>
        <input name="nome" type="text" autoComplete="name" required />
      </label>
      <label className={s.field}>
        <span>WhatsApp com DDD</span>
        <input name="fone" type="tel" inputMode="tel" autoComplete="tel" required />
      </label>
      <fieldset className={s.choices}>
        <legend>Você procura um imóvel para</legend>
        <label><input type="radio" name="objetivo" value="Morar" defaultChecked /> Morar</label>
        <label><input type="radio" name="objetivo" value="Investir" /> Investir</label>
        <label><input type="radio" name="objetivo" value="Morar e investir" /> Os dois</label>
      </fieldset>
      <label className={s.check}>
        <input type="checkbox" name="visita" defaultChecked /> Quero agendar uma visita à obra
      </label>
      {error && <p className={s.error} role="alert">{error}</p>}
      <button type="submit" className={s.btnPrimary}>Enviar pelo WhatsApp</button>
      <p className={s.formNote}>O WhatsApp abre com a sua mensagem pronta para o Glaucio. É só tocar em enviar.</p>
    </form>
  );
}
