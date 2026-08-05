import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { business, footer, navLinks, services } from '../data/content.js';
import Logo from '../components/Logo.jsx';

/**
 * Rodapé. Repete os dados de contato (muita gente rola direto até o fim para
 * procurá-los) e fecha com os horários de funcionamento.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-noite-950 pt-16 text-marfim-200">
      <div className="container-x">
        <div className="grid gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[minmax(0,4fr)_minmax(0,3fr)_minmax(0,3fr)_minmax(0,3fr)]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-marfim-300/85">
              {footer.about}
            </p>

            <dl className="mt-6 space-y-1.5">
              {business.hours.map((h) => (
                <div key={h.day} className="flex flex-wrap items-baseline gap-x-2 text-[13px]">
                  <dt className="text-marfim-300/70">{h.day}:</dt>
                  <dd className="tnum font-semibold text-marfim-100">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest2 text-champanhe-300">
              Navegação
            </h2>
            <ul className="mt-5 space-y-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="flex min-h-[40px] items-center text-[15px] text-marfim-300/85
                               transition-colors duration-200 hover:text-marfim-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-widest2 text-champanhe-300">
              Serviços
            </h2>
            <ul className="mt-5 space-y-1">
              {services.map((s) => (
                <li key={s.title}>
                  <a
                    href="#servicos"
                    className="flex min-h-[40px] items-center text-[15px] text-marfim-300/85
                               transition-colors duration-200 hover:text-marfim-50"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-widest2 text-champanhe-300">
              Contato
            </h2>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={business.phoneHref}
                  className="tnum flex min-h-[40px] items-center gap-3 text-marfim-300/85
                             transition-colors duration-200 hover:text-marfim-50"
                >
                  <Phone size={16} className="shrink-0 text-champanhe-400" aria-hidden />
                  {business.phoneLabel}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex min-h-[40px] items-center gap-3 break-all text-marfim-300/85
                             transition-colors duration-200 hover:text-marfim-50"
                >
                  <Mail size={16} className="shrink-0 text-champanhe-400" aria-hidden />
                  {business.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 text-marfim-300/85">
                <MapPin size={16} className="mt-1 shrink-0 text-champanhe-400" aria-hidden />
                <address className="not-italic leading-relaxed">
                  {business.street}
                  <br />
                  {business.neighborhood} — {business.city}/{business.state}
                </address>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do salão"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border
                           border-marfim-50/15 transition-colors duration-200 hover:bg-white/10"
              >
                <Instagram size={17} aria-hidden />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do salão"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border
                           border-marfim-50/15 transition-colors duration-200 hover:bg-white/10"
              >
                <Facebook size={17} aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-marfim-50/10 py-7 sm:flex-row sm:items-center">
          <p className="tnum text-[13px] text-marfim-300/70">
            © {year} {business.name}. {footer.legal}
          </p>

          <a
            href="#top"
            className="inline-flex min-h-[44px] items-center gap-2 text-[13px] font-semibold text-marfim-300/85
                       transition-colors duration-200 hover:text-champanhe-300"
          >
            Voltar ao topo
            <ArrowUp size={15} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
