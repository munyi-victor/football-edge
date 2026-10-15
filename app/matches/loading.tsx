import { MatchCardSkeleton } from "@/components/Skeletons";

export default function LoadingMatches() {
  return (
    <div className="container-edge py-10">
      <div className="skeleton mb-2 h-8 w-64" />
      <div className="skeleton mb-6 h-4 w-80" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <MatchCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
