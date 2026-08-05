import { Instagram, Phone, MapPin, ArrowUp } from 'lucide-react';
import { business, practiceAreas, navLinks } from '../data/content.js';
import Logo from '../components/Logo.jsx';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone-50/10 bg-ink-800 pt-16">
      <div className="container-x">
        <div className="grid gap-12 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo tone="light" />

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-bone-200/75">
              Escritório de advocacia no Centro do Rio de Janeiro, com atuação em Direito
              Trabalhista, Criminal, Cível e de Família.
            </p>

            <p className="tnum mt-5 text-[13px] font-bold uppercase tracking-wide text-brass-300">
              {business.oab}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do T&M Advogados"
                className="flex h-11 w-11 items-center justify-center border border-bone-50/20 text-bone-200
                           transition-colors duration-200 hover:border-brass-400 hover:text-brass-300"
              >
                <Instagram size={19} aria-hidden />
              </a>
              <a
                href={business.phoneHref}
                aria-label={`Ligar para ${business.phoneDisplay}`}
                className="flex h-11 w-11 items-center justify-center border border-bone-50/20 text-bone-200
                           transition-colors duration-200 hover:border-brass-400 hover:text-brass-300"
              >
                <Phone size={19} aria-hidden />
              </a>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver o escritório no Google Maps"
                className="flex h-11 w-11 items-center justify-center border border-bone-50/20 text-bone-200
                           transition-colors duration-200 hover:border-brass-400 hover:text-brass-300"
              >
                <MapPin size={19} aria-hidden />
              </a>
            </div>
          </div>

          {/* Áreas */}
          <nav aria-label="Áreas de atuação">
            <h2 className="text-[11px] font-bold uppercase tracking-widest2 text-brass-300">
              Áreas de atuação
            </h2>
            <ul className="mt-5 space-y-1">
              {practiceAreas.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-bone-200/80
                               transition-colors duration-200 hover:text-brass-300"
                  >
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[11px] font-bold uppercase tracking-widest2 text-brass-300">
              Navegue
            </h2>
            <ul className="mt-5 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center text-[15px] text-bone-200/80
                               transition-colors duration-200 hover:text-brass-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#duvidas"
                  className="inline-flex min-h-[44px] items-center text-[15px] text-bone-200/80
                             transition-colors duration-200 hover:text-brass-300"
                >
                  Dúvidas frequentes
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Aviso de conformidade — publicidade advocatícia */}
        <div className="border-t border-bone-50/10 py-8">
          <p className="max-w-4xl text-[12px] leading-relaxed text-bone-200/55">
            Este site tem caráter meramente informativo, em conformidade com o Código de Ética e
            Disciplina da OAB e com o Provimento nº 205/2021 do Conselho Federal da OAB. Não
            constitui oferta, captação de clientela, promessa de resultado ou consulta jurídica. A
            orientação sobre qualquer caso depende de análise individual dos fatos e documentos.
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-bone-50/10 py-7 sm:flex-row sm:items-center">
          <p className="text-[13px] text-bone-200/60">
            © {year} {business.fullName}. Todos os direitos reservados.
          </p>

          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center gap-2 text-[13px] font-bold text-bone-200/70
                       transition-colors duration-200 hover:text-brass-300"
          >
            Voltar ao topo <ArrowUp size={15} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
