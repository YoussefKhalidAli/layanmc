"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import CarouselItem from "./CarouselItem";
import { useEffect } from "react";

const carouselItems = [
  {
    title: "Welcome to Layanmc",
    description: "Welcome Slide",
    image: "/banner.jpg",
  },
  {
    title: "Dental Clinic",
    description:
      "Sculpted to perfection — elite slimming treatments for the discerning client.",
    image: "/dental-clinic.jpg",
  },
  {
    title: "Dermatology Clinic",
    description:
      "Clearer, healthier skin — guided by professional dermatologists.",
    image: "/derma-clinic.jpg",
  },
  {
    title: "Slimming Clinic",
    description:
      "Shape your journey — science-backed weight loss support for a healthier you.",
    image: "/slimming-clinic.jpg",
  },
  {
    title: "Cupping Clinic",
    description:
      "Ancient healing, modern luxury — indulge in the rejuvenating art of cupping.",
    image: "/cupping-clinic.jpg",
  },
];

export default function HeroSection() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min").then((bootstrap) => {
      const carouselEl = document.querySelector("#hero-carousel");
      if (carouselEl) {
        new bootstrap.Carousel(carouselEl);
      }
    });
  }, []);
  return (
    <section id="hero" className=" bg-light">
      <div
        id="hero-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              index={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
