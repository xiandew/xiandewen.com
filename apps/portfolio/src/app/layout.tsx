import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Xiande Wen - Full Stack Developer Portfolio",
  description: "Showcase of full-stack development projects by Xiande Wen",
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
