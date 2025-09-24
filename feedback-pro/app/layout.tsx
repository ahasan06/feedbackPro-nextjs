import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
     
    >
      <html lang="en">
        <body >
          {/* Use the Header component here */}
          <Header />
          {children}
          <Footer/>
        </body>
      </html>
    </ClerkProvider>
  )
}
