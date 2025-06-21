'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Cog, Rocket, CheckCircle, ArrowRight, BarChart3, Settings, Shield, Zap, Clock, RefreshCw, TrendingUp, Users, Target, Activity } from 'lucide-react'

const steps = [
  {
    step: "Step 1",
    icon: Search,
    title: "Discovery",
    description: "We interview you and your employees to understand your workflows, challenges, and goals.",
    features: ["Current workflow analysis", "Process identification", "Bottleneck detection", "Efficiency assessment"],
    color: "from-blue-500 to-azure-600"
  },
  {
    step: "Step 2", 
    icon: Lightbulb,
    title: "Strategy",
    description: "We craft a tailored AI roadmap that aligns with your unique strengths and business objectives.",
    features: ["Custom roadmap", "AI tool recommendations", "Implementation timeline", "Success metrics"],
    color: "from-azure-600 to-purple-600"
  },
  {
    step: "Step 3",
    icon: Cog,
    title: "Implementation",
    description: "We supercharge your team with AI, create custom workflows to automate your processes, and work with you to define your AI strategy and culture.",
    features: ["Team training", "Workflow automation", "Custom integrations", "Change management"],
    color: "from-purple-600 to-pink-600"
  },
  {
    step: "Step 4",
    icon: Rocket,
    title: "Launch & Scale",
    description: "We collaborate on long-term solutions, help your team explore and purchase AI tools, and provide support as needed.",
    features: ["Performance monitoring", "Continuous optimization", "Ongoing support", "Scale planning"],
    color: "from-pink-600 to-orange-500"
  }
]

const dashboardSystems = [
  {
    id: 1,
    name: "AI Performance Monitor",
    description: "Efficiency increased by 45%",
    icon: TrendingUp,
    statusType: "active"
  },
  {
    id: 2,
    name: "Customer Satisfaction",
    description: "Update available",
    icon: Users,
    statusType: "update"
  },
  {
    id: 3,
    name: "System Health",
    description: "All systems operational",
    icon: Activity,
    statusType: "success"
  }
]

const codeSnippets = [
  {
    filename: "ai_workflow.py",
    content: `import openai
from datetime import datetime

class AIWorkflowManager:
    def __init__(self, api_key):
        self.client = openai.OpenAI(api_key=api_key)
        
    def process_document(self, document):
        """Extract key insights from documents"""
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Extract key insights"},
                {"role": "user", "content": document}
            ]
        )
        return response.choices[0].message.content
        
    def automate_task(self, task_description):
        """Generate automation workflow"""
        workflow = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Create automation steps"},
                {"role": "user", "content": task_description}
            ]
        )
        return self.execute_workflow(workflow)`
  },
  {
    filename: "data_processor.js",
    content: `const axios = require('axios');

class DataProcessor {
    constructor(apiEndpoint) {
        this.apiEndpoint = apiEndpoint;
        this.processedCount = 0;
    }
    
    async processCustomerData(customerData) {
        try {
            const insights = await this.generateInsights(customerData);
            const recommendations = await this.getRecommendations(insights);
            
            await this.saveResults({
                customer: customerData.id,
                insights: insights,
                recommendations: recommendations,
                timestamp: new Date().toISOString()
            });
            
            this.processedCount++;
            return { success: true, insights, recommendations };
        } catch (error) {
            console.error('Processing failed:', error);
            return { success: false, error: error.message };
        }
    }
    
    async generateInsights(data) {
        const response = await axios.post(\`\${this.apiEndpoint}/analyze\`, {
            data: data,
            model: 'advanced-analytics'
        });
        return response.data.insights;
    }`
  },
  {
    filename: "integration.py",
    content: `from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)

@app.route('/webhook/process', methods=['POST'])
def process_webhook():
    """Handle incoming workflow triggers"""
    data = request.json
    
    # Validate and process the incoming data
    if validate_request(data):
        result = trigger_ai_workflow(data)
        return jsonify({
            'status': 'success',
            'workflow_id': result.get('id'),
            'estimated_completion': '2-5 minutes'
        })
    
    return jsonify({'status': 'error', 'message': 'Invalid request'}), 400

def trigger_ai_workflow(data):
    """Trigger AI processing workflow"""
    workflow_config = {
        'input_data': data,
        'processing_steps': [
            'data_validation',
            'ai_analysis', 
            'result_generation',
            'notification_dispatch'
        ],
        'priority': data.get('priority', 'normal')
    }
    
    response = requests.post(
        'http://ai-processor/v1/workflows',
        json=workflow_config,
        headers={'Authorization': f'Bearer {get_api_token()}'}
    )
    
    return response.json()`
  }
]

