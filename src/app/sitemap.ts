import { MetadataRoute } from 'next'
import { getAllPosts, extractSlug } from '@/lib/ghost'

interface GhostPost {
  id: string
  uuid?: string
  title: string
  slug: string
  html: string
  plaintext?: string
  excerpt?: string
  published_at: string
  created_at: string
  updated_at: string
  featured: boolean
  feature_image?: string
  reading_time?: number
  url?: string
  meta_description?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.latticepartners.ai'
  
  console.log('🗺️ Generating sitemap...')

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]

  // Dynamic blog posts from Ghost
  let dynamicPages: MetadataRoute.Sitemap = []
  
  try {
    console.log('📝 Fetching blog posts from Ghost for sitemap...')
    const posts = await getAllPosts()
    
    dynamicPages = posts.map((post) => {
      const ghostPost = post as GhostPost
      const slug = extractSlug(ghostPost)
      const lastModified = ghostPost.updated_at || ghostPost.published_at || ghostPost.created_at
      
      return {
        url: `${baseUrl}/articles/${slug}`,
        lastModified: new Date(lastModified),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      }
    })
    
    console.log(`✅ Added ${dynamicPages.length} blog posts to sitemap`)
  } catch (error) {
    console.error('❌ Error fetching posts for sitemap:', error)
    // Continue with static pages only if Ghost API fails
  }

  const allPages = [...staticPages, ...dynamicPages]
  
  console.log(`🗺️ Sitemap generated with ${allPages.length} total pages`)
  
  return allPages
} 