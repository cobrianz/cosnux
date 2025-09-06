import { Book, Code, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DocsPage() {
  const docSections = [
    {
      title: "Getting Started",
      description: "Quick start guides and basic setup instructions",
      articles: ["Installation Guide", "First Project Setup", "Configuration Basics", "Development Environment"],
    },
    {
      title: "Development",
      description: "In-depth development guides and best practices",
      articles: ["Project Structure", "Coding Standards", "Testing Guidelines", "Deployment Process"],
    },
    {
      title: "API Integration",
      description: "Complete API documentation and integration examples",
      articles: ["Authentication", "Endpoints Reference", "SDK Documentation", "Webhook Setup"],
    },
    {
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      articles: ["Common Errors", "Performance Issues", "Security Guidelines", "FAQ"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Documentation</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Comprehensive guides, tutorials, and reference materials to help you make the most of Cosnux Limited's
            services and tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search documentation..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docSections.map((section, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <CardDescription className="text-base">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                        >
                          <Book className="h-4 w-4" />
                          {article}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 text-center">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Code Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Ready-to-use code snippets and implementation examples
                </CardDescription>
                <Button variant="outline" size="sm">
                  Browse Examples
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">SDKs, tools, and resources for development</CardDescription>
                <Button variant="outline" size="sm">
                  View Downloads
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <Book className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Step-by-step guides for common use cases</CardDescription>
                <Button variant="outline" size="sm">
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="space-y-4">
            {[
              "Setting up your first project with Cosnux Limited",
              "Best practices for API integration",
              "Deploying applications to production",
              "Security guidelines and compliance",
              "Performance optimization techniques",
            ].map((article, index) => (
              <Card key={index} className="border hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Book className="h-5 w-5 text-primary" />
                      <span className="font-medium">{article}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
