import { TestimonialProps } from "@/app/types";
import Image from "next/image";

export default function Testimonial({
  name,
  title,
  testimonial,
  image,
}: TestimonialProps) {
  return (
    <div className="testimonial-item">
      <p>
        <i className="bi bi-quote quote-icon-left"></i>
        {testimonial}
        <i className="bi bi-quote quote-icon-right"></i>
      </p>
      <Image
        src={image}
        className="testimonial-img"
        alt={name}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <h3>{name}</h3>
      <h4>{title}</h4>
    </div>
  );
}
