"use client";
import { motion } from "framer-motion";
import { MoveDownRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "web development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos voluptatibus, voluptate ut facilis illum molestias deserunt recusandae quae rerum?",
    href: "/",
  },
  {
    num: "02",
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos voluptatibus, voluptate ut facilis illum molestias deserunt recusandae quae rerum?",
    href: "/",
  },
  {
    num: "03",
    title: "Product design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos voluptatibus, voluptate ut facilis illum molestias deserunt recusandae quae rerum?",

    href: "/",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quos voluptatibus, voluptate ut facilis illum molestias deserunt recusandae quae rerum?",
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
                <h2 className="text-4xl font-bold leading-none group-hover:text-teal-500 transition-all duration-300">
                  {item.title}
                </h2>
                <p className="text-sm text-zinc-400">{item.description}</p>
              </div>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
