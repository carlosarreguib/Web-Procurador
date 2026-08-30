'use client';

import { siteConfig } from '@/lib/site-config';

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.386.706 4.607 1.92 6.47L4 29l7.72-1.885A11.94 11.94 0 0 0 16.001 27C22.63 27 28 21.627 28 15S22.63 3 16.001 3Zm0 21.818a9.77 9.77 0 0 1-4.98-1.363l-.357-.211-4.583 1.119 1.15-4.47-.232-.366A9.78 9.78 0 0 1 5.182 15c0-5.973 4.846-10.818 10.819-10.818S26.818 9.027 26.818 15 21.973 24.818 16.001 24.818Zm5.62-7.66c-.307-.154-1.816-.897-2.098-1-.281-.103-.486-.154-.69.154-.204.307-.792.999-.972 1.204-.179.205-.358.23-.665.077-.307-.154-1.296-.478-2.469-1.523-.913-.814-1.529-1.82-1.708-2.127-.179-.307-.019-.473.135-.626.138-.138.307-.358.46-.537.154-.18.205-.307.307-.512.103-.205.052-.384-.026-.538-.077-.154-.69-1.663-.946-2.278-.249-.598-.502-.517-.69-.527l-.588-.01c-.205 0-.538.077-.82.384-.281.307-1.075 1.05-1.075 2.56 0 1.51 1.1 2.97 1.253 3.175.154.205 2.164 3.305 5.243 4.634.732.316 1.303.505 1.748.646.734.234 1.402.201 1.93.122.589-.088 1.816-.742 2.072-1.459.256-.717.256-1.331.179-1.459-.076-.128-.281-.205-.588-.359Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const message = encodeURIComponent(siteConfig.whatsappDefaultMessage);
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
