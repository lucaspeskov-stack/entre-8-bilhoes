/**
 * ============================================================================
 *  CENTRAL DE CONTEÚDO DO SITE
 * ============================================================================
 *  Este é o ÚNICO arquivo que você precisa editar para personalizar o site.
 *  Troque os textos entre aspas pelos dados do seu salão e salve.
 *  Nada de mexer em código: o site se atualiza sozinho.
 *
 *  Dica: tudo que estiver em MAIÚSCULAS entre colchetes — como [SEU NOME] —
 *  é um espaço reservado esperando a sua informação.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. DADOS DO SALÃO
 * ------------------------------------------------------------------------- */
export const business = {
  name: 'Nome do Seu Salão',
  shortName: 'Seu Salão',
  monogram: 'SS', // 2 letras usadas no logo e nos espaços de foto
  role: 'Cabelo · Estética · Beleza',
  responsible: '[SEU NOME AQUI]',

  phoneLabel: '(00) 0000-0000',
  phoneHref: 'tel:+550000000000',
  whatsappLabel: '(00) 90000-0000',
  // Troque 55DDNÚMERO pelo seu WhatsApp com DDI e DDD, sem espaços nem símbolos.
  whatsapp:
    'https://wa.me/5500000000000?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio.',
  email: 'contato@seudominio.com.br',

  street: 'Rua Exemplo, 000 — Loja 00',
  neighborhood: 'Seu Bairro',
  city: 'Sua Cidade',
  state: 'UF',
  zip: '00000-000',
  // Endereço usado no mapa e no botão "Traçar rota".
  mapQuery: 'Rua Exemplo, 000, Seu Bairro, Sua Cidade - UF',

  hours: [
    { day: 'Terça a sexta', time: '09h00 — 20h00' },
    { day: 'Sábado', time: '09h00 — 18h00' },
    { day: 'Domingo e segunda', time: 'Fechado' },
  ],

  rating: 4.9,
  reviewsCount: 214,

  social: {
    instagram: 'https://instagram.com/seuperfil',
    facebook: 'https://facebook.com/seuperfil',
  },
};

/* ---------------------------------------------------------------------------
 * 2. MENU DE NAVEGAÇÃO
 * ------------------------------------------------------------------------- */
export const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Avaliações', href: '#avaliacoes' },
  { label: 'Onde estamos', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
];

/* ---------------------------------------------------------------------------
 * 3. HERO (primeira dobra)
 * ------------------------------------------------------------------------- */
export const hero = {
  eyebrow: 'Seu Bairro · Sua Cidade — UF',
  titleLines: ['O cuidado que', 'você merece,'],
  titleHighlight: 'do jeito certo.',
  description:
    'Escreva aqui, em duas linhas, o que o seu salão faz e para quem. Ex.: cabelo, estética e beleza com hora marcada, profissionais especializados e produtos de alta performance — sem fila de espera.',
  primaryCta: 'Agendar pelo WhatsApp',
  secondaryCta: 'Ver serviços e preços',
  trustNote: 'Atendimento com hora marcada',
};

/** Faixa de números logo abaixo do hero. */
export const stats = [
  { value: '00', suffix: '+', label: 'Anos de história' },
  { value: '00', suffix: '', label: 'Profissionais' },
  { value: '0.000', suffix: '+', label: 'Clientes atendidas' },
  { value: '4,9', suffix: '★', label: 'Avaliação no Google' },
];

/* ---------------------------------------------------------------------------
 * 4. SERVIÇOS
 *    icon: nome de um ícone da biblioteca lucide-react (lucide.dev/icons).
 *    Preços e durações são espaços reservados — troque pelos seus.
 * ------------------------------------------------------------------------- */
