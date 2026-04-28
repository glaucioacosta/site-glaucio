import ClientEffects from '@/components/ClientEffects';

const WPP = 'https://wa.me/5511990270978?text=Ol%C3%A1%20Glaucio%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es';
const WPP_BORA = 'https://wa.me/5511990270978?text=Ol%C3%A1%2C%20visitei%20o%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20*BORA%20INTERLAGOS*.';

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* ====== HERO ====== */}
      <section className="hero" id="home">
        <div id="heroSlides">
          {[
            { label: 'LANÇAMENTO', title: 'Bora Interlagos — Seu novo apê com parcelas que cabem no bolso', btn: 'SAIBA MAIS', href: '#bora', bg: 'https://borainterlagos.com.br/wp-content/uploads/2026/02/Fachada-Bora-Interlagos-Geral-1.webp' },
            { label: 'CASAINC', title: 'Somos uma incorporadora e construtora', btn: 'CONHEÇA', href: '#sobre', bg: 'https://casainc.com.br/wp-content/uploads/2022/12/5-2-1024x534.jpg' },
            { label: 'EMPREENDIMENTOS', title: 'Construímos imóveis inovadores que vão surpreender', btn: 'VER PROJETOS', href: '#empreendimentos', bg: 'https://casainc.com.br/wp-content/uploads/2022/12/batch_M_I_CHURRAS_R00-1-1024x576.jpg' },
            { label: 'VIBRA ESTAÇÃO ORATÓRIO', title: 'Na medida do seu sonho', btn: 'SAIBA MAIS', href: WPP, bg: 'https://casainc.com.br/wp-content/uploads/2023/05/Piscina-1024x617.png' },
          ].map((s, i) => (
            <div key={i} className={`hero-slide ${i===0?'active':''}`} data-slide={i}>
              <div className="hero-slide-bg" style={{ backgroundImage:`url(${s.bg})` }} />
              <div className="hero-content">
                <div className="container">
                  <div className="hero-label">{s.label}</div>
                  <h1 className="hero-title">{s.title}</h1>
                  <a href={s.href} className="hero-btn">{s.btn} →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-indicators" id="heroIndicators">
          {[0,1,2,3].map(i => <div key={i} className={`hero-dot ${i===0?'active':''}`} data-index={i} />)}
        </div>
      </section>

      {/* ====== BORA INTERLAGOS DESTAQUE ====== */}
      <section className="bora-section section" id="bora">
        <div className="bora-hero-grid">
          <div className="bora-hero-img">
            <img src="https://borainterlagos.com.br/wp-content/uploads/2026/02/Fachada-Bora-Interlagos-Geral-2.webp" alt="Bora Interlagos Fachada" />
          </div>
          <div className="bora-hero-content">
            <img src="https://borainterlagos.com.br/wp-content/uploads/2026/03/bora_logo1-216x216a.png" alt="Bora Interlagos" className="bora-logo" />
            <div className="section-title">Bora sair do aluguel e viver com parcelas que <span className="accent">cabem no seu bolso!</span></div>
            <p>O Bora Interlagos une conforto, funcionalidade e estilo. Apartamentos modernos com 2 dormitórios, varanda e vaga de garagem, em um condomínio com lazer completo e a praticidade que você merece todos os dias.</p>
            <div className="bora-tags">
              <span className="bora-tag">🏠 2 Dorms com Suíte</span>
              <span className="bora-tag">🚗 Vaga de Garagem</span>
              <span className="bora-tag">🏊 Piscina no Rooftop</span>
              <span className="bora-tag">📍 Interlagos</span>
              <span className="bora-tag">🚇 10 min Estação Socorro</span>
              <span className="bora-tag">👁️ Vista Livre</span>
            </div>
            <a href={WPP_BORA} target="_blank" rel="noopener noreferrer" className="bora-btn">QUERO SABER MAIS →</a>
          </div>
        </div>

        {/* Gallery */}
        <div className="bora-gallery">
          {[
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Piscina.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Lounge-Festas.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Academia.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Gourmet-1.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Coworking.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Hall.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Playground.webp',
            'https://borainterlagos.com.br/wp-content/uploads/2026/02/Portaria-Bora-Interlagos.webp',
          ].map((img, i) => (
            <div key={i} className="bora-gallery-item">
              <img src={img} alt={`Bora Interlagos ${i+1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Specs */}
        <div className="bora-specs">
          <div className="bora-spec"><div className="num">216</div><div className="label">Unidades</div></div>
          <div className="bora-spec"><div className="num">33-45m²</div><div className="label">Metragens</div></div>
          <div className="bora-spec"><div className="num">1</div><div className="label">Torre</div></div>
          <div className="bora-spec"><div className="num">18</div><div className="label">Andares</div></div>
        </div>
      </section>

      {/* ====== ABOUT ====== */}
      <section className="section about-section" id="sobre">
        <div className="container">
          <div className="about-grid">
            <div className="about-img animate">
              <img src="https://res.cloudinary.com/dxjfyykul/image/upload/v1774568887/1752257071937_ev9uwo.jpg" alt="Glaucio Costa" />
            </div>
            <div className="about-content">
              <div className="section-label animate">Sobre</div>
              <div className="section-title animate animate-delay-1">Glaucio <span className="accent">Costa</span></div>
              <p className="section-desc animate animate-delay-2">
                <em>Especialista em áreas para Incorporação e imóveis industriais e comerciais na Grande SP.</em> Com <strong>19 anos de experiência</strong> no mercado imobiliário, atuo junto à incorporadora <strong>CASAINC</strong> e ofereço atendimento consultivo para compradores, corretores parceiros e incorporadoras.
              </p>
              <div className="info-row animate animate-delay-3">
                <div><strong>CRECI PF:</strong> 148047F — SP</div>
                <div><strong>CRECI PJ:</strong> 033282J — G.Costa Gestão Imobiliária Ltda</div>
                <div><strong>CNPJ:</strong> 29.301.219/0001-02</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== 3 PERFIS ====== */}
      <section className="section" id="clientes" style={{ background:'var(--bg-2)', borderTop:'1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-label animate">Como posso ajudar</div>
            <div className="section-title animate animate-delay-1">Atendimento para <span className="accent">cada perfil</span></div>
          </div>
          <div className="profiles-grid">
            <div className="profile-card animate"><div className="profile-icon">🏠</div><h3>Cliente Final</h3><p>Você quer comprar um imóvel industrial, comercial ou residencial. Te ajudo a encontrar a melhor opção com atendimento consultivo e personalizado.</p></div>
            <div className="profile-card animate animate-delay-1"><div className="profile-icon">🤝</div><h3>Corretor Parceiro</h3><p>Você é corretor e quer vender um imóvel em parceria. Trabalhamos juntos com transparência — comissão compartilhada e agilidade na negociação.</p></div>
            <div className="profile-card animate animate-delay-2"><div className="profile-icon">🏗️</div><h3>Terrenos para Incorporação</h3><p>Você tem um terreno e quer vender para incorporação, ou é corretor com áreas disponíveis. Trabalho junto à CASAINC para avaliar e viabilizar o negócio.</p></div>
          </div>
        </div>
      </section>

      {/* ====== PROJECTS ====== */}
      <section className="section projects-section" id="empreendimentos">
        <div className="container">
          <div className="section-label animate">Nossos empreendimentos</div>
          <div className="section-title animate animate-delay-1">Projetos <span className="accent">CASAINC</span></div>
          <div className="projects-grid">
            {[
              { title:'Bora Interlagos', loc:'Interlagos — SP', badge:'LANÇAMENTO', img:'https://borainterlagos.com.br/wp-content/uploads/2026/02/Fachada-Bora-Interlagos-Geral-1.webp' },
              { title:'Vibra Estação Oratório', loc:'Vila Oratório — SP', badge:'RESIDENCIAL', img:'https://casainc.com.br/wp-content/uploads/2023/05/Fachada-1024x617.png' },
              { title:'Mix Ipiranga', loc:'Ipiranga — SP', badge:'RESIDENCIAL', img:'https://casainc.com.br/wp-content/uploads/2022/12/fachada-mix-ipiranga-735x1024.jpg' },
              { title:'Venda seu Terreno', loc:'Áreas para incorporação — Grande SP', badge:'CAPTAÇÃO', img:'https://casainc.com.br/wp-content/uploads/2022/12/batch_M_I_COWORKING_R00-1024x576.jpg' },
            ].map((p,i) => (
              <div key={i} className={`project-card animate animate-delay-${i%4}`}>
                <img src={p.img} alt={p.title} />
                <div className="project-overlay"><h3>{p.title}</h3><p>{p.loc}</p></div>
                <div className="project-badge">{p.badge}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SHOWCASE ====== */}
      <section>
        <div className="showcase-row">
          <div className="showcase-img"><img src="https://casainc.com.br/wp-content/uploads/2022/12/persona6-2-683x1024.jpg" alt="Lifestyle" /></div>
          <div className="showcase-text">
            <div className="section-label">A incorporadora e construtora</div>
            <div className="section-title">Queremos fazer da sua casa um ambiente <span className="accent">criativo e único</span></div>
            <p>Utilizamos inteligência de mercado para desenvolver empreendimentos que atendam às expectativas de uma vida moderna e urbana em São Paulo.</p>
            <a href="https://casainc.com.br/sobre/" target="_blank" rel="noopener noreferrer" className="showcase-link">SAIBA MAIS →</a>
          </div>
        </div>
        <div className="showcase-row reverse">
          <div className="showcase-img"><img src="https://casainc.com.br/wp-content/uploads/2022/12/batch_M_I_ACADEMIA_R00-1-1024x576.jpg" alt="Academia" /></div>
          <div className="showcase-text">
            <div className="section-label">Empreendimentos residenciais</div>
            <div className="section-title">Temos o empreendimento que você busca, para o seu <span className="accent">estilo de vida</span></div>
            <p>Nossos projetos são pensados e desenvolvidos para atender demandas específicas de estilos de vida urbana.</p>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="showcase-link">ENTRE EM CONTATO →</a>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="stats-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom:'36px' }}>
            <div className="section-label">Experiência dos sócios da CASAINC</div>
          </div>
          <div className="stats-grid">
            <div className="stat-item animate"><div className="stat-value"><span>+</span>150</div><div className="stat-label">Empreendimentos</div></div>
            <div className="stat-item animate animate-delay-1"><div className="stat-value"><span>+</span>3.000</div><div className="stat-label">Unidades Residenciais</div></div>
            <div className="stat-item animate animate-delay-2"><div className="stat-value"><span>+</span>170<span> mil m²</span></div><div className="stat-label">De Construção</div></div>
          </div>
        </div>
      </section>

      {/* ====== TESTIMONIALS ====== */}
      <section className="section testi-section" id="depoimentos">
        <div className="container">
          <div className="text-center">
            <div className="section-label animate">O que diz quem já fez negócio</div>
            <div className="section-title animate animate-delay-1">Depoimentos</div>
          </div>
          <div className="testi-grid">
            {[
              { text:'Tive uma experiência muito boa com um empreendimento da CASAINC. Como investidor, é um produto muito rentável!', name:'Marcos Aluvei', role:'Cliente e Parceiro Comercial', img:'https://casainc.com.br/wp-content/uploads/2023/09/Marcos_Aluvei.jpg' },
              { text:'A experiência tem sido muito gratificante! Foram muito acolhedores e gentis. Desenvolvemos um relacionamento que virou amizade.', name:'Silvia Malvino', role:'Co-proprietária de área', img:'https://casainc.com.br/wp-content/uploads/2023/09/Silvia-Malvino.jpg' },
              { text:'A negociação foi bem tranquila. São pessoas muito competentes e profissionais. No final acabam sendo amigos da gente!', name:'Dr. Ricardo Piza', role:'Advogado', img:'https://casainc.com.br/wp-content/uploads/2023/09/Ricardo-Piza.jpg' },
              { text:'Fizemos uma reunião e foi amor à primeira. Tudo o que combinamos foi tratado e está a contento!', name:'José Pedro Ventri', role:'Co-proprietário de terreno', img:'https://casainc.com.br/wp-content/uploads/2023/09/JOSE-PEDRO-VENTRI.jpg' },
            ].map((t,i) => (
              <div key={i} className={`testi-card animate animate-delay-${i%4}`}>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testi-author">
                  <div className="testi-avatar"><img src={t.img} alt={t.name} /></div>
                  <div><div className="name">{t.name}</div><div className="role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="https://res.cloudinary.com/dxjfyykul/image/upload/v1774568724/GLAUCIO_4.jpg_1_dk7msc.jpg" alt="Glaucio Costa" />
              <p>Especialista em áreas para Incorporação e imóveis industriais e comerciais na Grande SP. G.Costa Gestão Imobiliária Ltda.</p>
            </div>
            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#home">Home</a><a href="#bora">Bora Interlagos</a><a href="#sobre">Sobre</a><a href="#empreendimentos">Empreendimentos</a><a href="#contato">Contato</a>
            </div>
            <div className="footer-col">
              <h4>Parceira</h4>
              <a href="https://casainc.com.br/" target="_blank" rel="noopener noreferrer">CASAINC</a>
              <a href="https://borainterlagos.com.br/" target="_blank" rel="noopener noreferrer">Bora Interlagos</a>
              <a href="https://casainc.com.br/imoveis/" target="_blank" rel="noopener noreferrer">Empreendimentos</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Glaucio Costa — G.Costa Gestão Imobiliária Ltda — CNPJ 29.301.219/0001-02</span>
            <div className="footer-crecis">CRECI PF 148047F — SP<br/>CRECI PJ 033282J — SP</div>
          </div>
        </div>
      </footer>
    </>
  );
}
