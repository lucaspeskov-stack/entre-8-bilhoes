import { useRef, useState } from 'react';
import { AlertCircle, Check, Clock, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { business, contact } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';

const EMPTY = { name: '', phone: '', email: '', subject: '', message: '', consent: false };

/** Regras de validação por campo — a mensagem sempre diz como corrigir. */
function validateField(field, value) {
  switch (field) {
    case 'name':
      return value.trim().length >= 3 ? '' : 'Informe seu nome completo (mínimo 3 letras).';
    case 'phone': {
      const digits = value.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 13
        ? ''
        : 'Informe o telefone com DDD, ex.: (11) 90000-0000.';
    }
    case 'email':
      // Opcional: só valida o formato se o visitante preencheu.
      if (!value.trim()) return '';
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())
        ? ''
        : 'E-mail inválido. Confira se falta o "@" ou o domínio.';
    case 'subject':
      return value ? '' : 'Escolha o assunto do seu contato.';
    case 'message':
      return value.trim().length >= 15
        ? ''
        : 'Descreva o caso em ao menos uma frase — quanto mais contexto, melhor a orientação.';
    case 'consent':
      return value ? '' : 'É preciso concordar para que possamos responder ao seu contato.';
    default:
      return '';
  }
}

/**
 * Contato. Sem backend: a mensagem é montada e aberta no WhatsApp, onde o
 * visitante revisa antes de enviar — nada é perdido em um formulário que não
 * chega a lugar nenhum. Para plugar um backend (Formspree, n8n, API própria),
 * troque apenas o corpo de `handleSubmit`.
 *
 * Acessibilidade: rótulos visíveis, erro abaixo do campo, validação no blur
 * (não a cada tecla), `aria-invalid`/`aria-describedby` e foco automático no
 * primeiro campo inválido ao tentar enviar.
 */
