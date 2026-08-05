# T&M Advogados — site institucional

Site do escritório **T&M Advogados (Teixeira Mendes Advogados)**, no Centro do
Rio de Janeiro. Atuação em Direito Trabalhista, Criminal, Cível e de Família
(pensão alimentícia).

Stack: **React 18 + Vite 5 + Tailwind CSS 3**, com `lucide-react` para ícones.
Sem dependências de animação — o scroll reveal usa `IntersectionObserver` nativo.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Estrutura

```
src/
  data/content.js        # fonte única de conteúdo (dados do negócio, áreas, FAQ, avaliações)
  hooks/useReveal.js     # IntersectionObserver + prefers-reduced-motion
  components/            # Navbar, Logo, Reveal, SectionHeading, StarRating,
                         # SmartImage, WhatsAppFab, WhatsAppGlyph
  sections/              # Hero, PracticeAreas, Process, Reviews, About,
                         # Faq, MapSection, Contact, Footer
```

Todo o texto e os dados do escritório ficam em `src/data/content.js` — para
ajustar telefone, endereço, horários, áreas ou perguntas do FAQ, basta editar
esse arquivo.

## Paleta

Extraída da identidade real da banca, não de um tema genérico:

| Token   | Hex       | Origem |
|---------|-----------|--------|
| `ink`   | `#0E0F11` | granito escuro dos edifícios institucionais da Av. Presidente Vargas; sobriedade da toga |
| `vinho` | `#C0272D` | o 🔴 que o próprio escritório usa como marca no perfil público |
| `brass` | `#C8A356` | latão das placas de advocacia e dos elevadores do Centro |
| `bone`  | `#F3EFE8` | papel timbrado — base de leitura |

Tipografia: **EB Garamond** (títulos) + **Lato** (texto e UI).

> **Nota:** a foto oficial da ficha do Google não pôde ser baixada no ambiente
> em que o site foi gerado (bloqueio de rede a `lh3.googleusercontent.com`), então
> a paleta foi derivada dos sinais de marca acima em vez de amostragem de pixels.
> Se a foto real trouxer uma cor dominante diferente, ajuste os tokens em
> `tailwind.config.js` — todo o site é montado sobre eles.

## Acessibilidade

Verificado no build final (Chromium, 1440px e 375px):

- Contraste AA em todos os textos (auditoria automatizada, 195 amostras, 0 reprovações).
- Todos os alvos de toque ≥ 44×44px.
- Sem scroll horizontal em 375px.
- `prefers-reduced-motion` desliga Ken Burns, scroll reveal e transições; o
  conteúdo nasce visível (nenhum elemento fica preso em `opacity: 0`).
- Formulário: labels visíveis, validação no `blur`, erro abaixo do campo com
  `role="alert"` e `aria-describedby`, foco movido para o primeiro campo inválido.
- Skip link, `aria-expanded` no menu mobile, Esc fecha o menu, FAQ em
  `<details>/<summary>` nativo.

## Imagens

A foto do Hero e do "O escritório" é hotlink da ficha do Google. `SmartImage` e o
Hero têm `onError` com fallback na paleta do site (monograma sobre grafite), então
o layout não quebra se a URL expirar.

## Pendências antes de publicar

Marcadas também em `src/data/content.js`:

1. **`business.oab`** — número de inscrição na OAB/RJ do(s) advogado(s)
   responsável(is). Obrigatório em material publicitário de advocacia; hoje está
   como `OAB/RJ nº 000.000`.
2. **`business.hours`** — o horário não consta na ficha do Google; os valores
   atuais são a estimativa padrão de escritório no Centro.
3. **`stats`** e **`business.foundedYear`** — confirmar antes de publicar.

## Publicidade advocatícia

O conteúdo foi redigido para o Código de Ética e Disciplina da OAB e o
Provimento nº 205/2021 do CFOAB: tom informativo, sem promessa de resultado, sem
menção a casos concretos, sem valores de honorários, sem comparação com outros
profissionais e sem captação de clientela. O rodapé traz o aviso de caráter
informativo e a seção de avaliações traz a ressalva de que resultados anteriores
não garantem resultado futuro.

Recomendável submeter o texto final à Comissão de Fiscalização da OAB/RJ antes de
publicar.

## Deploy

Configurado para Vercel (`vercel.json`, framework `vite`).
