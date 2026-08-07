# Stephanie Viana · Contadora — site institucional

Landing page de página única para **Stephanie Viana (@stecontabilidade)**.
React + Vite + Tailwind CSS, sem dependência de runtime além do React e do
`lucide-react`.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o dist/ para conferência
```

---

## ⚠️ Antes de publicar

Três dados ainda são **placeholder**. Todos ficam num único lugar —
`src/data/content.js` — menos a URL canônica, que é do `index.html`.

| O quê | Onde | Valor atual |
| --- | --- | --- |
| Registro no CRC | `src/data/content.js` → `brand.crc` | `CRC-RJ 000.000/O-0` |
| Link do perfil no Google | `src/data/content.js` → `google.perfilUrl` | busca genérica pelo nome |
| Domínio | `index.html` → `<link rel="canonical">`, `og:image` e o bloco JSON-LD | `https://www.seudominio.com.br/` |

**CNPJ e e-mail foram deixados de fora de propósito.** Campo institucional em
branco, ou preenchido com número inventado, custa mais confiança do que a
ausência dele. Quando os dados existirem, entram em `brand` e aparecem no
rodapé (`src/sections/Footer.jsx`).

Vale também uma revisão da Stephanie nos textos que **não** vieram do material
dela: as descrições dos serviços, as respostas do FAQ e as legendas dos passos
foram escritas como rascunho, a partir do que ela já divulga. O que veio do
material original está literal: os cinco títulos de serviço, os quatro passos
do "Como funciona" e os três depoimentos.

---

## Estrutura

```
src/
├── data/content.js          ← TODO o conteúdo do site (textos, links, números)
├── hooks/
│   ├── useReveal.js              scroll reveal via IntersectionObserver
│   └── usePrefersReducedMotion.js
├── components/              Navbar, Logo, CrcSeal, StarRating, glifos, FAB…
└── sections/                Hero, SocialProof, Services, Process,
                             Testimonials, Faq, Contact, Footer
```

Nenhum componente escreve conteúdo direto no JSX: para trocar um texto, um
telefone ou a ordem dos serviços, mexa só em `src/data/content.js`.

---

## Hero: o vídeo

`public/hero.mp4` e `public/hero.webm` saíram do vídeo original (10s, 832×560,
30 MB) com três tratamentos:

1. **Loop costurado** — os últimos 0,8s recebem um crossfade com o início, de
   modo que o último quadro é igual ao primeiro. Sem "salto" visível no loop.
2. **Compressão** — 30 MB → 480 KB (mp4) / 425 KB (webm), sem perda visível.
3. **Pôster** (`hero-poster.jpg` / `.webp`) — primeiro paint e imagem servida a
   quem pede menos movimento.

O efeito Ken Burns é CSS (`animate-kenburns` em `tailwind.config.js`): escala
de 1 a 1.08 em 18s, `alternate` — o ciclo completo leva 36s e nunca corta.

**Para trocar o vídeo**, gere os arquivos com `ffmpeg` (`D` = duração do
original em segundos; ajuste `8.0` para `D - 1.6`):

```bash
FILTRO="[0:v]trim=0:9.6,setpts=PTS-STARTPTS,split[body][pre];\
[pre]trim=duration=0.8,format=yuva420p,fade=t=in:st=0:d=0.8:alpha=1,setpts=PTS-STARTPTS+(8.0/TB)[jt];\
[body]trim=start=0.8,setpts=PTS-STARTPTS[main];\
[main][jt]overlay=eof_action=pass,format=yuv420p[v]"

ffmpeg -i original.mp4 -filter_complex "$FILTRO" -map "[v]" -an \
  -c:v libx264 -crf 21 -preset veryslow -pix_fmt yuv420p -movflags +faststart -r 25 public/hero.mp4
ffmpeg -i original.mp4 -filter_complex "$FILTRO" -map "[v]" -an \
  -c:v libvpx-vp9 -crf 30 -b:v 0 -row-mt 1 -r 25 public/hero.webm
ffmpeg -i original.mp4 -ss 3.2 -frames:v 1 -q:v 3 public/hero-poster.jpg
ffmpeg -i original.mp4 -ss 3.2 -frames:v 1 -c:v libwebp -quality 82 public/hero-poster.webp
```

