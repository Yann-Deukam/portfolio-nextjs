"use client";

import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: [
      "I produce high performance and efficient digital products with a seemless user exoerience",
      "You can choose the sequel that best aligns with your specific goals and the unique qualities of your digital products.",
      "Committed to innovation and excellence in every aspect of the digital product lifecycle.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 20,
  });
  return (
    <motion.section
      className="h-full mt-10"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 1, ease: "easeIn" },
      }}
    >
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* TEXT*/}
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">
            Hi, My name is <br />
            <span className="text-teal-500">Yann Donald</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-zinc-300">
            <span>{text}</span>
            <span className="text-teal-300">
              <Cursor cursorStyle="_" />
            </span>
          </p>

          {/* DOWNLOAD CV */}
          <div className="flex flex-col gap-8 xl:flex-row items-center">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              <span>Download CV</span>
              <ArrowDownToLine />
            </Button>

            {/* SOCIALS */}
            <div className="mb-8 xl:mb-0">
              <Socials
                containerStyles="flex gap-6"
                iconStyles=" hover:text-teal-500 transition-all duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* PHOTO*/}
        <div>
          <Photo />
        </div>
      </div>
      <Stats />
    </motion.section>
  );
}
