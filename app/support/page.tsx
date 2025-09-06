import { MessageCircle, Mail, Phone, Clock, Search, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "Mon-Fri, 9 AM - 6 PM GMT",
      action: "Start Chat",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      availability: "24/7 - Response within 24 hours",
      action: "Send Email",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      availability: "Mon-Fri, 9 AM - 5 PM GMT",
      action: "Call Now",
    },
  ]

  const faqItems = [
    {
      question: "How do I get started with Cosnux Limited services?",
      answer:
        "Contact our sales team to discuss your requirements and we'll create a customized solution plan for your business needs.",
    },
    {
      question: "What programming languages and technologies do you support?",
      answer:
        "We work with a wide range of technologies including React, Node.js, Python, Java, .NET, and various cloud platforms like AWS, Azure, and GCP.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance monitoring, and feature enhancements.",
    },
    {
      question: "How do you ensure project security and data protection?",
      answer:
        "We follow industry-standard security practices, implement encryption, conduct regular security audits, and comply with relevant data protection regulations.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on complexity and requirements. Simple projects may take 2-4 weeks, while complex enterprise solutions can take 3-6 months or more.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Support Center</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Get the help you need, when you need it. Our dedicated support team is here to assist you with any questions
            or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search help articles..." className="pl-10" />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Can We Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className="border-2 text-center hover:border-primary/20 transition-colors">
                  <CardHeader>
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle>{option.title}</CardTitle>
                    <CardDescription className="text-base">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center gap-2 mb-4 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{option.availability}</span>
                    </div>
                    <Button className="w-full">{option.action}</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Send Us a Message</h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Please provide detailed information about your question or issue..."
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Urgent Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For critical issues affecting production systems, contact our emergency support line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="destructive" className="text-lg px-8 py-6">
              Emergency Support
              <Phone className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent">
              View Status Page
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
