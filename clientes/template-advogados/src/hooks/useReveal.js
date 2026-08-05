import { useEffect, useRef, useState } from 'react';

/**
 * Scroll reveal com IntersectionObserver — sem bibliotecas externas.
 * O elemento é revelado uma única vez, ao entrar na viewport, e o observer
 * é desconectado em seguida (nada roda durante o resto do scroll).
 *
 * Acessibilidade: com `prefers-reduced-motion: reduce` o conteúdo já nasce
 * visível e nenhum observer é criado. Há também fallback para ambientes sem
 * IntersectionObserver (SSR / navegadores antigos), evitando conteúdo invisível.
 */
export default function useReveal({ threshold = 0.14, rootMargin = '0px 0px -64px 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
