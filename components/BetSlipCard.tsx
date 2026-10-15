"use client";

import { Copy, ExternalLink } from "lucide-react";
import { BetSlip } from "@/data/types";
import { formatUpdatedAt, bookmakerAccent } from "@/lib/utils";
import { showToast } from "./Toast";

export default function BetSlipCard({ slip, matchLabel }: { slip: BetSlip; matchLabel?: string }) {
  const accent = bookmakerAccent[slip.bookmaker] ?? "#22B562";

  function handleCopy() {
    navigator.clipboard?.writeText(slip.code).catch(() => {});
    showToast(`Betslip code ${slip.code} copied`);
  }

  return (
    <div className="card flex flex-col gap-4 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span
          className="rounded-md px-2.5 py-1 text-xs font-bold text-pitch-bg"
          style={{ backgroundColor: accent }}
        >
          {slip.bookmaker}
        </span>
        <span className="text-xs text-ink-faint">Updated {formatUpdatedAt(slip.updatedAt)}</span>
      </div>

      <div>
        <div className="text-sm font-semibold text-ink-light">{slip.slipName}</div>
        {matchLabel && <div className="text-xs text-ink-muted">{matchLabel}</div>}
      </div>

      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-muted">Total selections</span>
        <span className="font-medium text-ink-light">{slip.selections}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-ink-muted">Combined odds</span>
        <span className="font-display text-lg font-bold text-edge-green">{slip.combinedOdds.toFixed(2)}</span>
      </div>

      <div className="flex items-center justify-between rounded-md border border-dashed border-pitch-borderLight px-3 py-2 font-mono text-sm tracking-wide">
        {slip.code}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button onClick={handleCopy} className="btn-secondary text-sm">
          <Copy className="h-3.5 w-3.5" />
          Copy Code
        </button>
        <button onClick={handleCopy} className="btn-primary text-sm">
          Load Bet Slip
          <ExternalLink className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
