import { ResultLetter } from "@/data/types";
import { cn } from "@/lib/utils";

const letterStyle: Record<ResultLetter, string> = {
  W: "bg-result-win/15 text-result-win ring-1 ring-result-win/40",
  D: "bg-result-draw/15 text-result-draw ring-1 ring-result-draw/40",
  L: "bg-result-loss/15 text-result-loss ring-1 ring-result-loss/40",
};

export default function FormIndicator({
  form,
  size = "sm",
}: {
  form: ResultLetter[];
  size?: "sm" | "md";
}) {
  const dims = size === "sm" ? "h-5 w-5 text-[10px]" : "h-7 w-7 text-xs";
  return (
    <div className="flex items-center gap-1" role="list" aria-label="Recent form">
      {form.map((letter, i) => (
        <span
          key={i}
          role="listitem"
          className={cn(
            "flex items-center justify-center rounded-full font-semibold",
            dims,
            letterStyle[letter]
          )}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
