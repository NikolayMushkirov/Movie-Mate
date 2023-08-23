"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import MovieCard from "@/components/cards/MovieCard";
import ProfileCard from "./cards/ProfileCard";

import { CastType } from "@/types/cast.types";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type DataPropsType = {
  results: MovieAndTVShowType[];
  cast?: CastType[];
};

type Props = {
  data: DataPropsType  ;
  renderData: string;
};

const Carousel = ({ data, renderData }: Props) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={25}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="cursor-pointer"
    >
      {renderData === "movie" &&
        data.results?.map((movie: MovieAndTVShowType) => (
          <SwiperSlide key={movie.id}>
            <MovieCard data={movie} />
          </SwiperSlide>
        ))}

      {renderData === "cast" &&
        data.cast.map((actor: CastType) => (
          <SwiperSlide key={actor.id}>
            <ProfileCard
              name={actor.name}
              character={actor.character}
              profile_path={actor.profile_path}
              id={actor.id}
            />
          </SwiperSlide>
        ))}

      {renderData === "personMovies" &&
        data?.map((movie: MovieAndTVShowType) => (
          <SwiperSlide key={movie.id}>
            <MovieCard data={movie} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
