"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const TOAST_EVENT = "football-edge-toast";

export function showToast(message: string) {
  window.dispatchEvent(new CustomEvent(TOAST_EVENT, { detail: message }));
}

export default function ToastHost() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    function handler(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setMessage(detail);
      const timeout = setTimeout(() => setMessage(null), 2400);
      return () => clearTimeout(timeout);
    }
    window.addEventListener(TOAST_EVENT, handler);
    return () => window.removeEventListener(TOAST_EVENT, handler);
  }, []);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-pitch-elevated px-4 py-2.5 text-sm font-medium text-ink-light shadow-lg ring-1 ring-pitch-borderLight transition-opacity duration-200"
    >
      <CheckCircle2 className="h-4 w-4 text-edge-green" />
      {message}
    </div>
  );
}
