import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { UserProvider } from './contexts/UserContext'

export const metadata: Metadata = {
  title: 'The Auracle - Aura Reading & Spiritual Guidance',
  description: 'Awaken divine remembrance and energetic clarity through Rose Meditation, aura reading, and spiritual empowerment.',
  keywords: 'aura reading, rose meditation, spiritual guidance, energy healing, meditation courses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Performance optimization meta tags */}
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#FEF9E7" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-gradient-sacred" suppressHydrationWarning={true}>
        <UserProvider>
          <Header />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  )
}
