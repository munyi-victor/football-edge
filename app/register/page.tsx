import Link from "next/link";
import { UserPlus } from "lucide-react";

export const metadata = { title: "Create Account" };

export default function RegisterPage() {
  return (
    <div className="container-edge flex min-h-[60vh] items-center justify-center py-14">
      <div className="card w-full max-w-sm p-6 text-center sm:p-8">
        <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-edge-green/10 text-edge-green">
          <UserPlus className="h-5 w-5" />
        </div>
        <h1 className="font-display text-xl font-semibold text-ink-light">Create Account</h1>
        <p className="mt-2 text-sm text-ink-muted">
          Registration isn&apos;t functional in this preview. This page shows how account creation
          will fit into the product once it&apos;s built.
        </p>
        <div className="mt-6 space-y-3 text-left opacity-60">
          <input disabled placeholder="Full name" className="w-full rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2.5 text-sm" />
          <input disabled placeholder="Email address" className="w-full rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2.5 text-sm" />
          <input disabled placeholder="Password" type="password" className="w-full rounded-md border border-pitch-border bg-pitch-elevated px-3 py-2.5 text-sm" />
        </div>
        <button disabled className="btn-primary mt-4 w-full cursor-not-allowed opacity-50">
          Create Account
        </button>
        <p className="mt-4 text-xs text-ink-faint">
          Already have an account?{" "}
          <Link href="/login" className="text-edge-green hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
