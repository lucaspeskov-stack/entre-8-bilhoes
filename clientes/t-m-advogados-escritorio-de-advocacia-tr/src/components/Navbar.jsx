import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business, navLinks } from '../data/content.js';
import Logo from './Logo.jsx';

/**
 * Header fixo. Transparente sobre o Hero e sólido após o scroll — o estado
 * sólido é obrigatório para manter contraste AA do texto de navegação.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu mobile com Esc (rota de escape previsível).
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid
          ? 'border-b border-bone-300/80 bg-bone-100/95 shadow-soft backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink-900/55 to-transparent'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-x flex h-[72px] items-center justify-between md:h-20"
      >
        <a
          href="#top"
          aria-label={`${business.name} — voltar ao início`}
          className="flex min-h-[44px] shrink-0 items-center rounded-sm"
        >
          <Logo tone={solid ? 'dark' : 'light'} />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`whitespace-nowrap rounded-sm px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                solid
                  ? 'text-ink-500 hover:bg-bone-200 hover:text-ink-900'
                  : 'text-bone-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-3 whitespace-nowrap"
          >
            Falar com advogado
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-sm border transition-colors duration-200 lg:hidden ${
            solid
              ? 'border-ink-900/20 text-ink-800 hover:bg-bone-200'
              : 'border-bone-50/35 text-bone-50 hover:bg-white/10'
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="menu-mobile"
          className="animate-fade-down border-t border-bone-300 bg-bone-100/98 backdrop-blur-md lg:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-4 py-3 text-base font-bold text-ink-800 transition-colors hover:bg-bone-200"
              >
                {l.label}
              </a>
            ))}

            <a
              href={business.phoneHref}
              className="tnum mt-1 inline-flex items-center gap-2 rounded-sm px-4 py-3 text-sm font-bold text-ink-500 transition-colors hover:bg-bone-200"
            >
              <Phone size={16} /> {business.phoneDisplay}
            </a>

            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Falar com advogado
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
