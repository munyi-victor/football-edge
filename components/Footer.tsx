import Link from "next/link";
import { CircleDot, ShieldAlert } from "lucide-react";
import { navLinks } from "@/lib/nav";

export default function Footer() {
  return (
    <footer className="border-t border-pitch-border bg-pitch-elevated">
      <div className="container-edge grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-light">
            <CircleDot className="h-5 w-5 text-edge-green" />
            Football Edge
          </Link>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Structured football analysis built on match history, form and statistical trends.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink-light">Explore</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-edge-green">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink-light">Account</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            <li><Link href="/premium" className="hover:text-edge-green">Premium</Link></li>
            <li><Link href="/login" className="hover:text-edge-green">Sign In</Link></li>
            <li><Link href="/register" className="hover:text-edge-green">Create Account</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-ink-light">Responsible Play</h4>
          <p className="flex gap-2 text-sm text-ink-muted">
            <ShieldAlert className="h-4 w-4 shrink-0 text-edge-gold" />
            Betting involves risk. Our content is analysis, not a guarantee of outcomes. Bet responsibly and only what you can afford to lose. 18+.
          </p>
        </div>
      </div>
      <div className="border-t border-pitch-border py-4 text-center text-xs text-ink-faint">
        © 2026 Football Edge. All match data is illustrative for this preview.
      </div>
    </footer>
  );
}
