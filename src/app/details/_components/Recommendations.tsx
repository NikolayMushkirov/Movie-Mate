import Carousel from "@/components/Carousel";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  recommendations: { results: MovieAndTVShowType[] };
};

const Recommendations = ({ recommendations }: Props) => {
  console.log(recommendations, "recomend");
  return (
    <div>
      <h2 className="mb-6 text-2xl">Recommendations</h2>
      <Carousel contentData={recommendations.results} contentName="movie" />
    </div>
  );
};

export default Recommendations;
