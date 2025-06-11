'use client'

import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ArticleLayoutProps {
  post: {
    title: string
    excerpt?: string
    published_at: string
    reading_time?: number
    primary_author?: { name: string }
    feature_image?: string
    html: string
    tags?: Array<{ name: string }>
  } | null
}

export default function ArticleLayout({ post }: ArticleLayoutProps) {
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/#case-blog" 
            className="inline-flex items-center px-6 py-3 bg-azure-600 text-white rounded-xl font-semibold hover:bg-azure-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  const publishedDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-light-blue-bg to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
          {/* Back Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link 
              href="/#case-blog" 
              className="inline-flex items-center text-azure-600 hover:text-azure-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-azure-600 text-white"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" strokeWidth={1.5} />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" strokeWidth={1.5} />
                <span>{post.reading_time || 5} min read</span>
              </div>
              {post.primary_author && (
                <div className="flex items-center">
                  <span>By {post.primary_author.name}</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.feature_image && (
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-card mb-8">
                <Image
                  src={post.feature_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:text-slate-900 prose-headings:font-bold
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-a:text-azure-600 prose-a:no-underline hover:prose-a:text-azure-700
          prose-strong:text-slate-900
          prose-img:rounded-xl prose-img:shadow-card
          prose-blockquote:border-l-azure-600 prose-blockquote:bg-light-blue-bg 
          prose-blockquote:p-6 prose-blockquote:rounded-r-xl
          prose-code:text-azure-600 prose-code:bg-light-blue-bg prose-code:px-2 prose-code:py-1 prose-code:rounded
        ">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link 
            href="/#case-blog" 
            className="inline-flex items-center px-6 py-3 bg-white border-2 border-azure-600 text-azure-600 rounded-xl font-semibold hover:bg-azure-600 hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Articles
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 