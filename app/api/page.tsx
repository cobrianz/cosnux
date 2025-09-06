import { Code, Key, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function APIPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">API Reference</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Comprehensive documentation for integrating with Cosnux Limited's APIs and services. Build powerful
            applications with our robust and secure endpoints.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Get API Key
            <Key className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Start Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2">
              <CardHeader>
                <Key className="h-8 w-8 text-primary mb-4" />
                <CardTitle>1. Get API Key</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Register for an account and generate your API key from the developer dashboard.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-4" />
                <CardTitle>2. Authenticate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Include your API key in the Authorization header for all requests.</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Code className="h-8 w-8 text-primary mb-4" />
                <CardTitle>3. Make Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Use our RESTful endpoints to integrate with your applications and workflows.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-4" />
                <CardTitle>4. Go Live</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deploy your integration and start leveraging our powerful API capabilities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">API Endpoints</h2>
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">GET /api/v1/projects</CardTitle>
                  <CardDescription>Retrieve a list of all projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`curl -X GET "https://api.cosnux.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">POST /api/v1/projects</CardTitle>
                  <CardDescription>Create a new project</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`curl -X POST "https://api.cosnux.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "New Project", "description": "Project description"}'`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">GET /api/v1/users</CardTitle>
                  <CardDescription>Retrieve user information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`curl -X GET "https://api.cosnux.com/v1/users" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">GET /api/v1/analytics</CardTitle>
                  <CardDescription>Retrieve analytics data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`curl -X GET "https://api.cosnux.com/v1/analytics" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -G -d "start_date=2024-01-01" -d "end_date=2024-12-31"`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="webhooks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-mono text-lg">POST /api/v1/webhooks</CardTitle>
                  <CardDescription>Create a webhook endpoint</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                    <pre>{`curl -X POST "https://api.cosnux.com/v1/webhooks" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "https://your-app.com/webhook", "events": ["project.created"]}'`}</pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Rate Limits & Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Rate Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">
                  <strong>Standard Plan:</strong> 1,000 requests/hour
                </p>
                <p className="text-sm">
                  <strong>Professional Plan:</strong> 5,000 requests/hour
                </p>
                <p className="text-sm">
                  <strong>Enterprise Plan:</strong> Custom limits
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm">• Implement exponential backoff for retries</p>
                <p className="text-sm">• Cache responses when appropriate</p>
                <p className="text-sm">• Use webhooks for real-time updates</p>
                <p className="text-sm">• Monitor your usage and rate limits</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
