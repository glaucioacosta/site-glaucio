'use client';

import { useEffect, useState } from 'react';

const KEY = 'gc_cookie_notice_v1';

export default function CookieNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const close = () => {
    try { localStorage.setItem(KEY, '1'); } catch {}
    setShow(false);
  };

  return (
    <div className="cookie-notice" role="region" aria-label="Aviso de cookies">
      <p>
        Usamos cookies do Google para medir visitas e anúncios. Saiba mais na nossa{' '}
        <a href="/privacidade">política de privacidade</a>.
      </p>
      <button type="button" onClick={close}>Entendi</button>
    </div>
  );
}
