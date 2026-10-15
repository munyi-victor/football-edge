"use client";

import { cn, bookmakerAccent } from "@/lib/utils";

export default function BookmakerCard({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  const accent = bookmakerAccent[name] ?? "#22B562";
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-transparent text-pitch-bg"
          : "border-pitch-border bg-pitch-elevated text-ink-muted hover:text-ink-light"
      )}
      style={active ? { backgroundColor: accent } : undefined}
      aria-pressed={active}
    >
      {name}
    </button>
  );
}
