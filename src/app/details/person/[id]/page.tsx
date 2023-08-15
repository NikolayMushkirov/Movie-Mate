import { fetchMovieData } from "@/app/api/fetchMovieData";
import { PersonType } from "@/types/person.types";
import Image from "next/image";
import PersonMovieList from "./PersonMovieList";
import { MovieAndTVShowType } from "@/types/types";

import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const PersonDetails = async ({ params: { id } }: Props) => {
  const person: PersonType = await fetchMovieData(`person/${id}`);

  const combinedCredits: MovieAndTVShowType = await fetchMovieData(
    `person/${id}/combined_credits`
  );

  const {
    name,
    biography,
    known_for_department,
    birthday,
    place_of_birth,
    profile_path,
  } = person;

  const paragraphs = biography.split("\n\n");

  return (
    <div className="mt-24 flex flex-col gap-8">
      <div className="flex gap-16">
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
            <span className="font-semibold">More Photos...</span>
          </Link>
        </div>
        <div className=" flex flex-col justify-start gap-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <div>
            <h4 className="mb-2 text-xl font-semibold">Biography</h4>
            <div className="">
              {paragraphs.map((paragraph: string, index: number) => (
                <p className="mb-4 text-lg" key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PersonMovieList combinedCredits={combinedCredits} />
    </div>
  );
};

export default PersonDetails;
