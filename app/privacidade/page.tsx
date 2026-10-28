import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de privacidade | Glaucio Costa Imóveis',
  description: 'Como tratamos os dados pessoais de quem entra em contato pelo site glauciocosta.com.',
  alternates: { canonical: '/privacidade' },
};

export default function Privacidade() {
  return (
    <>
      <header className="legal-top"><a href="/">Glaucio Costa Imóveis</a></header>
      <main className="legal-page">
        <h1>Política de privacidade</h1>
        <p className="updated">Atualizada em outubro de 2026</p>

        <h2>Quem somos</h2>
        <p>
          Este site é mantido por G.Costa Gestão Imobiliária Ltda., CNPJ 29.301.219/0001-02, CRECI 033282J/SP,
          representada por Glaucio Costa, CRECI 148047F/SP. Somos o controlador dos dados pessoais tratados aqui,
          nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>

        <h2>Quais dados coletamos</h2>
        <ul>
          <li><strong>Dados que você nos envia:</strong> nome, telefone/WhatsApp, e-mail, perfil e mensagem, quando você preenche um formulário ou nos chama no WhatsApp.</li>
          <li><strong>Dados de navegação:</strong> páginas visitadas, cliques em botões, dispositivo e origem da visita (por exemplo, um anúncio), coletados por cookies do Google.</li>
        </ul>

        <h2>Para que usamos</h2>
        <ul>
          <li>Responder ao seu contato e enviar as informações que você pediu sobre imóveis.</li>
          <li>Agendar visitas e conduzir negociações que você iniciou.</li>
          <li>Medir o resultado dos nossos anúncios e mostrar anúncios relevantes a quem já visitou o site.</li>
        </ul>
        <p>
          As bases legais são a execução de procedimentos preliminares a um contrato, a seu pedido, e o nosso legítimo
          interesse em divulgar imóveis e medir campanhas. Não vendemos seus dados.
        </p>

        <h2>Com quem compartilhamos</h2>
        <ul>
          <li><strong>WhatsApp (Meta):</strong> os formulários do site abrem uma conversa no WhatsApp com sua mensagem; a conversa segue as regras do WhatsApp.</li>
          <li><strong>Google:</strong> usamos a tag do Google Ads para medir visitas, conversões e fazer remarketing.</li>
          <li><strong>Incorporadoras e proprietários:</strong> apenas quando necessário para a negociação de um imóvel do seu interesse.</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          Usamos cookies do Google para medição e publicidade. Você pode bloqueá-los ou apagá-los nas configurações do
          seu navegador e ajustar anúncios personalizados em{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">adssettings.google.com</a>.
        </p>

        <h2>Por quanto tempo guardamos</h2>
        <p>
          Mantemos seus dados de contato enquanto houver uma negociação ou interesse ativo, e depois pelo prazo exigido
          por obrigações legais e regulatórias da atividade de corretagem.
        </p>

        <h2>Seus direitos</h2>
        <p>
          Você pode pedir a confirmação do tratamento, acesso, correção, anonimização, portabilidade ou eliminação dos
          seus dados, além de informações sobre compartilhamento e a revogação de consentimento. Para isso, fale conosco
          pelo WhatsApp <a href="https://wa.me/5511990270978">(11) 99027-0978</a>.
        </p>
      </main>
    </>
  );
}
