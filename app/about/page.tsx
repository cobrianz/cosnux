import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Rocket, Handshake, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 text-balance">
              About Cosnux Limited
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Leading the digital transformation with innovative software solutions and comprehensive IT services since
              2015.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Cosnux Limited, we empower businesses to thrive in the digital age through innovative technology
                solutions. Our mission is to bridge the gap between complex technology and business success, delivering
                tailored software and IT services that drive measurable results.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe that every business deserves access to cutting-edge technology that enhances productivity,
                streamlines operations, and creates competitive advantages in today's fast-paced market.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To be the trusted technology partner for businesses worldwide, recognized for our expertise in
                delivering transformative software solutions and exceptional IT services that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where technology seamlessly integrates with business processes, enabling
                organizations to focus on what they do best while we handle their digital infrastructure and software
                needs.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-card/50 rounded-2xl p-8 mb-16 border border-border">
            <h2 className="text-3xl font-semibold text-foreground mb-8 text-center">Why Choose Cosnux Limited?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation First</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Partnership Approach</h3>
                <p className="text-muted-foreground">
                  We work closely with you to understand your unique needs and deliver solutions that align with your
                  goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Our track record speaks for itself with successful projects across various industries and business
                  sizes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-6">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Cosnux Limited can help you achieve your technology goals and drive your business
              forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 py-3 rounded-full bg-transparent">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <FooterSection />
    </div>
  )
}
