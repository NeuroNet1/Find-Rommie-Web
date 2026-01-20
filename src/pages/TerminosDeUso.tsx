import React from "react";


const TerminosDeUso = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="w-full max-w-3xl bg-card/80 rounded-2xl shadow-card p-8 md:p-12 border border-border animate-fade-up">
        <h1 className="text-4xl font-extrabold text-foreground mb-6">Términos de Uso</h1>
        <p className="mb-4 text-muted-foreground">
          Bienvenido a Find Me Roomie. Al acceder y utilizar nuestra plataforma, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos cuidadosamente antes de utilizar nuestros servicios.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">1. Uso de la Plataforma</h2>
        <p className="mb-4 text-foreground/80">
          Find Me Roomie es una plataforma que conecta a personas que buscan y ofrecen habitaciones en Colombia. El uso de la plataforma debe ser legal y respetuoso con los demás usuarios.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">2. Responsabilidad del Usuario</h2>
        <p className="mb-4 text-foreground/80">
          Eres responsable de la veracidad de la información que publiques y de tu comportamiento dentro de la plataforma. No se permite la publicación de contenido falso, ofensivo o ilegal.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">3. Modificaciones</h2>
        <p className="mb-4 text-foreground/80">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios importantes a través de la plataforma.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">4. Contacto</h2>
        <p className="text-foreground/80">
          Si tienes preguntas sobre estos términos, contáctanos a <a href="mailto:soporte@findmeroomie.com" className="text-primary underline hover:text-primary/80">soporte@findmeroomie.com</a>.
        </p>
      </div>
    </div>
  </div>
);

export default TerminosDeUso;
