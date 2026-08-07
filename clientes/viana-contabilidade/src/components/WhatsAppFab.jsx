import { useEffect, useState } from 'react';
import WhatsAppGlyph from './WhatsAppGlyph.jsx';
import { waLink } from '../data/content.js';

/**
 * Botão flutuante de WhatsApp.
 *
 * Só aparece depois que o hero sai de cena: enquanto o CTA principal está
 * visível, um segundo botão da mesma ação seria ruído. Usa o verde oficial do
 * WhatsApp — é o único ponto do site fora da paleta, e de propósito: o
 * reconhecimento instantâneo vale mais que a harmonia cromática aqui.
 *
 * O `bottom` soma `safe-area-inset-bottom` para não encostar na barra de
 * gestos do iPhone.
 */
export default function WhatsAppFab() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisivel(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Stephanie no WhatsApp"
      tabIndex={visivel ? 0 : -1}
      aria-hidden={visivel ? undefined : true}
      style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom, 0px))' }}
      className={`fixed right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366]
                  text-white shadow-soft-lg transition-all duration-300 hover:scale-105
                  hover:bg-[#1FBE5A] focus-visible:outline-2 focus-visible:outline-offset-4
                  focus-visible:outline-[#25D366] ${
                    visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                  }`}
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
