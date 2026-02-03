import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0891b2',
}

export const metadata: Metadata = {
  title: {
    default: 'TriExpert Credit | Reparación de Crédito Legal',
    template: '%s | TriExpert Credit',
  },
  description: 'Mejora tu puntuación de crédito hasta 200+ puntos. Auditoría legal bajo FCRA, expertos certificados en Tampa FL. Consulta gratuita.',
  keywords: ['reparación de crédito', 'mejorar score', 'auditoría crédito', 'FCRA', 'eliminar deudas', 'Tampa FL', 'credit repair'],
  authors: [{ name: 'TriExpert Services' }],
  creator: 'TriExpert Services',
  publisher: 'TriExpert Services',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_US',
    url: 'https://triexpertservice.com',
    siteName: 'TriExpert Credit',
    title: 'TriExpert Credit | Reparación de Crédito Legal',
    description: 'Mejora tu puntuación de crédito hasta 200+ puntos. Auditoría legal bajo FCRA.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TriExpert Credit - Reparación de Crédito',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TriExpert Credit | Reparación de Crédito Legal',
    description: 'Mejora tu puntuación de crédito hasta 200+ puntos. Auditoría legal bajo FCRA.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://triexpertservice.com',
  },
  category: 'finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
