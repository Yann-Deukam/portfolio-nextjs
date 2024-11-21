"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="w-[288px] h-[288px] xl:w-[450px] xl:h-[450px] mix-blend-lighten home_img order-1 justify-self-center ">
          <Image
            src="/assets/profile.jpg"
            className="object-cover home_img"
            alt="profile"
            priority
            quality={100}
            fill
          />
        </div>
      </motion.div>
    </div>
  );
}
