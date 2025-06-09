"use client";

import { ServiceProps } from "../../types";

export default function ServiceBlock({
  title,
  icon,
  description,
}: ServiceProps) {
  return (
    <div
      className="col-xl-3 col-md-6 d-flex"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="service-item position-relative">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4>
          <a href="" className="stretched-link">
            {title}
          </a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}
