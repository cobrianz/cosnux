import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "/month",
      description: "Perfect for small businesses getting started with digital solutions",
      features: [
        "Basic web application development",
        "Standard hosting and maintenance",
        "Email support",
        "Monthly progress reports",
        "Basic security features",
      ],
      notIncluded: ["Advanced integrations", "24/7 phone support", "Custom AI solutions"],
    },
    {
      name: "Professional",
      price: "$5,000",
      period: "/month",
      description: "Comprehensive solutions for growing businesses",
      features: [
        "Custom software development",
        "Cloud infrastructure setup",
        "API integrations",
        "Priority support",
        "Advanced security protocols",
        "Weekly consultations",
        "Performance optimization",
      ],
      notIncluded: ["Enterprise-level compliance", "Dedicated account manager"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full-scale digital transformation",
        "Dedicated development team",
        "24/7 premium support",
        "Custom AI and automation",
        "Enterprise security compliance",
        "Dedicated account manager",
        "On-site consultations",
        "SLA guarantees",
      ],
      notIncluded: [],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground text-balance mb-8 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our commitment to quality, security, and
            exceptional support.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-primary border-2 scale-105" : "border-2"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className={`w-full ${plan.popular ? "bg-primary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3 opacity-50">
                        <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. Changes take effect at the next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What's included in support?</h3>
              <p className="text-muted-foreground">
                All plans include technical support, with response times varying by plan level.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer custom solutions?</h3>
              <p className="text-muted-foreground">
                Our Enterprise plan includes fully customized solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
