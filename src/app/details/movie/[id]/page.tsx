import { fetchMovieData } from "@/app/api/fetchMovieData";

import TopCast from "../../components/TopCast";
import Similar from "../../components/Similar";
import Recommendations from "../../components/Recommendations";
import Videos from "../../components/Videos";

import { CreditsType, CrewType } from "@/types/cast.types";

import DetailsHero from "../../components/DetailsHero";
import { MovieInfoType } from "@/types/types";
import { VideosType } from "@/types/video.types";
import { DetailsType } from "@/types/details.types";

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
      MovieInfoType,
      MovieInfoType,
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
