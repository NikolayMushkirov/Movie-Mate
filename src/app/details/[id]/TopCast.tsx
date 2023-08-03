import Carousel from "@/components/Carousel";
import { CastType } from "@/types/cast.types";

type Props = {
    movieCast : CastType
};

const TopCast = ({movieCast}: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Top Cast</h2>
      <Carousel data={movieCast} />
    </div>
  );
};

export default TopCast;
