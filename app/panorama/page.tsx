import type { Metadata } from 'next';
import Image from 'next/image';
import WppButton from '@/components/panorama/WppButton';
import LeadForm from '@/components/panorama/LeadForm';
import s from './panorama.module.css';

export const metadata: Metadata = {
  title: 'Panorama Skyline Ibirapuera | Apartamentos de 4 suítes em Moema',
  description:
    'Torre única com 28 apartamentos de 248 m², 4 suítes e 4 vagas em Moema, perto do Parque Ibirapuera. Visita à obra e condições de compra caso a caso.',
  alternates: { canonical: '/panorama' },
  openGraph: {
    title: 'Panorama Skyline Ibirapuera | Moema',
    description: 'Apartamentos de 248 m² e 4 suítes, perto do Ibirapuera. Entrega em maio de 2027.',
    images: ['/panorama/fachada.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
};

const precos = [
  { local: 'Vila Nova Conceição', valor: 50 },
  { local: 'Itaim Bibi', valor: 45 },
  { local: 'Eixo República do Líbano', valor: 45 },
  { local: 'Moema Pássaros', valor: 32 },
  { local: 'Panorama Skyline Ibirapuera', valor: 26.5, destaque: true },
];

const lazer = [
  'Quadra de tênis',
  'Piscina com raia, prainha e spa',
  'Piscina infantil e gazebo',
  'Fitness e sala de pilates',
  'Sauna úmida e solário',
  'Salão de festas',
  'Brinquedoteca e playground',
  'Espaço pet',
];

const fmt = (v: number) => `R$ ${v.toLocaleString('pt-BR', { minimumFractionDigits: v % 1 ? 1 : 0 })} mil/m²`;

export default function Panorama() {
  return (
    <div className={s.page}>
      {/* Fonte serifada usada nos títulos (mesma família do book do empreendimento) */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&display=swap"
      />

      <header className={s.top}>
        <a href="/" className={s.brand}>Glaucio Costa <small>Imóveis</small></a>
        <WppButton placement="header" className={s.btnGhost}>WhatsApp</WppButton>
      </header>

      {/* HERO */}
      <section className={s.hero}>
        <div className={s.heroText}>
          <div className={s.frame}>
            <h1 className={s.logo}>
              Panorama
              <span>Skyline Ibirapuera</span>
            </h1>
            <span className={s.frameLines} aria-hidden="true" />
          </div>
          <p className={s.heroLead}>
            Torre única com 28 apartamentos de 248 m², 4 suítes e 4 vagas, em Moema, perto do Parque Ibirapuera.
          </p>
          <div className={s.ctas}>
            <WppButton placement="hero" className={s.btnPrimary}>Conversar no WhatsApp</WppButton>
            <WppButton placement="hero_visita" intent="e gostaria de agendar uma visita à obra" className={s.btnLight}>
              Agendar visita à obra
            </WppButton>
          </div>
          <dl className={s.facts}>
            <div><dt>Por andar</dt><dd>2 apartamentos</dd></div>
            <div><dt>Acesso</dt><dd>Elevador privativo</dd></div>
            <div><dt>Garagem</dt><dd>4 vagas e depósito</dd></div>
            <div><dt>Entrega</dt><dd>Maio de 2027</dd></div>
          </dl>
        </div>
        <div className={s.heroImg}>
          <Image
            src="/panorama/fachada.jpg"
            alt="Perspectiva ilustrada da fachada do Panorama Skyline Ibirapuera"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 45vw"
          />
          <span className={s.caption}>Perspectiva ilustrada da fachada</span>
        </div>
      </section>

      {/* OBRA */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.intro}>
            <h2>A obra está acontecendo, e você pode visitar</h2>
            <p>
              Aqui você vê o prédio subindo, não só o desenho. A visita à obra é acompanhada pelo engenheiro
              responsável, e você pode conversar com o dono da construtora sobre a personalização da sua unidade.
            </p>
          </div>
          <div className={s.obraGrid}>
            {[1, 2, 3, 4].map((n) => (
              <figure key={n}>
                <Image
                  src={`/panorama/obra-${n}.jpg`}
                  alt={`Foto real por drone da obra do Panorama Skyline Ibirapuera, ângulo ${n}`}
                  width={1000}
                  height={1333}
                  sizes="(max-width: 700px) 50vw, 25vw"
                />
              </figure>
            ))}
          </div>
          <p className={s.note}>Fotos reais da obra, feitas por drone em maio de 2026.</p>
        </div>
      </section>

      {/* PREÇO */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.intro}>
            <h2>Alto padrão com valor de m² abaixo da região</h2>
            <p>
              O Panorama não tem stand de vendas, apartamento decorado nem campanha de lançamento. Essa economia
              na viabilidade do projeto vai para o preço, sem abrir mão de acabamento, arquitetura e lazer.
            </p>
            <p>
              Para quem investe: compra direta com a construtora, fluxo de pagamento definido caso a caso e
              desconto maior para aportes durante a obra.
            </p>
          </div>
          <div>
            <ul className={s.bars} aria-label="Preço médio por metro quadrado, em mil reais">
              {precos.map((p) => (
                <li key={p.local} className={p.destaque ? s.barHi : undefined}>
                  <span className={s.barLabel}>{p.local}</span>
                  <span className={s.barTrack}>
                    <span className={s.barFill} style={{ width: `${(p.valor / 50) * 100}%` }} />
                  </span>
                  <span className={s.barValue}>{p.destaque ? `A partir de ${fmt(p.valor)}` : fmt(p.valor)}</span>
                </li>
              ))}
            </ul>
            <p className={s.noteLight}>
              Valores médios de referência para imóveis de alto padrão nessas regiões. O valor do Panorama é o
              ponto de partida e varia conforme andar e unidade.
            </p>
          </div>
        </div>
      </section>

      {/* CONDIÇÕES */}
      <section className={s.section}>
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.intro}>
            <h2>Condições de compra</h2>
            <p>Negociação feita caso a caso, com acesso à obra e a quem está construindo.</p>
          </div>
          <ul className={s.points}>
            <li><strong>Fluxo de pagamento caso a caso.</strong> Condições melhores para quem faz aportes durante a obra.</li>
            <li><strong>Visita à obra.</strong> Com o engenheiro responsável e o dono da construtora.</li>
            <li><strong>Personalização da planta.</strong> Dentro do prazo definido pela construtora.</li>
          </ul>
        </div>
      </section>

      {/* APARTAMENTO */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.intro}>
            <h2>O apartamento</h2>
            <p>
              248 m² com 4 suítes, ou 3 suítes com sala ampliada. O elevador privativo chega direto na sala, e o
              terraço acompanha o living e a suíte master. A cozinha se integra ao terraço, que tem infraestrutura
              para churrasqueira a carvão. As floreiras são entregues com irrigação automatizada.
            </p>
          </div>
          <figure className={s.wide}>
            <Image src="/panorama/living.jpg" alt="Perspectiva ilustrada do living do apartamento decorado" width={1800} height={809} sizes="100vw" />
            <figcaption>Perspectiva ilustrada do living do apartamento decorado de 248 m²</figcaption>
          </figure>
          <div className={s.duo}>
            <figure>
              <Image src="/panorama/suite.jpg" alt="Perspectiva ilustrada da suíte master" width={1400} height={700} sizes="(max-width: 900px) 100vw, 50vw" />
              <figcaption>Perspectiva ilustrada da suíte master</figcaption>
            </figure>
            <div className={s.planCard}>
              <h3>Plantas e opções de layout</h3>
              <p>
                Há opções de 4 suítes, 3 suítes com sala ampliada e variações da suíte master. No 1º andar, duas
                unidades têm terraços maiores.
              </p>
              <WppButton placement="plantas" intent="e gostaria de receber as plantas" className={s.btnPrimary}>
                Pedir as plantas
              </WppButton>
            </div>
          </div>
        </div>
      </section>

      {/* LAZER */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={`${s.split} ${s.lazerHead}`}>
            <div className={s.intro}>
              <h2>Lazer no térreo</h2>
              <p>Paisagismo de Benedito Abbud, com tênis e um conjunto aquático cercado de vegetação.</p>
            </div>
            <ul className={s.amenities}>
              {lazer.map((l) => <li key={l}>{l}</li>)}
            </ul>
          </div>
          <div className={s.gallery}>
            {[
              { f: 'piscina', t: 'Piscina', w: 1600, h: 800 },
              { f: 'tenis', t: 'Quadra de tênis', w: 1400, h: 700 },
              { f: 'fitness', t: 'Fitness', w: 1400, h: 700 },
              { f: 'salao', t: 'Salão de festas', w: 1400, h: 500 },
            ].map((g) => (
              <figure key={g.f}>
                <Image src={`/panorama/${g.f}.jpg`} alt={`Perspectiva ilustrada: ${g.t}`} width={g.w} height={g.h} sizes="(max-width: 700px) 100vw, 50vw" />
                <figcaption>{g.t}, perspectiva ilustrada</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className={`${s.section} ${s.dark}`}>
        <div className={s.wrap}>
          <div className={s.intro}>
            <h2>Um dos últimos terrenos do eixo da República do Líbano</h2>
            <p>
              Av. Açocê, 808, esquina com a Alameda dos Tupiniquins, em Moema. Perto do Parque Ibirapuera, de
              restaurantes, escolas e das principais vias da zona sul. Nesse eixo, os terrenos disponíveis já
              foram comprados e a maioria está em obra.
            </p>
            <a
              className={s.textLink}
              href="https://www.google.com/maps/search/?api=1&query=Av.+A%C3%A7oc%C3%AA%2C+808+-+S%C3%A3o+Paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
            </a>
          </div>
          <figure className={s.wide}>
            <Image src="/panorama/vista-aerea.jpg" alt="Vista aérea real feita na altura dos apartamentos" width={2000} height={801} sizes="100vw" />
            <figcaption>Vista aérea real, feita na altura dos apartamentos</figcaption>
          </figure>
        </div>
      </section>

      {/* EQUIPE */}
      <section className={s.sectionTight}>
        <div className={s.wrap}>
          <dl className={s.team}>
            <div><dt>Construção e incorporação</dt><dd>Sinco Engenharia</dd></div>
            <div><dt>Arquitetura</dt><dd>LE Arquitetos</dd></div>
            <div><dt>Paisagismo</dt><dd>Benedito Abbud</dd></div>
            <div><dt>Interiores</dt><dd>Felipe Caboclo Arquitetura</dd></div>
          </dl>
        </div>
      </section>

      {/* CONTATO */}
      <section className={`${s.section} ${s.sand}`} id="contato">
        <div className={`${s.wrap} ${s.split}`}>
          <div className={s.intro}>
            <h2>Receba as plantas e agende sua visita</h2>
            <p>
              Deixe seu contato e o Glaucio Costa, corretor responsável, retorna pelo WhatsApp com as plantas e
              as datas para conhecer a obra.
            </p>
            <p className={s.contactLine}>
              Prefere ligar? <a href="tel:+5511990270978">(11) 99027-0978</a>
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      <footer className={s.legal}>
        <div className={s.wrap}>
          <p>
            Panorama Skyline Ibirapuera. Incorporação registrada sob o R.1 da matrícula nº 247.897 do 14º Oficial
            de Registro de Imóveis de São Paulo, em 21/10/2024. Incorporadora: Açocê Empreendimentos Imobiliários
            SPE Ltda., CNPJ 00.061.863/0001-79. Construção: Sinco Engenharia. Imóvel situado na Av. Açocê, 808,
            Indianópolis, São Paulo/SP. Incorporação submetida ao regime de patrimônio de afetação.
          </p>
          <p>
            Imagens e perspectivas ilustrativas. Móveis, equipamentos e utensílios são sugestões de decoração e
            não fazem parte do contrato. Unidades entregues conforme memorial descritivo e plantas anexas ao
            contrato. Valores de m² são referências de mercado e não constituem oferta. Informações sujeitas a
            alteração sem aviso prévio.
          </p>
          <p>
            Intermediação: Glaucio Costa, CRECI 148047F/SP. G.Costa Gestão Imobiliária Ltda., CRECI 033282J/SP,
            CNPJ 29.301.219/0001-02.
          </p>
        </div>
      </footer>

      <div className={s.mobileBar}>
        <WppButton placement="mobile_bar" className={s.btnPrimary}>Conversar no WhatsApp</WppButton>
      </div>
    </div>
  );
}
