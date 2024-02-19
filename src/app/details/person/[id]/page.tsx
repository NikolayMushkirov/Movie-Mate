import Image from "next/image";
import Link from "next/link";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import PersonMovieList from "../../_components/person/PersonMovieList";
import PersonInfo from "../../_components/person/PersonInfo";

import { PersonMovieType, PersonType } from "@/types/person.types";
import PersonBio from "../../_components/person/PersonBio";

type Props = {
  params: {
    id: string;
  };
};

type CombinedCreditsType = {
  cast: PersonMovieType[];
  crew: PersonMovieType[];
};

const PersonDetails = async ({ params: { id } }: Props) => {
  const personData: PersonType = await fetchMovieData(`person/${id}`);
  const combinedCredits: CombinedCreditsType = await fetchMovieData(
    `person/${id}/combined_credits`
  );
  const sortedCombinedCredits = combinedCredits.cast
    ?.flat()
    .sort((a, b): number => {
      const { release_date: aReleaseDate, first_air_date: aFirstAirDate } = a;
      const { release_date: bReleaseDate, first_air_date: bFirstAirDate } = b;

      if (aReleaseDate && bReleaseDate) {
        return (
          Number(bReleaseDate.slice(0, 4)) - Number(aReleaseDate.slice(0, 4))
        );
      }
      if (aFirstAirDate && bFirstAirDate) {
        return (
          Number(bFirstAirDate.slice(0, 4)) - Number(aFirstAirDate.slice(0, 4))
        );
      }
      return 0;
    });
  const { name, biography, profile_path } = personData;
  const paragraphs = biography.split("\n\n");

  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className=" flex gap-16 max-lg:flex-col max-lg:items-center ">
        <div className="flex-shrink-0 overflow-hidden">
          <Link
            href={{
              pathname: `/details/person/${id}/photos`,
              query: { personId: id },
            }}
          >
            <Image
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
              alt="poster"
              width={500}
              height={500}
              className="max-w-[350px] w-full mb-6 rounded-lg"
              priority={true}
            />
          </Link>
          <PersonInfo
            personData={personData}
            knownCredits={combinedCredits.cast.length}
          />
        </div>
        <div className="flex flex-col gap-6 w-[90%]">
          <PersonBio paragraphs={paragraphs} name={name} />
          <PersonMovieList sortedCombinedCredits={sortedCombinedCredits} />
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
