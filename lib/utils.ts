import { matches } from "@/data/matches";
import { BetSlip } from "@/data/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatMatchDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}

export function formatShortDate(iso: string): string {
  const d = new Date(iso.length > 10 ? iso : iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export function formatUpdatedAt(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export function getAllBetslips(): BetSlip[] {
  return matches.flatMap((m) => m.betslips);
}

export const bookmakerAccent: Record<string, string> = {
  Betika: "#00A651",
  SportPesa: "#00A651",
  SportyBet: "#EB1466",
  Odibets: "#F5A623",
};
