"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Transition2 from "./Transition2";

export default function VeilTransition({ children }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="h-full">
        <Transition2 />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
