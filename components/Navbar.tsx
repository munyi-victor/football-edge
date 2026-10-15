"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, CircleDot } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { navLinks } from "@/lib/nav";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-pitch-border bg-pitch-bg/90 backdrop-blur">
      <div className="container-edge flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-light">
          <CircleDot className="h-5 w-5 text-edge-green" />
          Football Edge
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="btn-ghost">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link href="/premium" className="btn-secondary border-edge-gold/40 text-sm text-edge-gold hover:border-edge-gold hover:text-edge-gold">
            Premium
          </Link>
          <Link href="/login" className="btn-primary text-sm">
            Sign In
          </Link>
        </div>

        <button
          className="btn-ghost p-2 md:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MobileNavigation open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
