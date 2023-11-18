import Carousel from "@/components/Carousel";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  similar: {
    results: MovieAndTVShowType[];
  };
};

const Similar = ({ similar }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold max-sm:text-center">Similar Movies</h2>
      <Carousel contentData={similar.results} contentName="movie" />
    </div>
  );
};

export default Similar;
