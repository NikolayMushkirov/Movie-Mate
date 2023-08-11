"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import MovieCard from "@/components/cards/MovieCard";

import { MovieInfoType } from "@/types/types";

import "swiper/css";
import "swiper/css/navigation";
import ProfileCard from "./cards/ProfileCard";
import { CastType } from "@/types/cast.types";
import VideoCard from "./cards/VideoCard";
import { VideoType } from "@/types/video.types";

type Props = {
  data: any;
};

const Carousel = ({ data }: Props) => {
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
      {data?.results &&
        data.results.map((movie: MovieInfoType) => (
          <SwiperSlide key={movie.id}>
            <MovieCard
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              release_date={movie.release_date}
              id={movie.id}
              genre_ids={movie.genre_ids}
            />
          </SwiperSlide>
        ))}

      {data?.cast &&
        data.cast.map((actor: CastType) => (
          <SwiperSlide key={actor.id}>
            <ProfileCard
              name={actor.name}
              character={actor.character}
              profile_path={actor.profile_path}
            />
          </SwiperSlide>
        ))}

      {data?.videos &&
        data.videos.map((video : VideoType) => (
          <SwiperSlide key={video.id}>
            <VideoCard videoKey={video.key} videoName={video.name} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Carousel;
