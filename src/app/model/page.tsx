import ModelView from "@/sections/model/model-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Model - BYD",
  description: "BYD INDONESIA",
};

export default function ModelPage() {
  return <ModelView />;
}
