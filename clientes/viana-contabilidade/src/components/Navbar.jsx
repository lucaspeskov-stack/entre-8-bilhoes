import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo.jsx';
import WhatsAppGlyph from './WhatsAppGlyph.jsx';
import { navLinks, waLink } from '../data/content.js';

/**
 * Header fixo.
 *
 * Sobre o hero ele é transparente (o vídeo já é escuro o suficiente para o
 * contraste); depois de ~24px de scroll ganha fundo grafite e um filete de
 * borda, para não flutuar sobre o conteúdo claro.
 *
 * A seção visível é destacada no menu via IntersectionObserver — o mesmo
 * mecanismo do scroll reveal, sem custo de scroll listener.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [aberto, setAberto] = useState(false);
  const [ativo, setAtivo] = useState('');
  const botaoMenu = useRef(null);

  /* --- fundo do header conforme o scroll --- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* --- seção ativa --- */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    const alvos = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);
    if (!alvos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // A seção mais próxima do topo entre as visíveis vence — evita que
        // duas seções grandes disputem o destaque no meio da rolagem.
        const visivel = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visivel) setAtivo(`#${visivel.target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    alvos.forEach((alvo) => observer.observe(alvo));
    return () => observer.disconnect();
  }, []);

  /* --- menu mobile: trava o scroll do fundo e fecha no Esc --- */
  useEffect(() => {
    if (!aberto) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setAberto(false);
        botaoMenu.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [aberto]);

  const solido = scrolled || aberto;

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solido
          ? 'border-b border-areia-50/10 bg-grafite-950/95 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-grafite-950/70 to-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a
          href="#topo"
          className="flex items-center rounded-sm py-1.5"
          aria-label="Stephanie Viana Contabilidade — início"
        >
          <Logo variant="onDark" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ href, label }) => {
            const selecionado = ativo === href;
            return (
              <a
                key={href}
                href={href}
                aria-current={selecionado ? 'true' : undefined}
                className={`relative py-2 text-[13px] font-medium tracking-wide transition-colors duration-200
                  after:absolute after:-bottom-0.5 after:left-0 after:h-px after:bg-bronze-300
                  after:transition-all after:duration-300 ${
                    selecionado
                      ? 'text-areia-50 after:w-full'
                      : 'text-areia-300 after:w-0 hover:text-areia-50 hover:after:w-full'
                  }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light hidden !min-h-[44px] !px-5 !py-2.5 !text-[11px] sm:inline-flex"
          >
            <WhatsAppGlyph className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            ref={botaoMenu}
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-areia-50/25
                       text-areia-50 transition-colors duration-200 hover:bg-white/10 lg:hidden"
          >
            {aberto ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Painel mobile — some da árvore de acessibilidade quando fechado */}
      <div
        id="menu-mobile"
        hidden={!aberto}
        className="border-t border-areia-50/10 bg-grafite-950/95 backdrop-blur-md lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="container-x flex flex-col py-4">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setAberto(false)}
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-fade-down border-b border-areia-50/10 py-4 text-[15px] font-medium
                         text-areia-100 transition-colors duration-200 hover:text-bronze-300"
            >
              {label}
            </a>
          ))}

          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className="btn-light mt-6"
          >
            <WhatsAppGlyph />
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
