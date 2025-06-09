export type ServiceProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  image: string;
  imageOn?: "left" | "right";
  buttonColor?: string;
};
