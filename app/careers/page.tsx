import { MapPin, Clock, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / London",
      type: "Full-time",
      salary: "£60,000 - £80,000",
      description: "Join our development team to build cutting-edge web applications using modern technologies.",
      requirements: ["5+ years experience", "React/Next.js", "Node.js", "TypeScript", "Cloud platforms"],
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Manchester",
      type: "Full-time",
      salary: "£55,000 - £75,000",
      description: "Help us scale our infrastructure and improve deployment processes across multiple environments.",
      requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD pipelines", "Infrastructure as Code"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Birmingham",
      type: "Full-time",
      salary: "£45,000 - £60,000",
      description: "Create beautiful, user-centered designs for our client projects and internal tools.",
      requirements: ["Portfolio required", "Figma/Sketch", "User research", "Prototyping", "Design systems"],
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "London",
      type: "Full-time",
      salary: "£50,000 - £70,000 + Commission",
      description: "Drive growth by building relationships with new clients and expanding existing partnerships.",
      requirements: ["B2B sales experience", "Technology sector knowledge", "Relationship building", "CRM systems"],
    },
  ]

  const benefits = [
    "Competitive salary and equity options",
    "Flexible working hours and remote work",
    "Professional development budget",
    "Health and wellness benefits",
    "Modern equipment and tools",
    "Team retreats and social events",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Join Our Team</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Build the future of software development with us. We're looking for passionate individuals who want to make
            a real impact in the technology industry.
          </p>
          <Button size="lg" className="text-lg px-8 py-6">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{position.description}</CardDescription>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{position.salary}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.requirements.map((req, reqIndex) => (
                        <Badge key={reqIndex} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Culture</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            At Cosnux Limited, we foster an environment of continuous learning, innovation, and collaboration. We
            believe in work-life balance and supporting each team member's professional growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Learning & Growth</h3>
              <p className="text-muted-foreground">
                Continuous learning opportunities, conference attendance, and skill development programs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Work-Life Balance</h3>
              <p className="text-muted-foreground">
                Flexible schedules, remote work options, and respect for personal time and commitments.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                Freedom to experiment with new technologies and contribute to open-source projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
