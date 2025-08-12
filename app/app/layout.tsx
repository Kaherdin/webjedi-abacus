
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Web Jedi - Problems Solver & Time Saver',
    template: '%s | Web Jedi'
  },
  description: 'I create fast, modern apps, train your teams on AI, and automate your workflows — so you can focus on what really matters.',
  keywords: [
    'web development',
    'AI automation',
    'React developer',
    'Next.js',
    'SaaS development',
    'eco-friendly websites',
    'process automation',
    'full-stack developer'
  ],
  authors: [{ name: 'Aurélien Borst', url: 'https://webjedi.vercel.app' }],
  creator: 'Aurélien Borst',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://webjedi.vercel.app',
    title: 'Web Jedi - Problems Solver & Time Saver',
    description: 'I create fast, modern apps, train your teams on AI, and automate your workflows — so you can focus on what really matters.',
    siteName: 'Web Jedi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Jedi - Problems Solver & Time Saver',
    description: 'I create fast, modern apps, train your teams on AI, and automate your workflows — so you can focus on what really matters.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
