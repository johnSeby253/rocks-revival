"use client";

import { ChevronsDown } from "lucide-react";
import Header from "./Header";
import ThreeScene from "./ThreeScene";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/heroSectionVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Optional Black Overlay for cinematic look */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Three.js Model (optional) */}
      <div className="absolute inset-0 z-20">
        <ThreeScene />
      </div>

      {/* Header on top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Header />
      </div>

<div className="absolute bottom-10 w-full flex justify-center z-30">
  <button
    onClick={() =>
      window.scrollBy({
        top: 200, // adjust this value for more/less movement
        behavior: "smooth",
      })
    }
    className="w-[80%] sm:w-[15%] h-[50px] flex items-center justify-center gap-3 rounded-lg border border-amber-500 bg-black text-white font-bold hover:bg-gray-800 transition-all text-lg"
  >
    <p>Explore More</p>
    <ChevronsDown size={34} color="gold" />
  </button>
</div>



    </div>
  );
};

export default HeroSection;
