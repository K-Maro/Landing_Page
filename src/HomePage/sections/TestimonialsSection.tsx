import { useEffect, useState } from "react";
import { testimonials } from "../../data/testimonials";
import { motion } from "framer-motion";
import { slideInFromLeft } from "../../animations/motionVariants";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const duration = 10000;
  
  useEffect(() => {
    const iv = setInterval(() => setActiveIndex((n) => (n + 1) % testimonials.length), duration);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="w-full py-8 px-6 lg:px-20 bg-gradient-to-b from-white to-[#f5f0ff] text-center">
      <motion.h2 className="text-3xl font-bold text-gray-900 mb-4" variants={slideInFromLeft} initial="hidden" animate="visible" custom={0}>
        Testimonials
      </motion.h2>

      <motion.p
        className="text-gray-500 text-base max-w-xl mx-auto mb-12"
        variants={slideInFromLeft}
        initial="hidden"
        animate="visible"
        custom={0.3}
      >
        See what our property managers, landlords, and tenants have to say
      </motion.p>

      <blockquote className="text-xl text-gray-900 font-medium leading-relaxed max-w-3xl mx-auto mb-8 transition-opacity duration-500 ease-in-out">
        “{testimonials[activeIndex].quote}”
      </blockquote>

      <p className="text-sm text-gray-900 font-semibold">
        {testimonials[activeIndex].name}
        <span className="text-gray-500 font-normal">, {testimonials[activeIndex].role}</span>
      </p>

      <div className="flex justify-center gap-6 mt-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="relative w-20 h-20 flex items-center justify-center">
            {idx === activeIndex && (
              <svg key={activeIndex} className="absolute w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" strokeWidth="4" stroke="#E5E7EB" fill="none" />

                <circle
                  cx="40"
                  cy="40"
                  r="36"
                  strokeWidth="4"
                  stroke="#7C3AED"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 36}
                  strokeDashoffset={2 * Math.PI * 36}
                  style={{
                    animation: `progress ${duration}ms linear forwards`,
                  }}
                />
              </svg>
            )}

            <img
              src={t.avatar}
              alt={t.name}
              className="relative z-10 w-16 h-16 rounded-full ring-2 ring-transparent hover:ring-secondary-100"
            />
          </div>
        ))}
      </div>

      <style>{`
          @keyframes progress {
            to { stroke-dashoffset: 0; }
          }
        `}</style>
    </section>
  );
};

export default TestimonialsSection;
