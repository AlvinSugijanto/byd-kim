import HomeView from "@/sections/home/home-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BYD Indonesia",
  description: "BYD Indonesia",
};

export default function Home() {
  return <HomeView />;
}
