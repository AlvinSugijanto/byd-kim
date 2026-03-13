"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { FontControls, useFontControls } from "font-controls";
// import "font-controls/style.css";

export default function HeroMain() {
  // const { config, setConfig } = useFontControls();
  const [headingStyle, setHeadingStyle] = useState<
    "default" | "neon" | "metallic" | "minimal" | "gold"
  >("minimal");

  const getHeadingClasses = () => {
    const base =
      "text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] mb-6 tracking-tighter";
    switch (headingStyle) {
      case "neon":
        return `${base} font-black text-white`;
      case "metallic":
        return `${base} font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600`;
      case "minimal":
        return `${base} font-normal -skew-x-12 text-white tracking-[0.2em] uppercase`;
      case "gold":
        return `${base} font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600`;
      case "default":
      default:
        return `${base} font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-50 to-gray-400`;
    }
  };

  const getHeadingStyleObj = () => {
    switch (headingStyle) {
      case "neon":
        return { textShadow: "0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff" };
      case "metallic":
        return { filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.8))" };
      case "minimal":
        return { textShadow: "none" };
      case "gold":
        return { filter: "drop-shadow(0px 5px 10px rgba(0,0,0,0.5))" };
      case "default":
      default:
        return { filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))" };
    }
  };

  return (
    <>
      <section className="relative h-screen w-full overflow-hidden" id="home">
        {/* Style Selection Toggle (Temporary) */}
        {/* <div className="absolute top-24 left-1/2 transform -translate-x-1/2 flex gap-2 z-50 text-xs text-gray-900 border border-gray-100/20 rounded-md p-2 bg-white/10 backdrop-blur-md">
          <span className="self-center font-semibold text-white mr-2">
            Style:
          </span>
          {["default", "neon", "metallic", "minimal", "gold"].map((style) => (
            <button
              key={style}
              onClick={() => setHeadingStyle(style as any)}
              className={`px-3 py-1.5 rounded-md transition-all uppercase tracking-wider text-[10px] font-bold ${
                headingStyle === style
                  ? "bg-white text-black"
                  : "bg-black/30 text-white hover:bg-black/50"
              }`}
            >
              {style}
            </button>
          ))}
        </div> */}

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero2.jpg"
            alt="BYD Hero"
            fill
            className="object-cover sm:object-top scale-[100%]"
            priority
          />
          {/* Dark Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/5" /> */}
        </div>

        {/* Content */}
        {!false && (
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="container mx-auto px-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-8 top-1/4 text-left"
              >
                {/* Main Heading */}
                <h1
                  className={getHeadingClasses()}
                  style={getHeadingStyleObj()}
                >
                  BUILD YOUR DREAMS
                </h1>

                {/* Subheading */}
                <p className="text-xl md:text-2xl text-gray-100 mb-6 ">
                  Memberdayakan dunia dengan inovasi listrik yang bersih.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={"/model"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-xl hover:shadow-2xl"
                    >
                      Jelajahi Model
                    </motion.button>
                  </Link>
                  <Link href={"/#request-demo"}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all"
                    >
                      Pesan Test Drive
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white text-center"
          >
            <p className="text-sm mb-2 opacity-80">Gulir untuk menjelajahi</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      {/* <FontControls value={config} onChange={setConfig} /> */}
    </>
  );
}
