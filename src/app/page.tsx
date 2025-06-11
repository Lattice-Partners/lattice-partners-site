import HeroChat from '@/components/HeroChat'
import ServiceCards from '@/components/ServiceCards'
import StepperTimeline from '@/components/StepperTimeline'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CaseBlogGrid from '@/components/CaseBlogGrid'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-base-bg text-slate-900 min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="pt-24 relative overflow-hidden">
        <HeroChat />
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 bg-white">
        <ServiceCards />
      </section>

      {/* How We Help Section */}
      <section id="how-we-help" className="py-20 bg-gradient-to-b from-white to-light-blue-bg">
        <StepperTimeline />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <TestimonialsCarousel />
      </section>

      {/* Case Studies & Blog Section */}
      <section id="case-blog" className="py-20 bg-lighter-blue-bg">
        <CaseBlogGrid />
      </section>

      {/* CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </main>
  )
}
