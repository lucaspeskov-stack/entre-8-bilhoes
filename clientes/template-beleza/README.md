# Template — Site para Salões de Beleza

Modelo completo de site para salão de beleza, pronto para receber os dados de
qualquer salão. Todo o conteúdo está em espaços reservados ("Nome do Seu
Salão", "[SEU NOME AQUI]", "R$ 00") para que o cliente veja de imediato o que
pode ser trocado.

**Stack:** React 18 + Vite 5 + Tailwind CSS 3 · ícones Lucide · sem outras
dependências de runtime.

---

## Como personalizar

### 1. Textos, telefones, endereço, serviços e preços

Edite **um único arquivo**: [`src/data/content.js`](src/data/content.js).

Ele concentra tudo — nome do salão, WhatsApp, e-mail, endereço, horários,
serviços com preço e duração, avaliações, textos do "Sobre", galeria e rodapé.
Nenhuma outra alteração de código é necessária.

```js
export const business = {
  name: 'Nome do Seu Salão',   // ← troque aqui
  whatsapp: 'https://wa.me/5500000000000?text=...',  // DDI + DDD + número
  hours: [{ day: 'Terça a sexta', time: '09h00 — 20h00' }, ...],
  ...
};
```

Os preços ficam dentro de cada serviço:

```js
{
  title: 'Corte & Finalização',
  items: [{ name: 'Corte feminino', price: 'R$ 00', time: '00 min' }, ...],
}
```

### 2. Fotos

| Onde | Como trocar |
|------|-------------|
| **Hero** (fundo) | Substitua `public/hero-salao.webp`, `public/hero-salao-1100.webp` (celular) e `public/hero-salao.jpg` (fallback). Mantenha os nomes. |
| **Sobre + galeria** | Coloque as fotos em `public/fotos/` e ajuste os caminhos em `about.photo` e `about.gallery` no `content.js`. |
| **Favicon** | `public/favicon.svg` |

As fotos que acompanham o template são recortes da fotografia de referência do
salão, em WebP. Se um arquivo faltar ou falhar, o componente `Photo` mostra um
bloco na paleta do site com o monograma e a proporção recomendada — nunca uma
imagem quebrada.

**Proporção recomendada:** retrato 4:5, mínimo 1200×1500px.

### 3. Cores e fontes

- **Cores:** `tailwind.config.js` → paletas `noite`, `champanhe`, `rose`, `marfim`.
- **Fontes:** `index.html` (link do Google Fonts) + `tailwind.config.js`
  (`fontFamily`). O padrão é **Playfair Display** (títulos) + **Inter** (texto).

### 4. Ícones dos serviços

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

Hero · Serviços & valores · Sobre (com galeria do ambiente) · Avaliações ·
Localização (mapa) · Contato/agendamento · Rodapé.

## Decisões técnicas

**Hero com efeito Ken Burns** — a foto faz um zoom lento de 1 → 1.08 em 19s,
alternando o sentido, então o loop não corta. Dois scrims (vertical e lateral)
garantem contraste AA do texto claro sobre qualquer região da imagem.

**Scroll reveal com IntersectionObserver** — fade + slide-up de 22px,
`cubic-bezier(0.22, 1, 0.36, 1)`, escalonado em 70–80ms por item em grades. Sem
bibliotecas de animação. Cada elemento é revelado uma vez e o observer se
desconecta em seguida.

**`prefers-reduced-motion`** — com a preferência ativa, nenhum observer é
criado (o conteúdo nasce visível), o Ken Burns é desligado e todas as
transições são zeradas. Verificado com o navegador em modo de movimento
reduzido.

**Imagens** — o hero saiu de 1,4 MB em PNG para 55 KB em WebP, com variante de
1100px para celular e fallback JPEG. É o LCP da página: vai pré-carregado no
`index.html` com `fetchpriority="high"` e dimensões declaradas (sem layout
shift). As cinco fotos do ambiente somam 124 KB.

**Preços visíveis** — cada serviço mostra valor e duração. Esconder preço atrás
de "consulte" é o que mais faz a cliente fechar a aba antes de chamar no
WhatsApp; a ressalva sobre serviços com química fica logo abaixo da grade.

**Mapa sob demanda** — o iframe do Google só carrega quando a visitante clica
em "Carregar mapa". O espaço é reservado antes, então não há salto de layout.
Evita centenas de KB e requisições de rastreamento em toda visita.

**Agendamento sem backend** — o formulário monta a mensagem (nome, WhatsApp,
serviço, dia e período) e abre no WhatsApp, onde a cliente revisa antes de
enviar. Para plugar um backend ou sistema de agenda, troque apenas o corpo de
`handleSubmit` em `src/sections/Contact.jsx`.

**Acessibilidade** — rótulos visíveis em todos os campos, erro abaixo do campo
com `role="alert"`, foco automático no primeiro campo inválido,
`aria-invalid`/`aria-describedby`, alvos de toque de no mínimo 44px, atalho
"Ir para o conteúdo", hierarquia de títulos sequencial e contraste AA
verificado (texto principal ≥ 4,5:1).

**Responsivo** — verificado em 375, 390, 768, 1024, 1280, 1440 e 1600px: sem
scroll horizontal e sem conteúdo sob o header fixo em nenhuma largura.

**Observação sobre o campo de data** — o navegador exibe o seletor de data no
formato do sistema do visitante (dd/mm/aaaa no Brasil). A mensagem enviada ao
WhatsApp é sempre formatada em dd/mm/aaaa.
