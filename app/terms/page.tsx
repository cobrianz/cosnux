export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-8">Terms of Service</h1>
        <p className="text-lg text-muted-foreground mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Cosnux Limited's services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cosnux Limited provides software development, IT consulting, cloud infrastructure, and related technology
              services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information when engaging our services</li>
              <li>Maintain the confidentiality of any access credentials provided</li>
              <li>Use our services in compliance with all applicable laws and regulations</li>
              <li>Respect intellectual property rights and confidentiality agreements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All custom software, documentation, and deliverables created specifically for clients remain the property
              of the client upon full payment. Cosnux Limited retains rights to general methodologies, frameworks, and
              pre-existing intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We maintain strict confidentiality regarding all client information, business processes, and proprietary
              data. This obligation continues beyond the termination of our service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cosnux Limited's liability is limited to the amount paid for services. We are not liable for indirect,
              incidental, or consequential damages arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Payment terms are specified in individual service agreements. Late payments may incur additional fees.
              Services may be suspended for non-payment after appropriate notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibent mb-4">8. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate services with appropriate notice as specified in the service agreement. Upon
              termination, all deliverables and client data will be transferred as agreed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these terms, please contact us at legal@cosnux.com or through our official contact
              channels.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
