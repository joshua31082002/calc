import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TradeLink — trusted home trades",
  description: "A smarter way to get home repairs done.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
