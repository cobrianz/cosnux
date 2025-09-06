import { Bot, Code2, GitBranch, Layers, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MultiAgentCodingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Multi-Agent Coding System</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Revolutionary AI-powered development where multiple specialized agents collaborate to deliver superior code
            quality, faster development, and innovative solutions.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Explore AI Development
            <Bot className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Multi-Agent Coding Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Code2 className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Code Generation Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Specialized in writing clean, efficient code following best practices and industry standards for
                  various programming languages.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <GitBranch className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Testing Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Automatically generates comprehensive test suites, performs code reviews, and ensures quality
                  assurance throughout development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Layers className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Architecture Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Designs optimal system architecture, manages dependencies, and ensures scalable, maintainable code
                  structure.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Optimization Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Continuously monitors performance, identifies bottlenecks, and implements optimizations for speed and
                  efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Collaboration Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Coordinates between different agents, manages workflows, and ensures seamless integration of all
                  components.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Bot className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Learning Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Continuously learns from project patterns, adapts to new requirements, and improves development
                  processes over time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Advantages of Multi-Agent Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">10x Faster Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Parallel processing and specialized agents dramatically reduce development time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Superior Code Quality</h3>
                  <p className="text-muted-foreground text-sm">
                    Multiple specialized agents ensure code meets the highest standards.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GitBranch className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Automated Testing</h3>
                  <p className="text-muted-foreground text-sm">
                    Comprehensive test coverage generated automatically by dedicated agents.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Scalable Architecture</h3>
                  <p className="text-muted-foreground text-sm">
                    Built-in scalability and maintainability from the ground up.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Continuous Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    AI agents learn and improve with each project, delivering better results.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24/7 Development</h3>
                  <p className="text-muted-foreground text-sm">
                    AI agents work around the clock, accelerating project timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Development?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the revolution in software development with our multi-agent coding system. Faster, smarter, and more
            reliable than traditional methods.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Start Your AI Project
            <Bot className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
