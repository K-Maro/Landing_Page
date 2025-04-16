import React from "react";
import HeroSection from "./sections/HeroSection";
import BrowseSection from "./sections/BrowseSection";
import TestimonialsSection from "./sections/TestimonialsSection";


const HomePage: React.FC = () => (
  <div className="space-y-16">
    <HeroSection />
    <BrowseSection />
    <TestimonialsSection/>
  </div>
);

export default HomePage;
