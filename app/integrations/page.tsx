import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegrationsPage() {
  const integrations = [
    {
      category: "Cloud Platforms",
      items: [
        { name: "Amazon Web Services", description: "Complete AWS integration and migration services" },
        { name: "Microsoft Azure", description: "Azure cloud solutions and hybrid deployments" },
        { name: "Google Cloud Platform", description: "GCP infrastructure and application deployment" },
        { name: "DigitalOcean", description: "Scalable cloud hosting and container solutions" },
      ],
    },
    {
      category: "Business Systems",
      items: [
        { name: "Salesforce", description: "CRM integration and custom Salesforce development" },
        { name: "SAP", description: "Enterprise resource planning system integration" },
        { name: "Microsoft 365", description: "Office suite and productivity tool integration" },
        { name: "QuickBooks", description: "Financial management and accounting system sync" },
      ],
    },
    {
      category: "Development Tools",
      items: [
        { name: "GitHub", description: "Version control and CI/CD pipeline integration" },
        { name: "Jira", description: "Project management and issue tracking systems" },
        { name: "Docker", description: "Containerization and deployment automation" },
        { name: "Kubernetes", description: "Container orchestration and scaling solutions" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", description: "Advanced relational database management" },
        { name: "MongoDB", description: "NoSQL database solutions and optimization" },
        { name: "Redis", description: "In-memory data structure store integration" },
        { name: "Elasticsearch", description: "Search and analytics engine implementation" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Seamless Integrations</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Connect your existing systems and tools with our comprehensive integration services. We ensure smooth data
            flow and unified business operations.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Explore Integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {integrations.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((integration, index) => (
                  <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">{integration.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{integration.description}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our Integration Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Proven Expertise</h3>
              <p className="text-muted-foreground">
                Years of experience integrating complex business systems across various industries.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Minimal Downtime</h3>
              <p className="text-muted-foreground">
                Careful planning and execution ensure your business operations continue smoothly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Continuous monitoring and support to ensure integrations work flawlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
