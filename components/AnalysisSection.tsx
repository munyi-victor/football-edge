import { PenLine } from "lucide-react";
import { KeyFactor } from "@/data/types";

export default function AnalysisSection({
  analysis,
  keyFactors,
}: {
  analysis: string;
  keyFactors: KeyFactor[];
}) {
  const paragraphs = analysis.split("\n\n");

  return (
    <div className="card p-5 sm:p-7">
      <div className="mb-4 flex items-center gap-2">
        <PenLine className="h-4 w-4 text-edge-green" />
        <h2 className="font-display text-lg font-semibold text-ink-light">Match Analysis</h2>
      </div>
      <div className="space-y-4 text-sm leading-relaxed text-ink-muted sm:text-[15px]">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <p className="mt-4 text-xs italic text-ink-faint">
        This section reflects the analyst&apos;s own reading of the data — not a guarantee of the outcome.
      </p>

      <div className="mt-6 border-t border-pitch-border pt-5">
        <h3 className="mb-3 text-sm font-semibold text-ink-light">Key Factors</h3>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {keyFactors.map((f, i) => (
            <li key={i} className="flex gap-2.5 rounded-md bg-pitch-elevated p-3 text-sm">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-edge-green" />
              <span>
                <span className="font-medium text-ink-light">{f.label}:</span>{" "}
                <span className="text-ink-muted">{f.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
