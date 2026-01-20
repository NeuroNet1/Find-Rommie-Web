import { Star, Quote } from "lucide-react";
import { ScrollAnimate } from "./ScrollAnimate";

const testimonials = [
  {
    id: 1,
    name: "Laura Rodríguez",
    location: "CDMX",
    avatar: "LR",
    rating: 5,
    text: "Encontré un depa seguro en menos de una semana. El proceso fue súper fácil y mi roomie es increíble.",
    highlight: "depa seguro en días",
  },
  {
    id: 2,
    name: "Andrés Martínez",
    location: "Guadalajara",
    avatar: "AM",
    rating: 5,
    text: "Mi mejor experiencia compartiendo depa. Los perfiles verificados me dieron mucha confianza.",
    highlight: "mejor experiencia compartiendo",
  },
  {
    id: 3,
    name: "Sofía Hernández",
    location: "Monterrey",
    avatar: "SH",
    rating: 5,
    text: "Como estudiante, encontrar algo barato y confiable parecía imposible. Find Me Roomie lo hizo posible.",
    highlight: "barato y confiable",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <ScrollAnimate animation="slide-fade-left">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
              Testimonios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Historias de{" "}
              <span className="text-green-600">éxito real</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Miles de personas ya encontraron su hogar ideal a través de nuestra plataforma.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimate
              key={testimonial.id}
              animation="fade-in-up"
              delay={index + 1}
              threshold={0.2}
            >
              <div className="group relative bg-background rounded-2xl p-6 border border-border/50 hover:shadow-card transition-all duration-300">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                  {testimonial.highlight}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

