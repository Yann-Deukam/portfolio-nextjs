"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { Github, MoveUpRight } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import "swiper/swiper-bundle.css";
import { useState } from "react";
import SliderBtns from "@/components/SliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "project-1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "React" }, { name: "Tailwind" }],
    image: "/assets/projects/img-1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "project-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "NextJS" }, { name: "Tailwind" }, { name: "MongoDB" }],
    image: "/assets/projects/img-1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "project-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "NextJS" }, { name: "Tailwind" }],
    image: "/assets/projects/img-1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "project-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "React" }, { name: "Tailwind" }],
    image: "/assets/projects/img-1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "project-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "NextJS" }, { name: "Tailwind" }, { name: "MongoDB" }],
    image: "/assets/projects/img-1.jpeg",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Frontend",
    title: "project-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    stack: [{ name: "NextJS" }, { name: "Tailwind" }],
    image: "/assets/projects/img-1.jpeg",
    live: "/",
    github: "",
  },
];

export default function Projects() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setProject(projects[index]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 text-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-8 h-[50%] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-5xl font-bold leading-none group-hover:text-teal-500 transition-all duration-300">
                {project.category} project
              </h2>
              <p className="text-zinc-500">{project.description} </p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-teal-400">
                      {item.name}
                    </li>
                  );
                })}{" "}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-sm bg-zinc-700 flex justify-center items-center group">
                        <span className="text-white text-3xl group-hover:text-indigo-500">
                          <MoveUpRight />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{project.title} </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-sm bg-zinc-700 flex justify-center items-center group">
                        <span className="text-white text-3xl group-hover:text-indigo-500">
                          <Github />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="h-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-zinc-700 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-indigo-400 hover:bg-indigo-500 text-zinc-800 text-xl w-10 h-10 flex justify-center items-center transition-all duration-100"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
