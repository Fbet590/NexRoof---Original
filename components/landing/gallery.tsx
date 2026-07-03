"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

type GalleryItem = {
  src: string | string[]
  alt: string
  title: string
  description: string
  city: string
}

const galleryImages: GalleryItem[] = [
  {
    src: [
      "/images/gallery-roof-1a.webp",
      "/images/gallery-roof-1b.webp",
      "/images/gallery-roof-1c.webp",
      "/images/gallery-roof-1d.webp",
      "/images/gallery-roof-1e.webp",
    ],
    alt: "Full roof replacement with 160MPH wind-rated architectural shingles on a single-family home",
    title: "Full Roof Replacement",
    description: "160MPH wind-rated architectural shingles installed on a 1,850 sq ft single-family home.",
    city: "Tampa, FL"
  },
  {
    src: [
      "/images/gallery-storm-2a.webp",
      "/images/gallery-storm-2b.webp",
      "/images/gallery-storm-2c.webp",
      "/images/gallery-storm-2d.webp",
    ],
    alt: "Post-hurricane storm damage repair with impact-resistant shingles and flashing replacement",
    title: "Storm Damage Repair",
    description: "Post-hurricane repair with impact-resistant shingles and full flashing replacement.",
    city: "Brandon, FL"
  },
  {
    src: [
      "/images/gallery-tearoff-3a.png",
      "/images/gallery-tearoff-3b.png",
      "/images/gallery-tearoff-3c.png",
      "/images/gallery-tearoff-3d.png",
      "/images/gallery-tearoff-3e.png",
      "/images/gallery-tearoff-3f.png",
    ],
    alt: "Complete tear-off and reroof with Class 4 impact-resistant shingles and new underlayment",
    title: "Complete Tear-Off & Reroof",
    description: "18-year-old roof replaced with Class 4 impact-resistant shingles and new underlayment.",
    city: "Clearwater, FL"
  },
  {
    src: [
      "/images/gallery-leak-4a.png",
      "/images/gallery-leak-4b.png",
      "/images/gallery-leak-4c.png",
      "/images/gallery-leak-4d.png",
      "/images/gallery-leak-4e.png",
      "/images/gallery-leak-4f.png",
      "/images/gallery-leak-4g.png",
      "/images/gallery-leak-4h.png",
    ],
    alt: "Leak repair and roof restoration with corrected flashing and full inspection",
    title: "Leak Repair & Roof Restoration",
    description: "Diagnosed and repaired a multi-year leak with corrected flashing and full inspection.",
    city: "Riverview, FL"
  },
  {
    src: [
      "/images/gallery-hurricane-5a.png",
      "/images/gallery-hurricane-5b.png",
      "/images/gallery-hurricane-5c.png",
    ],
    alt: "Hurricane-resistant reroof with architectural shingles rated for high-wind Florida climates",
    title: "Hurricane-Resistant Reroof",
    description: "Full replacement with architectural shingles rated for high-wind Florida climates.",
    city: "Wesley Chapel, FL"
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Flat roof section replacement with premium materials and professional finish",
    title: "Flat Roof Section Replacement",
    description: "Aging flat roof section replaced with premium materials and clean, professional finish.",
    city: "Land O' Lakes, FL"
  }
]

function GalleryCard({ image, onOpen }: { image: GalleryItem; onOpen: () => void }) {
  const isSlideshow = Array.isArray(image.src)
  const slides = isSlideshow ? (image.src as string[]) : [image.src as string]
  const [slideIndex, setSlideIndex] = useState(0)

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative aspect-[4/3] w-full overflow-hidden group">
        <button
          onClick={onOpen}
          className="absolute inset-0 w-full h-full cursor-pointer"
          aria-label={`Open ${image.title}`}
        >
          <Image
            src={slides[slideIndex]}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </button>

        {isSlideshow && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-1 transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-foreground/50 hover:bg-foreground/70 text-background rounded-full p-1 transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setSlideIndex(i) }}
                  className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-background" : "bg-background/50"}`}
                  aria-label={`Go to photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-[family-name:var(--font-poppins)] font-black text-lg text-card-foreground mb-1">
          {image.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
          {image.description}
        </p>
        <div className="flex items-center gap-1 text-primary text-sm">
          <MapPin className="w-4 h-4" />
          <span>{image.city}</span>
        </div>
      </div>
    </div>
  )
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const slides = Array.isArray(item.src) ? item.src : [item.src]
  const firstSlide = slides[0]

  return (
    <div
      className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-background hover:text-background/80 transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-background hover:text-background/80 transition-colors"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Previous project"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <div
        className="relative max-w-4xl max-h-[80vh] w-full aspect-[4/3]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={firstSlide}
          alt={item.alt}
          fill
          className="object-contain"
        />
      </div>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-background hover:text-background/80 transition-colors"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Next project"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
    </div>
  )
}

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToPrevious = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const selectedItem = selectedIndex !== null ? galleryImages[selectedIndex] : null

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-black text-foreground mb-4">
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse through some of our recent roof replacements and repairs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryCard key={index} image={image} onOpen={() => openLightbox(index)} />
          ))}
        </div>
      </div>

      {selectedItem !== null && (
        <Lightbox
          item={selectedItem}
          onClose={closeLightbox}
          onPrev={goToPrevious}
          onNext={goToNext}
        />
      )}
    </section>
  )
}
