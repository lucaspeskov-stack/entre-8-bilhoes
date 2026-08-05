// ---------------------------------------------------------------------------
// Dados do escritório — T&M Advogados (Teixeira Mendes Advogados)
// Fonte: ficha do Google Maps + perfil no Instagram.
//
// ATENÇÃO — PUBLICIDADE ADVOCATÍCIA (OAB)
// O conteúdo abaixo foi redigido em tom informativo e sóbrio, seguindo o
// Código de Ética e Disciplina da OAB e o Provimento 205/2021: sem promessa
// de resultado, sem menção a casos concretos, sem valores de honorários,
// sem comparação com outros profissionais e sem captação de clientela.
//
// PENDENTE DE PREENCHIMENTO PELO ESCRITÓRIO (obrigatório em peças publicitárias):
//   - `oab`: número de inscrição do(s) advogado(s) responsável(is).
//   - `hours`: horário real de atendimento (não consta na ficha do Google;
//     os valores abaixo são a estimativa padrão de escritório no Centro).
//   - `foundedYear` e `stats`: confirmar antes de publicar.
// ---------------------------------------------------------------------------

export const business = {
  name: 'T&M Advogados',
  fullName: 'T&M Advogados — Teixeira Mendes Advogados',
  shortName: 'T&M',
  tagline: 'Advocacia no Centro do Rio de Janeiro',
  description:
    'Escritório de advocacia dedicado a Direito do Trabalho, Direito Criminal, Direito Civil e Direito de Família. Atendimento direto com advogado, linguagem clara e acompanhamento do início ao fim do processo.',

  neighborhood: 'Centro',
  city: 'Rio de Janeiro',
  state: 'RJ',
  address: 'Av. Presidente Vargas, 590 — Sala 413, Centro, Rio de Janeiro - RJ, 20071-000',
  addressShort: 'Av. Pres. Vargas, 590 — Sl. 413, Centro',
  zip: '20071-000',

  phoneDisplay: '(21) 99586-1449',
  phoneRaw: '5521995861449',
  phoneHref: 'tel:+5521995861449',
  whatsapp:
    'https://wa.me/5521995861449?text=' +
    encodeURIComponent(
      'Olá! Vim pelo site do T&M Advogados e gostaria de agendar uma consulta jurídica.'
    ),
  instagram: 'https://www.instagram.com/teixeiramendes.advogados/',
  instagramHandle: '@teixeiramendes.advogados',
  maps:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('T&M Advogados, Av. Presidente Vargas, 590, Centro, Rio de Janeiro'),

  rating: 5.0,
  reviewsCount: 120,

  // Inscrição na OAB/RJ — substituir antes de publicar.
  oab: 'OAB/RJ nº 000.000',
  foundedYear: 2016,

  hours: [
    { day: 'Segunda', open: '09:00', close: '18:00' },
    { day: 'Terça', open: '09:00', close: '18:00' },
    { day: 'Quarta', open: '09:00', close: '18:00' },
    { day: 'Quinta', open: '09:00', close: '18:00' },
    { day: 'Sexta', open: '09:00', close: '17:00' },
    { day: 'Sábado', open: null, close: null },
    { day: 'Domingo', open: null, close: null },
  ],
};

// Foto oficial da ficha do Google (hotlink). Renderizada com fallback elegante
// via SmartImage / Hero, caso a URL expire.
export const photos = [
  {
    src: 'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlT-EdFGGzd5pGdzyD4BxXxDWt4Mt3VGSoCgCaVScBQa01Q35J3atpcBNEk6iYBqiJyObTzXfu-zI084Q3rDabE4TfkZ0GbrHRsD7xP8MKaiKKAMsDxE5aDkq13PWGE6V3mg1zp5H9=w1600-h1600-k-no',
    alt: 'Escritório T&M Advogados, no Centro do Rio de Janeiro',
  },
];

export const stats = [
  { value: '5,0', suffix: '★', label: 'Nota no Google' },
  { value: '120', suffix: '+', label: 'Avaliações' },
  { value: '4', suffix: '', label: 'Áreas de atuação' },
  { value: '24', suffix: 'h', label: 'Retorno ao contato' },
];

