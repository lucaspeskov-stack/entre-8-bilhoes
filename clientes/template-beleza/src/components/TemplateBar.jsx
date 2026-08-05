import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { PencilRuler, X } from 'lucide-react';

/**
 * Faixa que avisa à visitante — o dono do salão avaliando o modelo — que todo
 * o conteúdo é personalizável.
 *
 * Fica no topo, e não flutuando sobre a página, justamente para nunca cobrir
 * texto, campo de formulário ou botão. A altura real é medida e informada ao
 * App, que desloca o header fixo na mesma medida (inclusive quando o texto
 * quebra em duas ou três linhas no celular ou quando a faixa é fechada).
 *
 * Ao entregar o site já personalizado, remova <TemplateBar /> do App.jsx.
 */
export default function TemplateBar({ onHeightChange }) {
  const [open, setOpen] = useState(true);
  const ref = useRef(null);

  /**
   * A altura vira também a variável CSS `--bar-h`, usada pelo espaçamento do
   * topo do hero e pelo `scroll-padding` das âncoras. No celular o texto quebra
   * em duas ou três linhas — sem a medida real, o conteúdo passaria por baixo
   * do header.
   */
  useLayoutEffect(() => {
    const publish = (h) => {
      onHeightChange?.(h);
      document.documentElement.style.setProperty('--bar-h', `${h}px`);
    };

    if (!open) {
      publish(0);
      return;
    }

    const report = () => publish(ref.current?.offsetHeight ?? 0);
    report();

    window.addEventListener('resize', report);
    return () => window.removeEventListener('resize', report);
  }, [open, onHeightChange]);

  // Refaz a medida quando as fontes terminam de carregar e mudam a altura.
  useEffect(() => {
    if (!open || !document.fonts?.ready) return;
    document.fonts.ready.then(() => {
      const h = ref.current?.offsetHeight ?? 0;
      onHeightChange?.(h);
      document.documentElement.style.setProperty('--bar-h', `${h}px`);
    });
  }, [open, onHeightChange]);

  if (!open) return null;

  return (
    <div ref={ref} className="fixed inset-x-0 top-0 z-50 border-b border-champanhe-400/25 bg-noite-950">
      <div className="container-x flex items-center justify-between gap-3 py-2">
        <p className="flex items-start gap-2.5 text-[12.5px] leading-snug text-marfim-200 sm:items-center">
          <PencilRuler size={15} className="mt-0.5 shrink-0 text-champanhe-300 sm:mt-0" aria-hidden />
          <span>
            <strong className="font-semibold text-marfim-50">Modelo demonstrativo.</strong> Textos,
            cores, fotos, serviços e preços são personalizáveis com os dados do seu salão.
          </span>
        </p>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Fechar aviso do modelo"
          className="-mr-2 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full
                     text-marfim-300 transition-colors duration-200 hover:bg-white/10 hover:text-marfim-50"
        >
          <X size={16} aria-hidden />
        </button>
      </div>
    </div>
  );
}
