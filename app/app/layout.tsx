
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'WebJedi - Full-Stack Developer & AI Specialist',
    template: '%s | WebJedi'
  },
  description: 'Aurélien Borst - Full-Stack Developer & AI Specialist crafting modern, eco-friendly web solutions that convert visitors into customers.',
  keywords: ['web development', 'full-stack developer', 'AI specialist', 'eco-friendly websites', 'Next.js', 'React'],
  authors: [{ name: 'Aurélien Borst' }],
  creator: 'Aurélien Borst',
  metadataBase: new URL('https://webjedi.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'fr-FR': '/fr',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webjedi.dev',
    title: 'WebJedi - Full-Stack Developer & AI Specialist',
    description: 'Crafting modern, eco-friendly web solutions that convert visitors into customers.',
    siteName: 'WebJedi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebJedi - Full-Stack Developer & AI Specialist',
    description: 'Crafting modern, eco-friendly web solutions that convert visitors into customers.',
    creator: '@webjedi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
