export interface ModelDetailProps {
  car: {
    name: string;
    series: string;
    path: string;
    title?: string;
    description?: string;
    content?: Record<string, string | undefined>;
    specCard?: string;
  };
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
