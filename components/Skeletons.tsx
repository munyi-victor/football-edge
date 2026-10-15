export function MatchCardSkeleton() {
  return (
    <div className="card flex flex-col gap-4 p-4 sm:p-5">
      <div className="flex justify-between">
        <div className="skeleton h-5 w-24" />
        <div className="skeleton h-5 w-12" />
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="skeleton h-10 w-10 rounded-full" />
        <div className="skeleton h-3 w-6" />
        <div className="skeleton h-10 w-10 rounded-full" />
      </div>
      <div className="skeleton h-9 w-full" />
    </div>
  );
}

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-pitch-border py-16 text-center">
      <p className="font-display text-base font-semibold text-ink-light">{title}</p>
      <p className="max-w-sm text-sm text-ink-muted">{description}</p>
    </div>
  );
}
