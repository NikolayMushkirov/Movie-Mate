import Carousel from "@/components/Carousel";
import { MovieAndTVShowType } from "@/types/movieAndTV.types";

type Props = {
  recommendations: MovieAndTVShowType;
};

const Recommendations = ({ recommendations }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Recommendations</h2>
      <Carousel data={recommendations} renderData = 'movie'/>
    </div>
  );
};

export default Recommendations;
