import { Team } from "@/data/types";
import { cn } from "@/lib/utils";

export default function TeamBadge({
  team,
  size = "md",
}: {
  team: Team;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClasses = {
    sm: "h-7 w-7 text-[10px]",
    md: "h-10 w-10 text-xs",
    lg: "h-16 w-16 text-lg",
  }[size];

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full font-display font-bold text-white shadow-sm ring-1 ring-white/10",
        sizeClasses
      )}
      style={{
        background: `linear-gradient(145deg, ${team.colorFrom}, ${team.colorTo})`,
      }}
      aria-hidden="true"
    >
      {team.crestInitials}
    </div>
  );
}
