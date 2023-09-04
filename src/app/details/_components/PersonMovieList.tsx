import Link from "next/link";

import { PersonMovieType } from "@/types/person.types";

type Props = {
  combinedCredits: {
    cast: PersonMovieType[];
    crew: PersonMovieType[];
  };
};

const PersonMovieList = ({ combinedCredits }: Props) => {
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

  return (
    <div className="">
      <h2 className="mb-6 text-2xl font-semibold">Filmography</h2>
      <div className="p-4 flex flex-col gap-4 bg-[#0b1d37] shadow-[0px_20px_20px_10px_#0b1d37,0px_3px_8px_0px_#00000024] ">
        {sortedCombinedCredits.map(
          ({ id, release_date, first_air_date, title, name, character }) => (
            <div key={id} className="flex gap-20">
              <span className="w-[5%] text-center text-lg font-semibold">
                {(release_date || first_air_date)?.slice(0, 4) || "—"}
              </span>
              <div className="flex flex-col items-baseline">
                <Link
                  href={
                    title ? `/details/movie/${id}` : `/details/tv-show/${id}`
                  }
                >
                  <span className="text-xl font-semibold hover:text-cyan-500">
                    {title || name}
                  </span>
                </Link>
                <span className="text-lg font-medium">as {character}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default PersonMovieList;
