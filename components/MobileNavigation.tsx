"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { navLinks } from "@/lib/nav";
import { cn } from "@/lib/utils";

export default function MobileNavigation({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-black/60 transition-opacity",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-72 max-w-[80%] flex-col bg-pitch-elevated p-5 shadow-xl transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-display text-lg font-bold">Menu</span>
          <button onClick={onClose} className="btn-ghost p-2" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-md px-3 py-3 text-sm font-medium text-ink-light hover:bg-pitch-surface"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 border-t border-pitch-border pt-4">
          <Link href="/premium" onClick={onClose} className="btn-secondary border-edge-gold/40 text-edge-gold">
            Premium
          </Link>
          <Link href="/login" onClick={onClose} className="btn-primary">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
