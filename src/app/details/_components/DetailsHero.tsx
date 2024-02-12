import Image from "next/image";

import Genres from "@/components/Genres";
import CircularRating from "@/components/CircularRating";

import WatchTrailer from "./WatchTrailer";

import { DetailsType } from "@/types/details.types";

import placeholder from "../../../assets/no-poster.png";
import { backdropUrl, posterUrl } from "@/app/api/imageUrls";

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
    <section>
      <Image
        src={backdropUrl + backdrop_path}
        alt="backdrop"
        fill={true}
        className="absolute left-0 top-0 -z-30 w-full object-cover  opacity-50"
      />
      <div className="absolute bottom-0 left-0 -z-30 h-full w-full bg-gradient"></div>
      <div className="flex gap-16 max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-center">
        <div className=" flex-shrink-0 overflow-hidden">
          <Image
            src={poster_path ? posterUrl + poster_path : placeholder}
            alt="poster"
            width={500}
            height={300}
            className="w-[400px]  max-md:w-[300px]"
            loading="lazy"
          />
        </div>
        <div className="flex w-full  max-w-2xl flex-col justify-start gap-4  max-lg:items-center">
          <div>
            <h3 className="mb-1 text-4xl  max-lg:text-center max-xsm:text-3xl">
              {name || title}
            </h3>
            <h4 className="text-xl italic text-gray-200 max-lg:text-center max-xsm:text-lg">
              {tagline}{" "}
            </h4>
          </div>

          <Genres genre_ids={genresIds} />

          <div className="flex gap-7 max-lg:flex-col max-lg:items-center max-lg:gap-0 max-xsm:mt-4   max-xsm:gap-2">
            <div className="w-20 max-xsm:self-center">
              <CircularRating vote_average={vote_average} />
            </div>
            <WatchTrailer videoTrailerKey={videoTrailerKey} />
          </div>

          <div className="max-xsm:text- max-xsm:text-center">
            <h3 className="mb-1 text-2xl font-bold max-xsm:text-xl">
              Overview
            </h3>
            <p className="text-lg max-xsm:text-base">{overview}</p>
          </div>

          <div className="flex flex-col gap-5  max-xl:flex-col  ">
            <div className="flex items-center gap-3 text-lg max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
              <p className="  font-bold max-xsm:text-base">Status:</p>
              <span className="font-normal text-gray-200">{status}</span>
            </div>

            <div className="flex items-center gap-3 text-lg  max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
              <p className="whitespace-nowrap text-lg font-bold  max-xsm:text-base">
                Release Date:
              </p>
              <span className="font-normal text-gray-200">
                {release_date || first_air_date}
              </span>
            </div>

            <div className="flex items-center gap-3 text-lg   max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
              <p className=" text-lg font-bold max-xsm:text-base">Runtime:</p>
              <span className="font-normal text-gray-200">{runtime}</span>
            </div>

            {/* </div> */}

            {/* <div className="flex gap-3 max-xsm:flex-col max-xsm:gap-2"> */}
            {/* <div className="flex items-center gap-3 max-lg:flex-col max-xsm:flex-col"> */}

            <div className="flex items-center gap-3 text-lg   max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
              <p className=" text-lg font-bold max-xsm:text-base">Budget:</p>
              <span className="font-normal text-gray-200">
                {budget?.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            {/* </div> */}
            <div className="flex items-center gap-3 text-lg max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
              <p className="text-lg font-bold max-xsm:text-base ">Revenue:</p>
              <span className="font-normal text-gray-200 max-xsm:text-base">
                $
                {revenue?.toLocaleString("en-US", {
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>

            {director ? (
              <div className="flex items-center gap-3 text-lg   max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
                <p className=" text-lg font-bold max-xsm:text-base">
                  Director:
                </p>
                <span className="font-normal text-gray-200">{director}</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-lg   max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
                <p className=" text-lg font-bold max-xsm:text-base">
                  Creators:
                </p>
                <span className="font-normal text-gray-200">
                  {creators?.map((name: string) => name).join(", ")}
                </span>
              </div>
            )}

            {screenWriter && (
              <div className="flex items-center gap-3 text-lg   max-lg:flex-col max-xsm:flex-col max-xsm:gap-2">
                <p className=" text-lg font-bold max-xsm:text-base">
                  Screenwriter:
                </p>
                <span className="font-normal text-gray-200">
                  {screenWriter}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
