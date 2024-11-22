"use client";
import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web development",
    description:
      "I build high performance web applications with intuitive user interfaces and a seamless user experience",
    href: "/",
  },
  {
    num: "02",
    title: "Graphic Design",
    description:
      "Brand identity, flyers, logo, illustrations, brochures and more. I provide a wide range of services in graphic design for both physical and digital supports",
    href: "/",
  },
  {
    num: "03",
    title: "Product design",
    description:
      "For an application to blow your mind, it must be simple and easy to use. I provide a modern approach in understanding and realizing your vision",

    href: "/",
  },
  {
    num: "04",
    title: "Search Engine Optimization",
    description:
      "What is the use of creating a website if it is not visible on the internet? I provide you with the best SEO solutions to make your website stand out",
    href: "/",
  },
];

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-6">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 1,
          ease: "easeIn",
        }}
        className="grid grid-cols-1 gap-[68px] md:grid-cols-2"
      >
        {services.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group bg-zinc-900/30 backdrop-blur-sm"
            >
              <div className="flex w-full justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-300">
                  {item.num}
                </div>
                <Link
                  href={item.href}
                  className="group-hover:text-teal-500 group-hover:-rotate-45 transition-all duration-300"
                >
                  <span>
                    <MoveDownRight />
                  </span>
                </Link>
              </div>
              <div className="p-3">
                <h2 className="text-4xl font-bold leading-none group-hover:text-teal-500 transition-all duration-300 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-300">{item.description}</p>
              </div>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
