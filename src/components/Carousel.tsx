"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import MovieCard from "./MovieCard";

type Props = {
  movieData: {
    results: Array<{
      id: number;
      title: string;
      poster_path: string;
      vote_average: number;
      release_date: string;
    }>;
  };
};

const Carousel = ({ movieData }: Props) => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={0}
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {movieData.results.map((movie) => (
        <SwiperSlide key={movie.id} style={{width:'15%'}}>
          <MovieCard
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            release_date={movie.release_date}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
