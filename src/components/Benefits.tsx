import { ShieldCheck, MapPin, Wallet, Users, Smartphone } from "lucide-react";
import { ScrollAnimate } from "./ScrollAnimate";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Perfiles verificados",
    description: "Todos los usuarios pasan por un proceso de verificación para tu seguridad.",
  },
  {
    icon: MapPin,
    title: "Búsqueda por ciudad",
    description: "Encuentra opciones en CDMX, Guadalajara, Monterrey, Querétaro y más ciudades.",
  },
  {
    icon: Wallet,
    title: "Ahorra compartiendo",
    description: "Reduce tus gastos de vivienda hasta un 50% compartiendo espacios.",
  },
  {
    icon: Users,
    title: "Convivencia confiable",
    description: "Conoce el estilo de vida de tus futuros roomies antes de decidir.",
  },
  {
    icon: Smartphone,
    title: "Fácil de usar",
    description: "Interfaz simple e intuitiva para buscar, publicar y contactar.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4">
        <ScrollAnimate animation="slide-fade-right">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
              Beneficios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              ¿Por qué elegir{" "}
              <span className="text-green-600">Find Me Roomie?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              La plataforma más confiable para encontrar tu próximo hogar compartido en Colombia.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimate
              key={index}
              animation="fade-in-up"
              delay={index + 1}
              threshold={0.2}
            >
              <div className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}

          {/* Special CTA card */}
          <ScrollAnimate animation="scale-in" delay={6} threshold={0.2}>
            <div className="group gradient-hero rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-primary-foreground mb-2">
                ¡Y mucho más!
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Descubre todas las funcionalidades que tenemos para ti.
              </p>
              <span className="text-primary-foreground underline underline-offset-4 font-medium cursor-pointer hover:no-underline">
                Explorar plataforma →
              </span>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

