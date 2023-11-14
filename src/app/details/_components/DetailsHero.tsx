import Image from "next/image";

import Genres from "@/components/Genres";
import CircularRating from "@/components/CircularRating";

import WatchTrailer from "./WatchTrailer";

import placeholder from "../../../assets/no-poster.png";

import { DetailsType } from "@/types/details.types";

import { fetchBackImage } from "@/app/api/fetchBackImage";

type Props = {
  details: DetailsType;
  director?: string;
  screenWriter?: string;
  creators?: string[];
  videoTrailerKey?: string;
};

const DetailsHero = ({
  details,
  director,
  screenWriter,
  creators,
  videoTrailerKey,
}: Props) => {
  const {
    poster_path,
    backdrop_path,
    title,
    name,
    tagline,
    vote_average,
    overview,
    release_date,
    first_air_date,
    status,
    runtime,
    genres,
    budget,
    revenue,
  } = details;

  const genresIds = genres?.map((genre) => genre.id);

  return (
    <>
      <div
        className="-z-30 absolute w-full min-h-full  top-0 left-0  bg-cover bg-no-repeat bg-center opacity-50"
        style={{
          backgroundImage: `url(${fetchBackImage(backdrop_path)})`,
        }}
      ></div>
      <div className="-z-30 absolute bottom-0 left-0 h-full w-full bg-gradient"></div>
      <div className="flex gap-16 max-lg:gap-6 max-lg:flex-col max-lg:items-center">
        <div className=" flex-shrink-0 overflow-hidden">
          <Image
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : placeholder
            }
            alt="poster"
            width={500}
            height={300}
            className="w-[400px]  max-md:w-[300px]"
            loading="lazy"
          />
        </div>
        <div className="max-w-2xl w-full  flex flex-col justify-start gap-4  max-lg:items-center">
          <div>
            <h3 className="text-4xl mb-1  max-lg:text-center max-xsm:text-3xl" >
              {name || title}
            </h3>
            <h4 className="text-xl text-gray-200 italic max-lg:text-center max-xsm:text-lg">
              {tagline}{" "}
            </h4>
          </div>
          <div>
            <Genres genre_ids={genresIds} />
          </div>
          <div className="flex gap-7 max-xsm:flex-col  max-xsm:mt-4 max-xsm:gap-2">
            <div className="w-20 max-xsm:self-center">
              <CircularRating vote_average={vote_average} />
            </div>
            <WatchTrailer videoTrailerKey={videoTrailerKey} />
          </div>
          <div className="max-xsm:text-center max-xsm:text-">
            <h3 className="text-2xl mb-1 max-xsm:text-xl">Overview</h3>
            <p className="text-lg max-xsm:text-base">{overview}</p>
          </div>
          <div className="flex flex-col gap-4 max-lg:self-start max-xsm:self-center">
            <div className="flex gap-5 max-xl:flex-col">
              <p className="flex items-center gap-3 font-bold text-lg max-xsm:text-base max-xsm:flex-col max-xsm:gap-2">
                Status:
                <span className="font-normal text-gray-200">{status}</span>
              </p>
              <p className="flex items-center gap-3 font-bold text-lg whitespace-nowrap max-xsm:text-base max-xsm:flex-col max-xsm:gap-2">
                Release Date:
                <span className="font-normal text-gray-200">
                  {release_date || first_air_date}
                </span>
              </p>

              <p className="flex items-center gap-3 font-bold text-lg max-xsm:text-base max-xsm:flex-col max-xsm:gap-2">
                Runtime:
                <span className="font-normal text-gray-200">{runtime}</span>
              </p>
            </div>

            <div className="flex gap-3 max-xsm:flex-col max-xsm:gap-2">
              <div className="flex items-center gap-3 max-xsm:flex-col">
                <p className="font-bold text-lg max-xsm:text-base ">Budget</p>
                <span className="font-normal text-gray-200 max-xsm:text-base">
                  $
                  {budget?.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex items-center gap-3 max-xsm:flex-col max-xsm:gap-2">
                <p className="font-bold text-lg max-xsm:text-base ">Revenue</p>
                <span className="font-normal text-gray-200 max-xsm:text-base">
                  $
                  {revenue?.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>

            {director ? (
              <p className="flex gap-3 font-bold text-lg max-xsm:text-base max-xsm:flex-col max-xsm:text-center max-xsm:gap-2">
                Director:
                <span className="font-normal text-gray-200 max-xsm:text-base">{director}</span>
              </p>
            ) : (
              <p className="flex  gap-3 font-bold text-lg max-xsm:text-base max-xsm:flex-col max-xsm:text-center max-xsm:gap-2">
                Creators:
                <span className="font-normal text-gray-200 max-xsm:text-base">
                  {creators?.map((name: string) => name).join(", ")}
                </span>
              </p>
            )}
            {screenWriter && (
              <p className="flex gap-3 font-bold text-lg max-xsm:text-base max-xsm:flex-col max-xsm:text-center max-xsm:gap-2">
                Screenwriter:
                <span className="font-normal text-gray-200 max-xsm:text-base">
                  {screenWriter}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsHero;
