import Reveal from './Reveal.jsx';

/**
 * Cabeçalho editorial padrão das seções: eyebrow + h2 + filete de latão + lead.
 * `tone="light"` para uso sobre fundo escuro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'center',
  tone = 'dark',
  className = '',
}) {
  const onDark = tone === 'light';
  const centered = align === 'center';

  return (
    <Reveal
      className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && <span className={onDark ? 'eyebrow-onDark' : 'eyebrow'}>{eyebrow}</span>}

      <h2 className={`mt-4 h2 ${onDark ? 'text-bone-50' : ''}`}>{title}</h2>

      <span
        aria-hidden
        className={`rule mt-6 block ${centered ? 'mx-auto' : ''}`}
      />

      {lead && <p className={`mt-6 lead ${onDark ? 'text-bone-200' : ''}`}>{lead}</p>}
    </Reveal>
  );
}
