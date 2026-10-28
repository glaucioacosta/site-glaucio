'use client';

import { track } from './wpp';
import s from '@/app/panorama/panorama.module.css';

export default function PanoramaVideo() {
  return (
    <video
      className={s.video}
      controls
      playsInline
      preload="none"
      poster="/panorama/video-capa.jpg"
      onPlay={() => track('video_play')}
    >
      <source src="/panorama/panorama.mp4" type="video/mp4" />
      Seu navegador não reproduz vídeos. Fale com o Glaucio pelo WhatsApp para receber o filme do Panorama.
    </video>
  );
}
