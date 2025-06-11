'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react'

type ContentType = 'all' | 'success-stories' | 'insights'

interface ContentItem {
  id: number
  type: 'success-story' | 'insight'
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  kpis?: { label: string; value: string; icon: any }[]
}

const content: ContentItem[] = [
  {
    id: 1,
    type: 'success-story',
    title: 'How RetailTech Increased Sales by 40% with AI Recommendations',
    excerpt: 'Discover how we implemented a personalized recommendation engine that transformed customer experience and boosted revenue.',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'E-commerce',
    kpis: [
      { label: 'Sales Increase', value: '+40%', icon: TrendingUp },
      { label: 'Customer Engagement', value: '+65%', icon: Users },
      { label: 'Implementation Time', value: '6 weeks', icon: Zap }
    ]
  },
  {
    id: 2,
    type: 'insight',
    title: 'The Future of AI in Customer Service: Beyond Chatbots',
    excerpt: 'Exploring emerging trends in AI-powered customer service and what businesses need to know to stay ahead.',
    date: '2024-01-10',
    readTime: '5 min read',
    category: 'AI Trends'
  },
  {
    id: 3,
    type: 'success-story',
    title: 'Manufacturing Giant Cuts Costs by $3M with Predictive Maintenance',
    excerpt: 'Learn how AI-powered predictive analytics transformed equipment maintenance and dramatically reduced downtime.',
    date: '2024-01-08',
    readTime: '10 min read',
    category: 'Manufacturing',
    kpis: [
      { label: 'Cost Savings', value: '$3M', icon: TrendingUp },
      { label: 'Downtime Reduction', value: '-75%', icon: Zap },
      { label: 'Efficiency Gain', value: '+30%', icon: Users }
    ]
  },
  {
    id: 4,
    type: 'insight',
    title: 'Building AI Teams: Skills and Strategies for 2024',
    excerpt: 'A comprehensive guide to building and scaling AI capabilities within your organization.',
    date: '2024-01-05',
    readTime: '7 min read',
    category: 'Team Building'
  },
  {
    id: 5,
    type: 'success-story',
    title: 'FinTech Startup Automates 80% of Credit Decisions with AI',
    excerpt: 'How we helped a growing fintech company scale their credit assessment process without compromising accuracy.',
    date: '2024-01-03',
    readTime: '6 min read',
    category: 'Financial Services',
    kpis: [
      { label: 'Automation Rate', value: '80%', icon: Zap },
      { label: 'Processing Speed', value: '+90%', icon: TrendingUp },
      { label: 'Accuracy', value: '99.2%', icon: Users }
    ]
  },
  {
    id: 6,
    type: 'insight',
    title: 'Data Privacy in AI: Best Practices for Responsible Implementation',
    excerpt: 'Essential guidelines for implementing AI solutions while maintaining strict data privacy and compliance standards.',
    date: '2024-01-01',
    readTime: '9 min read',
    category: 'Privacy & Ethics'
  }
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'success-stories', label: 'Success Stories' },
  { id: 'insights', label: 'Insights' }
]

export default function CaseBlogGrid() {
  const [activeFilter, setActiveFilter] = useState<ContentType>('all')

  const filteredContent = content.filter(item => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'success-stories') return item.type === 'success-story'
    if (activeFilter === 'insights') return item.type === 'insight'
    return true
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
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
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-azure-600 text-white shadow-md'
                  : 'text-slate-600 hover:text-azure-600 hover:bg-light-blue-bg'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                item.type === 'success-story' 
                  ? 'bg-gradient-to-r from-gradient-start to-gradient-end text-white'
                  : 'bg-light-blue-bg text-azure-600'
              }`}>
                {item.category}
              </span>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-azure-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-azure-600 transition-colors duration-300">
              {item.title}
            </h3>

            {/* Excerpt */}
            <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
              {item.excerpt}
            </p>

            {/* KPIs for success stories */}
            {item.kpis && (
              <div className="mb-4 p-4 bg-gradient-to-r from-light-blue-bg to-lighter-blue-bg rounded-lg">
                <div className="grid grid-cols-3 gap-2">
                  {item.kpis.map((kpi, kpiIndex) => {
                    const Icon = kpi.icon
                    return (
                      <div key={kpiIndex} className="text-center">
                        <Icon className="w-4 h-4 text-azure-600 mx-auto mb-1" strokeWidth={1.5} />
                        <div className="text-sm font-bold text-slate-900">{kpi.value}</div>
                        <div className="text-xs text-slate-600">{kpi.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Meta */}
            <div className="flex items-center text-sm text-slate-500 pt-4 border-t border-slate-100">
              <Calendar className="w-4 h-4 mr-2" strokeWidth={1.5} />
              <span className="mr-4">{new Date(item.date).toLocaleDateString()}</span>
              <span>{item.readTime}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Load more button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          className="px-8 py-4 bg-white border-2 border-azure-600 text-azure-600 rounded-xl font-semibold hover:bg-azure-600 hover:text-white transition-all duration-300"
        >
          Load More Articles
        </motion.button>
      </motion.div>
    </div>
  )
} 