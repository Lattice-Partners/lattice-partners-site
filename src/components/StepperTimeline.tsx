'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Cog, Rocket, CheckCircle, ArrowRight, TrendingUp, Users, Activity } from 'lucide-react'
import { useEffect, useState } from 'react'

const steps = [
  {
    step: "Step 1",
    icon: Search,
    title: "Discovery",
    description: "We interview you and your employees to understand your workflows, challenges, and goals.",
    features: ["Team Interviews", "Workflow Mapping", "Persona Validation", "Requirements Brief"],
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
    filename: "document_ai.py",
    content: `# Advanced document processing with GPT-4
async def analyze_contracts(documents):
    client = OpenAI(api_key=settings.OPENAI_KEY)
    
    system_prompt = """
    Extract key contract terms, risks, and compliance issues.
    Format as structured JSON with confidence scores.
    """
    
    results = []
    for doc in documents:
        response = await client.chat.completions.acreate(
            model="gpt-4-turbo",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": doc.text}
            ],
            temperature=0.1,
            response_format={"type": "json_object"}
        )
        
        analysis = json.loads(response.choices[0].message.content)
        analysis['doc_id'] = doc.id
        analysis['confidence'] = calculate_confidence(analysis)
        results.append(analysis)
        
    await batch_save_results(results)
    return results`
  },
  {
    filename: "smart_routing.js",
    content: `// Intelligent customer support routing
const routeTicket = async (ticket) => {
    const embedding = await generateEmbedding(ticket.content);
    const similarity = await vectorSearch(embedding);
    
    const prompt = \`
    Ticket: \${ticket.content}
    Similar cases: \${similarity.top_matches}
    
    Route to: [sales|support|technical|billing]
    Urgency: [low|medium|high|critical]
    Confidence: [0-100]
    \`;
    
    const routing = await openai.completions.create({
        model: "gpt-4o",
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.2
    });
    
    const decision = parseRouting(routing.choices[0].text);
    
    if (decision.confidence > 85) {
        await autoRoute(ticket, decision.department);
        await notifyAgent(decision.agent_id, ticket);
    } else {
        await escalateToHuman(ticket, decision);
    }
    
    return decision;
};`
  },
  {
    filename: "workflow_engine.py",
    content: `# Dynamic workflow optimization
class WorkflowOptimizer:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4-turbo")
        self.memory = ConversationBufferMemory()
        
    async def optimize_process(self, workflow_data):
        # Analyze current bottlenecks
        bottlenecks = await self.identify_bottlenecks(workflow_data)
        
        optimization_prompt = f"""
        Current workflow: {workflow_data['steps']}
        Bottlenecks: {bottlenecks}
        Performance metrics: {workflow_data['metrics']}
        
        Suggest 3 optimization strategies with:
        - Automation opportunities
        - Tool recommendations  
        - Expected ROI
        """
        
        chain = LLMChain(llm=self.llm, prompt=optimization_prompt)
        suggestions = await chain.arun(
            workflow=workflow_data,
            bottlenecks=bottlenecks
        )
        
        # Validate suggestions with simulation
        validated = await self.simulate_changes(suggestions)
        
        return {
            'optimizations': validated,
            'projected_savings': self.calculate_savings(validated),
            'implementation_time': self.estimate_effort(validated)
        }`
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
            viewport={{ once: true }}
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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const highlightCode = (line: string) => {
    if (!isClient) {
      return line // Return plain text on server
    }
    
    return line
      // Function names and method calls - Orange
      .replace(/(\w+)(\()/g, '<span class="text-orange-600">$1</span>$2')
      // Keywords - Blue (fewer keywords)
      .replace(/(\bclass\b|\bdef\b|\basync\b|\breturn\b|\bawait\b)/g, '<span class="text-blue-600 font-medium">$1</span>')
      // Strings - Green
      .replace(/([\'\"`][^\'\"]*[\'\"`])/g, '<span class="text-green-600">$1</span>')
      // Variables and objects - Default slate
      .replace(/(\w+)(\s*=)/g, '<span class="text-slate-700">$1</span>$2')
      // Numbers - Red/Pink
      .replace(/\b(\d+\.?\d*)\b/g, '<span class="text-red-500">$1</span>')
      // Comments - Light gray
      .replace(/(#.*$)/g, '<span class="text-slate-400 italic">$1</span>')
      // Operators - Amber
      .replace(/(\+|\-|\*|\/|=|==|!=|<=|>=|<|>)/g, '<span class="text-amber-600">$1</span>')
  }

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
        
        {/* Code Content - Seamless infinite scroll */}
        <div className="relative h-32 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{ 
              y: [0, -240] // Scroll exactly one set of snippets height
            }}
            transition={{
              duration: 15,
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
                        {isClient ? (
                          <span 
                            dangerouslySetInnerHTML={{
                              __html: highlightCode(line)
                            }}
                          />
                        ) : (
                          <span>{line}</span>
                        )}
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
                        {isClient ? (
                          <span 
                            dangerouslySetInnerHTML={{
                              __html: highlightCode(line)
                            }}
                          />
                        ) : (
                          <span>{line}</span>
                        )}
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
              viewport={{ once: true }}
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
                      viewport={{ once: true }}
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
              viewport={{ once: true }}
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