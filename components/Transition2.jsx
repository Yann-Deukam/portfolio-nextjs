"use client";

import { motion } from "framer-motion";

const TransitionVariants = {
  initial: { x: "100%", width: "100%" },
  animate: { x: "0%", width: "0%" },
  exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
};

export default function Transition2() {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-30 bg-black"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-20 bg-teal-900"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen z-10 bg-black"
        variants={TransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
      ></motion.div>
    </>
  );
}
