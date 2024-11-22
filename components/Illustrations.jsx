"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const illustrations = [
  {
    title: "Illustration 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/assets/projects/img-1.jpeg",
  },
  {
    title: "Illustration 2",
    description: "Iste, explicabo accusantium! Perferendis, corporis enim?",
    image: "/assets/projects/img-1.jpeg",
  },
  {
    title: "Illustration 3",
    description: "Recusandae quae rerum explicabo.",
    image: "/assets/projects/img-1.jpeg",
  },
  {
    title: "Illustration 4",
    description: "Deserunt molestias deserunt explicabo.",
    image: "/assets/projects/img-1.jpeg",
  },
];

export default function Illustrations() {
  return (
    <>
      <div className="flex flex-row justify-left items-center gap-x-5 translate-y-16">
        <h2 className="text-zinc-400 py-5">Scroll to see more</h2>
        <span className="size-2 rounded-full bg-teal-400"></span>
        <h2 className="text-zinc-400 py-5">Click to know more</h2>
      </div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex flex-col justify-center py-5 xl:px-0 text-gray-50"
      >
        <div className="container mx-auto">
          <ScrollArea className="h-[500px]">
            <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {illustrations.map((item, index) => (
                <li key={index} className="relative group overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-[full] hover:cursor-pointer"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-100 group-hover:opacity-70 transition-all duration-300 hover:cursor-pointer"></div>
                  {/* Title and Description */}
                  <div className="absolute bottom-4 left-4 text-white z-10">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </motion.section>
    </>
  );
}