export const services = [
  {
    icon: 'Scissors',
    title: 'Corte & Finalização',
    description:
      'Descreva o serviço em uma frase. Ex.: corte estudado para o seu formato de rosto e rotina, com finalização inclusa.',
    items: [
      { name: 'Corte feminino', price: 'R$ 00', time: '00 min' },
      { name: 'Corte masculino', price: 'R$ 00', time: '00 min' },
      { name: 'Escova / finalização', price: 'R$ 00', time: '00 min' },
    ],
  },
  {
    icon: 'Palette',
    title: 'Coloração & Mechas',
    description:
      'Troque este texto pela sua descrição. Ex.: colorimetria personalizada, com teste de mecha e diagnóstico do fio antes de qualquer química.',
    items: [
      { name: 'Coloração completa', price: 'R$ 000', time: '0h00' },
      { name: 'Mechas / luzes', price: 'R$ 000', time: '0h00' },
      { name: 'Retoque de raiz', price: 'R$ 00', time: '00 min' },
    ],
  },
  {
    icon: 'Sparkles',
    title: 'Tratamentos Capilares',
    description:
      'Fale do seu protocolo de tratamento. Ex.: cronograma capilar, reconstrução e hidratação profunda com produtos profissionais.',
    items: [
      { name: 'Hidratação profunda', price: 'R$ 00', time: '00 min' },
      { name: 'Reconstrução', price: 'R$ 000', time: '0h00' },
      { name: 'Botox capilar', price: 'R$ 000', time: '0h00' },
    ],
  },
  {
    icon: 'Hand',
    title: 'Manicure & Pedicure',
    description:
      'Descreva o serviço. Ex.: esmaltação tradicional, em gel e alongamento, com esterilização de todo o material a cada atendimento.',
    items: [
      { name: 'Mão e pé', price: 'R$ 00', time: '00 min' },
      { name: 'Esmaltação em gel', price: 'R$ 00', time: '00 min' },
      { name: 'Alongamento', price: 'R$ 000', time: '0h00' },
    ],
  },
  {
    icon: 'Eye',
    title: 'Sobrancelhas & Cílios',
    description:
      'Apresente o serviço. Ex.: design com mapeamento facial, henna e extensão de cílios fio a fio.',
    items: [
      { name: 'Design de sobrancelha', price: 'R$ 00', time: '00 min' },
      { name: 'Design com henna', price: 'R$ 00', time: '00 min' },
      { name: 'Extensão de cílios', price: 'R$ 000', time: '0h00' },
    ],
  },
  {
    icon: 'Brush',
    title: 'Maquiagem & Noivas',
    description:
      'Fale dos serviços para ocasiões especiais. Ex.: maquiagem social, formatura e pacote completo para noivas, com prova antecipada.',
    items: [
      { name: 'Maquiagem social', price: 'R$ 000', time: '0h00' },
      { name: 'Penteado', price: 'R$ 000', time: '0h00' },
      { name: 'Pacote noiva', price: 'Sob consulta', time: '—' },
    ],
  },
];

export const servicesNote =
  'Os valores são apenas exemplos para você substituir. Serviços com química podem variar conforme o comprimento e o histórico do cabelo — o valor final é sempre confirmado antes de começar.';

/* ---------------------------------------------------------------------------
 * 5. SOBRE
 * ------------------------------------------------------------------------- */
