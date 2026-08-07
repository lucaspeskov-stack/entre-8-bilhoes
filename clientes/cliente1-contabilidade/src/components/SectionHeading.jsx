import Reveal from './Reveal.jsx';

/**
 * Cabeçalho editorial padrão das seções: eyebrow + filete bronze, título
 * serifado e lead opcional. Centralizar a estrutura aqui é o que mantém o
 * mesmo ritmo tipográfico da página inteira.
 */
export default function SectionHeading({
  eyebrow,
  titulo,
  /** Vai no `<h2>` para que a `<section>` possa apontar `aria-labelledby` para ele. */
  tituloId,
  lead,
  align = 'left',
  onDark = false,
  className = '',
}) {
  const centrado = align === 'center';

  return (
    <div className={`${centrado ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <p className={onDark ? 'eyebrow-onDark' : 'eyebrow'}>
            <span className="rule w-8" aria-hidden="true" />
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal delay={70}>
        <h2 id={tituloId} className={`mt-5 text-balance ${onDark ? 'h2-onDark' : 'h2'}`}>
          {titulo}
        </h2>
      </Reveal>

      {lead && (
        <Reveal delay={140}>
          <p className={`mt-5 text-pretty ${onDark ? 'text-base leading-relaxed text-areia-300 sm:text-lg' : 'lead'}`}>
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
