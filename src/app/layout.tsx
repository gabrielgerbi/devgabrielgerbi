import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gabriel Gerbi | Full Stack Developer',
  description: 'Full Stack Developer de Amparo, SP. Especializado em React, Next.js e TypeScript. Transformo ideias em sistemas robustos e interfaces elegantes.',
  keywords: ['developer', 'full stack', 'react', 'next.js', 'typescript', 'gabriel gerbi'],
  authors: [{ name: 'Gabriel Gerbi' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Gabriel Gerbi | Full Stack Developer',
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
