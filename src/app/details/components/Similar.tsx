import Carousel from "@/components/Carousel";
import { MovieAndTVShowType } from "@/types/types";


type Props = {
  similar : MovieAndTVShowType
};

const Similar = ({similar}: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Similar Movies</h2>
      <Carousel data={similar} renderData = 'movie'/>
    </div>
  );
};

export default Similar;