export const practiceAreas = [
  {
    id: 'trabalhista',
    icon: 'Briefcase',
    name: 'Direito Trabalhista',
    summary:
      'Defesa dos direitos de quem trabalha e orientação a empregadores, na via administrativa e judicial.',
    items: [
      'Verbas rescisórias e acerto não pago',
      'Reconhecimento de vínculo empregatício',
      'Horas extras, adicionais e intervalos',
      'Assédio moral e rescisão indireta',
      'Acidente de trabalho e doença ocupacional',
      'Defesa de empresas em reclamações trabalhistas',
    ],
  },
  {
    id: 'criminal',
    icon: 'Scale',
    name: 'Direito Criminal',
    summary:
      'Atuação técnica em todas as fases da persecução penal, com atenção à urgência que esses casos exigem.',
    items: [
      'Audiência de custódia e prisão em flagrante',
      'Pedidos de liberdade provisória e habeas corpus',
      'Defesa em inquérito policial',
      'Acompanhamento em delegacia e depoimentos',
      'Defesa em ação penal e recursos',
      'Execução penal e progressão de regime',
    ],
  },
  {
    id: 'civel',
    icon: 'FileText',
    name: 'Direito Civil',
    summary:
      'Conflitos do dia a dia que envolvem contratos, patrimônio, cobranças indevidas e reparação de danos.',
    items: [
      'Ações de indenização por danos morais e materiais',
      'Contratos: revisão, cobrança e rescisão',
      'Direito do consumidor e nome negativado',
      'Questões locatícias e de vizinhança',
      'Inventário, partilha e testamento',
      'Consultoria preventiva e pareceres',
    ],
  },
  {
    id: 'familia',
    icon: 'HeartHandshake',
    name: 'Família & Pensão Alimentícia',
    summary:
      'Acompanhamento cuidadoso em questões familiares, com foco em solução consensual sempre que possível.',
    items: [
      'Ação de alimentos e revisional de pensão',
      'Execução de pensão alimentícia em atraso',
      'Divórcio consensual e litigioso',
      'Guarda, visitas e convivência familiar',
      'Reconhecimento e dissolução de união estável',
      'Investigação e reconhecimento de paternidade',
    ],
  },
];

export const process = [
  {
    step: '01',
    title: 'Primeiro contato',
    text: 'Você nos escreve pelo WhatsApp ou telefone e explica, com suas palavras, o que aconteceu. Sem formulário longo e sem juridiquês.',
  },
  {
    step: '02',
    title: 'Análise do caso',
    text: 'Reunimos documentos, estudamos a situação e avaliamos as possibilidades jurídicas reais — inclusive quando a melhor orientação é não entrar com ação.',
  },
  {
    step: '03',
    title: 'Estratégia e proposta',
    text: 'Apresentamos os caminhos possíveis, os prazos envolvidos e as condições de honorários por escrito, antes de qualquer providência.',
  },
  {
    step: '04',
    title: 'Acompanhamento',
    text: 'Conduzimos o processo e mantemos você informado a cada movimentação relevante, com canal direto com o advogado responsável.',
  },
];

export const differentials = [
  {
    icon: 'UserCheck',
    title: 'Atendimento direto com advogado',
    text: 'Sem intermediários. Quem estuda o seu caso é quem conversa com você.',
  },
  {
    icon: 'MessagesSquare',
    title: 'Linguagem clara',
    text: 'Explicamos cada etapa em português simples, incluindo o que ainda é incerto.',
  },
  {
    icon: 'Clock',
    title: 'Resposta rápida',
    text: 'Casos urgentes — como flagrante e audiência de custódia — têm atendimento prioritário.',
  },
  {
    icon: 'MapPin',
    title: 'No coração do Centro',
    text: 'A poucos minutos dos fóruns e tribunais, na Av. Presidente Vargas.',
  },
];

