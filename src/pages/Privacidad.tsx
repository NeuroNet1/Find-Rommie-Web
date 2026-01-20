import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Users, FileText, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacidad = () => {
  const sections = [
    {
      icon: Database,
      title: "1. Información Recopilada",
      content: "Recopilamos información que nos proporcionas al registrarte, publicar anuncios o comunicarte con otros usuarios.",
      details: [
        "Nombre completo y datos de contacto (correo electrónico, número de teléfono)",
        "Información de perfil (foto, biografía, preferencias de vivienda)",
        "Detalles de anuncios publicados (ubicación, precio, características)",
        "Historial de comunicaciones dentro de la plataforma",
        "Datos de uso y navegación (cookies, dirección IP, tipo de dispositivo)"
      ]
    },
    {
      icon: Eye,
      title: "2. Uso de la Información",
      content: "Utilizamos tu información para ofrecerte nuestros servicios, mejorar la plataforma y mantener la seguridad de la comunidad.",
      details: [
        "Facilitar la conexión entre usuarios que buscan y ofrecen habitaciones",
        "Personalizar tu experiencia y mostrar contenido relevante",
        "Enviar notificaciones importantes sobre tu cuenta y actividad",
        "Mejorar nuestros servicios mediante análisis de uso",
        "Prevenir fraudes y mantener la seguridad de la plataforma"
      ]
    },
    {
      icon: Lock,
      title: "3. Seguridad y Protección",
      content: "Implementamos medidas de seguridad avanzadas para proteger tu información personal.",
      details: [
        "Encriptación SSL/TLS para todas las transmisiones de datos",
        "Almacenamiento seguro en servidores protegidos",
        "Acceso restringido a información personal solo para personal autorizado",
        "Monitoreo continuo de actividades sospechosas",
        "Actualizaciones regulares de seguridad y protocolos"
      ]
    },
    {
      icon: Users,
      title: "4. Compartir Información",
      content: "No compartimos tu información personal con terceros sin tu consentimiento explícito.",
      details: [
        "Solo compartimos información visible en tu perfil público con otros usuarios",
        "Podemos compartir datos agregados y anónimos para análisis estadísticos",
        "Cumplimos con requerimientos legales cuando sea necesario",
        "No vendemos tu información personal a terceros",
        "Los proveedores de servicios tienen acceso limitado bajo acuerdos de confidencialidad"
      ]
    },
    {
      icon: FileText,
      title: "5. Tus Derechos",
      content: "Tienes control total sobre tu información personal en nuestra plataforma.",
      details: [
        "Acceder y descargar toda tu información personal",
        "Corregir o actualizar datos inexactos",
        "Eliminar tu cuenta y datos asociados en cualquier momento",
        "Oponerte al procesamiento de tus datos para ciertos fines",
        "Solicitar la portabilidad de tus datos a otro servicio"
      ]
    },
    {
      icon: Shield,
      title: "6. Cookies y Tecnologías Similares",
      content: "Utilizamos cookies para mejorar tu experiencia y analizar el uso de la plataforma.",
      details: [
        "Cookies esenciales para el funcionamiento del sitio",
        "Cookies de análisis para entender cómo usas la plataforma",
        "Cookies de preferencias para recordar tus configuraciones",
        "Puedes gestionar las cookies desde la configuración de tu navegador",
        "Algunas funciones pueden no estar disponibles si desactivas las cookies"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-soft" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">


            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-hero mb-6 shadow-card">
              <Shield className="w-10 h-10 text-primary-foreground" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6">
              Política de Privacidad
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              En Find Me Roomie, tu privacidad es nuestra prioridad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.
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
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
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
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Contact Section */}
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card bg-primary/5 border-primary/20 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ¿Tienes preguntas?
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    Si tienes alguna pregunta sobre nuestra política de privacidad o cómo manejamos tus datos, no dudes en contactarnos.
                  </p>
                  <Button asChild className="gradient-hero text-primary-foreground">
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

export default Privacidad;
