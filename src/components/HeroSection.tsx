import appIcon from "@/assets/app-icon.png";
import room1 from "@/assets/room-1.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/fondohero.jpeg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Logo - Top Left */}
      <div className="absolute top-8 left-8 z-20 animate-fade-up">
        <img
          src="/logo1.png"
          alt="Find My Roomie Logo"
          className="h-12 sm:h-16 w-auto"
        />
      </div>
      {/* Main Content Container */}
      <div className="container relative mx-auto px-4 py-20 z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">

          {/* Text and Phones Container */}
          <div className="grid lg:grid-cols-2 gap-8 items-center w-full max-w-6xl mb-12">

            {/* Left Side - Text */}
            <div className="space-y-4 animate-fade-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your home.
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your roomie.
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Your app.
              </h1>
            </div>

          </div>

          {/* CTA Buttons - Centered at Bottom */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <button className="px-8 py-4 bg-[#C1403D] text-white rounded-full font-semibold text-lg hover:bg-[#A03532] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Find Roomie
            </button>
            <button className="px-8 py-4 bg-white text-[#C1403D] border-2 border-[#C1403D] rounded-full font-semibold text-lg hover:bg-[#C1403D] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Post Room
            </button>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
