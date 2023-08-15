import Carousel from "@/components/Carousel";

import { MovieInfoType } from "@/types/types";

type Props = { combinedCredits: MovieInfoType };

const PersonMovieList = ({ combinedCredits }: Props) => {
  return (
    <div className="">
      <h2 className="mb-6 text-2xl">Movie List</h2>
      <Carousel data={combinedCredits} renderData="personMovies" />
    </div>
  );
};

export default PersonMovieList;
