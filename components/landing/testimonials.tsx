import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marcus T.",
    location: "Tampa, FL",
    text: "After Hurricane Idalia did a number on our roof, NexRoof came out fast and replaced the entire thing with impact-rated shingles rated for 160MPH winds. The crew was clean, efficient, and finished in two days. No leaks, no issues — and the lifetime warranty gave us real peace of mind going into storm season.",
    rating: 5
  },
  {
    name: "Diana F.",
    location: "Brandon, FL",
    text: "Our 18-year-old roof was curling and losing granules every time it rained. NexRoof did a full replacement with Class 4 shingles and the difference is night and day. Solid craftsmanship, great communication throughout, and they left the yard cleaner than they found it. Highly recommend.",
    rating: 5
  },
  {
    name: "Kevin O.",
    location: "Riverview, FL",
    text: "Had a persistent leak above our master bedroom for two years. Two other roofers patched it and it still came back. NexRoof diagnosed the real problem — a failed valley flashing — fixed it properly, and it has not leaked since. Quick, honest, and fairly priced.",
    rating: 5
  },
  {
    name: "Stephanie R.",
    location: "Clearwater, FL",
    text: "Full roof replacement done right. They installed hurricane-resistant architectural shingles with a lifetime transferable warranty. The project manager kept us updated daily and the final result looks incredible. Worth every penny.",
    rating: 5
  },
  {
    name: "James W.",
    location: "Wesley Chapel, FL",
    text: "Storm took out a large section of our roof. NexRoof tarped it the same day, worked directly with our insurance adjuster, and had a brand new roof on within a week. Top-tier materials, zero shortcuts. These guys are the real deal.",
    rating: 5
  },
  {
    name: "Linda C.",
    location: "St. Petersburg, FL",
    text: "I was skeptical about the $10K flat-rate offer but everything they promised was delivered. New roof, high-wind-rated shingles, proper underlayment, and a full cleanup. No hidden fees, no upsells. Just a beautiful new roof.",
    rating: 5
  },
  {
    name: "Tony M.",
    location: "Lutz, FL",
    text: "Great experience from start to finish. Our roof was 22 years old and NexRoof replaced it with durable, wind-resistant shingles built for Florida weather. The crew worked hard even in the heat and wrapped up faster than expected.",
    rating: 4
  },
  {
    name: "Rachel B.",
    location: "Valrico, FL",
    text: "Minor repair turned out to be a bigger issue than expected, but NexRoof was upfront about it and gave us options. We went with the full replacement and could not be happier. The new shingles look great and the lifetime durability warranty is a huge bonus.",
    rating: 5
  },
  {
    name: "Carlos H.",
    location: "Land O' Lakes, FL",
    text: "They replaced my aging flat roof section and the two sloped sections in one visit. Professional team, premium materials, and clean work. Our homeowner's insurance even lowered our premium because of the storm-rated shingles they installed.",
    rating: 5
  },
  {
    name: "Michelle G.",
    location: "Carrollwood, FL",
    text: "We had three different roofers tell us three different things. NexRoof came out, gave us a straight answer, and fixed the storm damage the right way using impact-resistant shingles. No runaround, no surprises on the bill. Five stars without hesitation.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">
            Don&apos;t Just Take Our Word For It...
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Here&apos;s What Our Past Clients Had To Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-card-foreground mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
