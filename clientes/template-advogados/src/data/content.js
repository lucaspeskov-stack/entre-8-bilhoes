/**
 * ============================================================================
 *  CENTRAL DE CONTEÚDO DO SITE
 * ============================================================================
 *  Este é o ÚNICO arquivo que você precisa editar para personalizar o site.
 *  Troque os textos entre aspas pelos dados do seu escritório e salve.
 *  Nada de mexer em código: o site se atualiza sozinho.
 *
 *  Dica: tudo que estiver escrito em MAIÚSCULAS entre colchetes — como
 *  [SEU NOME] — é um espaço reservado esperando a sua informação.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. DADOS DO ESCRITÓRIO
 * ------------------------------------------------------------------------- */
export const business = {
  name: 'Nome do Seu Escritório',
  shortName: 'Seu Escritório',
  monogram: 'SE', // 2 letras usadas no logo e nos espaços de foto
  role: 'Advocacia & Consultoria Jurídica',
  oab: 'OAB/UF 000.000',
  responsible: 'Dr(a). [SEU NOME AQUI]',

  phoneLabel: '(00) 0000-0000',
  phoneHref: 'tel:+550000000000',
  whatsappLabel: '(00) 90000-0000',
  // Troque 55DDNÚMERO pelo seu WhatsApp com DDI e DDD, sem espaços nem símbolos.
  whatsapp: 'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado.',
  email: 'contato@seudominio.com.br',

  street: 'Rua Exemplo, 000 — Sala 000',
  neighborhood: 'Seu Bairro',
  city: 'Sua Cidade',
  state: 'UF',
  zip: '00000-000',
  // Endereço usado no mapa e no botão "Traçar rota".
  mapQuery: 'Rua Exemplo, 000, Seu Bairro, Sua Cidade - UF',

  hours: [
    { day: 'Segunda a sexta', time: '09h00 — 18h00' },
    { day: 'Sábado', time: 'Plantão com hora marcada' },
    { day: 'Domingo e feriados', time: 'Urgências via WhatsApp' },
  ],

  rating: 5.0,
  reviewsCount: 128,

  social: {
    instagram: 'https://instagram.com/seuperfil',
    linkedin: 'https://linkedin.com/company/seuperfil',
  },
};

/* ---------------------------------------------------------------------------
 * 2. MENU DE NAVEGAÇÃO
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Onde estamos', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

/* ---------------------------------------------------------------------------
 * 3. HERO (primeira dobra)
 * ------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Seu Bairro · Sua Cidade — UF',
  titleLines: ['Seu direito', 'merece uma defesa'],
  titleHighlight: 'à altura.',
  description:
    'Escreva aqui, em duas linhas, o que o seu escritório faz e para quem. Ex.: atuação em direito civil, trabalhista e de família, com atendimento direto com o advogado responsável — do primeiro contato até o fim do processo.',
  primaryCta: 'Falar com um advogado',
  secondaryCta: 'Ver áreas de atuação',
  trustNote: 'Sigilo profissional garantido',
};

/** Faixa de números logo abaixo do hero. */
export const stats = [
  { value: '00', suffix: '+', label: 'Anos de atuação' },
  { value: '000', suffix: '+', label: 'Casos conduzidos' },
  { value: '00', suffix: 'h', label: 'Retorno ao contato' },
  { value: '5,0', suffix: '★', label: 'Avaliação no Google' },
];

/* ---------------------------------------------------------------------------
 * 4. SERVIÇOS / ÁREAS DE ATUAÇÃO
 *    icon: nome de um ícone da biblioteca lucide-react (lucide.dev/icons).
 * ------------------------------------------------------------------------- */
