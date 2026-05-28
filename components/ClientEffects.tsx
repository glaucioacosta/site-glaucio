'use client';

import { useEffect, useCallback, useState } from 'react';

const WPP = 'https://wa.me/5511990270978?text=Ol%C3%A1%20Glaucio%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es';

export default function ClientEffects() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');
    if (!slides.length) return;
    let cur = 0;
    const go = (idx: number) => { slides[cur]?.classList.remove('active'); dots[cur]?.classList.remove('active'); cur = idx % slides.length; slides[cur]?.classList.add('active'); dots[cur]?.classList.add('active'); };
    const iv = setInterval(() => go(cur + 1), 5000);
    dots.forEach(d => d.addEventListener('click', () => go(Number(d.getAttribute('data-index')))));
    return () => clearInterval(iv);
  }, []);

  useEffect(() => { const nb = document.getElementById('navbar'); const fn = () => nb?.classList.toggle('scrolled', window.scrollY > 80); window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn); }, []);

  useEffect(() => { const obs = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }); document.querySelectorAll('.animate').forEach(el => obs.observe(el)); return () => obs.disconnect(); }, []);

  const toggleMenu = useCallback(() => { setMenuOpen(p => { const n = !p; document.body.style.overflow = n ? 'hidden' : ''; return n; }); }, []);
  const closeMenu = useCallback(() => { setMenuOpen(false); document.body.style.overflow = ''; }, []);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="container nav-inner">
          <a href="#" className="nav-logo"><img src="https://res.cloudinary.com/dxjfyykul/image/upload/v1774568724/GLAUCIO_4.jpg_1_dk7msc.jpg" alt="Glaucio Costa" /></a>
          <div className="nav-links">
            <a href="#home">Home</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#depoimentos">Depoimentos</a><a href="#contato">Contato</a>
            <a href={WPP} className="nav-cta">FALE COMIGO</a>
          </div>
          <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}><span /><span /><span /></div>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#servicos" onClick={closeMenu}>Serviços</a><a href="#depoimentos" onClick={closeMenu}>Depoimentos</a><a href="#contato" onClick={closeMenu}>Contato</a>
        <a href={WPP} className="btn-wpp" style={{ marginTop: '12px', padding: '12px 24px' }}>WhatsApp</a>
      </div>
      <div className="wpp-float">
        <a href={WPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </>
  );
}
