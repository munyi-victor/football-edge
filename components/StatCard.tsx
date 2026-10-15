export default function StatCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: string | number;
  suffix?: string;
}) {
  return (
    <div className="card px-4 py-4 text-center">
      <div className="font-display text-2xl font-bold text-ink-light">
        {value}
        {suffix && <span className="text-base text-ink-muted">{suffix}</span>}
      </div>
      <div className="mt-1 text-xs text-ink-muted">{label}</div>
    </div>
  );
}
