# AI Consulting Landing Page

A modern, responsive landing page built with Next.js 15, featuring a bright design theme, smooth animations, and AI-focused content.

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

## 🚀 Features

### Interactive Components
- **Hero Chat Interface**: Glass-effect panel with typewriter animation and rotating questions
- **Service Cards**: Hover effects with friendly taglines and icons
- **Timeline**: Alternating layout showing the consultation process
- **Testimonials Carousel**: Smooth transitions with navigation controls
- **Case Studies Grid**: Filterable content with KPI displays
- **CTA Banner**: Azure background with compelling call-to-action

### Motion System
- **Typewriter Effect**: 2.3s per line with blinking cursor
- **Parallax Blobs**: Floating gradient shapes behind hero
- **Fade & Slide**: 400ms duration with ease-out transitions
- **Hover Lift**: 4px Y-translate with shadow deepening

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Animations**: Framer Motion
- **Typography**: React Simple Typewriter
- **Icons**: Lucide React
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with custom utilities
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main landing page
├── components/
│   ├── HeroChat.tsx         # Hero section with chat interface
│   ├── ServiceCards.tsx     # Service offerings grid
│   ├── StepperTimeline.tsx  # Process timeline
│   ├── TestimonialsCarousel.tsx # Client testimonials
│   ├── CaseBlogGrid.tsx     # Case studies and blog posts
│   ├── CtaBanner.tsx        # Call-to-action section
│   └── Footer.tsx           # Site footer
├── content/
│   └── hero.json            # Hero content for easy editing
├── lib/
│   └── utils.ts             # Utility functions
└── tailwind.config.ts       # Custom design tokens
```

## 🎯 Content Strategy

### Hero Rotating Questions
1. "Want AI to do your busy-work?"
2. "Need a prototype by next week?"
3. "Curious how LLMs fit your data?"
4. "Looking to upskill the whole team?"
5. "Just exploring—show me what's possible."

### Service Taglines
- **AI Strategy**: "Find the wins hiding in your workflow."
- **Team Training**: "Hands-on workshops that stick."
- **Rapid Prototyping**: "See it working before you blink."
- **Custom Integration**: "We make AI play nice with your stack."

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
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

- **Ghost CMS Integration**: Dynamic blog and case studies
- **Contact Form**: Interactive form with validation
- **Analytics**: User behavior tracking
- **A/B Testing**: Multiple hero variants
- **SEO**: Meta tags and structured data

## 📄 License

This project is created for demonstration purposes. Feel free to adapt for your own AI consulting business.

---

Built with ❤️ using Next.js and modern web technologies.
