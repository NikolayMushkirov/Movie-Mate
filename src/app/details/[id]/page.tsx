import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "./TopCast";
import Similar from "./Similar";
import Recommendations from "./Recommendations";
import Videos from "./Videos";

import { CreditsType, CrewType } from "@/types/cast.types";

import DetailsHero from "./DetailsHero";
import { DetailsType, MovieDataType } from "@/types/types";
import { VideosType } from "@/types/video.types";

type Props = {
  params: {
    id: string;
  };
};

const Details = async ({ params: { id } }: Props) => {
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
      MovieDataType,
      MovieDataType,
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

  return (
    <section className=" mt-24 flex flex-col gap-10">
      <DetailsHero
        details={details}
        director={director}
        screenWriter={screenWriter}
      />
      <Videos videos={videos} />
      <TopCast cast={credits} />
      <Similar similar={similar} />
      <Recommendations recommendations={recommendations} />
    </section>
  );
};

export default Details;
