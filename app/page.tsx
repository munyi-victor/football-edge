import Link from "next/link";
import { ArrowRight, TrendingUp, BarChart3, ShieldCheck } from "lucide-react";
import { matches } from "@/data/matches";
import MatchCard from "@/components/MatchCard";
import StatCard from "@/components/StatCard";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-pitch-border bg-gradient-to-b from-pitch-elevated to-pitch-bg">
        <div className="container-edge grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="pill mb-5 inline-flex border-edge-green/30 text-edge-green">
              Today&apos;s matches analysed
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink-light sm:text-5xl">
              Football Analysis.
              <br />
              Smarter Decisions.
            </h1>
            <p className="mt-5 max-w-lg text-base text-ink-muted sm:text-lg">
              Data-driven match analysis, H2H statistics and carefully researched football predictions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/matches" className="btn-primary">
                Explore Today&apos;s Matches
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/predictions" className="btn-secondary">
                View Predictions
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Matches analysed / week" value="40+" />
            <StatCard label="Leagues covered" value="6" />
            <StatCard label="Years of match data" value="5" />
          </div>
        </div>
      </section>

      <section className="border-b border-pitch-border py-8">
        <div className="container-edge grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-edge-green" />
            <div>
              <p className="text-sm font-semibold text-ink-light">Statistical grounding</p>
              <p className="text-sm text-ink-muted">Form, H2H and goal trends behind every match.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-edge-green" />
            <div>
              <p className="text-sm font-semibold text-ink-light">Written analyst view</p>
              <p className="text-sm text-ink-muted">Context and reasoning, not just numbers.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-edge-green" />
            <div>
              <p className="text-sm font-semibold text-ink-light">Transparent track record</p>
              <p className="text-sm text-ink-muted">Every published result is logged, wins and losses alike.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-edge">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-light">Today&apos;s Matches</h2>
              <p className="mt-1 text-sm text-ink-muted">Analysis, form and H2H for the biggest fixtures today.</p>
            </div>
            <Link href="/matches" className="btn-ghost hidden text-sm sm:inline-flex">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>

          <Link href="/matches" className="btn-secondary mt-6 flex w-full sm:hidden">
            View all matches
          </Link>
        </div>
      </section>
    </>
  );
}
