import ClientEffects from '@/components/ClientEffects';

const WPP = 'https://wa.me/5511990270978?text=Ol%C3%A1%20Glaucio%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es';

export default function Home() {
  return (
    <>
      <ClientEffects />

      {/* 1. HERO */}
      <section className="hero" id="home">
        <div id="heroSlides">
          {[
            { label:'GLAUCIO COSTA', title:'Especialista em Aquisição de Terrenos na Grande SP', btn:'FALE COMIGO', href:WPP },
            { label:'19 ANOS DE EXPERIÊNCIA', title:'Encontramos o terreno ideal para o seu investimento', btn:'SAIBA MAIS', href:'#sobre' },
            { label:'TERRENOS E IMÓVEIS', title:'Áreas para incorporação, imóveis industriais e comerciais', btn:'VER SERVIÇOS', href:'#servicos' },
          ].map((s,i) => (
            <div key={i} className={`hero-slide ${i===0?'active':''}`} data-slide={i}>
              <div className="hero-slide-bg" style={{backgroundImage:`url(https://images.unsplash.com/photo-${i===0?'1486406146926-c627a92ad1ab?w=1600':''}${i===1?'1560518883-ce09059eeffa?w=1600':''}${i===2?'1504307651254-35680f356dfd?w=1600':''})`}} />
              <div className="hero-content"><div className="container">
                <div className="hero-label">{s.label}</div>
                <h1 className="hero-title">{s.title}</h1>
                <a href={s.href} className="hero-btn">{s.btn} →</a>
              </div></div>
            </div>
          ))}
        </div>
        <div className="hero-indicators" id="heroIndicators">
          {[0,1,2].map(i => <div key={i} className={`hero-dot ${i===0?'active':''}`} data-index={i} />)}
        </div>
      </section>

      {/* 2. SOBRE */}
      <section className="section about-section" id="sobre">
        <div className="container">
          <div className="about-content text-center">
            <div className="section-label animate">Sobre</div>
            <div className="section-title animate animate-delay-1">Glaucio <span className="accent">Costa</span></div>
            <p className="section-desc animate animate-delay-2" style={{margin:'0 auto 12px'}}>
              <em>Especialista em Aquisição de Terrenos e imóveis industriais e comerciais na Grande São Paulo.</em> Com <strong>19 anos de experiência</strong> no mercado imobiliário, ofereço atendimento consultivo para compradores, corretores parceiros, investidores e incorporadoras.
            </p>
            <p className="section-desc animate animate-delay-3" style={{margin:'0 auto'}}>
              Minha atuação abrange desde a prospecção e aquisição de terrenos para incorporação até a intermediação de imóveis industriais e comerciais, sempre com transparência, agilidade e foco em resultados.
            </p>
            <div className="info-row animate animate-delay-3" style={{justifyContent:'center'}}>
              <div className="info-item-mini"><strong>CRECI PF: </strong><span>148047F — SP</span></div>
              <div className="info-item-mini"><strong>CRECI PJ: </strong><span>033282J</span></div>
              <div className="info-item-mini"><strong>CNPJ: </strong><span>29.301.219/0001-02</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS */}
      <section className="section" id="servicos" style={{background:'var(--bg-2)',borderTop:'1px solid var(--border)'}}>
        <div className="container">
          <div className="text-center">
            <div className="section-label animate">O que faço</div>
            <div className="section-title animate animate-delay-1">Serviços <span className="accent">especializados</span></div>
          </div>
          <div className="profiles-grid">
            <div className="profile-card animate"><div className="profile-icon">🏗️</div><h3>Aquisição de Terrenos</h3><p>Prospecção, avaliação e negociação de terrenos para incorporação residencial, comercial e industrial na Grande São Paulo.</p></div>
            <div className="profile-card animate animate-delay-1"><div className="profile-icon">🏢</div><h3>Imóveis Industriais e Comerciais</h3><p>Intermediação de galpões, salas comerciais, terrenos industriais e imóveis corporativos com atendimento consultivo.</p></div>
            <div className="profile-card animate animate-delay-2"><div className="profile-icon">📊</div><h3>Consultoria Imobiliária</h3><p>Análise de viabilidade, estudo de mercado e assessoria completa para investidores e incorporadoras que buscam oportunidades.</p></div>
          </div>
        </div>
      </section>

      {/* 4. PERFIS DE CLIENTE */}
      <section className="section" id="clientes">
        <div className="container">
          <div className="text-center">
            <div className="section-label animate">Como posso ajudar</div>
            <div className="section-title animate animate-delay-1">Atendimento para <span className="accent">cada perfil</span></div>
          </div>
          <div className="profiles-grid">
            <div className="profile-card animate"><div className="profile-icon">🏠</div><h3>Cliente Final</h3><p>Você quer comprar um imóvel industrial, comercial ou um terreno. Te ajudo a encontrar a melhor opção com atendimento consultivo e personalizado.</p></div>
            <div className="profile-card animate animate-delay-1"><div className="profile-icon">🤝</div><h3>Corretor Parceiro</h3><p>Você é corretor e quer vender um imóvel em parceria. Trabalhamos juntos com transparência — comissão compartilhada e agilidade na negociação.</p></div>
            <div className="profile-card animate animate-delay-2"><div className="profile-icon">🏗️</div><h3>Incorporadoras</h3><p>Você busca terrenos para incorporação na Grande SP. Tenho experiência em prospecção, avaliação e negociação de áreas estratégicas.</p></div>
          </div>
        </div>
      </section>

      {/* 5. SHOWCASE */}
      <section>
        <div className="showcase-row">
          <div className="showcase-img"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" alt="Edifícios comerciais" /></div>
          <div className="showcase-text">
            <div className="section-label">Aquisição de terrenos</div>
            <div className="section-title">Encontramos a área <span className="accent">ideal</span> para o seu projeto</div>
            <p>Utilizamos inteligência de mercado e uma rede consolidada de contatos para identificar terrenos com potencial de valorização e viabilidade para incorporação.</p>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="showcase-link">ENTRE EM CONTATO →</a>
          </div>
        </div>
        <div className="showcase-row reverse">
          <div className="showcase-img"><img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" alt="Imóvel comercial" /></div>
          <div className="showcase-text">
            <div className="section-label">Imóveis industriais e comerciais</div>
            <div className="section-title">Galpões, salas e terrenos para o seu <span className="accent">negócio</span></div>
            <p>Atendimento especializado para empresários e investidores que buscam imóveis industriais, comerciais e corporativos na Grande São Paulo.</p>
            <a href={WPP} target="_blank" rel="noopener noreferrer" className="showcase-link">FALE COMIGO →</a>
          </div>
        </div>
      </section>

      {/* 6. STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="text-center" style={{marginBottom:'36px'}}><div className="section-label">Números que comprovam</div></div>
          <div className="stats-grid">
            <div className="stat-item animate"><div className="stat-value">19</div><div className="stat-label">Anos de Experiência</div></div>
            <div className="stat-item animate animate-delay-1"><div className="stat-value"><span>+</span>200</div><div className="stat-label">Negociações Realizadas</div></div>
            <div className="stat-item animate animate-delay-2"><div className="stat-value">Grande SP</div><div className="stat-label">Área de Atuação</div></div>
          </div>
        </div>
      </section>

      {/* 7. DEPOIMENTOS */}
      <section className="section testi-section" id="depoimentos">
        <div className="container">
          <div className="text-center">
            <div className="section-label animate">O que dizem sobre o meu trabalho</div>
            <div className="section-title animate animate-delay-1">Depoimentos</div>
          </div>
          <div className="testi-grid">
            {[
              { text:'Tive uma experiência muito boa. Como investidor, o atendimento foi impecável e o resultado superou as expectativas!', name:'Marcos Aluvei', role:'Investidor e Parceiro Comercial', img:'https://casainc.com.br/wp-content/uploads/2023/09/Marcos_Aluvei.jpg' },
              { text:'A experiência tem sido muito gratificante! Foram muito acolhedores e gentis. Desenvolvemos um relacionamento que virou amizade.', name:'Silvia Malvino', role:'Proprietária de Área', img:'https://casainc.com.br/wp-content/uploads/2023/09/Silvia-Malvino.jpg' },
              { text:'A negociação foi bem tranquila. São pessoas muito competentes e profissionais. No final acabam sendo amigos da gente!', name:'Dr. Ricardo Piza', role:'Advogado', img:'https://casainc.com.br/wp-content/uploads/2023/09/Ricardo-Piza.jpg' },
              { text:'Fizemos uma reunião e foi amor à primeira. Tudo o que combinamos foi tratado e está a contento!', name:'José Pedro Ventri', role:'Proprietário de Terreno', img:'https://casainc.com.br/wp-content/uploads/2023/09/JOSE-PEDRO-VENTRI.jpg' },
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

      {/* 8. FORMULÁRIO */}
      <section className="section contact-section" id="contato">
        <div className="container">
          <div className="text-center" style={{marginBottom:'12px'}}>
            <div className="section-label animate">Entre em contato</div>
            <div className="section-title animate animate-delay-1">Vamos conversar sobre o seu <span className="accent">próximo negócio?</span></div>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <p>Entre em contato para saber mais sobre terrenos disponíveis, imóveis industriais e comerciais, ou oportunidades de parceria.</p>
              <a href={WPP} className="btn-wpp" target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
              <div className="contact-item"><div className="ci-icon">📱</div><div><div className="ci-label">WhatsApp</div><div className="ci-value">(11) 99027-0978</div></div></div>
              <div className="contact-item"><div className="ci-icon">🏢</div><div><div className="ci-label">Empresa</div><div className="ci-value">G.Costa Gestão Imobiliária Ltda</div></div></div>
              <div className="contact-item"><div className="ci-icon">📋</div><div><div className="ci-label">CRECI</div><div className="ci-value">148047F / 033282J</div></div></div>
            </div>
            <form className="contact-form" action={WPP} target="_blank">
              <input type="text" name="name" placeholder="Nome completo" required />
              <input type="tel" name="phone" placeholder="WhatsApp (com DDD)" required />
              <input type="email" name="email" placeholder="E-mail" />
              <select name="profile" defaultValue="">
                <option value="" disabled>Eu sou...</option>
                <option value="comprador">Comprador — quero comprar um terreno ou imóvel</option>
                <option value="corretor-parceria">Corretor — quero vender em parceria</option>
                <option value="incorporadora">Incorporadora — busco terrenos</option>
                <option value="investidor">Investidor</option>
                <option value="outro">Outro assunto</option>
              </select>
              <textarea name="message" placeholder="Mensagem (opcional)" />
              <button type="submit" className="btn-submit">ENVIAR MENSAGEM</button>
            </form>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="https://res.cloudinary.com/dxjfyykul/image/upload/v1774568724/GLAUCIO_4.jpg_1_dk7msc.jpg" alt="Glaucio Costa" />
              <p>Especialista em Aquisição de Terrenos e imóveis industriais e comerciais na Grande SP. G.Costa Gestão Imobiliária Ltda.</p>
            </div>
            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#home">Home</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="#clientes">Perfis</a><a href="#depoimentos">Depoimentos</a><a href="#contato">Contato</a>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href={WPP} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href="tel:+5511990270978">(11) 99027-0978</a>
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
