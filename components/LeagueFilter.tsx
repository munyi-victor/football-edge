"use client";

import { cn } from "@/lib/utils";

export default function LeagueFilter({
  options,
  active,
  onChange,
}: {
  options: readonly string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Filter by competition">
      {options.map((opt) => (
        <button
          key={opt}
          role="tab"
          aria-selected={active === opt}
          onClick={() => onChange(opt)}
          className={cn(
            "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active === opt
              ? "border-edge-green bg-edge-green/15 text-edge-green"
              : "border-pitch-border bg-pitch-elevated text-ink-muted hover:text-ink-light"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
