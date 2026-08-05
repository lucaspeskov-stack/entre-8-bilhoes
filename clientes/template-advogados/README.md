# Template — Site para Advogados e Escritórios de Advocacia

Modelo completo de site institucional para advocacia, pronto para receber os
dados de qualquer escritório. Todo o conteúdo está em espaços reservados
("Nome do Seu Escritório", "[SEU NOME AQUI]", "(00) 0000-0000") para que o
cliente veja de imediato o que pode ser trocado.

**Stack:** React 18 + Vite 5 + Tailwind CSS 3 · ícones Lucide · sem outras
dependências de runtime.

---

## Como personalizar

### 1. Textos, telefones, endereço e áreas de atuação

Edite **um único arquivo**: [`src/data/content.js`](src/data/content.js).

Ele concentra tudo — nome do escritório, OAB, WhatsApp, e-mail, endereço,
horários, áreas de atuação, casos do portfólio, avaliações, textos do "Sobre"
e do rodapé. Nenhuma outra alteração de código é necessária.

```js
export const business = {
  name: 'Nome do Seu Escritório',   // ← troque aqui
  oab: 'OAB/UF 000.000',
  whatsapp: 'https://wa.me/5500000000000?text=...',  // DDI + DDD + número
  ...
};
```

### 2. Fotos

| Onde | Como trocar |
|------|-------------|
| **Hero** (imagem de fundo) | Substitua `public/hero-escritorio.webp`, `public/hero-escritorio-1100.webp` (versão para celular) e `public/hero-escritorio.jpg` (fallback). Mantenha os nomes. |
| **Sobre** (retrato do advogado) | Coloque a foto em `public/` e passe o caminho no `PhotoSlot`: `<PhotoSlot src="/advogado.jpg" alt="Dr. Fulano" />` em `src/sections/About.jsx`. |
| **Favicon** | `public/favicon.svg` |

Enquanto não houver foto, o `PhotoSlot` mostra um bloco na paleta do site com
o monograma e a proporção recomendada — nunca uma imagem quebrada.

### 3. Cores e fontes

- **Cores:** `tailwind.config.js` → paletas `ink`, `marinho`, `gold`, `bone`.
- **Fontes:** `index.html` (link do Google Fonts) + `tailwind.config.js`
  (`fontFamily`). O padrão é **EB Garamond** (títulos) + **Lato** (texto).

### 4. Ícones das áreas de atuação

Em `content.js`, cada serviço tem um campo `icon` com o nome de um ícone da
[Lucide](https://lucide.dev/icons). Para usar um ícone que ainda não está no
projeto, importe-o em `src/components/icons.js` e cite o nome no `content.js`.

### 5. Ao entregar o site pronto

Remova a linha `<TemplateBar onHeightChange={setBarHeight} />` de
`src/App.jsx` — é a faixa que avisa que o site é um modelo.

---

## Rodar localmente

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # gera a pasta dist/
npm run preview  # serve a build de produção
```

---

## Seções

Hero · Serviços · Sobre · Portfólio (casos & resultados) · Avaliações ·
Localização (mapa) · Contato · Rodapé.

## Decisões técnicas

**Hero com efeito Ken Burns** — a foto faz um zoom lento de 1 → 1.08 em 18s,
alternando o sentido, então o loop não corta. Dois scrims (vertical e lateral)
garantem contraste AA do texto claro sobre qualquer região da imagem.

**Scroll reveal com IntersectionObserver** — fade + slide-up de 22px,
`cubic-bezier(0.22, 1, 0.36, 1)`, escalonado em 70ms por item em grades. Sem
bibliotecas de animação. Cada elemento é revelado uma vez e o observer se
desconecta em seguida.

**`prefers-reduced-motion`** — com a preferência ativa, nenhum observer é
criado (o conteúdo nasce visível), o Ken Burns é desligado e todas as
transições são zeradas. Verificado com o navegador em modo de movimento
reduzido.

**Imagem do hero** — 1,4 MB em PNG viraram 57 KB em WebP, com variante de
1100px para celular e fallback JPEG. É o LCP da página: vai pré-carregada no
`index.html` com `fetchpriority="high"` e dimensões declaradas (sem layout
shift).

**Mapa sob demanda** — o iframe do Google só carrega quando o visitante
clica em "Carregar mapa". O espaço é reservado antes, então não há salto de
layout. Evita centenas de KB e requisições de rastreamento em toda visita.

**Formulário sem backend** — a mensagem é montada e aberta no WhatsApp, onde
o visitante revisa antes de enviar. Para plugar um backend (Formspree, n8n,
API própria), troque apenas o corpo de `handleSubmit` em
`src/sections/Contact.jsx`.

**Acessibilidade** — rótulos visíveis em todos os campos, erro abaixo do
campo com `role="alert"`, foco automático no primeiro campo inválido,
`aria-invalid`/`aria-describedby`, alvos de toque de no mínimo 44px, atalho
"Ir para o conteúdo", hierarquia de títulos sequencial e contraste AA
verificado (texto principal ≥ 4,5:1).

**Responsivo** — verificado em 375, 390, 768, 1024, 1280, 1440 e 1600px: sem
scroll horizontal e sem conteúdo sob o header fixo em nenhuma largura.

## Publicidade na advocacia

O modelo já segue o Código de Ética e Disciplina da OAB e o Provimento
205/2021: os casos do portfólio são anônimos e descrevem o que foi feito (não
prometem resultado), há ressalva de que resultados anteriores não garantem
resultados futuros, e o rodapé traz a nota de que o site tem caráter
meramente informativo. Ao trocar os textos, mantenha esse cuidado.
