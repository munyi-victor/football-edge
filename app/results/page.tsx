import { results } from "@/data/matches";
import StatCard from "@/components/StatCard";
import ResultTable from "@/components/ResultTable";

export const metadata = {
  title: "Prediction Results",
  description: "A transparent, historical record of Football Edge's published predictions.",
};

export default function ResultsPage() {
  const total = results.length;
  const won = results.filter((r) => r.status === "won").length;
  const lost = results.filter((r) => r.status === "lost").length;
  const pending = results.filter((r) => r.status === "pending").length;

  return (
    <div className="container-edge py-10">
      <h1 className="font-display text-2xl font-bold text-ink-light sm:text-3xl">Prediction Results</h1>
      <p className="mt-1 max-w-xl text-sm text-ink-muted">
        A transparent record of every published selection — wins and losses alike.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Total selections" value={total} />
        <StatCard label="Won" value={won} />
        <StatCard label="Lost" value={lost} />
        <StatCard label="Pending" value={pending} />
      </div>

      <div className="mt-8">
        <ResultTable records={results} />
      </div>

      <p className="mt-4 text-xs text-ink-faint">
        Past results are historical records and do not guarantee future outcomes.
      </p>
    </div>
  );
}
