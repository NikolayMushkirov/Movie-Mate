"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";

import SliderArrows from "./_components/SliderArrows";
import ProfileCard from "../cards/ProfileCard";
import { CastType } from "@/types/cast.types";

register();

export type SwiperUseRef = SwiperRef;

type Props = {
  contentData: CastType[];
};

const CastSlider = ({ contentData }: Props) => {
  const sliderRef = useRef<SwiperUseRef>(null);

  return (
    <div className="relative">
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        autoHeight
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
      <SliderArrows sliderRef={sliderRef} />
    </div>
  );
};

export default CastSlider;
