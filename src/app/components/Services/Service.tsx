import { ServiceProps } from "@/app/types";

export default function Service({ title, icon, description }: ServiceProps) {
  return (
    <div className="row-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item  position-relative">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}
