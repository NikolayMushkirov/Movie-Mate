import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "./TopCast";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import Videos from "./Videos";

import { CrewType } from "@/types/cast.types";

import DetailsHero from "./DetailsHero";

type Props = {
  params: {
    id: string;
  };
};

const Details = async ({ params: { id } }: Props) => {
  const endpoints = [
    `movie/${id}`,
    `movie/${id}/similar`,
    `movie/${id}/recommendations`,
    `movie/${id}/credits`,
    `movie/${id}/videos`,
  ];

  const requests = endpoints.map((endpoint) => fetchMovieData(endpoint));

  const [details, similar, recommendations, credits, videos] =
    await Promise.all(requests);

  videos.videos = videos.results;
  delete videos.results;

  const director = credits.crew
    .filter((item: CrewType) => item.job === "Director")
    .map((field: CrewType) => field.name)
    .join(", ");

  const writer = credits.crew
    .filter((item: CrewType) => item.job === "Writer")
    .map((field: CrewType) => field.name)
    .join(", ");

  return (
    <section className=" mt-24 flex flex-col gap-10">
      <DetailsHero details={details} director={director} writer={writer} />
      <Videos videos={videos} />
      <TopCast cast={credits} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default Details;
