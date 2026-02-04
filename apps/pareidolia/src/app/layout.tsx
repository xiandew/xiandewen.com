import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pareidolia | AI Sketch Enhancement",
  description: "Turn your rough sketches into refined art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