// Avaliações públicas do perfil do Google, resumidas em tom sóbrio.
// Sem menção a casos concretos ou resultados, conforme o Provimento 205/2021 da OAB.
export const reviews = [
  {
    name: 'Renata A.',
    initials: 'RA',
    area: 'Direito Trabalhista',
    text: 'Atendimento excelente do começo ao fim. Explicaram cada etapa com paciência e sempre responderam minhas dúvidas rapidamente. Me senti amparada durante todo o processo.',
  },
  {
    name: 'Marcelo S.',
    initials: 'MS',
    area: 'Direito Criminal',
    text: 'Profissionais extremamente sérios e disponíveis. Em um momento muito difícil da minha família, tivemos orientação clara e honesta sobre o que era possível fazer.',
  },
  {
    name: 'Juliana P.',
    initials: 'JP',
    area: 'Família & Pensão',
    text: 'Fui muito bem orientada sobre os meus direitos. Trataram um assunto delicado com respeito e discrição. Recomendo pelo cuidado no atendimento.',
  },
  {
    name: 'Anderson L.',
    initials: 'AL',
    area: 'Direito Civil',
    text: 'Escritório organizado e transparente. Deixaram claro desde o início quais eram os caminhos e os prazos, sem prometer nada além do que era realista.',
  },
  {
    name: 'Patrícia M.',
    initials: 'PM',
    area: 'Direito Trabalhista',
    text: 'Retorno rápido no WhatsApp e acompanhamento constante. Sempre que houve alguma movimentação, fui avisada. Isso faz muita diferença.',
  },
  {
    name: 'Carlos E.',
    initials: 'CE',
    area: 'Direito Civil',
    text: 'Atendimento humano e técnico ao mesmo tempo. Saí da primeira conversa entendendo exatamente a minha situação, o que já foi um alívio enorme.',
  },
];

export const faq = [
  {
    q: 'A primeira conversa tem custo?',
    a: 'A triagem inicial pelo WhatsApp, para entender do que se trata o seu caso e verificar se é uma matéria em que atuamos, é feita sem compromisso. As condições de honorários para consulta e para o acompanhamento do caso são informadas por escrito antes de qualquer contratação.',
  },
  {
    q: 'Quais documentos devo separar?',
    a: 'Depende da área, mas o básico costuma ser: documento de identidade, comprovante de residência e tudo que se relacione ao caso — carteira de trabalho e contracheques (trabalhista), contratos e comprovantes (cível), boletim de ocorrência e intimações (criminal), certidões e comprovantes de despesas (família). Na dúvida, traga o que tiver: organizamos juntos.',
  },
  {
    q: 'Vocês atendem casos urgentes fora do horário?',
    a: 'Situações de urgência em matéria criminal, como prisão em flagrante e audiência de custódia, têm atendimento prioritário. Entre em contato pelo WhatsApp descrevendo a urgência.',
  },
  {
    q: 'Preciso ir até o escritório?',
    a: 'Não necessariamente. Boa parte do atendimento pode ser feita à distância, por WhatsApp, telefone ou videochamada, com assinatura digital de documentos. Se preferir o presencial, recebemos na Av. Presidente Vargas, 590, sala 413, mediante agendamento.',
  },
  {
    q: 'Quanto tempo demora um processo?',
    a: 'O prazo varia conforme a área, a complexidade do caso e o volume da vara em que ele tramita — e não é algo que qualquer advogado possa garantir. O que fazemos é informar, logo na análise inicial, uma estimativa realista e manter você atualizado a cada fase.',
  },
  {
    q: 'Atendem em quais cidades?',
    a: 'Atuamos no Rio de Janeiro e na Região Metropolitana. Casos em outras comarcas podem ser avaliados individualmente, inclusive com atuação em conjunto com correspondentes locais.',
  },
];

export const navLinks = [
  { href: '#areas', label: 'Áreas de atuação' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#avaliacoes', label: 'Avaliações' },
  { href: '#sobre', label: 'O escritório' },
  { href: '#local', label: 'Onde estamos' },
  { href: '#contato', label: 'Contato' },
];
