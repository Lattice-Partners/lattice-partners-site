'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ContentItem } from '@/lib/ghost'
import Link from 'next/link'

type ContentType = 'all' | 'case-studies' | 'insights'

interface CaseBlogGridProps {
  ghostContent?: ContentItem[]
}

const fallbackContent: ContentItem[] = [
  {
    id: '1',
    type: 'case-study',
    title: 'How RetailTech Increased Sales by 40% with AI Recommendations',
    excerpt: 'Discover how we implemented a personalized recommendation engine that transformed customer experience and boosted revenue.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'E-commerce',
    url: '#'
  },
  {
    id: '2',
    type: 'insight',
    title: 'The Future of AI in Customer Service: Beyond Chatbots',
    excerpt: 'Exploring emerging trends in AI-powered customer service and what businesses need to know to stay ahead.',
    date: '2024-01-10',
    readTime: '5 min read',
    category: 'AI Trends',
    url: '#'
  },
  {
    id: '3',
    type: 'case-study',
    title: 'Manufacturing Giant Cuts Costs by $3M with Predictive Maintenance',
    excerpt: 'Learn how AI-powered predictive analytics transformed equipment maintenance and dramatically reduced downtime.',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Manufacturing',
    url: '#'
  },
  {
    id: '4',
    type: 'insight',
    title: 'Building AI Teams: Skills and Strategies for 2024',
    excerpt: 'A comprehensive guide to building and scaling AI capabilities within your organization.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Team Building',
    url: '#'
  },
  {
    id: '5',
    type: 'case-study',
    title: 'FinTech Startup Automates 80% of Credit Decisions with AI',
    excerpt: 'How we helped a growing fintech company scale their credit assessment process without compromising accuracy.',
    date: '2024-01-03',
    readTime: '6 min read',
    category: 'Financial Services',
    url: '#'
  },
  {
    id: '6',
    type: 'insight',
    title: 'Data Privacy in AI: Best Practices for Responsible Implementation',
    excerpt: 'Essential guidelines for implementing AI solutions while maintaining strict data privacy and compliance standards.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Privacy & Ethics',
    url: '#'
  }
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'insights', label: 'Insights' }
]

export default function CaseBlogGrid({ ghostContent }: CaseBlogGridProps) {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all')

  const allContent = ghostContent && ghostContent.length > 0 ? ghostContent : fallbackContent

  const filteredContent = allContent.filter(item => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'case-studies') return item.type === 'case-study'
    if (activeFilter === 'insights') return item.type === 'insight'
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          Case Studies & Insights
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
          Real success stories and expert insights to guide your AI journey.
        </p>

        {/* Filter tabs */}
        <div className="flex justify-center space-x-1 bg-white rounded-xl p-2 shadow-card inline-flex">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as ContentType)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-azure-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item) => (
          <Link key={item.id} href={item.url} className="block">
            <motion.article
              className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer group h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.type === 'case-study' 
                    ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white'
                    : 'bg-light-blue-bg text-azure-600'
                }`}>
                  {item.category}
                </span>
                <span className="text-slate-400 group-hover:text-azure-600 transition-colors duration-200">→</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-azure-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100 mt-auto">
                <span>{new Date(item.date).toLocaleDateString()}</span>
                <span>{item.readTime}</span>
              </div>
            </motion.article>
          </Link>
        ))}
      </div>

      {/* Load more button */}
      <div className="text-center mt-12">
        <motion.button
          className="px-8 py-4 bg-white border-2 border-azure-600 text-azure-600 rounded-xl font-semibold hover:bg-azure-600 hover:text-white transition-all duration-200"
        >
          Load More Articles
        </motion.button>
      </div>
    </div>
  )
} 