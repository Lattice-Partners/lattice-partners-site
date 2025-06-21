import Header from '@/components/Header'
import HeroChat from '@/components/HeroChat'
import ServiceCards from '@/components/ServiceCards'
import StepperTimeline from '@/components/StepperTimeline'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CaseBlogGridServer from '@/components/CaseBlogGridServer'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import AboutUs from '@/components/AboutUs'

export default function Home() {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroChat />
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="pt-20 pb-12 bg-white scroll-mt-16">
        <ServiceCards />
      </section>

      {/* About Us Section */}
      <section id="about" className="pt-8 pb-8 bg-white scroll-mt-16">
        <AboutUs />
      </section>

      {/* How We Help Section */}
      <section id="how-we-help" className="pt-12 pb-20 bg-gradient-to-b from-white to-light-blue-bg scroll-mt-16">
        <StepperTimeline />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white scroll-mt-16">
        <TestimonialsCarousel />
      </section>

      {/* Case Studies & Blog Section */}
      <section id="case-blog" className="py-20 border-b border-blue-100 scroll-mt-16">
        <CaseBlogGridServer />
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </div>
  )
}
