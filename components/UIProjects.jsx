import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import { Dribbble } from "lucide-react";

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

const uiprojects = [
  {
    num: "01",
    title: "uiproject-1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
  {
    num: "02",
    title: "ui-2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
  {
    num: "03",
    title: "ui-3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
  {
    num: "04",
    title: "ui-4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
  {
    num: "05",
    title: "ui-5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
  {
    num: "06",
    title: "ui-6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, explicabo accusantium! Perferendis, corporis enim? Recusandae!",
    image: "/assets/ui/img-1.jpeg",
    dribbble: "",
  },
];

export default function UIProjects() {
  const [ui, setUi] = useState(uiprojects[0]);

  const handleSlideChange = (swiper) => {
    const index = swiper.activeIndex;
    setUi(uiprojects[index]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 text-gray-50"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-8">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-1 xl:order-none ">
            <div className="flex flex-col gap-8 h-[50%] ">
              <div className="text-8xl leading-none  ">
                <span className="text-transparent text-outline font-extrabold">
                  {ui.num}
                </span>
                <span className="text-4xl text-zinc-200">
                  /{uiprojects.length}{" "}
                </span>
              </div>
              <h2 className="text-5xl font-bold leading-none group-hover:text-teal-500 transition-all duration-300">
                {ui.title}
              </h2>
              <p className="text-zinc-200">{ui.description} </p>

              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* <Link href={ui.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-sm bg-zinc-900/30 backdrop-blur-sm flex justify-center items-center group">
                        <span className="text-white text-3xl group-hover:text-teal-500">
                          <MoveUpRight />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{ui.title} </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}

                <Link href={ui.dribbble}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-sm bg-zinc-900/30 backdrop-blur-sm flex justify-center items-center group">
                        <span className="text-white text-3xl group-hover:text-teal-500">
                          <Dribbble />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Instagram Post</p>
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
              {uiprojects.map((ui, index) => {
                return (
                  <SwiperSlide key={index} className="h-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-zinc-700 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={ui.image}
                          fill
                          className="object-cover"
                          alt={ui.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-teal-400 hover:bg-teal-500 text-zinc-800 text-xl w-10 h-10 flex justify-center items-center transition-all duration-100"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
