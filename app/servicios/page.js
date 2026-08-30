import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Servicios Procesales',
  description:
    'Representación procesal, gestión de notificaciones y plazos, ejecuciones de sentencia, subastas judiciales y cumplimentación de exhortos en Barcelona.',
  alternates: {
    canonical: `${siteConfig.url}/servicios`,
  },
  openGraph: {
    title: `Servicios Procesales | ${siteConfig.name}`,
    description:
      'Representación procesal, gestión de notificaciones y plazos, ejecuciones de sentencia, subastas judiciales y cumplimentación de exhortos en Barcelona.',
    url: `${siteConfig.url}/servicios`,
  },
};

const serviceSections = [
  {
    title: 'Representación Procesal',
    description:
      'Actúo en su nombre ante juzgados y tribunales de cualquier orden jurisdiccional (civil, mercantil, social o contencioso-administrativo), asumiendo la representación técnica del procedimiento en coordinación permanente con el letrado director.',
  },
  {
    title: 'Gestión de Notificaciones y Plazos',
    description:
      'Recepción, control y traslado inmediato de todas las notificaciones judiciales a través de LexNET, garantizando el cumplimiento estricto de los plazos procesales y evitando preclusiones que puedan perjudicar el procedimiento.',
  },
  {
    title: 'Ejecuciones de Sentencia',
    description:
      'Impulso procesal de la fase de ejecución: presentación de la demanda ejecutiva, solicitud de embargos, diligencias de averiguación patrimonial y seguimiento de todo el proceso hasta la satisfacción del derecho reconocido.',
  },
  {
    title: 'Subastas Judiciales',
    description:
      'Representación y asistencia en procedimientos de subasta judicial de bienes muebles e inmuebles, incluyendo la presentación de pujas y el seguimiento de los trámites posteriores a la adjudicación.',
  },
  {
    title: 'Cumplimentación de Exhortos',
    description:
      'Tramitación de exhortos y comisiones rogatorias entre distintos partidos judiciales, actuando como procurador receptor o exhortante según las necesidades del procedimiento.',
  },
  {
    title: 'Sustituciones',
    description:
      'Sustitución de procuradores de otras localidades o provincias en actuaciones puntuales ante los juzgados de Barcelona y su área metropolitana, con la misma diligencia que en los asuntos propios.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <section className="border-b border-graphite/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Servicios</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-graphite">
            Servicios Procesales en Barcelona
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/70">
            Un acompañamiento procesal integral, desde la presentación de la
            demanda hasta la ejecución de la sentencia, en cualquiera de los
            partidos judiciales de la provincia de Barcelona.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="space-y-12">
          {serviceSections.map((service, index) => (
            <div
              key={service.title}
              className="grid gap-6 border-b border-graphite/10 pb-12 last:border-none sm:grid-cols-[auto_1fr]"
            >
              <span className="font-serif text-3xl text-bronze">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="font-serif text-2xl text-graphite">{service.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite/70">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-white/40">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-graphite">¿Necesita representación procesal?</h2>
            <p className="mt-3 text-sm text-graphite/60">
              Cuéntenos su caso y le responderemos a la mayor brevedad.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm title="Consulta sobre servicios" context="Página de Servicios" />
          </div>
        </div>
      </section>
    </>
  );
}
