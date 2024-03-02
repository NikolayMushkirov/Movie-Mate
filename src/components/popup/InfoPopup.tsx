import Image from "next/image";

import CircularRating from "../CircularRating";

import placeholder from "../../assets/no-poster.png";

import { PersonMovieType } from "@/types/person.types";

type Props = {
  hoveredItem: PersonMovieType;
};

const InfoPopup = ({ hoveredItem }: Props) => {
  return (
    <div className="absolute -left-96 -top-80 z-20 flex  h-[300px] w-[700px]  gap-6 bg-cyan-800 p-4 max-lg:-left-32 max-lg:w-[550px] max-md:hidden">
      <Image
        width={185}
        height={100}
        src={
          hoveredItem?.poster_path
            ? `https://image.tmdb.org/t/p/w185${hoveredItem.poster_path}`
            : placeholder
        }
        alt="poster"
      />
      <div className="flex flex-col justify-between gap-3">
        <h2 className="text-xl font-semibold">
          {hoveredItem?.title || hoveredItem.name}
        </h2>
        <p className="overflow-hidden text-ellipsis text-lg font-medium leading-8">
          {hoveredItem?.overview}
        </p>
        <div className="w-16">
          <CircularRating vote_average={hoveredItem.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
