import { DoctorProps } from "@/app/types";
import Doctor from "./Doctor";

export default function Doctors() {
  const doctors: DoctorProps[] = [
    {
      name: "Walter White",
      speciality: "Chief Medical Officer",
      image: "/logo.jpg",
    },
    {
      name: "Sarah Jhonson",
      speciality: "Anesthesiologist",
      image: "/logo.jpg",
    },
    {
      name: "William Anderson",
      speciality: "Cardiology",
      image: "/logo.jpg",
    },
    {
      name: "Amanda Jepson",
      speciality: "Neurosurgeon",
      image: "/logo.jpg",
    },
  ];

  return (
    <section id="doctors" className="doctors section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Meet Our Expert Medical Team</h2>
        <p>
          Dedicated professionals committed to providing compassionate,
          personalized, and high-quality care across every specialty.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {doctors.map((doctor, index) => (
            <Doctor
              key={index}
              name={doctor.name}
              speciality={doctor.speciality}
              image={doctor.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
