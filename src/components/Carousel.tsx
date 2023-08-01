"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { MovieData } from "@/types/types";

type Props = {
  movieData: MovieData;
};

const Carousel = ({ movieData }: Props) => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={30}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
    >
      {movieData.results.map((movie) => (
        <SwiperSlide key={movie.id} style={{ width: "15%" }}>
          <Link href={`/details/${movie.id}`}>
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
