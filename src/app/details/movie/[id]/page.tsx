import Link from "next/link";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../_components/TopCast";
import Similar from "../../_components/Similar";
import Recommendations from "../../_components/Recommendations";
import Videos from "../../_components/Videos";
import DetailsHero from "../../_components/DetailsHero";
import Review from "../../_components/Review";

import { CreditsType } from "@/types/cast.types";
import { MovieAndTVShowResultsType } from "@/types/movieAndTV.types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";
import { ReviewsType } from "@/types/reviews.types";

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
    .join(", ");

  const videoTrailerKey = videos.results.find(
    (video) => video.name === "Main Trailer" || video.type === "Trailer",
  )?.key;

  return (
    <section className="mt-24 flex flex-col gap-10 ">
      <DetailsHero
        details={details}
        director={director}
        screenWriter={screenWriter}
        videoTrailerKey={videoTrailerKey}
      />
      <TopCast cast={credits} />
      <>
        <h2 className=" text-2xl font-bold max-sm:text-center ">Reviews</h2>
        {reviews.results.length ? (
          <Link href={`/details/reviews/${id}`}>
            <Review reviewInfo={reviews.results[0]} />
          </Link>
        ) : (
          <p className="text-lg">No Reviews</p>
        )}
      </>
      <Videos videos={videos} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default MovieDetails;
