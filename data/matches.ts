import { Match, ResultRecord, Team } from "./types";

function team(
  name: string,
  shortName: string,
  crestInitials: string,
  colorFrom: string,
  colorTo: string
): Team {
  return { id: name.toLowerCase().replace(/\s+/g, "-"), name, shortName, crestInitials, colorFrom, colorTo };
}

const arsenal = team("Arsenal", "ARS", "AR", "#EF0107", "#9C0000");
const chelsea = team("Chelsea", "CHE", "CH", "#034694", "#021F3D");
const liverpool = team("Liverpool", "LIV", "LI", "#C8102E", "#7A0A1C");
const tottenham = team("Tottenham", "TOT", "TO", "#132257", "#0A1230");
const barcelona = team("Barcelona", "BAR", "BA", "#A50044", "#004D98");
const sevilla = team("Sevilla", "SEV", "SE", "#D2001C", "#8C0013");
const bayern = team("Bayern Munich", "BAY", "BM", "#DC052D", "#7C0A1F");
const dortmund = team("Borussia Dortmund", "BVB", "BV", "#FDE100", "#000000");
const inter = team("Inter Milan", "INT", "IM", "#0A1E3F", "#000000");
const roma = team("Roma", "ROM", "RO", "#8E1F2F", "#F0BC42");

