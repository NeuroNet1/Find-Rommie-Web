import { Home, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8E4D5]/90 backdrop-blur-md border-b border-[#B21E06]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img src="/logo1.png" alt="Find My Roomie" className="h-10 w-auto" />
          </a>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-up">
            <nav className="flex flex-col gap-4 pt-4">
              <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                ¿Cómo funciona?
              </a>
              <a href="#habitaciones" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Habitaciones
              </a>
              <a href="#roomies" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Roomies
              </a>
              <a href="#testimonios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                Testimonios
              </a>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start">
                  Iniciar sesión
                </Button>
                <Button variant="default">
                  Publicar habitación
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
