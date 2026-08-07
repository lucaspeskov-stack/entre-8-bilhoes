import { Instagram } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';
import CrcSeal from '../components/CrcSeal.jsx';
import { brand, contato, waLink } from '../data/content.js';

/**
 * Glifo da marca no lugar de um ícone genérico de mensagem: o canal é
 * reconhecido antes mesmo de o rótulo ser lido. Fora do componente para não
 * virar um tipo novo a cada render.
 */
const WhatsAppIcone = () => <WhatsAppGlyph className="h-5 w-5" />;

/**
 * Contato — fechamento da página.
 *
 * Sem formulário de propósito: o caminho que ela realmente atende é o
 * WhatsApp, e um formulário a mais só criaria uma via que ninguém acompanha.
 * Os canais aparecem como links diretos, com o número visível (quem prefere
 * ligar ou salvar o contato não fica refém do botão).
 */
export default function Contact() {
  const canais = [
    {
      icone: WhatsAppIcone,
      rotulo: 'WhatsApp',
      valor: brand.whatsappDisplay,
      href: waLink(),
      externo: true,
      descricao: 'Resposta pessoal, sem robô e sem fila de atendimento',
    },
    {
      icone: Instagram,
      rotulo: 'Instagram',
      valor: brand.instagram,
      href: brand.instagramUrl,
      externo: true,
      descricao: 'Conteúdo sobre contabilidade e bastidores do atendimento',
    },
  ];

  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="on-dark section border-t border-areia-50/10 bg-grafite-950"
    >
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* ---------- chamada ---------- */}
          <div>
            <SectionHeading
              eyebrow="Contato"
              titulo={contato.titulo}
              tituloId="contato-titulo"
              lead={contato.texto}
              onDark
            />

            <Reveal delay={220}>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light mt-10"
              >
                <WhatsAppGlyph />
                Agende uma conversa
              </a>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-6 text-[13px] text-areia-300">
                Atendimento 100% online — de onde você estiver.
              </p>
            </Reveal>
          </div>

          {/* ---------- canais ---------- */}
          <div className="flex flex-col gap-4">
            {canais.map(({ icone: Icone, rotulo, valor, href, externo, descricao }, i) => (
              <Reveal key={rotulo} delay={i * 90}>
                <a
                  href={href}
                  {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group flex items-center gap-5 rounded-lg border border-areia-50/10 bg-white/[0.03]
                             p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze-400/60
                             hover:bg-white/[0.06]"
                >
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-areia-50/20
                               text-bronze-300 transition-colors duration-300 group-hover:border-bronze-400/70"
                    aria-hidden="true"
                  >
                    <Icone size={20} strokeWidth={1.6} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-semibold uppercase tracking-widest2 text-bronze-300">
                      {rotulo}
                    </span>
                    <span className="tnum mt-1.5 block font-display text-[1.25rem] font-medium tracking-tight text-areia-50">
                      {valor}
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-areia-300">
                      {descricao}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={200}>
              <CrcSeal variant="onDark" className="mt-2 self-start" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
