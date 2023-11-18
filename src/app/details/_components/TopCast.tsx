import Carousel from "@/components/Carousel";
import { CastType } from "@/types/cast.types";

type Props = {
  cast: {
    cast: CastType[];
  };
};

const TopCast = ({ cast }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold max-sm:text-center">Top Cast</h2>
      <Carousel contentData={cast.cast} contentName="cast" />
    </div>
  );
};

export default TopCast;