export const about = {
  eyebrow: 'Sobre o salão',
  title: 'Um espaço pensado para você sair melhor do que entrou.',
  paragraphs: [
    'Conte aqui a história do salão: quando abriu, o que motivou a abertura e o que torna o atendimento diferente. Dois ou três parágrafos curtos funcionam melhor que um texto longo — quem procura um salão quer entender rápido se aquele é o lugar dela.',
    'No segundo parágrafo, fale do método: como funciona a avaliação antes do serviço, quais marcas você usa e como o horário marcado é respeitado. Detalhes concretos valem mais do que adjetivos.',
  ],
  signatureName: '[SEU NOME AQUI]',
  signatureRole: 'Cabeleireiro(a) e proprietário(a)',
  pillars: [
    {
      icon: 'CalendarCheck',
      title: 'Hora marcada de verdade',
      text: 'Uma cliente por horário. Você não espera e o seu serviço não é apressado.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Higiene e esterilização',
      text: 'Material esterilizado a cada atendimento, com autoclave e descartáveis.',
    },
    {
      icon: 'GraduationCap',
      title: 'Equipe especializada',
      text: 'Profissionais em formação contínua nas técnicas e nas marcas que usamos.',
    },
    {
      icon: 'Leaf',
      title: 'Produtos profissionais',
      text: 'Linhas [MARCA 1] e [MARCA 2], escolhidas para cada tipo de fio e pele.',
    },
  ],
  /**
   * Galeria do ambiente. As imagens que vieram no template são recortes da
   * fotografia de referência — troque cada `src` pelas fotos do seu salão
   * (formato retrato 4:5 dá o melhor resultado).
   */
  gallery: [
    { src: '/fotos/ambiente-prateleira.webp', alt: 'Prateleiras iluminadas com produtos profissionais' },
    { src: '/fotos/ambiente-lavatorio.webp', alt: 'Área de lavatórios do salão' },
    { src: '/fotos/ambiente-pendentes.webp', alt: 'Detalhe da iluminação e do acabamento em mármore' },
  ],
  photo: {
    src: '/fotos/ambiente-cadeira.webp',
    alt: 'Cadeira de corte e bancada do salão',
  },
};

/* ---------------------------------------------------------------------------
 * 6. AVALIAÇÕES
 * ------------------------------------------------------------------------- */
export const reviews = [
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 1 semana',
    service: 'Mechas',
    text: 'Cole aqui uma avaliação real que você recebeu no Google, no Instagram ou no WhatsApp. Depoimentos curtos e específicos convencem mais do que elogios genéricos.',
  },
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 3 semanas',
    service: 'Corte e escova',
    text: 'Substitua por outro depoimento. Se a cliente preferir não se identificar, use só as iniciais — é comum e não tira a credibilidade.',
  },
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 1 mês',
    service: 'Coloração',
    text: 'Peça a avaliação no fim do atendimento, enquanto a cliente ainda está no espelho gostando do resultado. É quando ela mais se dispõe a escrever.',
  },
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 2 meses',
    service: 'Design de sobrancelha',
    text: 'Depoimentos que citam o serviço ("mechas", "progressiva", "sobrancelha") ajudam quem procura exatamente aquilo a se identificar.',
  },
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 3 meses',
    service: 'Maquiagem de noiva',
    text: 'Mantenha entre 4 e 8 avaliações na página. Mais do que isso ninguém lê; menos do que isso parece pouco.',
  },
  {
    name: 'Nome da Cliente',
    initials: 'NC',
    rating: 5,
    date: 'há 4 meses',
    service: 'Tratamento capilar',
    text: 'Você pode incluir o link do seu perfil no Google para que a visitante confira as avaliações na fonte original.',
  },
];

/* ---------------------------------------------------------------------------
 * 7. CONTATO
 * ------------------------------------------------------------------------- */
export const contact = {
  eyebrow: 'Agende seu horário',
  title: 'Escolha o serviço e o melhor dia para você.',
  description:
    'Preencha e a mensagem será aberta no WhatsApp já formatada — você revisa antes de enviar. Se preferir, ligue ou chame no Instagram.',
  subjects: [
    'Corte & Finalização',
    'Coloração & Mechas',
    'Tratamentos Capilares',
    'Manicure & Pedicure',
    'Sobrancelhas & Cílios',
    'Maquiagem & Noivas',
    'Outro serviço',
  ],
  periods: ['Manhã', 'Tarde', 'Fim da tarde', 'Tanto faz'],
  privacyNote:
    'Seus dados são usados apenas para responder ao contato e não são compartilhados com terceiros.',
};

/* ---------------------------------------------------------------------------
 * 8. RODAPÉ
 * ------------------------------------------------------------------------- */
export const footer = {
  about:
    'Uma linha sobre o salão para fechar a página. Ex.: cabelo, estética e beleza com hora marcada, no coração do [SEU BAIRRO].',
  legal: 'Imagens e valores meramente ilustrativos. Consulte condições no agendamento.',
};
