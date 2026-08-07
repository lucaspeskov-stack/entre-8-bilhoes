import useReveal from '../hooks/useReveal.js';

/**
 * Envolve o conteúdo no efeito de scroll reveal (fade + slide-up discreto).
 * `delay` escalona itens de listas e grids — 60–90ms por item mantém o
 * movimento perceptível sem atrasar a leitura.
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
  const [ref, inView] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal-in' : ''} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
