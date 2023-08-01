import Image from "next/image";

import CircularRating from "@/components/CircularRating";

import { getMovieDetailsData } from "@/app/api/getMoviesData";

import { MovieDetailsType } from "@/types/types";
import PlayIcon from "@/components/PlayIcon";

type Props = {
  params: {
    id: string;
  };
};

const Details = async ({ params: { id } }: Props) => {
  const movieDetailsData = await Promise.resolve(getMovieDetailsData(id));
  const {
    poster_path,
    title,
    tagline,
    vote_average,
    overview,
  }: MovieDetailsType = movieDetailsData;

  const customStyles = {
    backgroundColor: "transparent",
    textColor: "white",
    textSize: "2.3rem",
    pathColor: vote_average < 5 ? "red" : vote_average < 7 ? "orange" : "green",
  };

  return (
    <div className="mt-24">
      <div className="flex gap-16">
        <Image
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          width={500}
          height={500}
        />
        <div>
          <h3 className="text-4xl">{title}</h3>
          <h4 className="text-xl text-gray-400 italic">{tagline} </h4>
          <div className="flex gap-7">
            <div className="w-20">
              <CircularRating
                rating={vote_average}
                customStyles={customStyles}
              />
            </div>
            <PlayIcon />
          </div>
          <div>
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>

          <span>Status: </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
