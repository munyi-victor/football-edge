import Link from "next/link";
import { Target } from "lucide-react";
import { Match, Prediction } from "@/data/types";
import TeamBadge from "./TeamBadge";

export default function PredictionCard({
  match,
  prediction,
}: {
  match: Match;
  prediction: Prediction;
}) {
  return (
    <div className="card flex flex-col gap-4 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="pill">{match.competition}</span>
        <span className="text-xs text-ink-muted">{match.kickoff}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center -space-x-2">
          <TeamBadge team={match.homeTeam} size="sm" />
          <TeamBadge team={match.awayTeam} size="sm" />
        </div>
        <span className="text-sm font-medium">
          {match.homeTeam.shortName} vs {match.awayTeam.shortName}
        </span>
      </div>

      <div className="flex items-center justify-between rounded-md bg-pitch-elevated px-3 py-2.5">
        <div>
          <div className="text-xs text-ink-muted">{prediction.market}</div>
          <div className="flex items-center gap-1.5 text-sm font-semibold text-edge-green">
            <Target className="h-3.5 w-3.5" />
            {prediction.selection}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-ink-muted">Odds</div>
          <div className="font-display text-lg font-bold">{prediction.odds.toFixed(2)}</div>
        </div>
      </div>

      <p className="text-sm text-ink-muted">{prediction.reasoning}</p>

      <Link href={`/matches/${match.slug}`} className="btn-ghost -ml-3 self-start text-sm">
        View Analysis
      </Link>
    </div>
  );
}
