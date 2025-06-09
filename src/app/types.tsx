export type ServiceProps = {
  title: string;
  icon: string;
  description: string;
};

export type DepartmentProps = {
  index?: number;
  title: string;
  shortSummary: string;
  description: string;
  image: string;
};

export type TestimonialProps = {
  title: string;
  name: string;
  testimonial: string;
  image: string;
};

export type DoctorProps = {
  name: string;
  speciality: string;
  image: string;
};

export type CarouselItemProps = {
  index: number;
  title: string;
  description: string;
  image: string;
};
