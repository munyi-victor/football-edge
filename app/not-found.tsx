import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-edge flex min-h-[50vh] flex-col items-center justify-center py-14 text-center">
      <h1 className="font-display text-3xl font-bold text-ink-light">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-ink-muted">
        We couldn&apos;t find the match or page you&apos;re looking for.
      </p>
      <Link href="/matches" className="btn-primary mt-6">
        Browse Matches
      </Link>
    </div>
  );
}
