"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { register } from "swiper/element/bundle";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import MovieCard from "@/components/cards/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

register();

export type SwiperUseRef = SwiperRef;

type Props = {
  contentData: MovieAndTVShowType[];
};

const MovieSlider = ({ contentData }: Props) => {
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
    <div className="relative ">
      <Swiper
        ref={sliderRef}
        slidesPerView={5}
        spaceBetween={20}
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
          <SwiperSlide key={movie.id}>
            <MovieCard data={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
      <IoIosArrowBack
        className="absolute -left-16 top-[28%] h-14  w-20 cursor-pointer text-cyan-500  max-xsm:h-12"
        onClick={handlePrev}
      />
      <IoIosArrowForward
        className="absolute -right-16 top-[28%] h-14 w-20 cursor-pointer text-cyan-500  max-xsm:h-12"
        onClick={handleNext}
      />
    </div>
  );
};

export default MovieSlider;
