import { Check, Code, Shield, Zap, Users, Globe, Database, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and workflows.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise Security",
      description: "Advanced security protocols and compliance standards to protect your sensitive business data.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "High Performance Systems",
      description: "Optimized applications and infrastructure designed for speed, scalability, and reliability.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration Tools",
      description: "Integrated platforms that enhance team productivity and streamline communication workflows.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Cloud Integration",
      description: "Seamless cloud migration and hybrid solutions for modern, flexible business operations.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Management",
      description: "Comprehensive data analytics, storage solutions, and business intelligence platforms.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered tools to optimize business processes.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Powerful Features for Modern Business</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Discover the comprehensive suite of tools and capabilities that make Cosnux Limited your trusted partner for
            digital transformation and software excellence.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Cosnux Limited?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "24/7 Technical Support",
              "Scalable Solutions",
              "Industry Expertise",
              "Agile Development",
              "Quality Assurance",
              "Cost-Effective Solutions",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
