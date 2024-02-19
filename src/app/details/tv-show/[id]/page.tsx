import Link from "next/link";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../_components/movieAndTV/TopCast";
import Similar from "../../_components/movieAndTV/Similar";
import Recommendations from "../../_components/movieAndTV/Recommendations";
import Videos from "../../_components/movieAndTV/Videos";
import DetailsHero from "../../_components/movieAndTV/detailsHero";
import Review from "../../_components/movieAndTV/Review";

import { CreditsType } from "@/types/cast.types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";
import { MovieAndTVShowResultsType } from "@/types/movieAndTV.types";
import { ReviewsType } from "@/types/reviews.types";


type Props = {
  params: {
    id: string;
  };
};

const TVDetails = async ({ params: { id } }: Props) => {
  const endpoints: string[] = [
    `tv/${id}`,
    `tv/${id}/similar`,
    `tv/${id}/recommendations`,
    `tv/${id}/credits`,
    `tv/${id}/videos`,
    `tv/${id}/reviews`,
  ];

  const requests = endpoints.map((endpoint) => fetchMovieData(endpoint));

  const [details, similar, recommendations, credits, videos, reviews] =
    (await Promise.all(requests)) as [
      DetailsType,
      MovieAndTVShowResultsType,
      MovieAndTVShowResultsType,
      CreditsType,
      VideosType,
      ReviewsType
    ];

  const creators = details?.created_by?.map((creator) => creator.name);

  const videoTrailerKey = videos.results.find(
    (video) => video.name === "Main Trailer" || video.type === "Trailer"
  )?.key;


  return (
    <section className=" mt-24 flex flex-col gap-10">
      <DetailsHero
        details={details}
        creators={creators}
        videoTrailerKey={videoTrailerKey}
      />
      <>
        <h2 className=" text-2xl font-bold max-sm:text-center">Reviews</h2>
        {reviews.results.length ? (
          <Link href={`/details/reviews/${id}`}>
            <Review reviewInfo={reviews.results[0]} />
          </Link>
        ) : (
          <p className="text-lg">No Reviews</p>
        )}
      </>
      <Videos videos={videos} />
      <TopCast cast={credits} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default TVDetails;
