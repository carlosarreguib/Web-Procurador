import JudicialDistrictCard from '@/components/JudicialDistrictCard';
import { siteConfig } from '@/lib/site-config';
import { judicialDistricts } from '@/lib/judicial-districts';

export const metadata = {
  title: 'Partidos Judiciales en Barcelona',
  description:
    'Directorio de partidos judiciales de la provincia de Barcelona atendidos por nuestro despacho de procurador: Barcelona, Badalona, Sabadell, Terrassa y más.',
  alternates: {
    canonical: `${siteConfig.url}/partidos-judiciales`,
  },
  openGraph: {
    title: `Partidos Judiciales en Barcelona | ${siteConfig.name}`,
    description:
      'Directorio de partidos judiciales de la provincia de Barcelona atendidos por nuestro despacho de procurador.',
    url: `${siteConfig.url}/partidos-judiciales`,
  },
};

export default function PartidosJudicialesPage() {
  return (
    <>
      <section className="border-b border-graphite/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Cobertura Provincial</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-graphite">
            Partidos Judiciales Atendidos en la Provincia de Barcelona
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/70">
            Prestamos representación procesal directa en los principales
            partidos judiciales de Barcelona y su área metropolitana.
            Seleccione su localidad para conocer los juzgados y servicios
            disponibles en cada sede.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {judicialDistricts.map((district) => (
            <JudicialDistrictCard key={district.slug} district={district} />
          ))}
        </div>
      </section>
    </>
  );
}
