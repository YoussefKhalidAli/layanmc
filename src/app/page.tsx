"use client";

import Navbar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesBlocksSection from "./components/ServicesBlocks/ServicesBlocks";
import AboutSection from "./components/About/About";
// import ServicesSection from "./components/Services/Services";
// import Appointment from "./components/Appointment/Appointment";
// import Departments from "./components/Departments/Departments";
// import Testimonials from "./components/Testimonials/Testimonials";
import Doctors from "./components/Doctors/Doctors";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main">
        <HeroSection />
        <AboutSection />
        <ServicesBlocksSection />
        <Doctors />
      </main>
      <Footer />
    </>
  );
}
