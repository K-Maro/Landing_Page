import React, { useState } from "react";
import Tabs, { TabOption } from "../../components/Tab";
import Card from "../../components/Card";
import { Property, sampleApartments, sampleHouses } from "../../data/properties";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../animations/motionVariants";

const BrowseSection: React.FC = () => {
  const [selected, setSelected] = useState<TabOption>("Houses");
  const list: Property[] = selected === "Houses" ? sampleHouses : sampleApartments;

  return (
    <section className="space-y-8 px-6 lg:px-20">
      <div className="flex flex-col items-center space-y-4 gap-3">
        <Tabs selected={selected} onSelect={setSelected} />

        <div className="max-w-2xl text-center space-y-2">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            We make it easy for houses and apartments.
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-gray-500"
            variants={slideInFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            Whether it’s selling your current home, getting financing, or buying a new home, we make it easy and efficient. The best part?
            You’ll save a bunch of money and time with our services.
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((prop) => (
          <Card
            key={prop.id}
            image={prop.image}
            title={prop.title}
            location={prop.location}
            price={prop.price}
            label={prop.label}
            hideIcons
          />
        ))}
      </div>
    </section>
  );
};

export default BrowseSection;
