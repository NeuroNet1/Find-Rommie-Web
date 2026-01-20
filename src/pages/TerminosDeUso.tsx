import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, UserCheck, AlertCircle, Scale, RefreshCw, Ban, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TerminosDeUso = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Aceptación de los Términos",
      content: "Al acceder y utilizar Find Me Roomie, aceptas estar sujeto a estos términos y condiciones.",
      details: [
        "Debes tener al menos 18 años para usar la plataforma",
        "Al crear una cuenta, confirmas que la información proporcionada es veraz",
        "Eres responsable de mantener la confidencialidad de tu cuenta",
        "Debes notificarnos inmediatamente sobre cualquier uso no autorizado",
        "Nos reservamos el derecho de suspender cuentas que violen estos términos"
      ]
    },
    {
      icon: UserCheck,
      title: "2. Uso de la Plataforma",
      content: "Find Me Roomie es una plataforma que conecta a personas que buscan y ofrecen habitaciones en Colombia.",
      details: [
        "Debes usar la plataforma de manera legal y respetuosa",
        "No está permitido publicar contenido falso, engañoso o fraudulento",
        "Debes respetar los derechos de propiedad intelectual de terceros",
        "No puedes usar la plataforma para actividades comerciales no autorizadas",
        "Está prohibido el acoso, discriminación o comportamiento ofensivo"
      ]
    },
    {
      icon: AlertCircle,
      title: "3. Responsabilidad del Usuario",
      content: "Eres completamente responsable de la información que publiques y de tu comportamiento en la plataforma.",
      details: [
        "Debes verificar personalmente cualquier habitación antes de comprometerte",
        "Find Me Roomie no se hace responsable de disputas entre usuarios",
        "Debes realizar tu propia diligencia debida antes de cualquier acuerdo",
        "No garantizamos la exactitud de la información publicada por otros usuarios",
        "Eres responsable de cualquier transacción o acuerdo que realices"
      ]
    },
    {
      icon: Ban,
      title: "4. Contenido Prohibido",
      content: "Ciertos tipos de contenido y comportamientos están estrictamente prohibidos en nuestra plataforma.",
      details: [
        "Contenido ilegal, ofensivo, discriminatorio o que incite al odio",
        "Información falsa o engañosa sobre habitaciones o usuarios",
        "Spam, publicidad no autorizada o contenido comercial no relacionado",
        "Contenido que viole derechos de autor o propiedad intelectual",
        "Cualquier intento de fraude, estafa o actividad maliciosa"
      ]
    },
    {
      icon: Scale,
      title: "5. Derechos de Propiedad Intelectual",
      content: "Todo el contenido de la plataforma está protegido por derechos de propiedad intelectual.",
      details: [
        "El diseño, logotipo y marca de Find Me Roomie son de nuestra propiedad",
        "No puedes copiar, modificar o distribuir nuestro contenido sin autorización",
        "Mantienes los derechos sobre el contenido que publicas",
        "Nos otorgas una licencia para usar tu contenido en la plataforma",
        "Respetamos los derechos de autor y respondemos a reclamaciones DMCA"
      ]
    },
    {
      icon: RefreshCw,
      title: "6. Modificaciones y Terminación",
      content: "Nos reservamos el derecho de modificar estos términos y la plataforma en cualquier momento.",
      details: [
        "Te notificaremos sobre cambios importantes en los términos",
        "El uso continuado después de cambios implica aceptación",
        "Podemos suspender o terminar cuentas que violen estos términos",
        "Puedes cerrar tu cuenta en cualquier momento desde la configuración",
        "Nos reservamos el derecho de discontinuar la plataforma con previo aviso"
      ]
    },
    {
      icon: AlertCircle,
      title: "7. Limitación de Responsabilidad",
      content: "Find Me Roomie se proporciona 'tal cual' sin garantías de ningún tipo.",
      details: [
        "No garantizamos que la plataforma esté libre de errores o interrupciones",
        "No somos responsables de pérdidas o daños derivados del uso de la plataforma",
        "No verificamos la identidad o antecedentes de todos los usuarios",
        "Las transacciones y acuerdos son entre usuarios, no con Find Me Roomie",
        "Nuestra responsabilidad está limitada al máximo permitido por la ley"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">


            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-coral mb-6 shadow-card">
              <Scale className="w-10 h-10 text-secondary-foreground" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Términos de Uso
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              Bienvenido a Find Me Roomie. Al acceder y utilizar nuestra plataforma, aceptas cumplir con los siguientes términos y condiciones.
            </p>

            <p className="text-sm text-muted-foreground">
              Última actualización: Enero 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-6 md:p-8 shadow-card hover-lift animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {section.content}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-3 ml-16">
                    {section.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Important Notice */}
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card bg-amber-500/5 border-amber-500/20 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Aviso Importante
                  </h3>
                  <p className="text-muted-foreground">
                    Find Me Roomie es una plataforma de conexión entre usuarios. No somos una agencia inmobiliaria ni verificamos todas las propiedades.
                    Siempre recomendamos visitar personalmente las habitaciones, verificar la identidad de los usuarios y firmar contratos formales antes de realizar cualquier pago o compromiso.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card bg-secondary/5 border-secondary/20 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-coral flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ¿Preguntas sobre los términos?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Si tienes alguna pregunta sobre estos términos de uso o necesitas aclaraciones, nuestro equipo está aquí para ayudarte.
                  </p>
                  <Button asChild className="gradient-coral text-secondary-foreground">
                    <a href="mailto:soporte@findmeroomie.com">
                      Contactar Soporte
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosDeUso;
