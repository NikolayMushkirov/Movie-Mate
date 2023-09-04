import Image from "next/image";
import Link from "next/link";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import PersonMovieList from "../../_components/PersonMovieList";
import PersonInfo from "../../_components/PersonInfo";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import { PersonType } from "@/types/person.types";
import PersonBio from "../../_components/PersonBio";

type Props = {
  params: {
    id: string;
  };
};

type CombinedCreditsType = {
  cast: MovieAndTVShowType[];
  crew: MovieAndTVShowType[];
};

const PersonDetails = async ({ params: { id } }: Props) => {
  const personData: PersonType = await fetchMovieData(`person/${id}`);

  const combinedCredits: CombinedCreditsType = await fetchMovieData(
    `person/${id}/combined_credits`
  );

  const { name, biography, profile_path } = personData;

  const paragraphs = biography.split("\n\n");

  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className=" flex gap-16">
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
          <PersonMovieList combinedCredits={combinedCredits} />
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
