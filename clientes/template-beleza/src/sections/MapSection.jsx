import { useState } from 'react';
import { Bus, Clock, Map as MapIcon, MapPin, Navigation } from 'lucide-react';
import { business } from '../data/content.js';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';

const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(business.mapQuery)}&z=15&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.mapQuery)}`;
const routeLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.mapQuery)}`;

/**
 * Localização. O mapa do Google só é carregado quando a visitante pede
 * ("click-to-load"): um iframe de terceiro custa centenas de KB e requisições
 * de rastreamento em toda visita, mesmo para quem nunca vai olhar o mapa.
 * O espaço é reservado antes, então não há salto de layout.
 */
export default function MapSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="localizacao" aria-labelledby="localizacao-titulo" className="section bg-marfim-50">
      <div className="container-x">
        <SectionHeading
          id="localizacao-titulo"
          eyebrow="Onde estamos"
          title="Fácil de chegar, difícil de esquecer"
          description="Coloque aqui o endereço real do salão. Uma referência de acesso — ponto conhecido, estacionamento, ônibus que passa perto — reduz a insegurança de quem vai pela primeira vez."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          {/* Mapa */}
          <Reveal className="order-2 min-w-0 lg:order-1">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-lg border border-marfim-300 bg-noite-900 shadow-soft lg:min-h-[440px]">
              {loaded ? (
                <iframe
                  title={`Mapa da localização de ${business.name}`}
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8 text-center">
                  {/* Malha decorativa lembrando um mapa */}
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-[0.13]"
                    style={{
                      backgroundImage:
                        'linear-gradient(#CFA97B 1px, transparent 1px), linear-gradient(90deg, #CFA97B 1px, transparent 1px)',
                      backgroundSize: '46px 46px',
                    }}
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-noite-950/60 via-transparent to-noite-950/70"
                  />

                  <MapIcon size={30} className="relative text-champanhe-300" aria-hidden />

                  <p className="relative max-w-sm text-[15px] leading-relaxed text-marfim-200">
                    O mapa é carregado só quando você pede — assim a página abre mais rápido para
                    todo mundo.
                  </p>

                  <button type="button" onClick={() => setLoaded(true)} className="btn-onDark relative">
                    <MapPin size={16} aria-hidden />
                    Carregar mapa
                  </button>
                </div>
              )}
            </div>
          </Reveal>

          {/* Endereço, acesso e horários */}
          <Reveal delay={90} className="order-1 min-w-0 lg:order-2">
            <div className="flex h-full flex-col gap-7 rounded-lg border border-marfim-300 bg-marfim-100 p-7 shadow-soft sm:p-8">
              <div>
                <h3 className="flex items-center gap-2.5 font-display text-xl font-medium text-noite-900">
                  <MapPin size={19} className="text-champanhe-600" aria-hidden />
                  Endereço
                </h3>
                <address className="mt-3 not-italic leading-relaxed text-noite-500">
                  {business.street}
                  <br />
                  {business.neighborhood} — {business.city}/{business.state}
                  <br />
                  <span className="tnum">CEP {business.zip}</span>
                </address>
              </div>

              <div>
                <h3 className="flex items-center gap-2.5 font-display text-xl font-medium text-noite-900">
                  <Bus size={19} className="text-champanhe-600" aria-hidden />
                  Como chegar
                </h3>
                <p className="mt-3 leading-relaxed text-noite-500">
                  Descreva o acesso em uma frase. Ex.: a 000m do [PONTO DE REFERÊNCIA], com
                  estacionamento conveniado ao lado.
                </p>
              </div>

              <div>
                <h3 className="flex items-center gap-2.5 font-display text-xl font-medium text-noite-900">
                  <Clock size={19} className="text-champanhe-600" aria-hidden />
                  Horários
                </h3>
                <dl className="mt-3 divide-y divide-marfim-200">
                  {business.hours.map((h) => (
                    <div key={h.day} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-[15px] text-noite-500">{h.day}</dt>
                      <dd className="tnum text-[15px] font-semibold text-noite-900">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Empilhados: lado a lado, os rótulos em caixa alta não cabem na
                  coluna estreita do mapa em telas médias. */}
              <div className="mt-auto flex flex-col gap-2.5 pt-1">
                <a
                  href={routeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                >
                  <Navigation size={16} aria-hidden />
                  Traçar rota
                </a>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1"
                >
                  Ver no Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
