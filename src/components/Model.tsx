"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Model() {
  return (
    <section className="bg-white overflow-hidden">
      {/* Carousel Section - Total */}
      <CarouselSection />
    </section>
  );
}

// Carousel Component using Swiper
function CarouselSection() {
  // Array of carousel images with text content
  const carouselImages = [
    {
      src: "/car-list/byd-atto3.webp",
      alt: "BYD Atto 3",
      title: "BYD Atto 3",
      description: "Mobil listrik BMW M paling bertenaga",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/i7-sedan",
    },
    {
      src: "/car-list/byd-atto1.webp",
      alt: "BYD Atto 1",
      title: "BYD Atto 1",
      description: "Mobil listrik BMW M paling bertenaga",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m4-coupe",
    },

    {
      src: "/car-list/byd-dolphin.webp",
      alt: "BYD Dolphin",
      title: "BYD Dolphin",
      description: "Desain Eksklusif.",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m3-touring",
    },
    {
      src: "/car-list/byd-m6.webp",
      alt: "BYD M6",
      title: "BYD M6",
      description: "Mobil listrik BMW M paling bertenaga",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m2-coupe",
    },
    {
      src: "/car-list/byd-seal.webp",
      alt: "BYD SEAL",
      title: "BYD SEAL",
      description: "Mobil listrik BMW M paling bertenaga",
      showText: true,
      position: {
        title: { x: 0, y: 25 },
        description: { x: 0, y: 35 },
        button: { x: 0, y: 45 },
      },
      href: "/model/m2-coupe",
    },
  ];

  // --- Heading Style Toggle State ---
  const [headingStyle, setHeadingStyle] = useState<
    "default" | "elegant" | "hitech"
  >("hitech");

  return (
    <div className="w-full mb-10 relative">
      {/* Dev UI Toggle (Temporary, remove before production) */}
      {/* <div className="absolute top-0 right-4 flex gap-2 z-50 text-xs text-gray-900 border border-gray-100 rounded-md p-2 bg-white/50 backdrop-blur-sm">
        <span className="self-center font-semibold mr-2">Style:</span>
        <button
          onClick={() => setHeadingStyle("default")}
          className={`px-3 py-1 rounded border transition-colors ${headingStyle === "default" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
        >
          Default
        </button>
        <button
          onClick={() => setHeadingStyle("elegant")}
          className={`px-3 py-1 rounded border transition-colors ${headingStyle === "elegant" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
        >
          Elegant
        </button>
        <button
          onClick={() => setHeadingStyle("hitech")}
          className={`px-3 py-1 rounded border transition-colors ${headingStyle === "hitech" ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"}`}
        >
          Hi-Tech
        </button>
      </div> */}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`text-center transition-all duration-300 ${headingStyle === "hitech" ? "sm:my-20 my-12" : headingStyle === "elegant" ? "sm:m-20 my-10 flex flex-col items-center" : "sm:my-16 my-10"}`}
      >
        {headingStyle === "default" && (
          <h2 className="text-3xl md:text-4xl font-medium">
            JELAJAHI MODEL KAMI
          </h2>
        )}

        {headingStyle === "elegant" && (
          <>
            <span className="text-car-blue font-semibold tracking-widest text-xs md:text-sm uppercase mb-3">
              Jajaran Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] text-gray-900 uppercase">
              Jelajahi Model Kami
            </h2>
            <div className="w-16 h-[2px] bg-gray-200 mt-6"></div>
          </>
        )}

        {headingStyle === "hitech" && (
          <>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 uppercase tracking-wider">
              Jelajahi Model Kami
            </h2>
            <p className="mt-4 text-gray-500 font-light text-sm md:text-base max-w-xl mx-auto px-4">
              Rasakan perpaduan sempurna antara performa, kemewahan, dan inovasi listrik.
            </p>
          </>
        )}
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            enabled: true,
          }}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: {
              navigation: {
                enabled: false,
              },
            },
            768: {
              navigation: {
                enabled: true,
              },
            },
          }}
          className="w-full aspect-[16/16] h-full sm:h-[670px]"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-10" />

                {/* Text Overlay */}
                {image.showText && (
                  <div className="absolute inset-0 z-20">
                    <div className="w-full h-full px-8 md:px-16">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full h-full max-w-7xl mx-auto relative"
                      >
                        {/* Title */}
                        <motion.h3
                          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tighter absolute"
                          style={{
                            left: `${image.position.title.x}%`,
                            top: `${image.position.title.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          {image.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          className="text-lg md:text-xl lg:text-2xl text-white/90 font-light tracking-wide max-w-2xl absolute sm:mt-0 mt-4"
                          style={{
                            left: `${image.position.description.x}%`,
                            top: `${image.position.description.y}%`,
                            transform: "translate(0, -50%)",
                          }}
                        >
                          {image.description}
                        </motion.p>

                        {/* Button */}
                        <Link href={`${image.href}`}>
                          <motion.div
                            className="absolute sm:mt-0 mt-8"
                            style={{
                              left: `${image.position.button.x}%`,
                              top: `${image.position.button.y}%`,
                              transform: "translate(0, -50%)",
                            }}
                          >
                            <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 font-semibold text-sm md:text-base transition-all rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 tracking-wide uppercase">
                              Jelajahi Sekarang
                            </button>
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
}
