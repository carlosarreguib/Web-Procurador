import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Landmark } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';
import { judicialDistricts, getJudicialDistrictBySlug } from '@/lib/judicial-districts';

export function generateStaticParams() {
  return judicialDistricts.map((district) => ({ slug: district.slug }));
}

export function generateMetadata({ params }) {
  const district = getJudicialDistrictBySlug(params.slug);
  if (!district) return {};

  return {
    title: district.metaTitle,
    description: district.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/partidos-judiciales/${district.slug}`,
    },
    openGraph: {
      title: district.metaTitle,
      description: district.metaDescription,
      url: `${siteConfig.url}/partidos-judiciales/${district.slug}`,
    },
  };
}

export default function JudicialDistrictPage({ params }) {
  const district = getJudicialDistrictBySlug(params.slug);
  if (!district) notFound();

  const nearby = district.nearbyDistricts
    .map((slug) => getJudicialDistrictBySlug(slug))
    .filter(Boolean);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `${siteConfig.name} · Procurador en ${district.name}`,
    description: district.metaDescription,
    url: `${siteConfig.url}/partidos-judiciales/${district.slug}`,
    email: siteConfig.email,
    telephone: siteConfig.phoneHref,
    areaServed: {
      '@type': 'City',
      name: district.name,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.addressLocality,
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.country,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="border-b border-graphite/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">
            Partido Judicial de {district.name}
          </p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-graphite">
            Procurador en {district.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/70">
            {district.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-sm bg-graphite px-7 py-3 text-sm font-medium uppercase tracking-wide text-ivory transition-colors hover:bg-bronze"
            >
              Consultar mi caso
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <Landmark className="h-5 w-5 text-bronze" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-graphite">Juzgados de la sede</h2>
            </div>
            <ul className="mt-6 space-y-3">
              {district.courts.map((court) => (
                <li key={court} className="flex items-start gap-3 text-sm text-graphite/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  {court}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-bronze" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-graphite">
                Servicios en {district.name}
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {district.services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm text-graphite/70">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="border-t border-graphite/10 bg-white/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-serif text-xl text-graphite">Partidos judiciales cercanos</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  href={`/partidos-judiciales/${item.slug}`}
                  className="rounded-sm border border-graphite/10 px-4 py-2 text-sm text-graphite/70 transition-colors hover:border-bronze hover:text-bronze"
                >
                  Procurador en {item.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-graphite/10">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-graphite">
              ¿Necesita un procurador en {district.name}?
            </h2>
            <p className="mt-3 text-sm text-graphite/60">
              Envíe su consulta y le atenderemos con la mayor celeridad.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm
              title={`Contacto · Partido judicial de ${district.name}`}
              context={`Partido Judicial de ${district.name}`}
            />
          </div>
        </div>
      </section>
    </>
  );
}
