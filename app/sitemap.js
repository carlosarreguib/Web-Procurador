import { siteConfig } from '@/lib/site-config';
import { judicialDistricts } from '@/lib/judicial-districts';

export default function sitemap() {
  const staticRoutes = ['', '/servicios', '/sobre-mi', '/partidos-judiciales', '/contacto'].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    })
  );

  const districtRoutes = judicialDistricts.map((district) => ({
    url: `${siteConfig.url}/partidos-judiciales/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...districtRoutes];
}
