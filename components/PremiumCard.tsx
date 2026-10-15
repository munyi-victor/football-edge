import Link from "next/link";
import { Lock } from "lucide-react";

export default function PremiumCard() {
  return (
    <div className="relative flex flex-col items-center gap-3 overflow-hidden rounded-card border border-edge-gold/30 bg-gradient-to-b from-edge-gold/10 to-pitch-surface p-6 text-center sm:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-edge-gold/15 text-edge-gold">
        <Lock className="h-5 w-5" />
      </div>
      <h3 className="font-display text-lg font-semibold text-ink-light">Premium Analysis</h3>
      <p className="max-w-xs text-sm text-ink-muted">
        Unlock detailed premium selections, extended statistics and early access to analyst picks.
      </p>
      <Link href="/premium" className="btn-secondary border-edge-gold/40 text-edge-gold hover:border-edge-gold hover:text-edge-gold">
        View Premium
      </Link>
    </div>
  );
}
