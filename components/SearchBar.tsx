"use client";

import { Search } from "lucide-react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search teams or leagues…",
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-1 items-center gap-2 rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2 text-sm">
      <Search className="h-4 w-4 shrink-0 text-ink-faint" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-ink-light placeholder:text-ink-faint outline-none"
        aria-label="Search matches"
      />
    </label>
  );
}
