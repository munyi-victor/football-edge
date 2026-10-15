import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastHost from "@/components/Toast";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Football Edge — Football Analysis & Smarter Decisions",
    template: "%s | Football Edge",
  },
  description:
    "Data-driven football match analysis, head-to-head statistics, form guides and researched predictions.",
  openGraph: {
    title: "Football Edge",
    description:
      "Data-driven football match analysis, head-to-head statistics, form guides and researched predictions.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ToastHost />
      </body>
    </html>
  );
}
