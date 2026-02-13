import { useEffect, useState, useRef } from "react";

// Hero frames are served from the public/frames folder
const TOTAL_FRAMES = 37;
const framePaths = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
  `/frames/ezgif-frame-${(i + 1).toString().padStart(3, '0')}.png`
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const currentProgressRef = useRef(0);
  const lastFrameIndexRef = useRef(-1);

  // High-performance frame rendering
  const renderFrame = (index: number, progress: number) => {
    const canvas = canvasRef.current;
    const images = imagesRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Optimize for non-transparent backgrounds
    if (!ctx) return;

    const img = images[index];

    // Support for High DPI displays
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Calculate "object-fit: cover" logic
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    // Apply scale-up animation effect
    const scaleFactor = 1 + progress * 0.15;
    ctx.translate(width / 2, height / 2);
    ctx.scale(scaleFactor, scaleFactor);
    ctx.translate(-width / 2, -height / 2);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    ctx.restore();
    lastFrameIndexRef.current = index;
  };

  // Preload and cache all frames
  useEffect(() => {
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];

    const preload = async () => {
      const promises = framePaths.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedCount++;
            preloadedImages[index] = img;
            setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
            if (loadedCount === TOTAL_FRAMES) {
              imagesRef.current = preloadedImages;
              setImagesLoaded(true);
            }
            resolve();
          };
          img.onerror = () => {
            console.error(`Error loading frame: ${src}`);
            loadedCount++;
            resolve();
          };
        });
      });
      await Promise.all(promises);
    };

    preload();
  }, []);

  // Optimized scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imagesLoaded) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.min(Math.max(scrollY / totalScrollable, 0), 1);
      currentProgressRef.current = progress;

      // Update button visibility threshold
      const showThreshold = progress > 0.85;
      if (showThreshold !== showButtons) {
        setShowButtons(showThreshold);
      }

      const frameIndex = Math.min(
        Math.floor(progress * TOTAL_FRAMES),
        TOTAL_FRAMES - 1
      );

      // Only re-render frame if index or tiny progress changed for scale
      requestAnimationFrame(() => renderFrame(frameIndex, progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial render
    if (imagesLoaded) handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [imagesLoaded, showButtons]);

  // Handle Window Resize
  useEffect(() => {
    const handleResize = () => {
      if (imagesLoaded) {
        const frameIndex = Math.min(
          Math.floor(currentProgressRef.current * TOTAL_FRAMES),
          TOTAL_FRAMES - 1
        );
        renderFrame(frameIndex, currentProgressRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [imagesLoaded]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <section className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Canvas based renderer */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 transition-opacity duration-1000 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Loading Overlay */}
        {!imagesLoaded && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black gap-4">
            <div className="w-16 h-16 border-4 border-white/20 border-t-[#C1403D] rounded-full animate-spin" />
            <p className="text-white/60 font-medium text-sm tracking-widest uppercase">Loading Experience {loadProgress}%</p>
          </div>
        )}

        {/* Call to Actions - Visible at the end of scroll */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex flex-wrap items-center justify-center gap-6 transition-all duration-1000 w-full px-4"
          style={{
            opacity: showButtons ? 1 : 0,
            transform: `translate(-50%, ${showButtons ? 0 : 60}px)`,
            pointerEvents: showButtons ? 'auto' : 'none',
            filter: showButtons ? 'blur(0)' : 'blur(10px)'
          }}
        >
          <button className="px-12 py-5 bg-[#C1403D] text-white rounded-full font-bold text-xl hover:bg-[#A03532] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
            Find Roomie
          </button>
          <button className="px-10 py-5 bg-white/10 backdrop-blur-xl text-white border-2 border-white/40 rounded-full font-bold text-xl hover:bg-white hover:text-[#C1403D] transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
            Post Room
          </button>
        </div>

        {/* Bottom Decorative Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />
      </section>
    </div>
  );
};

export default HeroSection;
