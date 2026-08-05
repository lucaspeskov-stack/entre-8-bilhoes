import { useRef, useState } from 'react';
import { AlertCircle, Check, Clock, Instagram, Facebook, Mail, Phone, Send } from 'lucide-react';
import { business, contact } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';

const EMPTY = {
  name: '',
  phone: '',
  service: '',
  date: '',
  period: '',
  notes: '',
  consent: false,
};

/** Data de hoje em AAAA-MM-DD, no fuso do navegador (não em UTC). */
function today() {
  const d = new Date();
  const off = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - off).toISOString().slice(0, 10);
}

/** Regras de validação por campo — a mensagem sempre diz como corrigir. */
function validateField(field, value) {
  switch (field) {
    case 'name':
      return value.trim().length >= 2 ? '' : 'Informe seu nome (mínimo 2 letras).';
    case 'phone': {
      const digits = value.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 13
        ? ''
        : 'Informe o WhatsApp com DDD, ex.: (11) 90000-0000.';
    }
    case 'service':
      return value ? '' : 'Escolha o serviço que você quer agendar.';
    case 'date':
      // Opcional: só valida se a cliente preencheu.
      if (!value) return '';
      return value >= today() ? '' : 'Escolha uma data de hoje em diante.';
    case 'consent':
      return value ? '' : 'É preciso concordar para que possamos responder ao seu contato.';
    default:
      return '';
  }
}

