import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container relative mx-auto px-4">
        <div className="relative gradient-hero rounded-3xl p-8 sm:p-12 lg:p-20 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Únete a +15,000 usuarios satisfechos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Empieza hoy a vivir mejor compartiendo
            </h2>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-xl mx-auto">
              Encuentra tu habitación ideal o conecta con roomies confiables. Es gratis, seguro y fácil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero-outline" size="xl" className="group">
                Únete a Find Me Roomie
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
