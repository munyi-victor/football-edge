"use client";

import { Calendar } from "lucide-react";

export default function DateFilter({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-2 rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2 text-sm text-ink-muted">
      <Calendar className="h-4 w-4 text-edge-green" />
      <span className="hidden sm:inline">Date</span>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent text-ink-light outline-none [color-scheme:dark]"
      />
    </label>
  );
}
