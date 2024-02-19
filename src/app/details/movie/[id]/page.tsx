import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../_components/movieAndTV/TopCast";
import Similar from "../../_components/movieAndTV/Similar";
import Recommendations from "../../_components/movieAndTV/Recommendations";
import Videos from "../../_components/movieAndTV/Videos";
import DetailsHero from "../../_components/movieAndTV/detailsHero";

import { CreditsType } from "@/types/cast.types";
import { MovieAndTVShowResultsType } from "@/types/movieAndTV.types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";
import { ReviewsType } from "@/types/reviews.types";
import PreviewReview from "../../_components/movieAndTV/PreviewReview";

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
    `movie/${id}/reviews`,
  ];

  const requests = endpoints.map((endpoint) => fetchMovieData(endpoint));

  const [details, similar, recommendations, credits, videos, reviews] =
    (await Promise.all(requests)) as [
      DetailsType,
      MovieAndTVShowResultsType,
      MovieAndTVShowResultsType,
      CreditsType,
      VideosType,
      ReviewsType,
    ];

  const director = credits.crew
    .reduce((acc: string[], item) => {
      if (item.job === "Director") {
        acc.push(item.name);
      }
      return acc;
    }, [])
    .join(", ");

  const screenWriter = credits.crew
    .reduce((acc: string[], item) => {
      if (item.job === "Screenplay" || item.job === "Writer") {
        acc.push(item.name);
      }
      return acc;
    }, [])
    .slice(0, 2)
    .join(", ");

  const videoTrailerKey = videos.results.find(
    (video) => video.name === "Main Trailer" || video.type === "Trailer",
  )?.key;

  return (
    <section className="mt-24 flex flex-col gap-10 max-lg:gap-6">
      <DetailsHero
        details={details}
        director={director}
        screenWriter={screenWriter}
        videoTrailerKey={videoTrailerKey}
      />
      <TopCast cast={credits} />
      <PreviewReview reviews={reviews} id={id} />
      <Videos videos={videos} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default MovieDetails;
