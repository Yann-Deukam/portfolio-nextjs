"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const clientsTestimonials = [
  {
    name: "John Doe",
    image: "/assets/testimonials/img-1.jpeg",
    position: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.",
  },
  {
    name: "John Doe",
    image: "/assets/testimonials/img-1.jpeg",
    position: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.",
  },
  {
    name: "John Doe",
    image: "/assets/testimonials/img-1.jpeg",
    position: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.",
  },
  {
    name: "John Doe",
    image: "/assets/testimonials/img-1.jpeg",
    position: "CEO",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatum.",
  },
];

export default function TestimonialSlider() {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[480px]"
    >
      {clientsTestimonials.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col justify-center items-center relative mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center items-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="client"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-lg font-bold">{item.name}</div>
                  <div className="text-sm text-zinc-400">{item.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] before:xl:h-[200px] before:bg-white/40 xl:before:absolute xl:before:left-0 relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="h1 text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {item.quote}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
