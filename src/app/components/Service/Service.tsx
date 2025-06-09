"use client";

import "./Service.css";

import { ServiceProps } from "../../types";
import Image from "next/image";
export default function ServiceSlide({
  title,
  icon,
  description,
  features,
  image,
  imageOn,
  buttonColor,
}: ServiceProps) {
  const imageFirst = imageOn === "left";

  return (
    <div className={`service-slide ${imageFirst ? "reverse" : ""}`}>
      <div className="slide-image">
        <Image src={image} alt={`${title} image`} width={1200} height={600} />
      </div>

      <div className="slide-content">
        <h3 className="slide-title">
          <span className="icon">{icon}</span> {title}
        </h3>
        <p className="slide-description">{description}</p>
        <ul className="slide-features">
          {features.map((feature: string, idx: number) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <a
          href="#learn-more"
          className="learn-more"
          style={{ backgroundColor: buttonColor }}
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
