import React from "react";
import Card from "../../../components/Card";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../../animations/motionVariants";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
      <div className="w-full lg:w-1/2 px-6 lg:px-20 space-y-6 text-center lg:text-left">
        <motion.h1
          className="text-4xl lg:text-6xl font-bold text-black leading-snug"
          variants={slideInFromLeft}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          Buy, rent, or sell
          <br />
          your property easily
        </motion.h1>

        <motion.p className="text-2xl text-gray-700" variants={slideInFromLeft} initial="hidden" animate="visible" custom={0.3}>
          A great platform to buy, sell, or even rent your properties without any commissions.
        </motion.p>

        <div className="flex justify-center lg:justify-start gap-6 lg:gap-12 pt-2">
          <div>
            <p className="text-3xl font-bold text-secondary-300">50k+</p>
            <span className="text-sm text-gray-500">renters</span>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary-300">10k+</p>
            <span className="text-sm text-gray-500">properties</span>
          </div>
        </div>
      </div>

      <div className="relative lg:w-1/2 px-9 lg:px-0">
        <img src="/map.png" loading="lazy" alt="Map background" className="w-full h-auto object-cover" style={{ aspectRatio: "16 / 9" }} />

        <div className="absolute top-1/2 left-3 lg:left-0 transform lg:-translate-x-1/5 -translate-y-1/2">
          <Card image="/house-image-2.jpg" title="Beverly Springfield" location="2821 Lake Sevilla, Palm Harbor, TX" price={2700} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
