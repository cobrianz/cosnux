import { Download, Palette, Type, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BrandPage() {
  const brandColors = [
    { name: "Primary Blue", hex: "#0066CC", rgb: "0, 102, 204" },
    { name: "Secondary Gray", hex: "#6B7280", rgb: "107, 114, 128" },
    { name: "Accent Green", hex: "#10B981", rgb: "16, 185, 129" },
    { name: "Background White", hex: "#FFFFFF", rgb: "255, 255, 255" },
    { name: "Text Dark", hex: "#1F2937", rgb: "31, 41, 55" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Brand Guidelines</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Our brand represents innovation, reliability, and excellence in software development. These guidelines
            ensure consistent representation across all touchpoints.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            Download Brand Kit
            <Download className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Logo Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Primary Logo
                </CardTitle>
                <CardDescription>Use this version for most applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-8 rounded-lg text-center">
                  <div className="text-2xl font-bold text-primary">Cosnux Limited</div>
                  <p className="text-sm text-muted-foreground mt-2">Software & IT Solutions</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Minimum size: 120px width</p>
                  <p className="text-sm font-medium">Clear space: 1x logo height on all sides</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Secondary Logo
                </CardTitle>
                <CardDescription>For dark backgrounds and special applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 p-8 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white">Cosnux Limited</div>
                  <p className="text-sm text-gray-300 mt-2">Software & IT Solutions</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Use on dark backgrounds</p>
                  <p className="text-sm font-medium">Maintain same proportions as primary</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Color Palette</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandColors.map((color, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-0">
                  <div className="h-32 rounded-t-lg" style={{ backgroundColor: color.hex }} />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{color.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">HEX: {color.hex}</p>
                    <p className="text-sm text-muted-foreground">RGB: {color.rgb}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Primary Font - Jost
                </CardTitle>
                <CardDescription>Used for headings and important text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-sans">
                  <h1 className="text-4xl font-bold mb-2">Heading 1</h1>
                  <h2 className="text-3xl font-semibold mb-2">Heading 2</h2>
                  <h3 className="text-2xl font-medium mb-2">Heading 3</h3>
                  <p className="text-base">Body text using Jost font family</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="h-5 w-5" />
                  Monospace Font - JetBrains Mono
                </CardTitle>
                <CardDescription>Used for code and technical content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-mono">
                  <code className="text-sm bg-muted p-2 rounded block">const greeting = "Hello World";</code>
                  <p className="text-sm mt-4">
                    Technical documentation and code snippets use JetBrains Mono for optimal readability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Brand Voice & Tone</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional</h3>
              <p className="text-muted-foreground">
                We communicate with expertise and authority while remaining approachable and clear.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Innovative</h3>
              <p className="text-muted-foreground">
                Our language reflects our forward-thinking approach and cutting-edge solutions.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Reliable</h3>
              <p className="text-muted-foreground">
                We inspire confidence through consistent, trustworthy, and dependable communication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
