import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/ghost'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ArticleLayout from '@/components/ArticleLayout'

interface ArticlePageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  
  console.log(`🔍 Fetching article with slug: ${slug}`)
  
  const post = await getPostBySlug(slug)
  
  if (!post) {
    console.log(`❌ Article not found for slug: ${slug}`)
    notFound()
  }
  
  console.log(`✅ Article found: "${post.title}"`)
  
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      <Header />
      <ArticleLayout post={post as { title: string; excerpt?: string; published_at: string; reading_time?: number; primary_author?: { name: string }; feature_image?: string; html: string; tags?: Array<{ name: string }> }} />
      <Footer />
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Article Not Found - Lattice Partners',
      description: 'The article you are looking for could not be found.'
    }
  }
  
  return {
    title: `${post.title} - Lattice Partners`,
    description: post.excerpt || post.meta_description || 'Read this article on Lattice Partners.',
    openGraph: {
      title: post.title,
      description: post.excerpt || post.meta_description,
      images: post.feature_image ? [post.feature_image] : [],
      type: 'article',
      publishedTime: post.published_at,
      authors: post.authors?.map((author) => author.name || 'Unknown Author') || [],
    },
  }
} 