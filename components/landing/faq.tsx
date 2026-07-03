"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does a typical roof replacement take?",
    answer: "Most full roof replacements are completed in 1-2 days, weather permitting. We'll give you an exact timeline during your free estimate."
  },
  {
    question: "Are your roofs covered by a warranty?",
    answer: "Yes — every roof we install comes with a lifetime manufacturer warranty on materials, plus our workmanship guarantee."
  },
  {
    question: "Do you offer financing or payment plan options?",
    answer: "Yes, we offer flexible financing options so you can get your new roof now and pay over time. Ask your estimator for current plans."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-black text-foreground">
            FAQs
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-xl px-6 shadow-md border-none"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
