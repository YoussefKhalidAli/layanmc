import { DoctorProps } from "@/app/types";
import Image from "next/image";

export default function Doctor({ name, speciality, image }: DoctorProps) {
  return (
    <div
      className="col-lg-3 col-md-6 d-flex align-items-stretch"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="team-member">
        <div className="member-img">
          <Image
            src={image}
            className="img-fluid"
            alt=""
            width={300}
            height={600}
          />
          <div className="social">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{name}</h4>
          <span>{speciality}</span>
        </div>
      </div>
    </div>
  );
}
