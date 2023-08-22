import Image from "next/image";
import Link from "next/link";

import { fetchMovieData } from "@/app/api/fetchMovieData";

import PersonMovieList from "../../_components/PersonMovieList";
import PersonInfo from "../../_components/PersonInfo";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";
import { PersonType } from "@/types/person.types";

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
  const person: PersonType = await fetchMovieData(`person/${id}`);

  const combinedCredits: CombinedCreditsType = await fetchMovieData(
    `person/${id}/combined_credits`
  );

  const { name, biography, profile_path } = person;

  const paragraphs = biography.split("\n\n");

  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className=" flex gap-16">
        <div className="flex-shrink-0 overflow-hidden">
          <Link
            href={{
              pathname: `/details/person/${id}/images`,
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
            <span className="font-semibold text-xl">View all photos</span>
          </Link>
        </div>
        <PersonInfo paragraphs={paragraphs} name={name} />
      </div>

      <PersonMovieList combinedCredits={combinedCredits} />
    </div>
  );
};

export default PersonDetails;
