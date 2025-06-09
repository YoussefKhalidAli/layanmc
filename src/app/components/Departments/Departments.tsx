import { DepartmentProps } from "@/app/types";
import Department from "./Department";

export default function Departments() {
  const departments: DepartmentProps[] = [
    {
      title: "dental",
      description:
        "dental stuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuff",
      shortSummary: "dental stuffstuffstuffstuffstuff",
      image: "/logo.jpg",
    },
    {
      title: "derma",
      description:
        "derma stuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuff",
      shortSummary: "derma stuffstuffstuffstuffstuff",
      image: "/logo.jpg",
    },
    {
      title: "skin care",
      description:
        "skin care stuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuff",
      shortSummary: "skin care stuffstuffstuffstuffstuff",
      image: "/logo.jpg",
    },
    {
      title: "cupping",
      description:
        "cupping stuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuffstuff",
      shortSummary: "cupping stuffstuffstuffstuffstuff",
      image: "/logo.jpg",
    },
  ];

  return (
    <section id="departments" className="tabs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Departments</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#tabs-tab-1"
                >
                  Dental
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-2">
                  Derma
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-3">
                  Skin Care
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#tabs-tab-4">
                  Cupping
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              {departments.map((department, index) => (
                <Department
                  key={index}
                  index={index}
                  title={department.title}
                  description={department.description}
                  shortSummary={department.shortSummary}
                  image={department.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
