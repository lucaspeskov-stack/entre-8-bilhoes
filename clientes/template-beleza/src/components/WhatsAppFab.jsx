import { useEffect, useState } from 'react';
import { business } from '../data/content.js';
import WhatsAppGlyph from './WhatsAppGlyph.jsx';

/**
 * Botão flutuante de WhatsApp. Só aparece depois que a visitante rola a
 * primeira dobra — no hero o CTA já está visível, e sobrepor os dois cria
 * ruído. Área de toque de 56px, acima do mínimo de 44px.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full
                  bg-[#25D366] text-white shadow-soft-lg transition-all duration-300
                  hover:scale-105 hover:bg-[#1FBE5A] active:scale-95
                  ${visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <WhatsAppGlyph size={28} />
    </a>
  );
}
