import type { Variants } from "framer-motion";

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: "linear",
    },
  }),
};
