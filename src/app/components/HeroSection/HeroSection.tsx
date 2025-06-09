"use client";

import "bootstrap/dist/css/bootstrap.min.css";

import CarouselItem from "./CarouselItem";
import { useEffect } from "react";

const carouselItems = [
  {
    title: "Welcome to Medicio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/banner.jpg",
  },
  {
    title: "At vero eos et accusamus",
    description:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    image: "/logo.jpg",
  },
  {
    title: "Temporibus autem quibusdam",
    description:
      "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    image: "/banner.jpg",
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
