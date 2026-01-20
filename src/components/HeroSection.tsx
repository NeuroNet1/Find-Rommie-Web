import { Button } from "@/components/ui/button";
import { Search, Plus, ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-roommates.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden animated-bg">
      {/* Interactive background grid */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-white rounded-full transform hover:scale-150 transition-transform duration-300"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating blob animations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="w-64 h-64 absolute top-1/4 left-1/4 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="w-64 h-64 absolute top-1/3 right-1/4 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="w-64 h-64 absolute bottom-1/4 left-1/3 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Heartbeat emoji */}
      <div className="absolute top-4 right-4 text-white text-4xl heartbeat z-10">
        ❤️
      </div>

      <div className="container relative mx-auto px-4 py-12 lg:py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Varias habitaciones disponibles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight">
              <span
                className="block transform transition-transform duration-500 hover:scale-110 glitch"
                data-text="Encuentra tu"
              >
                Encuentra tu
              </span>
              <span
                className="block transform transition-transform duration-500 hover:scale-110 glitch"
                data-text="Roomie Perfecto"
                style={{
                  WebkitTextStroke: '2px white',
                  color: 'transparent',
                }}
              >
                Roomie Perfecto
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-xl">
              Explora habitaciones disponibles, conecta con personas reales y vive mejor compartiendo.
              La forma más fácil de encontrar tu próximo hogar.
            </p>

            {/* CTA Buttons with shine effect */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-gray-900 font-bold hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 btn-shine relative group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explora habitaciones
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-gray-900 hover:scale-105 transform transition-all duration-300 btn-shine relative group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Conecta ahora
                  <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="font-medium">+15,000 usuarios activos</span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-300 text-lg">
                    {star}
                  </span>
                ))}
                <span className="ml-1 font-medium">4.9/5</span>
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
                    <p className="text-sm text-muted-foreground">Habitación disponible</p>
                    <p className="text-lg font-bold text-foreground">Mexico-Tamaulipas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Desde</p>
                    <p className="text-xl font-bold text-primary">$2000/mes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-card animate-float hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Perfiles verificados</p>
                  <p className="text-xs text-gray-600">100% confiables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-white" strokeWidth={2} />
      </div>
    </section>
  );
};

export default HeroSection;

