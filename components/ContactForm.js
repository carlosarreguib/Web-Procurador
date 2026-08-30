'use client';

import { useState } from 'react';
import { siteConfig } from '@/lib/site-config';

export default function ContactForm({ title = 'Escríbanos', context = '' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const subject = encodeURIComponent(
    context ? `Consulta desde la web · ${context}` : 'Consulta desde la web'
  );
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`
  );
  const mailtoHref = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

  return (
    <div className="rounded-sm border border-graphite/10 bg-white/60 p-8">
      <h3 className="font-serif text-2xl text-graphite">{title}</h3>
      <p className="mt-2 text-sm text-graphite/60">
        Complete el formulario y se abrirá su cliente de correo con el mensaje
        listo para enviar a {siteConfig.email}.
      </p>

      <form
        action={`mailto:${siteConfig.email}`}
        method="post"
        encType="text/plain"
        className="mt-6 space-y-4"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-xs uppercase tracking-wide text-graphite/60">
              Nombre y apellidos
            </label>
            <input
              id="name"
              name="Nombre"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full rounded-sm border border-graphite/20 bg-transparent px-3 py-2 text-sm text-graphite outline-none focus:border-bronze"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs uppercase tracking-wide text-graphite/60">
              Teléfono
            </label>
            <input
              id="phone"
              name="Telefono"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-sm border border-graphite/20 bg-transparent px-3 py-2 text-sm text-graphite outline-none focus:border-bronze"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-wide text-graphite/60">
            Correo electrónico
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-sm border border-graphite/20 bg-transparent px-3 py-2 text-sm text-graphite outline-none focus:border-bronze"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-xs uppercase tracking-wide text-graphite/60">
            Mensaje
          </label>
          <textarea
            id="message"
            name="Mensaje"
            rows={4}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-sm border border-graphite/20 bg-transparent px-3 py-2 text-sm text-graphite outline-none focus:border-bronze"
          />
        </div>

        <a
          href={mailtoHref}
          className="inline-flex w-full items-center justify-center rounded-sm bg-graphite px-6 py-3 text-sm font-medium uppercase tracking-wide text-ivory transition-colors hover:bg-bronze sm:w-auto"
        >
          Enviar consulta
        </a>
      </form>
    </div>
  );
}
