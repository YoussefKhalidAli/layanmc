"use-clien";

import { ServiceProps } from "../../types";
import ServiceBlock from "./ServiceBlock";

const services: ServiceProps[] = [
  {
    icon: "fas fa-tooth icon",
    title: "Dental Care",
    description:
      "Comprehensive dental services from routine cleanings to advanced cosmetic treatments tailored for a healthy, confident smile.",
  },
  {
    icon: "fas fa-sun icon",
    title: "Dermatology",
    description:
      "Personalized skin care solutions for all ages, including treatment of acne, eczema, and cosmetic dermatology procedures.",
  },
  {
    icon: "fas fa-weight icon",
    title: "Slimming Programs",
    description:
      "Medically guided weight management programs designed to help you achieve your wellness goals safely and effectively.",
  },
  {
    icon: "fas fa-spa icon",
    title: "Cupping Therapy",
    description:
      "Traditional cupping treatments that promote circulation, reduce tension, and support overall physical well-being.",
  },
];

export default function ServicesBlocksSection() {
  return (
    <section
      id="featured-services"
      className="featured-services section light-background"
    >
      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <ServiceBlock
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
