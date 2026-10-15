import { Target, LineChart, PenLine, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About",
  description: "What Football Edge is, how our analysis is produced, and our responsible gambling statement.",
};

export default function AboutPage() {
  return (
    <div className="container-edge max-w-3xl py-14">
      <h1 className="font-display text-3xl font-bold text-ink-light">About Football Edge</h1>
      <p className="mt-4 text-base leading-relaxed text-ink-muted">
        Football Edge is a football analysis platform. Our goal is to provide structured football
        analysis using match history, recent form, statistical trends and football research —
        presented in a way that&apos;s easy to scan before kickoff.
      </p>

      <div className="mt-10 space-y-8">
        <section className="flex gap-4">
          <Target className="mt-1 h-5 w-5 shrink-0 text-edge-green" />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-light">Our Mission</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              To make football analysis more transparent and data-informed, giving fans a clearer
              picture of the numbers behind a match — without pretending certainty where none exists.
            </p>
          </div>
        </section>

        <section className="flex gap-4">
          <LineChart className="mt-1 h-5 w-5 shrink-0 text-edge-green" />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-light">What We Analyse</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              For every fixture we cover, we look at recent form, head-to-head history, home and
              away splits, goal-scoring and defensive trends, and any relevant context around the
              match.
            </p>
          </div>
        </section>

        <section className="flex gap-4">
          <PenLine className="mt-1 h-5 w-5 shrink-0 text-edge-green" />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-light">How Predictions Are Produced</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Each prediction is written by an analyst after reviewing the statistical picture for
              a match. Predictions are our reading of the available data — they are analysis, not
              guarantees, and results are published openly regardless of outcome.
            </p>
          </div>
        </section>

        <section className="flex gap-4">
          <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-edge-green" />
          <div>
            <h2 className="font-display text-lg font-semibold text-ink-light">Responsible Gambling</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              Football Edge is an analysis product, not a betting operator. Betting carries
              financial risk. If you choose to bet, only stake what you can afford to lose, treat
              odds as illustrative until confirmed on your bookmaker&apos;s platform, and seek
              support if betting stops feeling in your control. Must be 18 or over to bet in most
              jurisdictions.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
