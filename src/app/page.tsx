"use client";

import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/NavBar/NavBar";
import ServicesSection from "./components/Services/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
