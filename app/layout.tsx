import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Riley's Barbershop | Quality Haircuts in Mayfield, KY",
  description: 'Friendly, quick, and affordable barbershop in Mayfield, Kentucky. Walk-ins welcome. Haircuts, beard trims, shaves, and more.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}