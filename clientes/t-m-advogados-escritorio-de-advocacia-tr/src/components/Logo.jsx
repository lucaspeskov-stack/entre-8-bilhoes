/**
 * Monograma do escritório. O ponto vermelho retoma o 🔴 que a própria banca usa
 * como marca no perfil público; o filete de latão vem das placas de advocacia.
 * `tone` alterna a versão sobre fundo claro e sobre fundo escuro/foto.
 */
export default function Logo({ tone = 'dark', className = '' }) {
  const onDark = tone === 'light';

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden
        className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-sm ${
          onDark ? 'bg-bone-50/10 ring-1 ring-bone-50/25' : 'bg-ink-900'
        }`}
      >
        <span className="font-display text-[15px] font-semibold leading-none tracking-wide text-bone-50">
          TM
        </span>
        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-vinho-500" />
      </span>

      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            onDark ? 'text-bone-50' : 'text-ink-900'
          }`}
        >
          T&amp;M <span className="font-normal">Advogados</span>
        </span>
        <span
          className={`mt-1 text-[10px] font-bold uppercase tracking-widest2 ${
            onDark ? 'text-brass-300' : 'text-brass-700'
          }`}
        >
          Teixeira Mendes
        </span>
      </span>
    </span>
  );
}
