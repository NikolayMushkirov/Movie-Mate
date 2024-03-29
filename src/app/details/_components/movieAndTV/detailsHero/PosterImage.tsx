import Image from "next/image";

import placeholder from "@/assets/no-poster.png";
import { posterUrl } from "@/app/api/tmdb.constants";
export const PosterImage = ({ posterPath }: { posterPath?: string }) => {
  return (
    <div className="flex-shrink-0 overflow-hidden">
      <Image
        src={posterPath ? posterUrl + posterPath : placeholder}
        alt="poster"
        width={500}
        height={300}
        className="w-[400px]  max-md:w-[300px]"
        priority={true}
      />
    </div>
  );
};
