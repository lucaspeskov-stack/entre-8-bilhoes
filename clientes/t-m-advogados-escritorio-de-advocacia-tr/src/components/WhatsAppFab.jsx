import { useEffect, useState } from 'react';
import { business } from '../data/content.js';
import WhatsAppGlyph from './WhatsAppGlyph.jsx';

/**
 * Botão flutuante de WhatsApp. Aparece após o usuário sair do Hero, para não
 * competir com o CTA principal logo na abertura.
 */
export default function WhatsAppFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={business.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o escritório pelo WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full
                  bg-[#25D366] text-white shadow-soft-lg transition-all duration-300
                  hover:-translate-y-0.5 hover:bg-[#1FB855] focus:outline-none
                  focus-visible:ring-4 focus-visible:ring-[#25D366]/40
                  ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <WhatsAppGlyph size={26} />
    </a>
  );
}
