"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const scrollToForm = () => {
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20 bg-background/95">
          <div className="flex items-center gap-3">
            <div className="relative h-[54px] w-[120px] md:h-[62px] md:w-[140px]">
              <Image
                src="/images/nexroof-logo.png"
                alt="NexRoof Roofing & Exteriors Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          <Button 
            onClick={scrollToForm}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            Free Estimate
          </Button>
        </div>
      </div>
    </header>
  )
}