const DiscoveryAnimation = () => {
  return (
    <div className="grid grid-cols-2 gap-6 items-center">
      {/* Left side - Radar animation */}
      <div className="relative flex items-center justify-center">
        {/* Outer circle */}
        <div className="w-32 h-32 rounded-full border-2 border-slate-200 relative overflow-hidden">
          {/* Inner circles */}
          <div className="absolute inset-4 rounded-full border border-slate-100"></div>
          <div className="absolute inset-8 rounded-full border border-slate-100"></div>
          
          {/* Radar sweep animation */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.3) 45deg, transparent 90deg)`
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-azure-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Right side - Feature list */}
      <div className="space-y-3">
        {steps[0].features.map((feature, idx) => (
          <motion.div 
            key={idx} 
            className="flex items-center text-sm text-slate-600"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
          >
            <div className="w-2 h-2 rounded-full bg-azure-600 mr-3"></div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const StrategyAnimation = () => {
  return (
    <div className="flex justify-center">
      <div className="relative">
        {/* Compass base */}
        <div className="w-28 h-28 rounded-full border border-slate-200 bg-white relative shadow-sm">
          {/* Inner circle */}
          <div className="absolute inset-3 rounded-full border border-slate-100"></div>
          
          {/* Cardinal directions only */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-700">N</div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">E</div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-slate-400">S</div>
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xs text-slate-400">W</div>
          
          {/* Main cardinal tick marks only */}
          {[0, 90, 180, 270].map((degree) => (
            <div
              key={degree}
              className="absolute w-0.5 h-2 bg-slate-300"
              style={{
                top: '2px',
                left: '50%',
                transformOrigin: '50% 54px',
                transform: `translateX(-50%) rotate(${degree}deg)`
              }}
            />
          ))}
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full z-10"></div>
          
          {/* Compass needle - simplified */}
          <motion.div
            className="absolute top-1/2 left-1/2"
            style={{ transformOrigin: '50% 50%' }}
            animate={{ rotate: [0, 45, -30, 90, -15, 180, 30, -45, 0, 15, -10, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 1]
            }}
          >
            {/* North pointer (azure theme) */}
            <div 
              className="absolute w-0 h-0 -translate-x-1/2 -translate-y-full"
              style={{
                borderLeft: '2px solid transparent',
                borderRight: '2px solid transparent',
                borderBottom: '18px solid rgb(59, 130, 246)',
                top: '-18px',
                left: '50%'
              }}
            />
            {/* South pointer (light) */}
            <div 
              className="absolute w-0 h-0 -translate-x-1/2"
              style={{
                borderLeft: '2px solid transparent',
                borderRight: '2px solid transparent',
                borderTop: '18px solid rgb(148, 163, 184)',
                top: '0px',
                left: '50%'
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const ImplementationAnimation = () => {
  return (
    <div className="flex justify-center">
      {/* Code Editor Window - Wider */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden w-96">
        {/* Editor Header - Thinner */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-1.5 flex items-center justify-start">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          </div>
        </div>
        
        {/* Code Content - Seamless scroll */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, -300] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {/* First set of snippets */}
            {codeSnippets.map((snippet, idx) => (
              <div key={idx} className="p-3 border-b border-slate-100">
                {/* File Tab */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-azure-50 text-azure-700 px-2 py-0.5 rounded text-xs font-medium">
                    {snippet.filename}
                  </div>
                </div>
                
                {/* Code */}
                <pre className="text-xs leading-relaxed">
                  <code className="text-slate-700">
                    {snippet.content.split('\n').slice(0, 8).map((line, lineIdx) => (
                      <div key={lineIdx} className="min-h-[1.2rem]">
                        <span className="text-slate-400 select-none mr-3 text-xs">
                          {String(lineIdx + 1).padStart(2, ' ')}
                        </span>
                        <span 
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/(\bimport\b|\bfrom\b|\bclass\b|\bdef\b|\bconst\b|\basync\b|\bawait\b)/g, '<span class="text-purple-600 font-medium">$1</span>')
                              .replace(/(\bif\b|\belse\b|\btry\b|\bexcept\b|\breturn\b)/g, '<span class="text-blue-600 font-medium">$1</span>')
                              .replace(/([\'\"`].*?[\'\"`])/g, '<span class="text-green-600">$1</span>')
                              .replace(/(#.*$)/g, '<span class="text-slate-500 italic">$1</span>')
                        }}
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            ))}
            
            {/* Duplicate set for seamless looping */}
            {codeSnippets.map((snippet, idx) => (
              <div key={`duplicate-${idx}`} className="p-3 border-b border-slate-100">
                {/* File Tab */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-azure-50 text-azure-700 px-2 py-0.5 rounded text-xs font-medium">
                    {snippet.filename}
                  </div>
                </div>
                
                {/* Code */}
                <pre className="text-xs leading-relaxed">
                  <code className="text-slate-700">
                    {snippet.content.split('\n').slice(0, 8).map((line, lineIdx) => (
                      <div key={lineIdx} className="min-h-[1.2rem]">
                        <span className="text-slate-400 select-none mr-3 text-xs">
                          {String(lineIdx + 1).padStart(2, ' ')}
                        </span>
                        <span 
                          dangerouslySetInnerHTML={{
                            __html: line
                              .replace(/(\bimport\b|\bfrom\b|\bclass\b|\bdef\b|\bconst\b|\basync\b|\bawait\b)/g, '<span class="text-purple-600 font-medium">$1</span>')
                              .replace(/(\bif\b|\belse\b|\btry\b|\bexcept\b|\breturn\b)/g, '<span class="text-blue-600 font-medium">$1</span>')
                              .replace(/([\'\"`].*?[\'\"`])/g, '<span class="text-green-600">$1</span>')
                              .replace(/(#.*$)/g, '<span class="text-slate-500 italic">$1</span>')
                        }}
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const LaunchScaleAnimation = () => {
  return (
    <div className="w-full">
      <div className="space-y-2">
        {dashboardSystems.map((system, idx) => {
          const Icon = system.icon
          
          return (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-lg p-3 border border-slate-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-azure-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-azure-600" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-slate-800">{system.name}</h5>
                  </div>
                </div>
                
                <div className="flex items-center">
                  {system.statusType === "success" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.2 + 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  
                  {system.statusType === "update" && (
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5 text-azure-600 rotate-[-90deg]" />
                    </motion.div>
                  )}
                  
                  {system.statusType === "active" && (
                    <motion.div
                      className="w-5 h-5 border-2 border-azure-200 rounded-full relative"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-azure-600 rounded-full transform -translate-x-1/2"></div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default function StepperTimeline() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Our Process
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          We take you from AI-curious to AI-driven in months.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            
            return (
            <motion.div
                key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Step indicator */}
              <div className="inline-block text-xs text-azure-700 font-medium mb-4 px-3 py-1 bg-azure-50 rounded border border-azure-200">{step.step}</div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
              
              {/* Description */}
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {step.description}
              </p>

              {/* Visual area - Discovery gets radar, Implementation gets code editor, others get placeholder */}
              {step.title === "Discovery" ? (
                <DiscoveryAnimation />
              ) : step.title === "Implementation" ? (
                <ImplementationAnimation />
              ) : step.title === "Launch & Scale" ? (
                <LaunchScaleAnimation />
              ) : step.title === "Strategy" ? (
                <StrategyAnimation />
              ) : (
                <div className="bg-slate-50 rounded-lg p-8 flex items-center justify-center border-2 border-dashed border-slate-200">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-3 opacity-50`}>
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs text-slate-400">Visual placeholder</p>
                  </div>
                </div>
              )}
                  </motion.div>
            )
          })}
      </div>
    </div>
  )
} 