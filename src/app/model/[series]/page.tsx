import { Metadata } from "next";
import { notFound } from "next/navigation";
import { carList } from "@/lib/carList";
import Atto1DetailView from "@/sections/model/detail/atto1-detail-view";
import SealDetailView from "@/sections/model/detail/seal-detail-view";
import Atto3DetailView from "@/sections/model/detail/atto3-detail-view";
import DolphinDetailView from "@/sections/model/detail/dolphin-detail-view";
import M6DetailView from "@/sections/model/detail/m6-detail-view";
import Sealion7DetailView from "@/sections/model/detail/sealion7-detail-view";
import { ComponentType } from "react";
import { ModelDetailProps } from "@/types/model";
import ModelDetailView from "@/sections/model/model-detail-view";
import DenzaDetailView from "@/sections/model/detail/denza-detail-view";

interface PageProps {
  params: Promise<{
    series: string;
  }>;
}

// Map each series slug to its dedicated view component
const viewMap: Record<string, ComponentType<ModelDetailProps>> = {
  seal: SealDetailView,
  "atto-3": Atto3DetailView,
  "atto-1": Atto1DetailView,
  dolphin: DolphinDetailView,
  m6: M6DetailView,
  "sealion-7": Sealion7DetailView,
  denza: DenzaDetailView,
};

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { series } = await params;
  const car = carList.find((c) => c.series === series);

  if (!car) {
    return {
      title: "Car Not Found",
      description: "The car you are looking for does not exist.",
    };
  }

  // Create a clean description for SEO (limit to 160 characters)
  const seoDescription =
    car.description && car.description.length > 160
      ? car.description.substring(0, 157) + "..."
      : car.description ||
        `Discover the ${car.name} - ${car.title || "Premium BYD vehicle"}`;

  // Generate keywords from car data
  const keywords = [
    "BYD",
    car.name,
    car.series,
    car.type,
    car.tag,
    "electric car",
    "premium electric vehicle",
    "test drive",
    "BYD INDONESIA",
    "BYD Dealer",
  ].filter(Boolean);

  return {
    title: `${car.name} - BYD INDONESIA`,
    description: seoDescription,
    keywords: keywords.join(", "),
    openGraph: {
      title: `${car.name} - ${car.title || "BYD INDONESIA"}`,
      description: seoDescription,
      images: [
        {
          url: car.path,
          width: 1200,
          height: 630,
          alt: car.name,
        },
      ],
      type: "website",
      siteName: "BYD INDONESIA",
    },
    twitter: {
      card: "summary_large_image",
      title: `${car.name} - BYD INDONESIA`,
      description: seoDescription,
      images: [car.path],
    },
    alternates: {
      canonical: `/model/${car.series}`,
    },
  };
}

// Generate static params for all car series
export async function generateStaticParams() {
  return carList.map((car) => ({
    series: car.series,
  }));
}

export default async function CarDetailPage({ params }: PageProps) {
  const { series } = await params;

  // Find the car by series
  const car = carList.find((c) => c.series === series);

  // If car not found, show 404
  if (!car) {
    notFound();
  }

  // Find current car index for navigation
  const currentIndex = carList.findIndex((c) => c.series === series);
  const previousCar =
    currentIndex > 0 ? carList[currentIndex - 1] : carList[carList.length - 1];
  const nextCar =
    currentIndex < carList.length - 1 ? carList[currentIndex + 1] : carList[0];

  // Get the view component for this series, fallback to default
  const ViewComponent = viewMap[series];

  return (
    <ModelDetailView
      viewComponent={ViewComponent}
      car={car}
      previousCar={previousCar}
      nextCar={nextCar}
    />
  );
}
