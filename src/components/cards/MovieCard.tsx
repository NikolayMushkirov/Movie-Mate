import Image from "next/image";
import Link from "next/link";

import CircularRating from "../CircularRating";
import Genres from "../Genres";

import placeholder from "../../assets/no-poster.png";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";

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
      <div className="flex flex-col relative max-sm:items-center">
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342${poster_path}`
              : placeholder
          }
          width={342}
          height={300}
          alt="Poster"
          loading="lazy"
          className="w-full min-h-[340px]   max-sm:w-[250px]   "
          onLoad={(img) => img.currentTarget.classList.remove("opacity-0")}
        />

        <div>
          <div className="w-14 relative -top-7 left-2 max-sm:left-8">
            <CircularRating vote_average={vote_average} />
          </div>
          <div className="relative -top-4 ">
            <Genres genre_ids={genre_ids} />
          </div>
        </div>
        <div className="justify-self-start max-sm:flex max-sm:flex-col max-sm:items-center">
          <h3 className="text-xl font-bold">{title || name}</h3>
          <p>{release_date || first_air_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
