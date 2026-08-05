import { useRef, useState } from 'react';
import { Phone, Instagram, MapPin, ShieldCheck, Send, AlertCircle } from 'lucide-react';
import { business, practiceAreas } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import WhatsAppGlyph from '../components/WhatsAppGlyph.jsx';

const EMPTY = { nome: '', telefone: '', area: '', mensagem: '' };

function validate(values) {
  const errors = {};

  if (!values.nome.trim()) errors.nome = 'Informe o seu nome para sabermos como chamá-lo.';
  else if (values.nome.trim().length < 3) errors.nome = 'O nome parece curto demais. Confira, por favor.';

  const digits = values.telefone.replace(/\D/g, '');
  if (!digits) errors.telefone = 'Precisamos de um telefone para retornar o contato.';
  else if (digits.length < 10 || digits.length > 11)
    errors.telefone = 'Informe DDD + número, com 10 ou 11 dígitos. Ex.: (21) 99999-9999.';

  if (!values.area) errors.area = 'Escolha a área mais próxima do seu caso.';

  if (!values.mensagem.trim()) errors.mensagem = 'Conte brevemente o que aconteceu.';
  else if (values.mensagem.trim().length < 15)
    errors.mensagem = 'Detalhe um pouco mais (mínimo de 15 caracteres) para conseguirmos avaliar.';

  return errors;
}