Se o enquadramento mudar, ajuste o `object-position` em
`src/sections/Hero.jsx` (`object-[38%_center] md:object-[50%_30%]`) — mobile
corta na horizontal, desktop corta na vertical.

---

## Google Reviews ao vivo

Hoje a nota e a avaliação em destaque são **estáticas**, vindas de
`content.google`. O formato é o mesmo que a API do Google Places devolve, então
a troca por dados ao vivo não exige mexer em nenhum componente.

O Google **não permite** chamar a API direto do navegador (a chave ficaria
exposta e o CORS bloqueia). O caminho é uma função serverless na Vercel:

1. Pegue o **Place ID** em https://developers.google.com/maps/documentation/places/web-service/place-id
   e crie uma chave de API com a *Places API* habilitada.
2. Guarde a chave como variável de ambiente na Vercel (`GOOGLE_PLACES_KEY`) —
   **nunca** no código.
3. Crie `api/reviews.js` na raiz do projeto:

   ```js
   export default async function handler(req, res) {
     const url = `https://places.googleapis.com/v1/places/${process.env.PLACE_ID}` +
       `?fields=rating,userRatingCount,reviews&key=${process.env.GOOGLE_PLACES_KEY}`;
     const r = await fetch(url);
     const d = await r.json();
     res.setHeader('Cache-Control', 's-maxage=86400'); // 1 leitura por dia basta
     res.json({
       nota: d.rating,
       total: d.userRatingCount,
       destaque: {
         texto: d.reviews?.[0]?.text?.text,
         autor: d.reviews?.[0]?.authorAttribution?.displayName,
         nota: d.reviews?.[0]?.rating,
       },
     });
   }
   ```
4. Em `src/sections/SocialProof.jsx` e `Testimonials.jsx`, troque o `import`
   de `google` por um `fetch('/api/reviews')` com o objeto estático como
   fallback — assim, se a API falhar, o site continua mostrando a nota.

Enquanto isso não existir, o botão "Ver avaliações" leva ao perfil dela.

---

## Decisões de implementação

**Fontes auto-hospedadas.** Playfair Display e Inter (variáveis, subsets
`latin` + `latin-ext`) ficam em `public/fonts/`, declaradas em `src/fonts.css`.
Serve para tirar uma requisição bloqueante a um terceiro do caminho crítico,
manter a tipografia em redes que bloqueiam o `fonts.googleapis.com` e não expor
o IP de quem visita a um serviço externo (LGPD). Só o subset `latin` é
pré-carregado — é o que o português usa; `latin-ext` fica sob demanda pelo
`unicode-range`. Para atualizar, rebaixe o CSS do Google Fonts e refaça o
mesmo recorte de subsets.

**Sem formulário de contato.** O canal que ela realmente atende é o WhatsApp.
Um formulário criaria uma via que ninguém acompanha. Cada CTA abre o WhatsApp
com uma mensagem já escrita, diferente por seção — ela sabe de onde veio o
contato.

**Movimento.** Todo o scroll reveal é `IntersectionObserver` puro, sem
biblioteca, e o observer se desconecta assim que o elemento aparece. Com
`prefers-reduced-motion: reduce` o `<video>` sequer é montado: entra o pôster e
nenhum byte de vídeo é baixado.

**Acessibilidade** — verificado no navegador, não só no papel:

- contraste AA em todo texto de corpo (o menor medido é 6,39:1);
- alvos de toque acima do mínimo da WCAG 2.5.8, CTAs com 48px;
- FAQ com `aria-expanded`/`aria-controls`, e painel fechado marcado `inert`
  (nem teclado nem leitor de tela alcançam texto invisível);
- menu mobile fecha no `Esc` e devolve o foco ao botão que o abriu;
- link "pular para o conteúdo" como primeiro tabulável.

**SEO.** JSON-LD de `Accountant` no `index.html` e de `FAQPage` gerado a partir
do mesmo array que alimenta a tela — não tem como dessincronizar. Endereço e
CNPJ ficam fora do JSON-LD enquanto forem placeholder: dado institucional
divergente é penalizado.

---

## Deploy

`vercel.json` já vem configurado (framework Vite + cache imutável de um ano
para vídeo, imagens e fontes). Na Vercel, aponte o *Root Directory* para
`clientes/cliente1-contabilidade`.
