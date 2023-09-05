"use client";

import Link from "next/link";

import { PersonMovieType } from "@/types/person.types";
import InfoPopup from "@/components/popup/InfoPopup";
import usePopup from "@/hooks/usePopup";
import { useState } from "react";

type Props = {
  sortedCombinedCredits: PersonMovieType[];
};
const PersonMovieList = ({ sortedCombinedCredits }: Props) => {
  const { handleOpenPopup, handleClosePopup } = usePopup();
  const [hoveredItem, setHoveredItem] = useState<PersonMovieType | null>(null);

  const handleMouseEnter = (item: PersonMovieType) => {
    setHoveredItem(item);
    handleOpenPopup();
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    handleClosePopup();
  };

  return (
    <div className="">
      <h2 className="mb-6 text-2xl font-semibold">Filmography</h2>
      <div className="p-6 flex flex-col gap-4 bg-second-bg-color shadow-[0px_20px_20px_10px_bg-second-bg-color,0px_3px_8px_0px_#00000024] ">
        {sortedCombinedCredits.map(
          ({
            id,
            release_date,
            first_air_date,
            title,
            name,
            character,
            poster_path,
            vote_average,
            vote_count,
            overview,
          }) => (
            <div key={id} className="flex gap-20">
              <span className="w-[5%] text-center text-lg font-semibold">
                {(release_date || first_air_date)?.slice(0, 4) || "—"}
              </span>
              <div className="relative flex flex-col items-baseline">
                <Link
                  href={
                    title ? `/details/movie/${id}` : `/details/tv-show/${id}`
                  }
                >
                  <span
                    onMouseEnter={() =>
                      handleMouseEnter({
                        id,
                        release_date,
                        first_air_date,
                        title,
                        name,
                        character,
                        poster_path,
                        vote_average,
                        vote_count,
                        overview,
                      })
                    }
                    onMouseLeave={handleMouseLeave}
                    className="text-xl font-semibold hover:text-cyan-500"
                  >
                    {title || name}
                  </span>
                </Link>
                {hoveredItem?.id === id && (
                  <InfoPopup hoveredItem={hoveredItem} />
                )}
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
