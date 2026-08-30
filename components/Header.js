'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Scale } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/sobre-mi', label: 'El Despacho' },
  { href: '/partidos-judiciales', label: 'Partidos Judiciales' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-graphite/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Scale className="h-6 w-6 text-bronze" aria-hidden="true" />
          <span className="font-serif text-lg text-graphite">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-graphite/80 transition-colors hover:text-bronze"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="text-graphite md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-graphite/10 bg-ivory md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-graphite/5 py-3 text-sm text-graphite/80 last:border-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
