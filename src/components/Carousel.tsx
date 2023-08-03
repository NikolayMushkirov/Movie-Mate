"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import MovieCard from "@/components/cards/MovieCard";

import {  MovieInfoType } from "@/types/types";

import "swiper/css";
import "swiper/css/navigation";
import ProfileCard from "./cards/ProfileCard";
import { CastType } from "@/types/cast.types";

type Props = {
  data: any;
};

const Carousel = ({ data }: Props) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={25}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {data?.results && data.results.map((movie : MovieInfoType) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
            id={movie.id}
          />
        </SwiperSlide>
      ))}

      {data?.cast && data.cast.map((actor : CastType) => (
        <SwiperSlide key={actor.id}>
        <ProfileCard
          name={actor.name}
          character={actor.character}
          profile_path = {actor.profile_path}
        />
      </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
