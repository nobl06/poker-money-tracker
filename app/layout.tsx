import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poker Money Tracker",
  description: "Shared ledger and settlement platform for recurring poker cash games.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
