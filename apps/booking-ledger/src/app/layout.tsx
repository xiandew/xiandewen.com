import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Booking Ledger - Customer Treatments Management",
  description: "Customer treatment management system with Firebase integration",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
