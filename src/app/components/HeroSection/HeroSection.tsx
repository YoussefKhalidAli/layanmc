"use client";

import "./HeroSection.css";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="subtitle">Premium Skincare Centre</p>
          <h1 className="title">
            <span className="highlight">Comprehensive healthcare </span>
            for you & your family
          </h1>
          <p className="description">
            Experience transformative skincare treatments designed to
            rejuvenate, restore, and enhance your natural beauty with our expert
            aestheticians.
          </p>

          <div className="badges">
            <span>✓ Certified Professionals</span>
            <span>🍃 Organic Products</span>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/skin_care_routine.png"
            alt="Skincare treatment"
            width={1000}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
