import Carousel from "@/components/Carousel";
import { MovieDataType } from "@/types/types";

type Props = {
  similar : MovieDataType
};

const Similar = ({similar}: Props) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl">Similar Movies</h2>
      <Carousel data={similar} />
    </div>
  );
};

export default Similar;
