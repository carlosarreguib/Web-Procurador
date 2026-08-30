export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-sm border border-graphite/10 bg-white/60 p-8 transition-colors hover:border-bronze/50">
      <h3 className="font-serif text-xl text-graphite">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-graphite/70">{description}</p>
    </div>
  );
}
