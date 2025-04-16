import React from "react";
import HeroSection from "./sections/HeroSection";
import BrowseSection from "./sections/BrowseSection";


const HomePage: React.FC = () => (
  <div className="space-y-16">
    <HeroSection />
    <BrowseSection />
  </div>
);

export default HomePage;
