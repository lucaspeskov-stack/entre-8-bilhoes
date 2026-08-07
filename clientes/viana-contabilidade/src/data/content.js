/**
 * FONTE ÚNICA DE CONTEÚDO DO SITE.
 *
 * Todo texto, número e link que a Stephanie possa querer trocar mora aqui —
 * nenhum componente escreve conteúdo direto no JSX. Os campos marcados com
 * `⚠️ PLACEHOLDER` precisam do dado real antes de publicar (ver README).
 */

export const brand = {
  nome: 'Stephanie Viana',
  papel: 'Contadora',
  negocio: 'Viana Contabilidade',
  /** ⚠️ PLACEHOLDER — substituir pelo registro real no Conselho Regional. */
  crc: 'CRC-RJ 000.000/O-0',
  instagram: '@stecontabilidade',
  instagramUrl: 'https://www.instagram.com/stecontabilidade/',
  /** Formato internacional, só dígitos — é o que o wa.me espera. */
  whatsapp: '5521933004084',
  whatsappDisplay: '(21) 93300-4084',
};

/**
 * Monta o link do WhatsApp com a mensagem já escrita: quem clica não precisa
 * pensar no que dizer, e a Stephanie sabe de onde veio o contato.
 */
export function waLink(mensagem) {
  const texto = mensagem ?? 'Olá, Stephanie! Vim pelo site e gostaria de falar sobre contabilidade.';
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const hero = {
  eyebrow: 'Stephanie Viana · Contadora',
  headline: 'Sua contabilidade em dia, com atendimento próximo e sem burocracia',
  subheadline:
    'Atendimento personalizado, com orientação clara e soluções para manter suas obrigações em dia.',
  ctaPrimario: 'Falar no WhatsApp',
  ctaSecundario: 'Agende uma conversa',
};

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
];

/**
 * Prova social. `nota`, `total` e `avaliacoes` são exatamente o formato que a
 * API do Google Places devolve — trocar por dados ao vivo não exige mexer em
 * nenhum componente (ver README, seção "Google Reviews ao vivo").
 */
export const google = {
  nota: 5.0,
  total: 3,
  perfilUrl: 'https://www.google.com/search?q=Stephanie+Viana+Contabilidade',
  destaque: {
    texto: 'Excelente trabalho, pontualidade e eficácia',
    autor: 'Cliente verificado no Google',
    nota: 5,
  },
};

export const selos = [
  {
    icone: 'ShieldCheck',
    titulo: 'Registro CRC ativo',
    descricao: 'Contadora registrada no Conselho Regional de Contabilidade',
  },
  {
    icone: 'Laptop',
    titulo: 'Atendimento 100% online',
    descricao: 'Documentos e dúvidas resolvidos por WhatsApp, de onde você estiver',
  },
  {
    icone: 'UserRound',
    titulo: 'Você fala direto com ela',
    descricao: 'Sem intermediário e sem fila: quem atende é a própria Stephanie',
  },
];

/**
 * Serviços — textos-base do material da própria Stephanie. O quinto item é
 * marcado como `complementar`: aparece na grade, mas com peso visual menor
 * para não competir com o core contábil.
 */
export const servicos = [
  {
    numero: '01',
    icone: 'Building2',
    titulo: 'Abertura, baixa e alteração de empresas',
    descricao:
      'Todo o processo societário conduzido do início ao fim: escolha do regime, registro na Junta, inscrições e alterações contratuais quando o negócio muda.',
  },
  {
    numero: '02',
    icone: 'ShieldCheck',
    titulo: 'Regularização de MEIs e Pessoas Físicas',
    descricao:
      'Pendências antigas, declarações atrasadas e débitos em aberto revisados e colocados em ordem, com o caminho explicado a cada etapa.',
  },
  {
    numero: '03',
    icone: 'CalendarCheck',
    titulo: 'Contabilidade mensal para pessoas físicas, MEI e pequenas empresas',
    descricao:
      'Rotina mensal completa — apurações, guias e obrigações acessórias entregues no prazo, sem que você precise ficar controlando datas.',
  },
  {
    numero: '04',
    icone: 'MessagesSquare',
    titulo: 'Apoio contábil e consultivo',
    descricao:
      'Um canal aberto para as decisões do dia a dia: pró-labore, regime tributário, contratação e o impacto de cada escolha antes de você tomá-la.',
  },
  {
    numero: '05',
    icone: 'FileSignature',
    titulo: 'Elaboração de contratos e documentos',
    descricao:
      'Serviço complementar para quem já é cliente — contratos de locação e documentos afins redigidos com o mesmo cuidado do trabalho contábil.',
    complementar: true,
  },
];

export const passos = [
  {
    numero: '01',
    titulo: 'Você entra em contato pelo WhatsApp',
    descricao: 'Uma conversa direta, sem formulário e sem compromisso, para entender o seu caso.',
  },
  {
    numero: '02',
    titulo: 'Envia seus documentos',
    descricao: 'Você recebe a lista exata do que é necessário e envia tudo digitalmente, no seu tempo.',
  },
  {
    numero: '03',
    titulo: 'Stephanie cuida de tudo com atendimento personalizado',
    descricao: 'Apuração, prazos e obrigações ficam por conta dela — sem intermediário no meio do caminho.',
  },
  {
    numero: '04',
    titulo: 'Você recebe tudo pronto, com clareza total do processo',
    descricao: 'Entrega feita, guias em mãos e cada passo explicado em português — sem jargão.',
  },
];

export const depoimentos = [
  {
    texto: 'Meu cliente satisfeito e sem preocupação com a declaração do IRRF',
    autor: 'Ana C.',
    nota: 5,
  },
  {
    texto: 'Fez perguntas eficazes, ótimo conhecimento na área imobiliária',
    autor: 'Fátima',
    nota: 5,
  },
];

export const faq = [
  {
    pergunta: 'Atende Pessoa Física e MEI?',
    resposta:
      'Sim. O atendimento contempla pessoas físicas, MEIs e pequenas empresas — da declaração de Imposto de Renda e regularização de pendências até a contabilidade mensal de quem já tem CNPJ.',
  },
  {
    pergunta: 'Preciso trocar de contador agora pra começar?',
    resposta:
      'Não. A primeira conversa é sem compromisso: serve para entender a sua situação e o que faz sentido para você. Se decidir seguir, a transferência é conduzida com calma, incluindo o pedido dos documentos e do histórico ao contador anterior.',
  },
  {
    pergunta: 'Atendimento é 100% online?',
    resposta:
      'Sim. Todo o processo pode ser feito à distância, com envio digital de documentos e acompanhamento pelo WhatsApp — com a mesma proximidade de um atendimento presencial.',
  },
  {
    pergunta: 'Quais documentos preciso enviar pra começar?',
    resposta:
      'Depende do seu caso. Para pessoa física, em geral documento de identificação, CPF e os comprovantes de rendimentos e despesas do período. Para MEI e empresas, os dados do CNPJ, notas fiscais e extratos. Na primeira conversa você recebe a lista exata — nada além do que for realmente usado.',
  },
];

export const contato = {
  titulo: 'Vamos colocar sua contabilidade em dia',
  texto:
    'Me conte em poucas linhas a sua situação pelo WhatsApp. Respondo pessoalmente e, já na primeira conversa, você sai sabendo o que precisa ser feito.',
};
