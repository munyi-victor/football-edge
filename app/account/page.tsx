import Link from "next/link";
import { User, Lock, Bell, CreditCard } from "lucide-react";

export const metadata = { title: "Account" };

const rows = [
  { icon: User, label: "Profile details" },
  { icon: Lock, label: "Password & security" },
  { icon: Bell, label: "Notification preferences" },
  { icon: CreditCard, label: "Premium subscription" },
];

export default function AccountPage() {
  return (
    <div className="container-edge max-w-xl py-14">
      <h1 className="font-display text-2xl font-bold text-ink-light">Account</h1>
      <p className="mt-1 text-sm text-ink-muted">
        This is a placeholder for the account area. Sign in isn&apos;t functional yet, so nothing
        below is interactive.
      </p>

      <div className="mt-8 card divide-y divide-pitch-border">
        {rows.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 px-4 py-4 opacity-60">
            <Icon className="h-4 w-4 text-ink-muted" />
            <span className="text-sm text-ink-light">{label}</span>
          </div>
        ))}
      </div>

      <Link href="/" className="btn-secondary mt-6 inline-flex">
        Back to home
      </Link>
    </div>
  );
}
