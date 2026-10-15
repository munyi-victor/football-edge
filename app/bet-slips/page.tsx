"use client";

import { useMemo, useState } from "react";
import { AlertTriangle } from "lucide-react";
import { getAllBetslips } from "@/lib/utils";
import { Bookmaker } from "@/data/types";
import BetSlipCard from "@/components/BetSlipCard";
import BookmakerCard from "@/components/BookmakerCard";
import { EmptyState } from "@/components/Skeletons";

const bookmakers: Bookmaker[] = ["Betika", "SportPesa", "SportyBet", "Odibets"];

export default function BetSlipsPage() {
  const [active, setActive] = useState<Bookmaker | "All">("All");
  const slips = useMemo(() => getAllBetslips(), []);
  const filtered = active === "All" ? slips : slips.filter((s) => s.bookmaker === active);

  return (
    <div className="container-edge py-10">
      <h1 className="font-display text-2xl font-bold text-ink-light sm:text-3xl">Today&apos;s Bet Slips</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Browse available football selections and load your preferred betslip.
      </p>

      <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
        <BookmakerCard name="All" active={active === "All"} onClick={() => setActive("All")} />
        {bookmakers.map((b) => (
          <BookmakerCard key={b} name={b} active={active === b} onClick={() => setActive(b)} />
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length === 0 ? (
          <EmptyState title="No bet slips found" description="Try a different bookmaker." />
        ) : (
          filtered.map((slip) => <BetSlipCard key={slip.id} slip={slip} />)
        )}
      </div>

      <div className="mt-8 flex gap-3 rounded-card border border-edge-gold/30 bg-edge-gold/5 p-4 text-sm text-ink-muted">
        <AlertTriangle className="h-5 w-5 shrink-0 text-edge-gold" />
        Odds can change after publication. Always confirm the final odds and selections on the bookmaker&apos;s platform before placing a bet.
      </div>
    </div>
  );
}
