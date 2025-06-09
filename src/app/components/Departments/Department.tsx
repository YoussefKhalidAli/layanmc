import { DepartmentProps } from "@/app/types";
import Image from "next/image";

export default function Department({
  index,
  title,
  shortSummary,
  description,
  image,
}: DepartmentProps) {
  return (
    <div
      className={`tab-pane ${index == 0 ? "active show" : ""}`}
      id={`tabs-tab-${(index ?? 0) + 1}`}
    >
      <div className="row">
        <div className="col-lg-8 details order-2 order-lg-1">
          <h3>{title}</h3>
          <p className="fst-italic">{shortSummary}</p>
          <p>{description}</p>
        </div>
        <div className="col-lg-4 text-center order-1 order-lg-2">
          <Image
            src={image}
            alt={title}
            className="Image-fluid"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
