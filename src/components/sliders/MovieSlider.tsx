"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { register } from "swiper/element/bundle";

import MovieCard from "@/components/cards/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import SliderArrows from "./_components/SliderArrows";

register();

export type SwiperUseRef = SwiperRef;

type Props = {
  contentData: MovieAndTVShowType[];
};

const MovieSlider = ({ contentData }: Props) => {
  const sliderRef = useRef<SwiperUseRef>(null);

  return (
    <div className="relative ">
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        spaceBetween={20}
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
        {contentData.map((movie) => (
          <SwiperSlide key={movie.id} className="">
            <MovieCard data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderArrows sliderRef={sliderRef} />
    </div>
  );
};

export default MovieSlider;
