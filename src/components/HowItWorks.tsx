import { Search, UserCheck, Home } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Explora habitaciones",
    description: "Busca entre cientos de opciones filtradas por ciudad, precio y tipo de espacio.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: UserCheck,
    title: "Conecta con personas verificadas",
    description: "Revisa perfiles completos, intereses y estilo de vida antes de contactar.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Home,
    title: "Comparte un espacio seguro",
    description: "Coordina visitas, acuerda términos y empieza tu nueva vida compartiendo.",
    color: "bg-accent text-accent-foreground",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            ¿Cómo funciona?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Encuentra tu espacio en{" "}
            <span className="text-green-600">3 simples pasos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conectamos personas que buscan habitaciones con quienes las ofrecen. Sin complicaciones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />
                </div>
              )}

              <div className="relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-soft">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
