import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://webmaster-global.vercel.app'
  const homeLastModified = new Date('2026-08-17')
  const legalLastModified = new Date('2026-08-12')
  return [
    { url: base, lastModified: homeLastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/privacy`, lastModified: legalLastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/cookies`, lastModified: legalLastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/terms`, lastModified: legalLastModified, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
