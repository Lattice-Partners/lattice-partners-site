import GhostContentAPI from '@tryghost/content-api'

// Initialize Ghost Content API
const api = new GhostContentAPI({
  url: process.env.GHOST_URL!,
  key: process.env.GHOST_CONTENT_API_KEY!,
  version: 'v5.0'
})

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
  kpis?: { label: string; value: string; icon: any }[]
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
export function extractSlug(post: any): string {
  if (post.slug) return post.slug
  if (post.url) {
    const urlParts = post.url.split('/')
    return urlParts[urlParts.length - 2] || urlParts[urlParts.length - 1]
  }
  // Fallback: create slug from title
  return post.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'untitled'
}

// Convert Ghost post to our ContentItem format
export function transformGhostPost(post: any): ContentItem {
  const primaryTag = post.primary_tag?.name || 'General'
  const isInsight = post.tags?.some((tag: any) => 
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
    allPosts.forEach((post: any, index: number) => {
      const tags = post.tags?.map((tag: any) => tag.name).join(', ') || 'No tags'
      console.log(`${index + 1}. "${post.title}" - Tags: [${tags}]`)
    })
    
    // TEMPORARY: Return ALL posts to test integration (normally we'd filter by tags)
    console.log(`🚀 Returning ALL ${allPosts.length} posts for testing`)
    return allPosts.map(transformGhostPost)
    
    /* 
    // Filter posts that have either "Case Studies" or "Insights" tags
    const relevantPosts = allPosts.filter((post: any) => {
      const hasRelevantTag = post.tags?.some((tag: any) => 
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
    
    return relevantPosts.map(transformGhostPost)
    */
  } catch (error) {
    console.error('❌ Error fetching content for section:', error)
    return []
  }
} 