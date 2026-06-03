'use client';

import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';

/**
 * Preloader / Splash Screen
 * -------------------------
 * Exibe uma tela de carregamento animada com Lottie antes de renderizar o site.
 * Utiliza o arquivo /logo_anim_site.json carregado via CDN oficial do Lottie Web.
 */
export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fade, setFade] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<any>(null);

  // Efeito para gerenciar a rolagem do body e tempos de transição
  useEffect(() => {
    // 1. Bloqueia a rolagem no body
    document.body.style.overflow = 'hidden';

    // 2. Tempo ideal para visualização da animação (2.7s)
    const fadeTimeout = setTimeout(() => {
      setFade(true); // inicia o fade out
    }, 2700);

    // 3. Remove o componente do DOM após o término da transição de 600ms (3.3s no total)
    const removeTimeout = setTimeout(() => {
      setMounted(false);
      document.body.style.overflow = ''; // libera a rolagem
    }, 3300);

    // Limpeza
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
      document.body.style.overflow = '';
      if (animRef.current) {
        animRef.current.destroy();
      }
    };
  }, []);

  // Inicializa o Lottie Player
  const initLottie = () => {
    if (typeof window !== 'undefined' && (window as any).lottie && containerRef.current && !animRef.current) {
      animRef.current = (window as any).lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/logo_anim_site.json',
      });
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Carregamento seguro da biblioteca oficial do Lottie Web via CDN */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js"
        strategy="afterInteractive"
        onReady={initLottie}
      />

      <div
        className={`fixed inset-0 w-screen h-screen bg-spa-green z-[9999] flex items-center justify-center transition-opacity duration-600 ease-out ${
          fade ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ pointerEvents: fade ? 'none' : 'auto' }}
      >
        {/* Player Lottie Centralizado e Responsivo */}
        <div
          ref={containerRef}
          className="w-[260px] sm:w-[320px] md:w-[400px] aspect-square flex items-center justify-center"
        />
      </div>
    </>
  );
}
