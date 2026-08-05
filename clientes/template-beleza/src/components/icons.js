/**
 * Mapa de ícones usados pelo conteúdo (`content.js`).
 *
 * Os ícones são importados um a um de propósito: um `import * as Icons` traria
 * a biblioteca inteira para o bundle. Para usar um ícone novo, importe-o aqui
 * e cite o nome no `content.js`. Catálogo: https://lucide.dev/icons
 */
import {
  Brush,
  CalendarCheck,
  Eye,
  GraduationCap,
  Hand,
  Leaf,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export const iconMap = {
  Brush,
  CalendarCheck,
  Eye,
  GraduationCap,
  Hand,
  Leaf,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
};

/** Devolve o componente do ícone, com a tesoura como padrão seguro. */
export function getIcon(name) {
  return iconMap[name] ?? Scissors;
}
