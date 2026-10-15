"use client";

import { useMemo, useState } from "react";
import { matches, competitions } from "@/data/matches";
import MatchCard from "@/components/MatchCard";
import LeagueFilter from "@/components/LeagueFilter";
import DateFilter from "@/components/DateFilter";
import SearchBar from "@/components/SearchBar";
import { EmptyState } from "@/components/Skeletons";

export default function MatchesPage() {
  const [league, setLeague] = useState<string>("All");
  const [date, setDate] = useState<string>("");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      const matchesLeague = league === "All" || m.competition === league;
      const matchesDate = !date || m.date === date;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        m.homeTeam.name.toLowerCase().includes(q) ||
        m.awayTeam.name.toLowerCase().includes(q) ||
        m.competition.toLowerCase().includes(q);
      return matchesLeague && matchesDate && matchesQuery;
    });
  }, [league, date, query]);

  return (
    <div className="container-edge py-10">
      <h1 className="font-display text-2xl font-bold text-ink-light sm:text-3xl">Today&apos;s Football Matches</h1>
      <p className="mt-1 text-sm text-ink-muted">Browse fixtures across the top European leagues.</p>

      <div className="mt-6 flex flex-col gap-3">
        <LeagueFilter options={competitions} active={league} onChange={setLeague} />
        <div className="flex flex-col gap-3 sm:flex-row">
          <SearchBar value={query} onChange={setQuery} />
          <DateFilter value={date} onChange={setDate} />
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <EmptyState
            title="No matches found"
            description="Try a different league, date or search term."
          />
        ) : (
          filtered.map((match) => <MatchCard key={match.id} match={match} />)
        )}
      </div>
    </div>
  );
}
