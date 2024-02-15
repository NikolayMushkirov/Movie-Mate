
import MovieSlider from "@/components/sliders/MovieSlider";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  recommendations: { results: MovieAndTVShowType[] };
};

const Recommendations = ({ recommendations }: Props) => {
  if (!recommendations.results.length) {
    return null;
  }
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold max-sm:text-center">Recommendations</h2>
      <MovieSlider contentData={recommendations.results}/>
    </div>
  );
};

export default Recommendations;
