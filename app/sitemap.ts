import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [{
    url: 'https://webmaster-global.vercel.app',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  }]
}
