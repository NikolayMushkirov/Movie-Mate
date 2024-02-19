import MovieSlider from "@/components/sliders/MovieSlider";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  similar: {
    results: MovieAndTVShowType[];
  };
};

const Similar = ({ similar }: Props) => {
  if (!similar.results.length) {
    return null;
  }
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold max-lg:text-center max-xsm:text-xl">
        Similar Movies
      </h2>
      <MovieSlider contentData={similar.results} />
    </div>
  );
};

export default Similar;
