import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, Trophy } from "lucide-react";
import { matches, getMatchBySlug } from "@/data/matches";
import { formatMatchDate } from "@/lib/utils";
import TeamBadge from "@/components/TeamBadge";
import FormIndicator from "@/components/FormIndicator";
import H2HTable from "@/components/H2HTable";
import StatCard from "@/components/StatCard";
import AnalysisSection from "@/components/AnalysisSection";
import BetSlipCard from "@/components/BetSlipCard";

export function generateStaticParams() {
  return matches.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const match = getMatchBySlug(params.slug);
  if (!match) return {};
  const title = `${match.homeTeam.name} vs ${match.awayTeam.name} — Analysis & Prediction`;
  const description = `${match.competition} preview: form, head-to-head record, goal stats and analyst prediction for ${match.homeTeam.name} vs ${match.awayTeam.name}.`;
  return {
    title,
    description,
    alternates: { canonical: `/matches/${match.slug}` },
    openGraph: { title, description },
  };
}

function VenueFormRow({ label, form }: { label: string; form: { matches: number; wins: number; draws: number; losses: number; goalsFor: number; goalsAgainst: number } }) {
  return (
    <div className="card p-4">
      <p className="mb-3 text-sm font-semibold text-ink-light">{label}</p>
      <div className="grid grid-cols-3 gap-2 text-center text-sm sm:grid-cols-5">
        <div><div className="font-display font-bold text-ink-light">{form.matches}</div><div className="text-xs text-ink-muted">Played</div></div>
        <div><div className="font-display font-bold text-result-win">{form.wins}</div><div className="text-xs text-ink-muted">Wins</div></div>
        <div><div className="font-display font-bold text-result-draw">{form.draws}</div><div className="text-xs text-ink-muted">Draws</div></div>
        <div><div className="font-display font-bold text-result-loss">{form.losses}</div><div className="text-xs text-ink-muted">Losses</div></div>
        <div><div className="font-display font-bold text-ink-light">{form.goalsFor}:{form.goalsAgainst}</div><div className="text-xs text-ink-muted">Goals</div></div>
      </div>
    </div>
  );
}

export default function MatchAnalysisPage({ params }: { params: { slug: string } }) {
  const match = getMatchBySlug(params.slug);
  if (!match) notFound();

  return (
    <div className="pb-16">
      <div className="border-b border-pitch-border bg-pitch-elevated">
        <div className="container-edge py-8">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
            <span className="pill"><Trophy className="mr-1 inline h-3.5 w-3.5" />{match.competition}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{formatMatchDate(match.date)}, {match.kickoff}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{match.venue}</span>
          </div>
          <div className="flex items-center justify-center gap-6 sm:gap-12">
            <div className="flex flex-col items-center gap-2">
              <TeamBadge team={match.homeTeam} size="lg" />
              <span className="font-display text-lg font-semibold">{match.homeTeam.name}</span>
              <FormIndicator form={match.homeForm} size="md" />
            </div>
            <span className="font-display text-2xl font-bold text-ink-faint">VS</span>
            <div className="flex flex-col items-center gap-2">
              <TeamBadge team={match.awayTeam} size="lg" />
              <span className="font-display text-lg font-semibold">{match.awayTeam.name}</span>
              <FormIndicator form={match.awayForm} size="md" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-edge grid gap-10 py-10 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 font-display text-lg font-semibold text-ink-light">Head-to-Head</h2>
            <H2HTable meetings={match.h2h} homeTeamName={match.homeTeam.name} awayTeamName={match.awayTeam.name} />
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-semibold text-ink-light">Goals Statistics</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
              <StatCard label="Avg. goals" value={match.goalStats.avgGoals} />
              <StatCard label="Over 1.5" value={match.goalStats.over15Pct} suffix="%" />
              <StatCard label="Over 2.5" value={match.goalStats.over25Pct} suffix="%" />
              <StatCard label="BTTS" value={match.goalStats.bttsPct} suffix="%" />
              <StatCard label="Clean sheets" value={match.goalStats.cleanSheetsPct} suffix="%" />
            </div>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-semibold text-ink-light">Home vs Away Form</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <VenueFormRow label={`${match.homeTeam.name} at home`} form={match.homeVenueForm} />
              <VenueFormRow label={`${match.awayTeam.name} away`} form={match.awayVenueForm} />
            </div>
          </section>

          <AnalysisSection analysis={match.analysis} keyFactors={match.keyFactors} />
        </div>

        <div className="space-y-6">
          <div className="card p-5">
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-edge-green">Analyst&apos;s Selection</p>
            <p className="font-display text-xl font-bold text-ink-light">{match.predictions[0]?.selection}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-ink-muted">Market</span>
              <span className="font-medium text-ink-light">{match.predictions[0]?.market}</span>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-ink-muted">Odds</span>
              <span className="font-display text-lg font-bold text-edge-green">{match.predictions[0]?.odds.toFixed(2)}</span>
            </div>
            <p className="mt-3 text-sm text-ink-muted">{match.predictions[0]?.reasoning}</p>
          </div>

          <div className="card p-5">
            <p className="mb-3 text-sm font-semibold text-ink-light">Betting Markets</p>
            <ul className="space-y-2 text-sm">
              {["1X2", "Double Chance", "Over/Under", "BTTS", "Draw No Bet"].map((m) => (
                <li key={m} className="flex items-center justify-between rounded-md bg-pitch-elevated px-3 py-2">
                  <span className="text-ink-muted">{m}</span>
                  <span className="text-xs text-ink-faint">Mock selection</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container-edge">
        <h2 className="mb-4 font-display text-lg font-semibold text-ink-light">Available Bet Slips</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {match.betslips.map((slip) => (
            <BetSlipCard key={slip.id} slip={slip} />
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-faint">
          Odds and betslip codes can change after publication. Always confirm on the bookmaker&apos;s platform before placing a bet. 18+, gamble responsibly.
        </p>
      </div>
    </div>
  );
}
