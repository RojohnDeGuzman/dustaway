import type { Metadata, Viewport } from 'next'
import { Outfit, Fraunces } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingSocial from '@/components/FloatingSocial'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dustaway - Cleaning Made Simple',
  description: 'Professional cleaning services with a modern touch. Book online, manage your account, and enjoy a spotless space.',
  icons: {
    icon: '/assets/dustaway-logo.png',
    apple: '/assets/dustaway-logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,200..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-14 sm:pt-16">{children}</main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  )
}
