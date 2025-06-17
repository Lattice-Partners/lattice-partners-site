# AI Consulting Landing Page

A modern, responsive landing page built with Next.js, featuring a bright design theme, smooth animations, and AI-focused content. The platform includes a comprehensive course system for AI education and consulting services.

## 🎨 Design System

### Visual Language
- **Theme**: Welcoming "sun-lit tech studio" with crisp white surfaces, pastel gradients, and soft shadows
- **Typography**: Inter font family with generous whitespace and clear hierarchy
- **Motion**: Subtle animations respecting `prefers-reduced-motion` accessibility

### Color Palette
- **Base Background**: `#F8FAFF` (near-white with hint of blue)
- **Primary Accent**: `#2563EB` (Azure 600)
- **Secondary Accent**: Gradient `#A5B4FC → #7DD3FC`
- **Text**: `#0F172A` (Slate 900) for body, `#1E293B` (Slate 800) for headings
- **Card Surface**: Pure white with 12px radius and soft shadows

## 🎯 Marketing Voice & Tone

### Brand Voice
- **Professional yet Approachable**: We speak with authority while maintaining warmth and accessibility
- **Forward-thinking**: Emphasize innovation and cutting-edge solutions
- **Educational**: Focus on knowledge sharing and empowerment
- **Solution-oriented**: Address real business challenges with practical AI solutions

### Content Strategy
- **Clear Value Proposition**: Immediate focus on business outcomes and ROI
- **Educational Content**: Mix of theoretical knowledge and practical applications
- **Success Stories**: Real-world examples and case studies
- **Technical Depth**: Balance between high-level concepts and technical details

### Messaging Pillars
1. **Empowerment**: "AI for everyone" - democratizing AI knowledge
2. **Practical Application**: "From theory to practice" - actionable insights
3. **Business Impact**: "Transform your workflow" - focus on outcomes
4. **Future-Ready**: "Stay ahead of the curve" - forward-looking perspective

## 🚀 Features

### Interactive Components
- **Hero Chat Interface**: Glass-effect panel with typewriter animation and rotating questions
- **Service Cards**: Hover effects with friendly taglines and icons
- **Timeline**: Alternating layout showing the consultation process
- **Testimonials Carousel**: Smooth transitions with navigation controls
- **Case Studies Grid**: Filterable content with KPI displays
- **CTA Banner**: Azure background with compelling call-to-action

### Course Platform Features
- **Interactive Learning**: Hands-on exercises and real-world projects
- **Progress Tracking**: User-friendly dashboard for course completion
- **Resource Library**: Comprehensive learning materials and documentation
- **Community Features**: Discussion forums and peer learning opportunities

### Motion System
- **Typewriter Effect**: 2.3s per line with blinking cursor
- **Parallax Blobs**: Floating gradient shapes behind hero
- **Fade & Slide**: 400ms duration with ease-out transitions
- **Hover Lift**: 4px Y-translate with shadow deepening

## 🛠 Tech Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Typography**: React Simple Typewriter
- **Icons**: Lucide React
- **Language**: TypeScript
- **Database**: Prisma with PostgreSQL
- **Authentication**: NextAuth.js
- **Content Management**: MDX for course content

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom utilities
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main landing page
│   └── course/             # Course platform routes
├── components/
│   ├── HeroChat.tsx         # Hero section with chat interface
│   ├── ServiceCards.tsx     # Service offerings grid
│   ├── StepperTimeline.tsx  # Process timeline
│   ├── TestimonialsCarousel.tsx # Client testimonials
│   ├── CaseBlogGrid.tsx     # Case studies and blog posts
│   ├── CtaBanner.tsx        # Call-to-action section
│   └── Footer.tsx           # Site footer
├── content/
│   ├── courses/            # Course content in MDX
│   └── hero.json           # Hero content for easy editing
├── lib/
│   ├── utils.ts            # Utility functions
│   └── prisma.ts           # Database client
└── tailwind.config.ts      # Custom design tokens
```

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

- **Mobile-first**: Optimized for all screen sizes
- **Breakpoints**: Tailwind's default responsive system
- **Touch-friendly**: Large buttons and interactive areas
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility

- **Motion**: Respects `prefers-reduced-motion` setting
- **Colors**: WCAG AA contrast ratios
- **Keyboard**: Full keyboard navigation support
- **Screen Readers**: Semantic HTML and ARIA labels

## 🔮 Future Enhancements

- **Advanced Analytics**: Detailed course progress tracking
- **Interactive Exercises**: Real-time coding challenges
- **Certificate System**: Automated course completion certificates
- **Integration Hub**: Connect with popular development tools
- **Community Features**: Enhanced discussion and collaboration tools

## 📄 License

This project is created for demonstration purposes. Feel free to adapt for your own AI consulting business.

---

Built with ❤️ using Next.js and modern web technologies.
