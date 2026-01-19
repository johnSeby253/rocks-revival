import CardSection from "@/components/CardSection";
import CasualSection from "@/components/CasualSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MensSection from "@/components/MensSection";
import Image from "next/image";

export default function Home() {
  return (
  <div className="bg-black">
      <HeroSection />
      <CardSection/>
      <MensSection/>
      <CasualSection/>
      <Footer/>
     
     
    </div>
  );
}
