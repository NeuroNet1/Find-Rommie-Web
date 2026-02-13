import { useEffect, useState, useRef } from "react";

// Import all frames from the assets folder
const frameModules = import.meta.glob("../assets/frames/*.{png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// Sort frames alphabetically to ensure correct sequence
const frames = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key] as string);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Total scrollable distance within this section
      const totalScrollable = containerHeight - viewportHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress from 0 to 1
      const currentProgress = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
      setProgress(currentProgress);

      // Determine which frame to show
      const index = Math.min(
        Math.floor(currentProgress * frames.length),
        frames.length - 1
      );
      setFrameIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to set state correctly
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Animated Frame Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {frames.length > 0 && (
            <img
              src={frames[frameIndex]}
              alt="Animated Background"
              className="w-full h-full object-cover transition-transform duration-100 ease-linear"
              style={{
                transform: `scale(${1 + progress * 0.2})`,
              }}
            />
          )}
          {/* Subtle Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Logo - Appears at the end with buttons and navbar */}
        <div
          className="absolute top-8 left-8 z-20 transition-all duration-700"
          style={{
            opacity: progress > 0.85 ? 1 : 0,
            transform: `translateY(${progress > 0.85 ? 0 : -20}px)`,
            pointerEvents: progress > 0.85 ? 'auto' : 'none'
          }}
        >
          <img
            src="/logo1.png"
            alt="Find My Roomie Logo"
            className="h-12 sm:h-16 w-auto"
          />
        </div>

        {/* CTA Buttons - Positioned at the bottom center */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 w-full px-4"
          style={{
            opacity: progress > 0.85 ? 1 : 0,
            transform: `translate(calc(-50% + 0px), ${progress > 0.85 ? 0 : 50}px)`,
            pointerEvents: progress > 0.85 ? 'auto' : 'none'
          }}
        >
          <button className="px-12 py-5 bg-[#C1403D] text-white rounded-full font-bold text-xl hover:bg-[#A03532] transition-all duration-300 shadow-2xl hover:shadow-red-900/20 hover:scale-105 active:scale-95">
            Find Roomie
          </button>
          <button className="px-10 py-5 bg-white/80 backdrop-blur-md text-[#C1403D] border-2 border-[#C1403D] rounded-full font-bold text-xl hover:bg-[#C1403D] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
            Post Room
          </button>
        </div>

        {/* Decorative gradient at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none opacity-50" />
      </section>
    </div>
  );
};

export default HeroSection;
