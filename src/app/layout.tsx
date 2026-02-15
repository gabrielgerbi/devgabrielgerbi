import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gabriel Gerbi — Full Stack Developer',
  description: 'Full Stack Developer especializado em React, Next.js e TypeScript. Transformo ideias complexas em interfaces elegantes e sistemas robustos.',
  openGraph: {
    title: 'Gabriel Gerbi — Full Stack Developer',
    description: 'Full Stack Developer especializado em React, Next.js e TypeScript.',
    url: 'https://gabrielgerbi.com.br',
    siteName: 'Gabriel Gerbi',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
