import CardSection from "@/components/CardSection";
import CasualSection from "@/components/CasualSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImageGallery from "@/components/ImageGallery ";
import MensSection from "@/components/MensSection";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-black">
      <HeroSection />
      <CardSection/>
      <MensSection/>
      <div className="w-full h-[0px] md:h-[200px]"></div>
      <CasualSection/>
      <ImageGallery/>
      <Footer/>
     
     
    </div>
  );
}
