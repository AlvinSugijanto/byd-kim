import SimulasiCicilanView from "@/sections/simulasi-cicilan/simulasi-cicilan-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulasi Cicilan - BYD Indonesia",
  description: "Simulasi Cicilan BYD",
};

export default function SimulasiCicilanViewPage() {
  return <SimulasiCicilanView />;
}
