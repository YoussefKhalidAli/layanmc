"use-clien";

import "./Services.css";

import ServiceSlide from "../Service/Service";

export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2>Our Specialized Services</h2>
        <p>Comprehensive healthcare solutions tailored to your needs</p>
      </div>

      <ServiceSlide
        title="Skin Care"
        icon="💖"
        description="Advanced skincare treatments using cutting-edge technology and premium products to rejuvenate and protect your skin."
        features={[
          "Anti-aging treatments",
          "Acne treatment solutions",
          "Hydrafacial therapy",
          "Chemical peels",
        ]}
        image="/skin_care_routine.png"
        imageOn="right"
        buttonColor="#e91e63"
      />

      <ServiceSlide
        title="Dermatology"
        icon="🧴"
        description="Comprehensive dermatological care to diagnose and treat skin conditions with expert guidance and advanced procedures."
        features={[
          "Eczema & psoriasis treatment",
          "Skin cancer screening",
          "Mole and wart removal",
          "Cosmetic dermatology services",
        ]}
        image="/woman-wellness-center-skin-treatment.jpg"
        imageOn="left"
        buttonColor="#8e24aa"
      />

      <ServiceSlide
        title="Cupping Therapy"
        icon="🫶"
        description="Experience the ancient healing power of cupping therapy to relieve muscle tension, promote circulation, and support overall wellness."
        features={[
          "Pain relief & relaxation",
          "Improved blood flow",
          "Detoxification support",
          "Traditional holistic approach",
        ]}
        image="/man-suction-cups-session-close-up.jpg"
        imageOn="right"
        buttonColor="#a52a2a"
      />

      <ServiceSlide
        title="Dental Care"
        icon="🦷"
        description="Complete dental healthcare from routine cleanings to advanced procedures, ensuring your smile stays healthy and beautiful."
        features={[
          "Teeth whitening",
          "Dental implants",
          "Orthodontic treatment",
          "Root canal therapy",
        ]}
        image="/woman-patient-dentist.jpg"
        imageOn="left"
        buttonColor="#1e88e5"
      />
    </section>
  );
}
