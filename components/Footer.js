import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { judicialDistricts } from '@/lib/judicial-districts';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite/10 bg-graphite text-ivory/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-serif text-lg text-ivory">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ivory/60">
            {siteConfig.tagline}. {siteConfig.collegiateNumber}.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wide text-bronze">Despacho</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/servicios" className="hover:text-bronze">Servicios Procesales</Link></li>
            <li><Link href="/sobre-mi" className="hover:text-bronze">El Despacho</Link></li>
            <li><Link href="/partidos-judiciales" className="hover:text-bronze">Partidos Judiciales</Link></li>
            <li><Link href="/contacto" className="hover:text-bronze">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wide text-bronze">Partidos Judiciales</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {judicialDistricts.slice(0, 5).map((district) => (
              <li key={district.slug}>
                <Link href={`/partidos-judiciales/${district.slug}`} className="hover:text-bronze">
                  Procurador en {district.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wide text-bronze">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-ivory/60">
            <li>{siteConfig.streetAddress}, {siteConfig.addressLocality}</li>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-bronze">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-bronze">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 py-6 text-center text-xs text-ivory/40">
        © {year} {siteConfig.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
