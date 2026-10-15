import Link from "next/link";
import { LogIn } from "lucide-react";

export const metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="container-edge flex min-h-[60vh] items-center justify-center py-14">
      <div className="card w-full max-w-sm p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-edge-green/10 text-edge-green">
          <LogIn className="h-5 w-5" />
        </div>
        <h1 className="font-display text-xl font-semibold text-ink-light">Sign In</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Account sign-in isn&apos;t available in this preview yet. This page demonstrates where it
          will live once accounts are introduced.
        </p>
        <div className="mt-6 space-y-3 text-left opacity-60">
          <input disabled placeholder="Email address" className="w-full rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2.5 text-sm" />
          <input disabled placeholder="Password" type="password" className="w-full rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2.5 text-sm" />
        </div>
        <button disabled className="btn-primary mt-4 w-full cursor-not-allowed opacity-50">
          Sign In
        </button>
        <p className="mt-4 text-xs text-ink-faint">
          No account?{" "}
          <Link href="/register" className="text-edge-green hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
