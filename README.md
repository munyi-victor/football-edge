# Football Edge — Frontend MVP

A football match-analysis and predictions frontend, built with Next.js (App Router), React, TypeScript and Tailwind CSS. Mock data only — no backend, auth, payments or live APIs.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/` — routes (App Router). Each folder under `app/` is a page: `/`, `/matches`, `/matches/[slug]`, `/predictions`, `/bet-slips`, `/results`, `/about`, `/premium`, `/login`, `/register`, `/account`.
- `components/` — reusable UI: `Navbar`, `Footer`, `MobileNavigation`, `MatchCard`, `TeamBadge`, `FormIndicator`, `H2HTable`, `StatCard`, `PredictionCard`, `BetSlipCard`, `BookmakerCard`, `AnalysisSection`, `PremiumCard`, `ResultTable`, `LeagueFilter`, `DateFilter`, `SearchBar`, `Skeletons`, `Toast`.
- `data/matches.ts` — all mock content: matches, H2H history, goal stats, analysis text, predictions and betslips.
- `data/types.ts` — the data model (`Match`, `Prediction`, `BetSlip`, etc.). This is the contract a future backend/Supabase schema should match.
- `lib/utils.ts` — small formatting/helper functions.

## Backend-readiness

- Every page reads from `data/matches.ts` through typed helpers (`getMatchBySlug`, `getAllBetslips`) rather than hardcoding UI — swap these for API/Supabase calls later without touching components.
- `Match`, `Prediction` and `BetSlip` each carry a stable `id`, matching how they'd be modeled as database tables.
- `Prediction.isPremium` and the locked `PremiumCard` demonstrate where free/premium gating will plug in once accounts exist.
- `/login`, `/register`, `/account`, `/premium` are non-functional placeholders that show where auth and billing will live.
- `/matches/[slug]` is a dynamic route per match (SEO-friendly, individually indexable) with `generateMetadata` and `generateStaticParams` already wired up for titles, descriptions, canonical URLs and Open Graph tags.

## Recommended next steps

1. Replace `data/matches.ts` with a real data source (Supabase tables mirroring `data/types.ts`).
2. Build the admin/backend for creating and publishing matches, analysis, predictions and betslips.
3. Add real authentication and gate premium predictions/betslips behind it.
4. Add payments for the premium tiers shown on `/premium`.
5. Connect a live football data API for fixtures, form and H2H instead of manual entry (optional — manual entry can also remain the workflow).
