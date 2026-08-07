import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion.js';
import { hero, waLink } from '../data/content.js';

/**
 * HERO — vídeo full-bleed com o texto ancorado à esquerda.
 *
 * Movimento (Ken Burns): o vídeo já tem movimento próprio, então a escala vai
 * de 1 a 1.08 em 18s com `alternate` — o ciclo completo leva 36s e nunca
 * "salta" de volta ao início. A deriva de ~1% mantém a sensação de
 * profundidade sem tirar a contadora do enquadramento.
 *
 * Enquadramento: o vídeo é 832×560 (1,49:1). Em telas largas o corte é
 * vertical, então `object-position` puxa para 30% da altura, preservando o
 * rosto e os certificados CRC da parede. Em mobile o corte é horizontal e a
 * posição vai para 38% para ela não escapar pela borda.
 *
 * Legibilidade: dois gradientes distintos — horizontal no desktop (texto à
 * esquerda sobre grafite quase opaco, 17:1) e vertical no mobile, onde o texto
 * desce para a base.
 *
 * Acessibilidade: com `prefers-reduced-motion` o `<video>` não é montado —
 * entra o pôster estático e nenhum byte de vídeo é baixado.
 */
export default function Hero() {
  const semMovimento = usePrefersReducedMotion();
  const videoRef = useRef(null);

  /* O React nem sempre reflete `muted` como atributo, e o iOS só faz autoplay
     de vídeo mudo — por isso a garantia via ref. */
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true;
  }, [semMovimento]);

  return (
    <section
      id="topo"
      className="on-dark relative isolate flex min-h-[100svh] items-center overflow-hidden bg-grafite-950"
    >
      {/* ---------- camada de mídia ---------- */}
      <div className="absolute inset-0 -z-10">
        {semMovimento ? (
          <picture>
            <source srcSet="/hero-poster.webp" type="image/webp" />
            <img
              src="/hero-poster.jpg"
              alt="Stephanie Viana, contadora, em seu escritório revisando documentos contábeis."
              className="h-full w-full object-cover object-[38%_center] md:object-[50%_30%]"
              width="832"
              height="560"
              fetchPriority="high"
            />
          </picture>
        ) : (
          <video
            ref={videoRef}
            className="animate-kenburns h-full w-full object-cover object-[38%_center] will-change-transform md:object-[50%_30%]"
            poster="/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* ---------- gradientes de legibilidade ---------- */}
      <div className="absolute inset-0 -z-10 bg-grafite-950/15" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-grafite-950 from-5% via-grafite-950/80 via-45% to-transparent md:block"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-grafite-950 via-grafite-950/85 via-45% to-grafite-950/40 md:hidden"
        aria-hidden="true"
      />
      {/* Emenda com a faixa de prova social, que também é grafite */}
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-grafite-950 to-transparent"
        aria-hidden="true"
      />

      {/* ---------- conteúdo ---------- */}
      <div className="container-x relative w-full pb-28 pt-32 sm:pb-32 sm:pt-36">
        <div className="max-w-[34rem] lg:max-w-[38rem]">
          <Reveal>
            <p className="eyebrow-onDark">
              <span className="rule w-8" aria-hidden="true" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-balance font-display text-[2.6rem] font-medium leading-[1.06] tracking-tight text-areia-50 sm:text-5xl lg:text-[3.7rem]">
              {hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-areia-300 sm:text-lg">
              {hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                <WhatsAppGlyph />
                {hero.ctaPrimario}
              </a>

              <a href="#contato" className="btn-onDark">
                {hero.ctaSecundario}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------- indicador de rolagem ---------- */}
      <a
        href="#prova"
        aria-label="Ir para as avaliações"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2
                   text-areia-300 transition-colors duration-200 hover:text-areia-50 md:flex"
      >
        <span className="h-10 w-px bg-gradient-to-b from-transparent to-bronze-300/70" aria-hidden="true" />
        <ChevronDown size={16} className="animate-nudge" aria-hidden="true" />
      </a>
    </section>
  );
}
