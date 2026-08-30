import { ShieldCheck, Scale, MessageSquare, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'El Despacho',
  description:
    'Conozca el despacho de procurador en Barcelona: trayectoria profesional, rigor técnico y comunicación ágil con el abogado en cada procedimiento.',
  alternates: {
    canonical: `${siteConfig.url}/sobre-mi`,
  },
  openGraph: {
    title: `El Despacho | ${siteConfig.name}`,
    description:
      'Conozca el despacho de procurador en Barcelona: trayectoria profesional, rigor técnico y comunicación ágil con el abogado en cada procedimiento.',
    url: `${siteConfig.url}/sobre-mi`,
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Rigor Técnico',
    description:
      'Cada escrito, notificación y plazo se gestiona con precisión, minimizando riesgos procesales para el cliente y su letrado.',
  },
  {
    icon: MessageSquare,
    title: 'Comunicación Ágil',
    description:
      'Coordinación constante y directa con el abogado director, manteniéndole informado de cada actuación en tiempo real.',
  },
  {
    icon: Clock,
    title: 'Disponibilidad',
    description:
      'Atención cercana para resolver incidencias de última hora relacionadas con plazos y trámites urgentes.',
  },
  {
    icon: Scale,
    title: 'Independencia Profesional',
    description:
      'Actuación conforme a la deontología profesional del procurador, con imparcialidad y respeto absoluto al secreto profesional.',
  },
];

export default function SobreMiPage() {
  return (
    <>
      <section className="border-b border-graphite/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">El Despacho</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-graphite">
            Un procurador al servicio de su procedimiento
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/70">
            Ejerzo como Procurador de los Tribunales en Barcelona, representando
            a particulares, empresas y despachos de abogados ante los distintos
            partidos judiciales de la provincia. Mi labor se centra en aportar
            seguridad procesal: que ningún plazo se pierda y que cada trámite
            llegue a su destino en tiempo y forma.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 text-sm leading-relaxed text-graphite/70">
            <h2 className="font-serif text-2xl text-graphite">Trayectoria</h2>
            <p>
              {siteConfig.collegiateNumber}. A lo largo de mi ejercicio
              profesional he prestado servicio a despachos de abogados,
              empresas y particulares en procedimientos civiles, mercantiles y
              sociales, actuando ante los principales juzgados de Barcelona y
              su área metropolitana.
            </p>
            <p>
              Entiendo la figura del procurador como el nexo imprescindible
              entre el letrado y el órgano judicial: quien garantiza que la
              estrategia jurídica diseñada por el abogado se traduzca en una
              tramitación procesal sin fisuras, atenta a cada plazo y cada
              notificación.
            </p>
            <p>
              Trabajo con despachos de fuera de Barcelona mediante
              sustituciones y cumplimentación de exhortos, ofreciendo la misma
              atención y rigor que en los asuntos propios.
            </p>
          </div>

          <div className="rounded-sm border border-graphite/10 bg-white/60 p-8">
            <h3 className="font-serif text-lg text-graphite">Datos del despacho</h3>
            <dl className="mt-4 space-y-3 text-sm text-graphite/70">
              <div>
                <dt className="text-xs uppercase tracking-wide text-bronze">Colegiación</dt>
                <dd>{siteConfig.collegiateNumber}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-bronze">Ámbito</dt>
                <dd>Provincia de Barcelona</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-bronze">Email</dt>
                <dd>{siteConfig.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-bronze">Teléfono</dt>
                <dd>{siteConfig.phoneDisplay}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-serif text-3xl text-graphite">Valores del despacho</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title}>
                <Icon className="h-6 w-6 text-bronze" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg text-graphite">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
