import useReveal from '../hooks/useReveal.js';

/**
 * Envolve o conteúdo no efeito de scroll reveal (fade + slide-up sutil).
 * `delay` escalona itens de uma lista/grid (30–50ms por item é o ideal).
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
