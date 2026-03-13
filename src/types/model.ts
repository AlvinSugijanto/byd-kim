export interface CarProps {
  name: string;
  series: string;
  path: string;
  title?: string;
  description?: string;
  content?: Record<string, string | undefined>;
  specCard?: string;
  variants?: {
    name: string;
    tag: string;
    price: string;
    content?: Record<string, string | undefined>;
  }[];
}
export interface ModelDetailProps {
  car: CarProps;
  previousCar: {
    name: string;
    series: string;
    path: string;
  };
  nextCar: {
    name: string;
    series: string;
    path: string;
  };
}
