// Central data model. Shaped so a Supabase/Postgres schema can map to these
// types 1:1 later — each entity has a stable `id`, and relations (analysis,
// predictions, betslips) are nested arrays that could become joined tables.

export type ResultLetter = "W" | "D" | "L";

export type Competition =
  | "Premier League"
  | "La Liga"
  | "Bundesliga"
  | "Serie A"
  | "Ligue 1"
  | "Champions League";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  crestInitials: string; // used for the placeholder crest badge
  colorFrom: string;
  colorTo: string;
}

export interface H2HMeeting {
  date: string; // ISO date
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  competition: string;
}

export interface GoalStats {
  avgGoals: number;
  over15Pct: number;
  over25Pct: number;
  bttsPct: number;
  cleanSheetsPct: number;
}

export interface VenueForm {
  matches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
}

export interface KeyFactor {
  label: string;
  detail: string;
}

export type BettingMarket =
  | "1X2"
  | "Double Chance"
  | "Over/Under"
  | "BTTS"
  | "Draw No Bet";

export interface Prediction {
  id: string;
  market: BettingMarket;
  selection: string;
  odds: number;
  reasoning: string;
  isPremium?: boolean;
}

export type Bookmaker = "Betika" | "SportPesa" | "SportyBet" | "Odibets";

export interface BetSlip {
  id: string;
  bookmaker: Bookmaker;
  slipName: string;
  selections: number;
  combinedOdds: number;
  code: string;
  updatedAt: string; // ISO datetime
}

export type MatchStatus = "upcoming" | "live" | "finished";

export interface Match {
  id: string;
  slug: string;
  competition: Competition;
  venue: string;
  date: string; // ISO date
  kickoff: string; // e.g. "18:30"
  status: MatchStatus;
  homeTeam: Team;
  awayTeam: Team;
  homeForm: ResultLetter[];
  awayForm: ResultLetter[];
  h2h: H2HMeeting[];
  goalStats: GoalStats;
  homeVenueForm: VenueForm;
  awayVenueForm: VenueForm;
  analysis: string; // analyst's written commentary, may include multiple paragraphs separated by \n\n
  keyFactors: KeyFactor[];
  predictions: Prediction[];
  betslips: BetSlip[];
  hasAnalysis: boolean;
}

export interface ResultRecord {
  id: string;
  date: string;
  match: string;
  selection: string;
  odds: number;
  status: "won" | "lost" | "pending";
}