export const matches: Match[] = [
  {
    id: "m1",
    slug: "arsenal-vs-chelsea",
    competition: "Premier League",
    venue: "Emirates Stadium, London",
    date: "2026-09-27",
    kickoff: "18:30",
    status: "upcoming",
    homeTeam: arsenal,
    awayTeam: chelsea,
    homeForm: ["W", "W", "D", "W", "W"],
    awayForm: ["W", "D", "L", "W", "D"],
    h2h: [
      { date: "2026-02-14", homeTeam: "Chelsea", awayTeam: "Arsenal", homeScore: 1, awayScore: 2, competition: "Premier League" },
      { date: "2025-10-05", homeTeam: "Arsenal", awayTeam: "Chelsea", homeScore: 1, awayScore: 1, competition: "Premier League" },
      { date: "2025-04-20", homeTeam: "Chelsea", awayTeam: "Arsenal", homeScore: 0, awayScore: 2, competition: "Premier League" },
      { date: "2024-11-09", homeTeam: "Arsenal", awayTeam: "Chelsea", homeScore: 2, awayScore: 0, competition: "Premier League" },
      { date: "2024-04-23", homeTeam: "Chelsea", awayTeam: "Arsenal", homeScore: 2, awayScore: 2, competition: "Premier League" },
    ],
    goalStats: { avgGoals: 3.1, over15Pct: 82, over25Pct: 58, bttsPct: 64, cleanSheetsPct: 36 },
    homeVenueForm: { matches: 8, wins: 6, draws: 1, losses: 1, goalsFor: 17, goalsAgainst: 6 },
    awayVenueForm: { matches: 8, wins: 3, draws: 2, losses: 3, goalsFor: 11, goalsAgainst: 10 },
    analysis:
      "Arsenal head into this one on the back of a solid run, unbeaten in five and conceding just twice at home this season. Their pressing structure has forced turnovers high up the pitch in each of their last three home fixtures, which suits a Chelsea side still settling into a new midfield pairing.\n\nChelsea have scored in nine of their last ten away trips, so this is unlikely to be one-sided. Their away form has been streaky — capable of both dominant away wins and defensive lapses — which is reflected in the spread of markets below rather than a single confident pick.",
    keyFactors: [
      { label: "Recent form", detail: "Arsenal unbeaten in 5, Chelsea 1 win in last 5" },
      { label: "H2H trend", detail: "Arsenal have won 3 of the last 5 meetings" },
      { label: "Home advantage", detail: "Arsenal have lost just once at home all season" },
      { label: "Defensive record", detail: "Chelsea have kept only 2 clean sheets away from home" },
      { label: "Goal-scoring trend", detail: "Both sides have scored in 4 of the last 5 H2H meetings" },
    ],
    predictions: [
      { id: "p1", market: "Double Chance", selection: "Arsenal or Draw (1X)", odds: 1.36, reasoning: "Arsenal's home record makes an away win the least likely outcome." },
      { id: "p2", market: "Over/Under", selection: "Over 1.5 Goals", odds: 1.28, reasoning: "Both sides have shown consistent goal production in recent matches." },
      { id: "p3", market: "BTTS", selection: "Yes", odds: 1.75, reasoning: "Both teams have scored in 4 of the last 5 meetings." },
    ],
    betslips: [
      { id: "b1", bookmaker: "Betika", slipName: "PL Weekend Combo", selections: 5, combinedOdds: 4.35, code: "ABC123", updatedAt: "2026-09-27T09:15:00" },
      { id: "b2", bookmaker: "SportPesa", slipName: "Arsenal Special", selections: 3, combinedOdds: 2.9, code: "SPX882", updatedAt: "2026-09-27T08:40:00" },
      { id: "b3", bookmaker: "SportyBet", slipName: "London Derby Watch", selections: 4, combinedOdds: 3.6, code: "SYB441", updatedAt: "2026-09-27T07:55:00" },
      { id: "b4", bookmaker: "Odibets", slipName: "Goals Galore", selections: 6, combinedOdds: 5.1, code: "ODI209", updatedAt: "2026-09-26T21:10:00" },
    ],
    hasAnalysis: true,
  },
  {
    id: "m2",
    slug: "liverpool-vs-tottenham",
    competition: "Premier League",
    venue: "Anfield, Liverpool",
    date: "2026-09-27",
    kickoff: "16:00",
    status: "upcoming",
    homeTeam: liverpool,
    awayTeam: tottenham,
    homeForm: ["W", "W", "W", "D", "W"],
    awayForm: ["L", "W", "W", "D", "L"],
    h2h: [
      { date: "2026-03-02", homeTeam: "Tottenham", awayTeam: "Liverpool", homeScore: 1, awayScore: 4, competition: "Premier League" },
      { date: "2025-11-16", homeTeam: "Liverpool", awayTeam: "Tottenham", homeScore: 2, awayScore: 1, competition: "Premier League" },
      { date: "2025-05-04", homeTeam: "Tottenham", awayTeam: "Liverpool", homeScore: 0, awayScore: 3, competition: "Premier League" },
      { date: "2024-12-01", homeTeam: "Liverpool", awayTeam: "Tottenham", homeScore: 2, awayScore: 2, competition: "Premier League" },
      { date: "2024-04-30", homeTeam: "Tottenham", awayTeam: "Liverpool", homeScore: 2, awayScore: 4, competition: "Premier League" },
    ],
    goalStats: { avgGoals: 3.6, over15Pct: 90, over25Pct: 71, bttsPct: 58, cleanSheetsPct: 22 },
    homeVenueForm: { matches: 8, wins: 7, draws: 1, losses: 0, goalsFor: 21, goalsAgainst: 7 },
    awayVenueForm: { matches: 8, wins: 2, draws: 2, losses: 4, goalsFor: 12, goalsAgainst: 15 },
    analysis:
      "Liverpool's home form has been the standout stat of the season so far — unbeaten at Anfield with a goal difference few teams in Europe can match. Tottenham's away form tells a different story, with defensive frailties on the road showing up repeatedly against sides that press with intensity.\n\nHistorically this fixture produces goals, and little in this season's underlying numbers suggests that will change.",
    keyFactors: [
      { label: "Recent form", detail: "Liverpool unbeaten at home in 8, Tottenham winless in 2 away" },
      { label: "H2H trend", detail: "Liverpool have won 4 of the last 5 meetings" },
      { label: "Home advantage", detail: "Liverpool have the league's best home record" },
      { label: "Defensive record", detail: "Tottenham have conceded 15 goals in 8 away games" },
      { label: "Goal-scoring trend", detail: "Over 2.5 goals landed in 4 of the last 5 meetings" },
    ],
    predictions: [
      { id: "p4", market: "1X2", selection: "Liverpool Win", odds: 1.55, reasoning: "Home record and head-to-head trend both favour Liverpool strongly." },
      { id: "p5", market: "Over/Under", selection: "Over 2.5 Goals", odds: 1.44, reasoning: "This fixture has produced over 2.5 goals in 4 of the last 5 meetings." },
    ],
    betslips: [
      { id: "b5", bookmaker: "Betika", slipName: "Anfield Goals", selections: 4, combinedOdds: 3.2, code: "BTK774", updatedAt: "2026-09-27T09:00:00" },
      { id: "b6", bookmaker: "Odibets", slipName: "Merseyside Special", selections: 3, combinedOdds: 2.4, code: "ODI556", updatedAt: "2026-09-27T08:10:00" },
    ],
    hasAnalysis: true,
  },
  {
    id: "m3",
    slug: "barcelona-vs-sevilla",
    competition: "La Liga",
    venue: "Estadi Olimpic, Barcelona",
    date: "2026-09-28",
    kickoff: "20:00",
    status: "upcoming",
    homeTeam: barcelona,
    awayTeam: sevilla,
    homeForm: ["W", "W", "W", "W", "D"],
    awayForm: ["D", "L", "D", "W", "L"],
    h2h: [
      { date: "2026-01-19", homeTeam: "Sevilla", awayTeam: "Barcelona", homeScore: 0, awayScore: 2, competition: "La Liga" },
      { date: "2025-09-14", homeTeam: "Barcelona", awayTeam: "Sevilla", homeScore: 3, awayScore: 0, competition: "La Liga" },
      { date: "2025-02-08", homeTeam: "Sevilla", awayTeam: "Barcelona", homeScore: 1, awayScore: 1, competition: "La Liga" },
      { date: "2024-10-05", homeTeam: "Barcelona", awayTeam: "Sevilla", homeScore: 2, awayScore: 1, competition: "La Liga" },
      { date: "2024-04-27", homeTeam: "Sevilla", awayTeam: "Barcelona", homeScore: 0, awayScore: 1, competition: "La Liga" },
    ],
    goalStats: { avgGoals: 2.8, over15Pct: 76, over25Pct: 50, bttsPct: 44, cleanSheetsPct: 48 },
    homeVenueForm: { matches: 8, wins: 7, draws: 1, losses: 0, goalsFor: 22, goalsAgainst: 5 },
    awayVenueForm: { matches: 8, wins: 1, draws: 3, losses: 4, goalsFor: 9, goalsAgainst: 14 },
    analysis:
      "Barcelona's home dominance this season has been near total, and Sevilla arrive having won only once away from home. The head-to-head record is heavily one-sided, and Sevilla's defensive record on the road suggests they will need a near-perfect performance to avoid a heavy loss.",
    keyFactors: [
      { label: "Recent form", detail: "Barcelona have won 4 of their last 5" },
      { label: "H2H trend", detail: "Barcelona unbeaten in the last 5 meetings" },
      { label: "Home advantage", detail: "Barcelona have lost just once at home all season" },
      { label: "Defensive record", detail: "Sevilla have conceded 14 goals in 8 away games" },
    ],
    predictions: [
      { id: "p6", market: "1X2", selection: "Barcelona Win", odds: 1.3, reasoning: "Barcelona's home form and the head-to-head record strongly favour the hosts." },
    ],
    betslips: [
      { id: "b7", bookmaker: "SportyBet", slipName: "La Liga Locks", selections: 5, combinedOdds: 3.9, code: "SYB120", updatedAt: "2026-09-27T18:30:00" },
    ],
    hasAnalysis: true,
  },
  {
    id: "m4",
    slug: "bayern-munich-vs-dortmund",
    competition: "Bundesliga",
    venue: "Allianz Arena, Munich",
    date: "2026-09-28",
    kickoff: "17:30",
    status: "upcoming",
    homeTeam: bayern,
    awayTeam: dortmund,
    homeForm: ["W", "D", "W", "W", "W"],
    awayForm: ["W", "L", "W", "D", "W"],
    h2h: [
      { date: "2026-03-30", homeTeam: "Dortmund", awayTeam: "Bayern Munich", homeScore: 1, awayScore: 3, competition: "Bundesliga" },
      { date: "2025-11-23", homeTeam: "Bayern Munich", awayTeam: "Dortmund", homeScore: 4, awayScore: 2, competition: "Bundesliga" },
      { date: "2025-04-06", homeTeam: "Dortmund", awayTeam: "Bayern Munich", homeScore: 0, awayScore: 2, competition: "Bundesliga" },
      { date: "2024-10-26", homeTeam: "Bayern Munich", awayTeam: "Dortmund", homeScore: 4, awayScore: 0, competition: "Bundesliga" },
      { date: "2024-05-25", homeTeam: "Dortmund", awayTeam: "Bayern Munich", homeScore: 2, awayScore: 2, competition: "Bundesliga" },
    ],
    goalStats: { avgGoals: 3.9, over15Pct: 94, over25Pct: 80, bttsPct: 66, cleanSheetsPct: 18 },
    homeVenueForm: { matches: 8, wins: 7, draws: 1, losses: 0, goalsFor: 26, goalsAgainst: 8 },
    awayVenueForm: { matches: 8, wins: 4, draws: 2, losses: 2, goalsFor: 15, goalsAgainst: 11 },
    analysis:
      "Der Klassiker rarely disappoints on the goals front, and this season's underlying numbers back that up. Bayern's home form remains the benchmark in the league, but Dortmund have shown enough going forward on their travels to make backing both teams to score a reasonable line.",
    keyFactors: [
      { label: "Recent form", detail: "Bayern won 4 of their last 5, Dortmund 3 of their last 5" },
      { label: "H2H trend", detail: "Bayern have won 4 of the last 5 meetings" },
      { label: "Goal-scoring trend", detail: "Over 2.5 goals in 4 of the last 5 meetings" },
    ],
    predictions: [
      { id: "p7", market: "BTTS", selection: "Yes", odds: 1.6, reasoning: "Both sides have scored in the majority of recent meetings." },
      { id: "p8", market: "Over/Under", selection: "Over 2.5 Goals", odds: 1.35, reasoning: "This fixture rarely finishes under 2.5 goals." },
    ],
    betslips: [
      { id: "b8", bookmaker: "Betika", slipName: "Bundesliga Bombshell", selections: 4, combinedOdds: 4.1, code: "BTK902", updatedAt: "2026-09-27T16:00:00" },
    ],
    hasAnalysis: true,
  },
  {
    id: "m5",
    slug: "inter-milan-vs-roma",
    competition: "Serie A",
    venue: "San Siro, Milan",
    date: "2026-09-29",
    kickoff: "19:45",
    status: "upcoming",
    homeTeam: inter,
    awayTeam: roma,
    homeForm: ["D", "W", "W", "D", "W"],
    awayForm: ["W", "D", "L", "W", "D"],
    h2h: [
      { date: "2026-02-01", homeTeam: "Roma", awayTeam: "Inter Milan", homeScore: 1, awayScore: 1, competition: "Serie A" },
      { date: "2025-09-28", homeTeam: "Inter Milan", awayTeam: "Roma", homeScore: 2, awayScore: 0, competition: "Serie A" },
      { date: "2025-03-16", homeTeam: "Roma", awayTeam: "Inter Milan", homeScore: 0, awayScore: 2, competition: "Serie A" },
      { date: "2024-11-10", homeTeam: "Inter Milan", awayTeam: "Roma", homeScore: 1, awayScore: 1, competition: "Serie A" },
      { date: "2024-04-19", homeTeam: "Roma", awayTeam: "Inter Milan", homeScore: 2, awayScore: 2, competition: "Serie A" },
    ],
    goalStats: { avgGoals: 2.4, over15Pct: 70, over25Pct: 40, bttsPct: 54, cleanSheetsPct: 44 },
    homeVenueForm: { matches: 8, wins: 5, draws: 2, losses: 1, goalsFor: 14, goalsAgainst: 7 },
    awayVenueForm: { matches: 8, wins: 3, draws: 3, losses: 2, goalsFor: 10, goalsAgainst: 9 },
    analysis:
      "A tighter, more cagey fixture on paper. Inter's home form is solid without being overwhelming, and Roma tend to be organised away from home, which is reflected in a head-to-head record with more draws than either side would like.",
    keyFactors: [
      { label: "Recent form", detail: "Inter unbeaten in 3, Roma unbeaten in 3" },
      { label: "H2H trend", detail: "2 of the last 5 meetings have ended level" },
      { label: "Defensive record", detail: "Both sides have kept multiple clean sheets this season" },
    ],
    predictions: [
      { id: "p9", market: "Draw No Bet", selection: "Inter Milan", odds: 1.48, reasoning: "Inter's home edge without the draw risk given how tight recent meetings have been." },
    ],
    betslips: [
      { id: "b9", bookmaker: "Odibets", slipName: "Serie A Sharp", selections: 3, combinedOdds: 2.6, code: "ODI340", updatedAt: "2026-09-27T14:20:00" },
    ],
    hasAnalysis: true,
  },
];

