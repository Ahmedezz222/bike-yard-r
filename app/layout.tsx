import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bike Yard - Premium Cycling Store',
  description: 'Your one-stop shop for all things cycling. Quality bikes, gear, accessories, and expert service.',
  keywords: 'bikes, cycling, mountain bikes, road bikes, bike accessories, bike shop',
  authors: [{ name: 'Bike Yard Team' }],
  openGraph: {
    title: 'Bike Yard - Premium Cycling Store',
    description: 'Your one-stop shop for all things cycling',
    url: 'https://bike-yard.vercel.app',
    siteName: 'Bike Yard',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bike Yard Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bike Yard - Premium Cycling Store',
    description: 'Your one-stop shop for all things cycling',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}