/**
 * Agendamento. Sem backend: a mensagem é montada e aberta no WhatsApp, onde a
 * cliente revisa antes de enviar — nada se perde num formulário que não chega
 * a lugar nenhum. Para plugar um backend (Formspree, n8n, sistema de agenda),
 * troque apenas o corpo de `handleSubmit`.
 *
 * Acessibilidade: rótulos visíveis, erro abaixo do campo com `role="alert"`,
 * validação no blur (não a cada tecla), `aria-invalid`/`aria-describedby` e
 * foco automático no primeiro campo inválido ao tentar enviar.
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

    const dataBR = values.date ? values.date.split('-').reverse().join('/') : null;
    const text = [
      `Olá, ${business.name}!`,
      '',
      `Nome: ${values.name}`,
      `WhatsApp: ${values.phone}`,
      `Serviço: ${values.service}`,
      dataBR ? `Dia de preferência: ${dataBR}` : null,
      values.period ? `Período: ${values.period}` : null,
      values.notes ? `` : null,
      values.notes || null,
    ]
      .filter((line) => line !== null)
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
    `min-h-[48px] w-full rounded-lg border bg-marfim-50 px-4 py-3 text-[15px] text-noite-900
     transition-colors duration-200 placeholder:text-noite-400/70 focus:outline-none
     ${
       errors[field]
         ? 'border-red-600 focus:border-red-700'
         : 'border-marfim-300 focus:border-noite-900'
     }`;

  /** Mensagem de erro anunciada por leitores de tela. */
  const fieldError = (field) =>
    errors[field] ? (
      <p
        id={`${field}-erro`}
        role="alert"
        className="mt-2 flex items-start gap-1.5 text-[13px] font-semibold text-red-700"
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
    <section id="contato" aria-labelledby="contato-titulo" className="section bg-marfim-100">
      <div className="container-x">
        <SectionHeading
          id="contato-titulo"
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* Formulário */}
          <Reveal className="min-w-0">
            <form
              ref={formRef}
              noValidate
              onSubmit={handleSubmit}
              className="rounded-lg border border-marfim-300 bg-marfim-50 p-7 shadow-soft sm:p-9"
            >
              <p className="text-sm text-noite-400">
                Campos com <span className="font-semibold text-red-700">*</span> são obrigatórios.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 [&>div]:min-w-0">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-noite-800">
                    Seu nome <span className="text-red-700">*</span>
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
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-noite-800">
                    WhatsApp <span className="text-red-700">*</span>
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

                <div className="sm:col-span-2">
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-noite-800"
                  >
                    Serviço <span className="text-red-700">*</span>
                  </label>
                  <select
                    {...a11yProps('service')}
                    onChange={(e) => setValue('service', e.target.value)}
                    className={`${fieldClass('service')} cursor-pointer`}
                  >
                    <option value="">Selecione o serviço</option>
                    {contact.subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {fieldError('service')}
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block text-sm font-semibold text-noite-800">
                    Dia de preferência{' '}
                    <span className="font-normal text-noite-400">(opcional)</span>
                  </label>
                  <input
                    {...a11yProps('date')}
                    type="date"
                    min={today()}
                    onChange={(e) => setValue('date', e.target.value)}
                    className={`${fieldClass('date')} tnum cursor-pointer`}
                  />
                  {fieldError('date')}
                </div>

                <div>
                  <label
                    htmlFor="period"
                    className="mb-2 block text-sm font-semibold text-noite-800"
                  >
                    Período <span className="font-normal text-noite-400">(opcional)</span>
                  </label>
                  <select
                    {...a11yProps('period')}
                    onChange={(e) => setValue('period', e.target.value)}
                    className={`${fieldClass('period')} cursor-pointer`}
                  >
                    <option value="">Tanto faz</option>
                    {contact.periods.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-noite-800">
                    Alguma observação?{' '}
                    <span className="font-normal text-noite-400">(opcional)</span>
                  </label>
                  <textarea
                    {...a11yProps('notes')}
                    rows={4}
                    placeholder="Ex.: cabelo com química anterior, alergia a algum produto, quero mudar de cor mas não sei para qual."
                    onChange={(e) => setValue('notes', e.target.value)}
                    className={`${fieldClass('notes')} resize-y`}
                  />
                  <p className="mt-2 text-[13px] text-noite-400">
                    Quanto mais contexto, melhor conseguimos separar o tempo certo para você.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="consent"
                    className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-noite-500"
                  >
                    <input
                      {...a11yProps('consent')}
                      type="checkbox"
                      checked={values.consent}
                      onChange={(e) => setValue('consent', e.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-marfim-400
                                 accent-noite-900"
                    />
                    <span>
                      Concordo com o uso dos meus dados para retorno deste contato.{' '}
                      <span className="text-red-700">*</span>
                      <span className="mt-1 block text-[13px] text-noite-400">
                        {contact.privacyNote}
                      </span>
                    </span>
                  </label>
                  {fieldError('consent')}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" disabled={sending} className="btn-primary sm:w-auto">
                  {sending ? 'Abrindo o WhatsApp…' : 'Enviar pedido'}
                  {!sending && <Send size={16} aria-hidden />}
                </button>

                {/* Confirmação anunciada sem roubar o foco da visitante */}
                <p
                  aria-live="polite"
                  className={`flex items-center gap-2 text-sm font-semibold text-green-800 transition-opacity duration-300 ${
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
            <div className="on-dark flex h-full flex-col gap-6 rounded-lg bg-noite-900 p-7 text-marfim-100 shadow-soft-lg sm:p-8">
              <div>
                <h3 className="font-display text-2xl font-medium text-marfim-50">
                  Prefere falar agora?
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-marfim-200">
                  Escolha o canal que for mais confortável para você.
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[64px] items-center gap-4 rounded-lg border border-marfim-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <WhatsAppGlyph size={22} className="shrink-0 text-champanhe-300" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-champanhe-300">
                      WhatsApp
                    </span>
                    <span className="tnum block truncate font-semibold text-marfim-50">
                      {business.whatsappLabel}
                    </span>
                  </span>
                </a>

                <a
                  href={business.phoneHref}
                  className="flex min-h-[64px] items-center gap-4 rounded-lg border border-marfim-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <Phone size={22} className="shrink-0 text-champanhe-300" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-champanhe-300">
                      Telefone
                    </span>
                    <span className="tnum block truncate font-semibold text-marfim-50">
                      {business.phoneLabel}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${business.email}`}
                  className="flex min-h-[64px] items-center gap-4 rounded-lg border border-marfim-50/20
                             bg-white/[0.07] px-5 py-4 transition-colors duration-200 hover:bg-white/[0.14]"
                >
                  <Mail size={22} className="shrink-0 text-champanhe-300" aria-hidden />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-widest text-champanhe-300">
                      E-mail
                    </span>
                    <span className="block truncate font-semibold text-marfim-50">
                      {business.email}
                    </span>
                  </span>
                </a>
              </div>

              <div className="flex items-start gap-3 border-t border-marfim-50/15 pt-6 text-[14px] text-marfim-200">
                <Clock size={17} className="mt-0.5 shrink-0 text-champanhe-300" aria-hidden />
                <span>
                  Atendimento de {business.hours[0].day.toLowerCase()}, {business.hours[0].time}.
                  Mensagens fora do horário são respondidas no próximo dia de funcionamento.
                </span>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-2">
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram do salão"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border
                             border-marfim-50/20 text-marfim-100 transition-colors duration-200 hover:bg-white/15"
                >
                  <Instagram size={18} aria-hidden />
                </a>
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook do salão"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border
                             border-marfim-50/20 text-marfim-100 transition-colors duration-200 hover:bg-white/15"
                >
                  <Facebook size={18} aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
