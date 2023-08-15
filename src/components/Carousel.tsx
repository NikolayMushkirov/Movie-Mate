"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import MovieCard from "@/components/cards/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import ProfileCard from "./cards/ProfileCard";
import { CastType } from "@/types/cast.types";
import VideoCard from "./cards/VideoCard";
import { VideoType } from "@/types/video.types";
import { MovieAndTVShowType } from "@/types/types";

type Props = {
  data: any;
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
            <MovieCard
              title={movie.title}
              name={movie.name}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              first_air_date={movie.first_air_date}
              id={movie.id}
              genre_ids={movie.genre_ids}
            />
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
        data.cast?.map((movie: MovieAndTVShowType) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title}
              name={movie.name}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              first_air_date={movie.first_air_date}
              id={movie.id}
              genre_ids={movie.genre_ids}
            />
          </SwiperSlide>
        ))}

      {renderData === "video" &&
        data.results?.map((video: VideoType) => (
          <SwiperSlide key={video.id}>
            <VideoCard videoKey={video.key} videoName={video.name} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
