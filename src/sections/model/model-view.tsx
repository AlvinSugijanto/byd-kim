"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, Tag } from "lucide-react";
import { carList } from "@/lib/carList";

const ModelView = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Group cars by series category
  const groupedCars = {
    "ATTO Series": carList.filter((car) => car.series.includes("atto")),
    "DOLPHIN Series": carList.filter((car) => car.series === "dolphin"),
    "SEAL Series": carList.filter((car) => car.series.includes("seal")),
    "M6 Series": carList.filter((car) => car.series === "m6"),
    DENZA: carList.filter((car) => car.series === "denza"),
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/our-models.png"
            alt="BYD Models"
            fill
            className="object-cover [object-position:50%_80%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-start justify-evenly text-start px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 sm:mb-40 px-8 sm:px-16"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight">
              Model
            </h1>
            <p className="text-md sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Temukan masa depan mobilitas listrik bersama lineup inovatif BYD
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Section - Grouped by Series */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-20">
          {Object.entries(groupedCars).map(
            ([seriesName, cars], seriesIndex) => {
              // Skip empty series
              if (cars.length === 0) return null;

              return (
                <motion.div
                  key={seriesName}
                  // initial={{ opacity: 0, y: 30 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true }}
                  // transition={{ duration: 0.6, delay: seriesIndex * 0.05 }}
                >
                  {/* Series Heading */}
                  <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                      {seriesName}
                    </h2>
                    <div className="w-24 h-1 bg-gray-700 rounded-full"></div>
                  </div>

                  {/* Car Grid for this Series */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cars.map((car, index) => (
                      <motion.div
                        key={car.series}
                        // initial={{ opacity: 0, scale: 0.9 }}
                        // whileInView={{ opacity: 1, scale: 1 }}
                        // viewport={{ once: true }}
                        // transition={{ duration: 0.4, delay: index * 0.05 }}
                        onHoverStart={() =>
                          setHoveredCard(seriesIndex * 100 + index)
                        }
                        onHoverEnd={() => setHoveredCard(null)}
                        className="group relative bg-white rounded-xl border overflow-hidden shadow-xl hover:shadow-2xl hover:cursor-pointer transition-shadow duration-300"
                      >
                        {/* Card Content */}
                        <div className="relative h-80 overflow-hidden bg-white">
                          {/* Car Image */}
                          <Image
                            src={car.path}
                            alt={car.name}
                            fill
                            // className="object-contain p-2"
                            className="object-contain p-2 scale-[.65]"
                          />

                          {/* Bottom Gradient Overlay - Always visible */}
                          {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white pointer-events-none" /> */}

                          {/* Tags/Badges - Top left corner */}
                          {/* {(car.type || car.tag) && (
                            <div className="absolute top-4 left-4 z-10 flex gap-2">
                              {car.type && (
                                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-xl border border-white/20">
                                  <Zap className="w-3 h-3 fill-current" />
                                  {car.type}
                                </span>
                              )}
                              {car.tag && (
                                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider shadow-xl border border-white/20">
                                  <Tag className="w-3 h-3 fill-current" />
                                  {car.tag}
                                </span>
                              )}
                            </div>
                          )} */}

                          {/* Car Name - Always visible at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <h3 className="text-3xl font-normal text-gray-600 drop-shadow-lg font-mono">
                              {car.name}
                            </h3>
                          </div>

                          {/* Hover Overlay with Button */}
                          <Link href={`/model/${car.series}`}>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{
                                opacity:
                                  hoveredCard === seriesIndex * 100 + index
                                    ? 1
                                    : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 bg-black/40 flex items-center justify-center z-20"
                            >
                              <motion.button
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                  y:
                                    hoveredCard === seriesIndex * 100 + index
                                      ? 0
                                      : 20,
                                  opacity:
                                    hoveredCard === seriesIndex * 100 + index
                                      ? 1
                                      : 0,
                                }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="bg-white hover:bg-blue-600 text-gray-900 hover:text-white px-8 py-3 rounded-lg font-semibold text-sm shadow-xl"
                              >
                                View Detail
                              </motion.button>
                            </motion.div>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            },
          )}
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience BYD?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a test drive and discover the future of driving
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
      </section> */}
    </main>
  );
};

export default ModelView;
