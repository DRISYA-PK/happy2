import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Happiness Coaching Academy",
  description:
    "Science-based mindset coaching for emotional healing, personal growth, and lasting happiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
