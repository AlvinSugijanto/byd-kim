import HomeView from "@/sections/home/home-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BYD INDONESIA",
  description: "BYD INDONESIA",
};

export default function Home() {
  return <HomeView />;
}
