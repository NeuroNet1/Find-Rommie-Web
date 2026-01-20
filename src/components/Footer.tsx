import { Home, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    plataforma: [
      { label: "Buscar habitación", href: "#" },
      { label: "Publicar habitación", href: "#" },
      { label: "Ver roomies", href: "#" },
      { label: "Ciudades", href: "#" },
    ],
    empresa: [
      { label: "Sobre nosotros", href: "#" },
      { label: "Trabaja con nosotros", href: "#" },
    ],
    soporte: [
      { label: "Centro de ayuda", href: "#" },
      { label: "Seguridad", href: "#" },
      { label: "Términos de uso", href: "/TerminosDeUso" },
      { label: "Privacidad", href: "/Privacidad" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Home className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Find Me Roomie
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-xs">
              La plataforma #1 en Mexico para encontrar habitaciones y roommates confiables.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇨🇴</span>
              <span className="text-background/70 text-sm">Hecho para Mexico</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-background mb-4">Plataforma</h4>
            <ul className="space-y-3">
              {links.plataforma.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-background mb-4">Soporte</h4>
            <ul className="space-y-3">
              {links.soporte.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Find Me Roomie. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Instagram className="w-5 h-5 text-background" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="w-5 h-5 text-background" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Twitter className="w-5 h-5 text-background" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