/** Máscara de telefone brasileiro, aplicada enquanto o usuário digita. */
function maskPhone(raw) {
  const d = raw.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);

  const setField = (name) => (e) => {
    const value = name === 'telefone' ? maskPhone(e.target.value) : e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    // Revalida apenas campos já visitados — evita erro enquanto o usuário digita.
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...values, [name]: value })[name] }));
    }
  };

  // Validação no blur, não a cada tecla.
  const handleBlur = (name) => () => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ nome: true, telefone: true, area: true, mensagem: true });

    const firstError = Object.keys(found)[0];
    if (firstError) {
      // Move o foco para o primeiro campo inválido.
      formRef.current?.querySelector(`[name="${firstError}"]`)?.focus();
      return;
    }

    const texto = [
      'Olá! Vim pelo site do T&M Advogados.',
      '',
      `Nome: ${values.nome.trim()}`,
      `Telefone: ${values.telefone}`,
      `Área: ${values.area}`,
      '',
      values.mensagem.trim(),
    ].join('\n');

    window.open(`https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    setSent(true);
  };

  const fieldClass = (name) =>
    `min-h-[48px] w-full rounded-sm border bg-bone-50 px-4 py-3 text-[15px] text-ink-900
     placeholder:text-ink-400 transition-colors duration-200 focus:outline-none
     focus:ring-2 focus:ring-vinho-500/40 ${
       errors[name] && touched[name]
         ? 'border-vinho-600 focus:border-vinho-600'
         : 'border-bone-300 focus:border-ink-600'
     }`;

  const FieldError = ({ name }) =>
    errors[name] && touched[name] ? (
      <p
        id={`${name}-erro`}
        role="alert"
        className="mt-2 flex items-start gap-1.5 text-[13px] font-bold text-vinho-700"
      >
        <AlertCircle size={14} aria-hidden className="mt-0.5 shrink-0" />
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contato" className="relative overflow-hidden bg-ink-900 py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, #C8A356 0 1px, transparent 1px 88px)' }}
      />

      <div className="container-x relative">
        <SectionHeading
          tone="light"
          eyebrow="Contato"
          title="Conte o seu caso. A gente escuta."
          lead="Descreva a sua situação sem se preocupar com termos técnicos. Retornamos com uma orientação inicial sobre o que é possível fazer."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          {/* Canais diretos */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <a
                href={business.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-brass-400/30 bg-ink-800 p-6
                           transition-all duration-300 hover:-translate-y-0.5 hover:border-brass-400/70"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#25D366] text-white"
                >
                  <WhatsAppGlyph size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-widest2 text-brass-300">
                    WhatsApp — resposta mais rápida
                  </span>
                  <span className="tnum mt-1 block font-display text-xl font-semibold text-bone-50">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={60}>
              <a
                href={business.phoneHref}
                className="group flex items-center gap-4 border border-bone-50/12 bg-ink-800 p-6
                           transition-all duration-300 hover:-translate-y-0.5 hover:border-bone-50/30"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass-400/40 text-brass-300"
                >
                  <Phone size={20} strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-widest2 text-bone-200/70">
                    Telefone
                  </span>
                  <span className="tnum mt-1 block text-base font-bold text-bone-50">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={120}>
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-bone-50/12 bg-ink-800 p-6
                           transition-all duration-300 hover:-translate-y-0.5 hover:border-bone-50/30"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass-400/40 text-brass-300"
                >
                  <Instagram size={20} strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-widest2 text-bone-200/70">
                    Instagram
                  </span>
                  <span className="mt-1 block truncate text-base font-bold text-bone-50">
                    {business.instagramHandle}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={180}>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-bone-50/12 bg-ink-800 p-6
                           transition-all duration-300 hover:-translate-y-0.5 hover:border-bone-50/30"
              >
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center border border-brass-400/40 text-brass-300"
                >
                  <MapPin size={20} strokeWidth={1.75} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-bold uppercase tracking-widest2 text-bone-200/70">
                    Escritório
                  </span>
                  <span className="mt-1 block text-[15px] font-bold leading-snug text-bone-50">
                    {business.addressShort}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={240}>
              <p className="flex items-start gap-2.5 pt-2 text-[13px] leading-relaxed text-bone-200/70">
                <ShieldCheck size={16} aria-hidden className="mt-0.5 shrink-0 text-brass-400" />
                Tudo o que você contar é protegido pelo sigilo profissional do advogado, previsto no
                Estatuto da Advocacia — mesmo que não haja contratação.
              </p>
            </Reveal>
          </div>

          {/* Formulário */}
          <Reveal delay={80}>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="border border-bone-50/12 bg-bone-50 p-7 shadow-soft-lg sm:p-9"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                Enviar meu caso
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Ao enviar, abrimos o WhatsApp com a sua mensagem já preenchida. Campos marcados com{' '}
                <span aria-hidden className="font-bold text-vinho-600">
                  *
                </span>{' '}
                são obrigatórios.
              </p>

              <div className="mt-7 space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-bold text-ink-900">
                    Nome completo{' '}
                    <span aria-hidden className="text-vinho-600">
                      *
                    </span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    value={values.nome}
                    onChange={setField('nome')}
                    onBlur={handleBlur('nome')}
                    aria-invalid={Boolean(errors.nome && touched.nome)}
                    aria-describedby={errors.nome && touched.nome ? 'nome-erro' : undefined}
                    placeholder="Como podemos chamá-lo?"
                    className={`mt-2 ${fieldClass('nome')}`}
                  />
                  <FieldError name="nome" />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-bold text-ink-900">
                    Telefone / WhatsApp{' '}
                    <span aria-hidden className="text-vinho-600">
                      *
                    </span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    required
                    value={values.telefone}
                    onChange={setField('telefone')}
                    onBlur={handleBlur('telefone')}
                    aria-invalid={Boolean(errors.telefone && touched.telefone)}
                    aria-describedby={
                      errors.telefone && touched.telefone ? 'telefone-erro' : 'telefone-ajuda'
                    }
                    placeholder="(21) 99999-9999"
                    className={`tnum mt-2 ${fieldClass('telefone')}`}
                  />
                  {!(errors.telefone && touched.telefone) && (
                    <p id="telefone-ajuda" className="mt-2 text-[13px] text-ink-400">
                      Com DDD. É por aqui que retornamos.
                    </p>
                  )}
                  <FieldError name="telefone" />
                </div>

                <div>
                  <label htmlFor="area" className="block text-sm font-bold text-ink-900">
                    Área do seu caso{' '}
                    <span aria-hidden className="text-vinho-600">
                      *
                    </span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <select
                    id="area"
                    name="area"
                    required
                    value={values.area}
                    onChange={setField('area')}
                    onBlur={handleBlur('area')}
                    aria-invalid={Boolean(errors.area && touched.area)}
                    aria-describedby={errors.area && touched.area ? 'area-erro' : undefined}
                    className={`mt-2 cursor-pointer ${fieldClass('area')}`}
                  >
                    <option value="">Selecione uma área…</option>
                    {practiceAreas.map((a) => (
                      <option key={a.id} value={a.name}>
                        {a.name}
                      </option>
                    ))}
                    <option value="Outro assunto">Outro assunto / não sei dizer</option>
                  </select>
                  <FieldError name="area" />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-bold text-ink-900">
                    O que aconteceu?{' '}
                    <span aria-hidden className="text-vinho-600">
                      *
                    </span>
                    <span className="sr-only">(obrigatório)</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    value={values.mensagem}
                    onChange={setField('mensagem')}
                    onBlur={handleBlur('mensagem')}
                    aria-invalid={Boolean(errors.mensagem && touched.mensagem)}
                    aria-describedby={
                      errors.mensagem && touched.mensagem ? 'mensagem-erro' : 'mensagem-ajuda'
                    }
                    placeholder="Descreva a sua situação com as suas próprias palavras. Datas e documentos que você já tenha ajudam bastante."
                    className={`mt-2 resize-y ${fieldClass('mensagem')}`}
                  />
                  {!(errors.mensagem && touched.mensagem) && (
                    <p id="mensagem-ajuda" className="mt-2 text-[13px] text-ink-400">
                      Não precisa usar termos jurídicos.
                    </p>
                  )}
                  <FieldError name="mensagem" />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-8 w-full">
                <Send size={17} aria-hidden /> Enviar pelo WhatsApp
              </button>

              <p aria-live="polite" className="min-h-[1.25rem]">
                {sent && (
                  <span className="mt-4 block text-center text-[13px] font-bold text-brass-700">
                    Tudo certo — o WhatsApp foi aberto com a sua mensagem. Se não abriu, chame no{' '}
                    <a href={business.whatsapp} className="underline" target="_blank" rel="noopener noreferrer">
                      {business.phoneDisplay}
                    </a>
                    .
                  </span>
                )}
              </p>

              <p className="mt-5 text-[12px] leading-relaxed text-ink-400">
                O envio deste formulário não cria, por si só, relação entre advogado e cliente, nem
                configura contratação de serviços. As informações desta página têm caráter meramente
                informativo.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
