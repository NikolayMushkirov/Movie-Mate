import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
    movieSimilar : MovieDataType
};

const Similar = ({movieSimilar}: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Similar Movies</h2>
      <Carousel data={movieSimilar} />
    </div>
  );
};

export default Similar;
