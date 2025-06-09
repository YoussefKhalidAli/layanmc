import { CarouselItemProps } from "@/app/types";

export default function CarouselItem({
  index,
  title,
  description,
  image,
}: CarouselItemProps) {
  return (
    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img
        src={image}
        className="d-block w-100"
        alt={`Slide ${index + 1}`}
        style={{ objectFit: "cover", height: "500px" }}
      />
      <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded-3">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#about" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}
