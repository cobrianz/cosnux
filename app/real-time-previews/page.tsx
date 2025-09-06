import { Eye, Monitor, Smartphone, Tablet, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RealTimePreviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Real-Time Development Previews</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            See your applications come to life instantly. Our real-time preview system lets you visualize changes as
            they happen, ensuring perfect results every time.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Try Live Preview
            <Eye className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardHeader>
                <Monitor className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Multi-Device Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Preview your applications across desktop, tablet, and mobile devices simultaneously to ensure
                  consistent user experience.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Zap className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Instant Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Changes appear instantly without manual refresh. See modifications in real-time as our development
                  team works on your project.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-4" />
                <CardTitle>Live Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Share preview links with your team for immediate feedback and collaborative decision-making throughout
                  the development process.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Device Preview Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Preview Across All Devices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Desktop</h3>
              <p className="text-muted-foreground text-center">
                Full-featured desktop experience with complete functionality and responsive design.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Tablet className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Tablet</h3>
              <p className="text-muted-foreground text-center">
                Optimized tablet interface with touch-friendly controls and adaptive layouts.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Mobile</h3>
              <p className="text-muted-foreground text-center">
                Mobile-first design ensuring perfect functionality on smartphones and small screens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of Real-Time Previews</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Faster Development Cycles</h3>
                <p className="text-muted-foreground">
                  Immediate feedback reduces development time and accelerates project delivery.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enhanced Communication</h3>
                <p className="text-muted-foreground">
                  Visual previews improve communication between development teams and stakeholders.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Catch issues early and ensure the final product meets your exact specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
