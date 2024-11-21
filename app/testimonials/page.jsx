"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TestimonialsSlider = dynamic(
  () => import("@/components/TestimonialSlider"),
  {
    ssr: false,
  }
);

export default function Testimonials() {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 1,
        ease: "easeIn",
      }}
    >
      <div className="h-full py-20 text-center">
        <div className="h-full flex flex-col justify-center">
          <h2 className="h2 mb-0 xl:mb-0">
            What clients <span className="text-teal-400"> Say</span>
          </h2>
          <div className="w-full">
            <TestimonialsSlider />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
