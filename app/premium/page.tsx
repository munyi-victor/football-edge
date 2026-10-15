"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { showToast } from "@/components/Toast";

const features = [
  "Detailed match analysis",
  "Premium selections",
  "Extended statistics",
  "Early access to predictions",
  "Premium betslips",
  "Historical performance data",
];

const plans = [
  { name: "Weekly", price: "KES 150", period: "/ week" },
  { name: "Monthly", price: "KES 500", period: "/ month", featured: true },
  { name: "Quarterly", price: "KES 1,200", period: "/ quarter" },
];

export default function PremiumPage() {
  const [joined, setJoined] = useState(false);

  function handleJoin() {
    setJoined(true);
    showToast("You're on the waitlist");
  }

  return (
    <div className="container-edge py-14">
      <div className="mx-auto max-w-2xl text-center">
        <span className="pill mb-4 inline-flex border-edge-gold/30 text-edge-gold">
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Coming Soon
        </span>
        <h1 className="font-display text-3xl font-bold text-ink-light sm:text-4xl">
          Go Deeper With Premium Analysis
        </h1>
        <p className="mt-4 text-base text-ink-muted">
          Premium is not live yet — this is a preview of what&apos;s coming. Join the waitlist to be
          notified at launch.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2.5 rounded-md bg-pitch-elevated px-4 py-3 text-sm">
            <Check className="h-4 w-4 shrink-0 text-edge-green" />
            {f}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`card flex flex-col items-center gap-2 p-6 text-center ${
              p.featured ? "border-edge-gold/50 ring-1 ring-edge-gold/30" : ""
            }`}
          >
            {p.featured && <span className="text-xs font-semibold uppercase text-edge-gold">Most Popular</span>}
            <p className="text-sm font-medium text-ink-muted">{p.name}</p>
            <p className="font-display text-2xl font-bold text-ink-light">
              {p.price}
              <span className="text-sm font-normal text-ink-muted">{p.period}</span>
            </p>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-ink-faint">
        Placeholder pricing for preview purposes. Payments are not yet available.
      </p>

      <div className="mx-auto mt-10 max-w-md text-center">
        {joined ? (
          <p className="rounded-md bg-edge-green/10 px-4 py-3 text-sm font-medium text-edge-green">
            You&apos;re on the list — we&apos;ll email you when Premium launches.
          </p>
        ) : (
          <button onClick={handleJoin} className="btn-primary w-full">
            Join the Waitlist
          </button>
        )}
      </div>
    </div>
  );
}
