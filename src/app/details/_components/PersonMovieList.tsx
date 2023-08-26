import Carousel from "@/components/Carousel";

import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  combinedCredits: {
    cast: MovieAndTVShowType[];
    crew: MovieAndTVShowType[];
  };
};

const PersonMovieList = ({ combinedCredits }: Props) => {
  const sortedCombinedCredits = combinedCredits.cast?.sort(
    (a, b) => b.vote_count - a.vote_count
  );

  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Movie List</h2>
      <Carousel contentData={sortedCombinedCredits} contentName="movie" />
    </div>
  );
};

export default PersonMovieList;
