import { Button } from "@/components/ui/button";
import { Search, Plus, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-roommates.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-soft" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Varias habitaciones disponibles 
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Encuentra tu habitación ideal o tu{" "}
              <span className="text-green-600">roomie perfecto</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
              Explora habitaciones disponibles, conecta con personas reales y vive mejor compartiendo. 
              La forma más fácil de encontrar tu próximo hogar.
            </p>

          

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>+15,000 usuarios activos</span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-500">
                    {star}
                  </span>
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-delayed">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Jóvenes compartiendo apartamento en Colombia"
                className="w-full h-auto object-cover"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Habitación</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-soft flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Perfiles verificados</p>
                  <p className="text-xs text-muted-foreground">100% confiables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
