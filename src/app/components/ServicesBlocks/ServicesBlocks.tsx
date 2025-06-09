"use-clien";

import { ServiceProps } from "../../types";
import ServiceBlock from "./ServiceBlock";

const services: ServiceProps[] = [
  {
    icon: "fas fa-heartbeat icon",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    icon: "fas fa-pills icon",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    icon: "fas fa-dna icon",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
  {
    icon: "fas fa-heartbeat icon",
    title: "Lorem Ipsum",
    description:
      "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
  },
];
export default function ServicesBlocksSection() {
  return (
    <section id="featured-services" className="featured-services section">
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
