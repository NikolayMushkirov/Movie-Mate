import Carousel from "@/components/Carousel";
import { CastType } from "@/types/cast.types";

type Props = {
  cast: CastType;
};

const TopCast = ({ cast }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Top Cast</h2>
      <Carousel data={cast} />
    </div>
  );
};

export default TopCast;
