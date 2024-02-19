"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import ProfileCard from "../cards/ProfileCard";
import { CastType } from "@/types/cast.types";

register();

export type SwiperUseRef = SwiperRef;

type Props = {
  contentData: CastType[];
};

const CastSlider = ({ contentData }: Props) => {
  const sliderRef = useRef<SwiperUseRef>(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  return (
    <div className="relative flex items-center">
      <IoIosArrowBack
        className="h-14  w-11 flex-shrink-0  -translate-y-3/4 cursor-pointer text-cyan-500 max-2xsm:w-9 "
        onClick={handlePrev}
      />
      <Swiper
        ref={sliderRef}
        slidesPerView={"auto"}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          550: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {contentData.map((actor) => (
          <SwiperSlide key={actor.id}>
            <ProfileCard
              name={actor.name}
              character={actor.character}
              profile_path={actor.profile_path}
              id={actor.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <IoIosArrowForward
        className=" h-14 w-11 flex-shrink-0 -translate-y-3/4  cursor-pointer text-cyan-500 max-2xsm:w-9  "
        onClick={handleNext}
      />


    </div>
  );
};

export default CastSlider;
