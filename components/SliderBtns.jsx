"use client";

import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderBtns({ containerStyles, btnStyles, iconStyles }) {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles}>
        <ChevronLeft
          className={iconStyles}
          onClick={() => swiper.slidePrev()}
        />
      </button>
      <button className={btnStyles}>
        <ChevronRight
          className={iconStyles}
          onClick={() => swiper.slideNext()}
        />
      </button>
    </div>
  );
}
