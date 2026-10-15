import { CheckCircle2, XCircle, Clock } from "lucide-react";
import { ResultRecord } from "@/data/types";
import { cn, formatShortDate } from "@/lib/utils";

const statusMeta = {
  won: { label: "Won", icon: CheckCircle2, className: "text-result-win bg-result-win/10" },
  lost: { label: "Lost", icon: XCircle, className: "text-result-loss bg-result-loss/10" },
  pending: { label: "Pending", icon: Clock, className: "text-ink-muted bg-pitch-elevated" },
};

export default function ResultTable({ records }: { records: ResultRecord[] }) {
  return (
    <div className="overflow-x-auto rounded-card border border-pitch-border">
      <table className="w-full min-w-[640px] text-left text-sm">
        <thead>
          <tr className="border-b border-pitch-border bg-pitch-elevated text-xs uppercase tracking-wide text-ink-faint">
            <th className="px-4 py-3 font-medium">Date</th>
            <th className="px-4 py-3 font-medium">Match</th>
            <th className="px-4 py-3 font-medium">Selection</th>
            <th className="px-4 py-3 font-medium">Odds</th>
            <th className="px-4 py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r) => {
            const meta = statusMeta[r.status];
            const Icon = meta.icon;
            return (
              <tr key={r.id} className="border-b border-pitch-border last:border-0 hover:bg-pitch-elevated/60">
                <td className="whitespace-nowrap px-4 py-3 text-ink-muted">{formatShortDate(r.date)}</td>
                <td className="px-4 py-3 text-ink-light">{r.match}</td>
                <td className="px-4 py-3 text-ink-muted">{r.selection}</td>
                <td className="px-4 py-3 font-medium">{r.odds.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", meta.className)}>
                    <Icon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
