import GhostContentAPI from '@tryghost/content-api'
import { LucideIcon } from 'lucide-react'

// Initialize Ghost Content API
const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_CONTENT_API_KEY!,
  version: 'v5.0'
})

interface GhostTag {
  id: string
  name: string
  slug: string
  description?: string
}

interface GhostAuthor {
  id: string
  name: string
  slug: string
  profile_image?: string
}

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
  tags?: GhostTag[]
  primary_tag?: GhostTag
  authors?: GhostAuthor[]
  primary_author?: GhostAuthor
  url?: string
  meta_description?: string
}

export interface ContentItem {
  id: string
  type: 'case-study' | 'insight'
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  url: string
  featuredImage?: string
  kpis?: { label: string; value: string; icon: LucideIcon }[]
}

// Fetch all posts
export async function getAllPosts() {
  try {
    const posts = await api.posts.browse({
      limit: 'all',
      include: ['tags', 'authors'],
      order: 'published_at DESC'
    })
    return posts
  } catch (error) {
    console.error('Error fetching Ghost posts:', error)
    return []
  }
}

// Fetch posts by tag
export async function getPostsByTag(tagSlug: string) {
  try {
    const posts = await api.posts.browse({
      limit: 'all',
      include: ['tags', 'authors'],
      filter: `tag:${tagSlug}`,
      order: 'published_at DESC'
    })
    return posts
  } catch (error) {
    console.error(`Error fetching posts with tag ${tagSlug}:`, error)
    return []
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug: string) {
  try {
    const post = await api.posts.read({ slug }, {
      include: ['tags', 'authors']
    })
    return post
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error)
    return null
  }
}

// Extract slug from Ghost URL or generate from title
export function extractSlug(post: GhostPost): string {
  if (post.slug) return post.slug
  if (post.url) {
    const urlParts = post.url.split('/')
    return urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1]
  }
  // Fallback: create slug from title
  return post.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'untitled'
}

// Convert Ghost post to our ContentItem format
export function transformGhostPost(post: GhostPost): ContentItem {
  const primaryTag = post.primary_tag?.name || 'General'
  const isInsight = post.tags?.some((tag: GhostTag) => 
    tag.name?.toLowerCase() === 'insights' || 
    tag.slug === 'insights'
  ) || false
  
  return {
    id: post.id || post.uuid || 'unknown',
    type: isInsight ? 'insight' : 'case-study',
    title: post.title || 'Untitled',
    excerpt: post.excerpt || post.plaintext?.substring(0, 160) + '...' || 'No excerpt available',
    date: post.published_at || post.created_at || new Date().toISOString(),
    readTime: `${post.reading_time || 5} min read`,
    category: primaryTag,
    url: `/articles/${extractSlug(post)}`, // Use internal URL instead of Ghost URL
    featuredImage: post.feature_image || undefined,
    // KPIs will be extracted from post content or custom fields later
    kpis: undefined
  }
}

// Get content for the Case Studies & Insights section
export async function getContentForSection(): Promise<ContentItem[]> {
  try {
    console.log('🔗 Calling Ghost API getAllPosts...')
    const allPosts = await getAllPosts()
    console.log(`📚 Retrieved ${allPosts.length} total posts from Ghost`)
    
    // Log all posts and their tags for debugging
    allPosts.forEach((post, index: number) => {
      const tags = post.tags?.map((tag) => tag.name).join(', ') || 'No tags'
      console.log(`${index + 1}. "${post.title}" - Tags: [${tags}]`)
    })
    
    // TEMPORARY: Return ALL posts to test integration (normally we'd filter by tags)
    console.log(`🚀 Returning ALL ${allPosts.length} posts for testing`)
    return allPosts.map((post) => transformGhostPost(post as GhostPost))
    
    /* 
    // Filter posts that have either "Case Studies" or "Insights" tags
    const relevantPosts = allPosts.filter((post) => {
      const hasRelevantTag = post.tags?.some((tag) => 
        tag.name === 'Case Studies' || 
        tag.name === 'Insights' ||
        tag.slug === 'case-studies' ||
        tag.slug === 'insights'
      )
      
      if (hasRelevantTag) {
        console.log(`✅ Post "${post.title}" has relevant tags`)
      }
      
      return hasRelevantTag
    })
    
    console.log(`🎯 Found ${relevantPosts.length} posts with Case Studies/Insights tags`)
    
    return relevantPosts.map((post) => transformGhostPost(post as GhostPost))
    */
  } catch (error) {
    console.error('❌ Error fetching content for section:', error)
    return []
  }
} 