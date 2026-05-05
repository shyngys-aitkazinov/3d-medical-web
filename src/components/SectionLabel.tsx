export function SectionLabel({
  number,
  kicker,
  title,
}: {
  number: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-14">
      <div className="mb-6 flex items-baseline gap-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-50/60">
        <span className="text-accent">{number}</span>
        <span className="h-px w-10 bg-ink-50/30" />
        <span>{kicker}</span>
      </div>
      <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tightest text-ink-50 md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
