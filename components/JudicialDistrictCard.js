import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function JudicialDistrictCard({ district }) {
  return (
    <Link
      href={`/partidos-judiciales/${district.slug}`}
      className="group flex items-center justify-between rounded-sm border border-graphite/10 bg-white/60 p-6 transition-colors hover:border-bronze/50"
    >
      <div>
        <h3 className="font-serif text-lg text-graphite">{district.name}</h3>
        <p className="mt-1 text-xs uppercase tracking-wide text-bronze">
          Partido judicial
        </p>
      </div>
      <ArrowUpRight
        className="h-5 w-5 text-graphite/40 transition-colors group-hover:text-bronze"
        aria-hidden="true"
      />
    </Link>
  );
}
