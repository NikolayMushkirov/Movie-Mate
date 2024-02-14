import Image from "next/image";

import Genres from "@/components/Genres";

import { backdropUrl } from "@/app/api/imageUrls";

import { PosterImage } from "./PosterImage";
import { RatingAndTrailer } from "./RatingAndTrailer";
import { Title } from "./Title";
import { Overview } from "./Overview";
import { DetailsGrid } from "./DetailsGrid";

import { DetailsType } from "@/types/details.types";

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
  return (
    <section>
      <Image
        src={backdropUrl + details.backdrop_path}
        alt="backdrop"
        fill={true}
        loading="lazy"
        className="absolute left-0 top-0 -z-30 w-full object-cover  opacity-50"
      />
      <div className="absolute bottom-0 left-0 -z-30 h-full w-full bg-gradient"></div>
      <div className="flex gap-16 max-lg:flex-col max-lg:items-center max-lg:gap-6 max-lg:text-center">
        <PosterImage posterPath={details.poster_path} />
        <div className="flex w-full  max-w-2xl flex-col justify-start gap-4  max-lg:items-center">
          <Title
            name={details.name}
            tagline={details.tagline}
            title={details.title}
          />
          <Genres genres={details.genres} />
          <RatingAndTrailer
            videoTrailerKey={videoTrailerKey}
            voteAverage={details.vote_average}
          />
          <Overview overview={details.overview} />
          <DetailsGrid
            status={details.status}
            releaseDate={details.release_date || details.first_air_date}
            numberOfSeasons={details.number_of_seasons}
            numberOfEpisodes={details.number_of_episodes}
            runtime={details.runtime}
            episodeRunTime={details.episode_run_time}
            originalLanguage={details.original_language.toUpperCase()}
            budget={details.budget}
            revenue={details.revenue}
            director={director}
            creators={creators}
            screenWriter={screenWriter}
          />

        </div>
      </div>
    </section>
  );
};

export default DetailsHero;
