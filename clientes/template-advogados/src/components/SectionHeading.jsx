import Reveal from './Reveal.jsx';

/**
 * Cabeçalho padrão das seções: eyebrow + título + filete de latão + apoio.
 * Centraliza a hierarquia tipográfica para que todas as seções tenham o mesmo
 * ritmo — um dos fatores que mais separa um site "pronto" de um improvisado.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  onDark = false,
  id,
}) {
  const centered = align === 'center';

  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <span className={onDark ? 'eyebrow-onDark' : 'eyebrow'}>{eyebrow}</span>}

      <h2 id={id} className={`mt-5 ${onDark ? 'h2-onDark' : 'h2'}`}>
        {title}
      </h2>

      <span aria-hidden className={`rule mt-6 ${centered ? 'mx-auto' : ''}`} />

      {description && (
        <p className={`mt-6 ${onDark ? 'text-base leading-relaxed text-bone-200 sm:text-lg' : 'lead'}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
