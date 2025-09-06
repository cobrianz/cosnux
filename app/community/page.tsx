import { Users, MessageCircle, Calendar, Award, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CommunityPage() {
  const communityStats = [
    { label: "Active Members", value: "2,500+", icon: Users },
    { label: "Monthly Discussions", value: "850+", icon: MessageCircle },
    { label: "Events This Year", value: "24", icon: Calendar },
    { label: "Community Projects", value: "150+", icon: Award },
  ]

  const upcomingEvents = [
    {
      title: "Monthly Developer Meetup",
      date: "March 15, 2024",
      time: "6:00 PM GMT",
      type: "Virtual",
      description: "Join us for our monthly discussion on latest development trends and best practices.",
    },
    {
      title: "API Workshop",
      date: "March 22, 2024",
      time: "2:00 PM GMT",
      type: "Hybrid",
      description: "Hands-on workshop covering advanced API integration techniques and troubleshooting.",
    },
    {
      title: "Community Hackathon",
      date: "April 5-7, 2024",
      time: "All Day",
      type: "Virtual",
      description: "48-hour hackathon with exciting prizes and networking opportunities.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Join Our Community</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Connect with fellow developers, share knowledge, and collaborate on exciting projects. Be part of a thriving
            community of technology enthusiasts and professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Join Discord
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              Follow on Twitter
              <Twitter className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Community at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className="border-2 text-center">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{stat.label}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 hover:border-primary/20 transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{event.type}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-2">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{event.date}</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <Button>Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Connect With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Discord Server</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join our active Discord community for real-time discussions, help, and networking.
                </CardDescription>
                <Button variant="outline">Join Discord</Button>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <Github className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Contribute to open-source projects, report issues, and collaborate on code.
                </CardDescription>
                <Button variant="outline">View GitHub</Button>
              </CardContent>
            </Card>

            <Card className="border-2 text-center">
              <CardHeader>
                <Twitter className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Twitter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Follow us for updates, announcements, and industry insights.
                </CardDescription>
                <Button variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Be Respectful</h3>
                <p className="text-muted-foreground text-sm">
                  Treat all community members with respect and kindness, regardless of their experience level.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Stay On Topic</h3>
                <p className="text-muted-foreground text-sm">
                  Keep discussions relevant to development, technology, and community interests.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Help Others</h3>
                <p className="text-muted-foreground text-sm">
                  Share your knowledge and help fellow community members solve problems and learn.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">No Spam</h3>
                <p className="text-muted-foreground text-sm">
                  Avoid excessive self-promotion and irrelevant content that doesn't add value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Use Search</h3>
                <p className="text-muted-foreground text-sm">
                  Before asking questions, search existing discussions to avoid duplicates.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Have Fun</h3>
                <p className="text-muted-foreground text-sm">
                  Enjoy the community, make connections, and celebrate each other's successes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
