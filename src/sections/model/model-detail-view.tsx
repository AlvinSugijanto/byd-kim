import React from "react";
import { CarProps, ModelDetailProps } from "@/types/model";
import { ComponentType } from "react";

interface ModelDetailViewProps {
  viewComponent: ComponentType<ModelDetailProps>;
  car: CarProps;
  previousCar: CarProps;
  nextCar: CarProps;
}

const ModelDetailView = ({
  viewComponent: ViewComponent,
  car,
  previousCar,
  nextCar,
}: ModelDetailViewProps) => {
  return (
    <>
      <ViewComponent car={car} previousCar={previousCar} nextCar={nextCar} />
    </>
  );
};

export default ModelDetailView;