export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const setValue = (field, value) => {
    setValues((v) => ({ ...v, [field]: value }));
    // Já tocado e com erro: corrige em tempo real assim que fica válido.
    if (touched[field]) setErrors((e) => ({ ...e, [field]: validateField(field, value) }));
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validateField(field, values[field]) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = Object.keys(EMPTY).reduce((acc, field) => {
      acc[field] = validateField(field, values[field]);
      return acc;
    }, {});

    setErrors(nextErrors);
    setTouched(Object.keys(EMPTY).reduce((acc, f) => ({ ...acc, [f]: true }), {}));

    const firstInvalid = Object.keys(nextErrors).find((f) => nextErrors[f]);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setSending(true);

    const text = [
      `Olá, ${business.name}!`,
      '',
      `Nome: ${values.name}`,
      `Telefone: ${values.phone}`,
      values.email ? `E-mail: ${values.email}` : null,
      `Assunto: ${values.subject}`,
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n');

    const url = `${business.whatsapp.split('?')[0]}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setSending(false);
    setSent(true);
    setValues(EMPTY);
    setTouched({});
    setErrors({});
  };

  /** Classe do campo conforme o estado de validação. */
  const fieldClass = (field) =>
    `min-h-[48px] w-full rounded-sm border bg-bone-50 px-4 py-3 text-[15px] text-ink-900
     transition-colors duration-200 placeholder:text-ink-400/70 focus:outline-none
     ${
       errors[field]
         ? 'border-red-600 focus:border-red-700'
         : 'border-bone-300 focus:border-marinho-500'
     }`;

  /** Mensagem de erro anunciada por leitores de tela. */
  const fieldError = (field) =>
    errors[field] ? (
      <p
        id={`${field}-erro`}
        role="alert"
        className="mt-2 flex items-start gap-1.5 text-[13px] font-bold text-red-700"
      >
        <AlertCircle size={14} className="mt-0.5 shrink-0" aria-hidden />
        {errors[field]}
      </p>
    ) : null;

  const a11yProps = (field) => ({
    name: field,
    id: field,
    value: values[field],
    onBlur: () => handleBlur(field),
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `${field}-erro` : undefined,
  });

  return (
    <section id="contato" aria-labelledby="contato-titulo" className="section bg-bone-50">
      <div className="container-x">
        <SectionHeading
          id="contato-titulo"
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* Formulário — `min-w-0` impede que a largura intrínseca do textarea
              e do select estique a coluna do grid e crie scroll horizontal. */}
          <Reveal className="min-w-0">
            <form
              ref={formRef}
              noValidate
              onSubmit={handleSubmit}
              className="rounded-sm border border-bone-300 bg-bone-100 p-7 shadow-soft sm:p-9"
            >
              <p className="text-sm text-ink-400">
                Campos com <span className="font-bold text-red-700">*</span> são obrigatórios.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink-800">
                    Nome completo <span className="text-red-700">*</span>
                  </label>
                  <input
                    {...a11yProps('name')}
                    type="text"
                    autoComplete="name"
                    placeholder="Como devemos chamar você"
                    onChange={(e) => setValue('name', e.target.value)}
                    className={fieldClass('name')}
                  />
                  {fieldError('name')}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink-800">
                    Telefone / WhatsApp <span className="text-red-700">*</span>
                  </label>
                  <input
                    {...a11yProps('phone')}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(00) 90000-0000"
                    onChange={(e) => setValue('phone', e.target.value)}
                    className={`${fieldClass('phone')} tnum`}
                  />
                  {fieldError('phone')}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink-800">
                    E-mail <span className="font-normal text-ink-400">(opcional)</span>
                  </label>
                  <input
                    {...a11yProps('email')}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="voce@email.com"
                    onChange={(e) => setValue('email', e.target.value)}
                    className={fieldClass('email')}
                  />
                  {fieldError('email')}
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-bold text-ink-800">
                    Assunto <span className="text-red-700">*</span>
                  </label>
                  <select
                    {...a11yProps('subject')}
                    onChange={(e) => setValue('subject', e.target.value)}
                    className={`${fieldClass('subject')} cursor-pointer`}
                  >
                    <option value="">Selecione a área</option>
                    {contact.subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {fieldError('subject')}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink-800">
                    Conte o que aconteceu <span className="text-red-700">*</span>
                  </label>
                  <textarea
                    {...a11yProps('message')}
                    rows={5}
                    placeholder="Descreva a situação com suas palavras. Datas, valores e documentos que você já tem ajudam bastante."
                    onChange={(e) => setValue('message', e.target.value)}
                    className={`${fieldClass('message')} resize-y`}
                  />
                  {!errors.message && (
                    <p className="mt-2 text-[13px] text-ink-400">
                      Tudo o que você escrever é protegido pelo sigilo profissional.
                    </p>
                  )}
                  {fieldError('message')}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="consent"
                    className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-ink-500"
                  >
                    <input
                      {...a11yProps('consent')}
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) => setValue('consent', e.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded-sm border-bone-400
                                 accent-marinho-500"
                    />
                    <span>
                      Concordo com o uso dos meus dados para retorno deste contato.{' '}
                      <span className="text-red-700">*</span>
                      <span className="mt-1 block text-[13px] text-ink-400">
                        {contact.privacyNote}
                      </span>
                    </span>
                  </label>
                  {fieldError('consent')}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" disabled={sending} className="btn-primary sm:w-auto">
                  {sending ? 'Abrindo o WhatsApp…' : 'Enviar mensagem'}
                  {!sending && <Send size={16} aria-hidden />}
                </button>

                {/* Confirmação anunciada sem roubar o foco do visitante */}
                <p
                  aria-live="polite"
                  className={`flex items-center gap-2 text-sm font-bold text-green-800 transition-opacity duration-300 ${
                    sent ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {sent && (
                    <>
                      <Check size={16} aria-hidden />
                      Mensagem pronta no WhatsApp. É só revisar e enviar.
                    </>
                  )}
                </p>
              </div>
            </form>
          </Reveal>

          {/* Canais diretos */}
          <Reveal delay={90} className="min-w-0">
            <div className="flex h-full flex-col gap-6 rounded-sm bg-marinho-700 p-7 text-bone-100 shadow-soft-lg sm:p-8 on-dark">
              <div>
                <h3 className="font-display text-2xl font-semibold text-bone-50">
                  Prefere falar agora?
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-bone-200">
                  Escolha o canal que for mais confortável para você.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[64px] items-center gap-4 rounded-sm border border-bone-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <WhatsAppGlyph size={22} className="shrink-0 text-gold-300" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gold-300">
                      WhatsApp
                    </span>
                    <span className="tnum block truncate font-bold text-bone-50">
                      {business.whatsappLabel}
                    </span>
                  </span>
                </a>

                <a
                  href={business.phoneHref}
                  className="flex min-h-[64px] items-center gap-4 rounded-sm border border-bone-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <Phone size={22} className="shrink-0 text-gold-300" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gold-300">
                      Telefone
                    </span>
                    <span className="tnum block truncate font-bold text-bone-50">
                      {business.phoneLabel}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex min-h-[64px] items-center gap-4 rounded-sm border border-bone-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <Mail size={22} className="shrink-0 text-gold-300" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-gold-300">
                      E-mail
                    </span>
                    <span className="block truncate font-bold text-bone-50">{business.email}</span>
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-3 border-t border-bone-50/15 pt-6 text-[14px] text-bone-200">
                <Clock size={17} className="mt-0.5 shrink-0 text-gold-300" aria-hidden />
                <span>
                  Atendimento de {business.hours[0].day.toLowerCase()}, {business.hours[0].time}.
                  Mensagens fora do horário são respondidas no próximo dia útil.
                </span>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-2">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do escritório"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border
                             border-bone-50/20 text-bone-100 transition-colors duration-200 hover:bg-white/15"
                >
                  <Instagram size={18} aria-hidden />
                </a>
                <a
                  href={business.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn do escritório"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-sm border
                             border-bone-50/20 text-bone-100 transition-colors duration-200 hover:bg-white/15"
                >
                  <Linkedin size={18} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
