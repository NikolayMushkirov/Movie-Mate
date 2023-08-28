import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../_components/TopCast";
import Similar from "../../_components/Similar";
import Recommendations from "../../_components/Recommendations";
import Videos from "../../_components/Videos";
import DetailsHero from "../../_components/DetailsHero";

import { CreditsType, CrewType } from "@/types/cast.types";
import { MovieAndTVShowResultsType } from "@/types/movieAndTV.types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";

type Props = {
  params: {
    id: string;
  };
};

const MovieDetails = async ({ params: { id } }: Props) => {
  const endpoints: string[] = [
    `movie/${id}`,
    `movie/${id}/similar`,
    `movie/${id}/recommendations`,
    `movie/${id}/credits`,
    `movie/${id}/videos`,
  ];

  const requests = endpoints.map((endpoint) => fetchMovieData(endpoint));

  const [details, similar, recommendations, credits, videos] =
    (await Promise.all(requests)) as [
      DetailsType,
      MovieAndTVShowResultsType,
      MovieAndTVShowResultsType,
      CreditsType,
      VideosType
    ];

  const director = credits.crew
    .filter((item: CrewType) => item.job === "Director")
    .map((field: CrewType) => field.name)
    .join(", ");

  const screenWriter = credits.crew
    .filter(
      (item: CrewType) => item.job === "Screenplay" || item.job === "Writer"
    )
    .map((field: CrewType) => field.name)
    .join(", ");

  const videoTrailerKey = videos.results.find(
    (video) => video.name === "Main Trailer" || video.type === "Trailer"
  )?.key;

  return (
    <section className=" mt-24 flex flex-col gap-10">
      <DetailsHero
        details={details}
        director={director}
        screenWriter={screenWriter}
        videoTrailerKey={videoTrailerKey}
      />
      <Videos videos={videos} />
      <TopCast cast={credits} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default MovieDetails;