export function getMatchBySlug(slug: string): Match | undefined {
  return matches.find((m) => m.slug === slug);
}

export const competitions = [
  "All",
  "Premier League",
  "La Liga",
  "Bundesliga",
  "Serie A",
  "Ligue 1",
  "Champions League",
] as const;

export const results: ResultRecord[] = [
  { id: "r1", date: "2026-09-25", match: "Arsenal vs Chelsea", selection: "Over 1.5 Goals", odds: 1.3, status: "won" },
  { id: "r2", date: "2026-09-24", match: "Barcelona vs Sevilla", selection: "Barcelona Win", odds: 1.45, status: "won" },
  { id: "r3", date: "2026-09-24", match: "Inter vs Roma", selection: "BTTS", odds: 1.72, status: "lost" },
  { id: "r4", date: "2026-09-23", match: "Bayern Munich vs Dortmund", selection: "Over 2.5 Goals", odds: 1.4, status: "won" },
  { id: "r5", date: "2026-09-22", match: "Liverpool vs Tottenham", selection: "Liverpool Win", odds: 1.6, status: "won" },
  { id: "r6", date: "2026-09-21", match: "Manchester City vs Newcastle", selection: "Double Chance 1X", odds: 1.25, status: "lost" },
  { id: "r7", date: "2026-09-20", match: "PSG vs Marseille", selection: "PSG -1.5 Handicap", odds: 1.85, status: "won" },
  { id: "r8", date: "2026-09-28", match: "Real Madrid vs Villarreal", selection: "Over 2.5 Goals", odds: 1.5, status: "pending" },
];
