import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://karthickdev.com'),
  title: {
    default: 'Karthick Kumar | Freelance Product & Web Developer',
    template: '%s | Karthick Kumar',
  },
  description: 'Freelance product developer for startups, agencies, founders, and small businesses worldwide. Websites, web apps, e-commerce, frontend, AI integrations, MCP connectivity, and complete digital product development.',
  keywords: ['freelance web developer', 'freelance product developer', 'website developer for small business', 'startup web developer', 'agency frontend developer', 'React developer', 'Next.js developer', 'e-commerce developer', 'Shopify developer', 'AI integration developer', 'MCP developer', 'remote full stack developer', 'Chennai web developer'],
  alternates: { canonical: '/' },
  category: 'technology',
  authors: [{ name: 'Karthick Kumar', url: 'https://karthickdev.com' }],
  creator: 'Karthick Kumar',
  publisher: 'Karthick Kumar',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'Karthick Kumar | Freelance Product & Web Developer',
    description: 'Websites, web apps, e-commerce, frontend, and AI-powered product development for clients worldwide.',
    url: 'https://karthickdev.com',
    type: 'website',
    siteName: 'Karthick Kumar — Product Developer',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: 'Karthick Kumar | Freelance Product Developer', description: 'Complete digital product development for startups, agencies, founders, and small businesses worldwide.' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
