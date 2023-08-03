import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
  movieRecomend: MovieDataType;
};

const Recommendations = ({ movieRecomend }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Recommendations</h2>
      <Carousel data={movieRecomend} />
    </div>
  );
};

export default Recommendations;
