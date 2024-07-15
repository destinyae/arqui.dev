export const metadata = {
  title: 'arqui.dev',
  description: 'Nós somos a melhor opção em consultoria de produtos digitais (na nossa humilde opinião)',
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
