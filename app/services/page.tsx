import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Cloud, Link, BarChart3, Rocket, Wrench } from "lucide-react"
import LinkComponent from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Software Development",
      description: "Tailored applications built to meet your specific business requirements and workflows.",
      features: ["Web Applications", "Mobile Apps", "Desktop Software", "API Development"],
      icon: <Laptop className="w-6 h-6 text-primary" />,
    },
    {
      title: "Cloud Infrastructure Solutions",
      description: "Scalable, secure cloud platforms that grow with your business needs.",
      features: ["Cloud Migration", "Infrastructure Setup", "DevOps Implementation", "Security Configuration"],
      icon: <Cloud className="w-6 h-6 text-primary" />,
    },
    {
      title: "System Integration Services",
      description: "Seamlessly connect your existing systems and create unified workflows.",
      features: ["API Integration", "Database Synchronization", "Legacy System Modernization", "Workflow Automation"],
      icon: <Link className="w-6 h-6 text-primary" />,
    },
    {
      title: "IT Consulting & Strategy",
      description: "Expert guidance to optimize your technology investments and digital roadmap.",
      features: ["Technology Assessment", "Digital Strategy", "Architecture Planning", "Cost Optimization"],
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
    },
    {
      title: "Digital Transformation",
      description: "Modernize your operations with cutting-edge technology and best practices.",
      features: ["Process Automation", "Digital Workflows", "Data Analytics", "Performance Optimization"],
      icon: <Rocket className="w-6 h-6 text-primary" />,
    },
    {
      title: "24/7 Technical Support",
      description: "Round-the-clock assistance to keep your systems running smoothly.",
      features: ["System Monitoring", "Issue Resolution", "Preventive Maintenance", "Emergency Response"],
      icon: <Wrench className="w-6 h-6 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-6 text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Comprehensive IT solutions designed to accelerate your business growth and digital transformation journey.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={service.title} className="bg-card/50 border-border hover:bg-card/70 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground mb-4">Need a Custom Solution?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution that
              perfectly fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LinkComponent href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full">
                  Get Custom Quote
                </Button>
              </LinkComponent>
              <LinkComponent href="/about">
                <Button variant="outline" className="px-8 py-3 rounded-full bg-transparent">
                  Learn More About Us
                </Button>
              </LinkComponent>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <FooterSection />
    </div>
  )
}
