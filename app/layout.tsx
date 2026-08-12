import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://webmaster-global.vercel.app'),
  title: {
    default: 'Webmaster Global | Freelance Product & Web Developer',
    template: '%s | Webmaster Global',
  },
  description: 'Freelance product developer for startups, agencies, founders, and small businesses worldwide. Websites, web apps, e-commerce, frontend, AI integrations, MCP connectivity, and complete digital product development.',
  keywords: ['freelance web developer', 'freelance product developer', 'website developer for small business', 'startup web developer', 'agency frontend developer', 'React developer', 'Next.js developer', 'TypeScript developer', 'JavaScript developer', 'Node.js developer', 'Python web developer', 'remote full stack developer', 'e-commerce developer', 'Shopify developer', 'landing page developer', 'MVP developer for startups', 'SaaS product developer', 'custom web application developer', 'business website development', 'website redesign service', 'website performance optimization', 'frontend rescue developer', 'digital product consultant', 'AI integration developer', 'AI agent developer', 'MCP developer', 'Model Context Protocol integration', 'Claude integration developer', 'OpenAI integration developer', 'Codex developer', 'API integration developer', 'remote developer worldwide', 'freelance developer India', 'Chennai web developer'],
  alternates: { canonical: '/' },
  verification: {
    google: 'pMFMShAXFC68yGby1hwJdLQiMof7K8bnV9BygQqTqQ8',
  },
  category: 'technology',
  authors: [{ name: 'Webmaster Global', url: 'https://webmaster-global.vercel.app' }],
  creator: 'Webmaster Global',
  publisher: 'Webmaster Global',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'Webmaster Global | Freelance Product & Web Developer',
    description: 'Websites, web apps, e-commerce, frontend, and AI-powered product development for clients worldwide.',
    url: 'https://webmaster-global.vercel.app',
    type: 'website',
    siteName: 'Webmaster Global — Product Development',
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image', title: 'Webmaster Global | Freelance Product Developer', description: 'Complete digital product development for startups, agencies, founders, and small businesses worldwide.' },
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
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G7D4MCPF69"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G7D4MCPF69');
          `}
        </Script>
      </body>
    </html>
  )
}
