import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import FeaturedRooms from "@/components/FeaturedRooms";
import FindRoomie from "@/components/FindRoomie";
import SocialProof from "@/components/SocialProof";
import DownloadApp from "@/components/DownloadApp";
import Footer from "@/components/Footer";

const Index = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header when scrolled past 300vh, aligning with the end of Hero animation
      setShowHeader(window.scrollY > window.innerHeight * 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showHeader
          ? 'translate-y-0 opacity-100'
          : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <Header />
      </div>
      <main>
        <HeroSection />
        <SocialProof />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
