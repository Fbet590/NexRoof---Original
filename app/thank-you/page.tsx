"use client"

import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="relative h-[60px] w-[160px]">
              <Image
                src="/images/nexroof-logo.png"
                alt="NexRoof Roofing & Exteriors Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Thank You Message */}
      <section className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="flex items-center justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h1 className="font-serif text-[2.125rem] md:text-[2.625rem] font-extrabold text-foreground mb-4">
            Thank You!
          </h1>
          <p className="text-[1.0625rem] md:text-[1.1875rem] text-foreground leading-relaxed">
            We&apos;ve received your request. A member of our team will reach out to you shortly to discuss your roofing project.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-background/70 text-sm">
            &copy; {new Date().getFullYear()} NexRoof Roofing &amp; Exteriors. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
