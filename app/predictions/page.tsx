"use client";

import { useMemo, useState } from "react";
import { matches } from "@/data/matches";
import PredictionCard from "@/components/PredictionCard";
import PremiumCard from "@/components/PremiumCard";
import { cn } from "@/lib/utils";
import { EmptyState } from "@/components/Skeletons";

const tabs = ["All", "Football", "Premium"] as const;
type Tab = (typeof tabs)[number];

export default function PredictionsPage() {
  const [tab, setTab] = useState<Tab>("All");

  const items = useMemo(() => {
    const flat = matches.flatMap((m) => m.predictions.map((p) => ({ match: m, prediction: p })));
    if (tab === "Premium") return flat.filter((i) => i.prediction.isPremium);
    return flat;
  }, [tab]);

  return (
    <div className="container-edge py-10">
      <h1 className="font-display text-2xl font-bold text-ink-light sm:text-3xl">Today&apos;s Predictions</h1>
      <p className="mt-1 text-sm text-ink-muted">
        Researched selections across today&apos;s fixtures. Analysis, not guarantees.
      </p>

      <div className="mt-6 flex gap-2 border-b border-pitch-border">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              tab === t ? "border-edge-green text-edge-green" : "border-transparent text-ink-muted hover:text-ink-light"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.length === 0 && tab !== "Premium" && (
          <EmptyState title="No predictions yet" description="Check back closer to kickoff for today's selections." />
        )}
        {items.map(({ match, prediction }) => (
          <PredictionCard key={prediction.id} match={match} prediction={prediction} />
        ))}
        {tab !== "Football" && <PremiumCard />}
      </div>
    </div>
  );
}
