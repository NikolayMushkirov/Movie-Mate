import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../_components/TopCast";
import Similar from "../../_components/Similar";
import Recommendations from "../../_components/Recommendations";
import Videos from "../../_components/Videos";
import DetailsHero from "../../_components/DetailsHero";

import { CreditsType } from "@/types/cast.types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

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
  ];

  const requests = endpoints.map((endpoint) => fetchMovieData(endpoint));

  const [details, similar, recommendations, credits, videos] =
    (await Promise.all(requests)) as [
      DetailsType,
      MovieAndTVShowType,
      MovieAndTVShowType,
      CreditsType,
      VideosType
    ];

  const creators = details?.created_by?.map((creator) => creator.name);

  return (
    <section className=" mt-24 flex flex-col gap-10">
      <DetailsHero details={details} creators={creators} />
      <Videos videos={videos} />
      <TopCast cast={credits} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default TVDetails;
