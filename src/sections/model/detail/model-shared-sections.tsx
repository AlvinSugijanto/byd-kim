"use client";

import { useState } from "react";
import { CarProps } from "@/types/model";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import contactInfo from "@/lib/contactInfo";

interface ModelSharedSectionsProps {
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

export default function ModelSharedSections({
  car,
  previousCar,
  nextCar,
}: ModelSharedSectionsProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    car.variants && car.variants.length > 0 ? car.variants[0] : null,
  );

  return (
    <>
      {/* Technical Specifications Section */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Spesifikasi Kendaraan
            </h2>
            <div className="w-36 h-1 bg-gray-800 rounded-full mx-auto mb-24"></div>

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
                  width={1200}
                  height={700}
                  className="object-contain w-full h-auto relative z-10 scale-75"
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

      {/* CTA Section */}
      <section className="py-36 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tertarik dengan {car.name}?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Jadwalkan test drive dan rasakan sensasinya secara langsung
            </p>
            <Link
              href={`${contactInfo.waLink}?text=${encodeURIComponent(
                "Halo, saya tertarik dengan " +
                  car.name +
                  "\n\n" +
                  "Saya ingin test drive",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
              >
                Hubungi Kami
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 px-4 ">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Jelajah Model Lain
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
                    <p className="text-sm text-gray-500 mb-1 font-semibold">
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
                    <p className="text-sm text-gray-500 mb-1 font-semibold text-right">
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
