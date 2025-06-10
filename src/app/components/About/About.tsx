"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>
          About Us
          <br />
        </h2>
        <p>Dedicated to your well-being, confidence, and holistic health.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/logo.jpg"
              width={600}
              height={500}
              alt="Layan Medical Center Logo"
            />
            {/* <a
              href=""
              className="glightbox pulsating-play-btn"
            ></a> */}
          </div>
          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Comprehensive Care in a Modern and Welcoming Environment</h3>
            <p className="fst-italic">
              At Layan Medical Center, we strive to provide exceptional care
              across a range of medical and wellness services, tailored to meet
              your individual needs.
            </p>
            <ul>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Specialized services in dental care, dermatology, slimming,
                  and cupping therapy.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  A patient-first approach with experienced professionals and
                  modern equipment.
                </span>
              </li>
              <li>
                <i className="bi bi-check2-all"></i>{" "}
                <span>
                  Safe, effective, and personalized treatments designed to
                  improve your quality of life.
                </span>
              </li>
            </ul>
            <p>
              Whether you&apos;re looking to enhance your smile, care for your
              skin, achieve wellness goals, or explore traditional healing
              methods, our team is here to guide you every step of the way. Your
              health is our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
