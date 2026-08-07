import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import { passos, waLink } from '../data/content.js';

/**
 * Como funciona — quatro passos numerados.
 *
 * O fio que liga os passos é um pseudo-elemento: vertical no mobile (à
 * esquerda dos números) e horizontal no desktop, sempre escondido no último
 * item. Zero markup extra e nada para o leitor de tela ignorar.
 *
 * Fundo escuro de propósito: quebra o ritmo entre duas seções claras e devolve
 * o olhar ao mesmo registro visual do topo da página.
 */
export default function Process() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="on-dark section bg-grafite-900"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Como funciona"
          titulo="Quatro passos, do primeiro contato à entrega"
          tituloId="como-funciona-titulo"
          lead="Sem formulário, sem sistema para aprender e sem ficar esperando retorno de um setor."
          onDark
        />

        <ol className="mt-14 grid gap-0 sm:mt-16 md:grid-cols-4 md:gap-6">
          {passos.map(({ numero, titulo, descricao }, i) => (
            <Reveal
              as="li"
              key={numero}
              delay={i * 90}
              className="relative flex gap-5 pb-10 last:pb-0
                         before:absolute before:left-6 before:top-14 before:bottom-2 before:w-px
                         before:bg-areia-50/15 last:before:hidden
                         md:block md:pb-0
                         md:before:hidden
                         md:after:absolute md:after:left-[3.5rem] md:after:right-[-1.5rem] md:after:top-6
                         md:after:h-px md:after:bg-areia-50/15 md:last:after:hidden"
            >
              <span
                className="tnum grid h-12 w-12 shrink-0 place-items-center rounded-full border border-bronze-400/45
                           bg-grafite-950 font-display text-[15px] font-medium text-bronze-300"
                aria-hidden="true"
              >
                {numero}
              </span>

              <div className="md:mt-6">
                {/* `min-h` alinha o início das descrições quando um título
                    ocupa uma linha e o vizinho ocupa duas */}
                <h3 className="text-pretty font-display text-[1.2rem] font-medium leading-snug tracking-tight text-areia-50 md:min-h-[3.5rem]">
                  {titulo}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-areia-300">{descricao}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={400}>
          <div className="mt-14 border-t border-areia-50/10 pt-10">
            <a
              href={waLink('Olá, Stephanie! Vim pelo site e quero começar. Pode me dizer o que preciso enviar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light"
            >
              <WhatsAppGlyph />
              Começar pelo passo 1
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
