"use client"

import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Full Roof Replacement",
    description: "Get a brand-new roof built with top-tier, 160MPH wind-rated materials and expert craftsmanship, installed on our flat $10K price with no surprise costs.",
    image: "/images/kitchen-service.jpg"
  },
  {
    title: "Roof Repair",
    description: "From storm damage to persistent leaks, we diagnose the real problem and fix it right the first time — fast, honest, and fairly priced.",
    image: "/images/bathroom-service.jpg"
  }
]

export function Services() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">
            Ready to Protect Your Home?
          </p>
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-black text-foreground mb-4">
            Our Expert Roofing Services
          </h2>
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-primary-foreground px-8 py-6 text-lg font-semibold"
            style={{ backgroundColor: '#526184' }}
          >
            Get a Free Quote
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-card-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
