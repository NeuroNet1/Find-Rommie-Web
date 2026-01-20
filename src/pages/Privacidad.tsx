import React from "react";


const Privacidad = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <div className="flex-1 flex items-center justify-center py-16">
      <div className="w-full max-w-3xl bg-card/80 rounded-2xl shadow-card p-8 md:p-12 border border-border animate-fade-up">
        <h1 className="text-4xl font-extrabold text-foreground mb-6">Política de Privacidad</h1>
        <p className="mb-4 text-muted-foreground">
          En Find Me Roomie, tu privacidad es muy importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestra plataforma.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">1. Información Recopilada</h2>
        <p className="mb-4 text-foreground/80">
          Recopilamos información que nos proporcionas al registrarte, publicar anuncios o comunicarte con otros usuarios. Esto puede incluir tu nombre, correo electrónico, número de teléfono y detalles de tu anuncio.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">2. Uso de la Información</h2>
        <p className="mb-4 text-foreground/80">
          Utilizamos tu información para ofrecerte nuestros servicios, mejorar la plataforma y mantener la seguridad de la comunidad. No compartimos tu información personal con terceros sin tu consentimiento, salvo requerimiento legal.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">3. Seguridad</h2>
        <p className="mb-4 text-foreground/80">
          Implementamos medidas de seguridad para proteger tu información. Sin embargo, ninguna transmisión por Internet es completamente segura, por lo que te recomendamos ser cuidadoso con la información que compartes.
        </p>
        <h2 className="text-2xl font-bold text-primary mt-8 mb-2">4. Contacto</h2>
        <p className="text-foreground/80">
          Si tienes preguntas sobre nuestra política de privacidad, escríbenos a <a href="mailto:soporte@findmeroomie.com" className="text-primary underline hover:text-primary/80">soporte@findmeroomie.com</a>.
        </p>
      </div>
    </div>
  </div>
);

export default Privacidad;
