import { getContentForSection, ContentItem } from '@/lib/ghost'
import CaseBlogGrid from './CaseBlogGrid'

export default async function CaseBlogGridServer() {
  let ghostContent: ContentItem[] = []
  
  try {
    console.log('🔍 Fetching Ghost content...')
    ghostContent = await getContentForSection()
    console.log(`📝 Ghost API returned ${ghostContent.length} posts:`, ghostContent)
  } catch (error) {
    console.error('❌ Failed to fetch Ghost content:', error)
    // We'll fall back to the hardcoded content in the client component
  }
  
  return <CaseBlogGrid ghostContent={ghostContent} />
} 