import Image from "next/image";
import Link from "next/link";

import CircularRating from "../CircularRating";
import Genres from "../Genres";

import placeholder from "../../assets/no-poster.png";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import { posterUrl } from "@/app/api/tmdb.constants";

type Props = {
  data: MovieAndTVShowType;
};

const MovieCard = ({ data }: Props) => {
  const {
    name,
    title,
    poster_path,
    vote_average,
    release_date,
    first_air_date,
    id,
    genre_ids,
  } = data;

  return (
    <Link href={title ? `/details/movie/${id}` : `/details/tv-show/${id}`}>
      <div className="group relative flex flex-col max-sm:items-center ">
        <Image
          src={poster_path ? posterUrl + poster_path : placeholder}
          width={342}
          height={300}
          alt="Poster"
          loading="lazy"
          className="min-h-[340px] w-auto  shadow-2xl  transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl  group-hover:shadow-cyan-500 max-xsm:h-[200px] "
          onLoad={(img) => img.currentTarget.classList.remove("opacity-0")}
        />

        <div>
          <div className="relative -top-7 left-2 w-14 max-sm:left-1/3 max-sm:-translate-x-[20%]">
            <CircularRating vote_average={vote_average} />
          </div>
          <div className="relative -top-4 ">
            <Genres genres={genre_ids} />
          </div>
        </div>
        <div className="justify-self-start max-sm:flex max-sm:flex-col  max-sm:text-center">
          <h3 className="mb-1 text-lg font-bold  transition-all duration-300 group-hover:text-cyan-500">
            {title || name}
          </h3>
          <p className="font-medium ">
            {(release_date && new Date(release_date).toLocaleDateString()) ||
              (first_air_date && new Date(first_air_date).toLocaleDateString())}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
