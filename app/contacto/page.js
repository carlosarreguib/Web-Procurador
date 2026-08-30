import { Phone, Mail, MapPin, AlarmClock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/site-config';

export const metadata = {
  title: 'Contacto',
  description:
    'Contacte con nuestro despacho de procurador en Barcelona: teléfono, email y formulario directo. Atención a urgencias procesales y de plazos.',
  alternates: {
    canonical: `${siteConfig.url}/contacto`,
  },
  openGraph: {
    title: `Contacto | ${siteConfig.name}`,
    description:
      'Contacte con nuestro despacho de procurador en Barcelona: teléfono, email y formulario directo.',
    url: `${siteConfig.url}/contacto`,
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Dirección',
    value: `${siteConfig.streetAddress}, ${siteConfig.addressLocality}`,
  },
];

export default function ContactoPage() {
  return (
    <>
      <section className="border-b border-graphite/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">Contacto</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl text-graphite">
            Hablemos de su procedimiento
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite/70">
            Estamos a su disposición para atender consultas de particulares,
            empresas y despachos de abogados en toda la provincia de Barcelona.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div className="rounded-sm border border-bronze/30 bg-bronze/5 p-6">
              <div className="flex items-center gap-2 text-bronze">
                <AlarmClock className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-serif text-lg">Urgencias Procesales</h2>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-graphite/70">
                Ante un plazo perentorio o una notificación urgente, contacte
                directamente por teléfono o WhatsApp para una atención
                inmediata.
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon className="mt-1 h-5 w-5 text-bronze" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-graphite/50">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-graphite hover:text-bronze">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-graphite">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ContactForm title="Formulario de contacto" context="Página de Contacto" />
        </div>
      </section>
    </>
  );
}
