import Link from "next/link";
import { Clock, FileText, ArrowRight } from "lucide-react";
import { Match } from "@/data/types";
import TeamBadge from "./TeamBadge";
import FormIndicator from "./FormIndicator";

function h2hSummary(match: Match): string {
  const { homeTeam, h2h } = match;
  let homeWins = 0;
  let awayWins = 0;
  h2h.forEach((g) => {
    const homeGoals = g.homeTeam === match.homeTeam.name ? g.homeScore : g.awayScore;
    const awayGoals = g.homeTeam === match.homeTeam.name ? g.awayScore : g.homeScore;
    if (homeGoals > awayGoals) homeWins++;
    else if (awayGoals > homeGoals) awayWins++;
  });
  const leader = homeWins >= awayWins ? homeTeam.shortName : match.awayTeam.shortName;
  return `${leader} lead last ${h2h.length} H2H`;
}

export default function MatchCard({ match }: { match: Match }) {
  return (
    <div className="card group flex flex-col p-4 transition-colors hover:border-edge-green/50 sm:p-5">
      <div className="mb-3 flex items-center justify-between text-xs text-ink-muted">
        <span className="pill">{match.competition}</span>
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {match.kickoff}
        </span>
      </div>

      <div className="mb-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <TeamBadge team={match.homeTeam} />
          <span className="text-sm font-medium leading-tight">{match.homeTeam.shortName}</span>
        </div>
        <span className="text-xs font-semibold text-ink-faint">VS</span>
        <div className="flex flex-col items-center gap-2 text-center">
          <TeamBadge team={match.awayTeam} />
          <span className="text-sm font-medium leading-tight">{match.awayTeam.shortName}</span>
        </div>
      </div>

      <div className="mb-3 flex items-center justify-between">
        <FormIndicator form={match.homeForm.slice(-3)} />
        <FormIndicator form={match.awayForm.slice(-3)} />
      </div>

      <div className="mb-4 flex items-center gap-1.5 text-xs text-ink-muted">
        <FileText className="h-3.5 w-3.5 text-edge-green" />
        {h2hSummary(match)}
      </div>

      <Link
        href={`/matches/${match.slug}`}
        className="btn-secondary mt-auto w-full text-sm"
      >
        View Analysis
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
