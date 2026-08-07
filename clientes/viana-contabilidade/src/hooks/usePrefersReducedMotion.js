import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function lerPreferencia() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false;
  return window.matchMedia(QUERY).matches;
}

/**
 * Lê a preferência de movimento do sistema e reage a mudanças em tempo real
 * (o usuário pode ligar "reduzir movimento" com a página já aberta).
 *
 * Usado pelo hero para decidir entre o vídeo e o pôster estático: com a
 * preferência ligada o `<video>` sequer é montado — além de respeitar a
 * acessibilidade, evita baixar ~470 KB desnecessários.
 *
 * A leitura acontece já no inicializador do estado, e não só no efeito: se o
 * primeiro render montasse o `<video>` para depois desmontá-lo, o navegador
 * já teria disparado o download — exatamente o que se quer evitar.
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(lerPreferencia);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return;

    const mql = window.matchMedia(QUERY);

    const onChange = (event) => setPrefersReduced(event.matches);

    // Safari < 14 só tem a API antiga (addListener/removeListener).
    if (typeof mql.addEventListener === 'function') {
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return prefersReduced;
}
