import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'

import './globals.css'

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Chief Mike Adenuga | Billionaire Entrepreneur & Business Pioneer',
  description: 'Chief Michael Adeniyi Agbolade Ishola Adenuga Jr. - Founder & Chairman of Globacom and Conoil. Nigeria\'s second-richest person (2026). Visionary telecom and oil industry pioneer.',
  generator: 'v0.app',
  openGraph: {
    title: 'Chief Mike Adenuga | Billionaire Entrepreneur',
    description: 'Founder of Globacom and Conoil. A visionary shaping Africa\'s economic landscape through telecommunications and energy innovation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chief Mike Adenuga',
    description: 'Nigerian Billionaire, Telecom & Oil Pioneer | Globacom Founder | 2026',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfairDisplay.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
