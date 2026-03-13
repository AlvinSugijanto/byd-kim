"use client";

import { useState } from "react";

import { ModelDetailProps } from "@/types/model";
import { motion } from "framer-motion";
import { CardSim, Download, File, Flashlight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GrDocument, GrDocumentLocked } from "react-icons/gr";

export default function ModelDetailView({
  car,
  previousCar,
  nextCar,
}: ModelDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    car.variants && car.variants.length > 0 ? car.variants[0] : null,
  );
  // Download spec card function
  const handleDownloadSpecCard = () => {
    if (!car.specCard) return;

    const link = document.createElement("a");
    link.href = car.specCard;
    link.download = car.specCard.split("/").pop() || "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="min-h-screen pt-[50px] md:pt-[65px] bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section with Car Image */}
        <section className="relative h-[50vh] xs:h-[100vh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={"/byd-atto-1.webp"}
              alt={car.name}
              fill
              className="object-cover scale-100 object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 via-gray-800/10 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 h-full px-6 sm:px-12 md:px-16">
            {/* Car Name Display - Positioned closer to car */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // className="absolute top-12 left-0 right-0 flex flex-col items-center"

              className="absolute top-8 left-4 sm:left-24 lg:left-36"
            >
              {/* "THE" prefix */}
              {/* <p className="text-base sm:text-3xl ml-1.5 text-black font-medium mb-2">
                BYD
              </p> */}

              {/* Car Name - Clean and Bold */}
              <h1 className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight tracking-tight mb-2 font-mono">
                BYD {car.name.replace("BYD ", "")}
              </h1>

              {/* Subtle underline accent */}
              {/* <div className="w-20 h-1 bg-white rounded-full"></div> */}
            </motion.div>

            {/* Action Buttons */}
          </div>
        </section>

        <section className="flex flex-col sm:flex-row justify-between max-w-5xl mx-auto px-4 sm:gap-0 gap-4">
          {car.specCard ? (
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadSpecCard}
              className="bg-gray-800 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg flex items-center gap-2 w-full justify-center cursor-pointer"
            >
              Download Spec Card
            </motion.button>
          ) : (
            <motion.button
              disabled
              className="bg-gray-400 text-white px-6 py-3 font-semibold transition-all duration-300 shadow-lg flex items-center gap-2 w-full justify-center cursor-not-allowed opacity-60"
            >
              Spec Card Not Available
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const phoneNumber = "6285117576041"; // Ganti dengan nomor WA yang sesuai
              const message = `Halo, saya tertarik untuk request test drive untuk *${car.name}*.%0A%0ASaya ingin mendapatkan informasi lebih lanjut mengenai:%0A- Jadwal test drive yang tersedia%0A- Lokasi test drive%0A- Promo dan penawaran terbaru%0A%0ATerima kasih!`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
              window.open(whatsappUrl, "_blank");
            }}
            className="bg-white text-blue-600 px-6 py-3 font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg border-2 border-blue-600 flex items-center gap-2 w-full justify-center cursor-pointer"
          >
            Request Test Drive
          </motion.button>
        </section>

        {car.title && (
          <section className="px-4 py-16 flex flex-col sm:gap-12 gap-8">
            <div className="max-w-2xl mx-auto ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-gray-900 mb-6 text-center">
                  {car.title}
                </h2>
              </motion.div>
            </div>
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-md  md:text-xl text-gray-700 leading-relaxed text-justify">
                  {car.description}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Technical Specifications Section */}
        <section className="py-16 px-4 bg-white">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Technical Specifications
              </h2>
              <div className="w-36 h-1 bg-gray-800 rounded-full mx-auto  mb-24"></div>

              {/* Two Column Layout: Image + Specs */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Left Column: Car Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="col-span-1 lg:col-span-3 relative"
                >
                  <div className="absolute -top-12 sm:left-16 md:left-24 pointer-events-none z-0">
                    <p className="font-light text-[60px] md:text-[80px] lg:text-[120px] text-gray-300 opacity-40 leading-none uppercase tracking-tight">
                      {car.series.split("-").join(" ").replace(" ", "  ")}
                    </p>
                  </div>

                  <Image
                    src={car.path}
                    alt={car.name}
                    width={1000}
                    height={1000}
                    className="object-contain w-full h-auto relative z-10 scale-[80%]"
                  />
                </motion.div>

                {/* Right Column: Specifications Grid */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:gap-y-4 sm:gap-x-12 col-span-1 lg:col-span-2  px-8 sm:px-16 lg:px-0">
                  {car.variants && car.variants.length > 0 && (
                    <div className="col-span-2 flex flex-wrap gap-4 mb-2 lg:mb-4">
                      {car.variants.map((variant, index) => (
                        <VariantCard
                          key={index}
                          variant={variant}
                          isSelected={selectedVariant?.name === variant.name}
                          onClick={() => setSelectedVariant(variant)}
                        />
                      ))}
                    </div>
                  )}
                  <div className="col-span-2 flex flex-wrap gap-4 items-center mb-2 lg:mb-4">
                    {/* <p className="text-lg font-semibold text-gray-500 uppercase tracking-wider">
                        HARGA
                      </p> */}
                    <p className="text-xl md:text-2xl lg:text-4xl font-semibold text-gray-900">
                      Rp{" "}
                      {selectedVariant ? selectedVariant.price : "629.000.000"}
                    </p>
                  </div>
                  {Object.entries(selectedVariant?.content || car.content || {})
                    .filter(([_, value]) => value !== undefined)
                    .map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                              {key}
                            </p>
                            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">
                              {value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Navigation Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Explore More Models
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Previous Car */}
                <Link
                  href={`/model/${previousCar.series}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48">
                    <Image
                      src={previousCar.path}
                      alt={previousCar.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-sm text-blue-500 mb-1 font-semibold">
                        &lt;&lt; Previous
                      </p>
                      <p className="text-xl font-bold text-white">
                        {previousCar.name}
                      </p>
                    </div>
                  </div>
                </Link>

                {/* Next Car */}
                <Link
                  href={`/model/${nextCar.series}`}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                >
                  <div className="relative h-48 font-mono">
                    <Image
                      src={nextCar.path}
                      alt={nextCar.name}
                      fill
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 right-4">
                      <p className="text-sm text-blue-500 mb-1 font-semibold text-right">
                        Next &gt;&gt;
                      </p>
                      <p className="text-xl font-bold text-white">
                        {nextCar.name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interested in {car.name}?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Schedule a test drive and experience the thrill firsthand
              </p>
              <Link href="/#contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
                >
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

function VariantCard({
  variant,
  isSelected,
  onClick,
}: {
  variant: any;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border rounded-lg py-2 px-4 hover:cursor-pointer text-center basis-1 flex-grow shrink-0 min-w-[200px] shadow-sm flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-md ${
        isSelected ? "border-gray-800 ring-1 ring-gray-800" : "border-gray-300"
      }`}
    >
      <h4 className="text-xl font-semibold text-gray-900 leading-tight">
        {variant.name}
      </h4>
      <p className="text-gray-800 text-sm font-medium">({variant.tag})</p>
      <p className="text-slate-500 text-sm">mulai dari Rp{variant.price}</p>
    </div>
  );
}
