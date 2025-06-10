"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap-icons/font/bootstrap-icons.css";
import { TestimonialProps } from "@/app/types";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      name: "Saul Goodman",
      testimonial:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
      title: "Ceo & Founder",
      image: "/logo.jpg",
    },
    {
      name: "Sara Wilsson",
      testimonial:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
      title: "Designer",
      image: "/logo.jpg",
    },
    {
      name: "Jena Karlis",
      testimonial:
        "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
      title: "Store Owner",
      image: "/logo.jpg",
    },
    {
      name: "Matt Brandon",
      testimonial:
        "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
      title: "Freelancer",
      image: "/logo.jpg",
    },
    {
      name: "John Larson",
      testimonial:
        "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
      title: "Entrepreneur",
      image: "/logo.jpg",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={"auto"}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Autoplay, Pagination]}
          className="init-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                key={index}
                name={testimonial.name}
                title={testimonial.title}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
