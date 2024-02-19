import CastSlider from "@/components/sliders/CastSlider";
import { CastType } from "@/types/cast.types";

type Props = {
  cast: {
    cast: CastType[];
  };
};

const TopCast = ({ cast }: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold max-lg:text-center max-xsm:text-xl">
        Top Cast
      </h2>
      <CastSlider contentData={cast.cast} />
    </div>
  );
};

export default TopCast;
