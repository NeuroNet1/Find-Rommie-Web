import React from 'react';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-20 bg-[#F8E4D5] overflow-hidden border-t border-[#B21E06]/10">
      {/* Window pane shadows simulation with branding color */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%), linear-gradient(0deg, transparent 49%, rgba(178, 30, 6, 0.2) 50%, transparent 51%)',
            backgroundSize: '40% 40%'
          }}>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Explora</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Cómo funciona</a></li>
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Seguridad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Recursos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Guías de Zonas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Ayuda</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Soporte</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-bold mb-6 text-[#1A1A1A]">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Términos Legales</a></li>
              <li><a href="#" className="text-[#1A1A1A] opacity-70 hover:opacity-100 hover:text-[#B21E06] transition-all">Privacidad</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-12">
          {/* Newsletter Input with Branding Colors */}
          <div className="relative w-full max-w-lg">
            <div className="flex items-center bg-white/50 backdrop-blur-sm border-2 border-[#B21E06] rounded-full overflow-hidden p-1 shadow-md">
              <input
                type="text"
                placeholder="Recibir alertas de habitaciones"
                className="flex-1 bg-transparent px-6 py-3 text-[#1A1A1A] outline-none placeholder:text-[#1A1A1A]/50"
              />
              <button className="bg-[#B21E06] hover:bg-[#8B1705] p-3 rounded-full transition-colors m-1">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Social Icons with Branding Colors */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-[#B21E06] flex items-center justify-center text-[#B21E06] hover:bg-[#B21E06] hover:text-white transition-all">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#B21E06] flex items-center justify-center text-[#B21E06] hover:bg-[#B21E06] hover:text-white transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-[#B21E06] flex items-center justify-center text-[#B21E06] hover:bg-[#B21E06] hover:text-white transition-all">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="font-bold text-sm text-[#1A1A1A]">@ Find My Roomie</p>
          </div>
        </div>

        <div className="pt-8 text-center border-t border-[#B21E06]/10">
          <p className="text-sm font-medium text-[#1A1A1A]/40">© 2024 Find My Roomie. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
