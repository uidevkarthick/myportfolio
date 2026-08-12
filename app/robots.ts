import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot'], allow: '/' },
    ],
    sitemap: 'https://webmaster-global.vercel.app/sitemap.xml',
    host: 'https://webmaster-global.vercel.app',
  }
}