export const services = [
  {
    icon: 'Scale',
    title: 'Direito Civil',
    description:
      'Descreva em uma ou duas frases o que você resolve nesta área. Ex.: contratos, cobranças, indenizações e conflitos entre particulares.',
    topics: ['Contratos', 'Indenizações', 'Cobranças', 'Responsabilidade civil'],
  },
  {
    icon: 'Briefcase',
    title: 'Direito Trabalhista',
    description:
      'Troque este texto pela sua descrição. Ex.: defesa de direitos na relação de emprego, para trabalhadores e empresas.',
    topics: ['Rescisões', 'Verbas atrasadas', 'Horas extras', 'Assédio moral'],
  },
  {
    icon: 'HeartHandshake',
    title: 'Direito de Família',
    description:
      'Fale aqui de como você conduz temas sensíveis. Ex.: divórcios, guarda, pensão e inventários com discrição e acolhimento.',
    topics: ['Divórcio', 'Guarda', 'Pensão alimentícia', 'Inventário'],
  },
  {
    icon: 'Building2',
    title: 'Direito Empresarial',
    description:
      'Apresente o suporte que você dá a empresas. Ex.: constituição de sociedades, contratos e prevenção de litígios.',
    topics: ['Societário', 'Contratos', 'Recuperação de crédito', 'Compliance'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Direito Previdenciário',
    description:
      'Explique como você atua junto ao INSS. Ex.: aposentadorias, benefícios negados e revisões.',
    topics: ['Aposentadoria', 'Auxílio-doença', 'BPC/LOAS', 'Revisões'],
  },
  {
    icon: 'Gavel',
    title: 'Direito Criminal',
    description:
      'Descreva sua atuação na esfera criminal. Ex.: defesa em inquéritos, audiências e processos, com plantão para urgências.',
    topics: ['Defesa em inquérito', 'Audiências', 'Habeas corpus', 'Plantão 24h'],
  },
];

/* ---------------------------------------------------------------------------
 * 5. SOBRE
 * ------------------------------------------------------------------------- */
export const about = {
  eyebrow: 'Sobre o escritório',
  title: 'Uma banca construída sobre técnica, ética e proximidade.',
  paragraphs: [
    'Conte aqui a história do escritório: quando foi fundado, o que motivou a fundação e qual é a filosofia de trabalho. Dois ou três parágrafos curtos funcionam melhor do que um texto longo — quem procura um advogado quer entender rápido com quem vai falar.',
    'No segundo parágrafo, fale do seu método: como é a primeira conversa, com que frequência o cliente recebe notícias do processo e quem conduz o caso no dia a dia. Transparência é o que mais gera confiança nesta primeira visita ao site.',
  ],
  signatureName: 'Dr(a). [SEU NOME AQUI]',
  signatureRole: 'Advogado(a) responsável — OAB/UF 000.000',
  credentials: [
    'Formação em [SUA UNIVERSIDADE]',
    'Pós-graduação em [SUA ESPECIALIDADE]',
    'Membro da [COMISSÃO / ASSOCIAÇÃO]',
    'Atuação em todo o território nacional',
  ],
  pillars: [
    {
      icon: 'UserRound',
      title: 'Atendimento direto',
      text: 'Você fala com o advogado que conduz o seu caso — não com um intermediário.',
    },
    {
      icon: 'Lock',
      title: 'Sigilo absoluto',
      text: 'Tudo o que é dito na consulta é protegido pelo sigilo profissional.',
    },
    {
      icon: 'FileSearch',
      title: 'Clareza no processo',
      text: 'Você recebe atualizações em linguagem simples, sem juridiquês.',
    },
    {
      icon: 'Clock',
      title: 'Resposta rápida',
      text: 'Retorno ao primeiro contato em até [00] horas úteis.',
    },
  ],
};

/* ---------------------------------------------------------------------------
 * 6. PORTFÓLIO — CASOS & RESULTADOS
 *    Casos sempre anônimos: use apenas iniciais ou "Cliente A".
 *    Publicidade da advocacia deve seguir o Provimento 205/2021 da OAB —
 *    evite prometer resultados; descreva o que já foi realizado.
 * ------------------------------------------------------------------------- */
export const portfolio = {
  eyebrow: 'Portfólio',
  title: 'Casos conduzidos pelo escritório',
  description:
    'Resultados reais, apresentados de forma anônima. Substitua pelos casos do seu escritório — mantenha as informações genéricas o suficiente para preservar o sigilo do cliente.',
  cases: [
    {
      area: 'Trabalhista',
      title: 'Verbas rescisórias reconhecidas em 1ª instância',
      situation:
        'Descreva em uma frase a situação inicial do cliente. Ex.: demissão sem pagamento das verbas devidas após anos de vínculo.',
      result: 'R$ 00.000 recuperados',
      duration: '00 meses',
    },
    {
      area: 'Previdenciário',
      title: 'Benefício negado pelo INSS revertido',
      situation:
        'Resuma o problema. Ex.: pedido administrativo indeferido por suposta falta de carência comprovável.',
      result: 'Benefício concedido + atrasados',
      duration: '00 meses',
    },
    {
      area: 'Família',
      title: 'Guarda compartilhada acordada sem litígio',
      situation:
        'Resuma o contexto. Ex.: acordo construído em mediação, preservando a rotina das crianças.',
      result: 'Acordo homologado',
      duration: '00 semanas',
    },
    {
      area: 'Civil',
      title: 'Contrato revisado e dívida reduzida',
      situation:
        'Resuma o caso. Ex.: revisão de cláusulas abusivas em contrato de financiamento.',
      result: 'Redução de 00% do débito',
      duration: '00 meses',
    },
    {
      area: 'Empresarial',
      title: 'Recuperação de crédito por via extrajudicial',
      situation:
        'Resuma o caso. Ex.: inadimplência de cliente corporativo resolvida antes do processo.',
      result: 'R$ 00.000 recebidos',
      duration: '00 semanas',
    },
    {
      area: 'Criminal',
      title: 'Arquivamento de inquérito por falta de provas',
      situation:
        'Resuma o caso. Ex.: defesa técnica apresentada ainda na fase de investigação.',
      result: 'Inquérito arquivado',
      duration: '00 meses',
    },
  ],
  disclaimer:
    'Casos apresentados de forma anônima, apenas para fins informativos. Resultados anteriores não garantem resultados futuros — cada caso é analisado individualmente.',
};

/* ---------------------------------------------------------------------------
 * 7. AVALIAÇÕES
 * ------------------------------------------------------------------------- */
export const reviews = [
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 2 semanas',
    text: 'Cole aqui uma avaliação real recebida no Google, no WhatsApp ou por e-mail. Depoimentos curtos e específicos convencem mais do que elogios genéricos.',
  },
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 1 mês',
    text: 'Substitua por outro depoimento. Se o cliente preferir não se identificar, use apenas as iniciais — isso é comum e não tira a credibilidade.',
  },
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 2 meses',
    text: 'Peça avaliações aos clientes assim que o caso é encerrado. É o momento em que as pessoas mais se dispõem a escrever.',
  },
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 3 meses',
    text: 'Depoimentos que mencionam a área do direito ("trabalhista", "inventário") ajudam quem procura exatamente aquele serviço a se identificar.',
  },
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 4 meses',
    text: 'Mantenha entre 4 e 8 avaliações na página. Mais do que isso, ninguém lê; menos do que isso, parece pouco.',
  },
  {
    name: 'Nome do Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 6 meses',
    text: 'Você pode incluir o link do seu perfil no Google para que o visitante confira as avaliações na fonte original.',
  },
];

/* ---------------------------------------------------------------------------
 * 8. CONTATO
 * ------------------------------------------------------------------------- */
export const contact = {
  eyebrow: 'Contato',
  title: 'Conte o seu caso. A primeira conversa é reservada.',
  description:
    'Preencha o formulário e a mensagem será aberta no WhatsApp já formatada — você revisa antes de enviar. Se preferir, ligue ou escreva por e-mail.',
  subjects: [
    'Direito Civil',
    'Direito Trabalhista',
    'Direito de Família',
    'Direito Empresarial',
    'Direito Previdenciário',
    'Direito Criminal',
    'Outro assunto',
  ],
  privacyNote:
    'Seus dados são usados apenas para responder ao contato e não são compartilhados com terceiros.',
};

/* ---------------------------------------------------------------------------
 * 9. RODAPÉ
 * ------------------------------------------------------------------------- */
export const footer = {
  about:
    'Uma linha sobre o escritório para fechar a página. Ex.: advocacia dedicada a pessoas e empresas, com atendimento em toda a região.',
  legal:
    'Este site tem caráter meramente informativo, em conformidade com o Código de Ética e Disciplina da OAB e o Provimento 205/2021. Não constitui oferta de serviços nem captação de clientela.',
};
