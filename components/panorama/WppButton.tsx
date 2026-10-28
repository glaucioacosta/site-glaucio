'use client';

import { originLabel, track, wppUrl } from './wpp';

type Props = {
  /** Complemento da mensagem, ex.: "e gostaria de agendar uma visita à obra" */
  intent?: string;
  /** Onde o botão está na página, para os relatórios */
  placement: string;
  className?: string;
  children: React.ReactNode;
};

export default function WppButton({ intent = 'e quero saber mais', placement, className, children }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const msg = `Olá Glaucio, vim ${originLabel()} ${intent} sobre o Panorama Skyline Ibirapuera.`;
    e.currentTarget.href = wppUrl(msg);
    track('whatsapp_click', { placement });
  };

  return (
    <a
      href={wppUrl('Olá Glaucio, quero saber mais sobre o Panorama Skyline Ibirapuera.')}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
