import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'arqui.dev',
  description: 'Nós somos a melhor opção em consultoria (na nossa humilde opinião)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
