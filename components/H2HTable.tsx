import { H2HMeeting } from "@/data/types";
import { formatShortDate } from "@/lib/utils";

export default function H2HTable({
  meetings,
  homeTeamName,
  awayTeamName,
}: {
  meetings: H2HMeeting[];
  homeTeamName: string;
  awayTeamName: string;
}) {
  let homeWins = 0;
  let awayWins = 0;
  let draws = 0;
  meetings.forEach((g) => {
    const homeGoals = g.homeTeam === homeTeamName ? g.homeScore : g.awayScore;
    const awayGoals = g.homeTeam === homeTeamName ? g.awayScore : g.homeScore;
    if (homeGoals > awayGoals) homeWins++;
    else if (awayGoals > homeGoals) awayWins++;
    else draws++;
  });

  return (
    <div>
      <div className="overflow-x-auto rounded-card border border-pitch-border">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-pitch-border bg-pitch-elevated text-xs uppercase tracking-wide text-ink-faint">
              <th className="px-4 py-2.5 font-medium">Date</th>
              <th className="px-4 py-2.5 font-medium">Home</th>
              <th className="px-4 py-2.5 text-center font-medium">Score</th>
              <th className="px-4 py-2.5 font-medium">Away</th>
              <th className="px-4 py-2.5 font-medium">Competition</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((g, i) => (
              <tr key={i} className="border-b border-pitch-border last:border-0 hover:bg-pitch-elevated/60">
                <td className="whitespace-nowrap px-4 py-2.5 text-ink-muted">{formatShortDate(g.date)}</td>
                <td className="px-4 py-2.5">{g.homeTeam}</td>
                <td className="px-4 py-2.5 text-center font-semibold text-ink-light">
                  {g.homeScore}–{g.awayScore}
                </td>
                <td className="px-4 py-2.5">{g.awayTeam}</td>
                <td className="px-4 py-2.5 text-ink-muted">{g.competition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="card py-3">
          <div className="font-display text-lg font-bold text-edge-green">{homeWins}</div>
          <div className="text-xs text-ink-muted">{homeTeamName} wins</div>
        </div>
        <div className="card py-3">
          <div className="font-display text-lg font-bold text-ink-light">{draws}</div>
          <div className="text-xs text-ink-muted">Draws</div>
        </div>
        <div className="card py-3">
          <div className="font-display text-lg font-bold text-ink-light">{awayWins}</div>
          <div className="text-xs text-ink-muted">{awayTeamName} wins</div>
        </div>
      </div>
    </div>
  );
}
