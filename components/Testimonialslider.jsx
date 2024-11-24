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
    name: "Nixon Fonkou",
    image: "/assets/testimonials/nixon.jpg",
    position: "CODEES",
    quote:
      "Not only is he 1 of my best friends, he has also been a game changer in our startup. I mostly appreciate his franchise and great communication skills",
  },
  {
    name: "Pony Victor",
    image: "/assets/testimonials/pony.png",
    position: "AJEL - Decode",
    quote:
      "Working with him was very refreshing. His sense of details and his professionalism are outstanding. And I will not even talk avout his skills",
  },
  {
    name: "Tsata Gloria ",
    image: "/assets/testimonials/stephanie.jpg",
    position: "Business owner",
    quote:
      "Despite all the difficulties I had building my business, This young man made it happen.",
  },
  {
    name: "Olivier Kueda",
    image: "/assets/testimonials/olivier.jpg",
    position: "Business owner",
    quote:
      "As a designer and developer, I have worked with many talented people and this guy is one of them.",
  },
  {
    name: "Alexia Hypado",
    image: "/assets/testimonials/alexia.jpg",
    position: "Business owner",
    quote:
      "I never knew the importance of digital support until I met Yann. He is a true expert in his field.",
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
            <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-10 h-full px-16 ">
              <div className="w-full max-w-[300px] flex flex-col justify-center items-center relative mx-auto xl:mx-0 ">
                <div className="flex flex-col justify-center items-center">
                  <div className="mb-2 mx-auto">
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt="client"
                      className="object-cover rounded-full w-24 h-24"
                    />
                  </div>
                  <div className="text-lg font-bold">{item.name}</div>
                  <div className="text-sm text-zinc-400">{item.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] before:xl:h-[200px] before:bg-white/40 xl:before:absolute xl:before:left-0 relative xl:pl-20 bg-zinc-900/30 backdrop-blur-sm py-3">
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
