import { Linkedin, Mail, Github } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "15+ years leading technology companies and driving digital transformation initiatives across various industries.",
      image: "/professional-woman-ceo.png",
      linkedin: "#",
      email: "sarah@cosnux.com",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in cloud architecture and AI systems with a track record of building scalable enterprise solutions.",
      image: "/professional-man-cto.png",
      linkedin: "#",
      email: "michael@cosnux.com",
      github: "#",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Software Development",
      bio: "Full-stack developer and team leader specializing in modern web technologies and agile methodologies.",
      image: "/professional-woman-developer.png",
      linkedin: "#",
      email: "emily@cosnux.com",
      github: "#",
    },
    {
      name: "David Thompson",
      role: "Head of DevOps & Infrastructure",
      bio: "Infrastructure specialist focused on cloud deployment, security, and automated CI/CD pipelines.",
      image: "/professional-man-devops.jpg",
      linkedin: "#",
      email: "david@cosnux.com",
    },
    {
      name: "Lisa Park",
      role: "Head of Design & UX",
      bio: "Creative director with expertise in user experience design and digital product strategy.",
      image: "/professional-woman-designer.png",
      linkedin: "#",
      email: "lisa@cosnux.com",
    },
    {
      name: "James Wilson",
      role: "Head of Business Development",
      bio: "Strategic partnerships and client relations expert helping businesses achieve their digital goals.",
      image: "/professional-man-business.png",
      linkedin: "#",
      email: "james@cosnux.com",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in software development, technology
            leadership, and business innovation to deliver exceptional results for our clients.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4 text-primary" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4 text-primary" />
                      </a>
                      {member.github && (
                        <a
                          href={member.github}
                          className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-4 h-4 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace cutting-edge technologies and creative solutions to solve complex business challenges.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in everything we do, from code quality to client service.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Collaboration</h3>
              <p className="text-muted-foreground">
                We work closely with our clients and each other to achieve shared goals and mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
