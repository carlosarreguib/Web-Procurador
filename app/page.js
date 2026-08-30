import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Clock, Gavel, FileText, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import JudicialDistrictCard from '@/components/JudicialDistrictCard';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';
import { judicialDistricts } from '@/lib/judicial-districts';

export const metadata = {
  title: `${siteConfig.tagline} | Representación Procesal en Barcelona`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

const services = [
  {
    title: 'Representación Procesal',
    description:
      'Actuación ante juzgados y tribunales en su nombre, garantizando el correcto desarrollo del procedimiento en cada instancia.',
  },
  {
    title: 'Gestión de Notificaciones y Plazos',
    description:
      'Control diario de notificaciones judiciales y cumplimiento riguroso de plazos procesales para evitar preclusiones.',
  },
  {
    title: 'Ejecuciones de Sentencia',
    description:
      'Impulso de la ejecución de resoluciones judiciales firmes, incluyendo embargos y diligencias de averiguación patrimonial.',
  },
  {
    title: 'Subastas Judiciales',
    description:
      'Asistencia y representación en procedimientos de subasta judicial de bienes muebles e inmuebles.',
  },
  {
    title: 'Exhortos y Sustituciones',
    description:
      'Cumplimentación de exhortos entre partidos judiciales y sustituciones para despachos de otras provincias.',
  },
  {
    title: 'Coordinación con el Letrado',
    description:
      'Comunicación ágil y constante con el abogado director para una estrategia procesal coherente y eficaz.',
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: siteConfig.collegiateNumber,
    description: 'Colegiación vigente y ejercicio activo ante los tribunales de Barcelona.',
  },
  {
    icon: Clock,
    title: 'Respuesta Ágil',
    description: 'Seguimiento diario de plazos y notificaciones en todos los partidos judiciales cubiertos.',
  },
  {
    icon: Gavel,
    title: 'Cobertura Provincial',
    description: 'Presencia procesal en los principales partidos judiciales de la provincia de Barcelona.',
  },
  {
    icon: FileText,
    title: 'Rigor Documental',
    description: 'Gestión meticulosa de escritos, exhortos y documentación procesal en cada expediente.',
  },
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.streetAddress,
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      postalCode: siteConfig.postalCode,
      addressCountry: siteConfig.country,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Provincia de Barcelona',
    },
    priceRange: '€€',
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="border-b border-graphite/10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">
              Procurador de los Tribunales · Barcelona
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-graphite sm:text-5xl">
              Representación procesal rigurosa en toda la provincia de Barcelona
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite/70">
              Gestiono con precisión los plazos, notificaciones y trámites de sus
              procedimientos judiciales, permitiendo a su abogado concentrarse en
              la estrategia jurídica mientras el proceso avanza sin incidencias.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 rounded-sm bg-graphite px-7 py-3 text-sm font-medium uppercase tracking-wide text-ivory transition-colors hover:bg-bronze"
              >
                Solicitar información
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/partidos-judiciales"
                className="inline-flex items-center gap-2 rounded-sm border border-graphite/20 px-7 py-3 text-sm font-medium uppercase tracking-wide text-graphite transition-colors hover:border-bronze hover:text-bronze"
              >
                Ver partidos judiciales
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-graphite/10">
            <Image
              src="/images/sala-juicio.jpg"
              alt="Sala de vistas de un juzgado en Barcelona"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-graphite">Servicios Procesales</h2>
          <p className="mt-3 text-sm text-graphite/60">
            Un acompañamiento procesal completo, desde la admisión de la demanda
            hasta la ejecución de la sentencia.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/servicios" className="text-sm font-medium text-bronze hover:underline">
            Ver todos los servicios procesales →
          </Link>
        </div>
      </section>

      {/* Partidos judiciales */}
      <section className="border-y border-graphite/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-graphite">
              Partidos Judiciales Cubiertos
            </h2>
            <p className="mt-3 text-sm text-graphite/60">
              Representación procesal directa en los principales partidos
              judiciales de la provincia de Barcelona.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {judicialDistricts.map((district) => (
              <JudicialDistrictCard key={district.slug} district={district} />
            ))}
          </div>
        </div>
      </section>

      {/* Confianza / E-E-A-T */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-graphite">Un despacho de confianza</h2>
          <p className="mt-3 text-sm text-graphite/60">
            Trayectoria, rigor técnico y disponibilidad para abogados y
            particulares en cada fase del procedimiento.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <Icon className="h-6 w-6 text-bronze" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg text-graphite">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite/60">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="border-t border-graphite/10 bg-white/40">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-graphite">Hablemos de su caso</h2>
            <p className="mt-3 text-sm text-graphite/60">
              Respuesta en el menor tiempo posible para consultas urgentes de plazos procesales.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm title="Solicite información" context="Formulario de Inicio" />
          </div>
        </div>
      </section>
    </>
  );
}
