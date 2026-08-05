/**
 * Mapa de ícones usados pelo conteúdo (`content.js`).
 *
 * Os ícones são importados um a um de propósito: um `import * as Icons` traria
 * a biblioteca inteira para o bundle. Para usar um ícone novo, importe-o aqui
 * e cite o nome no `content.js`. Catálogo: https://lucide.dev/icons
 */
import {
  Briefcase,
  Building2,
  Clock,
  FileSearch,
  Gavel,
  HeartHandshake,
  Lock,
  Scale,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

export const iconMap = {
  Briefcase,
  Building2,
  Clock,
  FileSearch,
  Gavel,
  HeartHandshake,
  Lock,
  Scale,
  ShieldCheck,
  UserRound,
};

/** Devolve o componente do ícone, com a balança como padrão seguro. */
export function getIcon(name) {
  return iconMap[name] ?? Scale;
}
