import Image from "next/image";
import PlayIcon from "@/components/playIcons/PlayIcon";
import Genres from "@/components/Genres";
import CircularRating from "@/components/CircularRating";
import { DetailsType } from "@/types/details.types";

type Props = {
  details: DetailsType;
  director?: string;
  screenWriter?: string;
  creators?: string[];
};

const DetailsHero = ({ details, director, screenWriter, creators }: Props) => {
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
    episode_run_time,
    genres,
  } = details;

  const genresIds = genres?.map((genre) => genre.id);

  return (
    <>
      <div
        className="-z-30 absolute w-full min-h-full  top-0 left-0  bg-cover bg-no-repeat bg-center opacity-50"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
        }}
      ></div>
      <div className="-z-30 absolute bottom-0 left-0 h-full w-full bg-gradient"></div>
      <div className="flex gap-16">
        <div className="flex-shrink-0 overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="poster"
            width={500}
            height={500}
            className="max-w-[350px] w-full "
            loading="lazy"
          />
        </div>
        <div className="max-w-2xl flex flex-col justify-start gap-4">
          <div>
            <h3 className="text-4xl mb-1">{name || title}</h3>
            <h4 className="text-xl text-gray-200 italic">{tagline} </h4>
          </div>
          <div>
            <Genres genre_ids={genresIds} />
          </div>
          <div className="flex gap-7">
            <div className="w-20">
              <CircularRating
                rating={vote_average}
                vote_average={vote_average}
              />
            </div>
            <div className="play-icon-box flex items-center gap-5 cursor-pointer  hover:text-sky-300">
              <PlayIcon />
              <span className="text-xl transition-all ease-in-out duration-700">
                Watch Trailer
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl mb-1">Overview</h3>
            <p className="text-lg">{overview}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              <p className="flex items-center gap-3 font-bold text-lg">
                Status:
                <span className="font-normal text-gray-200">{status}</span>
              </p>
              <p className="flex items-center gap-3 font-bold text-lg">
                Release Date:
                <span className="font-normal text-gray-200">
                  {release_date || first_air_date}
                </span>
              </p>

              <p className="flex items-center gap-3 font-bold text-lg">
                Runtime:
                <span className="font-normal text-gray-200">
                  {runtime || episode_run_time[0]}
                </span>
              </p>
            </div>

            {director ? (
              <p className="flex  gap-3 font-bold text-lg">
                Director:
                <span className="font-normal text-gray-200">{director}</span>
              </p>
            ) : (
              <p className="flex  gap-3 font-bold text-lg">
                Creators:
                <span className="font-normal text-gray-200">
                  {creators?.map((name: string) => name).join(", ")}
                </span>
              </p>
            )}
            {screenWriter && (
              <p className="flex gap-3 font-bold text-lg">
                Screenwriter:
                <span className="font-normal text-gray-200">
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
