"use client";

import { ModelDetailProps } from "@/types/model";
import { motion } from "framer-motion";
import Image from "next/image";
import contactInfo from "@/lib/contactInfo";
import ModelSharedSections from "./model-shared-sections";

export default function M6DetailView({
  car,
  previousCar,
  nextCar,
}: ModelDetailProps) {
  const carNameClean = car.name.replace("BYD ", "");

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
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Hero Section */}
        <section className="relative h-[100vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={car.path}
              alt={car.name}
              fill
              className="object-contain bg-gray-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800/10 via-gray-800/10 to-transparent" />
          </div>

          <div className="relative z-10 h-full flex justify-center px-6 sm:px-12 md:px-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-24 left-4 sm:left-24 lg:left-36"
            >
              <p className="text-base sm:text-4xl ml-1.5 tracking-[0.4em] text-white font-semibold uppercase mb-2">
                BYD
              </p>
              <h1 className="text-2xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-8xl font-bold text-white leading-tight tracking-tight mb-2 font-mono">
                {carNameClean}
              </h1>
            </motion.div>

            {/* Action Buttons */}
            <section className="absolute bottom-10 flex flex-col sm:flex-row justify-center w-fit px-0 gap-0 backdrop-blur-sm bg-black/15 rounded-lg overflow-hidden">
              {car.specCard ? (
                <motion.button
                  whileHover={{ scale: 1.0 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadSpecCard}
                  className="bg-white hover:bg-white/80 text-gray-800 px-24 py-4 font-semibold transition-all duration-300 flex items-center rounded-l-lg gap-2 justify-center cursor-pointer whitespace-nowrap shrink-0 border border-white/60"
                >
                  Download Spec Card
                </motion.button>
              ) : (
                <motion.button
                  disabled
                  className="bg-white/5 text-white/50 px-24 py-4 font-semibold transition-all duration-300 flex items-center gap-2 justify-center rounded-l-lg cursor-not-allowed whitespace-nowrap shrink-0 border-r border-white/20"
                >
                  Spec Card Not Available
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const message = `Halo, saya tertarik untuk request test drive untuk *${car.name}*.%0A%0ASaya ingin mendapatkan informasi lebih lanjut mengenai:%0A- Jadwal test drive yang tersedia%0A- Lokasi test drive%0A- Promo dan penawaran terbaru%0A%0ATerima kasih!`;
                  const whatsappUrl = `${contactInfo.waLink}?text=${message}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="bg-transparent hover:bg-white/15 text-white px-24 py-4 font-semibold transition-all duration-300 flex items-center gap-2 justify-center rounded-r-lg cursor-pointer whitespace-nowrap shrink-0 border border-white/60"
              >
                Request Test Drive
              </motion.button>
            </section>
          </div>
        </section>

        {/* Title Section */}
        {car.title && (
          <section className="relative h-[100vh] px-4 py-16 flex flex-col sm:gap-12 gap-8 overflow-hidden items-center justify-center">
            <div className="relative z-10 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 text-center">
                  {car.title}
                </h2>
              </motion.div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-md md:text-xl text-gray-800 leading-relaxed text-justify">
                  {car.description}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        <ModelSharedSections car={car} previousCar={previousCar} nextCar={nextCar} />
      </main>
    </>
  );
}
