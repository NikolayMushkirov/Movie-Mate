"use client";
import { useRef, useCallback } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import { register } from "swiper/element/bundle";
register();

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import MovieCard from "@/components/cards/MovieCard";
import ProfileCard from "./cards/ProfileCard";

import { CastType } from "@/types/cast.types";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

import "swiper/css";
import "swiper/css/navigation";

type DataType = MovieAndTVShowType[] | CastType[];
type ContentNameType = "movie" | "cast";

type Props = {
  contentData: DataType;
  contentName: ContentNameType;
  slidesPerView?: number;
};

const checkContentType = (
  data: DataType,
  contentName: ContentNameType
): data is MovieAndTVShowType[] => {
  if (contentName === "movie") {
    return true;
  }
  return false;
};

const Carousel = ({ contentData, contentName, slidesPerView = 5 }: Props) => {
  const sliderRef = useRef<SwiperRef>(null) ;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  if (checkContentType(contentData, contentName)) {
    return (
      <div className="relative ">
        <Swiper
          ref={sliderRef}
          slidesPerView={slidesPerView}
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
            <SwiperSlide key={movie.id} className = "">
              <MovieCard data={movie} />
            </SwiperSlide>
          ))}
        </Swiper>

        <IoIosArrowBack
          className="absolute w-20 h-14  top-[28%] -left-16 text-cyan-500 cursor-pointer"
          onClick={handlePrev}
        />
        <IoIosArrowForward
          className="absolute w-20 h-14 top-[28%] -right-16 text-cyan-500 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    );
  } else if (contentName === "cast") {
    return (
      <div className="relative">
        <Swiper
        ref={sliderRef}
          slidesPerView={5}
          spaceBetween={25}
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
        <IoIosArrowBack
          className="absolute w-20 h-14  top-[32%] -left-16 text-cyan-500 cursor-pointer"
          onClick={handlePrev}
        />
        <IoIosArrowForward
          className="absolute w-20 h-14 top-[32%] -right-16 text-cyan-500 cursor-pointer"
          onClick={handleNext}
        />
      </div>
    );
  }
};

export default Carousel;
